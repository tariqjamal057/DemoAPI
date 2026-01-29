import Footer from "@/components/accounts/layouts/footer";
import Header from "@/components/accounts/layouts/header";

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className="bg-white">
      <Header />
      <main className=" w-full min-h-[80vh] md:max-w-3/4 px-4 md:px-0 md:mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}
