/**
 * 獅子頭標誌（暫用 placeholder，紅色）。
 * TODO：請將雄獅官方 logo 檔放到 src/assets/ 後換上此處，即可對齊品牌識別。
 */
export function LionMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="雄獅旅遊" xmlns="http://www.w3.org/2000/svg">
      {/* 鬃毛尖角 */}
      <g fill="#C8102E">
        <path d="M50 4 l8 18 h-16 z" />
        <path d="M88 22 l-15 9 7 15 z" />
        <path d="M96 58 l-17 -4 -2 17 z" />
        <path d="M12 22 l15 9 -7 15 z" />
        <path d="M4 58 l17 -4 2 17 z" />
      </g>
      {/* 鬃毛 */}
      <circle cx="50" cy="52" r="40" fill="#C8102E" />
      {/* 耳 */}
      <circle cx="29" cy="35" r="7.5" fill="#C8102E" />
      <circle cx="71" cy="35" r="7.5" fill="#C8102E" />
      {/* 臉 */}
      <circle cx="50" cy="52" r="27" fill="#E23744" />
      {/* 眼 */}
      <circle cx="41" cy="49" r="3.4" fill="#3A0D12" />
      <circle cx="59" cy="49" r="3.4" fill="#3A0D12" />
      {/* 口鼻 */}
      <ellipse cx="50" cy="64" rx="14" ry="10" fill="#F6D2C6" />
      <path d="M50 58 l6 7 h-12 z" fill="#7A1020" />
      <path d="M50 65 v6" stroke="#7A1020" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M50 71 q-6 4 -11 0" stroke="#7A1020" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M50 71 q6 4 11 0" stroke="#7A1020" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
