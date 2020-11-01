import './css/main.css';
import Information from './components/Information';
import NavBar from './components/NavBar';
import Posts from './components/Posts';
import StoryList from './components/StoryList';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="App">
        <Information />
        <StoryList />
        <Posts />
      </div>
    </React.Fragment>
  );
}

export default App;
