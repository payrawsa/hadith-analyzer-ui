import { AgGridReact as AgGridReactType } from "ag-grid-react/lib/agGridReact"
import { ChangeEventHandler, RefObject } from "react"
import { Form, InputGroup } from "react-bootstrap"
import styled from "styled-components"

const StyledInputGroup = styled(InputGroup)`
width: 25%;
`
export const QuickSearch = ({ gridRef }: { gridRef: RefObject<AgGridReactType<any>> }) => {

    const onFilterTextBoxChanged = (text: string) => {
        gridRef?.current?.api.setQuickFilter(text);
    }

    return (
        <StyledInputGroup className="mb-3">
            <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                type="text"
                onChange={(input) => onFilterTextBoxChanged(input.currentTarget.value)}
            />
        </StyledInputGroup>

    )
}

