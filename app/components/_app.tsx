// pages/_app.tsx
import { CartProvider } from './CartContext'; // Import CartProvider
import '../styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <CartProvider> {/* Wrap your app in CartProvider */}
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
