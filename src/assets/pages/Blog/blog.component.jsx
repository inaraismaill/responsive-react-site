const Blog = () => {
  return (
    <div className="pt-16 mycontainer">
      <div className="lg:h-screen sm:h-[400px] h-[200px] center-all flex-col">
        <h4 data-aos="fade-up" className="text-[16px] text-customGrey">
          Home / Blog
        </h4>
        <h2
          data-aos="fade-up"
          className="text-customDark text-center text-[40px] sm:text-[60px] lg:text-[130px] leading-none"
        >
          Explore
        </h2>
        <h2
          data-aos="fade-up"
          className="text-customPurple text-[40px] sm:text-[60px] lg:text-[130px] leading-none "
        >
          Our Articles
        </h2>
      </div>
      <div>
        <img  className="rounded-2xl my-3"
          src="https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d830c0c478f2236b3436ae_Blog%20Single%20Img%2001-p-1600.webp"
          alt=""
        />
      </div>
      <div  className="md:flex justify-between h-[80px] my-2 items-center">
        <div>
          <h2 className="text-customDark text-[25px] lg:text-[36px]">How cold email can scale a business</h2>
        </div>
        <div className="flex flex-row-reverse justify-end mt-5 md:flex-row">
          <div className="px-5 text-end">
            <h4 className="text-customDark">John Smith</h4>
            <p className="text-customPurple">February 23, 2024</p>
          </div>
          <div>
            <img className="lg:h-[60px] h-[50px]"
            src="https://cdn.prod.website-files.com/650a7bd9f9bb87154ad8d18f/65d830c557c04c1702fdada4_Blog%20Author%20Icon%2001.webp"
            alt=""
          />
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="lg:text-[90px] text-[36px] sm:text-[80px] mt-[100px] leading-none font-medium ">
        <h2 className="text-customDark pb-10 text-center sm:text-start">Our Recent</h2>
        <div className="text-customPurple center-all sm:justify-start flex lg:pl-[180px] ">
          <img
            data-aos="fade-up"
            className="pr-7"
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg"
            alt=""
          />
          Blogs

        </div>
      </div>
    </div>
  );
};

export default Blog;
