import { CreditCard, DollarSign, TrendingUp, User } from "lucide-react";

const BottomNav = () => {
  // Bottom navigation items for mobile view - Cards is active by default
  const navItems = [
    { icon: CreditCard, label: "Cards", active: true },
    { icon: DollarSign, label: "Payments", active: false },
    { icon: TrendingUp, label: "Credit", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <div className="flex justify-around items-center py-3 bg-background border-t border-border">
      {navItems.map((item, index) => (
        <button
          key={index}
          className={`flex flex-col items-center gap-1 ${
            item.active ? "text-action-blue" : "text-gray-400"
          }`}
        >
          <item.icon className="w-6 h-6" />
          <span className="text-xs">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;