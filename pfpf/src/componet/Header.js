// import React from 'react';
import Navi from './Navi';
    
    function Header(props) {
        return (
                <div id='header' className='d-flex justify-content-between position-fixed pt-3'>
                    <h1 className='d-flex px-4'>
                        <img src="../../../img/logo.png" className='img-fluid' alt="logo"/>
                    </h1>
                    <Navi></Navi>
                </div>
            
        );
    }
    
    export default Header;
