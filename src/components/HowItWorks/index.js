import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Features from "./../Features";
import "./styles.scss";

function HowItWorks(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Features
          items={[
            {
              title: "Student",
              description:
                "All the studies you'll need to finish your term paper",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/exams_g4ow.svg"
            },
            {
              title: "Researcher",
              description: "Find studies and share your own findings and data",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/science_fqhl.svg"
            },
            {
              title: "Business",
              description:
                "Learn fromthe experience of others and share your's",
              image:
                "https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/data_trends_b0wg.svg"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default HowItWorks;
