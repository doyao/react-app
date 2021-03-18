import React, {useState} from 'react';

import { Modal, Button, Input,Radio,Form} from 'antd';
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 15 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 15 },
};
function ModalList(props){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    
    const showModal = () => {
      setIsModalVisible(true);
    };
    const onFinish = (values) => {
      const list={"key":props.list.length,...values};
      props.handleChange(list)
      setIsModalVisible(false);
      
    };
    return (
      <>
      <Button type="primary"  onClick={showModal}>添加用户信息</Button>
      <Modal title="添加用户" 
      visible={isModalVisible} 
      centered="true"
      footer={null}
      onCancel={() => setIsModalVisible(false)}
      >
        <Form {...layout} form={form} name="control-hooks"  onFinish={onFinish}>
          <Form.Item name="name" label="名字" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label="年龄" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="tel" label="电话" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="sex" label="性别">
            <Radio.Group>
              <Radio value="男">男</Radio>
              <Radio value="女">女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button  type="primary" htmlType="submit">
              添加
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      </>
    );
}
export default ModalList;