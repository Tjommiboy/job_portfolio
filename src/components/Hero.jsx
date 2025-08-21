const Hero = () => {
  return (
    <>
      <div className="container flex flex-col md:flex-col lg:flex-row justify-center p-2 rounded gap-3 ">
        <div className="lg:w-1/3 md:w-1/2 bg-amber-100/80 p-2 rounded flex items-center justify-center">
          <img
            className="rounded object-cover w-full h-auto"
            src="/images/Portrett.jpg"
            alt="picture of Anand Chetty"
          />
        </div>
        <div className="lg:w-1/2">
          <p className="bg-amber-100/80 p-4 text-1xl  text-[var(--generic-8)] rounded">
            Hi,😀 <br></br> I’m a recent Bachelor’s graduate and Frontend
            Developer from Noroff Vocational School with a passion for crafting
            modern, responsive, and user-friendly web applications. I specialize
            in building clean, interactive digital experiences using HTML, CSS,
            JavaScript, and React, and I enjoy turning ideas into polished
            interfaces that are both functional and visually appealing. Beyond
            the technical side, I’m curious, quick to learn, and motivated to
            contribute to real-world projects that make a difference for users.
            <br></br>
            <br></br>
            Feel free to explore my projects to see how I bring these skills
            into practice.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
