import { App } from "@/features/App";
import { Header } from "@/components/Header";
import { Center } from "@/components/Center";

export default function Page() {
  return (
    <>
      <Header></Header>
      <Center>
        <App></App>
      </Center>
    </>
  );
}
