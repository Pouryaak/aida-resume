import React from "react";
import { Row, Col } from "react-bootstrap";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import history from "../data/history.json";

const education = history.education;

const Education = () => {
  return (
    <Section id="education" title="Education">
      <Row>
        <Col md={12}>
          <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
            {education.map((e) => (
              <Timeline
                key={e.degree}
                time={e.period}
                title={e.school}
                icon={["fas", "graduation-cap"]}
              >
                <p>{e.degree}</p>
                <div dangerouslySetInnerHTML={{ __html: e.description }} />
              </Timeline>
            ))}

            <span className="line" />
          </div>
        </Col>
      </Row>
    </Section>
  );
};

export default Education;
