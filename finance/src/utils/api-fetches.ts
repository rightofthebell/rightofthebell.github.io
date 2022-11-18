import axios from 'axios';

import { ApiTransactions } from './api-types';


export const fetchTransactions = async () => {
    return (
      await axios.get<ApiTransactions[]>(
        `https://2hw5tevmqnhk3hdw4lzhyon6lu0leaby.lambda-url.us-east-1.on.aws/`
      )
    ).data;
  };
