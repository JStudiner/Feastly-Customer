import React, { createContext, useState } from "react";
import { Order } from "../screens/Cart";
import { Product, Storefront, hours } from "../screens/Storefront";
interface ActiveOrderContextValues {
  activeOrder: Order;
  setActiveOrder: React.Dispatch<React.SetStateAction<Order>>;
}

const initialProducts: Product[] = [
  { name: "", description: "", imageURL: "", price: 0, count: 0, id: 0 },
];
const initialStorefront: Storefront = {
  weeklyHours: [{ day: "mon", open: 0, close: 0 }],
  rating: 0,
  description: "",
  name: "",
  products: initialProducts,
};
const initialOrder: Order = {
  products: initialProducts,
  createdTime: 0,
  completedTime: 0,
  active: false,
  subTotal: 0,
  storefront: initialStorefront,
};

export const ActiveOrderContext = createContext<ActiveOrderContextValues>({
  activeOrder: initialOrder,
  setActiveOrder: () => {},
});

export const ActiveOrderProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [activeOrder, setActiveOrder] = useState<Order>(initialOrder);

  return (
    <ActiveOrderContext.Provider value={{ activeOrder, setActiveOrder }}>
      {children}
    </ActiveOrderContext.Provider>
  );
};
