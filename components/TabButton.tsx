type TabButtonProps = {
  onClick: () => void;
};

const TabButton: React.FC<React.PropsWithChildren<TabButtonProps>> = ({
  children,
  onClick,
}) => {
  return (
    <button className="tab-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default TabButton;
