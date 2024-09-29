import DoctorDisplayCard from "@/components/custom/doctordisplaycard"
import axios from 'axios'
import { useState, useEffect } from "react"

interface Doctor {
    user_id : number,
    name : string,
    ph_no : number,
    dob : string,
    gender : string,
    address : string,
    specialization : string,
    email : string,
    years_expr : number,
    on_duty : string,
    emp_ind : string
}

const DoctorDetails = () => {

    const [doctors, setDoctors] = useState<Doctor[]>([])
    const getDate = async() => {
        await axios.get<Doctor[]>(import.meta.env.VITE_SERVER_URL+'/doctor/all').then((response)=>{
            setDoctors(response.data)
            console.log(response.data)
        })
    }

    useEffect(() => {
        getDate()
    }, [])

    /*
    const doctors = [
        {
            name : "Haresh",
            specialization : "Cardio",
            experience : 5,
            phno : 9876543210,
            email : "haresh@gmail.com",
            active : true
        },
        {
            name : "John Doe",
            specialization : "Ortho",
            experience : 12,
            phno : 9876543098,
            email : "johndoe@gmail.com",
            active : false
        },
        {
            name : "John Doe",
            specialization : "Ortho",
            experience : 12,
            phno : 9876543098,
            email : "johndoe@gmail.com",
            active : false
        },
        {
            name : "John Doe",
            specialization : "Ortho",
            experience : 12,
            phno : 9876543098,
            email : "johndoe@gmail.com",
            active : false
        },
        {
            name : "John Doe",
            specialization : "Ortho",
            experience : 12,
            phno : 9876543098,
            email : "johndoe@gmail.com",
            active : false
        },
        {
            name : "John Doe",
            specialization : "Ortho",
            experience : 12,
            phno : 9876543098,
            email : "johndoe@gmail.com",
            active : false
        },
        {
            name : "John Doe",
            specialization : "Ortho",
            experience : 12,
            phno : 9876543098,
            email : "johndoe@gmail.com",
            active : false
        }
        
    ]

    */
    return(
        <>
            <div className="h-screen p-8 grid grid-cols-3">
                {
                    doctors?.map((doctor , index) => (
                        <DoctorDisplayCard
                            key={index}
                            name = {doctor.name} 
                            specialization = {doctor.specialization}
                            experience = {doctor.years_expr}
                            phno = {doctor.ph_no}
                            email = {doctor.email}
                            active = {doctor.on_duty == 'Y' ? true : false}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default DoctorDetails