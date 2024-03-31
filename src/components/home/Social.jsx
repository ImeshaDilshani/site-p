import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        {/* <a href="https://www.instagram.com/imeshadilshani21/" className="home__social-icon" target="_blank">
            <li className="uil uil-twitter"></li>
        </a> */}
        <a href="https://github.com/ImeshaDilshani" className="home__social-icon" target='_blank'>
            <li className="uil uil-github-alt"></li>
        </a>

        <a href="https://youtube.com/@MinuteMagic-ze1um?si=zUzyLQHWPbfq7Afp" className="home__social-icon" target='_blank'>
            <li className="uil uil-youtube"></li>
        </a>

        <a href="https://www.linkedin.com/in/imesha-dilshani-61862422b/" className="home__social-icon" target='_blank'>
            <li className="uil uil-linkedin"></li>
        </a>

    </div>
  )
}

export default Social