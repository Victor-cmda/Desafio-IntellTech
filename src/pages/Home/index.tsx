import { BarChartOutlined, FileImageOutlined } from '@ant-design/icons';
import { Typography, Upload } from 'antd';
import { RcFile } from 'antd/lib/upload';
import { useState } from 'react';
import A4 from '../../Components/A4';
import Header from '../../Components/Header';
import FormImage from '../../Components/FormImage';
import * as S from './styles'
import { Draggable } from 'drag-react';
import { Rnd } from "react-rnd";
import Graphic from '../../Components/Graphics';
import Footer from '../../Components/Footer';


export default function HomePage() {
    const [modal, setModal] = useState<boolean>(false)
    const [showGraphic, setShowGraphic] = useState<boolean>(false)
    const [image, setImage] = useState<string>('')
    const [modalImage, setModalImage] = useState<boolean>(false)
    const [borderWidth, setBorderWidth] = useState<number>(0)
    const [border, setBorder] = useState<boolean>(false)
    const [savePhoto, setSavePhoto] = useState<boolean>(false)
    const [width, setWidth] = useState<number>(250)
    const [height, setHeight] = useState<number>(250)

    const normFile = async (file: any) => {
        setSavePhoto(false)
        setImage('')
        let src = file.url as string;
        if (!src) {
            src = await new Promise(resolve => {
                const reader = new FileReader();
                reader.readAsDataURL(file as RcFile);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        setModalImage(!modalImage)
        setImage(src)
    };

    return (
        <S.Wrapper>
            <S.Container>
                <Header modal={modal} setModal={setModal} />
                <A4>
                    {savePhoto ?
                        <Draggable
                            style={{
                                position: 'absolute',
                                zIndex: 0
                            }}
                            onDragStart={e => console.log(e)}
                        >
                            <S.Image style={{
                                height: height,
                                width: width,
                                borderColor: '#000',
                                borderStyle: 'solid',
                                borderWidth: borderWidth
                            }} src={image} />
                        </Draggable> : null
                    }

                    {showGraphic ?
                        <Rnd
                            default={{
                                x: 0,
                                y: 0,
                                width: 500,
                                height: 300,
                            }}
                            bounds="window"
                        >
                            <Graphic />
                        </Rnd> : null
                    }
                </A4>
                <Footer />

            </S.Container>

            <S.ModalComponent
                footer={null}
                title="Adicionar Componente"
                visible={modal}
                onCancel={() => setModal(!modal)}
            >
                <S.Row>
                    <S.ContainerModalItem onClick={() => { setModal(!modal), setShowGraphic(!showGraphic) }}>
                        <BarChartOutlined style={{ fontSize: '60px ' }} />
                        <Typography.Title level={3} style={{ margin: 0 }}>
                            Grafico
                        </Typography.Title>
                    </S.ContainerModalItem>

                    <S.UploadC
                        listType="picture"
                        beforeUpload={normFile}
                    >
                        <S.ContainerModalItem>
                            <FileImageOutlined style={{ fontSize: '60px ' }} />
                            <Typography.Title level={3} style={{ margin: 0 }}>
                                Imagem
                            </Typography.Title>
                        </S.ContainerModalItem>
                    </S.UploadC>
                </S.Row>
            </S.ModalComponent>



            <S.ModalComponent
                footer={null}
                title="Adicionar Componente"
                visible={modalImage}
                onCancel={() => setModalImage(!modalImage)}
            >
                <FormImage
                    image={image}
                    height={height}
                    setHeight={setHeight}
                    width={width}
                    setWidth={setWidth}
                    borderWidth={borderWidth}
                    setBorderWidth={setBorderWidth}
                    border={border}
                    setBorder={setBorder}
                    setModal={setModal}
                    setModalImage={setModalImage}
                    setSavePhoto={setSavePhoto}
                />
            </S.ModalComponent>

        </S.Wrapper>
    )
}
