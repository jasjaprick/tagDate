import { InMemoryCache } from '@apollo/client';
import { updateState } from './components/interfaces/AppState';

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        appState: {
          read() {
            return updateState();
          },
        },
      },
    },
  },
});

export default cache;
