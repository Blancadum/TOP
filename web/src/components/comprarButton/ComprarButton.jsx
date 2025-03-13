export default function AddToCartButton() {
    return (
      <button
        className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-brandPurple to-pink-500 text-white font-semibold text-lg md:text-xl rounded-full shadow-md hover:shadow-lg transition transform hover:scale-105 active:scale-95 w-full md:w-auto"
      >
        {/* Icono del carrito */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l1.6-8H6.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V4m0 0L9 4m3 0h3"
          />
        </svg>
  
        {/* Texto del botón */}
        <span className="hidden md:inline">Comprar</span>
        <span className="inline md:hidden">+</span>
      </button>
    );
  }
  