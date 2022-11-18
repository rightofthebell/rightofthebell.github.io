
import React from "react";
import MaterialTable from "material-table";
import { testData } from "../utils/testData";
import { fetchTransactions} from "../utils/api-fetches";
import { useQuery } from 'react-query';
import { ApiTransactions } from "../utils/api-types";

export const MaterialTableComponent = ({columns2, data2}: { columns2: any; data2: any; }) => {
    const { useState } = React;
    const [data3, setData] = useState(data2);
    return( <div>
        <MaterialTable
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve: any|void, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data2!];
                  const index = dataUpdate.map(function(el){return el.Transaction_Key;}).indexOf(oldData!.Transaction_Key);
                  dataUpdate[index] = newData;
                  setData([...dataUpdate]);
    
                  resolve();
                }, 10)
              })
          }}
          columns={[
            { title: 'Transaction Key', field: 'Transaction_Key', editable: 'never' },
            { title: 'Merchant', field: 'Merchant' },
            { title: 'Value', field: 'Value' },
            { title: 'Date', field: 'Date' },
            { title: 'Category', field: 'Category' },
            { title: 'Currency', field: 'Currency' },
            { title: 'Notes', field: 'Notes' }
          ]}
          data={data2}
          title="Demo Title"
        />
    </div>);
};