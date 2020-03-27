import React, {useState} from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import {Link, useHistory} from 'react-router-dom'

import api from '../../services/api';

import './style.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    const ongId = localStorage.getItem('ongId');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,description,value
        };

        console.log(data)

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile')
        }catch(err){
            alert('Error to insert a new incident. Try again later');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero" />    

                    <h1>New Incident</h1>
                    <p>describe the incident in detail to find a hero to solve it</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Back to profile
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Incident title"
                        value={title}
                        onChange={e => setTitle(e.target.value)} />

                    <textarea 
                        placeholder="Description"
                        value={description}
                        onChange={e => setDescription(e.target.value)} />

                    <input 
                        placeholder="Amount in $USS"
                        value={value}
                        onChange={e => setValue(e.target.value)} />                    

                    <button className="button" type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}