import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useEffect, useState } from "react"
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

interface Patient {
    patient_id : number,
    first_name : string,
    last_name : string,
    age : number, 
    gender : string,
    primary_ph_no : number,
    secondary_ph_no : number,
    address : string,
    last_visit : string,
    treatment_status : string
}
/*
const patientDetails = [
    {
        cust_id : 1,
        name : "John Doe",
        age : 32,
        gender : "male",
        phno : 9876543210,
        address: "Chennai",
        treatment_status : "Completed",
        last_visit : "12/02/2020"
    },
    {
        cust_id : 1,
        name : "John Doe",
        age : 32,
        gender : "male",        
        phno : 9876543210,
        address: "Chennai",
        treatment_status : "Completed",
        last_visit : "12/02/2020"
    },
    {
        cust_id : 1,
        name : "John Doe",
        age : 32,
        gender : "male",
        phno : 9876543210,
        address: "Chennai",
        treatment_status : "Completed",
        last_visit : "12/02/2020"
    },
    {
        cust_id : 1,
        name : "John Doe",
        age : 32,
        gender : "male",
        phno : 9876543210,
        address: "Chennai",
        treatment_status : "Completed",
        last_visit : "12/02/2020"
    }
    
]
*/

const PatientList = () => {

    const [patients, setPatients] = useState<Patient[]>([]);

    const getData = async() => {
        await axios.get<Patient[]>(import.meta.env.VITE_SERVER_URL+'/patients/all').then((response)=>{
            setPatients(response.data);
            console.log(response.data);
        })
    }
    
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="h-screen p-6">
            <Table className="font-['Poppins']">
                <TableCaption><Button><Link to = "/insertpatient">Add Patient</Link></Button></TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Customer ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Phone Number</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Treatment Status</TableHead>
                    <TableHead className="text-right">Last Visit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        patients?.map((patient, index) => (
                        <TableRow key={index} className="hover:bg-teal-500 hover:text-white" onClick={() => window.location.href = `/patientdetails`}>
                            <TableCell className="font-medium">{patient.patient_id}</TableCell>
                            <TableCell>{`${patient.first_name} ${patient.last_name}`}</TableCell>
                            <TableCell>{patient.age}</TableCell>
                            <TableCell>{patient.gender}</TableCell>
                            <TableCell>{patient.primary_ph_no}</TableCell>
                            <TableCell>{patient.address}</TableCell>
                            <TableCell>{patient.treatment_status}</TableCell>
                            <TableCell className="text-right">{new Date(patient.last_visit).toLocaleDateString()}</TableCell>
                        </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            </div>
        </>
    )
}

export default PatientList