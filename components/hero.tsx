"use client";

import TrailWrapper from "@/components/ui/image-trail-effect";

// NFT image URLs
const NFT_IMAGES = [
  "https://i2c.seadn.io/base/0x286ce4278213bf7b561763ebcf2342bb94e52858/70f329099500374389e4cfd41170fd72.png?w=350",
  "https://i2c.seadn.io/base/0x7e72abdf47bd21bf0ed6ea8cb8dad60579f3fb50/8b60a34490856fa5d3cf7f20a09d6a/5c8b60a34490856fa5d3cf7f20a09d6a.png?w=1000",
  "https://i2c.seadn.io/ethereum/0x60e4d786628fea6478f785a6d7e704777c86a7c6/ed3509ff5da0adc9b8611540a73d7b98.png?w=1000",
  "https://i2c.seadn.io/ethereum/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e/5c00f3fc6a2d3365925f1b3cc2e128ce.png?w=350",
  "https://i2c.seadn.io/hyperevm/0x9125e2d6827a00b0f8330d6ef7bef07730bac685/1f0956f76a1d598eed9b121be01b3f/421f0956f76a1d598eed9b121be01b3f.png?w=1000",
  "https://i2c.seadn.io/base/0xde7c3435c34ddee79234adf612467727e980400d/9db2ad5428705126aa321075c6122a/6d9db2ad5428705126aa321075c6122a.jpeg?w=1000",
  "https://i2c.seadn.io/ethereum/0x23581767a106ae21c074b2276d25e5c3e136a68b/50131385b0be90066d289676ed5ef4/bd50131385b0be90066d289676ed5ef4.png?w=350",
  "https://i2c.seadn.io/ronin/0xf6fe00893eea4d47f0cba303ef518fe4ab1c9dd6/7709b579756846595f0d8eaa9d600e/027709b579756846595f0d8eaa9d600e.png?w=1000",
  "https://i2c.seadn.io/ethereum/0xb6a37b5d14d502c3ab0ae6f3a0e058bc9517786e/4aa328590880aec393f8d4bcb468f5/844aa328590880aec393f8d4bcb468f5.png?w=350",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-screen overflow-hidden bg-black">
      <TrailWrapper
        images={NFT_IMAGES}
        className="relative h-screen bg-black"
      >
        {/* OnlyPngs text overlay */}
        <div className="absolute inset-0 grid place-items-center pointer-events-none z-0">
          <h2 className="text-white text-7xl md:text-9xl lg:text-[12rem] font-caesar font-normal opacity-20">
            OnlyPngs
          </h2>
        </div>
      </TrailWrapper>
    </section>
  );
}

