
import Breadcrumbs from "../components/BreadCrumb/BreadCrumb";
import FilteredCatalog from "../components/FilteredCatalog/FilteredCatalog";
import Footer from "../layout/Footer/Footer";
import Form from "../layout/Form/Form";
import Header from "../layout/Header/Header";
import Info from "../layout/Info/Info";

function CatalogPage() {
    return (<div>
        <Header />
        <Breadcrumbs />
        <FilteredCatalog />
        <Info />
        <Form />
        <Footer />
    </div>
    );
}

export default CatalogPage;