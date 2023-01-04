import { Box, Card, CardContent, Typography } from "@mui/material";
import CircularProgressWithLabel from "components/CircularProgressWithLabel/CircularProgressWithLabel";
import { FunctionComponent } from "react";
import { InsightCardTypes } from "types/insights";


const InsightCard: FunctionComponent<InsightCardTypes> = ({ rate, description }) => {
  return (
    <Card className="max-w-[450px]">
      <CardContent>
        <Box className="flex items-center gap-4">
          <Box className="basis-1/4">
            <CircularProgressWithLabel customColor="red" value={rate} />
          </Box>
          <Box className="basis-3/4">
            <Typography component="p" className="text-sm">
              {description}
            </Typography>
          </Box>

        </Box>
      </CardContent>
    </Card>
  )
}

export default InsightCard