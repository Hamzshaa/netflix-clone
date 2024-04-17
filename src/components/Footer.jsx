import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <div className="text-gray-400 flex justify-center">
      <div className="w-[60%]">
        <div className="w-[12%] flex justify-between ml-2.5 text[var(--primary-color)]">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className="flex justify-between">
          <div className="">
            <ul className="list-none flex flex-col justify-around h-[12vh]">
              <li className="cursor-pointer">Audio Description</li>
              <li className="cursor-pointer">Investor Relations</li>
              <li className="cursor-pointer">Legal Notices</li>
            </ul>
          </div>
          <div className="">
            <ul className="list-none flex flex-col justify-around h-[12vh]">
              <li className="cursor-pointer">Help Center</li>
              <li className="cursor-pointer">Jobs</li>
              <li className="cursor-pointer">Cookie Preferences</li>
            </ul>
          </div>
          <div className="">
            <ul className="list-none flex flex-col justify-around h-[12vh]">
              <li className="cursor-pointer">Gift Cards</li>
              <li className="cursor-pointer">Terms of Use</li>
              <li className="cursor-pointer">Corporate Information</li>
            </ul>
          </div>
          <div className="">
            <ul className="list-none flex flex-col justify-around h-[12vh]">
              <li className="cursor-pointer">Media Center</li>
              <li className="cursor-pointer">Privacy</li>
              <li className="cursor-pointer">Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center border-2 border-white w-[20%] my-2.5 cursor-pointer mt-20 sm:mt-12 lg:mt-2.5">
          <p>Service Code</p>
        </div>
        <div className="text-xs mb-2.5">
          &copy; 1997-{new Date().getFullYear()} Netflix, Inc.
        </div>
      </div>
    </div>
  );
}
