import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

const CardComp = ({doctor, styling}) => {
	return(
		<Card className={styling}>
			<CardContent>
				<h1 className="font-bold">{doctor.name}</h1>
				<h2 className="font-bold">{doctor.specialization}</h2>
				<p>Years of Experience : <strong>{doctor.years_expr}</strong></p>
			</CardContent>
		</Card>
	)
}

export default CardComp