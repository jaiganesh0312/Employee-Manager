"use client";
import {
  Card,
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableColumn,
  TableRow,
  Progress,
} from "@heroui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

import { fetchAll } from "@/lib/actions/employee";
import { useQuery } from "@tanstack/react-query";
import Error from "next/error";

const EmployeeDashboard = () => {
  // Mock data
  const { data, isLoading, isError } = useQuery({
    queryKey: ["employees"],
    queryFn: fetchAll,
  });

  if (isLoading) return <p className="text-2xl font-semibold text-center mt-6">Loading...</p>;
  if (isError) throw new Error("Failed to load the employees data");

  const employees = data?.data || [];

  // Statistics calculations
  const totalEmployees = employees.length;
  const salaryStats = getSalaryStats(employees);

  const roleData = employees.reduce((acc, e) => {
    acc[e.role] = (acc[e.role] || 0) + 1;
    return acc;
  }, {});

  const roleCounts = getRoleCounts(employees);

  const locationData = employees.reduce((acc, e) => {
    acc[e.location] = (acc[e.location] || 0) + 1;
    return acc;
  }, {});

  // Convert data for charts
  const roleChartData = Object.keys(roleData).map((role) => ({
    role,
    count: roleData[role],
  }));

  const locationChartData = Object.keys(locationData).map((location) => ({
    location,
    count: locationData[location],
  }));

  const COLORS = [
    "#FF5733", // Red-Orange
    "#33FF57", // Green
    "#3357FF", // Blue
    "#FF33A8", // Pink
    "#FFD700", // Gold
    "#8A2BE2", // Blue Violet
    "#00CED1", // Dark Turquoise
  ];

  return (
    <div className="py-3 bg-gray-50 min-h-screen">
      <p className="mb-8 p-3xl font-bold p-gray-800 text-3xl">Dashboard</p>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-white shadow-sm gap-1">
            <Progress
              label={<p className="font-semibold">Total Employees</p>}
              value={totalEmployees}
              maxValue={totalEmployees}
              showValueLabel
              formatOptions={{ style: "decimal" }}
              color="primary"
              className="mt-3"
            />
            
          {roleCounts.map(({ field, value }) => (
              <Progress
                key={field}
                label={<p className="font-semibold">{field}</p>}
                value={value}
                maxValue={50}
                showValueLabel
                formatOptions={{ style: "decimal" }}
                color="primary"
                className="mt-3"
              />
          ))}
        </Card>

        <Card className="p-6 bg-white shadow-sm grid">
          <p className="mb-4 p-xl font-semibold p-gray-700">
            Salary Statistics
          </p>
          <div className="grid grid-cols-2 text-sm gap-4">
            {salaryStats.map(({ field, value }) => (
              <div key={field} className="mb-4">
                <p className="p-gray-600 mb-2">{field}</p>
                <p className="p-4xl font-semibold p-blue-600">
                  <span>&#8377;</span>
                  {value.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 bg-white shadow-sm">
          <p className="mb-4 p-xl font-semibold p-gray-700">
            Location Distribution
          </p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={locationChartData}
                  dataKey="count"
                  nameKey="location"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {locationChartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Role Distribution Chart */}
      <Card className="p-6 mb-8 bg-white shadow-sm">
        <p className="mb-4 p-xl font-semibold p-gray-700">Role Distribution</p>
        <div className="h-96">
          <ResponsiveContainer
            width="100%"
            height="100%"
            className="overflow-auto"
          >
            <BarChart data={roleChartData} margin={{ bottom: 90, left: 40 }}>
              <CartesianGrid />
              <XAxis
                dataKey="role"
                interval={0}
                tick={{ angle: -30, textAnchor: "end", dy: 15 }}
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Employee Table */}
      <Card className="p-6 bg-white shadow-sm">
        <p className="mb-4 p-xl font-semibold p-gray-700">Employee List</p>
        <Table aria-label="Employee List" css={{ minWidth: "100%" }}>
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>EMAIL</TableColumn>
            <TableColumn>PHONE</TableColumn>
            <TableColumn>SALARY</TableColumn>
            <TableColumn>LOCATION</TableColumn>
            <TableColumn>ROLE</TableColumn>
          </TableHeader>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.phone}</TableCell>
                <TableCell>
                  <span>&#8377;</span>
                  {employee.salary.toLocaleString()}
                </TableCell>
                <TableCell>{employee.location}</TableCell>
                <TableCell>
                  <span className="px-2 py-1 bg-blue-100 p-blue-800 rounded-full p-sm">
                    {employee.role}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default EmployeeDashboard;

const getSalaryStats = (employees) => {
  const salaries = employees.map((e) => Number(e.salary)).sort((a, b) => a - b);

  const totalEmployees = salaries.length;
  const totalSalary = salaries.reduce((sum, salary) => sum + salary, 0);
  const averageSalary = totalSalary / totalEmployees;
  const highestSalary = Math.max(...salaries);
  const lowestSalary = Math.min(...salaries);
  const salaryRange = highestSalary - lowestSalary;

  // Median Salary Calculation
  const medianSalary =
    totalEmployees % 2 === 0
      ? (salaries[totalEmployees / 2 - 1] + salaries[totalEmployees / 2]) / 2
      : salaries[Math.floor(totalEmployees / 2)];

  // Top 10% Salary Average
  const top10Count = Math.ceil(totalEmployees * 0.1);
  const top10AvgSalary =
    salaries.slice(-top10Count).reduce((sum, s) => sum + s, 0) / top10Count;

  // Bottom 10% Salary Average
  const bottom10Count = Math.ceil(totalEmployees * 0.1);
  const bottom10AvgSalary =
    salaries.slice(0, bottom10Count).reduce((sum, s) => sum + s, 0) /
    bottom10Count;

  return [
    { field: "Total Salary", value: totalSalary },
    { field: "Average Salary", value: averageSalary },
    { field: "Median Salary", value: medianSalary },
    { field: "Salary Range", value: salaryRange },
    { field: "Highest Salary", value: highestSalary },
    { field: "Lowest Salary", value: lowestSalary },
    { field: "Top 10% Average Salary", value: top10AvgSalary },
    { field: "Bottom 10% Average Salary", value: bottom10AvgSalary },
  ];
};

  // Function to count employees by role
const getRoleCounts = (employees) => {
  const roleCounts = employees.reduce((acc, { role }) => {
    // Group similar roles by keywords
    if (/developer/i.test(role)) {
      acc["Developer"] = (acc["Developer"] || 0) + 1;
    } else if (/engineer/i.test(role)) {
      acc["Engineer"] = (acc["Engineer"] || 0) + 1;
    } else if (/analyst/i.test(role)) {
      acc["Analyst"] = (acc["Analyst"] || 0) + 1;
    } else if (/manager/i.test(role)) {
      acc["Manager"] = (acc["Manager"] || 0) + 1;
    } else if (role === "Data Scientist") {
      acc["Data Scientist"] = (acc["Data Scientist"] || 0) + 1;
    } else {
      acc["Other"] = (acc["Other"] || 0) + 1;
    }
    return acc;
  }, {});

  return [
    { field: "Developers", value: roleCounts["Developer"] || 0 },
    { field: "Engineers", value: roleCounts["Engineer"] || 0 },
    {
      field: "Analysts and Scientists",
      value: roleCounts["Analyst"] + roleCounts["Data Scientist"] || 0,
    },
    { field: "Managers", value: roleCounts["Manager"] || 0 },
    { field: "Others", value: roleCounts["Other"] || 0 },
  ];
};
