import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { columnDefs } from "./rawiColumns";


const Rawis = () => {

  const [rawiData, setRawiData] = useState<any>(null);

  useEffect(() => {
    fetch('/rawis'
    ).then(function (response) {
      return response.json();
    }).then(function (data) {
      setRawiData(data)
    })
  }, []);

  return (
  <div>
    <div className="ag-theme-balham" style={{ height: 500 }}>
      <AgGridReact
        rowData={rawiData}
        columnDefs={columnDefs}
      />
    </div>
  </div>
  )
}

export default Rawis;