import React from 'react';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import PropTypes from 'prop-types';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = { data: dummyData };
  }

  render() {
    return(
      <div>
        {dummyData.map(data => (
          <PostContainer data={this.state.data} />
        ))};
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string
  })
}

export default App;
