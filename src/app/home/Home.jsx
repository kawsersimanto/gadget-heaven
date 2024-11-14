import HomeNavbar from "../../shared/HomeNavbar";

const Home = () => {
  return (
    <main className="pt-[30px] px-5">
      <div className="bg-primary rounded-[32px] pb-[268px] max-w-[1540px] mx-auto px-5">
        <div className="container">
          <HomeNavbar />
          <div className="flex flex-col items-center">
            <h1 className="mt-[48px] mb-6 lg:text-[56px] sm:text-4xl text-3xl text-center text-white font-bold max-w-[1120px] !leading-[1.2]">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-white mb-8 max-w-[796px] text-center">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn text-primary rounded-[32px] py-[15px] px-[30px] text-[18px] h-auto">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
