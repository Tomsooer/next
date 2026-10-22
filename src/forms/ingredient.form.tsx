import React, {useState} from "react";
import {Form, Input} from "@heroui/react";

const IngredientForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        unit: "",
        pricePerUnit: null as number | null,
        deskription: ""
    });

    const hadleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <Form className="w-[400px]" onSubmit={hadleSubmit}>
            <Input
                isRequired
                name="name"
                placeholder="Enter the name of the ingredient"
                type="text"
                valye={formData.name}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none"
                }}

                onChange={(e) => setFormData({...formData, name: e.target.value})}
                validate={(value) => {
                if (!value) return "the name is required";
                    return null;
                }}
            />

            <div className="flex gap-2 w-full"></div>
            <div className="w-1/3"></div>

            <Select></Select>

        </Form>
    );
}

export default IngredientForm;
