import { IoCloudDownloadOutline } from "react-icons/io5";
import './style.css'
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";


export default function NavaBar() {
  const anvSubText = ["About us", "Skills", "Project", "Contact me"]
  const [navSubtext, setnavSubtext] = useState('')
  const [showManu, setsShowManu] = useState(true)


  return (
    <nav className={`${showManu && "nav-bar-tag"} nav`}>
      <div className="flex nav-bar-main relative">
        <div>logo</div>

        {showManu && <div className="flex nav-sub-text ">

          {anvSubText.map(ele => {
            return (<p className={ele === navSubtext ? "nav-link" : ""} onClick={() => { setnavSubtext(ele) }}>{ele}</p>)
          })}
          <div className="flex nav-bar-btn d-none-pm">
            <a className="flex justify-between" href="https://www.canva.com/design/DAF-bGm5EIk/gBR5OP9_uTvxgVCV0VhqCQ/view?utm_content=DAF-bGm5EIk&utm_campaign=designshare&utm_medium=link&utm_source=editor" download target="_blank" rel="noopener noreferrer">Resume <IoCloudDownloadOutline /></a>
          </div>

        </div>}
        <div className="flex nav-bar-btn d-block-pm">
          <a className="flex justify-between" href="https://www.canva.com/design/DAF-bGm5EIk/gBR5OP9_uTvxgVCV0VhqCQ/view?utm_content=DAF-bGm5EIk&utm_campaign=designshare&utm_medium=link&utm_source=editor" download target="_blank" rel="noopener noreferrer">Resume <IoCloudDownloadOutline /></a>

        </div>
        {
          showManu ? <RxCross1 className="menu-icon d-none-pm" onClick={() => setsShowManu(!showManu)} /> : <MdOutlineMenu className="menu-icon d-none-pm" onClick={() => setsShowManu(!showManu)} />

        }


      </div>
    </nav>
  )
}
