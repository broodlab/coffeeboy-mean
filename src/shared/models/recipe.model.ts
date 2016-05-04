export interface IRecipe {

  name: string;
  coffeeBeanMl ?: number;
  milkMl ?: number;
  milkFrothMl ?: number;
  sugarMl ?: number;
  waterMl ?: number;
}

//export class CoffeeRecipe implements ICoffeeRecipe {

//constructor(private _name ?: string,
//            private _coffeeBeanMl ?: number,
//            private _milkMl ?: number,
//            private _milkFrothMl ?: number,
//            private _sugarMl ?: number,
//            private _waterMl ?: number) {
//}
//
//name(name ?: string): string {
//  if (arguments.length === 1) {
//    this._name = name;
//  }
//  return this._name;
//}
//
//coffeeBeanMl(coffeeBeanMl ?: number): number {
//  if (arguments.length === 1) {
//    this._coffeeBeanMl = coffeeBeanMl;
//  }
//  return this._coffeeBeanMl;
//}
//
//milkMl(milkMl ?: number): number {
//  if (arguments.length === 1) {
//    this._milkMl = milkMl;
//  }
//  return this._milkMl;
//}
//
//milkFrothMl(milkFrothMl ?: number): number {
//  if (arguments.length === 1) {
//    this._milkFrothMl = milkFrothMl;
//  }
//  return this._milkFrothMl;
//}
//
//sugarMl(sugarMl ?: number): number {
//  if (arguments.length === 1) {
//    this._sugarMl = sugarMl;
//  }
//  return this._sugarMl;
//}
//
//waterMl(waterMl ?: number): number {
//  if (arguments.length === 1) {
//    this._waterMl = waterMl;
//  }
//  return this._waterMl;
//}
//
//fromJson(coffeeRecipeJson: ICoffeeRecipe): CoffeeRecipe {
//  return new CoffeeRecipe(coffeeRecipeJson.name,
//    coffeeRecipeJson.coffeeBeanMl,
//    coffeeRecipeJson.milkMl,
//    coffeeRecipeJson.milkFrothMl,
//    coffeeRecipeJson.sugarMl,
//    coffeeRecipeJson.waterMl);
//}
//}
