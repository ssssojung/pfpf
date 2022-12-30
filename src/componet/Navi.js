import React from 'react';
// import Scrollspy from "react-scrollspy";

function Navi(props) {
    const naviDb = [{
        naviText : "ABOUT ME",
        naviId : "#about"
      },
      {
        naviText : "SKILLS",
        naviId : "#skill"
                      },
      {
        naviText : "WORK",
        naviId : "#work"
                      },
      {
        naviText : "CONTACT",
        naviId : "#contact"
                      }]
    return (
        <div className="d-none d-md-flex px-4 mb-0 " items={[naviDb[0].naviId,naviDb[1].naviId,naviDb[2].naviId,naviDb[3].naviId]} >
     
        {
          naviDb.map((item, index) =>{
            return(
              <li><a href={item.naviId} className="text-decoration-none ps-md-3 pe-md-0 px-3">{item.naviText}</a></li>
            )
          }
          )
            
        }
       </div>
    );
    
}
export default Navi;
