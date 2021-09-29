import React from "react"


class Users extends React.Component {
constructor() {
super();    
this.state = {Users: [] }
}
async getUsers() {
    fetch(" https://jsonplaceholder.typicode.com/users").then ((respond) => {return respond.json()})
    .then((Users)=> {this.setState({Users:Users});})
}

componentDidMount() {
    this.getUsers();
}

render() {
    return (
        <>
        {this.state.Users.map((Users)=>{
            return <> <h1 key={Users.id}>{Users.name}</h1>
            <h2 key={Users.id}>{Users.username}</h2>
            <h3 key={Users.id}>{Users.email}</h3>
            </>
        })}
        </>
    )
}

}

export default Users;



