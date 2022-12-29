import React from 'react';

function Contact(props) {
    return (
        <div id="contact" href="#co_S" className='container'>
            <form  className="container"action="데이터를 저장해줄 서버페이지경로" method="post" name="contact" id="contact">
    <input type="hidden" name="area"/>
    <ul className="row">
        <li className="col-md-4 ">
            <div className="blueline ">
                <p className="  mb-0 px-0">
                    <label className="bg-box px-0">회사명</label>
                </p>
                <p className="px-0">
                    <input className="text-light d-block" type="text" name="company" placeholder="회사명을 입력해주세요."/>
                </p>
            </div>
        </li>
        <li className="col-md-2 offset-md-6">
            
            <div className="blueborder js-selectDiv bg-box  overflow-hidden position-relative">
                <p className="pt-1 text-center">지역선택<i className="xi-angle-down"></i>
                </p>
                <ul className="position-absolute areaLi">
                    <li>잠실</li>
                    <li>강남</li>
                    <li>정자</li>
                    <li>판교</li>
                </ul>
            </div>
        </li>
        <li className="col-md-3">
            <div className="blueline d-flex flex-column ">
                <p className=" mb-0 px-0">
                    <label for="" className="bg-box px-0">담당자명</label>    
                </p>
                <p className=" ">
                    <input type="text" name="people" placeholder="성함"/>
                </p>     
            </div>
        </li>
        <li className="col-md-9 pl-md-3">
            <div className="blueline d-flex flex-column ">
                <p className=" mb-0 px-0">
                    <label for="" className="bg-box px-0">연락처</label>
                </p>
                <p className="text-light">
                    <input className="text-light" type="text" name="contactsns" placeholder="카톡 아이디 or 연락처 or 메일 남겨주세요."/>
                </p>
                
            </div>
        </li>
        <li className="col-md-12">
            <div className="blueline d-flex flex-column">
                <p className="  mb-0 col-md-12 px-0">
                    <label className="bg-box ">남기고 싶은 말</label>
                </p>
                <p className="col-md-12 px-0 text-light">
                    <input className="text-light d-block" type="text" name="company" placeholder="자유롭게 작성 부탁드립니다."/>
                </p>
            </div>
        </li>
    </ul>
    <div className="d-flex row">
        <p className="d-flex col-sm-5 col-md-3 align-items-center px-0">
            <input type="checkbox" id="agreen" className=""/>
            <label for="agreen" className="xi-radiobox-blank mt-2 px-3">개인정보정책 <a href="#popagree" id="popClick">약관</a></label>
        </p>
        <p className="d-flex col-3">
            <input className="sendBox"type="submit"  value="SEND"/>
        </p> 
    </div>
    
   </form>
        </div>
    );
}

export default Contact;