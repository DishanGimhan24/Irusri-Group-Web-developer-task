import React, {useState} from "react";
import "./Register.css";

const Register = () => {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pass: "",
      });


const handleSubmit = (e) => {
        e.preventDefault();
        // Save formData to localStorage
        localStorage.setItem("formData", JSON.stringify(formData));
        // Optionally, you could reset the form or provide feedback
        console.log("Form submitted:", formData);
        alert("Registration successful!");
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      

    
  return (
    <div>
      <section class="signup">
  
          <div class="signup-content">
            <div class="signup-form">
              <h2 class="form-title">Sign up</h2>
              <form method="POST" class="register-form" id="register-form" onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="name">
                    <i class="zmdi zmdi-account material-icons-name"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    id="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="email">
                    <i class="zmdi zmdi-email"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    id="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="pass">
                    <i class="zmdi zmdi-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    value={formData.pass}
                    placeholder="Password"
                    onChange={handleChange}
                  />
                </div>
                <div class="form-group">
                  <label for="re-pass">
                    <i class="zmdi zmdi-lock-outline"></i>
                  </label>
                  <input
                    type="password"
                    name="re_pass"
                    id="re_pass"
                    placeholder="Repeat your password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    class="agree-term"
                  />
                  <label for="agree-term" class="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "} Terms of service
                    <br/>
                    <a href="#" class="term-service">
                      
                    </a>
                  </label>
                </div>
                <div class="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    class="form-submit"
                    value="Register"
                  />
                </div>
              </form>
            </div>
            <div class="signup-img">
              <figure>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                  alt="sign up image"
                  style={{ height: "400px", width: "400px" }}
                />
              </figure>
              <a href="#" class="signup-image-link">
                I am already member
              </a>
            </div>
          </div>
       
      </section>
    </div>
  );
};

export default Register;
