import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Imesha</h1>

        <ul classNames="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">Testimonials</a>
          </li>
        </ul>

        <div className="footer__social">
            <a href="https://www.facebook.com/" className="footer__social-link" target='_blank'>
                <li className="bx bxl-facebook"></li>
            </a>

            <a href="https://www.facebook.com/" className="footer__social-link" target='_blank'>
                <li className="bx bxl-instagram"></li>
            </a>

            <a href="https://www.facebook.com/" className="footer__social-link" target='_blank'>
                <li className="bx bxl-twitter"></li>
            </a>
        </div>

        <span className='footer__copy'>&#169; Imesha Dilshani. All rigths reserved</span>
      </div>
    </footer>
  )
}

export default Footer