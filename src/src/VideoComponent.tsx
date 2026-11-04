import { AbsoluteFill } from "remotion";

export const MainVideo = ({ data }: { data: any }) => {
  const currentScene = data.scenes[0];

  return (
    <AbsoluteFill style={{ 
      backgroundColor: "#050505", 
      justifyContent: "center", 
      alignItems: "center", 
      color: "white", 
      fontFamily: "Arial, sans-serif",
      padding: 40
    }}>
      <div style={{ fontSize: 50, fontWeight: "bold", color: "#facc15", marginBottom: 20, textAlign: "center" }}>
        {data.title}
      </div>
      <div style={{ fontSize: 36, color: "#e2e8f0", textAlign: "center", background: "rgba(0,0,0,0.6)", padding: 20, borderRadius: 10 }}>
        "{currentScene.narrator.text}"
      </div>
    </AbsoluteFill>
  );
};
