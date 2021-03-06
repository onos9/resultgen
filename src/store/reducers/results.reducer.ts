import { IResultState, IActionBase } from "../models/root.interface";
import { ADD_PRODUCT, CHANGE_PRODUCT_PENDING_EDIT, EDIT_PRODUCT, REMOVE_PRODUCT,
    CLEAR_PRODUCT_PENDING_EDIT, SET_MODIFICATION_STATE, CHANGE_PRODUCT_AMOUNT} from "../actions/results.action";
import { IResult, ProductModificationStatus } from "../models/result.interface";



const initialState: IResultState = {
    modificationState: ProductModificationStatus.None,
    selectedProduct: null,
    results: [{
        id: 1, name: "Chocolate", description: "This is Chocolate and it is Sweet",
        amount: 10, price: 4, hasExpiryDate: true, category: "Sweet"
    },
    {
        id: 2, name: "Apple", description: "This is Apple and it is healthy",
        amount: 5, price: 2, hasExpiryDate: true, category: "Fruit"
    },
    {
        id: 3, name: "Straw", description: "This is Straw and you can use it for your drink",
        amount: 100, price: 1, hasExpiryDate: false, category: "Kitchen"
    },
    {
        id: 4, name: "Spoon", description: "This is Spoon and it is useful while eating",
        amount: 3, price: 2, hasExpiryDate: false, category: "Kitchen"
    },
    {
        id: 5, name: "Sugar", description: "This is Sugar and it is to make your life sweet",
        amount: 15, price: 5, hasExpiryDate: true, category: "Sweet"
    }]
};

function productsReducer(state: IResultState = initialState, action: IActionBase): IResultState {
    switch (action.type) {
        case ADD_PRODUCT: {
            let maxId: number = Math.max.apply(Math, state.results.map(function(o) { return o.id; }));
            action.result.id = maxId + 1;
            return { ...state, results: [...state.results, action.result]};
        }
        case EDIT_PRODUCT: {
            const foundIndex: number = state.results.findIndex(pr => pr.id === action.result.id);
            let results: IResult[] = state.results;
            results[foundIndex] = action.result;
            return { ...state, results: results };
        }
        case REMOVE_PRODUCT: {
            return { ...state, results: state.results.filter(pr => pr.id !== action.id) };
        }
        case CHANGE_PRODUCT_PENDING_EDIT: {
            return { ...state, selectedProduct: action.result };
        }
        case CLEAR_PRODUCT_PENDING_EDIT: {
            return { ...state, selectedProduct: null };
        }
        case SET_MODIFICATION_STATE: {
            return { ...state, modificationState: action.value };
        }
        case CHANGE_PRODUCT_AMOUNT: {
            const foundIndex: number = state.results.findIndex(pr => pr.id === action.id);
            let results: IResult[] = state.results;
            results[foundIndex].amount = results[foundIndex].amount - action.amount;
            return { ...state, results: results };
        }
        default:
            return state;
    }
}


export default productsReducer;