import { Form,Input,Button } from "@arco-design/web-react"
import styled from "styled-components"

const FormItem  = Form.Item;

const Login = () =>{
    return (
        <Container>
            <Form labelCol={{span:6}} wrapperCol={{span:15}} style={{ height:'260px',width:'400px' }}>
                <FormItem label='账号' rules={[{ required:true }]}>
                    <Input placeholder="请输入账号"/>
                </FormItem>
                <FormItem label='密码' rules={[{ required:true }]}>
                    <Input.Password placeholder="请输入密码"/>
                </FormItem>
                <FormItem label='确认密码' rules={[{ required:true }]}>
                    <Input.Password placeholder="请确认密码"/>
                </FormItem>
                <FormItem wrapperCol={{offset:10}}>
                    <Button type="primary">登录</Button>
                </FormItem>
                <FormItem wrapperCol={{offset:7}}>
                    <p>新用户未注册会自动注册</p>
                </FormItem>
            </Form>
        </Container>
    )
}

const Container = styled.div`
    width:100vw;
    height:100vh;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
    .arco-form{
        box-shadow: 5px 5px 30px #109fb27b;
        opacity: 0.5;
        .arco-row{
            margin-top:10px;
            margin-bottom:10px;
        }
    }
`

export default Login