import { Modal, Upload } from 'antd'
import styled from 'styled-components'

export const Wrapper = styled.div`
`

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    background-color: #a5a5a5;
    flex-direction: column;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`

export const ContainerModalItem = styled.div`
    margin: 10px;
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    cursor: pointer;
    transition: 0.5s;
    :hover{
        background-color: #00000050;
    }
`

export const ModalComponent = styled(Modal)`
    width: fit-content !important;
    .ant-modal-content{
        width: auto;
    }
    .ant-modal-body{
        padding: 0 24px 24px 24px;
    }
`

export const Image = styled.img`
`

export const UploadC = styled(Upload)`
    .ant-upload-list.ant-upload-list-picture{
        display: none !important;
    }
`
