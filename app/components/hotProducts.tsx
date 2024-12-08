import Image from "next/image";

export default function HotProduct() {
  return (
    <header className="container mx-auto px-4 py-12 lg:py-16">
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr]">
        {/* Rotated Text (90 degrees) - Positioned outside the image */}
        <div className="hidden md:flex items-center justify-center text-xl font-medium tracking-wider text-zinc-900 transform -rotate-90 absolute left-[-10rem] top-1/2 transform -translate-y-1/2">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Horizontal Text for Mobile Devices */}
        <div className="text-xl font-medium tracking-wider text-zinc-900 md:hidden">
          EXPLORE NEW AND POPULAR STYLES
        </div>

        {/* Image and Product Grid */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Main Image */}
          <div className="w-full md:w-[48%]">
            <Image
              src="/03.jpg"
              alt="Orange modern chair"
              className="h-full w-full object-cover"
              width={500}
              height={500}
              priority
            />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
            <div className="aspect-square">
              <Image
                src="/04.jpg"
                alt="White tufted chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/01.jpg"
                alt="Gray upholstered chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/06.jpg"
                alt="Vintage white chair"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="aspect-square">
              <Image
                src="/01.jpg"
                alt="Vintage white chair duplicate"
                className="h-full w-full object-cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}