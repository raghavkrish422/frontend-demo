import { CreditCard, DollarSign, TrendingUp, User, Plus } from "lucide-react";

const Sidebar = () => {
  // Navigation items configuration - Cards is active by default
  const navItems = [
    { icon: CreditCard, label: "Cards", active: true },
    { icon: DollarSign, label: "Payments", active: false },
    { icon: TrendingUp, label: "Credit", active: false },
  ];

  return (
    // Sidebar with navy background, 208px width
    <div className="w-52 bg-navy-dark text-white h-full flex flex-col">
      {/* App branding at top */}
      <div className="p-6 pb-4">
        <div className="flex items-center gap-2 text-lg font-bold">
          <Plus className="w-5 h-5" />
          <span>ITO HealthBase</span>
        </div>
      </div>

      {/* Main navigation menu - vertically centered in middle of sidebar */}
      <nav className="flex-1 px-3 flex flex-col justify-center">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              item.active
                ? "bg-white text-action-blue"
                : "text-white/70 hover:bg-white/10"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Profile button at bottom */}
      <div className="p-4 pb-6">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 transition-colors">
          <User className="w-5 h-5" />
          <span className="font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;