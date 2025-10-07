export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Michelle Guo";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "myguo";
  }

  if (query.toLowerCase().includes("plus")) {
    // Add the first two integers found in the query (supports negatives)
    const nums = query.match(/-?\d+/g)?.map((n) => parseInt(n, 10)) || [];
    if (nums.length >= 2) {
      return String(nums[0] + nums[1]);
    }
  }
  if (query.toLowerCase().includes("largest")) {
    // Return the largest of the first three integers found in the query
    const nums = query.match(/-?\d+/g)?.map((n) => parseInt(n, 10)) || [];
    if (nums.length >= 3) {
      const [a, b, c] = nums;
      return String(Math.max(a, b, c));
    }
  }
  return "";
}
