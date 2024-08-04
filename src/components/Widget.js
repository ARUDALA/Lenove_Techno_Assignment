import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

function Widget({ title, type, data }) {
  return (
    <div className="widget">
      <h3>{title}</h3>
      {type === 'line' && (
        <LineChart width={400} height={300} data={data}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      )}
      {type === 'bar' && (
        <BarChart width={400} height={300} data={data}>
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      )}
      {type === 'pie' && (
        <PieChart width={400} height={300}>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={100}>
            {data.map((entry, index) => (
              <Cell key={'cell-${index}'} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      )}
      {type === 'feed' && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Widget;