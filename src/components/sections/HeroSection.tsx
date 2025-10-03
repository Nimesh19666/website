import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/Hero_bg.mp4" type="video/mp4" />
      </video>

      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="inline-block mb-6 sm:mb-8">
          <Badge>Nuopod Tech for Business</Badge>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black drop-shadow-lg px-4">
            Your <span className="text-[#0f40c4]">Vision</span> is Our Blueprint
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-black mb-8 sm:mb-12 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto font-light drop-shadow-md px-4">
          In a world of complexity, we provide clarity. We architect robust
          technology that transforms your concepts into reality, ensuring your
          business is built for the future.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <Button
            variant="black"
            className="w-full sm:w-auto px-8 sm:px-10 py-3"
          >
            Book A Call
          </Button>
          <Button variant="primary" className="w-full sm:w-auto px-8 py-3">
            Our Process
          </Button>
        </div>
      </div>
    </section>
  );
}
