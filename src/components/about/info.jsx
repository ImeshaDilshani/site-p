import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <li className="bx bx-award about__icon"></li>
        <h3 className="about__title">Experience</h3>
          <span className="about__subtitle">Graphic Designing</span>
      </div>

      <div className="about__box">
        <li className="bx bx-briefcase-alt about__icon"></li>
        <h3 className="about__title">Completed</h3>
          <span className="about__subtitle">05 + Projects</span>
      </div>

      <div className="about__box">
      <li className="bx bx-support about__icon"></li>
        <h3 className="about__title">Support</h3>
          <span className="about__subtitle">Online 24/7</span>
      </div>

    </div>
  )
}

export default info