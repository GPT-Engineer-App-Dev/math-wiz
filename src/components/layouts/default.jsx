import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="w-full bg-blue-600 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Calculator App</h1>
      </header>
      <Outlet />
    </main>
  )
}

export default SharedLayout;