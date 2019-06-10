import React from 'react';
import avengers from '../data';

function AvegerPage(props) {
    const id = props.match.params.id;
    const avenger= avengers.find(avenger => `${avenger.id}` === id);
    return (
        <div>
            <img
            className="character-image"
            src={avenger.img}
            alt={avenger.name}
            />
            <div clasName="character-info-wrapper">
            <h1>{avenger.name}</h1>
            <h4>{avenger.description}</h4>
            </div>
        </div>
    );
}

export default AvegerPage