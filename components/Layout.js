import Footer from "./includes/Footer";
import Header, { ContactBar } from "./includes/Header";

export default function Layout({ children }) {
    return (
        <>
            <ContactBar />
            <Header />
            {children}
            <Footer />
        </>
    )
}

