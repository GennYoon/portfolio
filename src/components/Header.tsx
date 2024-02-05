import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 top-0 bg-[#dfdfdf30] dark:bg-[#20202320] backdrop-blur-[10px] z-[2]">
      <div className="flex justify-between items-center p-2 ml-auto mr-auto md:w-[768px] sm:w-full">
        <h1 className="font-bold">GennYoon</h1>
        <ModeToggle />
      </div>
    </header>
  );
};
