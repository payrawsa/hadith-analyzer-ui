import { useEffect, useRef, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { AgGridReact as AgGridReactType } from 'ag-grid-react/lib/agGridReact'
import { columnDefs, defaultColDef } from "./hadithColumns";
import { HadithModal } from "../shared/HadithModal";


const Hadith = () => {

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

  const onFilterTextBoxChanged = (text: string) => {
    gridRef?.current?.api.setQuickFilter(text);
  }

  return (
    <div>

      <div className="ag-theme-balham" style={{ height: 500 }}>
        <input type="text" id="filter-text-box" placeholder="Filter..." onInput={(input) => onFilterTextBoxChanged(input.currentTarget.value)} />
        <AgGridReact
          ref={gridRef}
          rowData={rawiData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          onRowClicked={(row) => { toggleModal(true); setRow(row.data) }}
        />
        <HadithModal openModal={openModal} toggleModal={()=>toggleModal(false)} row={row} />
      </div>
    </div>
  )
}

export default Hadith;