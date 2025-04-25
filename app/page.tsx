import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" flex justify-between gap-2 flex-col m-10 ">
      <Button variant={'elevated'}>
        Hello
      </Button>
      <Input placeholder="Hello " />
      <Progress value={50} />
      <Textarea />
      <Checkbox />
    </div>
  );
}
