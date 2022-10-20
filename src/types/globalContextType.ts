export interface ISettings {
  ipAddress: string;
  port: string;
}

export interface ISocials {
  site: string;
  username: string;
}

export interface IHost {
  _id: string;
  name: string;
  img: string;
  socials: ISocials[];
}

export interface IntGlobalContextInterface {
  episodes: any;
  hosts: IHost[];
  settings: ISettings;
  socials: any;
}

// export interface IntGlobalContextCheckers {
//   profiles: IntProfile[];
//   pages: IntPages[];
//   buttonPads: IntButtonPads[];
//   actions: IntActions[];
//   styles: IntStyles[];
// }

export interface IntGlobalContextStateInterface {
  state: IntGlobalContextInterface;
  setState: React.Dispatch<React.SetStateAction<IntGlobalContextInterface>>;
}

export type IntGlobalData = IntGlobalContextStateInterface;
