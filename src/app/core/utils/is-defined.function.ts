import { filter, OperatorFunction } from "rxjs";

export const isDefined = <T>(value: T | undefined | null): value is T => {
  return value !== undefined && value !== null;
};

export const filterNill = <T>(): OperatorFunction<T | undefined | null, T> => {
  return (source$) =>
    source$.pipe(
      filter((value): value is T => {
        return isDefined(value);
      })
    );
};
