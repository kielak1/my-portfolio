import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Cześć, jestem [Twoje Imię]</h1>
      <p className="text-lg text-gray-400 mt-2">Full Stack Developer | Python & React</p>
    </main>
  );
}
