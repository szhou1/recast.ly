class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      allVideos: [],
      currentVideo: exampleVideoData[0]
    };
  }

  onVideoEntryClick(video) {
    console.log("onVideoEntryClick");
    console.log(video);

    this.setState({
      currentVideo: video
    });
  }


  render(props) {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={this.onVideoEntryClick.bind(this)} videos={exampleVideoData}/>
        </div>
      </div>); 
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
