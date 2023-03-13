import { useEffect, useRef, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { AgGridReact as AgGridReactType } from 'ag-grid-react/lib/agGridReact'
import { columnDefs, defaultColDef } from "./rawiColumns";
import { QuickSearch } from "../shared/QuickSearch";


const Rawis = () => {

  const [rawiData, setRawiData] = useState<any>(null);
  const gridRef = useRef<AgGridReactType>(null)

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
        <QuickSearch gridRef={gridRef} />
        <AgGridReact
          ref={gridRef}
          rowData={rawiData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
    </div>
  )
}

export default Rawis;