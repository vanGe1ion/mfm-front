export interface IUserContext {
  currentUser: string | null;
  approveUser: (newUser: string) => void;
  dismissUser: () => void;
}

