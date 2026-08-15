import { homePage } from "@/content";
import Hero from "./Hero";
import SkyDive from "./SkyDive";
import Carousel from "./Carousel";
import AlternatingText from "./AlternatingText";
import BigText from "./BigText";

export function SliceZone() {
  return (
    <>
      {homePage.slices.map((slice, index) => {
        const key = `${slice.slice_type}-${index}`;
        switch (slice.slice_type) {
          case "hero":
            return <Hero key={key} slice={slice} />;
          case "sky_dive":
            return <SkyDive key={key} slice={slice} />;
          case "carousel":
            return <Carousel key={key} slice={slice} />;
          case "alternating_text":
            return <AlternatingText key={key} slice={slice} />;
          case "big_text":
            return <BigText key={key} slice={slice} />;
        }
      })}
    </>
  );
}
