import React from 'react';

function intro(props) {
    return (
        <div id='intro' className='position-relative'>
            <div className='d-flex row  pt-3'>
                <div className='d-flex col-12 god1'>
                    <img src="../../../img/god1.png" alt="god1" />
                </div>
                <div className='d-flex col-12 py-0'>
                    <img className='god2 col-4' src="../../../img/god2.png" alt="god2" />
                    <img className='god3 col-4' src="../../../img/god3.png" alt="god3" />
                    <img className='god4 col-4' src="../../../img/god4.png" alt="god4" />
                </div>
            </div>
        </div>
    );
}

export default intro;