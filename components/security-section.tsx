"use client";

export default function SecuritySection() {
  const securityFeatures = [
    {
      title: "Fund Safety",
      description:
        "Funds live in the user's Smart Wallet Address. We never hold their private key.",
    },
    {
      title: "Execution Safety",
      description:
        "The agent uses a Session Key—a limited, revocable password that protects the rest of their portfolio.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Non-Custodial Security: Your Funds, Your Control.
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Explains the two mechanisms:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-800 rounded-lg border border-gray-700"
            >
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

