import dynamic from "next/dynamic";
const Body = dynamic(() => import("@/components/Body"));
const Header = dynamic(() => import("@/components/Header"));

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col">
      <Header />
      <Body />
    </div>
  );
}
