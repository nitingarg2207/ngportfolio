const Navbar = () => {
    return (
        <header className="text-gray-600 body-font" style={{marginTop:"20px"}}>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-2xl">Nitin's Portfolio</span>
                </a>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a href="/" className="mr-5 text-xl hover:text-gray-900">Home</a>
                    <a href="/contact" className="mr-5 text-xl hover:text-gray-900">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar