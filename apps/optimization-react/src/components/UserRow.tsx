interface UserRowProps {
  first_name: string;
  last_name: string;
  message: string;
  style?: React.CSSProperties;
}

export default function UserRow({
  first_name,
  last_name,
  message,
  style,
}: UserRowProps) {
  return (
    <div className="h-[50px]" style={style}>
      {first_name}-{last_name}: {message}
    </div>
  );
}
