import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const dexRoot = join(root, "dex");

const expectedLayers = [
  "01_values",
  "02_principles",
  "03_policy",
  "04_process",
  "05_procedure",
  "06_pattern",
];

const failures = [];

function filesIn(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .map((name) => join(dir, name))
    .filter((path) => statSync(path).isFile());
}

function assert(condition, message) {
  if (!condition) failures.push(message);
}

assert(existsSync(dexRoot), "Missing dex/ corpus directory.");

for (const layer of expectedLayers) {
  const layerRoot = join(dexRoot, layer);
  assert(existsSync(layerRoot), `Missing layer: ${layer}`);

  const plan = filesIn(join(layerRoot, "plan"));
  const mve = filesIn(join(layerRoot, "mve"));
  const execute = filesIn(join(layerRoot, "execute"));

  assert(plan.length === 8, `${layer}: expected 8 plan files, found ${plan.length}.`);
  assert(mve.length === 3, `${layer}: expected 3 MVE files, found ${mve.length}.`);
  assert(execute.length === 8, `${layer}: expected 8 execute files, found ${execute.length}.`);

  for (const file of [...plan, ...mve, ...execute]) {
    const content = readFileSync(file, "utf8").trim();
    assert(content.length > 0, `Empty file: ${file}`);
  }
}

for (const required of ["README.md", "DEXFILTER.md", "REDUCTION_BY_ADDITION.md", "BUILD_REPORT.md"]) {
  assert(existsSync(join(root, required)), `Missing root document: ${required}`);
}

if (failures.length > 0) {
  console.error("DexSpine validation failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("DexSpine validation passed: 6 layers, 8:3:8 structure intact.");

