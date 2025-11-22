import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreditCard from "@/components/CreditCard";
import QuickActions from "@/components/QuickActions";
import MenuItems from "@/components/MenuItems";
import Sidebar from "@/components/Sidebar";
import BalanceInfo from "@/components/BalanceInfo";
import CardTabs from "@/components/CardTabs";

const LargeView = () => {
  // State to toggle card number visibility (show/hide full card number and CVV)
  const [showCardNumber, setShowCardNumber] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      {/* MacBook Air device frame with minimal bezels */}
      <div className="relative w-[1440px] h-[900px] bg-gray-200 rounded-[20px] shadow-2xl overflow-hidden border-[8px] border-gray-300">
        {/* MacBook camera notch at top */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[120px] h-[6px] bg-gray-800 rounded-full z-50"></div>
        {/* MacBook trackpad indicator at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[16px] bg-gray-400 rounded-b-xl"></div>
        
        {/* Two-column layout: Sidebar on left, Main content on right */}
        <div className="h-full flex" style={{ background: '#FFFFFF' }}>
          {/* Left sidebar with navigation */}
          <Sidebar />

          {/* Main content area with white background */}
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="px-12 py-8">
              {/* Header with card type tabs and new card button */}
              <div className="flex justify-between items-center mb-10">
                <CardTabs />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center gap-2 px-5 py-2">
                  <Plus className="w-4 h-4" />
                  New card
                </Button>
              </div>

              {/* Two-column grid layout for large screen */}
              <div className="grid grid-cols-[1fr,1fr] gap-12">
                {/* Left column: Credit card, balance info, and quick actions */}
                <div>
                  {/* Credit card display */}
                  <div className="mb-8">
                    <CreditCard
                      showNumber={showCardNumber}
                      onToggleNumber={() => setShowCardNumber(!showCardNumber)}
                    />
                  </div>

                  {/* Balance information: Available credit, Current balance, Balance due */}
                  <BalanceInfo />

                  {/* Quick action buttons */}
                  <div className="mt-8">
                    <QuickActions />
                  </div>
                </div>

                {/* Right column: Menu items */}
                <div className="pt-4">
                  <MenuItems />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeView;
