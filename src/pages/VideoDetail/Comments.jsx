import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Comments = ({ data }) => {
  return (
    <div className="my-6">
      <h2>{data?.commentsCount} Yorum</h2>
      <input
        className="w-full bg-transparent border-b p-2 outline-none"
        type="text"
        placeholder="Yorum ekleyiniz"
      />
      {data?.data.map((i, index) => (
        <div className="flex  gap-2 items-start px-1 py-4" key={index}>
          <img className="rounded-full" src={i.authorThumbnail[0].url} alt="" />

          <div className="flex flex-col gap-2">
            <h5 className="flex gap-2 items-center">
              <span className="font-semibold">{i.authorText}</span>
              <span className="text-sm text-gray-400">
                {i.publishedTimeText}
              </span>
            </h5>

            <p>{i.textDisplay}</p>

            <div className="flex items-center gap-5">
              <div className="flex gap-1 items-center p-1 cursor-pointer rounded hover:bg-gray-700">
                <AiFillLike />
                <span className="text-gray-400">{i.likesCount}</span>
              </div>
              <div className=" p-1 cursor-pointer rounded hover:bg-gray-700">
                <AiFillDislike />
              </div>

              <span className=" p-1 cursor-pointer rounded hover:bg-gray-700">
                Yanıtla
              </span>
            </div>

            {i.replyCount > 0 && (
              <div className="flex w-fit items-center p-1 hover:bg-[#152639] text-blue-500 rounded-md">
                <IoMdArrowDropdown />
                {i.replyCount} yanıt
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;