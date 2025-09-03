import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { controlsTabs } from "@/constants";
import { Button, buttonVariants } from "./button";

export default function MobileMenu() {
  return (
    <div className="flex gap-x-4 mx-w-xl mx-auto">
      {controlsTabs.map((tab, i) => (
        <Drawer key={i}>
          <DrawerTrigger className="text-center">
            <span
              className={buttonVariants({
                variant: "default",
                className:
                  "inline-flex justify-center items-center !rounded-full !size-10",
              })}
            >
              <tab.icon className="size-6" />
            </span>
            <span className="block text-sm">{tab.label}</span>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="hidden sr-only">
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <tab.content />
            </div>
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline" className="border border-border">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}
