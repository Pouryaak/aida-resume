import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

interface Props {
  title: string;
  percent: number;
  backgroundColor?: string;
}

interface State {
  completed: number;
  loaded: boolean;
}

const Skill = (props: Props) => {
  const [state, setState] = useState<State>({
    completed: props.percent,
    loaded: true,
  });
  const bgColor = props.backgroundColor ? props.backgroundColor : "#f1f1f1";

  const onChange = (isVisible: boolean) => {
    if (isVisible && !state.loaded) {
      setState({
        completed: props.percent,
        loaded: true,
      });
    }
  };

  return (
    <div className="skill-item mb-4">
      <VisibilitySensor onChange={onChange}>
        <div className="skill-info clearfix">
          <h4 className="float-left mb-3 mt-0">{props.title}</h4>
          <span className="float-right">{`${props.percent}%`}</span>
        </div>
      </VisibilitySensor>
      <div className="progress">
        <div
          className="progress-bar data-background"
          style={{
            width: `${state.completed}%`,
            backgroundColor: `${bgColor}`,
          }}
        />
      </div>
    </div>
  );
};

export default Skill;
