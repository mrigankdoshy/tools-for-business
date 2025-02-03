import { Button } from '@/shared/ui/button';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export type Tab = Readonly<{
  id: string;
  label: string;
}>;

type AnimatedTabsProps = Readonly<{
  tabs: Tab[];
  onSelect?: (tab: Tab) => void;
}>;

export function AnimatedTabs({ tabs, onSelect }: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const onClick = (tab: Tab) => {
    setActiveTab(tab.id);
    onSelect?.(tab);
  };

  return (
    <div className="flex space-x-1">
      <AnimatePresence>
        {tabs.map((tab, index) => (
          <motion.div
            key={tab.id}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              variant="outline"
              onClick={() => onClick(tab)}
              className="relative rounded-full px-3 py-1.5 text-sm font-medium"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-primary mix-blend-difference"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </Button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
