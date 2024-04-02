import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleLogin } from "./store";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext"; // Import useAuth
import Textinput from "@/components/ui/Textinput";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { loginUser } = useAuth(); // Destructure loginUser function from context
  const { register } = useForm(); // Destructure register function from useForm
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    const formData = new FormData(e.target); // Create a FormData object from the form
    
    // Access the values of the email and password fields using their names
    const email = formData.get("email");
    const password = formData.get("password");
  
    // Ensure email and password are not empty before proceeding
    if (email && password) {
      try {
        await loginUser(email, password);
        dispatch(handleLogin(true));
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } catch (error) {
        toast.error("اعتبار سنجی اشتباه", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          rtl: true,
          className: "font-iransans",
        });
      }
    } else {
      // Handle case where email or password is empty
      console.error("Email and password are required.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      <Textinput
        name="email"
        label="ایمیل"
        type="email"
        register={register} // Use the register function provided by useForm
        className="h-[48px]"
      />
      <Textinput
        name="password"
        label="رمز عبور"
        type="password"
        register={register} // Use the register function provided by useForm
        className="h-[48px]"
      />
      <div className="flex justify-between">
        <Link to="/forgot-password" className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium">
          رمز عبور خود را فراموش کرده اید؟{" "}
        </Link>
      </div>

      <button className="btn btn-dark block w-full text-center">ورود</button>
    </form>
  );
};

export default LoginForm;
