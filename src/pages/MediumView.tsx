import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreditCard from "@/components/CreditCard";
import QuickActions from "@/components/QuickActions";
import MenuItems from "@/components/MenuItems";
import Sidebar from "@/components/Sidebar";
import BalanceInfo from "@/components/BalanceInfo";
import CardTabs from "@/components/CardTabs";

const MediumView = () => {
  // State to toggle card number visibility (show/hide full card number and CVV)
  const [showCardNumber, setShowCardNumber] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      {/* iPad mini 8.3 device frame with rounded corners and bezels */}
      <div className="relative w-[820px] h-[1180px] bg-black rounded-[40px] shadow-2xl overflow-hidden border-[12px] border-black">
        {/* iPad top indicator bar */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[60px] h-[6px] bg-black rounded-full z-50"></div>
        
        {/* Two-column layout: Sidebar on left (navy), Main content on right (white) */}
        <div className="h-full flex" style={{ background: '#FFFFFF' }}>
          {/* Left sidebar with navigation - positioned at middle of left pane */}
          <Sidebar />

          {/* Main content area - white background with all card management features */}
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="p-8">
              {/* Header with card tabs and new card button */}
              <div className="flex justify-between items-center mb-8">
                <CardTabs />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 px-5 py-2">
                  <Plus className="w-4 h-4" />
                  New card
                </Button>
              </div>

              {/* Credit card display centered */}
              <div className="flex justify-center mb-8">
                <div className="w-full max-w-md">
                  <CreditCard
                    showNumber={showCardNumber}
                    onToggleNumber={() => setShowCardNumber(!showCardNumber)}
                  />
                </div>
              </div>

              {/* Balance information: Available credit, Current balance, Balance due */}
              <BalanceInfo />

              {/* Quick action buttons: Freeze, Set limit, GPay, Replace, Cancel */}
              <QuickActions />

              {/* Menu items: Card details, Recent transactions, Cardholder benefits */}
              <div className="mt-8">
                <MenuItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediumView;
