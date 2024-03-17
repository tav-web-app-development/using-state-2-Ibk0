export default function NavBar({ user, cartItems, onCheckoutClick }) {
  return (
    <>
      <span>{`Welcome ${user.firstName} ${user.lastName}`}</span>
      <a href="#">Login</a>
      <a href="#home">Home</a>
      <a href="#home">Laptops</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
      <button onClick={onCheckoutClick}>Checkout</button>
      <span>{`${cartItems} in your cart`}</span>
    </>
  );
}