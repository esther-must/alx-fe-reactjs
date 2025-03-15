function UserProfile() {
    return (
        <div className="bg-gray-100 p-4 sm:p-8 max-w-xs sm:max-w-sm mx-auto my-10 rounded-lg shadow-lg text-center transition-shadow duration-300 ease-in-out hover:shadow-xl">
            <img
                src="https://esthercoders.netlify.app/images/profile-picture.png"
                alt="User"
                className="w-24 h-24 sm:w-36 sm:h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h1 className="text-lg sm:text-xl text-blue-800 my-4 transition-colors duration-300 ease-in-out hover:text-blue-500">
                Esther AJAYI
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
                Developer at ALX. Loves to write code and explore new technologies.
            </p>
        </div>
    );
}
  
export default UserProfile;
  