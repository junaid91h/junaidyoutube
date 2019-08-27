import React from "react";

const Users = props => {
  console.log(props);
  return (
    <div>
      <div>This is the users Component & Welcome {props.match.params.id}</div>
    </div>
  );
};

export default Users;
