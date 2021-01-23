import React from "react";
import moment from "moment";

function blogCard(props) {
  console.log(props);
  return (
    <a href={props.data.link} target="_blank" rel="noreferrer">
      <div className="blogCard block">
        <img className="thumbnail" src={props.data.thumbnail} alt="thumbnail" />
        <img className="avatar" src={props.avatar} alt="avatar" />
        <div className="title">{props.data.title}</div>
        <div className="author">
          <i class="fas fa-user"></i>
          {props.data.author}
        </div>
        <div className="date">
          <i class="far fa-calendar-alt"></i>
          {moment(props.data.pubDate).format("MMM DD, YYYY")}
        </div>
        <i class="fab fa-medium-m"></i>
      </div>
    </a>
  );
}

export default blogCard;
