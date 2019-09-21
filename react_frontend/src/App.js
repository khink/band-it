import React, { Component } from 'react';
import './App.css';

// API for local development
const API = 'http://localhost:8000';

function SongsListItem(props) {
  return (
    <li onClick={props.onClick} url={props.url}>
      <span href="{url}">{props.title} ({props.as_performed_by})</span>
    </li>
  );
}

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
            return <SongsListItem onClick={() => this.props.handleSongClick(url)} url={url} key={url} title={title} as_performed_by={as_performed_by} />
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

  render() {
    // this.fetchSong(this.props.url);
    return (
      <div className="SongArea">
        { this.props.lyrics ? <pre>{this.props.lyrics}</pre> : <p>No song selected. Pick one from the list.</p> }
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lyrics: null,
    };
  }

  fetchSong(url) {
    fetch(url)
      .then(response => response.json())
      .then(data =>  this.setState({
        lyrics: data.lyrics
      })
    )
    .catch(error => this.setState({ error, isLoading: false }));
  }

  handleSongClick(url) {
    this.fetchSong(url);
  }

  render() {
    return (
      <div className="App">
        <SongsList handleSongClick={(url) => this.handleSongClick(url)} />
        <SongArea lyrics={this.state.lyrics} />
      </div>
    );
  }
}

export default App;
