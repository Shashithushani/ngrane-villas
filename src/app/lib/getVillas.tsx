import { promises as fs } from "fs";
import path from "path";
import type { Villa } from "../types/Villa";

export async function getVillas(): Promise<Villa[]> {
  const filePath = path.join(process.cwd(), "/src/app/villas.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const villas = JSON.parse(jsonData) as Villa[];

  villas.forEach((element) => {
    element.image = element.media.find((e) => e.isMain)?.url;
    element.image = element.image
      ? element.image
      : "/images/villa-" + element.id + ".jpg";
  });

  return villas;
}
