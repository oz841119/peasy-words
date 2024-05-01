import DashboardHeader from "./_components/Header";
import Side from "./_components/Side";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <Side></Side>
      <div>
        <DashboardHeader></DashboardHeader>
        <main className="p-5 bg-slate-700">
          { children }
        </main>
      </div>
    </div>
  );
}
