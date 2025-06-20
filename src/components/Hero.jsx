const Hero = () => {
  return (
    <>
      <div className="container flex flex-col sm:flex-row justify-center p-2 rounded gap-3 ">
        <div className="md:w-1/3 bg-amber-50/50  p-2 rounded flex items-center justify-center">
          <img
            className="rounded object-cover w-full h-auto"
            src="/images/Portrett.jpg"
            alt="picture of Anand Chetty"
          />
        </div>
        <div className="md:w-1/2">
          <p className="bg-amber-50/50  p-4 text-1xl  text-[var(--generic-8)] rounded">
            Hi, I’m a recent Bachelor’s graduate and Frontend Developer at
            Noroff vocational school. I build responsive, user-friendly web
            interfaces. I enjoy working with HTML, CSS, JavaScript, and React to
            create clean and interactive digital experiences.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
