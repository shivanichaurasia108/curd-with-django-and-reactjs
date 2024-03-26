import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Contactlist() {

    const [store, setStore] = useState([])

    const getdata = async () => {
        const get_data = await axios.get("http://127.0.0.1:8000/all_data/")
        setStore(get_data.data);
        // console.log(get_data);
    }

    const deletedata = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/delete_data/${id}`)
            if (response.status === 204) {
                // Successfully deleted
                alert("Data deleted successfully");
                getdata();
            } else {
                // Handle unexpected status codes
                alert(`Failed to delete data. Status code: ${response.status}`);
                console.error("Unexpected status code:", response.status, response.data);
            }
        } catch (error) {
            // Handle network errors or other issues
            console.error("Error deleting data:", error);
            alert("An error occurred while deleting data. Check console for details.");
        }
    }

    useEffect(() => {
        getdata();
    }, []);
    return (
        <>
            <div className="container m-3" >
                <div className="row">
                    <div className="col-md-12">
                        <div style={{ float: "right" }} className='mb-3'>
                            <Link to="/" className='btn btn-primary'>Add Contact</Link>
                        </div>

                        <div>
                            <table className='table table-striped' align='center' width="100%" >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email Id</th>
                                        <th>Subject</th>
                                        <th>Mobile No.</th>
                                        <th>Message</th>
                                        <th>Modify</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        store.map((el, index) =>
                                            <tr key={index}>
                                                <td>{el.id}</td>
                                                <td>{el.full_name}</td>
                                                <td>{el.email_id}</td>
                                                <td>{el.subject}</td>
                                                <td>{el.mob_num}</td>
                                                <td>{el.message}</td>
                                                <td>
                                                    <Link to={`/editcontact/${el.id}`} className='btn btn-success'>Edit</Link>&nbsp;
                                                    <input type="submit" value="Delete" className='btn btn-danger' name="" id="" onClick={() => deletedata(el.id)} />
                                                </td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactlist
