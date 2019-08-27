import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { handleQuery, getData } from "../actions";
class App extends Component {
  componentDidMount() {
    this.props.getData();
  }
  // getData = () => {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${
  //         this.props.q
  //       }&key=AIzaSyA7InYhaHGvbqEB4bjwmN7tKDmpfF_jtiU`
  //     )
  //     .then(res =>
  //       this.setState({
  //         data: [...res.data.items]
  //       })
  //     );
  // };
  // handleChange = e => {
  //   this.setState(
  //     {
  //       query: e.target.value
  //     },
  //     () => this.getData()
  //   );
  // };
  handleVideo = id => {
    this.setState({
      videoId: id
    });
  };
  render() {
    console.log(this.props);
    let response = this.props.data.map((video, index) => {
      return (
        <div key={index}>
          <img src={`${video.snippet.thumbnails.default.url}`} alt="thumbil" />
          <h3 onClick={() => this.handleVideo(video.id.videoId)}>
            {" "}
            {video.snippet.title}
          </h3>
        </div>
      );
    });
    return (
      <div>
        <form>
          <input type="text" onChange={this.props.handleQuery} />
          <input type="submit" />
        </form>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${this.props.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        {response}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    q: state.query,
    videoId: "",
    data: state.data,
    isloading: state.isloading,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { handleQuery, getData }
)(App);
