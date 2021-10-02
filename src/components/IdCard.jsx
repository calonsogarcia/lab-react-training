import React from 'react'

export default function IdCard (props){
    const {lastName, firstName, gender, height, birth, picture} = props;
    return <div>
        <picture>
            <img src={picture} alt=""/>
        </picture>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height/100}m</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
    </div>
}