import React from 'react'
import UserCard from './UserCard';

export default function UserList (props){
    console.log(props);
    return(
        <div>
        
        {props.map(users => {
            return(
                <UserCard 
                key={users.id} 
                name={users.name} 
                bio={users.bio} 
                followers={users.followers_url} 
                location={users.location} 
            />
            )
        }
            )}
        </div>
    )
}