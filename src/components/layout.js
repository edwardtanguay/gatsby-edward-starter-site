import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import { Link } from "gatsby"

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
     site {
      siteMetadata {
        title
        subtitle
      }
    }
    }
  `)

	return (
		<>
			<h1>{data.site.siteMetadata.title}</h1>	
			<Link to="/">Welcome</Link> <br />
			<Link to="/about">About</Link> <br />
			<div
				style={{
					margin: `0 auto`,
					maxWidth: 960,
					padding: `0 1.0875rem 1.45rem`,
				}}
			>
				<main>{children}</main>
			</div>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
