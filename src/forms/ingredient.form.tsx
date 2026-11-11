"use client"

import {createIngredient} from '@/actions/ingredient';
import {Button, Form, Input, Select, SelectItem} from "@heroui/react";
import {CATEGORY_OPTIONS, UNIT_OPTIONS} from "@/constants/select-options";
import {useState} from "react";

const initialState = {
    name: "",
    category: "",
    unit: "",
    pricePerUnit: null as number | null,
    description: ""
};

const IngredientForm = () => {
    const [error, setError] = useState<string | null>(null)
    const [formData, setFormData] = useState(initialState);

    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (formData: FormData) => {
        console.log("Form submitted:", formData);
        startTransition(async () => {
            const result = await createIngredient(formData);

            if (result.error) {
                setError(result.error);
                alert("Error creating ingredient")
            } else {
                setError(null)
                setFormData(initialState);
                alert("Successful creation of ingredient")
            }
        });
    };

//     startTransition(async () => {
//         const result = await createIngredient(formData);
//
//         if (result.error) {
//             setError(result.error);
//         } else {
//             setError(null);
//
//             setFormData(initialState);
//         }
//     });
// };

    return (
        <Form className="w-[400px]" action={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>}

            <Input
                isRequired
                name="name"
                placeholder="Enter the name of the ingredient"
                type="text"
                value={formData.name}
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
                            <SelectItem key={options.value} className="text-black">
                                {options.label}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div className="w-1/3">
                    <Select
                        isRequired
                        name="unit"
                        placeholder="Eat. chan."
                        selectedKeys={formData.unit ? [formData.unit] : []}
                        classNames={{
                            trigger: "bg-default-100 w-full",
                            innerWrapper: "text-sm",
                            value: "truncate",
                            selectorIcon: "text-black"
                        }}
                        onChange={(e) => setFormData({...formData, unit: e.target.value})}
                    >
                        {UNIT_OPTIONS.map((options) => (
                            <SelectItem key={options.value} className="text-black">
                                {options.label}
                            </SelectItem>
                        ))}
                    </Select>

                </div>
                <div className="w-1/3">
                    <Input
                        isRequired
                        name="prisePerUnit"
                        placeholder="Price"
                        type="number"
                        value={
                            formData.pricePerUnit !== null
                                ? formData.pricePerUnit.toString()
                                : ""
                        }
                        classNames={{
                            inputWrapper: "bg-default-100",
                            input: "text-sm focus:outline-none"
                        }}
                        onChange={(e) => {
                            const value = e.target.value ? parseFloat(e.target.value) : null;
                            setFormData({...formData, pricePerUnit: value});
                        }}
                        endContent={
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black">
                            $
                        </span>
                        }
                        validate={(value) => {
                            if (!value) return "Price is required";
                            const num = parseFloat(value);
                            if (isNaN(num) || num < 0)
                                return "The price must be positive";
                            return null;
                        }}
                    />
                </div>
            </div>

            <Input
                name="description"
                placeholder="Enter a description (optional)"
                type="text"
                value={formData.description}
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm focus:outline-none"
                }}
                onChange={(e) =>
                    setFormData({...formData, description: e.target.value})
                }
            />

            <div className="flex w-full items-center justify-end">
                <Button color="primary" type="submit" isLoading={isPending}>
                    Add Ingredient
                </Button>
            </div>
        </Form>
    )

}

export default IngredientForm;
