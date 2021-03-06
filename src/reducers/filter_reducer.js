import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    // get maximum price
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    // Use payload as spread operator to copy the file to avoid trouble with filtered_prducts to all_product as its reference to memory(new instance)
    return {
      ...state,
      filtered_products: [...action.payload],
      // save value to reset filters
      all_products: [...action.payload],
      // save old values by spread operater otherwise overide them
      filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, gridView: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, gridView: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === 'price-lowest') {
      // javascript sort function
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === 'name-a') {
      // javascript sort and locale
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === UPDATE_FILTERS) {
    // dynamic key value pair change
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === FILTER_PRODUCTS) {
    // setup defualt values
    const { all_products } = state;
    const { text, category, company, colors, price, shipping } = state.filters;

    let tempProducts = [...all_products];
    //filtering
    //text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
    }
    //company
    if (company !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }
    // category
    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    //color
    if (colors !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === colors);
      });
    }
    //price
    if (price) {
      tempProducts = tempProducts.filter((product) => product.price <= price);
    }

    //shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === CLEAR_FILTERS) {
    // max price, min price,price from old state
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        company: 'all',
        category: 'all',
        colors: 'all',
        price: state.filters.maxPrice,
        shipping: false,
      },
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
