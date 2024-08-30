import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import './index.css'

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6 bg-[#7a9596] p-9 form-container">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#191e1f]">
          Sign In
        </h1>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <div className="text-center text-[#191e1f]">
      <p className="mt-2">
          Don't have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline text-[]"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default AuthLogin;
