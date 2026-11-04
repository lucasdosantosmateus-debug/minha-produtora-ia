import { Composition } from "remotion";
import { MainVideo } from "./VideoComponent";
import episodeData from "../episodio-01.json";

export const Root = () => {
  return (
    <Composition
      id="Torre42Trailer"
      component={MainVideo}
      durationInFrames={episodeData.total_duration_seconds * 30}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ data: episodeData }}
    />
  );
};
