import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://www.instagram.com/" className="home__social-icon" target="_blank">
            <li className="uil uil-instagram"></li>
        </a>

        <a href="https://dribbble.com/" className="home__social-icon" target='_blank'>
            <li className="uil uil-dribbble"></li>
        </a>

        <a href="https://github.com/" className="home__social-icon" target='_blank'>
            <li className="uil uil-github-alt"></li>
        </a>
    </div>
  )
}

export default Social