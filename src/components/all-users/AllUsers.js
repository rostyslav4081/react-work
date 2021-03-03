import React, {Component} from 'react';
import User from "../user/User";

class AllUsers extends Component {
    state = {users:[],choose:null};
    constructor() {
        console.log('con');
        super();
    }
    onSelectUser =(id) =>{
      let {users} = this.state;
      let find = users.find(value => value.id === id);
      this.setState({choose: find});
    };
    render() {
        let {users,choose} = this.state;
        return (

            <div>
                {
                    users.map(user =><User item = {user} key = {user.id} onSelectUser = {this.onSelectUser}/> )

                }
                {
                    choose && <h2>{choose.id}-{choose.name}</h2>
                }

            </div>
        );
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                this.setState({users});

        });
    }
}

export default AllUsers;
