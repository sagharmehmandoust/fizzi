import Header from "@/components/Header";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";
import { SliceZone } from "@/slices";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <SliceZone />
        <ViewCanvas />
      </main>
      <Footer />
    </>
  );
}
