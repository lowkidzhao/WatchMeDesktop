'use client';
import __button from "./button";
import { Layout} from 'antd';

export default function Home() {
    const {Header, Footer, Sider, Content} = Layout;

    return (
        <div>
            <Layout
                style={{
                    display: 'flex',
                    backgroundColor: '#fff',
                    width: '100vw', height: '100vh'
                }}>
                <Header
                    style={{
                        display: 'flex',
                        backgroundColor: '#fff',
                        zIndex: 999,
                        width: '100vw', height: '30px',
                    }}>
                    <div className="absolute w-max h-max left-0">
                        <__button></__button>
                    </div>
                </Header>
                <Layout hasSider={true}>
                    <Sider width="14%"
                           style={{
                               display: 'flex',
                               backgroundColor: '#dfdd81',
                               height: '100%', overflow: 'hidden'
                           }}
                    >
                        sider
                    </Sider>
                    <Content style={{
                        display: 'flex',
                        backgroundColor: '#7dbb54',
                        width: 'auto', height: 'auto', margin: '10px',
                        overflow: 'auto'
                    }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
}
