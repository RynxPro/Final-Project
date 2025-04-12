import Image from "next/image";
import Spline from "@splinetool/react-spline";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <section>
      <div>
        <nav>
          <Navbar />
          <main>
            <Spline scene="https://prod.spline.design/A8wQDo4mb3ndF3sx/scene.splinecode" />
          </main>
        </nav>
      </div>
    </section>
  );
}
