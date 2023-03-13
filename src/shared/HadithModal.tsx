import { Col, Container, Modal, ModalHeader, Row } from "react-bootstrap"
import styled from "styled-components"


const StyledModal = styled(Modal)`
overflow-y:auto;
`

const StyledCol = styled(Col)`
text-align: right;
`

export const HadithModal = ({openModal, toggleModal, row}: {openModal: boolean, toggleModal: any, row: any}) => {

    return (
        <StyledModal centered show={openModal} onHide={toggleModal} size="lg" width="50%" scrollable={true}>
            <ModalHeader title="Hadith" >
                <Container>
                    <Row>
                        <Col>
                            Source: {row?.source}
                        </Col>
                        <Col>
                            Hadith Number: {row?.hadith_id}
                        </Col>
                        <Col>
                            Chain Index: {row?.chain_indx}
                        </Col>
                    </Row>
                </Container>
            </ModalHeader>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col body>
                            {row?.text_en}
                        </Col>
                        <StyledCol>{row?.text_ar}</StyledCol>
                    </Row>
                </Container>
            </Modal.Body>
        </StyledModal>
    )
}