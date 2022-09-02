export type ChuckNorrisResponseType = {
  icon_url: string;
  id: string;
  url: string;
  value: string;
};

export type ChuckNorrisSearchResponseType = {
  total: number;
  result: Array<ChuckNorrisResponseType>;
};
