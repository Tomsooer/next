"use client";

import React, {useState} from "react";
import {Button, Form, Input} from "@heroui/react";

interface IProps {
    onClose: () => void;
}

const LoginForm = ({onClose}: IProps) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted", formData);

        onClose();
    }

    return (
        <Form className="w-full" onSubmit={handleSubmit}>
            <Input
                aria-label="Email"
                isRequired
                name="email"
                placeholder="Enter your email"
                type="email"
                value={formData.email}
                classNames={{
                    inputWrapper: "big-default-100",
                    input: "text-sm focus:outline-none "
                }}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                validate={(value) => {
                    if (!value) return "Email is required"
                    return null;
                }}
            />

            <Input
                isRequired
                name="password"
                placeholder="Enter your password"
                type="password"
                value={formData.password}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none"
                }}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                validate={(value) => {
                    if (!value) return "Password is required"
                    return null;
                }}
            />
            <div className="flex w-[100%] gap-4 items-center pt-8 justigy-end">
                <Button variant="light" onPress={onClose}>
                    Cancel
                </Button>
                <Button color="primary" type="submit">
                    Sign In
                </Button>
            </div>
        </Form>
    );
}

export default LoginForm;
