const Projects = () => {
  return (
    <div className="py-10">
      <div className="border-l-4 border-darkBlue p-1 font-bold text-xl uppercase flex">Latest Projects</div>

      {/* A Grid */}
      <div className="grid grid-cols-3 gap-4">

        {/* First Grid */}
        <div>
          <img src="../image/first.png" alt="Portfolio Management System" className="h-52" />
          <div>Portfolio Management System</div>
          <div>
            <div>
              <ul className="flex">
                <li>React</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Tailwind</li>
              </ul>
            </div>
            <div>
              <a
                href="https://github.com/ametthapa/PortfolioManagement"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="bg-darkBlue text-white px-5 py-2 font-semibold rounded-md transition ease-in duration-300 hover:-translate-y-2">
                  FrontEnd Code
                </button>
              </a>
              <a
                href="https://github.com/ametthapa/PortfoliomanagementBackend"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="text-white px-5 py-2 ml-5 font-semibold rounded-md border border-darkBlue text-lightBlack transition ease-in duration-300 hover:-translate-y-2">
                  BackEnd Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* First Grid Ends */}

        {/* Second Grid */}
        <div>
          <img src="../image/second.png" alt="Publishing Site" className="h-52" />
          <div>A Demo Publishing Site</div>
          <div>
            <div>
              <ul className="flex">
                <li>React</li>
                <li>Tailwind</li>
                <li>Responsive</li>
                <li>React-Router</li>
              </ul>
            </div>
            <div>
              <a
                href="https://github.com/ametthapa/PublishingSite-React-Tailwind"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="bg-darkBlue text-white px-5 py-2 font-semibold rounded-md transition ease-in duration-300 hover:-translate-y-2">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Second Grid Ends */}

        
        {/* Third Grid */}
        <div>
          <img src="../image/third.png" alt="Expense Tracker" className="h-52" />
          <div>Expense Tracker</div>
          <div>
            <div>
              <ul className="flex">
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vanilla JS</li>
              </ul>
            </div>
            <div>
              <a
                href="https://github.com/ametthapa/vanilla-js-ExpenseTracker"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="bg-darkBlue text-white px-5 py-2 font-semibold rounded-md transition ease-in duration-300 hover:-translate-y-2">
                  Code
                </button>
              </a>
              
            </div>
          </div>
        </div>
        {/* Third Grid Ends */}

        {/* Fourth Grid */}
        <div>
          <img src="../image/fourth.png" alt="Exchange Rate Calculator" className="h-52" />
          <div>Exchange Rate Calculator</div>
          <div>
            <div>
              <ul className="flex">
                <li>JavaScript</li>
                <li>Fetch API</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </div>
            <div>
              <a
                href="https://github.com/ametthapa/vanilla-js-ExchangeRateCalculator"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="bg-darkBlue text-white px-5 py-2 font-semibold rounded-md transition ease-in duration-300 hover:-translate-y-2">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Fourth Grid Ends */}

        {/* Fifth Grid */}
        <div>
          <img src="../image/fifth.png" alt="Portfolio Management System" className="h-52" />
          <div>DOM Array Method</div>
          <div>
            <div>
              <ul className="flex">
                <li>Javascript</li>
                <li>Fetch API</li>
                <li>DOM Manipulation</li>
                <li>HTML</li>
              </ul>
            </div>
            <div>
              <a
                href="https://github.com/ametthapa/vanilla-js-DOMArrayMethod"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="bg-darkBlue text-white px-5 py-2 font-semibold rounded-md transition ease-in duration-300 hover:-translate-y-2">
                   Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Fifth Grid Ends */}
      </div>
    </div>
  );
};
export default Projects;
