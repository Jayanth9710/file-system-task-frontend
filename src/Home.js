import React from 'react'
import { useNavigate } from "react-router-dom";
import env from "./Settings";
import axios from 'axios'

function Home() {
    let navigate = useNavigate();

    const createfolder = async () => {
        try {
            const data = await axios.post(`${env.api}/newfile`)
        } catch (error) {
         console.log(error)   
        }
    }
    return (
        <div className="App">
        <div class="jumbotron">
     <h1>File-System Task!</h1>
     <p>To create file in a new folder click "Create a file".  <br/> To check the contents of the folder created clicl " View contents of the folder"</p>
     <p>
       <button class="btn btn-primary btn-lg" onClick={createfolder}  >Create a file</button>
       <button class="btn btn-primary btn-lg" onClick={()=>{navigate('/folder')}} >View contents of the folder</button>
     </p>
   </div>
       </div>
    )
}

export default Home
