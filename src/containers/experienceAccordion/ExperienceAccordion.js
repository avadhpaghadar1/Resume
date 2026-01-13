import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  state = {
    openIndex: 0,
  };

  toggleIndex = (index) => {
    this.setState((prev) => ({
      openIndex: prev.openIndex === index ? -1 : index,
    }));
  };

  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-accord">
        <div className="accord-root">
          {this.props.sections.map((section, sectionIndex) => {
            const isOpen = this.state.openIndex === sectionIndex;
            const title = section["title"];

            return (
              <div className="accord-panel" key={title}>
                <button
                  type="button"
                  className="accord-header"
                  onClick={() => this.toggleIndex(sectionIndex)}
                  aria-expanded={isOpen}
                >
                  <span className="accord-title" style={{ color: theme.text }}>
                    {title}
                  </span>
                  <span
                    className="accord-chevron"
                    style={{ color: theme.secondaryText }}
                    aria-hidden="true"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <div className="accord-content">
                    {section["experiences"].map((experience, index) => {
                      return (
                        <ExperienceCard
                          key={`${title}-${index}`}
                          index={index}
                          totalCards={section["experiences"].length}
                          experience={experience}
                          theme={theme}
                        />
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ExperienceAccordion;
