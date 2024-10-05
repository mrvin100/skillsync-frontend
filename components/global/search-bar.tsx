"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils"
import { Spacer, AppContainer } from "@/components/global";
import { AlignLeftIcon, Check, ChevronsUpDown, SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Service } from "@/helpers/service.model";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SearchSchema = z.object({
  searchTerm: z.string().min(2, {
    message: "Search term must be at least 2 characters.",
  }),
  serviceId: z.string().optional(),
});

type SearchBarProps = {
  className?: string;
};

// This would typically come from an API call
const mockServices: Service[] = [
  { id: "1", image: "/service1.jpg", title: "Web Development" },
  { id: "2", image: "/service2.jpg", title: "Mobile App Development" },
  { id: "3", image: "/service3.jpg", title: "UI/UX Design" },
  // Add more services as needed
];

export const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const [services, setServices] = React.useState<Service[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const form = useForm<z.infer<typeof SearchSchema>>({
    resolver: zodResolver(SearchSchema),
    defaultValues: {
      searchTerm: "",
      serviceId: "",
    },
  });

  React.useEffect(() => {
    // Simulate API call to fetch initial services
    const fetchServices = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setServices(mockServices);
      } catch (err) {
        setError("Failled to fetch services. Please try again.");
        console.log(" error when fetch services : ", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchServices();
  }, []);

  function onSubmit(data: z.infer<typeof SearchSchema>) {
    console.log("Search form data:", data);
    // Here you would typically navigate to a search results page or update the current page
    // router.push(`/search?term=${data.searchTerm}&service=${data.serviceId}`);
  }

  const handleServiceSelect = (serviceId: string) => {
    form.setValue("serviceId", serviceId);
    setOpen(false);
    const selectedService = services.find(
      (service) => service.id === serviceId
    );
    console.log("Selected service:", selectedService);
  };

  // This function would typically be an API call
  const searchServices = (term: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const filtered = mockServices.filter((service) =>
        service.title.toLowerCase().includes(term.toLowerCase())
      );
      setServices(filtered);
    } catch (err) {
      setError("Failed to search services. Please try again.");
      console.log(" error when search services : ", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("", className)}>
      <Spacer small />
      <AppContainer>
        <Button
          className="text-primary-foreground text-lg"
          variant="link"
          onClick={() => router.back()}
        >
          <AlignLeftIcon className="h-6 w-6 mr-2" /> Back
        </Button>
        <Spacer tooSmall />
        <div className="">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <div className="relative w-full sm:w-auto sm:flex-grow">
                <FormField
                  control={form.control}
                  name="searchTerm"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Input
                          placeholder="Search for services..."
                          {...field}
                          className="h-14 pr-12"
                          onChange={(e) => {
                            field.onChange(e);
                            searchServices(e.target.value);
                          }}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  size="icon"
                  variant="secondary"
                  className="absolute right-0 top-0 h-14"
                >
                  <SearchIcon className="w-6 h-6" />
                </Button>
              </div>
              <FormField
                control={form.control}
                name="serviceId"
                render={({ field }) => (
                  <FormItem className="w-full sm:w-auto">
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-full sm:w-[250px] h-14 justify-between"
                        >
                          {field.value && services.length > 0
                            ? services.find(
                                (service) => service.id === field.value
                              )?.title ?? "Select service..."
                            : "Select service..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full sm:w-[250px] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search service..."
                            onValueChange={searchServices}
                          />
                          <CommandEmpty>
                            {isLoading
                              ? "Loading..."
                              : error ?? "No service found."}
                          </CommandEmpty>
                          <CommandGroup>
                            {services.map((service) => (
                              <CommandItem
                                key={service.id}
                                value={service.title}
                                onSelect={() => handleServiceSelect(service.id)}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    field.value === service.id
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {service.title}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <Spacer small />
        <div className="text-center">
          <Button
            variant="link"
            className="text-primary-foreground text-lg underline"
            onClick={() => {
              form.reset();
              setServices(mockServices);
            }}
          >
            Clear all filters
          </Button>
        </div>
        <Spacer tooSmall />
      </AppContainer>
    </div>
  );
};
