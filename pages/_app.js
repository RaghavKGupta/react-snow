import Layout from '../components/Layout'
import '../cbxTest.scss'
import '../uswds-2.12.2/css/uswds.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
