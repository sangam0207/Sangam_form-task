import { useState } from "react";
import { Button, Form, Input, Select } from "antd";
const { TextArea } = Input;

const FormTask = () => {
    const [value, setValue] = useState('');
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4 h-full w-full ">
      <p className="text-lg text-center">Contact us</p>
      <h1 className="text-center text-3xl font-bold">Make an Appointment</h1>
      <Form
        className="w-1/2 "
        name="basic"
        // labelCol={{
        //   span: 8,
        // }}
        // wrapperCol={{
        //   span: 16,
        // }}
        // style={{
        //   maxWidth: 600,
        // }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex flex-col md:flex-row justify-between w-full">
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
            className="w-full md:w-1/2 "
          >
            <Input placeholder="Full Name" required  className="w-full h-12 bg-gray-100" />
          </Form.Item>

          <Form.Item
            name="email"
             className="w-full md:w-1/2 "
            rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
           
          >
            <Input placeholder="Email" required className="w-full h-12 bg-gray-100"/>
          </Form.Item>
        </div>
        <div className="flex-col md:flex-row justify-between w-full gap-2">
          <Select
            defaultValue="Please Select"
           className="w-full md:w-1/2 h-12 bg-gray-100 "
            onChange={handleChange}
            options={[
              {
                label: <span>manager</span>,
                title: "manager",
                options: [
                  {
                    label: <span>Jack</span>,
                    value: "Jack",
                  },
                  {
                    label: <span>Lucy</span>,
                    value: "Lucy",
                  },
                ],
              },
            ]}
          />
          <Select
            defaultValue="4.00 Available"
            className="w-full md:w-1/2 mt-4 md:mt-0 h-12 bg-gray-100 "
            onChange={handleChange}
            options={[
              {
                label: <span>engineer</span>,
                title: "engineer",
                options: [
                  {
                    label: <span>Chloe</span>,
                    value: "Chloe",
                  },
                  {
                    label: <span>Lucas</span>,
                    value: "Lucas",
                  },
                ],
              },
            ]}
          />
        </div>
        <div className="mt-6">
        <TextArea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Controlled autosize"
        autoSize={{
          minRows: 6,
          maxRows: 5,
        }} 
        className="bg-gray-100"
      />
        </div>
   
    <Form.Item
        //   wrapperCol={{
        //     offset: 8,
        //     span: 16,
        //   }}
        className="w-full  flex justify-center"
        >
          <Button type="primary" htmlType="submit" className="mt-4 w-full px-12 py-6 font-semibold">
            Book Appointment
          </Button>
        </Form.Item>
    
      
      </Form>
    </div>
  );
};

export default FormTask;
