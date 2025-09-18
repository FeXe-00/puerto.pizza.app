import Image from "next/image";
import isologo from "@/assets/modified-isologo.png";

const Header = () => {
  return (
    <div>
      <Image className="w-3xs h-3xs " src={isologo} alt="Logo Puerto Pizza" />
    </div>
  );
};

export default Header;
