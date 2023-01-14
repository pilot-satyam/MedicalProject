import { myAxios } from "./helper";

export const loadAllDoctors=()=>{
    return myAxios.get(`/doctors/`).then(response=>{return response.data})
}
