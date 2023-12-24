import { PageLayout } from "@/shared/ui/pageLayout/pageLayout";
import { FavoritesPageContainer } from "@/widgets/favoritesPageContainer";

export default function Favorites () {
  return (
    <PageLayout title="Избранное">
      <FavoritesPageContainer />
    </PageLayout>
  );
};