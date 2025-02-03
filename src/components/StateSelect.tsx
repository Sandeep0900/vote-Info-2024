import { useQuery } from "@tanstack/react-query";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";
import { fetchVoterData } from "../services/voterService";
import { VoterData } from "../types/voter";

interface StateSelectProps {
  onStateSelect: (state: string) => void;
}

const StateSelect = ({ onStateSelect }: StateSelectProps) => {
  // Fetch all data to get available states
  const { data, isLoading } = useQuery({
    queryKey: ["allVoterData"],
    queryFn: () => fetchVoterData(),
  });

  // Extract unique state names from the data
  const availableStates = data?.records
    ? Array.from(new Set(data.records.map((record: VoterData) => record.state_name)))
        .sort()
    : [];

  return (
    <div className="w-full max-w-md mx-auto">
      <Select onValueChange={onStateSelect}>
        <SelectTrigger className="w-full bg-secondary/50 border-secondary text-white backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <SelectValue placeholder={isLoading ? "Loading states..." : "Select a state..."} />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-secondary/95 border-secondary backdrop-blur-sm">
          {availableStates.map((state) => (
            <SelectItem 
              key={state} 
              value={state}
              className="text-white hover:bg-primary/20 focus:bg-primary/20"
            >
              {state}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default StateSelect;