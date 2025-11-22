const CardTabs = () => {
  // Tab options for different card types - Credit cards active by default
  const tabs = [
    { label: "My credit cards", active: true },
    { label: "My debit cards", active: false },
    { label: "My virtual cards", active: false },
  ];

  return (
    <div className="flex gap-6 border-b border-border">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`pb-3 px-1 font-medium transition-colors relative ${
            tab.active
              ? "text-action-blue"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab.label}
          {tab.active && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-action-blue"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default CardTabs;