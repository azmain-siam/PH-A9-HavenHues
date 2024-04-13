import useAuth from "../hooks/useAuth";

const ProfileUpdate = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="grid md:grid-cols-6 shadow-4xl min-h-[450px] my-10 rounded-3xl overflow-hidden w-[95%] lg:w-3/4 mx-auto">
      <div className="bg-gradient-to-r from-[#596EC4] to-[#5952B8] capitalize md:col-span-3 py-10 md:p-0 px-4 rounded-b-3xl md:rounded-r-[150px] text-white md:flex flex-col justify-center items-center min-h-full">
        <div className="w-36 h-36 bg-white rounded-full flex justify-center mx-auto items-center mb-5">
          <img
            className="h-full w-full object-cover rounded-full"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
            alt=""
          />
        </div>
        <table className="table border-none text-sm *:text-left mx-auto w-fit text-center p-0 md:text-base">
          <tbody>
            <tr className="border-none ">
              <td className="font-semibold">Name:</td>
              <td>John Doe</td>
            </tr>
            <tr className="border-none">
              <td className="font-semibold">Email:</td>
              <td>abdejw@email.com</td>
            </tr>
            <tr>
              <td className="font-semibold">Photo:</td>
              <td>Photo URL</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="md:col-span-3 flex items-center justify-center w-full">
        <form className="card-body p-5 md:p-8 w-full">
          <div className="md:text-3xl mb-2 text-xl font-bold text-center">
            <h3>Update Your Profile</h3>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-medium text-base">Name</span>
            </label>
            <input
              type="text"
              placeholder="Update Your Name"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
              required
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
              placeholder="Update Your Photo URL"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#5b56bb] border-[#5b56bb] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
