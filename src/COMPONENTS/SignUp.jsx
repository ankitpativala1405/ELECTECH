import React from "react";

const SignUpSection = () => {
  return (
    <>
      <section className="bg-[#e6edf5]  mx-auto">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-between items-center py-7 px-10">
            <h2 className="text-[1.5rem] text-[#333333]">Create an account</h2>
            <a href="" className="flex text-[#333333] text-[14px]">
              Home
              <p className="ml-4 text-[#777777]">
                | <span className="ml-4">Create an account</span>
              </p>
            </a>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="">
          <div className="p-5 border-1 flex flex-col justify-center border-gray-300 max-w-[1300px] rounded-md mx-auto">
            <p className="text-[#777777]">
              Already have an account?
              <a href="/login" className="ml-2 text-[#333333] underline">
                Log in instead!
              </a>
            </p>

            <form className="w-full mx-auto py-5  space-y-4">
              <div>
                <div className="flex justify-between">
                  <div className="px-16"></div>
                  <div className="flex justify-end">
                    <label className="text-right">Social title:</label>
                  </div>
                  <div className=" flex justify-items-start gap-5 ml-[-40px]">
                    <label className="">
                      <input
                        type="radio"
                        name="title"
                        value="Mr."
                        className="scale-125"
                      />{" "}
                      Mr.
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="title"
                        value="Mrs."
                        className="scale-125"
                      />{" "}
                      Mrs.
                    </label>
                  </div>
                  <div className="px-12"></div>
                  <div className="px-10"></div>
                  <div className="px-17"></div>
                   <div className="px-10"></div>
                </div>

                <div className="flex gap-4 justify-around items-center mb-[-15px]">
                  <div className="px-18"></div>
                  <div className="flex justify-end">
                    <label className="text-right">First name:</label>
                  </div>
                  <div className="rounded w-[45%] ">
                    <input
                      type="text"
                      id="first-name"
                      className="py-2 border-1 mt-7 w-full rounded-sm border-gray-300"
                    />
                    <p className="text-gray-500 text-[14px] mt-1">
                      Only letters and the dot (.) character, followed by a
                      space, are allowed.
                    </p>
                  </div>
                  <div className="px-15"></div>
                  <div className="px-10"></div>
                </div>

                <div className="flex gap-4 justify-around items-center">
                  <div className="px-18"></div>
                  <div className="flex justify-end">
                    <label className="text-right">Last name:</label>
                  </div>
                  <div className="rounded w-[45%] ">
                    <input
                      type="text"
                      id="first-name"
                      className="py-2 border-1 mt-7 w-full rounded-sm border-gray-300"
                    />
                    <p className="text-gray-500 text-[14px] mt-1">
                      Only letters and the dot (.) character, followed by a
                      space, are allowed.
                    </p>
                  </div>
                  <div className="px-15"></div>
                  <div className="px-10"></div>
                </div>

                <div className="">
                  <label htmlFor="email" className="">
                    Email:
                  </label>
                  <input type="email" id="email" className="" />
                </div>

                <div className="">
                  <label htmlFor="password" className="">
                    Password:
                  </label>
                  <input type="password" id="password" className="" />
                  <button type="button" className="">
                    SHOW
                  </button>
                </div>

                <div className="">
                  <label htmlFor="birthdate" className="">
                    Birthdate:
                  </label>
                  <input type="date" id="birthdate" className="" />
                  <p className="">(E.g.: 05/31/1970)</p>
                </div>

                <div className="">
                  <input type="checkbox" id="offers" className="" />
                  <label htmlFor="offers" className="">
                    Receive offers from our partners
                  </label>
                </div>

                <div className="">
                  <input type="checkbox" id="newsletter" className="" />
                  <label htmlFor="newsletter" className="">
                    Sign up for our newsletter
                  </label>
                </div>

                <div className="">
                  <input type="checkbox" id="privacy" className="" />
                  <label htmlFor="privacy" className="">
                    Customer data privacy
                  </label>
                </div>

                <div className="">
                  <input type="checkbox" id="terms" className="mr-2" />
                  <label htmlFor="terms" className="">
                    I agree to the terms and conditions and the privacy policy
                  </label>
                </div>
              </div>
            </form>

            <button type="submit" className="">
              SAVE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUpSection;
