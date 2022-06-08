import React, { useState } from "react";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {
  faCoffee,
  faHourglassHalf,
  faListCheck,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  className?: string;
  description: string;
  count: number;
  icon: IconProp;
  iconSize?: SizeProp;
}

interface State {
  loaded: boolean;
}

const Box = styled.div({
  float: "left",
  color: "#dedeea",
  fontSize: "36px",
});

const Counter = (props: Props) => {
  const [state, setState] = useState({ loaded: true });
  const onChange = (isVisible: boolean) => {
    if (isVisible && !state.loaded) {
      setState({
        loaded: true,
      });
    }
  };
  return (
    <div className={props.className}>
      <div className="fact-item">
        <Box>
          <FontAwesomeIcon
            icon={
              props.description.toLowerCase().includes("projects")
                ? faListCheck
                : props.description.toLowerCase().includes("hours")
                ? faHourglassHalf
                : props.description.toLowerCase().includes("coffee")
                ? faCoffee
                : faBook
            }
            size={props.iconSize}
          />
        </Box>
        <div className="details">
          <h3 className="mb-0 mt-0 number">
            <em className="count">
              <VisibilitySensor onChange={onChange} delayedCall>
                <CountUp start={0} end={state.loaded ? props.count : 0} />
              </VisibilitySensor>
            </em>
          </h3>
          <p className="mb-0">{props.description}</p>
        </div>
      </div>
      <div className="spacer d-md-none d-lg-none" data-height="30" />
    </div>
  );
};

export default Counter;
