const brands = [
  "/brands/brand1.png",
  "/brands/brand2.png",
  "/brands/brand3.png",
  "/brands/brand4.png",
  "/brands/brand5.png",

  "/brands/brand1.png",
  "/brands/brand2.png",
  "/brands/brand3.png",
  "/brands/brand4.png",
  "/brands/brand5.png",
];

const Brands = () => {
  return (
    <section className="relative space-y-24 overflow-hidden px-10 py-6">
      <div className="animate-scroll mx-auto flex max-w-7xl gap-12">
        {brands.map((brand, index) => (
          <img src={brand} alt={`Brand ${index + 1}`} className="h-20" />
        ))}
      </div>
    </section>
  );
};

export default Brands;
