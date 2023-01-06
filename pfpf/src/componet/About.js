import React from 'react';

function About(props) {
    return (
        <div id={props.contentid} >
            <div class="gradient"></div>
            <div class="container">
                <span class="bg_B_Font px-5" >LSJ;</span>
                <div class="card_wrap" >
                    <div class="card_F text-center">
                        <strong class="card_B_text p-1 ">
                            WELCOME,<br/>
                            MY NAME IS<br/>
                            <span>LEE SO JEONG</span>
                        </strong>
                        <img className="card_photo"src="../../img/my.png" alt="my"/>
                        <div id="circle_btn" class=" flex-column">
                            <img class="btn_rotate"src="../../img/about_btn.png" alt="about_btn"/>
                            {/* <span class="text-center ">ABOUT<br/>ME</span>
                            <img class="about_arrow" src="../../img/about_arrow.png" alt="about_arrow"/> */}
                            <img class="about_arrow_H" src="../../img/about_arrow_H.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default About;