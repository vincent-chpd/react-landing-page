import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Home () {
    return (
        <>
        <Navbar />
        <Hero 
            cName="hero" 
            heroImg="src\assets\12.jpg" 
            title="Your Journey Your Story" 
            text="Choose your favourite destination"
            buttonText="Travel Plan"
            url="/"
            btnClass="show"
        />
        <Destination />
        <Trip />
        <Footer />
        </>
    )
}

export default Home;