import { privateAxios } from "./helper"

export const createPrescription =(prescriptionData)=>{
        return privateAxios
        .post(`/user/${prescriptionData.id}/doctor/${prescriptionData.DoctorId}/prescriptions}`,prescriptionData).then(response=>response.data )
}