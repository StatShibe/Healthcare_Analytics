import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

const CardComp = ({text, styling}) => {
	return(
		<Card className={styling}>
			<CardContent>
				<h1 className="font-bold">{text}</h1>
			</CardContent>
		</Card>
	)
}

export default CardComp