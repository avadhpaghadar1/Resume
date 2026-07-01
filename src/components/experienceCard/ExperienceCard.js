import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;

    const accentColor =
      experience?.color || theme.imageHighlight || theme.headerColor;
    const descriptionLines =
      typeof experience?.description === "string"
        ? experience.description
            .split("\n")
            .map((line) => line.replace(/^\s*[•-]\s*/, "").trim())
            .filter(Boolean)
        : [];

    const isFreelancerLogo =
      typeof experience["logo_path"] === "string" &&
      experience["logo_path"].toLowerCase().includes("freelancer");
    const isCrmPunch = experience["company"] === "CRM Punch";

    const logoClassName =
      "experience-card-logo" +
      (isFreelancerLogo ? " experience-card-logo--freelancer" : "") +
      (isCrmPunch ? " experience-card-logo--crmpunch" : "");

    return (
      <div
        className="experience-list-item"
        style={{ marginTop: index === 0 ? 30 : 50 }}
      >
        <Fade left duration={2000} distance="40px">
          <div className="experience-card-logo-div">
            <img
              className={logoClassName}
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt={
                experience?.company
                  ? `${experience.company} logo`
                  : "Company logo"
              }
            />
          </div>
        </Fade>
        <div
          className="experience-card-stepper"
          style={{ "--accent": accentColor }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: "var(--accent)",
              borderRadius: 50,
              zIndex: 100,
            }}
          />
          {index !== totalCards - 1 && (
            <div
              style={{
                height: 190,
                width: 2,
                backgroundColor: "var(--accent)",
                position: "absolute",
                marginTop: 20,
              }}
            />
          )}
        </div>
        <Fade right duration={2000} distance="40px">
          <div className="experience-card-row">
            <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.body}` }}
            ></div>
            <div
              className="experience-card"
              style={{ background: `${theme.body}`, "--accent": accentColor }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience["title"]}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text }}
                  >
                    {experience?.company_url ? (
                      <a
                        href={experience["company_url"]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {experience["company"]}
                      </a>
                    ) : (
                      <span>{experience["company"]}</span>
                    )}
                  </p>
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p
                      className="experience-card-duration"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["duration"]}
                    </p>
                    <p
                      className="experience-card-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["location"]}
                    </p>
                  </div>
                </div>
              </div>
              {descriptionLines.length > 0 ? (
                <ul className="experience-card-description-list">
                  {descriptionLines.map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              ) : (
                <div className="experience-card-description">
                  {experience["description"]}
                </div>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
