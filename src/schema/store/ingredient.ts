import {create} from 'zustand';
import {IIngredient} from "@/types/ingredients";
import {getIngredients} from "@/actions/ingredient";

interface IngredientState {
    ingredients: IIngredient[];
    isLoading: boolean;
    error: string | null;
    loadIngredients: () => Promise<void>;
    addIngredient: (formData: FormData) => Promise<void>;
    removeIngredient: (id: string) => Promise<void>;
}

export const useIngredientStore = create<IngredientState>((set) => ({
    ingredients: [],
    isLoading: false,
    error: null,
    loadIngredients: async () => {
        set({ isLoading: true, error: null});
        try {
            const rezult = await getIngredients();

            if (rezult.success) {
                set ({ingredients: rezult.ingredients, isLoading: false});
            } else {
                set({ error: rezult.error, isLoading: false });
            }

        } catch (error) {
            console.log("error", error);
            set({ error: "Failed to load ingredients", isLoading: false });
        }
    },
    addIngredient: async (formData: FormData) => {
        set({ isLoading: true, error: null });

        try {
            const result = await createIngredient(formData);
            if (result.success) {
                set((state) => ({
                    ingredients: [...state.ingredients, result.ingredient],
                    isLoading: false
                }));
            } else {
                set({ error: result.error, isLoading: false });
            }
        } catch (error) {
            console.log("error", error);
            set({ error: "Ошибка при добавлении ингредиента", isLoading: false });
        }
    }
}));


