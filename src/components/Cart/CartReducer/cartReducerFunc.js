export const cartReducerFunc = (state, action) => {
  if (action.type === 'ADD') {
    // Add to Item Amount
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount

    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id)
    const existingCartItem = state.items[existingCartItemIndex]

    // Subtract from Item Amount
    const updatedTotalAmount = state.totalAmount - existingCartItem.price
    
    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id)
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount -1
      }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  throw new Error('ACTION TYPE DOES NOT EXIST! DO CHECK AGAIN')
}