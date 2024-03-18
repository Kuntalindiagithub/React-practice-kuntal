import React from 'react'

const UserInfo = (props) =>{
    console.log(props.data)
    return(
        <div>
            <h1>User Name : {props.data.name.first}</h1>
            <h1>User Email: {props.data.email}</h1>
            <h1>User Gender:{props.data.gender}</h1>
        </div>
    )
}

export default UserInfo;