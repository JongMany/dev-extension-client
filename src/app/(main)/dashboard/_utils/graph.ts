const findDuplicateElementIndex = (deps: string[][]) => {
  if (deps.length === 0) return -1;
  let minLength = Math.min(...deps.map((depArr) => depArr.length));
  let prefixLength = 0;

  for (let i = 0; i < minLength; i++) {
    let value = deps[0][i];
    if (deps.every((arr) => arr[i] === value)) {
      prefixLength++;
    } else {
      break;
    }
  }
  return prefixLength;
};

export const filterDuplicatedDependencies = (deps: string[][]) => {
  const prefixLength = findDuplicateElementIndex(deps);
  return deps.map((dep) => dep.slice(prefixLength));
};

type Category = {
  name: string;
};
type Link = {
  source: string;
  target: string;
};
type Node = {
  id: string;
  name: string;
  category: number;
};

export const makeDepsGraphLinkAndNode = (deps: string[][]) => {
  const nodes: Node[] = [];
  const links: Link[] = [];
  const categories: Category[] = [];
  const categoryIndexMap = {} as Record<string, number>;

  deps.forEach((dep, index) => {
    const category = dep[0];
    if (!categoryIndexMap[category]) {
      categoryIndexMap[category] = categories.length;
      categories.push({ name: category });
    }

    deps[index].forEach((value, i) => {
      let nodeName = `Node${index}_${i}`;
      nodes.push({
        id: nodeName,
        name: value,
        category: categoryIndexMap[category],
      });

      if (i > 0) {
        links.push({
          source: `Node${index}_${i - 1}`,
          target: nodeName,
        });
      }
    });
  });

  return {
    nodes,
    links,
    categories,
  };
};
