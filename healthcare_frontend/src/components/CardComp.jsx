import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

const CardComp = ({text, styling}) => {
	return(
		<Card className={styling}>
			<CardContent className="font-bold">
				<h1>{text}</h1>
			</CardContent>
		</Card>
	)
}

export default CardComp