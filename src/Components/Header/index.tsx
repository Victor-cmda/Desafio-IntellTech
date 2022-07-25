import { UploadOutlined, FileAddOutlined, PrinterOutlined } from '@ant-design/icons';
import React from 'react';
import * as S from './styles'
import Logo from '../../assets/logo.png'
import ReactToPrint from 'react-to-print';
import A4 from '../A4';

export default function Header({ modal, setModal }: { modal: boolean, setModal: Function }) {
    return (
        <>
            <S.Container>
                <S.ContainerIcons style={{ marginRight: 'auto' }}>
                    <a href='https://intelltech.com.br/language/pt/inicio/' target={'_blank'}>
                        <S.Image src={Logo} />
                    </a>
                </S.ContainerIcons>
                <S.ContainerIcons>
                    <S.ButtonHeader onClick={() => { setModal(!modal); }} type="primary" icon={<FileAddOutlined />} size={'middle'} />
                </S.ContainerIcons>
                <S.ContainerIcons>
                    <S.ButtonHeader type="primary" icon={<PrinterOutlined />} size={'middle'} />
                </S.ContainerIcons>
            </S.Container>
        </>
    )
}
