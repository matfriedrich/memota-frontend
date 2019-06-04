export interface Transaction  {
  hash: string;
  accountHash: string;
  message: string;
  address: string;
  value: number;
  confirmed: boolean;
  required: boolean;
  new: boolean;
}
