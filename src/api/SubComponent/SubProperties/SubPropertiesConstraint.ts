import type { IfEquals } from "hry-types/src/Any/IfEquals";
import type { IfExtends } from "hry-types/src/Any/IfExtends";
import type { EmptyObject } from "hry-types/src/Misc/EmptyObject";
import type { ComponentDoc } from "../../../common_types/ComponentDoc";
import type { RestorePropertiesDoc } from "../../../common_types/RestorePropertiesDoc";
import type { PropertiesConstraint } from "../../MainComponent/Properties/PropertiesConstraint";

/**
 * @description properties字段约束
 * @returns1
 * TCurrentComponentDoc 为 {}时(即传入的ComponentDoc为any) 返回 PropertiesConstraint<Literal>,
 * @returns2
 * TComponentDoc["properties"]为unknown时 返回 EmptyObject
 * @returns3
 * TComponentDoc["properties"]不为unknown 返回 RestorePropertiesDoc<TComponentDoc["properties"] & {}>
 */
export type SubPropertiesConstraint<TCurrentComponentDoc extends ComponentDoc, Literal> = IfEquals<
  {},
  TCurrentComponentDoc,
  PropertiesConstraint<Literal>,
  IfExtends<
    unknown,
    TCurrentComponentDoc["properties"],
    EmptyObject,
    RestorePropertiesDoc<TCurrentComponentDoc["properties"] & {}>
  >
>;
