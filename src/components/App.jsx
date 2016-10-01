class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      allVideos: [],
      currentVideo: undefined,
      searchString: undefined
    };
    
    this.searchOptions = {
      query: '',
      max: 2,
      key: window.YOUTUBE_API_KEY,
    };
  }

  componentWillMount() {
    this.search();
  }
  

  search() {
    this.searchOptions.query = $('input:text').val();
    // console.log('search()', this.searchOptions.query);
    searchYouTube(this.searchOptions, function(videos) {
      this.setState({allVideos: videos});
      this.setState({currentVideo: videos[0]});
    }.bind(this));
    // console.log('search end');
  }

  onVideoEntryClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    console.log('render start');
    if (this.state.currentVideo) {    
      return (
        <div>
          <Nav search={this.search.bind(this)} searchString={this.state.searchString}/>
          <div className='col-md-7'>
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className='col-md-5'>
            <VideoList onVideoEntryClick={this.onVideoEntryClick.bind(this)} videos={this.state.allVideos}/>
          </div>
        </div>); 
    } else {
      return (<div></div>);
    }
  }
}
// In the ES6 spec, files are 'modules' and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
