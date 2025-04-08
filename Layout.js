import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { BarChart3, Upload, Settings, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Layout({ children, currentPageName }) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-full w-64 bg-white border-r transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">DiversiMetrics</h1>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <nav className="p-4 space-y-2">
          <Link to={createPageUrl("Dashboard")} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span>Dashboard</span>
          </Link>
          <Link to={createPageUrl("PortfolioUpload")} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
            <Upload className="w-5 h-5 text-blue-600" />
            <span>Upload Portfolio</span>
          </Link>
          <Link to={createPageUrl("Settings")} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100">
            <Settings className="w-5 h-5 text-blue-600" />
            <span>Settings</span>
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="bg-white border-b p-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </header>

        <main className="flex-1 overflow-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}