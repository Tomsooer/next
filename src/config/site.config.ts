export const siteConfig = {
    title: "Tatar cuisine",
    description: "Tatar Cuisine Recipes",
    navItems: [
        {href: "/", label: "Recipes"},
        {href: "/ingredients", label: "Ingredients"},
        {href: "/about", label: "About"}
    ],

    pagesContent: {
        "/": {
            content: "There will be recipes..."
        },
        "/ingredients": {
            content: "Traditional ingredients of Tatar cuisine..."
        },
        "/about": {
            content: `
            <p>
            Tatar cuisine is a vibrant combination of hearty meat dishes, 
            flavorful pastries, and delicate dairy products, reflecting the 
            rich history and hospitality of the Tatar people.
            </p>
            
            <h2>The main dishes of Tatar cuisine</h2>
            
            
            <ul>
                <li>
                    <strong>Echpochmak</strong> - Triangular cakes with a filling of ground meat, 
                    potatoes, and bake. A portion of pastries in the middle adds bouillonю
                </li> 
                <li>
                    <strong>Belyash</strong> - Large pie with duck, beef or chicken mixed with
                     potatoes and onions. A festive dish.
                </li> 
                <li>
                    <strong>Echpochmak</strong> - Triangular cakes with a filling of ground meat, 
                    potatoes, and bake. A portion of pastries in the middle adds bouillonю
                </li> 
                <li>
                    <strong>Echpochmak</strong> - Triangular cakes with a filling of ground meat, 
                    potatoes, and bake. A portion of pastries in the middle adds bouillonю
                </li> 
                <li>
                    <strong>Echpochmak</strong> - Triangular cakes with a filling of ground meat, 
                    potatoes, and bake. A portion of pastries in the middle adds bouillonю
                </li>
            </ul>
            
            
            `

        }


    }

}
