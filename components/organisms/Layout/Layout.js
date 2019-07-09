import Header from '../Header'
import Footer from '../Footer'

const Layout = (props) => {
  return (
    <>
      <Header />
      <main id='main'>
        {props.children}
      </main>
      <Footer />

      <style jsx>{`
        font-family: sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;

        #main {
          padding: 20px;
        }
      `}</style>
    </>
  )
}

export default Layout