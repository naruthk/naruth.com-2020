
import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";

import styled from '@emotion/styled';
import { Global } from '@emotion/core';
import { globalStyles, layout } from "../utils/styles";

const Layout = ({ children, isLargeHeader }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global styles={globalStyles} />
      <Header
        siteTitle={data.site.siteMetadata.title}
        isLarge={isLargeHeader}
      />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isLargeHeader: PropTypes.bool
}

Layout.defaultProps = {
  isLargeHeader: false
};

export default Layout
