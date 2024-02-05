import React from 'react'

const Rightbar = ({data,bgcolor,color}) => {
  return (
    <>
    <div className="right_container" style={{
      backgroundColor:`${bgcolor}`,color:`${color}`
    }}>
      <div className="post_img">
        <img id='_img' src={data.img} alt="" />
        <div className="inside_img">
          <div className="img">
            <img src={data.authorImg} alt="" />
          </div>
          <div className="text">
            <h5>{data.authorName}</h5>
            <p style={{fontSize:'12px'}}>{data.authortext}</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Rightbar