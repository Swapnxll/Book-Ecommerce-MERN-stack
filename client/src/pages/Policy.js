import React from 'react'
import Layouts from '../components/Layout/Layouts'

const Policy = () => {
  return (
    <Layouts title={"Privacy Policy"}>
    <div className="policy">
      
      <div className="image-container">
        <img src='/images/policyjpg.jpg' alt="Police" className="policy-image" />
      </div>
      <div className="policy-text">
        POLICY?!!
      </div>
    </div>
  </Layouts>
  )
}

export default Policy
