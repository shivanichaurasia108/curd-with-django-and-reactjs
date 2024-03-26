import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function Editcontact() {
    const navigate = useNavigate();
    const params = useParams();
    const [state, setState] = useState({
        full_name: "",
        email_id: "",
        mob_num: "",
        subject: "",
        message: ""
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    // console.log(params)

    useEffect(() => {
        async function fetchdata() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/update_data/${params.id}/`);
                setState(response.data); // Assuming the data structure matches your state structure// 
                // console.log(response.data);
            } catch (error) {
                console.log("Error fecting data:", error);
            }
        }
        fetchdata();
    }, [params.id])

    const updatedata = async (event) =>{
        event.preventDefault();
        // console.log(state)
        const updatedata = await axios.put(`http://127.0.0.1:8000/update_data/${params.id}/`, state)
        // console.log(updatedata.data);
        // if (updatedata.data.success) {
            navigate("/contactlist")
            console.log("next page")
        // }
        // updatedata.save()
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 text-center fs-1 mb-4">
                        Edit data
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form action="" onSubmit={updatedata}>
                            <div className="row">
                                <div className="col mb-2">
                                    <input type="text" name='full_name' value={state.full_name} onChange={handleInputChange} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-2">
                                    <input type="text" name="mob_num" value={state.mob_num} onChange={handleInputChange} className="form-control" />
                                </div>
                                <div className="col mb-2">
                                    <input type="text" name='email_id' value={state.email_id} onChange={handleInputChange} className="form-control" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" value={state.subject} onChange={handleInputChange} name='subject' />
                            </div>
                            <div className="mb-2">
                                <textarea name='message' className="form-control" style={{ width: "100%", height: "100px" }} value={state.message} onChange={handleInputChange} ></textarea>
                            </div>
                            <div className="mb-2">
                                <input type="submit" value="Update" className='btn btn-primary' style={{ width: "100%" }} />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default Editcontact