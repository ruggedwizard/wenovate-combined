import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Person from "./Person"

const People = () => {

    const [people] = useState([
        {
            name : "John Doe",
            category : "Web Dev",
            rating : 4.6,
            country : "Mexico",
            connections : 10
        },
        {
            name : "Will Smith",
            category : "Actor",
            rating : 4.9,
            country : "USA",
            connections : 20
        },
        {
            name : "Phil Thompson",
            category : "Traveller",
            rating : 4.2,
            country : "Canada",
            connections : 15
        },
    ])

    return (
        <Container>
            <div id="friends">
                <div class="row ">
                    {people.map( person =>{
                        return <Person key={person} person={person} />
                    } )}
                </div>
            </div>
        </Container>
    )
}

export default People
