import React from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div>
        {dummyData.map(data => (
          console.log(data);
          <PostContainer key={this.props.data}/>
        ))};
      </div>
    )
  }
}

export default App;
