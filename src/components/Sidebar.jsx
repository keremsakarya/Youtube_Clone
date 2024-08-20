import { Link } from "react-router-dom"
import {categories} from "../constants"
import { useContext } from "react"
import { VideoContext } from "../context/videoContext"

const Sidebar = () => {

  const {selectedCategory, setSelectedCategory} = useContext(VideoContext)

  return (
    <div className="flex flex-col p-1 md:p-4">
        {categories.map((item,i) => (
            <Link to={"/"} key={i} onClick={() => setSelectedCategory(item)}>
                <div className={`${selectedCategory.name === item.name && "bg-[#2d2d2d]"} flex gap-2 py-4 px-2 hover:bg-[#2d2d2d] md:text-lg items-center md:px-3 cursor-pointer rounded-md`}>
                    <span className="max-md:text-2xl">{item.icon}</span>
                    <span className="max-md:hidden">{item.name}</span>
                </div>

                {item.divider && <hr />}
            </Link>
        ))}
    </div>
  )
}

export default Sidebar