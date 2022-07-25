import React, { useEffect, useState } from 'react'
import { Checkbox, DatePicker, Form, Input, InputNumber, Select, Spin, Upload } from 'antd';
import * as S from './styles'
import { Image } from 'antd';
import { AndroidOutlined } from '@ant-design/icons';
import { useForm } from 'antd/lib/form/Form';

export type FormImage = {
  image: string
  setHeight: Function
  setWidth: Function
  setBorderWidth: Function
  setBorder: Function
  height: number
  width: number
  borderWidth: number
  border: string
  modal: boolean
  setModal: Function
  modalImage: boolean
  setModalImage: Function
}

export default function FormImage({
  image,
  setHeight,
  setWidth,
  setBorderWidth,
  setBorder,
  height,
  width,
  borderWidth,
  border,
  setModal,
  setModalImage,
  setSavePhoto
}: any) {

  const [form] = Form.useForm();

  const onFinish = (valor: any) => {
    setSavePhoto(true)
    setModal(false)
    setModalImage(false)
  };

  useEffect(() => {
    form.setFieldsValue({
      height: 250,
      width: 250,
      borderWidth: 1
    })
  }, [])

  const changeValues = (values: string, value: number) => {
    form.setFieldsValue({ [values]: value })
  }

  return (<>
    <S.ContainerForm>
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}

        style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
      >
        <div>

          <S.WrapperForm>
            <Form.Item className='space' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Item
                label="Altura"
                name="height"
                style={{ display: 'inline-block', width: 'calc(48%)' }}
              >
                <InputNumber value={height} onChange={(e: any) => { changeValues('height', e), setHeight(e) }} />
              </Form.Item>

              <Form.Item
                label="Largura"
                name="width"
                style={{ display: 'inline-block', width: 'calc(48%)', marginLeft: 'auto' }}
              >
                <InputNumber value={width} onChange={(e: any) => { changeValues('width', e), setWidth(e) }} />
              </Form.Item>
            </Form.Item >
            <Form.Item className='space' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Form.Item
                label="Borda ? "
                valuePropName="checked"
                style={{ display: 'inline-block', width: 'calc(48%)' }}
              >
                <Checkbox onChange={(e: any) => setBorder(e.target.checked)}>Borda</Checkbox>
              </Form.Item>
              {
                border ?
                  <Form.Item
                    label="Largura da borda"
                    name="borderWidth"
                    style={{ display: 'inline-block', width: 'calc(48%)' }}
                  >
                    <InputNumber onChange={(e: any) => { changeValues('borderWidth', e), setBorderWidth(e) }} />
                  </Form.Item> : null
              }
            </Form.Item >

          </S.WrapperForm>
          <S.WrapperForm>
            <S.ButtonForm type="primary" htmlType="submit" className="login-form-button">
              Salvar
            </S.ButtonForm>
          </S.WrapperForm>
        </div>
        <S.WrapperForm style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <S.Image style={{
            height: height,
            width: width,
            borderColor: '#000',
            borderStyle: 'solid',
            borderWidth: borderWidth
          }} src={image} />
        </S.WrapperForm>
      </Form>
    </S.ContainerForm>

  </>
  )

}


