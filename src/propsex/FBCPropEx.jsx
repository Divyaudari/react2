import React from 'react';

const FBCPropEx = (props) => {
  if (props.ismarried === true) {
    return (
      <div>
        <h1>{props.username} is a married person</h1>
        
          {props.hobbies.map((hobby, index) => (
            <li >{hobby}</li>
          ))}
        
      </div>
    );
  } else {
    return <h1>Not married</h1>;
  }
};

export default FBCPropEx;
