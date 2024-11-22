const Dashboard = () => {
  return (
    <section>
      <div className="py-8 bg-primary">
        <div className="container">
          <h2 className="text-white text-center mb-4 lg:text-[32px] text-2xl font-bold">
            Dashboard
          </h2>
          <p className="text-center text-white max-w-[796px] mx-auto mb-8">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className="flex items-center justify-center gap-6">
            <button className="btn btn-primary text-primary bg-white rounded-[32px] py-[15px] px-[30px] text-[18px] h-auto hover:bg-slate-200">
              Shop Now
            </button>
            <button className="btn btn-primary text-primary bg-white rounded-[32px] py-[15px] px-[30px] text-[18px] h-auto hover:bg-slate-200">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
