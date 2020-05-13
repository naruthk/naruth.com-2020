import React from "react"
import PropTypes from "prop-types";

import useSiteMetadata from '../hooks/use-site-metadata';

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaCodepen
} from 'react-icons/fa';
import {
  responsiveFontSizes,
  colors,
  mediaQuery,
} from "../utils/styles";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const SOCIAL_NETWORK_LINKS_MAP = {
  twitter: {
    name: "Twitter",
    icon: <FaTwitter />,
    url: "https://twitter.com/nkongurai",
    articleSharingUrl: ""
  },
  linkedin: {
    name: "Linkedin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/naruthkongurai",
    articleSharingUrl: ""
  },
  github: {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://www.github.com/naruthk",
    articleSharingUrl: ""
  },
  codepen: {
    name: "CodePen",
    icon: <FaCodepen />,
    url: "https://www.codepen.io/nkongurai"
  }
};

const Wrapper = styled.section`
  ul, li {
    margin: 0;
    padding: 0;
    font-size: ${responsiveFontSizes.small};

    ${responsiveFontSizes[2]} {
      font-size: ${responsiveFontSizes.normal};
    }
  }

  li {
    vertical-align: middle;
    display: inline;
    margin-right: 20px;
    :last-child {
      margin-right: 0;
    }
    ${({ isFloatingHeader }) => isFloatingHeader &&
      css`color: ${colors.mediumGrey}`
    }
  }
`;

const ArticleSharingWrapper = styled.div`
  font-size: ${responsiveFontSizes.medium};
  ${mediaQuery[2]} {
    margin-right: 20px;
  }
  > * {
    vertical-align: sub;
    margin: 5px;
    ${mediaQuery[2]} {
      margin: 10px;
    }}
  }
  button {
    background: transparent;
    padding: 0;
    border: none;
    outline: none;
    color: ${colors.dark};
    font-size: ${responsiveFontSizes.normal};
  }
  button:hover {
    color: ${colors.blue};
  }
  span {
    font-size: ${responsiveFontSizes.small};
    vertical-align: middle;
    color: ${colors.mediumGrey};
  }
`;

const renderArticleSharingLinks = url => {
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;

  return (
    <ArticleSharingWrapper>
      <span className="label">Share:</span>
      <button
        className="facebook"
        onClick={e => {
          e.preventDefault();
          window.open(
            facebookShareUrl,
            "Share on Facebook",
            "width=626, height=436"
          );
        }}
      >
        <FaFacebook />
      </button>
      <button
        className="twitter"
        onClick={e => {
          e.preventDefault();
          window.open(
            twitterShareUrl,
            "Share on Twitter",
            "height=320, width=500"
          );
        }}
      >
        <FaTwitter />
      </button>
      <button
        className="linkedin"
        onClick={() => alert("hi")}
      >
        <FaLinkedin />
      </button>
    </ArticleSharingWrapper>
  );
};

const SocialNetworkSharing = ({ isDark, isFloatingHeader, pathName }) => {
  const { siteUrl } = useSiteMetadata();
  const currentPageUrl = `${siteUrl}${pathName}`;

  return (
    <Wrapper isDark={isDark} isFloatingHeader={isFloatingHeader}>
      {isFloatingHeader ? renderArticleSharingLinks(currentPageUrl) : (
        <ul>
        {Object.values(SOCIAL_NETWORK_LINKS_MAP).map(link => (
          <li>
            <a href={link.url} title={`Naruth Kongurai's ${link.name}`}>
              {link.icon}
            </a>
          </li>
        ))}
        </ul>
      )}
    </Wrapper>
  );
};

SocialNetworkSharing.propTypes = {
  isDark: PropTypes.bool,
  isFloatingHeader: PropTypes.bool,
  pathName: PropTypes.string.isRequired
};

SocialNetworkSharing.propTypes = {
  isDark: false,
  isFloatingHeader: false
};

export default SocialNetworkSharing;
