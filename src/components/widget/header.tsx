import ModeWidget from "@/components/widget/mode";

import { Button } from "@/components/ui/button";

import { ChevronsLeftRightEllipsis } from "lucide-react";

const HeaderWidget = () => {
  return (
    <header className="fixed left-0 right-0 top-0 z-[2] bg-[#dfdfdf30] backdrop-blur-[10px] dark:bg-[#20202320]">
      <div className="ml-auto mr-auto flex items-center justify-between gap-2 px-4 py-2 sm:w-full md:w-[768px]">
        <h1 className="text-xl font-bold">GennYoon Portfolio</h1>
        <div className="flex flex-1 justify-end gap-2">
          <Button size="icon" variant="outline" asChild>
            <a href="https://gennyoon.net">
              <ChevronsLeftRightEllipsis />
            </a>
          </Button>
        </div>

        <ModeWidget />
      </div>
    </header>
  );
};

export default HeaderWidget;
