import { MatchMetaProvider } from "@/context/match-meta/MatchMetaProvider";
import { MatchStateProvider } from "@/context/match-state/MatchStateProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <MatchMetaProvider>
      <MatchStateProvider>{children}</MatchStateProvider>
    </MatchMetaProvider>
  );
};
