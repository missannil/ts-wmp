import type { NoInfer } from "hry-types/src/Generic/NoInfer";

export type Watch<T extends object> = {
  watch?:
    & NoInfer<
      & {
        [k in keyof T]?: (newValue: T[k], oldValue: T[k]) => void;
      }
      // 有副作用 解决一些报错
      & {
        // 为数组加和对象加 **  JSON.stringify 判断
        [k in keyof T as T[k] extends object ? `${k & string}.**` : never]?: (
          newValue: T[k],
          oldValue: T[k],
        ) => void;
      }
    >
    // 解决WatchData中有对象字段时,单独watch计算字段报错的问题 watch test #1111
    & { [k in string as k extends keyof T ? k : never]: unknown };
};
