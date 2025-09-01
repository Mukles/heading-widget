import { motion } from "framer-motion";

export default function HeadlineWidget() {
  return (
    <div className="bg-gradient-to-br from-background via-card to-muted p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Headline Widget
          </h1>
          <p className="text-muted-foreground">
            Create stunning headlines with advanced typography controls
          </p>
        </motion.div>
      </div>
    </div>
  );
}
