export const LogoWhite = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={220} height={64} {...props}>
    <rect width={64} height={64} fill="#0C66E4" rx={14} />
    <rect width={12} height={36} x={12} y={14} fill="#FFF" rx={4} />
    <rect width={12} height={24} x={28} y={14} fill="#B3D4FF" rx={4} />
    <rect width={8} height={18} x={44} y={14} fill="#36B37E" rx={3} />
    <text
      x={80}
      y={38}
      fill="#172B4D"
      fontFamily="Inter, Arial, sans-serif"
      fontSize={22}
      fontWeight={600}
    >
      {"\n    Task\n  "}
    </text>
    <text
      x={80}
      y={56}
      fill="#42526E"
      fontFamily="Inter, Arial, sans-serif"
      fontSize={18}
    >
      {"\n    Manager\n  "}
    </text>
  </svg>
)
export const LogoDark = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={220} height={64} {...props}>
    <rect width={64} height={64} fill="#1D2125" rx={14} />
    <rect width={12} height={36} x={12} y={14} fill="#579DFF" rx={4} />
    <rect width={12} height={24} x={28} y={14} fill="#85B8FF" rx={4} />
    <rect width={8} height={18} x={44} y={14} fill="#4BCE97" rx={3} />
    <text
      x={80}
      y={38}
      fill="#FFF"
      fontFamily="Inter, Arial, sans-serif"
      fontSize={22}
      fontWeight={600}
    >
      {"\n    Task\n  "}
    </text>
    <text
      x={80}
      y={56}
      fill="#9FADBC"
      fontFamily="Inter, Arial, sans-serif"
      fontSize={18}
    >
      {"\n    Manager\n  "}
    </text>
  </svg>
)

