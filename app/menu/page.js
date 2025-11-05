import Link from "next/link";

export default function MenuPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-orange-200">
      <h1 className="text-4xl font-bold mb-2">Меню FastDrop</h1>
      <p className="text-lg mb-8">Выберите еду!</p>

      <div className="flex gap-6 flex-wrap justify-center">
        <Link
          href="/pizza"
          className="w-40 h-40 flex flex-col items-center justify-center border-2 border-green-400 rounded-2xl bg-white/70 shadow-md hover:scale-105 transition-transform"
        >
          <span className="text-4xl">🍕</span>
          <span className="text-xl font-semibold">Пицца</span>
        </Link>

        <Link
          href="/burgers"
          className="w-40 h-40 flex flex-col items-center justify-center border-2 border-green-400 rounded-2xl bg-white/70 shadow-md hover:scale-105 transition-transform"
        >
          <span className="text-4xl">🍔</span>
          <span className="text-xl font-semibold">Бургеры</span>
        </Link>

        <Link
          href="/salads"
          className="w-40 h-40 flex flex-col items-center justify-center border-2 border-green-400 rounded-2xl bg-white/70 shadow-md hover:scale-105 transition-transform"
        >
          <span className="text-4xl">🥗</span>
          <span className="text-xl font-semibold">Салаты</span>
        </Link>
      </div>
    </main>
  );
}