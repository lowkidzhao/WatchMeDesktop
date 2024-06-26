'use client'
import React, {useState} from 'react';
import {ThunderboltFilled} from "@ant-design/icons";
import {Button, ConfigProvider, InputNumber, Modal, Radio} from "antd";


// 调用方法的应该为服务端||此处为连接新服务器按钮
export default function button01() {
    //----------连接窗口------------
    // 是否显示窗口
    const [open, setOpen] = useState(false);
    // 开启
    const showModal = () => {
        setOpen(true);
    };
    // 是否显示加载
    const [confirmLoading, setConfirmLoading] = useState(false);
    // 确定
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };
    // 取消
    const handleCancel = () => {
        console.log('取消事件触发');
        setOpen(false);
    };

    //------------选择类型------------
    const [value_choose, setValue_choose] = useState(1);
    const onChange = (e) => {
        console.log(e.target.value);//打印选择值
        setValue_choose(e.target.value);//填入当前值
    };
    // IP
    const [dataIp, setDataIp] = useState([{id: 0, number: 0}, {id: 1, number: 0}, {id: 2, number: 0}, {
        id: 3,
        number: 0
    }]);
    //  数据修改后触发（只能获取当前输入框内数据）
    function onChangeIP(value) {
        console.log(value)
    }
    //遍历渲染
    const data_Ip = dataIp.map(data=>
        <li key={data.id} style={{display: 'inline',marginRight:'5px',marginLeft:'0'}}>
            <ConfigProvider
                theme={{
                    components: {
                        // 去除箭头图标（依然能点到）
                        InputNumber: {
                            handleFontSize:0,
                            handleWidth:0
                        },
                    },
                }}
            >
                <InputNumber min={1} max={100000000} defaultValue={data.number} onChange={onChangeIP}  precision={0}/>
            </ConfigProvider>
         </li>
    )


    return (
        <div className="flex  w-15 h-8 items-center transition ease-in-out delay-150 hover:scale-105 duration-300">
            <Button onClick={showModal} className="scale-90">   {/*缩放一下*/}
                <span className="">
                新增
                </span>
                <div className=" mt-2">
                    <ThunderboltFilled className="text-xl  hover:animate-bounce w-6 h-5"/>
                </div>
            </Button>
            <Modal
                title="连接服务器"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <Radio.Group onChange={onChange} value={value_choose}>
                    <Radio value={1}>IP</Radio>
                    <Radio value={2}>域名</Radio>
                </Radio.Group>
                <div className="mt-2">
                    <ul className="list-none">{data_Ip}</ul>
                </div>
            </Modal>
        </div>
    );
}
