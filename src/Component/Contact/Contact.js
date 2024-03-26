import axios from 'axios';
import React, { useState } from 'react'


function Contact() {
  const[data, setData] = useState({
    full_name: "",
    email_id: "",
    mob_num: "",
    subject: "",
    message: ""
  })


  const handler = (e) =>{
    // console.log(e.target.value);
    const{name,value}=e.target
    setData((pre)=>{
      return{
        ...pre,
        [name]: value
      }
    })
  }

  const savedata = async(e) =>{
    e.preventDefault();
    // console.log(data)
    const datasave = await axios.post("http://127.0.0.1:8000/insert_data/", data)
    // console.log(datasave,"save")
    // if(datasave.data.success){
    //   setMsg("Message send successfully")
    // }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center fs-1 mb-4">
            Contact Us
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
                <img src="gallery/contact.png" alt="" />
              </div>
              <div className="col-md-8">
                <form action="" onSubmit={savedata}>
                  <div className="row">
                    <div className="col mb-2">
                      <input type="text" name='full_name' className="form-control" onChange={handler} placeholder="Full Name" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col mb-2">
                      <input type="text" name="mob_num" className="form-control" onChange={handler} placeholder="Mobile No." />
                    </div>
                    <div className="col mb-2">
                      <input type="text" name='email_id' className="form-control" onChange={handler} placeholder="Email Id" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <input type="text" className="form-control" name='subject' onChange={handler} placeholder="Subject" />
                  </div>
                  <div className="mb-2">
                    <textarea name='message' className="form-control" style={{ width: "100%", height: "100px" }} onChange={handler} placeholder='Message'></textarea>
                  </div>
                  <div className="mb-2">
                    <input type="submit" value="Send Message" className='btn btn-primary' style={{ width: "100%" }} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact