import React from 'react';

const UserOutput = (props) => {
  return (
    <div>
      <p>My username is: {props.username}</p>
      <p>Second paragraph</p>
    </div>
  );
};

export default UserOutput;
