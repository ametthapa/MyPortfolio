const Projects = () => {
  return (
    <div className="py-10">
      <div className="py-5 pb-10 flex justify-center">
        <div className="border-l-4 border-darkBlue p-1 font-bold text-xl uppercase flex">
          Latest Projects
        </div>
      </div>
      {/* A Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-5">
        {/* First Grid */}
        <div className="border border-gray-200 shadow-md group">
          <img
            src="../image/first.png"
            alt="Portfolio Management System"
            className="h-52 group-hover:scale-105"
          />
          <div className="p-5">
            <div className="font-bold">Portfolio Management System</div>
            <div>
              <div>
                <ul className="flex">
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 outline-none">
                      React
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 ml-2 outline-none">
                      Express
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 ml-2 outline-none">
                      MongoDB
                    </div>
                  </li>
                </ul>
              </div>
              <div className="py-5">
                <a
                  href="https://github.com/ametthapa/PortfolioManagement"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="bg-darkBlue text-white px-4 py-2 font-semibold rounded-md transition ease-in duration-300 hover:-translate-y-1 outline-none">
                    FrontEnd Code
                  </button>
                </a>
                <a
                  href="https://github.com/ametthapa/PortfoliomanagementBackend"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="text-white px-4 py-2 ml-5 font-semibold rounded-md border border-darkBlue outline-none text-lightBlack transition ease-in duration-300 hover:-translate-y-1">
                    BackEnd Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* First Grid Ends */}

        {/* Second Grid */}
        <div className="border border-gray-200 shadow-md group">
          <img
            src="../image/second.png"
            alt="Publishing Site"
            className="h-52 group-hover:scale-105"
          />
          <div className="p-5">
            <div className="font-bold">A Demo Publishing Site</div>
            <div>
              <div>
                <ul className="flex">
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 outline-none">
                      React
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 ml-2 outline-none">
                      Tailwind
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 ml-2 outline-none">
                      Responsive
                    </div>
                  </li>
                </ul>
              </div>
              <div className="py-5">
                <a
                  href="https://github.com/ametthapa/PublishingSite-React-Tailwind"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="bg-darkBlue text-white px-5 py-2 font-semibold outline-none rounded-md transition ease-in duration-300 hover:-translate-y-2">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Second Grid Ends */}

        {/* Third Grid */}
        <div className="border border-gray-200 shadow-md group">
          <img
            src="../image/third.png"
            alt="Expense Tracker"
            className="h-52 group-hover:scale-105"
          />
          <div className="p-5">
            <div className="font-bold">Expense Tracker</div>
            <div>
              <div>
                <ul className="flex">
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 outline-none">
                      JavaScript
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 ml-2 outline-none">
                      HTML
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 ml-2 outline-none">
                      Vanilla JS
                    </div>
                  </li>
                </ul>
              </div>
              <div className="py-5">
                <a
                  href="https://github.com/ametthapa/vanilla-js-ExpenseTracker"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="bg-darkBlue text-white px-5 py-2 font-semibold outline-none rounded-md transition ease-in duration-300 hover:-translate-y-2">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Third Grid Ends */}

        {/* Fourth Grid */}
        <div className="border border-gray-200 shadow-md group">
          <img
            src="../image/fourth.png"
            alt="Exchange Rate Calculator"
            className="h-52 group-hover:scale-105"
          />
          <div className="p-5">
            <div className="font-bold">Exchange Rate Calculator</div>
            <div>
              <div>
                <ul className="flex">
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 outline-none">
                      JavaScript
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 ml-2 outline-none">
                      Fetch API
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 ml-2 outline-none">
                      Vanilla JS
                    </div>
                  </li>
                </ul>
              </div>
              <div className="py-5">
                <a
                  href="https://github.com/ametthapa/vanilla-js-ExchangeRateCalculator"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="bg-darkBlue text-white px-5 py-2 font-semibold outline-none rounded-md transition ease-in duration-300 hover:-translate-y-2">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fourth Grid Ends */}

        {/* Fifth Grid */}
        <div className="border border-gray-200 shadow-md group">
          <img
            src="../image/fifth.png"
            alt="Portfolio Management System"
            className="h-52 group-hover:scale-105"
          />
          <div className="p-5">
            <div className="font-bold">DOM Array Method</div>
            <div>
              <div>
                <ul className="flex">
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 outline-none">
                      JavaScript
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 ml-2 outline-none">
                      HTML
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="border bg-gray-100 text-darkBlack p-2 ml-2 outline-none">
                      DOM Manipulation
                    </div>
                  </li>
                </ul>
              </div>
              <div className="py-5">
                <a
                  href="https://github.com/ametthapa/vanilla-js-DOMArrayMethod"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="bg-darkBlue text-white px-5 py-2 font-semibold outline-none rounded-md transition ease-in duration-300 hover:-translate-y-2">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Fifth Grid Ends */}
      </div>
      <div className="py-12 flex justify-center">
        <a
          href="https://github.com/ametthapa?tab=repositories"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button className="bg-darkBlue text-white px-5 py-2 font-semibold outline-none rounded-md transition ease-in duration-300 hover:-translate-y-2">
            My GitHub Repositories
          </button>
        </a>
      </div>
    </div>
  );
};
export default Projects;
