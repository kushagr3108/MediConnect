import React from 'react'
import starIcon from "../../assets/images/Star.png";

const DoctorCard = () => {
    const {
        name,
        avgRating,
        totalRating,
        photo,
        specializtion,
        totalPatient,
        hospital,
    } = doctor;
  return (
    <div className='p-3 lg:p-5'>
        <div>
            <img src={photo} className='w-full' alt="" />
        </div>
    </div>
  )
}

export default DoctorCard