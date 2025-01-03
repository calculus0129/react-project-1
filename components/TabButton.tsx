type TabButtonProps = {
  onSelect: () => void;
  className?: string;
};

const TabButton: React.FC<React.PropsWithChildren<TabButtonProps>> = ({
  children,
  onSelect,
  className,
}) => {
  return (
    <li>
      <button className={className} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
