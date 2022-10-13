
export interface RespuestaPositions {
  ok: boolean;
  pagina: number;
  position: Position[];
}

export interface RespuestaPayments {
  ok: boolean;
  pagina: number;
  pays: Payment[];
}

export interface RespuestaApartments {
  ok: boolean;
  pagina: number;
  apartment: Apartment[];
}

export interface RespuestaBillingNotices {
  ok: boolean;
  pagina: number;
  billingNotice: BillingNotice[];
}

export interface RespuestaBillingNoticeDetails {
  ok: boolean;
  pagina: number;
  billingNoticeDetail: BillingNoticeDetail[];
}

export interface User {
  avatar?: string;
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
}


export interface Position {
  _id?: string;
  builder?: string;
  balance?: number;
  message?: string;
  lastPayDate?: string;
  lastPay?: number;
  amountLastMonth?: number;
  dateLastMonth?: string;
  apartment?: string;
  image?:string;
  user?: User;
  created?: string;
}

export interface Payment  {
  builder?: Builder;
  apartment?: Apartment;
  amount?: Number;
  bank?: string;
  reference?: string;
  description?: string;
  previousBalance?: Number;
  BalanceAfterPay?:Number;
  user?: User;
  created?: string;
}

export interface Apartment {
  builder?: Builder;
  number?: string;
  user?: User;
  floor?: number;
  created?: string;
}

export interface Builder {
  name: string;
  address: string;
  image: string;
  location: string;
  created: string;
}

export interface BillingNotice {
  _id?: String;
  builder?: Builder;
  apartment?: Apartment;
  month?: string;
  amountMonth?: number;
  totalPay?: number;
  rate?: number;
  description?: string;
  user?: User;
  created?: string;
}

export interface BillingNoticeDetail {
  created?: string;
  billingNotice?: BillingNotice;
  builder?: Builder;
  apartment?: Apartment;
  user?: User;
  description?: String;
  total?: number;
  aliquot?: number;
}