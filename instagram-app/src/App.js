import React from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';


function App(props) {
  console.log(props.data);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Insta Clone!</h1>
        {dummyData.map(data => (
          <PostContainer {props.data}/>
        ))};
      </header>
    </div>
  );
}

export default App;
