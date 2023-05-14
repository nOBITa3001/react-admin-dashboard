import { Box } from "@mui/material";
import { BarChart } from "../../components/BarChart";
import { Header } from "../../components/Header";

export const Bar = () => {
  return (
    <Box m={2}>
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};
