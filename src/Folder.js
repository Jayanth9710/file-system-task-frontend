import axios from 'axios'
import { React, useEffect, useState} from "react";
import env from "./Settings";


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
        <div>
            {folderDetails.map((e,index)=>
            (
                <h1>
                    {folderDetails.name}
                </h1>
            )
            )}
        </div>
    )
}

export default Folder
