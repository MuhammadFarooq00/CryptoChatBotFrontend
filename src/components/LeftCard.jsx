// LeftCard Component
import { FiArrowRight } from "react-icons/fi";

const LeftCard = ({ title, description }) => {
  return (
    <div className="p-4 bg-black text-white rounded-lg shadow hover:shadow-lg cursor-pointer transition-all flex flex-col">
      <div className="flex flex-col   gap-4 mb-4">
        <img
          src={`https://picsum.photos/100/100?random=${Math.floor(Math.random() * 100)}`}
          alt={title}
          className="w-12 h-12 object-cover rounded-full"
        />
        <div className="">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-400 mt-2">{description}</p>
        </div>
      </div>
      <div className="mt-auto text-right">
        {/* <FiArrowRight className="text-gray-300 text-xl" /> */}
      </div>
    </div>
  )
};

export default LeftCard;