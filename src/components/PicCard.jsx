import React from 'react'

function PicCard(props) {
  return (
    <>
      <div style={{border:"2px solid red", padding:"10px", display:"inline-block"}}>
        <img src={props.showimg} style={{width:props.wi}} alt="" />
        
      </div>
    </>
  )
}

export default PicCard
