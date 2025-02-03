import { VoterData } from "../types/voter";
import { Card } from "./ui/card";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface StateCardProps {
  data: VoterData;
}

const StateCard = ({ data }: StateCardProps) => {
  const genderData = [
    { name: "Male", value: data.voters___male },
    { name: "Female", value: data.voters___female },
    { name: "Third Gender", value: data.voters___third_gender },
  ];

  const COLORS = ["#0088FE", "#FF8042", "#00C49F"];

  return (
    <Card className="w-full p-6 animate-fade-up">
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-semibold">{data.state_name}</h3>
            <p className="text-gray-500">{data.constituency_type} Constituency</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Total Seats</p>
            <p className="text-xl font-semibold">{data.no_of_seats}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Voter Statistics</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Voters</span>
                <span className="font-medium">{data.voters___total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Valid Votes</span>
                <span className="font-medium">{data.valid_votes_polled.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">NOTA Votes</span>
                <span className="font-medium">{data.nota_votes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Poll Percentage</span>
                <span className="font-medium">{data.voters___poll__}%</span>
              </div>
            </div>
          </div>

          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={genderData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {genderData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StateCard;