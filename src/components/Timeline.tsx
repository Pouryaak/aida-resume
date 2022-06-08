import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

const Fade = require("react-reveal/Fade");

interface Props {
  time: string;
  title: string;
  icon: IconProp;
  left?: string;
  children: any;
}

const Timeline = (props: Props) => {
  const IconBox = styled.div({
    background: "#fff",
    fontSize: "24px",
    color: "#ff4c60",
    position: "absolute",
    left: props.left ? props.left : "-10px",
    top: 0,
    zIndex: 1,
    fontWeight: 900,
  });
  return (
    <div className="timeline-container">
      <Fade bottom>
        <div className="content">
          <span className="time">{props.time}</span>
          <h3 className="title">{props.title}</h3>
          {props.children}
        </div>
      </Fade>
      <IconBox>
        <FontAwesomeIcon
          icon={
            props.title.toLowerCase().includes("asia")
              ? faGraduationCap
              : faBriefcase
          }
        />
      </IconBox>
    </div>
  );
};

export default Timeline;
