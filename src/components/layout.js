import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
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
			<nav>
				<Link to="/">Welcome</Link> <br />
				<Link to="/about">About</Link> <br />
			</nav>
			<main>{children}</main>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
