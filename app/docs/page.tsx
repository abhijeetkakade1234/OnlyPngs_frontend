import Link from "next/link";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-caesar font-normal mb-8 text-center">
          OnlyPngs Documentation
        </h1>
        <p className="text-xl text-gray-400 text-center mb-16">
          Complete guide to using OnlyPngs - Autonomous, Gasless NFT acquisition driven by AI intent.
        </p>

        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {/* I. Introduction & Overview */}
            <div className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-gray-800">
                I. Introduction & Overview
              </h2>
              
              {/* Section 1.1 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  1.1 Welcome to OnlyPngs
                </h3>
                <h4 className="text-2xl font-semibold mb-4 text-white">
                  Mission
                </h4>
                <p className="text-gray-400 mb-6">
                  Autonomous, Gasless NFT acquisition driven by AI intent.
                </p>
                <h4 className="text-2xl font-semibold mb-4 text-white">
                  Core Value
                </h4>
                <p className="text-gray-400 mb-6">
                  Eliminate gas fees and latency for NFT trading, ensuring users
                  secure deals instantly, even while offline.
                </p>
              </div>

              {/* Section 1.2 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  1.2 The Technology Stack
                </h3>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Intelligence
                </h4>
                <p className="text-gray-400 mb-6">
                  Powered by the <strong className="text-white">Gemini AI</strong> engine (via
                  structured prompts) for natural language command parsing.
                </p>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Execution & Security
                </h4>
                <p className="text-gray-400 mb-6">
                  Built on <strong className="text-white">0xGasless Agent Kit SDK</strong> utilizing
                  the <strong className="text-white">Smart Wallet (ERC-4337)</strong> standard.
                </p>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Network
                </h4>
                <p className="text-gray-400 mb-6">
                  Focused on the <strong className="text-white">Avalanche C-Chain</strong> (Chain ID:{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">43114</code>).
                </p>
              </div>

              {/* Section 1.3 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  1.3 The Non-Custodial Guarantee
                </h3>
                <div className="p-6 border border-gray-800 bg-gray-900 rounded-lg">
                  <p className="text-gray-300 mb-4">
                    <strong className="text-white text-lg">CRITICAL:</strong> Define the{" "}
                    <strong className="text-white">non-custodial</strong> model.
                  </p>
                  <p className="text-xl text-white font-semibold mb-4">
                    &ldquo;We never hold or access your master wallet keys (private key/seed phrase).&rdquo;
                  </p>
                  <p className="text-gray-300">
                    Explain that funds are held in the user&apos;s personal{" "}
                    <strong className="text-white">Smart Wallet</strong> address, which is fully owned
                    by the user.
                  </p>
                </div>
              </div>
            </div>

            {/* II. Getting Started */}
            <div className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-gray-800">
                II. Getting Started: Setting Up Your Smart Wallet
              </h2>
              
              {/* Section 2.1 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  2.1 Wallet Linking (EOA as Signer)
                </h3>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Requirement
                </h4>
                <p className="text-gray-400 mb-6">
                  Users must connect their existing MetaMask or Core Wallet (EOA)
                  to establish ownership of the new Smart Wallet.
                </p>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Process
                </h4>
                <p className="text-gray-400 mb-6">
                  The connection triggers the deployment of the new Smart Wallet
                  address, with the gas cost covered by OnlyPngs (Gasless
                  Onboarding).
                </p>
              </div>

              {/* Section 2.2 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  2.2 Funding Your Smart Wallet (The Vault)
                </h3>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Action
                </h4>
                <p className="text-gray-400 mb-6">
                  Instruct users to ask the AI,{" "}
                  <code className="bg-gray-900 px-3 py-1 rounded text-white">
                    &ldquo;What&apos;s my wallet address?&rdquo;
                  </code>
                </p>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Details
                </h4>
                <p className="text-gray-400 mb-6">
                  The agent will use the <code className="bg-gray-900 px-2 py-1 rounded">GetAddressAction</code> to
                  provide the unique Smart Wallet Address.
                </p>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Instruction
                </h4>
                <p className="text-gray-400 mb-6">
                  The user must manually transfer AVAX (or target tokens like
                  USDC) from their MetaMask to this new Smart Wallet address to
                  fund it.
                </p>
              </div>

              {/* Section 2.3 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  2.3 Delegating Authority (Session Key)
                </h3>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Requirement
                </h4>
                <p className="text-gray-400 mb-6">
                  Explain that the user must sign a <strong className="text-white">Session Key</strong> message to
                  authorize the agent to act while they are offline.
                </p>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Security
                </h4>
                <p className="text-gray-400 mb-6">
                  Emphasize that the Session Key is limited by{" "}
                  <strong className="text-white">spending cap, duration, and approved contracts (Marketplaces)</strong>,
                  ensuring the funds are protected.
                </p>
              </div>
            </div>

            {/* III. Core Features & AI Commands */}
            <div className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-gray-800">
                III. Core Features & AI Commands
              </h2>
              
              {/* Section 3.1 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  3.1 Balance & Address Inquiries
                </h3>
                <h4 className="text-xl font-semibold mb-3 text-white">Goal</h4>
                <p className="text-gray-400 mb-6">Instant, gasless reading of account status.</p>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Command Examples
                </h4>
                <div className="bg-gray-900 p-4 rounded-lg space-y-2 mb-6">
                  <code className="block text-white">
                    &ldquo;What&apos;s my balance?&rdquo;
                  </code>
                  <code className="block text-white">
                    &ldquo;Check my USDC balance.&rdquo;
                  </code>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Action Used
                </h4>
                <p className="text-gray-400 mb-6">
                  <code className="bg-gray-800 px-2 py-1 rounded">GetBalanceAction</code> - Retrieves native currency
                  (AVAX) and ERC-20 token balances from the Smart Wallet.
                </p>
              </div>

              {/* Section 3.2 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  3.2 Token Transfers
                </h3>
                <h4 className="text-xl font-semibold mb-3 text-white">Goal</h4>
                <p className="text-gray-400 mb-6">Secure, gasless transfer of assets to any other address.</p>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Command Example
                </h4>
                <div className="bg-gray-900 p-4 rounded-lg mb-6">
                  <code className="text-white">
                    &ldquo;Transfer 20 AVAX to 0xrecipient...&rdquo;
                  </code>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Action Used
                </h4>
                <p className="text-gray-400 mb-6">
                  <code className="bg-gray-800 px-2 py-1 rounded">SmartTransferAction</code> - Encodes the transaction
                  and submits it gaslessly using your platform&apos;s Paymaster
                  sponsorship.
                </p>
              </div>

              {/* Section 3.3 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  3.3 The Autonomous NFT Buy (The Process)
                </h3>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Step 1 (Monitoring)
                </h4>
                <p className="text-gray-400 mb-6">
                  The Watcher Service uses tools like{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded">SearchPairsAction</code> (DexScreener) to monitor
                  prices every 5 seconds.
                </p>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Step 2 (Execution)
                </h4>
                <p className="text-gray-400 mb-6">
                  The agent automatically builds the purchase transaction using
                  the <code className="bg-gray-800 px-2 py-1 rounded">EncodeFunctionDataAction</code>.
                </p>
                <h4 className="text-xl font-semibold mb-3 text-white">
                  Step 3 (Finality)
                </h4>
                <p className="text-gray-400 mb-6">
                  The transaction is executed using the{" "}
                  <code className="bg-gray-800 px-2 py-1 rounded">SendTransactionAction</code>, and the status is
                  tracked via <code className="bg-gray-800 px-2 py-1 rounded">CheckTransactionAction</code>.
                </p>
              </div>
            </div>

            {/* IV. Technical Reference */}
            <div className="mb-10">
              <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-gray-800">
                IV. Technical Reference (For Developers/Integrators)
              </h2>
              
              {/* Section 4.1 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  4.1 Core Agent Kit Actions (SDK Reference)
                </h3>
                <div className="space-y-6">
                  <div className="p-6 border border-gray-800 bg-gray-900 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3 text-white">
                      <code className="bg-gray-800 px-3 py-1 rounded">
                        SendTransactionAction
                      </code>
                    </h4>
                    <p className="text-gray-400">
                      The fundamental action for submitting any on-chain operation
                      (NFT buy, transfer, etc.). Requires <code className="bg-gray-800 px-2 py-1 rounded">to</code>,{" "}
                      <code className="bg-gray-800 px-2 py-1 rounded">data</code>, and optional{" "}
                      <code className="bg-gray-800 px-2 py-1 rounded">value</code> (in wei).
                    </p>
                  </div>

                  <div className="p-6 border border-gray-800 bg-gray-900 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3 text-white">
                      <code className="bg-gray-800 px-3 py-1 rounded">
                        ReadContractAction
                      </code>
                    </h4>
                    <p className="text-gray-400">
                      Used by the Watcher/Agent to query view functions (e.g., floor
                      price, token URI) without executing a transaction.
                    </p>
                  </div>

                  <div className="p-6 border border-gray-800 bg-gray-900 rounded-lg">
                    <h4 className="text-xl font-semibold mb-3 text-white">
                      <code className="bg-gray-800 px-3 py-1 rounded">
                        GetStatusFromUseropAction
                      </code>
                    </h4>
                    <p className="text-gray-400">
                      Tracks the confirmation status of a submitted transaction using
                      its unique hash.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4.2 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  4.2 Supported Tokens (Avalanche)
                </h3>
                <p className="text-gray-400 mb-4">
                  List the primary tokens supported by symbol for balance checks
                  and trades:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["AVAX", "USDT", "USDC", "WAVAX"].map((token) => (
                    <div
                      key={token}
                      className="bg-gray-900 px-4 py-2 rounded text-center font-mono text-white border border-gray-800"
                    >
                      {token}
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4.3 */}
              <div className="mb-10">
                <h3 className="bg-black text-white rounded-full text-xs w-fit px-4 py-1 mb-4 border border-gray-800">
                  4.3 Error Handling Philosophy
                </h3>
                <p className="text-gray-400">
                  All failed transactions (e.g., due to slippage, insufficient
                  liquidity) revert on-chain, and the user is immediately notified.
                  Funds are returned to the Smart Wallet.{" "}
                  <strong className="text-white">
                    No network fees are charged to the user on failure.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </TracingBeam>

        <div className="text-center mt-16">
          <Link
            href="/chat"
            className="inline-block px-8 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition-colors font-semibold text-lg"
          >
            Launch Chat
          </Link>
        </div>
      </div>
    </main>
  );
}
