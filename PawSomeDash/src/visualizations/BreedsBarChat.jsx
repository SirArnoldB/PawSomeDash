import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { breedsChartData } from "../utils/pets_attributes";
import randomColor from "randomcolor";

const BreedsBarChat = () => {
  return (
    <BarChart width={500} height={300} data={breedsChartData}>
      <XAxis dataKey="breed" />
      <YAxis />
      <Tooltip />
      <Legend />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="count" fill={`${randomColor({ luminosity: "dark" })}`} />
    </BarChart>
  );
};

export default BreedsBarChat;
