import React from 'react'

export default function UserList (){
    return(
        <this.state.user.map(users => {
            <UserCard 
                key={users.id} 
                name={users.name} 
                bio={users.bio} 
                followers={users.followers_url} 
                location={users.location} 
            />})
    )
}