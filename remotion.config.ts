import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.overrideBrowserOptions((browserOptions) => {
  return {
    ...browserOptions,
    args: [
      ...(browserOptions.args || []),
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
    ],
  };
});
