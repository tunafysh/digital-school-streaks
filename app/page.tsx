import AppSidebar from "@/components/elements/app-sidebar";
import Navbar from "@/components/elements/navbar";

export default function Home() {
  return (
    <main className="overflow-hidden w-screen flex flex-col">
      <AppSidebar />
      <Navbar />
    </main>
  );
}
