import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16 ">
        <SectionHeaders subHeader={"Our Story"} mainHeader={"About Us"} />
        <div className="text-gray-500 max-w-2xl mx-auto mt-4 flex-col gap-4">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus
            lectus non lacinia hendrerit. Aliquam erat volutpat. Morbi ornare
            fermentum mauris, porttitor lacinia magna mollis ut.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus
            lectus non lacinia hendrerit. Aliquam erat volutpat. Morbi ornare
            fermentum mauris, porttitor lacinia magna mollis ut.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+901234567899"
          >
            +90 123 456 78 99
          </a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-gray-500 mt-16">
        &copy; 2023 All rights reserved
      </footer>
    </>
  );
}
