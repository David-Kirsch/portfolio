import React, { Component } from "react";
import BlogCard from "./blogCard";
import "./blogs.css";

export default class blogs extends Component {
  state = {
    blogs: [],
    avatar: "",
    author: "",
  };
  componentDidMount() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40davidjkirsch"
    )
      .then((resp) => resp.json())
      .then((data) => {
        const items = data.items;
        const posts = items.filter((item) => item.categories.length > 0);
        this.setState({
          blogs: posts,
          avatar: data.feed.image,
        });
      });
  }

  render() {
    const renderBlogs = this.state.blogs.map((blog) => (
      <BlogCard data={blog} avatar={this.state.avatar} />
    ));

    return (
      <div className="blogs" id={"blogs"}>
        <h1>Blogs</h1>
        <div className="wrapper">{renderBlogs}</div>
      </div>
    );
  }
}
