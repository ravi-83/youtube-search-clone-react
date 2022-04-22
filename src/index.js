import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import _ from "lodash";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_details";
import VideoListItem from "./components/video_list_item";

const YOUTUBE_API_KEY = "AIzaSyBFokKQWdI50g2wprgUeDEahXRHLa5Uj1o";

//Create a new component and this component should produce
//some HTML

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch("dhokha");
  }

  videoSearch(term) {
    YTSearch({ key: YOUTUBE_API_KEY, term: term }, (data) => {
      this.setState({ videos: data, selectedVideo: data[0] });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

//Take this component's generated HTML and put it
// on the  page {in the DOM}
ReactDOM.render(<App />, document.querySelector(".container"));
