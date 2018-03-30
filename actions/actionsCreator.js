import {ACTION_GET_SCHOOLLIST} from './actions';


const getSchoolList=()=> dispatch =>{
    console.log("fetching")
    fetch('https://data.cityofnewyork.us/resource/97mf-9njv.json')
    .then(res=>res.json())
    .then(data=>dispatch({
            type: ACTION_GET_SCHOOLLIST,
            payload:data
        }))
   
}

export default getSchoolList;