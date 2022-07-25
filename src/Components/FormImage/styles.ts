import styled from "styled-components";
import { Button, Modal, Input } from 'antd';

export const ContainerForm = styled.div`
    width: 100%;
    align-items: center;
    .ant-input{
        height: 35px;
    }
    .ant-row .ant-form-item{
        margin-bottom: 2px;
    }
    .ant-btn .ant-btn-primary .sc-dkzDqf .fSeLvW .login-form-button{
        background-color: #F14902;
    }
    label{
        font-size: 11px;
        font-weight: bold;
    }
    .ant-form-item-control-input-content{
        display: flex;
        justify-content: space-between;
    }
`
export const WrapperForm = styled.div`
    width: 400px;

    .ant-image{
        margin-top: 24px;
    }

`
export const ButtonForm = styled(Button)`
    color: #fff;
    height: 40px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 10px;
`

export const ModalComponent = styled(Modal)`
    max-width: 1300px !important;
    .ant-modal-content{
        width: 100%;
    }
    .ant-modal-body{
        padding: 0 24px 24px 24px;
    }
    .ant-tabs-tab:hover{
        color: #F14902;
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn{
        color: #F14902;
    }
    .ant-tabs-ink-bar{
        background: #F14902;

    }
`
export const Image = styled.img``