import ModeWidget from "@/components/widget/mode";

const HeaderWidget = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[2] bg-[#dfdfdf30] backdrop-blur-[10px] dark:bg-[#20202320]">
      <div className="ml-auto mr-auto flex items-center justify-between px-4 py-2 sm:w-full md:w-[768px]">
        <h1 className="text-xl font-bold">GennYoon Portfolio</h1>
        <ModeWidget />
      </div>
    </header>
  );
};

export default HeaderWidget;
