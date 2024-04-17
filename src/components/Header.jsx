import netflixLogo from "../assets/netflix-logo.svg";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Header() {
  return (
    <div className="sticky top-0 flex justify-center bg-[rgb(20,20,20)] h-[10vh] text-white transition-all duration-500 ease-in z-10">
      <div className="w-[90%] flex justify-between items-center">
        <div className="">
          <ul className="w-[140%] flex justify-between items-center list-none cursor-pointer">
            <li>
              <img src={netflixLogo} alt="Netflix Logo" width="100" />
            </li>
            <li>Home</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="">
          <ul className="w-[150%] flex justify-around list-none cursor-pointer">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
