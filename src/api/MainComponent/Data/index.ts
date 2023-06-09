import type { V } from "hry-types";

import type { DataConstraint } from "./DataConstraint";

export type Data<TData extends DataConstraint, TProperties> = {
  data?:
    & TData
    & V.DuplicateFieldValidator<TData, keyof TProperties, "与properties字段重复">;
};
