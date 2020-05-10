import React from 'react';

const UserInput = (props) => {
  const style = {
    border: '2px solid blue'
  };

  return (
    <input
      type="text"
      style={style}
      onChange={props.usernameChanged}
      defaultValue={props.username}/>
  );
};

export default UserInput;
