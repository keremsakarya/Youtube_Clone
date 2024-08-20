import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const ChannelInfo = ({ video }) => {
  return (
    <div className="flex justify-between items-center">
      {/* sol */}
      <div className="flex items-center gap-4">
        <img
          className="rounded-full w-12 h-12"
          src={video.channelThumbnail[0].url}
          alt="logo"
        />

        <div>
          <h4> {video.channelTitle} </h4>
          <p>{video.subscriberCountText}</p>
        </div>

        <button className="bg-white text-black px-3     h-11 rounded-full hover:bg-gray-400 transition">
          Abone Ol
        </button>
      </div>
      {/* sağ */}
      <div className="flex items-center p-1 bg-[#272727] rounded-full">
        <div className="py-2 px-6 border-r">
          <AiFillLike />
        </div>
        <div className="py-4 px-6">
          <AiFillDislike />
        </div>
      </div>
    </div>
  );
};

export default ChannelInfo;