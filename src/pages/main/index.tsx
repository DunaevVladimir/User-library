import { Input } from "@/shared/ui/input/input";
import { BookList } from "@/widgets/bookList";

export default function Main() {
  return (
    <>
      <Input onChange={() => {}} type="search" theme="Small"/>
      <BookList />
    </>
  );
};