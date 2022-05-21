import { TShirt } from "./product/t-shirt";
import { ProductDecorator } from "./product/product-decorator";
import { ProductStampDecorator } from "./product/product-stamp-decorator";

const tShirt = new TShirt();
const decoratorStampTShirt = new ProductStampDecorator(tShirt);
console.log(tShirt.getPrice());
console.log(decoratorStampTShirt.getPrice());
