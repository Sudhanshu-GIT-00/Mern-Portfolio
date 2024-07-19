import React from 'react'
import { Form, Input } from 'antd'
import { useSelector } from 'react-redux'

function AdminIntro() {

  const { portfolioData } = useSelector((state) => state.root);
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form onFinish={onFinish} layout='vertical' initialValues={portfolioData?.intros}>
        <Form.Item name='welcomeText' label='Welcome Text'>
          <input placeholder='Welcome Text' />
        </Form.Item>
        <Form.Item name='firstName' label='First Name'>
          <input placeholder='firstName' />
        </Form.Item>
        <Form.Item name='lastName' label=' Last Name'>
          <input placeholder='lastName' />
        </Form.Item>
        <Form.Item name='caption' label=' Caption'>
          <input placeholder='caption' />
        </Form.Item>
        <Form.Item name='description' label='Description'>
          <textarea placeholder='description' />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className='px-10 py-2 bg-primary text-white' type='submit'>
            Save
          </button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro