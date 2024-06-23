import {Button, Flex} from 'antd';

export default function Page() {
    return (
        <span className="flex">测试页面</span>
    )
}


function button_test() {
    return (
        <Flex gap="small" wrap>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
        </Flex>
    )
}