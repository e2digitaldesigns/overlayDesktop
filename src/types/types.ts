export interface IntTemplates {
  _id: string;
  name: string;
  maxHosts: number;
  tickerType: number;
  topicType: number;
}

export interface IntSocials {
  site: string;
  username: string;
}

export interface IntHosts {
  _id: string;
  name: string;
  img: string;
  socials: IntSocials[];
}

export interface IntTicker {
  _id: string;
  title: string;
  text: string;
}

export interface IntTopics {
  _id: string;
  order: number;
  name: string;
  desc: string;
  timer: number;
  isParent: boolean;
  isChild: boolean;
  parentId: string;
  img: string;
}

export type EpisodeHost = {
  seatNum: number;
  _id: string;
};

// export type EpisodeHost = {
//   [key: string]: any;
// };

export interface IntEpisodes {
  _id: string;
  active: boolean;
  airDate: string;
  current: boolean;
  googleId: string;
  hosts: EpisodeHost[];
  name: string;
  number: number;
  socialNetworks: any[];
  templateId: string;
  ticker: IntTicker[];
  topics: IntTopics[];
}

export enum ApiEndPoints {
  episode = "episode",
  host = "host",
  socialNetworks = "socialNetworks",
  templateNewEpisodes = "templates/newEpisode",
  templates = "templates"
}

export enum TopicTypes {
  simple = 1,
  normal,
  advanced
}

export enum TickerTypes {
  none = 0,
  normal,
  advanced
}
