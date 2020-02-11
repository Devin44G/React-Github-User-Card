import React from 'react';
import axios from 'axios';
import {UserInfo,
        UserPic,
        UserDiv,
        FollowersDiv,
        InfoDiv} from './Styles';

class Cards extends React.Component {
  state = {
    userData: [],
    followersData: []
  };

  componentDidMount() {
    // MY DATA
    axios
      .get('https://api.github.com/users/Devin44G')
      .then( res => {
        console.log(res.data);
        this.setState({
          userData: res.data
        });
      })
      .catch( err => console.log('An error has occured: ', err));
    // FOLLOWERS DATA
    axios
      .get('https://api.github.com/users/Devin44G/followers')
      .then( res => {
        console.log(res.data);
        this.setState({
          followersData: res.data
        });
      })
  }

  render() {
    return(
      <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
        {/* MY CARD */}
        <h2>My GitHub Card</h2>
        <UserDiv>
          <UserInfo>
            <UserPic>
              <img src={this.state.userData.avatar_url} alt="User Image"/>
            </UserPic>
            <InfoDiv>
              <h3 style={{margin:'0px'}}>{this.state.userData.name}</h3>
              <span>GitHub Handle: {this.state.userData.login}</span>
              <span>Followers: {this.state.userData.followers}</span>
            </InfoDiv>
          </UserInfo>
        </UserDiv>

        {/* FOLLOWERS CARDS */}
        <h2>My Followers</h2>
        <FollowersDiv>
          {this.state.followersData.map( user => (
            <UserDiv key={user.id}>
              <UserInfo>
                <UserPic>
                  <img src={user.avatar_url} alt="Follower Image"/>
                </UserPic>
                <InfoDiv>
                  <h3>{user.login}</h3>
                </InfoDiv>
              </UserInfo>
            </UserDiv>
          ))}
        </FollowersDiv>
      </div>
    );
  }
}

export default Cards;
