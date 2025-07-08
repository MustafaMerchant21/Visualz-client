
import {HeroUIProvider} from '@heroui/react'
import {ToastProvider} from "@heroui/toast";
import { useHref, useNavigate } from "react-router-dom";

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <ToastProvider/>
      {children}
    </HeroUIProvider>
  );
}
