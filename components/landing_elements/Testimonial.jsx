const Testimonial = () => {
  return (
    <section
      className="testimonial-slider flex flex-col justify-center my-2 gap-[15px] items-center w-full px-6 tablet:px-20 desktop:px-40 py-[2.25rem]"
      id="testimonial-slider"
    >
      <h2 className="font-bold text-[2rem] md:text-[18px] text-primary font-montserrat">
        TESTIMONIALS
      </h2>
      <h2 className="font-bold text-[2.8rem] md:text-[32px] text-white font-montserrat text-center">
        What Our Clients Say
      </h2>
      <div className="spx-[1.875rem] py-[2.5rem] z-10 bg-white flex flex-col gap-[20px] rounded-[12px] leading-loose justify-center items-center">
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </article>
        <div className="w-full h-fit flex gap-2 justify-start items-center">
          <div className="rounded-full bg-[#38419D] w-[3.125rem] h-[3.125rem] text-white flex justify-center items-center">
            
          </div>
          <div className="flex flex-col justify-center items-center">
            <h6 className="font-semibold">Lauro Item 1</h6>
            <span className="font-light text-[12px]">Toronto, Canada</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
