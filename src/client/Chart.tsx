"use client";

import { Box, Grid } from "@mui/material";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Line,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import { primary } from "./BaseColor";
const dataArea = [
  {
    name: "نعداد فاکتور ها ثبت شده در این ماه",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "  دوشنبه",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "سه شنبه",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "۴ شنبه  ",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: " ۵ شنبه ",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: " جمعه",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const dataRadar = [
  {
    subject: "گلابی",
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: "سیب",
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "موز",
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: "هندوانه",
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: "کیوی",
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: "خربزه",
    A: 65,
    B: 85,
    fullMark: 150,
  },
];
const data = [
  {
    name: "قیمت خام",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "قیمت  ماه جاری",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "قیمت ماه قبل",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];
const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
  {
    name: "Group D",
    value: 9800,
  },
  {
    name: "Group E",
    value: 3908,
  },
  {
    name: "Group F",
    value: 4800,
  },
];
const Chart = () => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"100%"}
      p={4}
      mt={14}
      justifyContent={"center"}
    >
      <Grid container spacing={2}>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <ResponsiveContainer>
            <PieChart width={730} height={350}>
              <Pie
                data={data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={50}
                fill="#8884d8"
              />
              <Pie
                data={data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#82ca9d"
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataRadar}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 150]} />
              <Radar
                name="مغازه ترنج"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Radar
                name="مغازه خورشید"
                dataKey="B"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <ResponsiveContainer>
            <AreaChart
              height={250}
              data={dataArea}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#colorUv)"
              />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#82ca9d"
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chart;
