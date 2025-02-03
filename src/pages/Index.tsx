import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchVoterData } from "../services/voterService";
import SearchBar from "../components/SearchBar";
import StateCard from "../components/StateCard";
import { VoterData } from "../types/voter";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, error } = useQuery({
    queryKey: ["voterData", searchQuery],
    queryFn: () => fetchVoterData(searchQuery),
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-down">
          <h1 className="text-4xl font-bold mb-4">Indian State Voter Information</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore comprehensive voter statistics and demographics across Indian states.
            Search for any state to view detailed information.
          </p>
        </div>

        <div className="mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>

        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-300 border-t-gray-600"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-red-600">
            An error occurred while fetching the data. Please try again.
          </div>
        )}

        <div className="grid grid-cols-1 gap-6">
          {data?.records?.map((stateData: VoterData, index: number) => (
            <StateCard key={`${stateData.state_name}-${index}`} data={stateData} />
          ))}
        </div>

        {data?.records?.length === 0 && (
          <div className="text-center py-12 text-gray-600">
            No results found for your search. Try another state name.
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;