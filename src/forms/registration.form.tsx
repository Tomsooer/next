"use client";

import React, {useState} from "react";
import {Button, Form, Input} from "@heroui/react";
import {registerUser} from "@/actions/register";

interface IProps {
    onClose: () => void;
}

const RegistrationForm = ({onClose}: IProps) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted", formData);

        const result = await registerUser(formData);
        console.log("result", result);


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
                    if (!validateEmail(value)) return "Invalid email address"
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
                    inputWrapper: "bg-deafault-100",
                    input: "text-sm focus:outline-none"
                }}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                validate={(value) => {
                    if (!value) return "Password is required"
                    if (value.length < 6) return "Password must be at least 6 characters"
                    return null;
                }}
            />

            <Input
                isRequired
                name="confimPassword"
                placeholder="Confirm your password"
                type="password"
                value={formData.confirmPassword}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none"
                }}
                onChange={(e) =>
                    setFormData({...formData, confirmPassword: e.target.value})
                }
                validate={(value) => {
                    if (!value) return "Confirm password is required";
                    if (value !== formData.password) return "Passwords do not match";
                    return null;
                }}
            />
            <div className="flex w-[100%] gap-4 items-center pt-8 justigy-end">
                <Button variant="light" onPress={onClose}>
                    Cancel
                </Button>
                <Button color="primary" type="submit">
                    Sign Up
                </Button>
            </div>
        </Form>
    );
}

export default RegistrationForm;
