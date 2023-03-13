import { useEffect, useRef, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { AgGridReact as AgGridReactType } from 'ag-grid-react/lib/agGridReact'
import { columnDefs, defaultColDef } from "./analyzeColumns";
import { HadithModal } from "../shared/HadithModal";
import { QuickSearch } from "../shared/QuickSearch";

const Analyze = () => {

  const [rawiData, setRawiData] = useState<any>(null);
  const [openModal, toggleModal] = useState<boolean>(false)
  const [row, setRow] = useState<any>(undefined);
  const gridRef = useRef<AgGridReactType>(null)

  useEffect(() => {
    fetch('/hadith'
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
          onRowClicked={(row) => { toggleModal(true); setRow(row.data) }}
        />
        <HadithModal openModal={openModal} toggleModal={() => toggleModal(false)} row={row} />
      </div>
    </div>
  )
}

export default Analyze;