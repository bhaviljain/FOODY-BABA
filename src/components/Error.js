import { useRouteError } from "react-router-dom"
const Error = () =>{
   const err = useRouteError()
    return(
        <div>
            <img src="public/images/download.jpg"/>
            <h1>ERROR.....SORRY ITS NOT YOU ITS US</h1>
            <h1>
           {err.status} : {err.statusText}

            </h1>
        </div>
    )
}

export default Error