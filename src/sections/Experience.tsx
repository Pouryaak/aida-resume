import React from "react";
import { Row, Col } from "react-bootstrap";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import history from "../data/history.json";

const career = history.career;

const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <Row>
        <Col md={12}>
          <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
            {career.map((c) => (
              <Timeline
                key={c.company}
                time={c.period}
                title={c.title}
                icon={["fas", "briefcase"]}
                left="-7px"
              >
                <p>{c.company}</p>
                <div dangerouslySetInnerHTML={{ __html: c.description }} />
              </Timeline>
            ))}

            <span className="line" />
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Experience;
