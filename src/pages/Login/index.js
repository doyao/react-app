import React from 'react'
import { Button, Input,Form,message} from 'antd'
import {withRouter} from 'react-router-dom'
import './login.css'
class Login extends React.Component{
    render(){
        const onFinish = (values) => {
            if(values.username === 'admin' && values.password === '123'){
              let token=values.username+'123123'
              sessionStorage.setItem('token',token)
              message.success('登录成功')
              this.props.history.push("/admin/TodoList")
              return true
            }
            message.error('账号或者密码错误')
            return false
        };
        return (
            <div className='logo_back'>
              <div style={{maxWidth:350,textAlign:'center',margin:'0 auto'}}>
              <h1 style={{paddingTop:100,color:'#FFF',marginBottom:'100px'}}>登录</h1>
              <Form onFinish={onFinish}>
              <Form.Item
                label="账 号 "
                name="username"
                className="login_itme"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
              <Input />
              </Form.Item>
              <Form.Item
                label="密 码 "
                name="password"
                className="login_itme"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
              <Input.Password />
              </Form.Item>
              <Form.Item style={{textAlign:'center'}}>
                <Button style={{width:100,marginTop:'30px'}}  type="primary" shape="round" htmlType="submit">
                  登录
                </Button>
              </Form.Item>
            </Form>
            </div>
            </div>
          );
    }   
}
export default withRouter(Login);