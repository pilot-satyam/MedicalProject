import { privateAxios } from "./helper"

export const createPrescription =(prescriptionData)=>{
        return privateAxios
        .post(`/user/${prescriptionData.id}/doctor/${prescriptionData.doctorId}/prescriptions`,prescriptionData).then(response=>response.data )
}