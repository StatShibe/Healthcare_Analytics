//import DoctorDisplayCard from "@/components/custom/doctordisplaycard"
import { Link } from "react-router-dom"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
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

const DoctorList = () => {

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
           <div className="h-screen p-6">
            <Table className="font-['Poppins']">
                <TableCaption><Button><Link to = "/insertdoctor">Add Doctor</Link></Button></TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Doctor ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Specialization</TableHead>
                    <TableHead>Phone Number</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Years of Experience</TableHead>
                    <TableHead>DOB</TableHead>
                    <TableHead className="text-right">Duty Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        doctors?.map((doctor, index) => (
                        <TableRow key={index} className="hover:bg-sky-700 hover:text-white" onClick={() => window.location.href = `/patientdetails`}>
                            <TableCell className="font-medium">{doctor.user_id}</TableCell>
                            <TableCell>{doctor.name}</TableCell>
                            <TableCell>{doctor.gender}</TableCell>
                            <TableCell>{doctor.specialization}</TableCell>
                            <TableCell>{doctor.ph_no}</TableCell>
                            <TableCell>{doctor.email}</TableCell>
                            <TableCell>{doctor.years_expr}</TableCell>
                            <TableCell>{new Date(doctor.dob).toLocaleDateString()}</TableCell>
                            <TableCell className={`text-right ${doctor.on_duty == 'Y' ? 'text-green-300' : 'text-red-600'}`}>{ doctor.on_duty == 'Y' ? "Available" : "Unavailable"}</TableCell>
                        </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            </div>
        </>
    )
}

export default DoctorList