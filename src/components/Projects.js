import project1 from "../photos/project1.jpg"
import project2 from "../photos/project2.jpg"

const Projects = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
          style={{height:'auto',width:'400px'}}
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={project1}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Gadget Store
            </h1>
            <p className="leading-relaxed">
            At Gadget Store, we sell Electronic products online,
            with the aim of making indian e-commerce
            business top in the world.
            </p>
            <p>
                Github Link: <span style={{color:'blue'}}><a href="https://github.com/nitingarg2207/ElectronicsWebsite">https://github.com/nitingarg2207/ElectronicsWebsite</a></span>
            </p>
          </div>
        </div>
      </div>
      <div className="container px-5 py-5 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
          style={{height:'auto',width:'400px'}}
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={project2}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Nitin's Bakery
            </h1>
            <p className="leading-relaxed">
                Nitin's Bakery is a Online store where you can but cakes, pastries, brownies.
            </p>
            <p>
                Github Link: <span style={{color:'blue'}}><a href="https://github.com/nitingarg2207/NG-Bakery">https://github.com/nitingarg2207/NG-Bakery</a></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
