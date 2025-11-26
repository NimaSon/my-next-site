import AuthButtons from "./AuthButtons";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Order & Eat</h1>

      <AuthButtons />
    </header>
  );
}