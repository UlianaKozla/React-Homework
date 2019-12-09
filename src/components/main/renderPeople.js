import React from 'react';
import {people} from "../../constants/people";

export function RenderPeople() {
    return people.map(person => {
        const { name, surname, image } = person;
        return (
            <div className="App-list, flex" key={`${name} ${surname}`}>
                <div>Hello {name} {surname}!</div>
                <img src={`${image}`} className="img"/>
            </div>
        )
    })
}
