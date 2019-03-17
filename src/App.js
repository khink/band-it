import React, { Component } from 'react';
import './App.css';

// API for local development
const API = 'http://localhost:8000';

class SongsList extends Component {
  // Song picker list / menu
  state = {
    isLoading: true,
    songs: [],
    error: null
  }

  fetchSongs() {
    // Get list of songs available to user from endpoint
    fetch(API + '/songs/')
      .then(response => response.json())
      .then(data =>  this.setState({
        songs: data,
        isLoading: false
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.fetchSongs();
  }

  render() {
    const { songs, isLoading, error } = this.state;
    return (
      <div className="SongsList">
        <h2>Song list</h2>
        {
          // Display a message if we encounter an error
          error ? <p>{error.message}</p> : null
        }
        {!isLoading ? (
          // Check if loading is not in progress
          songs.map(song => {
            const { url, title, as_performed_by } = song;
            return (
              <div url={url}><span>{title} ({as_performed_by})</span></div>
            );
          })
        // If there is a delay in data, let's let the user know it's loading
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }

}

class SongArea extends Component {
  // Render a song's contents here
  render() {
    return (
      <div className="SongArea">
        <p>No song selected. Pick one from the list.</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SongsList />
          <SongArea />
        </header>
      </div>
    );
  }
}

export default App;
