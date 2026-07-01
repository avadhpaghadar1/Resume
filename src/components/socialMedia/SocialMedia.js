import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${({ disabled, backgroundColor, theme }) =>
      disabled
        ? theme.surfaceStrong || "rgba(255, 255, 255, 0.88)"
        : backgroundColor};
    color: ${({ disabled, theme }) => (disabled ? theme.text : "#ffffff")};
    box-shadow: 0 0 0 1px var(--border-subtle) inset;
  }
  &:hover i {
    background-color: ${({ theme, disabled }) =>
      disabled
        ? theme.surfaceStrong || "rgba(255, 255, 255, 0.88)"
        : theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        const hasLink = Boolean(media.link && media.link.trim());
        const iconType = media.iconType || "fab";

        if (hasLink) {
          return (
            <a
              key={i}
              href={media.link}
              className="icon-button"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={media.name}
              title={media.name}
            >
              <IconWrapper {...media} {...props} disabled={false}>
                <i className={`${iconType} ${media.fontAwesomeIcon}`}></i>
              </IconWrapper>
            </a>
          );
        }

        return (
          <span
            key={i}
            className="icon-button icon-button--disabled"
            aria-label={media.name}
            title={`Set your ${media.name} link in src/portfolio.js`}
          >
            <IconWrapper {...media} {...props} disabled={true}>
              <i className={`${iconType} ${media.fontAwesomeIcon}`}></i>
            </IconWrapper>
          </span>
        );
      })}
    </div>
  );
}
