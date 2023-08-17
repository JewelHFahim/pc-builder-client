import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
        <Footer />
      </Provider>
    </div>
  );
}
