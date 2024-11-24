import Header from "../pages/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="w-full flex">
      <Header />
      <div className="w-full ml-1 bg-[#f7f7f7]">
        <section className="flex flex-row ">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </div>
  );
};

export default MainLayout;
