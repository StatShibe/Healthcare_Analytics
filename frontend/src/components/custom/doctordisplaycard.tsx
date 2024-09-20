import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
  
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
        <Card className={`m-8 h-[300px] w-[300px] ${props.active ? 'bg-muted' : 'bg-blue-300'}`}>
            <CardHeader>
              <CardTitle>{props.name}</CardTitle>
              <CardDescription>{props.specialization}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{props.experience}</p>
            </CardContent>
            <CardFooter>
              <p>{props.phno}</p>
              <p>{props.email}</p>
            </CardFooter>
        </Card>
    )
}

export default DoctorDisplayCard