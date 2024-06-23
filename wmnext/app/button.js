'use client'
import React, {useState} from 'react';
import {ThunderboltFilled} from "@ant-design/icons";
import {Button, Modal} from "antd";


// 调用方法的应该为服务端||此处为连接新服务器按钮
export default function button01() {
    // 是否显示窗口
    const [open, setOpen] = useState(false);
    // 是否显示加载
    const [confirmLoading, setConfirmLoading] = useState(false);
    // 显示数据
    const [modalText, setModalText] = useState('初始化数据');
    // 开启
    const showModal = () => {
        setOpen(true);
    };
    // 确定
    const handleOk = () => {
        setModalText('两秒后关闭');
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
    return (
        <div className="flex  w-15 h-8 items-center transition ease-in-out delay-150 hover:scale-105 duration-300">
            <Button onClick={showModal} className="scale-90">
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
                <p>{modalText}</p>
            </Modal>
        </div>
    );
}
