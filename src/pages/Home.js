import React, { Component } from "react";
import Card from "../components/Card";
import { httpClient } from "../helpers";

class Home extends Component {
  state = {
    posts: []
  };

  fetchPosts = () => {
    httpClient({
      url: "/posts",
      method: "get"
    }).then(response => {
      this.setState({
        posts: [...this.state.posts, ...response.data]
      });
    });
  };

  componentDidMount() {
    this.fetchPosts();
  }

  viewPost = postId => {
    const post = this.state.posts.find(post => post.id === postId);
    this.props.history.push(`/posts/${postId}`, post);
  };

  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <div className="row">
          {posts.map((post, index) => {
            return (
              <div
                className="col-sm-12 col-md-3 col-lg-3 mt-10"
                key={index}
                style={{
                  cursor: "pointer"
                }}
                onClick={() => this.viewPost(post.id)}
              >
                <Card post={post} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
