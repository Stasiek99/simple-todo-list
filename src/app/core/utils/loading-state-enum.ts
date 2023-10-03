import { filter, OperatorFunction } from "rxjs";

export enum LoadingState {
  "INIT" = "INIT",
  "LOADING" = "LOADING",
  "LOADED" = "LOADED",
  "ERROR" = "ERROR",
}


export const equalLoadingState = <T extends LoadingState>(
  source: LoadingState,
  searchedLoadingState: T
): source is T => {
  return (
    source === searchedLoadingState
  );
};

export const includesLoadingStates = <T extends LoadingState>(
  source: T,
  searchedLoadingStates: LoadingState[]
): source is T => {
  return searchedLoadingStates.some((findLoadingState) =>
    equalLoadingState(source, findLoadingState)
  );
};


export const filterLoadingState = <
  SourceLoadingState extends LoadingState,
  SearchedLoadingState extends SourceLoadingState
>(
  searchedLoadingStates: SearchedLoadingState[]
): OperatorFunction<SourceLoadingState, SearchedLoadingState> => {
  return (source$) =>
    source$.pipe(
      filter((value): value is SearchedLoadingState => {
        return includesLoadingStates(value, searchedLoadingStates);
      })
    );
};
