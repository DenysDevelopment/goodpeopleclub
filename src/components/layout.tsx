import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface LayoutPropsType {
  children: React.ReactNode;
  className?: string;
}

export const Layout = ({ children, className }: LayoutPropsType) => {
  return (
    <div className="wrapper">
      <Header />
      <main className={`page__content ${className}`}>{children}</main>
      <Footer />
    </div>
  );
};
