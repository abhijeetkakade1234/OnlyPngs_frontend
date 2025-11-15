"use client";

export default function BuiltOnSection() {
  const technologies = [
    {
      category: "AI Intelligence",
      name: "Gemini",
      description: "The Decision Engine",
    },
    {
      category: "Execution Layer",
      name: "0x Gasless Agent Kit",
      description: "The Robot Hand",
    },
    {
      category: "Security Standard",
      name: "Smart Wallet (ERC-4337)",
      description: "The Programmable Vault",
    },
    {
      category: "Blockchain",
      name: "Avalanche C-Chain",
      description: "The Target Network",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Built on the Best-in-Class Web3 Foundation
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Display names of key partners and technologies:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-lg border border-gray-700"
            >
              <div className="text-sm text-gray-400 mb-2">{tech.category}</div>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-gray-400 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

