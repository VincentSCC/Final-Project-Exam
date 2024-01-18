import React from "react";
import './About.css';
import profile from '../../assets/pfp1.jpg'

const About = () => {
    return(
        <>
        <div className="aboutMain"  id="about">
            <div className="intro-about">
                <img src={profile} alt="image" className="mePic" />
                <div className="me">
                    <h1>HELLO THERE!</h1>
                    <p>I am <i>VINCENT T. TIMOD</i>, a BSIT student from Saint Columban College.
                    My passion is to dance everyday, everywhere, hihi.
                    </p>
                </div>
            </div>
            <hr class="solid"></hr>
            <div className="cont-sec">
                <div className="me">
                <h1>I'm a programmer.</h1>
                    <p>For the front-end I usually work with Javascript, either standalone or 
                        including popular frameworks like ReactJS and VueJS. I also make the
                         web pretty by using Sass, CSS and, whenever needed, any of their 
                        friends: Bootstrap, Bulma, etc.
                        For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, of course, 
                        whenever the project requires PHP, I do PHP as well (Wordpress, Laravel, etc).
                    </p>
                </div>
            </div>

            <div className="cont-sec">
                <div className="me">
                <h1>Also a designer.</h1>
                    <p>I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign, Lightroom
                         or Xd are some kind of industry standards and I love working with them. I'm not limited to them, 
                         though: Gimp, Inkscape or Figma are also very valid applications that I've been working with.

                        User interfaces, brochures, books, branding... You name it! As I mentioned, creating pretty 
                        things is particularly important for me.
                    </p>
                </div>
            </div>
            <hr class="solid"></hr>
        </div>
        </>
    );
}

export default About;