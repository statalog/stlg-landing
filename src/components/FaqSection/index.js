import React from "react";
import Section from "./../Section";
import SectionHeader from "./../SectionHeader";
import Faq from "./../Faq";
import "./styles.scss";

function FaqSection(props) {
  return (
    <Section color={props.color} size={props.size}>
      <div className="container">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          centered={true}
          size={3}
        />
        <Faq
          items={[
            {
              question: "What does it cost?",
              answer:
                "Free. Every single bit of Statalog is 100% free. (Added bonus: we will never host ads and we will never share your personal info!)"
            },
            {
              question: "Can my company advertise on Statalog?",
              answer: "We do not show ads."
            },
            {
              question:
                "Can I create apps or tools based around the Statalog community and platform?",
              answer:
                "Yes. Statalog is open source (GPL-3 license), and data is publicly available. But you must make it clear that you don not represent Statalog itself, and that your project is not officially endorsed by Statalog."
            },
            {
              question: "How can I support the Statalog community?",
              answer:
                "Awww, thanks for thinking of us. First, support us by being a member, add your studies. We would also love to hear your feedback and suggestions!"
            }
          ]}
        />
      </div>
    </Section>
  );
}

export default FaqSection;
