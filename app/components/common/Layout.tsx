import Footer from "./footer/Footer"

const Layout = props => {
  return (
    <div>
      <div style={{ maxWidth: 480, margin: '0 auto' }} {...props}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout