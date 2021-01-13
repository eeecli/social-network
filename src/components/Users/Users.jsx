import axios from 'axios';
import React from 'react';
import User from './User/User';
import classes from './Users.module.css';
import userPic from '../../assets/images/userpic.png';

class Users extends React.Component {
  componentDidMount = () => {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <div>
        <div className={classes.usersWrapper}>
          {this.props.users.map((u) => (
            <User
              id={u.id}
              fullName={u.name}
              status={u.status}
              icon={u.photos.small || userPic}
              location={'u.location'}
              followed={u.followed}
              key={u.id}
              toggleFollow={this.props.toggleFollow}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
