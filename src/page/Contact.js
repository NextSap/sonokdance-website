import React from 'react';
import Navbar from "../components/Navbar";
import emailJs from "@emailjs/browser";

const inputStyle = "bg-[#171617] border border-white w-[40vh] md:w-[60vh] text-white mb-5 p-2 outline-none";

function sendEmail(name, email, message) {
    emailJs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
        user_name: name,
        user_email: email,
        message: message,
    }, process.env.REACT_APP_PUBLIC_KEY).then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            message: "",
            error: "",
            success: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setError = this.setError.bind(this);
        this.setSuccess = this.setSuccess.bind(this);
    }

    setError(message) {
        this.state.error = message;
    }

    setSuccess(message) {
        this.state.success = message;
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        });
        if (event.target.id === "email")
            this.checkEmail();
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.checkEmail()) {
            sendEmail(this.state.username, this.state.email, this.state.message);
            this.setSuccess("Merci " + this.state.username + " pour votre message. Vous allez être rediriger dans quelques secondes.");
            setTimeout(() => {
                window.location.replace("/")
            }, 5000)

            this.setState({
                username: "",
                email: "",
                message: ""
            })
            return;
        }
    }

    checkEmail() {
        const emailRegex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$");
        if (!emailRegex.test(this.state.email)) {
            document.getElementById("email").className = inputStyle + " border-red-500";
            this.setError("Email incorrect")
            return false;
        }
        document.getElementById("email").className = inputStyle;
        this.setError("");
        return true;
    }

    render() {
        return (
            <div className="bg-[#171617] h-full w-full">
                <Navbar/>
                <div
                    className="flex flex-col bg-[#171617] w-full text-white flex items-center overflow-x-hidden">
                    <h1 className="mt-5 mb-5 scale-100 duration-300 hover:scale-125 hover:duration-300 text-2xl lg:text-6xl md:text-4xl tracking-wider">NOUS
                        CONTACTER</h1>
                    <form className="flex flex-col justify-center items-center mt-5 h-[70vh] w-[70vh]"
                          onSubmit={this.handleSubmit}
                          autoComplete="off">

                        <input type="text"
                               className={inputStyle}
                               id="username"
                               placeholder="Nom"
                               value={this.state.username}
                               onChange={this.handleChange}
                               required/>
                        <input type="text"
                               className={inputStyle}
                               id="email"
                               placeholder="Adresse email"
                               value={this.state.email}
                               onChange={this.handleChange}
                               required/>
                        <textarea rows="3"
                                  className={inputStyle + " h-[30vh] resize-none"}
                                  id="message"
                                  placeholder="Message"
                                  value={this.state.message}
                                  onChange={this.handleChange}
                                  required/>

                        <button className={inputStyle + " rounded-xl hover:text-gray-300"}
                                id="submit"
                                type="submit"
                                value="Envoyer">
                            Envoyer
                        </button>
                        <h1 className="text-red-500">{this.state.error}</h1>
                        <h1 id="success" className="text-green-400">{this.state.success}</h1>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;