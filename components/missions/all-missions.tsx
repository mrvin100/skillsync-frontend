import * as React from "react";
import { TypographyH3, TypographyH4 } from "@/components/ui/typographies";
import { Spacer } from "@/components/global/";
import { Service } from "@/helpers/service.model";
import Image from "next/image";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export const HomeServices: React.FC = () => {
  const services: Service[] = [
    { id: "1", image: "/images/service_ex.jpg", title: "Grapgic Design" },
    { id: "2", image: "/images/service_ex1.jpeg", title: "Web Development" },
    { id: "3", image: "/images/service_ex2.jpg", title: "Digital Marketing" },
    { id: "3", image: "/images/service_ex3.webp", title: "content Writing" },
  ];
  return (
    <section>
      <Spacer small />
      <TypographyH3>Porpular Niches</TypographyH3>
      <Spacer tooSmall />
      {services && services.length > 0 ? (
        <div className="grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8 cursor-pointer">
          {services.map((service) => (
            <div key={service?.id} className="drop-shadow-sm hover:drop-shadow-md hover:transition-all border max-w-56 w-full bg-card p-1">
              <div>
                <Image
                  src={service?.image || '/images/service_ex.jpg'}
                  alt={service?.title}
                  height={200}
                  width={200}
                  className="w-full h-44 object-cover"
                />
              </div>
              <TypographyH4 className="my-3 text-lg text-center">{service?.title}</TypographyH4>
            </div>
          ))}
        </div>
      ) : (
        <Alert>
          <InfoIcon className="h-4 w-4" />
          <AlertTitle>Oups!</AlertTitle>
          <AlertDescription>
            No service added yet, please contact the admin.
          </AlertDescription>
        </Alert>
      )}
      <Spacer />
    </section>
  );
};
