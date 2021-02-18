import React from "react";
import moment from "moment";
import Nerd from "../images/nerd.png";
import DDI from "../images/DDI.png";
import StartUp from "../images/thestartup.jpeg";
import Published from "../images/published.png";
import Noteworthy from "../images/noteworthy.png";

function blogCard(props) {
  console.log(props.data.link);
  let icon;
  const publisher = props.data.link.split("/");
  const publication = publisher[3];

  let snippet = props.data.content.split("<p>");
  snippet = snippet[1].split(" ");
  snippet.length = 35;
  snippet.push("....");
  snippet = snippet.join(" ");

  const wordCount = props.data.content.split(" ").length;

  switch (publication) {
    case "nerd-for-tech":
      icon = Nerd;
      break;
    case "datadriveninvestor":
      icon = DDI;
      break;
    case "swlh":
      icon = StartUp;
      break;
    default:
      icon = null;
      break;
  }

  if (publisher[2] === "blog.usejournal.com") {
    icon = Noteworthy;
  }

  return (
    <a href={props.data.link} target="_blank" rel="noreferrer">
      <div className="blogCard block">
        {icon && (
          <div>
            <img className="published" src={Published} alt="published icon" />
            <img
              className="publication-icon published"
              src={icon}
              alt="publication icon"
            />
          </div>
        )}
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
