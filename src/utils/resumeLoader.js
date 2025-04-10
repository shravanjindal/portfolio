import fs from "fs";
import path from "path";
import pdf from "pdf-parse";

let dataBuffer = fs.readFileSync(
  path.join(process.cwd(), "public", "resume.pdf")
);
let cachedResume = null;

export async function resumeLoader() {
  if (cachedResume) {
    return cachedResume;
  }

  try {
    const data = await pdf(dataBuffer);
    cachedResume = data.text;
    console.log(cachedResume);
    return cachedResume;
  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw error;
  }
}
