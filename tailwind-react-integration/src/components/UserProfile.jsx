function UserProfile() {
    return (
        <div className="bg-gray-100 md:p-8 sm:p-4 max-w-xs md:max-w-sm mx-auto my-10 rounded-lg shadow-lg text-center transition-shadow duration-300 ease-in-out hover:shadow-xl">
            <img
                src="https://esthercoders.netlify.app/images/profile-picture.png"
                alt="User"
                className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto transition-transform duration-300 ease-in-out hover:scale-110"
            />
            <h1 className="text-lg md:text-xl text-blue-800 my-4 transition-colors duration-300 ease-in-out hover:text-blue-500">
                Esther AJAYI
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
                Developer at ALX. Loves to write code and explore new technologies.
            </p>
        </div>
    );
}

export default UserProfile;
  