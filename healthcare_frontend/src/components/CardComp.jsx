import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { Typography } from "@mui/material"
import { Car } from "lucide-react"

const CardComp = ({text}) => {
	return(
		<Card className="m-4">
			<CardContent>
				<h1>{text}</h1>
			</CardContent>
		</Card>
	)
}

export default CardComp