import { Card, CardContent } from "@/components/ui/card";
import type { ContactInformation, HeaderSchema } from "@/types/preview";

type HeaderProps = {
  data?: {
    header?: HeaderSchema;
    contact?: ContactInformation;
  };
};

const Header = ({ data }: HeaderProps) => {
  const fullName = data?.header?.full_name ?? "";
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none p-0 text-center">
      <CardContent className="p-0 space-y-2">
        {/* Initials Circle */}
        {initials && (
          <div className="mx-auto w-12 h-12 rounded-full border text-black border-black flex items-center justify-center font-serif text-lg">
            {initials}
          </div>
        )}

        {/* Full Name */}
        <h1 className="text-3xl tracking-wide text-black">{fullName}</h1>

        {/* Contact line */}
        <div className="text-xs text-black/70 flex justify-center flex-wrap gap-x-2">
          {data?.contact?.email && <span>{data.contact.email}</span>}
          {data?.contact?.phone && <span>• {data.contact.phone}</span>}
          {data?.contact?.location && <span>• {data.contact.location}</span>}
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
