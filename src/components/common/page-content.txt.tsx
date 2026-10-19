"use client"
import {usePathname} from "next/navigation";
import {siteConfig} from "@/config/site.config";
// import DOMPurify from "isomorphic-dompurify";
// import parse from "html-react-parser";


const PageContent = () => {
   const pathname = usePathname();
   const pageContent =
       siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];

   if (!pageContent) {
       return <div>Page not found</div>;
   }

   return <div dangerouslySetInnerHTML={{ __html: pageContent.content }} />
};

export default PageContent;
