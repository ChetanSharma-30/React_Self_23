import React from "react";

const HelloFolks = () => {
  // With the help of JSX

  // return (
  //     <div className='bye'>
  //         <h1>Hello Folks</h1>
  //     </div>
  // )

  // Without JSX , By React.createElement
  // It excepts minimum 3 parameters
  // 1. string that specifies the html tag
  // 2. any optional properties
  // 3. childern for the html element

  // return React.createElement('h1', null, 'Hello Folks')
  // return React.createElement('div', null, '<h1>Hello Folks<h1/>')
  return React.createElement(
    "div",
    {id: 'hey', className: 'bye'},
    React.createElement("h1", null, "Hello Folks")
  );
};

export default HelloFolks;
