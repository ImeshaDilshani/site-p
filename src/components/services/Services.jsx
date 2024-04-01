import React, { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState();
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id='services'>
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-brackets-curly services__icon"></i>
                    <h3 className="services__title">Web <br/> Developer</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(1)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                    <div className='services__modal-content'>
                    <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Web Developer</h3>
                    <p className="services__modal-description">Full-stack developer with experience in HTML, CSS, JavaScript, React, Java, Spring Boot and Flutter for building dynamic and robust web and mobile applications.</p>
                    
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Develop clean and maintainable code.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Build user-friendly and responsive web interfaces.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Design visually appealing and interactive web experiences.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Implement dynamic functionalities and user interactions.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Utilize modern web development frameworks (e.g., React, Angular, Vue.js) for efficient development.</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-chart services__icon"></i>
                    <h3 className="services__title">Data <br/> Analyst</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(2)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div  className={toggleState === 2 ? "services__modal active-modal": "services__modal"}>
                    <div className='services__modal-content'>
                    <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Data Analyst</h3>
                    <p className="services__modal-description">I am a data analyst with a passion for transforming raw data into actionable insights. </p>
                    
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Clean and organize complex datasets.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Perform statistical analysis and modeling.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Create compelling data visualizations.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Communicate insights effectively to stakeholders.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Identify trends and opportunities for business growth.</p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-palette services__icon"></i>
                    <h3 className="services__title">Graphic <br/> Designer</h3>
                </div>
                <span className="services__button" onClick={()=>toggleTab(3)}>View More
                <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 3 ? "services__modal active-modal": "services__modal"}>
                    <div className='services__modal-content'>
                    <i onClick={()=> toggleTab(0)} className="uil uil-times services__modal-close"></i>
                    <h3 className="services__modal-title">Graphic Designer</h3>
                    <p className="services__modal-description">I'm a graphic designer with skills in Photoshop and Illustrator. I can turn your ideas into cool designs, like logos, flyers, and brochures. I've done freelance work before and can also edit photos.</p>
                    
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Craft compelling and visually striking designs.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Develop strong visual identities and branding materials.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Design effective user interfaces with a focus on usability.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Master various design tools (e.g., Photoshop, Illustrator) to bring ideas to life.</p>
                        </li>

                        <li className="services__modal-service">
                            <i  className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Deliver high-quality visuals that resonate with your target audience.</p>
                        </li>

                    </ul>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Services