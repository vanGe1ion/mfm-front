export interface IUserContext {
  currentUser: string | null;
  approveUser: (newUser: string) => void;
  dismissUser: () => void;
}

export interface discoverRequestParams {
  with_genres?: string;
  primary_release_year?: Number;
  "vote_average.gte"?: string;
  "vote_average.lte"?: string;
  page?: Number;
}