class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allVideos: [],
      currentVideo: exampleVideoData[0]
    };
    
    this.searchOptions = {
      // for search, create a function that captures user in from search box
      // and replaces 'dogs humans' with their search phrase
      query: 'dogs humans',
      max: 10,
      key: window.YOUTUBE_API_KEY,
    };

    searchYouTube(this.searchOptions, function(videos) {
      this.setState({allVideos: videos});
      this.setState({currentVideo: videos[0]});
    }.bind(this));
  }

  onVideoEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList onVideoEntryClick={this.onVideoEntryClick.bind(this)} videos={this.state.allVideos}/>
        </div>
      </div>); 
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
