import React from 'react'
import { Link } from 'react-router-dom'

const Back = ({objPass,toggleFunc,submitHandler,editFunc}) => {
  return (
    <>
        <div className="table">
                    <div className="box">
                        <div className='for_name mat_left' >Name</div>
                        <div className='for_age for_margin'>Age</div>
                        <div className='for_course for_margin'>Course</div>
                        <div className='for_batch for_margin'>Batch</div>
                        <span>Change</span>
                    </div>
              {objPass.map((ele)=>{
                return(
                    <div className="box" key={ele.id}>
                        <div className='for_name' >{ele.name}</div>
                        <div className='for_age for_margin'>{ele.age}</div>
                        <div className='for_course for_margin'>{ele.course}</div>
                        <div className='for_batch for_margin'>{ele.batch}</div>
                        <Link to={`/students-list/${ele.id}`}>
                        <button onClick={()=>editFunc(ele.id)} className='btn_edit'>Edit</button>
                        </Link>
                    </div>
                )
              })}
        </div>
    </>
  )
}

export default Back