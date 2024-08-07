import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { Box, Typography, MenuItem, Select } from '@mui/material';
const data = [
  { name: '5', uv: 4000  },
  { name: '9', uv: 3000 },
  { name: '11', uv: 2000 },
  { name: '13', uv: 2780 },
  { name: '15', uv: 1890 },
  { name: '17', uv: 2390 },
  { name: '19', uv: 3490 },
  { name: '21', uv: 2000 },
  { name: '23', uv: 2780 },
  { name: '25', uv: 1890 },
  { name: '27', uv: 2390 },
];

function ActivityChart() {
  return (
    <Box sx={{ padding: 3, backgroundColor: '#1E1E1E', borderRadius: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" color="#fff">Activity</Typography>
        <Select
          value="Weekly"
          variant="outlined"
          sx={{ color: '#fff', borderColor: '#555', '.MuiOutlinedInput-notchedOutline': { borderColor: '#555' } }}
        >
          <MenuItem value="Weekly">Weekly</MenuItem>
          <MenuItem value="Monthly">Monthly</MenuItem>
          <MenuItem value="Yearly">Yearly</MenuItem>
        </Select>
      </Box>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="name" stroke="#888"/>
          <YAxis stroke="#888" />
          <Tooltip cursor={{ fill: '#444' }} contentStyle={{ backgroundColor: '#222', borderColor: '#555' }} />
          <Bar dataKey="uv" fill="#8884d8" radius={[25, 25, 25, 25]}/>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default ActivityChart;
