import { Grid } from "@mui/material"
import { FunctionComponent, ReactNode } from "react"

type InsightsLayoutTypes = {
  insights: ReactNode;
  engagements: ReactNode;
  topics: ReactNode;
}
const InisghtsLayout: FunctionComponent<InsightsLayoutTypes> = ({ insights, engagements, topics }) => {
  return (
    <Grid container>
      <Grid sm={12} className="py-5" item>{insights}</Grid>
      <Grid sm={12} className="py-5" item>{engagements}</Grid>
      <Grid sm={12} className="py-5" item>{topics}</Grid>
    </Grid>
  )
}

export default InisghtsLayout