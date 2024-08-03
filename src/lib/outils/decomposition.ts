import { exposant } from "./nbr-premier";

export const primeFactors = (n: number) => {
  const factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }

  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }

  if (n > 2) {
    factors.push(n);
  }
  return factors;
};

export const formatFactors = (factors: number[]) => {
  const factorCounts = factors.reduce((acc: any, factor: any) => {
    acc[factor] = (acc[factor] || 0) + 1;
    return acc;
  }, {});

  const formattedFactors = Object.entries(factorCounts)
    .map(
      ([factor, count]) =>
        `${factor}${(count as any) > 1 ? `${exposant(count)}` : ""}`
    )
    .join(" * ");

  return formattedFactors;
};
