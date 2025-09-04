import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { controlsTabs } from "@/constants";
import { motion } from "framer-motion";

export default function Controls() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="h-full max-lg:hidden"
    >
      <Card className="p-6 h-full">
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {controlsTabs.map((tab) => (
              <TabsTrigger
                key={tab.label}
                value={tab.value}
                className="flex items-center gap-2"
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {controlsTabs.map((tab) => (
            <TabsContent
              key={tab.label}
              value={tab.value}
              className="space-y-6 mt-6"
            >
              <tab.content />
            </TabsContent>
          ))}
        </Tabs>
      </Card>
    </motion.div>
  );
}
