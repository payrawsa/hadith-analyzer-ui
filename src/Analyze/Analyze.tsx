import { useEffect, useRef, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { AgGridReact as AgGridReactType } from 'ag-grid-react/lib/agGridReact'
import { columnDefs, defaultColDef } from "./analyzeColumns";
import { HadithModal } from "../shared/HadithModal";
import { InputGroup, Button, Form } from "react-bootstrap";
import styled from "styled-components";

const Analyze = () => {

  const [rawiData, setRawiData] = useState<any>(null);
  const [openModal, toggleModal] = useState<boolean>(false)
  const [row, setRow] = useState<any>(undefined);
  const gridRef = useRef<AgGridReactType>(null)

  const StyledInputGroup = styled(InputGroup)`
  width: 25%;
  `

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
      <StyledInputGroup className="mb-3">
        <Form.Control
          placeholder="Search Hadith"
          aria-label="Search Hadith"
          aria-describedby="basic-addon2"
          type="text"
          onChange={(input) => onFilterTextBoxChanged(input.currentTarget.value)}
        />
      </StyledInputGroup>
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

export default Analyze;