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

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none p-0 text-center border-b-3 pb-3 border-b-cyan-900">
      <CardContent className="p-0 space-y-2">
        <div>
          <h1 className="text-5xl tracking-wide text-left text-black">
            {fullName}
          </h1>
          <h3 className="text-xl tracking-wide text-left text-black/70">
            {data?.header?.professional_title}
          </h3>
        </div>
        {/* Contact line */}
        <div className="text-xs text-black/70 flex justify-start flex-wrap gap-x-2">
          {data?.contact?.location && <span>{data.contact.location}</span>} |
          {data?.contact?.email && <span>{data.contact.email}</span>} |
          {data?.contact?.phone && <span>{data.contact.phone}</span>}
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
