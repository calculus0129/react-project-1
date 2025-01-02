type TabButtonProps = {
  onSelect: () => void;
};

const TabButton: React.FC<React.PropsWithChildren<TabButtonProps>> = ({
  children,
  onSelect,
}) => {
  return (
    <li>
      <button className="tab-button" onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
