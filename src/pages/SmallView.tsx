import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import CreditCard from "@/components/CreditCard";
import QuickActions from "@/components/QuickActions";
import MenuItems from "@/components/MenuItems";
import BottomNav from "@/components/BottomNav";
import CardTabs from "@/components/CardTabs";

const SmallView = () => {
  // State to toggle card number visibility (show/hide full card number and CVV)
  const [showCardNumber, setShowCardNumber] = useState(false);
  
  // State to control drag panel expansion (false = collapsed/initial state, true = expanded state)
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      {/* iPhone 14 device frame with rounded corners and bezels */}
      <div className="relative w-[390px] h-[844px] bg-black rounded-[55px] shadow-2xl overflow-hidden border-[14px] border-black">
        {/* iPhone notch at top */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-black rounded-b-3xl z-50"></div>
        
        {/* Main content area with dark blue background */}
        <div className="h-full flex flex-col text-white relative overflow-hidden" style={{ background: '#0C365A' }}>
          {/* COLLAPSED STATE - Shows credit card at top with draggable panel at bottom */}
          {!isExpanded ? (
            <>
              <div className="p-6 pb-4">
                {/* Header with available credit and new card button */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-sm opacity-80">Available credit</p>
                    <p className="text-3xl font-bold">$9,472.39</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-white hover:bg-white/90 text-gray-700 rounded-full flex items-center gap-1 px-3 py-1 text-xs"
                  >
                    <Plus className="w-3 h-3" />
                    New card
                  </Button>
                </div>

                {/* Card type tabs (Credit/Debit/Virtual) */}
                <CardTabs />
                
                {/* Credit card display component */}
                <div className="mt-6">
                  <CreditCard
                    showNumber={showCardNumber}
                    onToggleNumber={() => setShowCardNumber(!showCardNumber)}
                  />
                </div>
              </div>

              {/* Draggable bottom panel - positioned at exact specs: top 441px, width 390px, height 744px */}
              <div 
                className="absolute bg-white rounded-t-3xl"
                style={{
                  top: '441px',
                  width: '390px',
                  height: '744px'
                }}
                onClick={() => setIsExpanded(true)}
              >
                {/* Drag handle indicator */}
                <div 
                  className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-4 cursor-grab active:cursor-grabbing"
                ></div>

                <div className="px-4" style={{ paddingBottom: '80px' }}>
                  {/* Frame 5 - Quick action buttons container with exact specs: width 390px, height 64px, top 780px */}
                  <div 
                    className="bg-white rounded-2xl"
                    style={{
                      width: '390px',
                      height: '64px',
                      marginLeft: '-16px',
                      boxShadow: '0px 0px 24px 0px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 16px',
                      marginBottom: '16px'
                    }}
                  >
                    {/* 5 action buttons: Freeze card, Set speed limit, Add to GPay, Replace card, Cancel card */}
                    <QuickActions />
                  </div>
                  
                  {/* Menu items: Card details, Recent transactions, Cardholder benefits */}
                  <MenuItems />
                </div>

              </div>
              
              {/* Bottom navigation bar - fixed at bottom of screen, visible even when panel is collapsed */}
              <div className="absolute bottom-0 left-0 right-0 bg-white z-50">
                <BottomNav />
              </div>
            </>
          ) : (
            /* EXPANDED STATE - Panel dragged up, card hidden, menu items visible */
            <>
              <div className="p-6 pb-4">
                {/* Header section in expanded state */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-sm opacity-80">Available credit</p>
                    <p className="text-3xl font-bold">$9,472.39</p>
                  </div>
                  <Button
                    size="sm"
                    className="bg-white hover:bg-white/90 text-gray-700 rounded-full flex items-center gap-1 px-3 py-1 text-xs"
                  >
                    <Plus className="w-3 h-3" />
                    New card
                  </Button>
                </div>
              </div>

              {/* Expanded white panel fills remaining space */}
              <div className="flex-1 bg-white rounded-t-3xl relative">
                {/* Drag handle - click to collapse back to initial state */}
                <div 
                  className="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-3 mb-4 cursor-grab active:cursor-grabbing"
                  onClick={() => setIsExpanded(false)}
                ></div>

                <div className="px-4" style={{ paddingBottom: '80px' }}>
                  <div 
                    className="bg-white rounded-2xl"
                    style={{
                      width: '390px',
                      height: '64px',
                      marginLeft: '-16px',
                      boxShadow: '0px 0px 24px 0px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0 16px',
                      marginBottom: '16px'
                    }}
                  >
                    <QuickActions />
                  </div>
                  
                  <MenuItems />
                </div>

              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallView;
