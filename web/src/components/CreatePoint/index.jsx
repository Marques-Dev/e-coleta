import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import Button from '../Global/Button';

import Data from './Data';
import Address from './Address';
import Dropzone from '../Dropzone';
import Items from './Items';

const Form = () => {
    const history = useHistory();

    const [ufs, setUfs] = useState([]);
    const [selectedUf, setSelectedUf] = useState('0');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('0');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
    });

    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedFile, setSelectedFile] = useState();

    const [initialMapPosition, setInitialMapPosition] = useState([0, 0]);
    const [selectedMapPosition, setSelectedMapPosition] = useState([0, 0]);

    const handleSelectedUf = ({ target: { value } }) => setSelectedUf(value);
    const handleSelectedCity = ({ target: { value } }) => setSelectedCity(value);

    const handleMapClick = ({ latlng: { lat, lng } }) => setSelectedMapPosition([lat, lng]);

    const handleInputChange = ({ target: { name, value } }) => setFormData({ ...formData, [name]: value });

    const handleSelectedItem = (id) => {
        const alreadySelected = selectedItems.findIndex(item => item === id);

        if (alreadySelected >= 0) {
            const filteredItems = selectedItems.filter(item => item !== id);

            setSelectedItems(filteredItems);
        } else {
            setSelectedItems([...selectedItems, id]);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { email, name, whatsapp } = formData;
        const uf = selectedUf;
        const city = selectedCity;
        const [latitude, longitude] = selectedMapPosition;
        const items = selectedItems;

        const data = new FormData();

        data.append('email', email);
        data.append('name', name);
        data.append('whatsapp', whatsapp);
        data.append('uf', uf);
        data.append('city', city);
        data.append('latitude', latitude);
        data.append('longitude', longitude);
        data.append('items', items.join(','));

        if (selectedFile) {
            data.append('image', selectedFile);
        }

        await api.post('points', data);

        history.push('/');
    };


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setInitialMapPosition([latitude, longitude]);
        });
    }, []);

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(({ data }) => setUfs(data));
    }, []);

    useEffect(() => {
        if (selectedUf === '0') return;
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(({ data }) => setCities(data));
    }, [selectedUf]);

    useEffect(() => {
        api.get('items').then(({ data }) => setItems(data));
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <h1>Cadastro do <br /> ponto de coleta</h1>

            <Dropzone onFileUploaded={setSelectedFile} />

            <Data
                handleInputChange={handleInputChange}
            />
            <Address
                ufs={ufs}
                cities={cities}
                initialMapPosition={initialMapPosition}
                selectedMapPosition={selectedMapPosition}

                handleSelectedUf={handleSelectedUf}
                handleSelectedCity={handleSelectedCity}
                handleMapClick={handleMapClick}
            />

            <Items
                items={items}
                selectedItems={selectedItems}
                setItems={setItems}
                setSelectedItems={setSelectedItems}
                handleSelectedItem={handleSelectedItem}
            />

            <Button type="submit" text="Cadastrar um ponto de coleta" />
        </form>
    );
};

export default Form;
