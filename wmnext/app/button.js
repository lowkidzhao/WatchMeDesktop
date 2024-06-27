'use client'
import React, {useState,useRef } from 'react';
import {useImmer} from 'use-immer'
import {ThunderboltFilled} from "@ant-design/icons";
import {Button, ConfigProvider, Form, InputNumber, Modal, Radio} from "antd";
import {validateIp} from "@/app/validateRules";


// 管理此功能的应该为用户端||此处为连接新服务器按钮
export default function button01() {
    //----------恢复初始值------------
    function resetId() {
        setDataIp([{id: 0, number: 0}, {id: 1, number: 0}, {id: 2, number: 0}, {
            id: 3,
            number: 0
        }])
    }

    //----------连接窗口------------
    // 是否显示窗口
    const [open, setOpen] = useImmer(false);
    // 开启
    const showModal = () => {
        setOpen(true);
    };
    // 是否显示加载
    const [confirmLoading, setConfirmLoading] = useImmer(false);
    // 确定
    const handleOk = () => {
        useForm.validateFields().then((values) => {//校验通过时
            setConfirmLoading(true);
            setTimeout(() => {
                setOpen(false);
                setConfirmLoading(false);
            }, 2000);
        }).catch((err) => {
            console.log(err);
        })
    };
    // 取消
    const handleCancel = () => {
        resetId();
        setOpen(false);
    };
    //------------表单------------
    const [useForm] = Form.useForm();



    //------------选择类型------------
    const [value_choose, setValue_choose] = useImmer(1);
    const onChange = (e) => {
        console.log(e.target.value);//打印选择值
        setValue_choose(e.target.value);//填入当前值
    };
    // IP
    const [dataIp, setDataIp] = useImmer([{id: 0, number: 0}, {id: 1, number: 0}, {id: 2, number: 0}, {
        id: 3,
        number: 0
    }]);
    //  数据修改后触发（只能获取当前输入框内数据）
    const onChangeIP = (value, id) => {
        setDataIp(draft => {
            draft[id].number = value
        })
    }
    //遍历渲染
    const data_Ip = dataIp.map(data =>
        <li key={data.id} style={{display: 'inline', marginRight: '5px', marginLeft: '0'}}>
            <InputNumber min={1} max={100000000} defaultValue={0} value={data.number}
                         onChange={e => onChangeIP(e, data.id)} precision={0} controls={false}/>
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
                <Form name={"test01"} form={useForm}>
                    <Form.Item name="IP"
                               rules={[
                                   { required: true,
                                       message: '请输入IP',
                                   }
                               ]}>
                        <ul className="list-none"><span>IP：</span>{data_Ip}</ul>
                    </Form.Item>
                    <Form.Item name="Port" rules={[
                        { required: true,
                            message: '请输入端口',
                        }
                    ]}>
                        <div className="ml-6">
                            <span>端口：</span>
                            <InputNumber min={1} max={10000} defaultValue={0} precision={0} controls={false}/>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
