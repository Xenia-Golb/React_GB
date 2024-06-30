import Footer from "../layout/Footer/Footer";
import Form from "../layout/Form/Form";
import Header from "../layout/Header/Header";
import CartContainer from "../components/Cart/CartContainer";
import Breadcrumbs from "../components/BreadCrumb/BreadCrumb";


function Cart() {
    return (<section>
        <Header />
        <Breadcrumbs />
        <CartContainer />
        <Form />
        <Footer />
    </section>);
}

export default Cart;