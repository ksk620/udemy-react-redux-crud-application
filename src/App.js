import React from 'react';

const App = () => {
  const profiles = [
    { name: "Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "NoName" },
    { age: 12 }
  ]
  return (
    <div>
      {
        profiles.map((profiles, index) => {
          return <User name={profiles.name} age={profiles.age} key={index} />
        })
      }      
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}!, and {props.age} years old! </div>
}

User.defaultProps = {
  name: "Neko",
  age: 1
}

export default App;
