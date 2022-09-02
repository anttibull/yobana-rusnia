import React, { useEffect, FC, useState, useCallback } from "react";

import axios from "axios";

import { Card } from "../components/Card/Card";
import { ChuckNorrisSearchResponseType } from "../types/api.types";

export const App: FC = () => {
  const [data, setData] = useState<ChuckNorrisSearchResponseType | null>(null);

  const fetchRandomData = useCallback(async () => {
    const { data } = await axios.get<ChuckNorrisSearchResponseType>(
      "https://api.chucknorris.io/jokes/search?query=test"
    );

    setData(data);
  }, []);






  useEffect(() => {
    fetchRandomData();
  }, [fetchRandomData]);

  if (!data) return <h1>Rusni pizda</h1>;

  return (
    <>
      {data.result.map((data) => (
        <Card icon={data.icon_url} text={data.value} key={data.id} />
      ))}
    </>
  );
};
