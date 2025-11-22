/**
 * BalanceInfo Component
 * Displays three key financial metrics in a bordered grid layout:
 * 1. Available credit - Amount available to spend
 * 2. Current balance - Amount currently owed
 * 3. Balance due - Next payment due date
 */
const BalanceInfo = () => {
  return (
    // Three-column grid container with border and subtle background
    // Border color uses semantic token from design system
    // Rounded corners and padding for modern card-like appearance
    <div className="grid grid-cols-3 gap-8 py-6 border border-border/30 rounded-xl bg-muted/10 px-4">
      {/* Column 1: Available credit amount */}
      <div className="text-center">
        {/* Label with muted color and small text */}
        <p className="text-xs text-muted-foreground mb-2">Available credit</p>
        {/* Amount displayed in large, bold text */}
        <p className="text-xl font-bold">$9,472.39</p>
      </div>
      {/* Column 2: Current balance owed */}
      <div className="text-center">
        {/* Label indicating current outstanding balance */}
        <p className="text-xs text-muted-foreground mb-2">Current balance</p>
        {/* Balance amount in large, bold text */}
        <p className="text-xl font-bold">$2,527.61</p>
      </div>
      {/* Column 3: Payment due date */}
      <div className="text-center">
        {/* Label for when balance payment is due */}
        <p className="text-xs text-muted-foreground mb-2">Balance due</p>
        {/* Due date in large, bold text (6 Dec 2025) */}
        <p className="text-xl font-bold">6 Dec 2025</p>
      </div>
    </div>
  );
};

export default BalanceInfo;