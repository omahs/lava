export enum TezosProtocols {
  CARTHAGE = 'carthage',
  DELPHI = 'delphi',
  EDO = 'edo',
  FLORENCE = 'florence',
  GRANADA = 'granada',
  HANGZHOU = 'hangzhou',
}

export type FaucetAccount = {
  mnemonic: string[];
  secret: string;
  amount: string; // mutez
  pkh: string;
  password?: string;
  email: string;
};