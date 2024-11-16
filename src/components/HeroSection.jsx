import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 mx-auto container">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools <br/>
        <span className="bg-gradient-to-r from-blue-500 to-blue-800 text-transparent bg-clip-text">
          {" "}
          for developer
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!{" "}
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-blue-800 px-4 py-3 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="" className="py-3 px-4 mx-3 rounded-md border">
            Documentation
        </a>
      </div>
      <div className="flex mt-10 justify-center container">
        <video autoPlay loop muted  className="rounded-lg  w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
            <source src={video1} type="video/mp4"/>
            Your browser doesnt't support
        </video>
        <video autoPlay loop muted src={video2} className="rounded-lg  w-1/2 border border-blue-700 shadow-blue-400 mx-2 my-4">
        <source src={video1} type="video/mp4"/>
        Your browser doesnt't support
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
