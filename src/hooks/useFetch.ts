import {useState} from 'react';

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T>();

  async function getData() {
    const json = await fetch(url);
    const dataApi = await json.json();
    setData(dataApi as T);
  }

  (async () => await getData())();
  return [data];
}
