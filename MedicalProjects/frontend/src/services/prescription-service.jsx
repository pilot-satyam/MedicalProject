import { myAxios, privateAxios } from "./helper"

export const createPrescription =(prescriptionData)=>{
        return privateAxios
        .post(`/user/${prescriptionData.id}/doctor/${prescriptionData.doctorId}/prescriptions`,prescriptionData).then(response=>response.data )
}
 
// upload report Images

export const uploadImage = (image,Id)=>{
        let formdata = new FormData();
        //here "image" is from prescription controller
        formdata.append("image",image);
        return privateAxios
        .post(`/prescription/image/upload/${Id}`,formdata,{
                headers:{
                        'Content-Type'  :'multipart/form-data'
                } 
        })
        .then((response)=>response.data)
};

//load prescription by doctor
export function loadPrescriptionByDoctor(doctorId)
{
        return privateAxios
        .get(`/doctor/${doctorId}/prescriptions`)
        .then(response => response.data)
};

//load prescription for user
export function loadPrescriptionForUser(userId)
{
        return privateAxios
        .get(`/user/${userId}/prescriptions`)
        .then(response => {return response.data})
};

