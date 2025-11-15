"use client";

export default function ProductSection() {
  const features = [
    {
      title: "Set Rules with AI",
      description:
        'Users define complex buy/sell rules in natural language (e.g., "Buy if floor price is below 20 AVAX").',
    },
    {
      title: "Zero-Latency Execution",
      description:
        "The system automatically captures fleeting market deals missed by humans via 5-second market monitoring.",
    },
    {
      title: "The Sleeping Buy",
      description:
        "The transaction is executed instantly, non-stop, even when the user is asleep or offline.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
          What is Our Product
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-lg border border-gray-200"
            >
              <h3 className="text-2xl font-semibold mb-4 text-black">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

