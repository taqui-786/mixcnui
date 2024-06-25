import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PreviewWithCode = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList>
        <TabsTrigger value="preview">preview</TabsTrigger>
        <TabsTrigger value="code">code</TabsTrigger>
      </TabsList>
      {children}

      
    </Tabs>
  );
};
type PreviewProps = {
  children: Readonly<React.ReactNode>;
  toPreview?: string;
  className?:string;
};
export const Preview = ({ children, toPreview="preview",className }: PreviewProps) => {
  return (
    <TabsContent value={toPreview} className={className}>
      <div className="min-h-80 w-full border border-[#dbdbdb] rounded-md flex flex-col items-center justify-center overflow-auto">
        {children}
      </div>
    </TabsContent>
  );
};
