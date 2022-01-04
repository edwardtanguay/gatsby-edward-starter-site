import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../styles/reset.scss';
import '../styles/main.scss';
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
	<Layout>
		<Seo title="Welcome" />
		<p>Welcome to our project.</p>
		<StaticImage src="../images/project.png" alt="project" 
			width={200}
		/>
	</Layout>
)

export default IndexPage;
