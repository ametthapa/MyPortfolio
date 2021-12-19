const Education = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col ml-10 justify-center">
        <div className="border-l-4 border-darkBlue p-1 font-bold text-xl uppercase">
          Education
        </div>
        <div className="grid grid-cols-2 gap-x-24 gap-y-10 py-6">
          <div className="grid grid-cols-2 gap-1 p-5 border border-grey-100 rounded-lg drop-shadow-md">
            <div className="font-bold text-darkBlue">
              Butwal Multiple Campus
            </div>
            <div>BSc CSIT</div>
            <div>2016-2021</div>
          </div> 
          <div className="grid grid-cols-2 gap-1 p-5 border border-grey-100 rounded-lg drop-shadow-md">
            <div className="font-bold text-darkBlue">Tilottama College</div>
            <div>+2 Science</div>
            <div>2014-2016</div>
            <div>80.2%</div>
          </div>
          <div className="grid grid-cols-2 gap-1 p-5 border border-grey-100 rounded-lg drop-shadow-md">
            <div className="font-bold text-darkBlue">
              Shaheed Smarak English Boarding School
            </div>
            <div>SLC</div>
            <div>2014</div>
            <div>89.5%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
