
const getLocalStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return [];
    const parsed = JSON.parse(item);
    return Array.isArray(parsed) 
      ? parsed.filter(item => item && item.id) 
      : [];
  } catch (error) {
    console.error(`Error reading ${key}:`, error);
    return [];
  }
};

const initialState = {
  products: [],
  sofas: [],
  chairs: [],
  beds: [],    // ← varmı?
  tables: [],

  basket: getLocalStorage("basket"), 
  favorites: getLocalStorage("favorites"), 
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_SOFAS": 
      return { ...state, sofas: action.payload };
      case "SET_CHAIRS": 
      return { ...state, chairs: action.payload };
      case "SET_BEDS":
      return { ...state, beds: action.payload };
      case "SET_TABLES":
      return { ...state, tables: action.payload };
    case "SET_BASKET":
      return { ...state, basket: action.payload };
    case "SET_Favorites":
      return { ...state, favorites: action.payload };
    default: 
      return state;
  }
}