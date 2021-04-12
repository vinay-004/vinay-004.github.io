import { Link } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <Layout>
      <p> I am a graduate student in Data Science (Software Engineering) at <Link href= 'https://www.rit.edu/study/data-science-ms'> Rochester Institute of Technology </Link>. I work under  <Link href = 'http://www.se.rit.edu/~travis/index.php'> Dr.Travis Desell </Link> on Neural Architectural Search.</p>
      <p></p>
      <p>Currently, I am on a Co-op as Software Engineer at <Link href = 'https://www.sundensity.net/'> SunDensity Inc.</Link>. My work includes developing a distributed ledger web application.</p>
      <p> LinkedIn  : <Link to= 'https://www.linkedin.com/in/jain-vinay-hemant' target = "_blank">LinkedIn</Link> </p>
      <p> Github  : <Link to= 'https://github.com/vinay-004' target = "_blank">Github</Link> </p>
    </Layout>
  )
}

export default IndexPage