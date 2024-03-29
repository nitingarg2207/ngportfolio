const TimeLine = () => {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700" style={{marginLeft:'10vw'}}>
      <li className="ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-600 dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Bachelor of Engeneering
          <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            Current
          </span>
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          2020 - 2024
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          I am currently pursuing my Bachelor in Engeering in the Field  of Computer Science from Chitkara University, Rajpura
        </p>
      </li>
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-600 dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Secondary
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          2019-2020
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        I have complete my Matriculation from Dr. Raghubir Prakash SD senior secondary school in my town
        </p>
      </li>
      <li className="mb-10 ml-6">
        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <svg
            aria-hidden="true"
            className="w-3 h-3 text-blue-600 dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        Matriculation
        </h3>
        <p>
            Sarvhitkari Vidya Mandir, Barnala
        </p>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          2017 - 2018
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            I have complete my Matriculation from sarvhitkari Vidya Mandir in my town
        </p>
      </li>
    </ol>
  );
};

export default TimeLine;
