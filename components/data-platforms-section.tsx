"use client";

export default function DataPlatformsSection() {
  const platforms = [
    {
      category: "Price Data",
      name: "DexScreener",
      description: "for fast token/pair data",
    },
    {
      category: "NFT Aggregators",
      name: "OpenSea / Moralis",
      description: "or other NFT data providers",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-black">
          Sourcing Data from the Fastest Feeds
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          List the external platforms that provide real-time NFT price and
          liquidity information:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="text-sm text-gray-500 mb-2 font-semibold">
                {platform.category}
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-black">
                {platform.name}
              </h3>
              <p className="text-gray-600">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

