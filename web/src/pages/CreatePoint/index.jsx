import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import Form from '../../components/CreatePoint';

import logo from '../../assets/logo.svg';

export default function CreatePoint() {

    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta" />

                <Link to="/">
                    <FiArrowLeft />
                    Voltar para o ínicio
                </Link>
            </header>


            <Form />
        </div>
    );
}
