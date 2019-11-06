import React from 'react'


export default function UserCard ({name, bio, followers_url, location}){
    return(
        <div className="UserCard">
            <h2>{name}</h2>
            <p>Bio:{bio}</p>
            <p>Followers: {followers_url}</p>
            <p>{location}</p>
        </div>
    )
}