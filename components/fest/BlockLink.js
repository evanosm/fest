import Link from "next/link"
import {CiShare1} from "react-icons/ci"

const BlockLink = (props,{children}) => {
  return (
    <div className="flex flex-wrap gap-4 shrink-0 w-72 md:w-96 hover:scale-105 transition-transform duration-300">
        <Link className="w-full" href={props.link}>
          <div className="p-0.5 bg-gradient-to-br from-primary to-variant w-full rounded-md bg-[length:400%] bg-center">
            <div className="w-full h-full rounded-md p-2 md:p-3 bg-dark hover:bg-transparent transition-colors duration-300 relative">
                      <span className="text-md md:text-xl text-light">{props.title}</span>
                      <p className="md:text-sm font-light text-light opacity-20 italic">{props.desc}</p>
            <div className="w-3/12 h-full absolute top-0 right-0 text-light flex items-center">
              <CiShare1 className="w-max h-2/6 absolute right-2 md:right-3"></CiShare1>
              </div>
              </div>
              </div>
        </Link>
      </div>
  )
}

export default BlockLink