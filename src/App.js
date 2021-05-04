import React from 'react';

/*
class App extends Component {
  render() {
    //const greeting = "Hi!";
    //const dom = <h1 className="foo">{greeting}</h1>
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am changed.")}} />
      </React.Fragment>
    )
  }
}
*/

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
