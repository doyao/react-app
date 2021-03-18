import { Layout, Menu, Breadcrumb,} from 'antd';
import {adminRoutes} from '../../routes/index'
import {Link} from 'react-router-dom'
const {Content, Sider } = Layout;
const routers=adminRoutes.filter(route => route.isShow)
function Farme(props){
    return(
    <Layout  style={{ height: '100%', borderRight: 0 }}>
        <Sider width={200} className="site-layout-background">
            <Menu
            mode="inline"
            defaultSelectedKeys={['/admin/TodoList']}
            defaultOpenKeys={['sub1']}
            theme="dark"
            >
            {routers.map(route =>{
                return (
                    <Menu.Item key={route.path}>
                        <Link to={route.path}>{route.title}</Link>
                    </Menu.Item>
                )
            })}
            
            </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
            >
            {props.children}
            </Content>
        </Layout>
    </Layout>
    )
}
export default Farme;