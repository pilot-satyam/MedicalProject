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
        }).then((response)=>response.data)
};

