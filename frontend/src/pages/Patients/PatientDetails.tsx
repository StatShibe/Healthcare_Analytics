import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

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

const PatientDetails = () => {
    return (
        <>
            <div className="h-screen p-6">
            <Table>
                <TableCaption>List of Patients</TableCaption>
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
                        patientDetails.map((patients, index) => (<TableRow key={index}>
                            <TableCell className="font-medium">{patients.cust_id}</TableCell>
                            <TableCell>{patients.name}</TableCell>
                            <TableCell>{patients.age}</TableCell>
                            <TableCell>{patients.gender}</TableCell>
                            <TableCell>{patients.phno}</TableCell>
                            <TableCell>{patients.address}</TableCell>
                            <TableCell>{patients.treatment_status}</TableCell>
                            <TableCell className="text-right">{patients.last_visit}</TableCell>
                        </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            </div>
        </>
    )
}

export default PatientDetails