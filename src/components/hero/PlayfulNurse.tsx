import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

const INK = "#2A2A2E";

/** A tiny cute buddy blob with a calm, happy face. */
function Buddy({
  cx,
  cy,
  r,
  color,
  shape = "circle",
}: {
  cx: number;
  cy: number;
  r: number;
  color: string;
  shape?: "circle" | "squircle";
}) {
  return (
    <g>
      {shape === "circle" ? (
        <circle cx={cx} cy={cy} r={r} fill={color} />
      ) : (
        <rect x={cx - r} y={cy - r} width={r * 2} height={r * 2} rx={r * 0.55} fill={color} />
      )}
      {/* closed happy eyes */}
      <path d={`M${cx - r * 0.42} ${cy - r * 0.1} q${r * 0.16} ${r * 0.24} ${r * 0.32} 0`} stroke={INK} strokeWidth={r * 0.12} fill="none" strokeLinecap="round" />
      <path d={`M${cx + r * 0.1} ${cy - r * 0.1} q${r * 0.16} ${r * 0.24} ${r * 0.32} 0`} stroke={INK} strokeWidth={r * 0.12} fill="none" strokeLinecap="round" />
      {/* smile */}
      <path d={`M${cx - r * 0.28} ${cy + r * 0.28} q${r * 0.28} ${r * 0.3} ${r * 0.56} 0`} stroke={INK} strokeWidth={r * 0.12} fill="none" strokeLinecap="round" />
    </g>
  );
}

export function PlayfulNurse({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const floatT = (dur: number, delay = 0) =>
    reduce
      ? undefined
      : { y: [0, -8, 0], transition: { duration: dur, ease: "easeInOut", repeat: Infinity, delay } };

  return (
    <div
      className={cn("relative mx-auto w-[min(82vw,340px)]", className)}
      role="img"
      aria-label="A cheerful nurse with a warm smile, ready to care for you at home."
    >
      <svg viewBox="0 0 320 300" className="h-auto w-full overflow-visible">
        {/* Clouds */}
        <g fill="#FFFFFF">
          <motion.g animate={reduce ? undefined : { x: [0, 8, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}>
            <ellipse cx="58" cy="96" rx="30" ry="18" />
            <ellipse cx="84" cy="90" rx="22" ry="16" />
          </motion.g>
          <motion.g animate={reduce ? undefined : { x: [0, -10, 0] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}>
            <ellipse cx="264" cy="128" rx="28" ry="17" />
            <ellipse cx="240" cy="122" rx="20" ry="14" />
          </motion.g>
        </g>

        {/* Floating buddies */}
        <motion.g animate={floatT(5.6, 0)}>
          <Buddy cx={40} cy={188} r={22} color="#FF7A33" />
        </motion.g>
        <motion.g animate={floatT(6.4, 0.6)}>
          <Buddy cx={284} cy={212} r={20} color="#FFC24B" shape="squircle" />
        </motion.g>
        <motion.g animate={floatT(5.2, 1)}>
          <Buddy cx={270} cy={54} r={17} color="#F5A623" />
        </motion.g>

        {/* The nurse (gently floating) */}
        <motion.g animate={floatT(6, 0.2)}>
          {/* Scrubs / body */}
          <path d="M104 300 C104 232 126 208 160 208 C194 208 216 232 216 300 Z" fill="#FFFFFF" />
          {/* Collar V */}
          <path d="M142 212 L160 236 L178 212 Z" fill="#F6B073" />
          {/* Stethoscope */}
          <path d="M150 226 C142 250 144 270 158 280" stroke="#E7EEF3" strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M170 226 C180 248 182 268 172 282" stroke="#E7EEF3" strokeWidth="5" fill="none" strokeLinecap="round" />
          <circle cx="165" cy="286" r="9" fill="#E7EEF3" />
          <circle cx="165" cy="286" r="4.5" fill="#B8C6CF" />

          {/* Head */}
          <circle cx="160" cy="140" r="62" fill="#FFC59A" />
          {/* Ears */}
          <circle cx="100" cy="146" r="10" fill="#FFC59A" />
          <circle cx="220" cy="146" r="10" fill="#FFC59A" />

          {/* Cheeks */}
          <ellipse cx="126" cy="158" rx="12" ry="8" fill="#F98F7A" fillOpacity="0.55" />
          <ellipse cx="194" cy="158" rx="12" ry="8" fill="#F98F7A" fillOpacity="0.55" />

          {/* Closed happy eyes */}
          <path d="M132 138 q11 14 22 0" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
          <path d="M166 138 q11 14 22 0" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Smile */}
          <path d="M142 162 q18 20 36 0" stroke={INK} strokeWidth="5" fill="none" strokeLinecap="round" />

          {/* Nurse cap */}
          <path d="M104 118 Q160 74 216 118 L212 132 Q160 96 108 132 Z" fill="#FFFFFF" />
          <path d="M104 118 Q160 74 216 118" stroke="#EDE4D4" strokeWidth="1.5" fill="none" />
          {/* Red cross */}
          <rect x="154" y="94" width="12" height="24" rx="3" fill="#E2560F" />
          <rect x="148" y="100" width="24" height="12" rx="3" fill="#E2560F" />
        </motion.g>
      </svg>
    </div>
  );
}
