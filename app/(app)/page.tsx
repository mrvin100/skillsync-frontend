import { AppContainer } from "@/components/global/app-container";
import { HomeSearchForm, HomeServices } from "@/components/home";

export default function Home() {
  return (
    <>
      <AppContainer>
        <HomeSearchForm className="max-w-2xl mx-auto" />
        <HomeServices />
      </AppContainer>
    </>
  );
}
