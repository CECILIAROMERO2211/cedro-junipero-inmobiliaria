import { createContext } from 'react';

export const PropertyContext = createContext({
  properties: [],
  loading: true,
});