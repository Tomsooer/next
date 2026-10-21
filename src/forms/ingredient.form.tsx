import React, {useState} from "react";

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

    return 
}

export default IngredientForm;
