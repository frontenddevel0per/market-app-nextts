type Item = {
  id: number;
  count: number;
  data: {
    title: string;
    price: number;
    description: string;
    src: string;
  };
};

export type CounterState = {
  value: Item[];
};
