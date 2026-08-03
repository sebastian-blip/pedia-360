export interface SystemeContact {
  id: number;
  email: string;
  locale: string;
}

export interface CreateContactResponse {
  id: number;
  email: string;
}