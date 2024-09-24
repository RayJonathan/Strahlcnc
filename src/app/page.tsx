import Info from "@/components/Utilities/Content/Info";
import Section from "@/components/Utilities/Content/Section";
import Products from "@/components/Utilities/Content/Products";
import Link from "next/link";
import CustomDesignSection from "@/components/Utilities/Content/Custom";
export default function Home() {
  return (
    <div>
      <Section />
      <Info />
      <div className="container mx-auto py-10 px-4 md:px-20">
        <h1 className="text-4xl font-bold mb-5 text-center xl:text-start md:text-start">Our Products</h1>
        <h1 className="text-2xl mb-10 text-center xl:text-start md:text-start">Click for more details</h1>
        <div className="grid md:grid-cols-4 gap-7 mb-7">
          <Link href="/hiasandinding">
            <Products size="large" imageSrc="/hiasandinding3.png" category="HIASAN DINDING" />
          </Link>
          <Link href="/gerbang">
            <Products size="normal" imageSrc="gerbang1.png" category="GERBANG" />
          </Link>
          <Link href="/pintu">
            <Products size="normal" imageSrc="pintu (1).png" category="PINTU" />
          </Link>

          <Link href="/balkon">
            <Products size="normal" imageSrc="balkon1.png" category="BALKON" />
          </Link>
          <Link href="/partisi">
            <Products size="normal" imageSrc="partisi (1).png" category="PARTISI" />
          </Link>
          <Link href="/kanopi">
            <Products size="large" imageSrc="kanopi (1).png" category="KANOPI" />
          </Link>
        </div>
      </div>
      <CustomDesignSection />
    </div>
  );
}
