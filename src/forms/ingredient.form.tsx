import React, {useState} from "react";
import {Form, Input, Select, SelectItem} from "@heroui/react";
import {CATEGORY_OPTIONS} from "@/constants/select-options";

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
            <div className="flex gap-2 w-full">
                <div className="w-1/3">

                    <Select
                        isRequired
                        name="category"
                        placeholder="Category"
                        selectedKeys={formData.category ? [formData.category] : []}
                        classNames={{
                            trigger: "bg-default-100 w-full",
                            innerWrapper: "text-sm",
                            value: "truncate",
                            selectorIcon: "text-black"
                        }}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                        {CATEGORY_OPTIONS.map((options) => (
                            <SelectItem key={options.value} className="text-blank">
                                {options.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div className="w-1/3">
                    <Select
                        isRequired
                        name="category"
                        placeholder="Category"
                        selectedKeys={formData.category ? [formData.category] : []}
                        classNames={{
                            trigger: "bg-default-100 w-full",
                            innerWrapper: "text-sm",
                            value: "truncate",
                            selectorIcon: "text-black"
                        }}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                    >
                        {CATEGORY_OPTIONS.map((options) => (
                            <SelectItem key={options.value} className="text-blank">
                                {options.label}
                            </SelectItem>
                        ))}
                    </Select>

                </div>
            </div>
        </Form>
    )

}

export default IngredientForm;
