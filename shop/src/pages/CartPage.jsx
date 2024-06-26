import Footer from "../layout/Footer/Footer";
import Form from "../layout/Form/Form";
import Header from "../layout/Header/Header";
import CartContainer from "../components/Cart/CartContainer";


function Cart() {
    return (<section>
        <Header />
        <CartContainer />
        <Form />
        <Footer />
    </section>);
}

export default Cart;