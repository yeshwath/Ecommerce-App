import React from 'react'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'

const Women = () => {

    const firstFiveImages = womanData.slice(0,5)

  return (
    <>
    <h2>Women</h2>
    <div className='proSection'>
         {
             firstFiveImages.map((item)=>{
                 return(
                     <div className='imgBox'>
                        {/* <Link to='/watch'> */}
                         <img className='proImage' src={item.image} alt="" />
                        {/* </Link> */}
                     </div>
                 )
             })
         }
     </div>
    
    </>
  )
}

export default Women