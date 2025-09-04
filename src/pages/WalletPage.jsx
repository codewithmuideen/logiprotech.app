import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaWallet,
  FaLock,
  FaMoneyBill,
  FaPaperPlane,
} from "react-icons/fa";
import { Dialog } from "@headlessui/react";

export default function WalletPage() {
  const [openModal, setOpenModal] = useState(null);

  const handleOpen = (modal) => setOpenModal(modal);
  const handleClose = () => setOpenModal(null);

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-green-950 text-white min-h-screen">
      {/* Back to Home */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-20 bg-gray-800/80 hover:bg-lime-500 hover:text-black 
        transition-all px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg"
      >
        <FaHome className="text-lg" /> Home
      </Link>

      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto pt-28 pb-16 px-6">
        <FaWallet className="text-6xl text-lime-400 mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Escrow <span className="text-lime-400">Wallet</span>
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Securely manage your funds with escrow protection. Deposit easily via{" "}
          <span className="text-lime-400 font-semibold">Stripe</span>, monitor
          balances in transit, and release payments only when delivery is
          confirmed.
        </p>
      </div>

      {/* Wallet Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 lg:px-20 pb-20">
        {/* Deposit Funds */}
        <div
          onClick={() => handleOpen("deposit")}
          className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 border border-gray-700 
          rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <FaMoneyBill className="text-4xl text-green-400 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-3 text-center">Deposit Funds</h3>
          <p className="text-gray-300 text-sm text-center">
            Add money via Stripe using mobile money, bank transfer, or card
            payments.
          </p>
        </div>

        {/* In-Transit Funds */}
        <div
          onClick={() => handleOpen("inTransit")}
          className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 border border-gray-700 
          rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <FaLock className="text-4xl text-yellow-400 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-3 text-center">
            In-Transit Funds
          </h3>
          <p className="text-gray-300 text-sm text-center">
            View pending escrow transactions awaiting delivery confirmation.
          </p>
        </div>

        {/* Release Payments */}
        <div
          onClick={() => handleOpen("release")}
          className="bg-gradient-to-br from-gray-800/80 to-gray-900/60 border border-gray-700 
          rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <FaPaperPlane className="text-4xl text-lime-400 mb-4 mx-auto" />
          <h3 className="text-xl font-bold mb-3 text-center">
            Release Payments
          </h3>
          <p className="text-gray-300 text-sm text-center">
            Confirm delivery and release escrowed funds to sellers securely.
          </p>
        </div>
      </div>

      {/* Deposit Modal */}
      <Dialog
        open={openModal === "deposit"}
        onClose={handleClose}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6">
          <Dialog.Panel className="bg-gray-900 text-white rounded-2xl max-w-lg w-full p-8 shadow-lg">
            <Dialog.Title className="text-2xl font-bold mb-4">
              Deposit Funds
            </Dialog.Title>
            <p className="text-gray-300 mb-6">
              Add money to your escrow wallet using Stripe. Choose mobile money,
              bank transfer, or card.
            </p>
            <button
              className="w-full bg-lime-500 hover:bg-lime-600 text-black px-6 py-3 rounded-xl font-semibold shadow-lg"
              onClick={() => alert("Stripe Deposit Integration Hook")}
            >
              Deposit with Stripe
            </button>
            <button
              onClick={handleClose}
              className="mt-4 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* In-Transit Modal */}
      <Dialog
        open={openModal === "inTransit"}
        onClose={handleClose}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6">
          <Dialog.Panel className="bg-gray-900 text-white rounded-2xl max-w-lg w-full p-8 shadow-lg">
            <Dialog.Title className="text-2xl font-bold mb-4">
              In-Transit Funds
            </Dialog.Title>
            <p className="text-gray-300 mb-6">
              These are escrowed funds awaiting delivery confirmation. They
              cannot be withdrawn until confirmed.
            </p>
            <ul className="text-gray-400 list-disc pl-6 mb-6">
              <li>₦150,000 – Maize shipment</li>
              <li>₦75,000 – Tomatoes delivery</li>
            </ul>
            <button
              onClick={handleClose}
              className="mt-4 text-gray-400 hover:text-white"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Release Modal */}
      <Dialog
        open={openModal === "release"}
        onClose={handleClose}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6">
          <Dialog.Panel className="bg-gray-900 text-white rounded-2xl max-w-lg w-full p-8 shadow-lg">
            <Dialog.Title className="text-2xl font-bold mb-4">
              Release Payments
            </Dialog.Title>
            <p className="text-gray-300 mb-6">
              Confirm that the buyer has received their goods, then release the
              escrow funds securely.
            </p>
            <button
              className="w-full bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-xl font-semibold shadow-lg"
              onClick={() => alert("Release Payment Hook")}
            >
              Release Funds
            </button>
            <button
              onClick={handleClose}
              className="mt-4 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
