"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";
import { Button } from "../../../components/ui/button";
import { FileText, Download } from "lucide-react";

export function CuriculumVitae() {
  const cvUrl = "/file/cv.pdf";

  return (
    <TooltipProvider>
      <Dialog>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 cursor-pointer rounded-xl">
                <FileText className="w-4 h-4" />
                resume
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            <p>see my resume</p>
          </TooltipContent>
        </Tooltip>

        <DialogContent className="max-w-4xl h-screen p-2">

          {/* PDF Preview */}
          <div className=" w-full h-full border rounded-md overflow-hidden">
            <iframe
              src={cvUrl}
              className="w-full h-full"
              title="Curriculum Vitae"
            />
          </div>
        </DialogContent>
      </Dialog>
    </TooltipProvider>
  );
}
