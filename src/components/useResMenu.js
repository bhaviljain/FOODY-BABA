import { useEffect, useState } from "react"
import { RecMenu } from "../../utils/constant"

const UseResMenu = (resid) =>{

const [resInfo  , setresInfo] = useState(null)

    useEffect (()=>{
        fetchData()
    })
    const fetchData=async () =>{
         const data = await fetch(RecMenu + resid)
        const json =  await data.json()
        setresInfo(json.data)
        console.log(json);
    }
    return resInfo
}
export default UseResMenu;