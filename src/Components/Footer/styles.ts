import styled from 'styled-components'
import { Button } from 'antd';


export const Container = styled.div`
    width: 100%;
    max-height: 60px;
    padding: 12px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #495057;
    align-items: center;
`

export const ContainerIcons = styled.div`
    margin-left: 30px;
    font-size: 15px;
    cursor: pointer;
`

export const ButtonHeader = styled(Button)`
    background: #595959 !important;
    border-color: #595959 !important;
    :hover{
        border-color: #f5f5f5;
    }
    :focus{
        outline: 4px auto #f5f5f5;
    }
`
