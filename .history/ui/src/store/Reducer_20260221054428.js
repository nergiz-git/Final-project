// const initialState = {
//   products: [],
//   basket: JSON.parse(localStorage.getItem("basket")) || [],
//   favorites: JSON.parse(localStorage.getItem("favorites")) || [],
// };
// export default function Reducer(state = initialState, action) {
//   switch (action.type) {
//     case "SET_PRODUCTS":
//       return { ...state, products: action.payload };
//     case "SET_BASKET":
//       return { ...state, basket: action.payload };
//   case "SET_Favorites":
//     return { ...state, favorites: action.payload };
//   }
//   return state;
// }



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
  sofas: [], // ← ƏLAVƏ EDİN
  chairs
  basket: getLocalStorage("basket"), // ← Daha təhlükəsiz
  favorites: getLocalStorage("favorites"), // ← Daha təhlükəsiz
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };
    case "SET_SOFAS": // ← ƏLAVƏ EDİN
      return { ...state, sofas: action.payload };
      case "SET_CHAIRS": // ← ƏLAVƏ EDİN
      return { ...state, chairs: action.payload };
    case "SET_BASKET":
      return { ...state, basket: action.payload };
    case "SET_Favorites":
      return { ...state, favorites: action.payload };
    default: // ← ƏLAVƏ EDİN
      return state;
  }
}