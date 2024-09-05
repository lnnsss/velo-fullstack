export const handleAddToCart = (
  cartList,
  setCartList,
  id,
  cover,
  title,
  artist,
  price,
  discountPrice
) => {
  let newCartItem = {
    id,
    cover,
    title,
    artist,
    price: discountPrice || price,
    count: 1,
    totalPrice: discountPrice || price,
  };
  let existingCartItem = cartList.find((el) => el.id === newCartItem.id);

  if (existingCartItem) {
    existingCartItem.count++;
    existingCartItem.totalPrice =
      existingCartItem.price * existingCartItem.count;
    setCartList([...cartList]);
  } else {
    setCartList([...cartList, newCartItem]);
  }
};
