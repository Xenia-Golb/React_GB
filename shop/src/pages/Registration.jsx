import Footer from "../layout/Footer/Footer";
import Form from "../layout/Form/Form";
import Header from "../layout/Header/Header";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm"
import Breadcrumbs from "../components/BreadCrumb/BreadCrumb";
function RegistrationPage() {
    return (<section>
        <Header />
        <Breadcrumbs />
        <RegistrationForm />
        <Form />
        <Footer />
    </section>);
}

export default RegistrationPage;