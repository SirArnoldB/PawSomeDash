import randomColor from "randomcolor";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { speciesChartData } from "../utils/pets_attributes";

const SpeciesPieChat = () => {
  const customToolTIp = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div style={{ backgroundColor: "#fff", padding: "5px" }}>
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "5px",
              textAlign: "center",
            }}
          >
            {payload[0].payload.label}
          </p>
          <label>{`${payload[0].name}(s): ${payload[0].value}`}</label>
        </div>
      );
    }
    return null;
  };

  return (
    <PieChart width={700} height={300}>
      <Pie
        data={speciesChartData}
        dataKey="value"
        nameKey="label"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill={`${randomColor({ luminosity: "dark" })}`}
        label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
      >
        {speciesChartData.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={randomColor({ luminosity: "dark" })}
          />
        ))}
      </Pie>
      <Tooltip content={customToolTIp} />
      <Legend />
    </PieChart>
  );
};

export default SpeciesPieChat;
