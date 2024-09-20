import DoctorDisplayCard from "@/components/custom/doctordisplaycard"

const DoctorDetails = () => {
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
    return(
        <>
            <div className="h-screen p-8 grid grid-cols-3">
                {
                    doctors.map((doctor , index) => (
                        <DoctorDisplayCard
                            key={index}
                            name = {doctor.name} 
                            specialization = {doctor.specialization}
                            experience = {doctor.experience}
                            phno = {doctor.phno}
                            email = {doctor.email}
                            active = {doctor.active}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default DoctorDetails