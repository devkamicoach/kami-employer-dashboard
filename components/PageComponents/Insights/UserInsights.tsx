import { Grid, Typography } from "@mui/material"
import { FunctionComponent } from "react";
import { QuickInsightCardTypes } from "types/dashboard";
import { InsightCardTypes } from "types/insights";

import InsightCard from "components/Cards/InsightCard";
import QuickInsightCard from "components/Cards/QuickInsightCard";

type UserInsightsTypes = {
  insights: Array<InsightCardTypes>
  quickInsights: Array<QuickInsightCardTypes>
}

const UserInsights: FunctionComponent<UserInsightsTypes> = ({ insights, quickInsights }) => {
  return (
    <>
      <Typography component="h2" className="font-body text-lg font-bold">USER INSIGHTS</Typography>
      <Grid className="gap-5 items-center" container>
        {insights.map(({ rate, description }, index) =>
        (
          <Grid key={index} item>
            <InsightCard rate={rate} description={description} />
          </Grid>
        ))}
        {quickInsights.map(({ title, value, percentage }, index) =>
        (
          <Grid key={(index + 1) * 2} item>
            <QuickInsightCard title={title} value={value} percentage={percentage} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

export default UserInsights