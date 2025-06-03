"use client";

import React, { useState } from "react";
import MenuButton from "../ui/MenuButton";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="absolute left-0 top-0 bottom-0 flex items-start">
      <MenuButton setIsOpen={setIsOpen} />
    </div>
  );
};

export default Menu;
