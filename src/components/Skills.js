import html from "../photos/html5.svg"
import css from "../photos/css3.svg"
import javascript from "../photos/javascript.svg"
import bootstrap from "../photos/bootstrap.svg"
import tailwind from "../photos/tailwind.svg"
import react from "../photos/reactjs.svg"
import next from "../photos/nextjs.svg"
import nodejs from "../photos/nodejs.svg"

const Skills = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4" style={{margin:'auto',maxWidth:'70%'}}>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={html}/>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={css}/>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={javascript}/>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={bootstrap}/>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={tailwind}/>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={react}/>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={next}/>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={nodejs}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills