import React from "react";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const tasks = [
  { id: 1, category: 'to-do' },
  { id: 2, category: 'completed' },
  { id: 3, category: 'to-do' },
  { id: 4, category: 'in-progress' },
  { id: 5, category: 'to-do' },
  { id: 6, category: 'delayed' },
  { id: 7, category: 'in-progress' },
  { id: 8, category: 'completed' },
  { id: 9, category: 'completed' },
  { id: 10, category: 'in-progress' },
  // Adding more data for each category
  { id: 11, category: 'to-do' },
  { id: 12, category: 'completed' },
  { id: 13, category: 'completed' },
  { id: 14, category: 'in-progress' },
  { id: 15, category: 'delayed' },
  { id: 16, category: 'to-do' },
  { id: 17, category: 'to-do' },
  { id: 18, category: 'in-progress' },
  { id: 19, category: 'completed' },
  { id: 20, category: 'completed' },
];

const AnalyticsSection = () => {
  const taskCategories = {
    "to-do": 0,
    completed: 0,
    "in-progress": 0,
    delayed: 0,
  };

  tasks.forEach((task) => {
    if (task.category in taskCategories) {
      taskCategories[task.category]++;
    }
  });

  const data = Object.keys(taskCategories).map((category) => ({
    category,
    count: taskCategories[category],
  }));

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full p-4 sm:w-[80%]">
          <div className="flex ">
            <div className="w-[50%]">
              <BarChart
                width={500}
                height={250}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </div>

          
            <div className="w-full md:w-1/2 lg:w-1/3">
             
              <LineChart
                width={400}
                height={250}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
      <div>
        <AreaChart
          width={1000}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="count" fill="#8884d8" />
        </AreaChart>
      </div>
    </>
  );
};

export default AnalyticsSection;
