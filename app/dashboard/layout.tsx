export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen">
        <aside className="w-64 bg-gray-800 text-white p-5">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <ul className="space-y-2">
            <li><a href="/dashboard/home" className="block hover:text-gray-300">Home</a></li>
            <li><a href="/dashboard/profile" className="block hover:text-gray-300">Profile</a></li>
            <li><a href="/dashboard/settings" className="block hover:text-gray-300">Settings</a></li>
          </ul>
        </aside>
        <main className="flex-1 p-5">{children}</main>
      </div>
    );
  }
  