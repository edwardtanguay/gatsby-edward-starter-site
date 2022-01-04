import * as React from "react"
import '../styles/reset.scss';
import '../styles/main.scss';
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="About" />
		<p>This is going to be a good project.</p>
  </Layout>
)

export default SecondPage
