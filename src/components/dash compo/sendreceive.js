import React, { createElement } from 'react'
const Sendreceive=({ msgDetail })=>{
const currentDate = new Date();
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
currentMinute=currentMinute<10?'0'+currentMinute:currentMinute;
currentHour=currentHour<10?'0'+currentHour:currentHour;
  return (
      <div>
          <div className="send" style={{display:"flex"}}>
            <div style={{display:"flex",flexDirection:"column"}}>
              <div className='test' style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontWeight: "bold" }}>{msgDetail}</div>
              </div>
            <div style={{display:"flex",transform:"translateX(25px)"}}><span style={{fontSize:"0.8rem",color:"#DFDFDF"}}>{currentHour}:{currentMinute}</span><p style={{fontSize:"1.1rem",float:"right",marginLeft:"0.6rem"}}/></div>
            </div>
          </div>
      
        
      </div>
    
  )
}
export default Sendreceive
