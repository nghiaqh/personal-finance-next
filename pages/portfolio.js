import { withRouter } from 'next/router'
import Layout from '../components/organisms/Layout'

const Portfolio = (props) => {
  return (
    <Layout>
      <h1>{props.router.query.title}</h1>
    </Layout>
  )
}

export default withRouter(Portfolio)