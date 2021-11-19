import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
      <Header />
      <script src="../js/uswds.min.js"></script>
        <main className={styles.main}>
          <div className={styles.container}>
          {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
