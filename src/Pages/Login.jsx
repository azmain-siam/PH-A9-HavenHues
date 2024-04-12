/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../Firebase/firebase.config";

const Login = () => {
  const { signinUser } = useAuth();

  // Providers
  const googleProvider = new GoogleAuthProvider();

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(data);
    signinUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  const googleSignin = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <div className="grid md:grid-cols-6 shadow-4xl min-h-[450px] my-10 rounded-3xl justify-between overflow-hidden w-full lg:w-3/4 mx-auto">
      <div className="col-span-3">
        <div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="text-3xl font-bold text-center">
              <h3>Sign In</h3>
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
                  Password
                </span>
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
                sign in
              </button>
              <p className="text-sm mt-3 md:hidden">
                Don't Have An Account?{" "}
                <span className="text-[#5b56bb] font-semibold">
                  <Link to={"/register"}>Register</Link>
                </span>
              </p>
            </div>
            <div className="divider font-medium text-sm">Or</div>
          </form>
          <div className="flex flex-col gap-5 px-8 pb-8">
            <button
              onClick={googleSignin}
              className="btn bg-white border-[#28282B] text-[#28282B] hover:border-[#5b56bb] hover:bg-[#5b56bb] hover:text-white capitalize duration-300"
            >
              <FaGoogle size={16} /> sign in with google
            </button>
            <button className="btn bg-white border-[#28282B] text-[#28282B] hover:border-[#5b56bb] hover:bg-[#5b56bb] hover:text-white capitalize duration-300">
              <FaGithub size={18} /> sign in with gitHub
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#5b56bb] to-[#5238A9] capitalize col-span-3 rounded-l-[150px] text-white hidden md:flex flex-col justify-center items-center min-h-full">
        <h3 className="text-4xl font-bold mb-3">Welcome Back!</h3>
        <p className="mb-2 text-sm w-3/4 text-center">
          Enter your credentials to access your account.
        </p>
        <p className="mb-4 text-sm w-3/4 text-center">
          If you don't have an account, please{" "}
          <span className="font-semibold">Register.</span>
        </p>
        <div>
          <Link to={"/register"}>
            <button className="btn bg-transparent border-white hover:bg-white hover:text-black text-white w-full uppercase duration-300 px-10">
              sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
