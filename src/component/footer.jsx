import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="page-footer #7986cb indigo lighten-2">
      <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} All right reserved
            <Link className="grey-text text-lighten-4 right" to="/">More Info</Link>
            </div>
          </div>
    </footer>
  )
}

export default Footer
