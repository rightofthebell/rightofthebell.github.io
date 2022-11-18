export {}
// import React from "react";
// import { testData } from "../utils/testData";
// import { fetchTransactions} from "../utils/api-fetches";
// import { useQuery } from 'react-query';
// import { ApiTransactions } from "../utils/api-types";

// export default function MaterialTableComponent(props: any) {
//     const { useState } = React;

//     const [columns, setColumns] = useState([
//         { title: 'Transaction Key', field: 'Transaction_Key' },
//         { title: 'Merchant', field: 'Merchant' },
//         { title: 'Value', field: 'Value' },
//         { title: 'Date', field: 'Date' },
//         { title: 'Category', field: 'Category' },
//         { title: 'Currency', field: 'Currency' },
//         { title: 'Notes', field: 'Notes' },
//     ]);

//     const {data: a, status} = useQuery<ApiTransactions[]>(
//         'fetchTransactions',
//         fetchTransactions
//     )

//     //const [data, setData] = useState(testData);
//     //const [data, setData] = useState(fetchTransactions);
//     const [data, setData] = useState(a);

//     return 
//     <div> <MaterialTableComponent></MaterialTableComponent></div>
   
// }