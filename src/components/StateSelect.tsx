import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin } from "lucide-react";

interface StateSelectProps {
  onStateSelect: (state: string) => void;
}

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
];

const StateSelect = ({ onStateSelect }: StateSelectProps) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Select onValueChange={onStateSelect}>
        <SelectTrigger className="w-full bg-secondary/50 border-secondary text-white backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <SelectValue placeholder="Select a state..." />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-secondary/95 border-secondary backdrop-blur-sm">
          {INDIAN_STATES.map((state) => (
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