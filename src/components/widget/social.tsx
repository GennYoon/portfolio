import { Button } from "@/components/ui/button";

import { GitHubLogoIcon, HomeIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

const SocialWidget = () => {
  return (
    <div className="flex justify-start gap-1.5">
      <Button asChild variant="outline" size="icon" className="rounded-full">
        <a href="https://www.linkedin.com/in/gennyoon/" target="_blank">
          <LinkedInLogoIcon className="h-5 w-5" />
        </a>
      </Button>
      <Button asChild variant="outline" size="icon" className="rounded-full">
        <a href="https://github.com/gennyoon" target="_blank">
          <GitHubLogoIcon className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );
};

export default SocialWidget;
