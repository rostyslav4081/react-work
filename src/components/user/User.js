import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item ,onSelectUser } = this.props;
        return (
            <div>
                {item.id}-{item.name}___
                <button onClick={() =>onSelectUser(item.id)}>Choose User!</button>
            </div>
        );
    }
}

export default User;
