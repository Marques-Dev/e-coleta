import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

const Address = ({ ufs, cities, handleSelectedUf, handleSelectedCity, initialMapPosition, handleMapClick, selectedMapPosition }) => {
    return (
        <fieldset>
            <legend>
                <h2>Endereço</h2>
                <span>Selecione o endereço no mapa</span>
            </legend>

            <Map center={initialMapPosition} zoom={15} onClick={handleMapClick}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={selectedMapPosition} />
            </Map>

            {<div className="field-group">
                <div className="field">
                    <label htmlFor="uf">Estado</label>
                    <select name="uf" id="uf" onChange={handleSelectedUf}>
                        <option value="0">Selecione um Estado</option>
                        {ufs.map(({ nome, sigla, id }) => (
                            <option value={sigla} key={id}>{nome}</option>
                        ))}
                    </select>
                </div>

                <div className="field">
                    <label htmlFor="city">Cidade</label>
                    <select name="city" id="city" onChange={handleSelectedCity}>
                        <option value="0">Selecione um Cidade</option>
                        {cities.map(({ id, nome }) => (
                            <option value={id} key={id}>{nome}</option>
                        ))}
                    </select>
                </div>
            </div>}
        </fieldset>
    );
};

export default Address;
