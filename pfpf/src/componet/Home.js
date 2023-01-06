import React from 'react';
function Home(props) {
    return (
        <div>
            <section id='home' className='d-flex flex-column  ' >
                    <div className=' textBox d-flex align-items-start flex-column px-3'>
                        <p className='d-flex '>
                            안녕하세요. 신입 프론트 엔드 개발자 이소정입니다.<br/>이 포트폴리오에서 프론트 엔드 개발자를 꿈꾸며 준비한,<br/>제 땀과 노력의 결과인 작업물들을 보실 수 있습니다. <br/>
                        </p>
                        <p className='d-flex row'>
                            <span className='d-flex '>web front-end deceloper</span> 
                            <hr className='d-flex'/>
                        </p>
                        <h1>Portfolio</h1>
                    </div>
                </section>
        </div>
    );
}

export default Home;