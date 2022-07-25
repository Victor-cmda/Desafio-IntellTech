import styled from 'styled-components'
import { Button } from 'antd';


export const Container = styled.div`
    width: 100%;
    max-height: 60px;
    padding: 30px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    background-color: #495057;
    align-items: center;

`

export const ContainerIcons = styled.div`
    margin-right: 30px;
    font-size: 15px;
    cursor: pointer;
`

export const ButtonHeader = styled(Button)`
    background: #595959 !important;
    border-color: #595959 !important;
    border-radius: 10px;
    font-size: 60px;
    :hover{
        border-color: #f5f5f5;
    }
    :focus{
        outline: 4px auto #f5f5f5;
    }
`

export const Image = styled.img`
    height: 70px;

`