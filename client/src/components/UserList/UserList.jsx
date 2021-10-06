import React, {useState, useEffect} from 'react';
import axios from 'axios';
import UserListItem from './UserListItem.jsx';


//this component is going to display all of the users.  those users will be so if you click it brings up that users profile.

const UserList = (props) => {

  //inital array is empty
  const [userList, setUserList] = useState([]);
  const [nextUser, setNextUser] = userState(''); //when a user is clicked on to see their profile, a click handler will set this state so the next user is the user clickedo n.  this will trigger a redirect to their profile page

  //this is the fn that will b triggered when selecting a prof page to visit
  const visitUser = async (userId) => {
    //get the userinfo from the db
    const {data: id} = await axios.get(`/routes/userlist/userlist/user/${userId}`);
    setNextUser(id);

  }



  const getUsers = async () => {

    try {
      const {data} = await axios.get('/routes/userlist/userlist/allUsers');
      setUserList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const userListItemCreator = () => {
    return userList.map((user, i) => <UserListItem key={i} user={user} visitUser={visitUser} />);
  };


  return (
    <div>user list
      {userListItemCreator()}
      
      <button onClick={getUsers}>test</button>
    </div>
  );
};

export default UserList;
