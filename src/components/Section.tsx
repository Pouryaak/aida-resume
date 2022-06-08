import React from "react";
import { Container } from "react-bootstrap";

interface Props {
  id: string;
  title: string;
  children: any;
}

const Section = (props: Props) => {
  return (
    <section id={props.id} style={{ background: "#F9F9F9", zIndex: "99" }}>
      <div>
        <Container style={{ backgroundColor: "#F9F9F9 !important" }}>
          <h2 className="section-title mb-5">{props.title}</h2>

          {props.children}
        </Container>
      </div>
    </section>
  );
};

export default Section;
