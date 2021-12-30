import axios from 'axios'
import { React, useEffect, useState} from "react";
import env from "./Settings";
import './App.css'


function Folder() {
    const[folderDetails,setfolderDetails] = useState([]);
    const readFolder = async () => {
        try {
            const data = await axios.get(`${env.api}/folder`);
            setfolderDetails(data.data)
            console.log(data.data)
            
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        readFolder();
    }, [])
    return (
        <div className='files__list__card'>
            {folderDetails.map((e,index)=>
            (
                <div>
                    <h1 className='Title'>Contents of the Folder</h1>
                <h1>
                    {e}
                </h1>
                </div>
            )
            )}
        </div>
    )
}

export default Folder
