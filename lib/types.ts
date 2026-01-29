import { Role, Status } from './enums';

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Optional for client-side
  profilePhoto?: string;
  phone?: string;
  dob?: Date;
  address?: string;
  smsNotification: boolean;
  carUpdateValue: boolean;
  newVehicleAlerts: boolean;
  priceDropAlerts: boolean;
  role: Role;
  status: Status;
  joinedDate: Date;
  createdAt: Date;
  updatedAt: Date;
}
