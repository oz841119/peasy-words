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
      <main>
        <DashboardHeader></DashboardHeader>
        { children }
      </main>
    </div>
  );
}
