type primitive = string | number | boolean | undefined | null
type DeepReadonlyConditionType<T> = T extends primitive ? T : DeepReadonly<T>
export type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonlyConditionType<T[P]>
}
