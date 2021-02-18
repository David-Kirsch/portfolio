import React, { Component } from "react";
import BlogCard from "./blogCard";
import "./blogs.css";
import moment from "moment";

export default class blogs extends Component {
  state = {
    blogs: [],
    avatar: "",
    author: "",
    updatedBlogs: [],
    sortedBlogs: [],
  };

  componentDidMount = () => {
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
    setTimeout(this.getImages, 1000);
    setTimeout(this.sortblogs, 4000);
  };

  getImages = () => {
    this.state.blogs.forEach((blog) => {
      const site = encodeURIComponent(blog.link);
      fetch(
        `https://opengraph.io/api/1.1/site/${site}?accept_lang=en&app_id=${process.env.REACT_APP_OPEN_GRAPH_API_KEY}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          blog.thumbnail = data.openGraph.image.url;
          this.setState({
            updatedBlogs: [...this.state.updatedBlogs, blog],
          });
        });
    });
  };

  sortblogs = () => {
    let sorted = this.state.updatedBlogs.sort(
      (a, b) =>
        moment(b.pubDate).format("YYYYMMDD") -
        moment(a.pubDate).format("YYYYMMDD")
    );
    this.setState({
      sortedBlogs: sorted,
    });
  };

  render() {
    const renderBlogs = this.state.sortedBlogs.map((blog) => (
      <BlogCard data={blog} avatar={this.state.avatar} />
    ));

    return (
      <div className="blogs" id={"blogs"}>
        <h1>Blogs</h1>
        {this.state.sortedBlogs ? (
          <div className="wrapper">{renderBlogs}</div>
        ) : null}
      </div>
    );
  }
}
