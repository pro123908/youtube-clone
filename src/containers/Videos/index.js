import React from "react";
import { VideosData } from "./StaticData";
import moment from "moment";

const Videos = () => {
  const videosContent = VideosData.map(({ snippet, id }) => {
    let date = moment.parseZone(snippet.publishTime).format("llll");
    return (
      <div className="videos__item" key={id.videoId}>
        <div className="videos__item-thumbnail">
          <img src={snippet.thumbnails.medium.url} />
        </div>
        <div className="videos__item-text">
          <div className="videos__item-title">{snippet.title}</div>
          <div className="videos__item-meta">
            <div className="videos__item-channel">
              by {snippet.channelTitle}
            </div>
            <div className="videos__item-date">on {date}</div>
          </div>
          <div className="videos__item-desc">{snippet.description}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="videos">
      <div className="videos__heading">Youtube API Videos</div>
      <div className="videos__list">{videosContent}</div>
    </div>
  );
};

export default Videos;
