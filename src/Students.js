import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Back from './Back'

const Students = () => {

  const [data,setData]=useState({
    toggler: true,
  });

  const[myObj,setMyObj]=useState(
    [
      { 
          id:1,
          name:'John',
          age: '26',
          course: 'MERN',
          batch: 'October'
      },
      {
          id:2,
          name:'Doe',
          age: '25',
          course: 'MERN',
          batch: 'November'
      },
      {
          id:3,
          name:'Biden',
          age: '26',
          course: 'MERN',
          batch: 'September'
      },
      {
          id:4,
          name:'John',
          age: '26',
          course: 'MERN',
          batch: 'October'
      },
      {
          id:5,
          name:'Barar',
          age: '22',
          course: 'MERN',
          batch: 'September'
      },
      {
          id:6,
          name:'christ',
          age: '23',
          course: 'MERN',
          batch: 'October'
      },
      {
          id:7,
          name:'Elent',
          age: '24',
          course: 'MERN',
          batch: 'November'
      },
  
  ]
  )

  const [editToggle,setEditToggle]=useState(true);
  const [editId,setEditId]=useState(null);
  var [addBtn,setAddBtn]=useState(true);

  const [objState,setObjState]=useState({
    id:'',
    name:'',
    age : '',
    course : '',
    batch : '',
  })

  const [AddUpdate,setAddUpdate]=useState(true);

const changeHandler=(e)=>{
  setObjState({...objState,[e.target.name]:e.target.value})
}

const submitHandler=(e)=>{
  e.preventDefault()
  
  if(!editToggle && !addBtn){
    setAddBtn(true);
    setMyObj(
      myObj.map((elem)=>{
        if(elem.id === editId){
          return {...elem,name:objState.name,age:objState.age,course:objState.course,batch:objState.batch}
        }
        return elem;
      })
    )
  }


  var tempObj={
    name:objState.name,
    age:objState.age,
    course:objState.course,
    batch:objState.batch,
  }

  console.log(tempObj);
  console.log(myObj.length);
  tempObj=myObj;

  tempObj=objState;
  myObj.push(tempObj)
  setObjState({id:myObj.length,name:'',age:'',course:'',batch:''})
  
  setData({toggler:!data.toggler})
}

  const toggleFunc=(e)=>{
    setData({toggler:!data.toggler})
    setAddUpdate(!AddUpdate)
  }
   
  const editFunc=(id)=>{
    setEditId(id);
    setEditToggle(false);
    setAddBtn(false);
    console.log(editId);
    var editData=myObj.filter((ele)=>(ele.id)===id);
    
    console.log();
    setObjState({...objState,name:editData[0].name,age:editData[0].age,course:editData[0].course,batch:editData[0].batch})
    console.log(objState.name);
    setData({toggler:!data.toggler})
    editData={};
    console.log(editData);
    
  }

  return (
    <>
      {data.toggler ?
        <div>
          <div className="header">
            <div className="head">
              Student Details
            </div>
            <div className="head_btn">
              <Link to='/students-list' ><button className='h_btn' onClick={toggleFunc} >AddNew Student</button></Link>
            </div>
          </div>
          <Back objPass={myObj}  toggleFunc={toggleFunc} submitHandler={submitHandler} editFunc={editFunc} AddUpdate={AddUpdate} />
        </div>
        : 
        <div className='container'>
          <form onSubmit={toggleFunc} className='form_submit'>
            <input type="text" className='inpt' name='name' onChange={changeHandler} value={objState.name} placeholder='name' />
            <input type="text" className='inpt' name='age' onChange={changeHandler} value={objState.age} placeholder='age' />
            <br /><br />
            <input type="text" className='inpt' name='course' onChange={changeHandler} value={objState.course} placeholder='course' />
            <input type="text" className='inpt' name='batch' onChange={changeHandler} value={objState.batch}  placeholder='batch'/>
            <br /><br />
            <button onClick={toggleFunc} className='simplebtns'>
            <Link to='/students'>CANCEL</Link>
              </button>
            
            <button type='submit' onClick={submitHandler} className='form_btn simplebtns' >
              <Link to='/students'>SUBMIT</Link>
              </button> 
            
            
          </form>
        </div>
      }
    </>
  )
}

export default Students