"use client";

const MenuButton = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <button onClick={() => setIsOpen((prev) => !prev)}>
      <div className="flex flex-col gap-1.5 p-7">
        <div className="w-9 h-1 bg-orange-400 rounded-md"></div>
        <div className="w-7 h-1 bg-orange-400 rounded-md"></div>
        <div className="w-9 h-1 bg-orange-400 rounded-md"></div>
      </div>
    </button>
  );
};

export default MenuButton;
