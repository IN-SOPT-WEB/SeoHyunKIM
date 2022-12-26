export interface userData {
  followers: Number | null;
  following: Number | null;
  repos: Number | null;
  avatar_url: string | null;
  name: string | null;
}

export interface AccountData {
  infoName: string;
  userData: userData;
}
