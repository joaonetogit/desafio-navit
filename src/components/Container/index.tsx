import { IChildren } from "@/types/children";

export default function Container({ children }: IChildren) {
  return <div className="container">{children}</div>;
}
