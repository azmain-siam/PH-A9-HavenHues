/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="grid md:grid-cols-6 shadow-4xl min-h-[450px] my-10 rounded-3xl overflow-hidden w-full md:w-3/4 mx-auto">
      <div className="bg-gradient-to-r from-[#596EC4] to-[#5952B8] capitalize md:col-span-3 rounded-r-[150px] text-white hidden md:flex flex-col justify-center items-center min-h-full">
        <h3 className="text-4xl font-bold mb-3">Hello there!</h3>
        <p className="mb-2 text-sm w-3/4 text-center">
          Begin your journey by creating an account.
        </p>
        <p className="mb-4 text-sm w-3/4 text-center">
          If you Already have an account, please{" "}
          <span className="font-semibold">Login.</span>
        </p>
        <div>
          <Link to={"/login"}>
            <button className="btn bg-transparent border-white hover:bg-white hover:text-black text-white w-full uppercase duration-300 px-10">
              sign in
            </button>
          </Link>
        </div>
      </div>
      <div className="md:col-span-3 flex items-center justify-center w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body p-5 md:p-8 w-full"
        >
          <div className="md:text-3xl text-xl font-bold text-center">
            <h3>Sign Up</h3>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-medium text-base">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
              required
              {...register("fullName")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
              required
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Your Photo URL"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
              {...register("photoURL")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
              required
              {...register("password")}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#5b56bb] border-[#5b56bb] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              sign up
            </button>
            <p className="text-sm mt-3 md:hidden">
              Already Have An Account?{" "}
              <span className="text-[#5b56bb] font-semibold">
                <Link to={"/login"}>Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
