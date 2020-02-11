import React from 'react';
import styled from 'styled-components';

export const UserDiv = styled.div`
  background-color: #4d4b4b;
  width: 300px;
  border: solid 1px black;
  border-radius: 5px;
  margin-bottom: 10px;
`;
export const UserInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;
export const UserPic = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  background-size: cover;
  border: solid 1px black;

  img {
    width: 100%;
  }
`;

export const FollowersDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
