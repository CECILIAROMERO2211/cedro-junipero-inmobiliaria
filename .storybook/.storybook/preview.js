import { PropertyProvider } from '../src/context/PropertyContext';

export const decorators = [
  (Story) => (
    <PropertyProvider>
      <Story />
    </PropertyProvider>
  ),
];