
import React from "react";
import MaterialTable from "material-table";
import { testData } from "../utils/testData";

export default function MaterialTableComponent(props: any) {
    const { useState } = React;

    const [columns, setColumns] = useState([
        { title: 'Transaction Key', field: 'Transaction_Key' },
        { title: 'Merchant', field: 'Merchant' },
        { title: 'Value', field: 'Value' },
        { title: 'Date', field: 'Date' },
        { title: 'Category', field: 'Category' },
        { title: 'Currency', field: 'Currency' },
        { title: 'Notes', field: 'Notes' },
    ]);

    const [data, setData] = useState(testData);

    return <div>
    <MaterialTable
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve: any|void, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...data];
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
          data={data}
          title="Demo Title"
        />
    </div>;
}