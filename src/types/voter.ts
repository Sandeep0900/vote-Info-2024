export interface VoterData {
  state_name: string;
  constituency_type: string;
  no_of_seats: number;
  electors___male: number;
  electors___female: number;
  electors___third_gender: number;
  electors___total: number;
  electors___nris: number;
  electors___service: number;
  voters___male: number;
  voters___female: number;
  voters___third_gender: number;
  voters___postal: number;
  voters___total: number;
  voters___nris: number;
  voters___poll__: number;
  rejected_votes__postal_: number;
  evm_rejected_votes: number;
  nota_votes: number;
  valid_votes_polled: number;
  tendered_votes: number;
}

export interface StateData {
  records: VoterData[];
}