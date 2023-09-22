import "./ContactFormStyles.css";

const ContactForm = () => {
    return (
        <div className="form-container">
            <h1>Send us a message!</h1>
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <input placeholder="Subject" />
                <textarea placeholder="Message" rows="6"/>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm