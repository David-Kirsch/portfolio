import React from "react";
import moment from "moment";
import Nerd from "../images/nerd.png";
import DDI from "../images/DDI.png";
import StartUp from "../images/thestartup.jpeg";
import Published from "../images/publishedIn.png";
import Noteworthy from "../images/noteworthy.png";
import JS from "../images/jsIcon.png";

function blogCard(props) {
  let icon;
  const publisher = props.data.link.split("/");
  const publication =
    publisher[2] === "medium.com" ? publisher[3] : publisher[2];

  let snippet = props.data.content.split("<p>");
  snippet = snippet[1].split(" ");
  snippet.length = 30;
  snippet.push(
    ".... <span style='color:blue; font-weight:bold'>Read more</span>"
  );
  snippet = snippet.join(" ");

  const wordCount = props.data.content.split(" ").length;

  switch (publication) {
    case "nerd-for-tech":
      icon = Nerd;
      break;
    case "medium.datadriveninvestor.com":
      icon = DDI;
      break;
    case "swlh":
      icon = StartUp;
      break;
    case "blog.usejournal.com":
      icon = Noteworthy;
      break;
    case "js.plainenglish.io":
      icon = JS;
      break;
    default:
      icon = null;
      break;
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
