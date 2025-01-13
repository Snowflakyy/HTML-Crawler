import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { content } from "../DynamicContent";
// Define the context interface
interface HtmlContentContextType {
  htmlContent: string;
  pageContent:string;
  setHtmlContent: React.Dispatch<React.SetStateAction<string>>;
  setPageContent: React.Dispatch<React.SetStateAction<string>>;

}

// Create the context
const HtmlContentContext = createContext<HtmlContentContextType | undefined>(undefined);

// Custom hook for using the context
export const useHtmlContent = () => {
  const context = useContext(HtmlContentContext);
  if (!context) {
    throw new Error("useHtmlContent must be used within an HtmlContentProvider");
  }
  return context;
};

// Provider component
export const HtmlContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [htmlContent, setHtmlContent] = useState<string>(content);
  const fullPage = document.documentElement.outerHTML;
  const [pageContent,setPageContent] = useState<string>(fullPage)

  return (
    <HtmlContentContext.Provider value={{ htmlContent, pageContent,setHtmlContent,setPageContent }}>
      {children}
    </HtmlContentContext.Provider>
  );
};
