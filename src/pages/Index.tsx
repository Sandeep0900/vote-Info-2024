import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchVoterData } from "../services/voterService";
import StateSelect from "../components/StateSelect";
import StateCard from "../components/StateCard";
import { VoterData } from "../types/voter";
import { Moon, Stars } from "lucide-react";

const Index = () => {
  const [selectedState, setSelectedState] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["voterData", selectedState],
    queryFn: () => fetchVoterData(selectedState),
    enabled: !!selectedState,
  });

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 text-primary/20">
        <Stars className="w-8 h-8" />
      </div>
      <div className="absolute bottom-10 left-10 text-primary/20">
        <Moon className="w-6 h-6" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-down">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
            Indian State Voter Information 2024
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore comprehensive voter statistics and demographics across Indian states.
            Select any state to view detailed information.
          </p>
        </div>

        <div className="mb-12">
          <StateSelect onStateSelect={handleStateSelect} />
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-destructive">
            An error occurred while fetching the data. Please try again.
          </div>
        )}

        <div className="grid grid-cols-1 gap-6">
          {data?.records?.map((stateData: VoterData, index: number) => (
            <StateCard key={`${stateData.state_name}-${index}`} data={stateData} />
          ))}
        </div>

        {data?.records?.length === 0 && selectedState && (
          <div className="text-center py-12 text-muted-foreground">
            No results found for {selectedState}. Try another state.
          </div>
        )}

        {/* Footer with creator name */}
        <footer className="mt-16 text-center text-sm text-muted-foreground py-4 border-t border-border">
          <p className="animate-fade-up">
            Created with ❤️ by{" "}
            <span className="text-primary font-semibold">Aman</span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;