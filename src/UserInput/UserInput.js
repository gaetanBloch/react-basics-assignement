import React from 'react';

const UserInput = (props) => {
  return (
    <input type="text" onChange={props.changeUsername}/>
  );
};

export default UserInput;
