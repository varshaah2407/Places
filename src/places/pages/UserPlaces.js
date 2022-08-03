import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Central Perk',
        description:'One of the most historic places',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Vz76ajrkNZ8UZITj6fCWUhnHy_zz4n6rLg&usqp=CAU',
        address: '123 Main St',
        location: {
            lat: 10,
            lng: 20
        },
        creator: 'u1'
    },
    {
        id:'p2',
        title:'Central Perk',
        description:'One of the most historic places',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Vz76ajrkNZ8UZITj6fCWUhnHy_zz4n6rLg&usqp=CAU',
        address: '123 Main St',
        location: {
            lat: 10,
            lng: 20
        },
        creator: 'u2'
    }
];

function UserPlaces(props) {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return(
        <PlaceList items={loadedPlaces} />
    );
}

export default UserPlaces;