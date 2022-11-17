const Footer = () => {
    return (
        <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                        Nitin Garg
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Resources
                        </h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">
                                    Website
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Follow Me
                        </h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a
                                    href="https://github.com/nitingarg2207"
                                    className="hover:underline "
                                >
                                    Github
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.gg" className="hover:underline">
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Legal
                        </h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-4">
                                <a href="/" className="hover:underline">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:underline">
                                    Terms &amp; Conditions
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </footer>
    )
}

export default Footer