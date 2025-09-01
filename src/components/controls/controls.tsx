import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Palette, Sparkles, Type } from "lucide-react";
import EffectsControls from "./effects-controls";
import StyleControls from "./style-controls";
import TextControls from "./text-controls";

export default function Controls() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="h-full"
    >
      <Card className="p-6 h-full">
        <Tabs defaultValue="text" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="text" className="flex items-center gap-2">
              <Type className="w-4 h-4" />
              Text
            </TabsTrigger>
            <TabsTrigger value="style" className="flex items-center gap-2">
              <Palette className="w-4 h-4" />
              Style
            </TabsTrigger>
            <TabsTrigger value="effects" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Effects
            </TabsTrigger>
          </TabsList>
          <TabsContent value="text">
            <TextControls />
          </TabsContent>
          <TabsContent value="style">
            <StyleControls />
          </TabsContent>
          <TabsContent value="effects">
            <EffectsControls />
          </TabsContent>
        </Tabs>
      </Card>
    </motion.div>
  );
}
