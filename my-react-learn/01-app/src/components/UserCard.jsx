import React from "react";

const UserCard =(props) =>{
//console.log(props.data);
return(
    <div>
        <p>Body:{props.body}</p>
        <p>Id:{props.id}</p>
        <p>Title:{props.title}</p>
        <p>User Id:{props.userId}</p>
    </div>
);
};

export default UserCard;