import React from "react";
import './Works.css';
import item1 from '../../assets/card1.jpg';
import item2 from '../../assets/card2.jpg';
import item3 from '../../assets/card3.jpg';
import item4 from '../../assets/card4.jpg';

const Works = () => {
    return(
        <>
            <body className="bod-work" id="work">
                <h1 className="title-here">My Works</h1>
                <hr class="solid"></hr>
                <div className="work-main">

                    <div className="card">
                        <img src={item1} alt="img"/>
                        <div className="item-content">
                            <h1>My Work 1</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                 do eiusmod tempor incididunt ut.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={item2} alt="img"/>
                        <div className="item-content">
                            <h1>My Work 2</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                 do eiusmod tempor incididunt ut.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={item3} alt="img"/>
                        <div className="item-content">
                            <h1>My Work 3</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                 do eiusmod tempor incididunt ut.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={item4} alt="img"/>
                        <div className="item-content">
                            <h1>My Work 4</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                 do eiusmod tempor incididunt ut.</p>
                        </div>
                    </div>

                </div>
            </body>
        </>
    );
}

export default Works;