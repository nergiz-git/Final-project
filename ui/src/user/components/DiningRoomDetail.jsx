import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Tooltip from "./Tooltip";
import MainContext from "../context/context";

function DiningRoomDetail() {
  const { roomId } = useParams();
  const navigate = useNavigate();
   const { theme } = useContext(MainContext);

  const [room, setRoom] = useState(null);
  const [activeHotspot, setActiveHotspot] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3002/diningRoomDetail/${roomId}`)
      .then(res => res.json())
      .then(data => setRoom(data));
  }, [roomId]);

  if (!room) return <h2>Loading...</h2>;

  return (
    <div className="relative w-full">
             <div className="text-center pb-[20px] mt-[40px] md:mt-[60px] lg:mt-[180px] px-4">
                <h3 className={`${theme ? "text-white" : "text-[#1D1D1B]"} text-[22px] sm:text-[25px] md:text-[48px] font-bold`}>
                    Explore the look
                </h3>
                <p className={`${theme ? "text-gray-300" : "text-[#545454]"} text-sm sm:text-base mt-2 w-[250px] sm:w-[500px] md:w-[700px] lg:w-[700px] mx-auto`}>
                    A confident use of deep colors creates a striking focal point in this dining room. Against light-gray walls and white trims, the dark oak tabletop, matte black metal accents, and polished black seats stand out beautifully.
                </p>
            </div>
      <img src={room.image} alt="" className="w-full px-[40px]" />

      {room.hotspots?.map((spot, index) => {
        const key = `${spot.category}-${spot.productId}`;

        return (
     <div
  key={index}
  className="absolute"
  style={{
    top: spot.top,
    left: spot.left,
    transform: "translate(-50%, -50%)"
  }}
>
  <div
    className="relative group"
    onMouseEnter={() => setActiveHotspot(key)}
    onMouseLeave={() => setActiveHotspot(null)}
  >
  
    <div className="w-5 h-5 bg-white rounded-full border border-black/20 cursor-pointer" />

    {activeHotspot === key && (
      <Tooltip
        category={spot.category}
        productId={spot.productId}
        onClose={() => setActiveHotspot(null)}
      />
    )}
  </div>
</div>

        );
      })}
    </div>
  );
}

export default DiningRoomDetail;
