import { motion } from "framer-motion";

type AnimatedWordsProps = {
  segments: {
    text: string;
    className?: string;
  }[];
  containerClassName?: string;
};

const textContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0.2,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
} as const;

export const AnimatedWords = ({
  segments,
  containerClassName,
}: AnimatedWordsProps) => {
  return (
    <motion.p className={containerClassName} variants={textContainerVariants}>
      {segments.map((segment, segmentIndex) => (
        <span key={segmentIndex} className={segment.className}>
          {segment.text.split(" ").map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block">
              <motion.span variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
              <span className="inline-block">&nbsp;</span>
            </span>
          ))}
        </span>
      ))}
    </motion.p>
  );
};
