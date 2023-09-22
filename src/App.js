import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <video
        className="bg-video"
        src="https://vod-progressive.akamaized.net/exp=1695412277~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2411%2F15%2F387059092%2F1631831710.mp4~hmac=2138ccbd1ab4362d2fc3befa684a58239ab45b3371776561330a25a086bb8a88/vimeo-prod-skyfire-std-us/01/2411/15/387059092/1631831710.mp4?filename=file.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      <Login></Login>
    </div>
  );
}

export default App;
