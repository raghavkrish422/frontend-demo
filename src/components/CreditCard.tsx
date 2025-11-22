import { Eye } from "lucide-react";
import { Button } from "./ui/button";

const CreditCard = ({ showNumber, onToggleNumber }) => {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="relative">
        {/* Toggle button to show/hide full card number and CVV */}
        <div className="flex justify-center mb-3">
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleNumber}
            className="bg-background text-action-blue hover:bg-background border-action-blue text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            Show card number
          </Button>
        </div>

        {/* Credit card design with blue background */}
        <div className="bg-card-blue rounded-2xl p-6 shadow-lg text-white relative overflow-hidden">
          <div className="relative z-10">
            {/* Cardholder name */}
            <div className="mb-8">
              <p className="text-lg font-medium">James Jones</p>
            </div>

            {/* Card number - shows full number or masked based on showNumber state */}
            <div className="mb-4">
              <p className="text-xl tracking-wider font-mono">
                {showNumber ? "3910  2910  3936  8102" : "••••  ••••  ••••  8102"}
              </p>
            </div>

            {/* Card details footer: Expiry, CVV, and VISA logo */}
            <div className="flex justify-between items-end">
              <div className="flex gap-8 text-sm">
                {/* Expiry date */}
                <div>
                  <p className="text-xs opacity-80 mb-1">EXP</p>
                  <p className="font-mono">12/28</p>
                </div>
                {/* CVV - shows actual number or masked based on showNumber state */}
                <div>
                  <p className="text-xs opacity-80 mb-1">CVV</p>
                  <p className="font-mono">{showNumber ? "659" : "•••"}</p>
                </div>
              </div>

              {/* VISA logo */}
              <div className="text-right">
                <p className="text-2xl font-bold italic">VISA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card pagination indicators - showing first card is active */}
        <div className="flex justify-center gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-action-blue"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;