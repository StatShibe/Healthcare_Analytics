import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
  
import { Link } from "react-router-dom";

interface DoctorProps {
    name: string;
    specialization: string;
    phno: number;
    email: string;
    experience: number;
    active: boolean
}


const DoctorDisplayCard = (props: DoctorProps) => {
    return(
        <Link to="/">
            <Card className={`font-['Poppins'] m-8 h-fit w-[300px] hover:bg-gradient-to-br from-blue-600 to-teal-200 hover:text-white hover:scale-110 transition-all ${props.active ? 'bg-muted' : 'bg-blue-300'}`}>
                <CardHeader>
                  <CardTitle>{props.name}</CardTitle>
                  <CardDescription>{props.specialization}</CardDescription>
                </CardHeader>
                <CardContent>   
                    <div className="flex flex-col">
                        <div>{props.phno}</div>
                        <div>{props.email}</div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default DoctorDisplayCard