import {Vignette} from "../components/vignette";

export default function Home() {
  return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-black">
          <Vignette name="Hello World" />
          <Vignette name="Hello World" />
      </div>
  );
}
