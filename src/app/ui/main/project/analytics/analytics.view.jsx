import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const tasks = [
  { id: 1, category: "To Do" },
  { id: 2, category: "Completed" },
  { id: 3, category: "To Do" },
  { id: 4, category: "In Progress" },
  { id: 5, category: "To Do" },
  { id: 6, category: "Delayed" },
  { id: 7, category: "In Progress" },
  { id: 8, category: "Completed" },
  { id: 9, category: "Completed" },
  { id: 10, category: "In Progress" },
  // Adding more data for each category
  { id: 11, category: "To Do" },
  { id: 12, category: "Completed" },
  { id: 13, category: "Completed" },
  { id: 14, category: "In Progress" },
  { id: 15, category: "Delayed" },
  { id: 16, category: "To Do" },
  { id: 17, category: "To Do" },
  { id: 18, category: "In Progress" },
  { id: 19, category: "Completed" },
  { id: 20, category: "Completed" },
];

const AnalyticsSection = () => {
  const taskCategories = {
    "To Do": 0,
    Completed: 0,
    "In Progress": 0,
    Delayed: 0,
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
    <div className="flex flex-col gap-4">
      <div className="w-full rounded p-4 shadow-sm">
        <h3 className="mb-8 text-2xl">Task Status</h3>
        <BarChart
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
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default AnalyticsSection;
