import React from 'react';

function intro(props) {
    return (
        <div id={props.contentid} className='position-relative container'>
            <div className='pt-3'>
                <div className='d-flex row god1'>
                    <img className='god1 py-5 col-12'src="../../../img/god1.png" alt="god1" />
                    <img className='god2 pt-5 col-md-4' src="../../../img/god2.png" alt="god2" />
                    <img className='god3 pt-5 col-md-4' src="../../../img/god3.png" alt="god3" />
                    <img className='god4 pt-5 col-md-4' src="../../../img/god4.png" alt="god4" />
                </div>
            </div>
        </div>
    );
}

export default intro;