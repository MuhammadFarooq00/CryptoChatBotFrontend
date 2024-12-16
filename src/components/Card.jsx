// Card Component
import { FiArrowRight } from "react-icons/fi";

const Card = ({ title, description }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg cursor-pointer transition-all flex flex-col">
      <div className="flex flex-col gap-4 mb-4">
        <img
          src={`https://picsum.photos/100/100?random=${Math.floor(Math.random() * 100)}`}
          alt={title}
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="">
          <h3 className="font-bold text-lg">{`"${title}"`}</h3>
          <p className="text-gray-500 text py-1-sm inline-flex items-baseline justify-between w-full mt-2">{description} <span> <FiArrowRight className="ml-auto text-gray-600" /></span></p>
        </div>
      </div>
      <div className="mt-auto text-right">
        {/* <FiArrowRight className="text-gray-600 text-xl" /> */}
      </div>
    </div>
  );
};

export default Card;
