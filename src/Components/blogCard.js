import React, { createElement } from "react";
import moment from "moment";

function blogCard(props) {
  let snippet = props.data.content.split("<p>");
  snippet = snippet[1].split(" ");
  snippet.length = 30;
  snippet.push("....");
  snippet = snippet.join(" ");

  const wordCount = props.data.content.split(" ").length;

  console.log(wordCount);
  console.log(props.data.content);

  return (
    <a href={props.data.link} target="_blank" rel="noreferrer">
      <div className="blogCard block">
        <img className="thumbnail" src={props.data.thumbnail} alt="thumbnail" />
        <img className="avatar" src={props.avatar} alt="avatar" />
        <div className="title">{props.data.title}</div>
        <div
          className="snippet"
          dangerouslySetInnerHTML={{ __html: snippet }}
        ></div>
        <div className="author">
          <i class="fas fa-user"></i>
          {props.data.author}
        </div>
        <div className="date">
          <i class="far fa-calendar-alt"></i>
          {moment(props.data.pubDate).format("MMM DD, YYYY")}
        </div>
        <div className="time">
          <i class="fas fa-clock"></i> {Math.ceil(wordCount / 215)} min read
        </div>
        <i class="fab fa-medium-m"></i>
      </div>
    </a>
  );
}

export default blogCard;
