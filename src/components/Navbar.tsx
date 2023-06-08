const Navbar = () => {
  return (
    <div
      className="bg-black px-3 py-4 flex justify-between items-center border-white border-t border-b
    lg:py-5 lg:px-16"
    >
      <h2 className="text-white text-xl lg:text-2xl xl:text-3xl font-extrabold">
        SUVe
      </h2>

      <div className="space-x-3">
        <a href="#">Blog</a>
        <button>Connect</button>
      </div>
    </div>
  );
};
export default Navbar;
