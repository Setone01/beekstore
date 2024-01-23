import React from "react";
import { Link, NavLink } from "react-router-dom";
import loginBG from "../assets/img/login bg.jpg";

const Login = () => {
  return (
    <div className="screen h-[calc(90dvh-5rem)] bg-slate-200">
      <div className=" w-[85vw] h-full mx-auto flex justify-center z-20">
        <div className=" xs:hidden lg:block w-full flex-1 bg-blue-400">
          <img className="w-full h-full object-cover" src={loginBG} alt="" />
        </div>
        <div className="w-full flex-1 flex justify-center items-center">
          <div className="w-full flex justify-center flex-col lg:pl-28">
            <div className="flex justify-center flex-col mb-7">
              <h2 className="lg:text-3xl xs:text-[24px] text-black font-semibold mb-2">Login</h2>
              <p className=" xs:text-[13px] lg:text-[14px] text-slate-500 xs:font-normal lg:font-medium">
                Glad to see you again <span>🖐</span>
              </p>
              <span className="xs:text-[13px] lg:text-[14px] text-slate-500 xs:font-normal lg:font-medium">
                Log in to your account below
              </span>
            </div>
            <div className="w-full flex justify-items-start">
              <form
                action=""
                className="w-full flex justify-start items-center flex-col gap-3"
              >
                <div className="w-full flex justify-center flex-col">
                  <label className="xs:text-[13px] lg:text-[14px] font-semibold text-slate-400">
                    Email:
                  </label>
                  <input
                    className="w-full border-[1.3px] border-slate-300 xs:text-[13px] lg:text-[14px] font-medium outline-none rounded-md px-4 py-3"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="w-full flex justify-center flex-col">
                  <label className="xs:text-[13px] lg:text-[14px] font-semibold text-slate-400">
                    Password:
                  </label>
                  <input
                    className="w-full border-[1.3px] border-slate-300 xs:text-[13px] lg:text-[14px] font-medium outline-none rounded-md px-4 py-3"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="w-full flex justify-end mt-2 mb-5 ">
                    <Link className=" xs:text-[13px] lg:text-[14px] text-slate-900 hover:text-slate-900/40 font-medium" to={"/"}>Forgot Password?</Link>
                  </div>
                  <button className=" bg-slate-900 hover:bg-slate-900/80 xs:text-[15px] lg:text-[18px] text-white font-semibold py-2.5 rounded-md">
                    Log in
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-4">
              <p className="xs:text-[13px] lg:text-sm font-medium text-slate-500">
                Don't have an account?
                <Link
                  className=" text-slate-800 hover:underline"
                  to={"/register"}
                >
                  {" "}
                  Sign up
                </Link>
              </p>
            </div>
          </div>
          {/* <div className="w-full mt-6">
            <div className="w-full flex items-center justify-center mb-5">
              <div className=" w-32 h-[1.5px] bg-slate-400"></div>
              <span className="px-4  text-sm font-medium text-slate-900">
                Or Sign in with Email
              </span>
              <div className="w-32 h-[1.5px] bg-slate-400"></div>
            </div>
            <div className="flex items-center flex-col gap-4 mb-7">
              <button className=" border-[1.38px] border-slate-900 flex justify-center items-center text-sm text-slate-900 font-medium ease-in-out duration-100 px-8 py-2.5 rounded-md hover:bg-slate-800 hover:text-slate-300">
                <span className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
              <button className="border-[1.38px] border-slate-900 flex justify-center items-center text-sm text-slate-900 font-medium px-8 py-2.5 hover:bg-slate-800 hover:text-slate-300 ease-out duration-100 rounded-md">
                <span className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#3f51b5"
                      d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H30v4h-2.287 C26.104,16,26,16.6,26,17.723V20h4L29.368,24z"
                    ></path>
                  </svg>
                </span>
                Sign in with Facebook
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
