const About = () => {
  return (
    <div className="flex items-center justify-center border border-grey-100 rounded-lg drop-shadow-md mb-10 p-16">
      <div className="flex justify-between">
        <img
          src="../image/Second.jpg"
          alt="Profile"
          className="h-60 rounded-lg"
        />
        <div className="flex flex-col ml-10 justify-center">
          <div className="border-l-4 border-darkBlue p-1 font-bold text-xl uppercase">
            Bio Data
          </div>
          <div className="grid grid-cols-2 gap-4 py-6">
            <div className="darkBlack">
              <span className="font-bold">Full Name :</span> Amrit Thapa
            </div>
            <div className="darkBlack">
              <span className="font-bold">DoB :</span> Nov 16, 1997
            </div>
            <div className="darkBlack">
              <span className="font-bold">Address :</span> Swayambhu
            </div>
            <div className="darkBlack">
              <span className="font-bold">Mobile No. :</span> 9867214807
            </div>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/18PKTtBDwG5meV_0TODqZPQLVCVjf8R-T/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="bg-darkBlue text-white px-5 py-2 font-semibold rounded-md transition ease-in duration-300 hover:-translate-y-2">
                Get Resume
              </button>
            </a>
            <a
              href="mailto: amet.thapa27@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button className="text-white px-5 py-2 ml-5 font-semibold rounded-md border border-darkBlue text-lightBlack transition ease-in duration-300 hover:-translate-y-2">
                Hire Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
