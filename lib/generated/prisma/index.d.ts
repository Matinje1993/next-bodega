
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Brand
 * 
 */
export type Brand = $Result.DefaultSelection<Prisma.$BrandPayload>
/**
 * Model CategoryOnProduct
 * 
 */
export type CategoryOnProduct = $Result.DefaultSelection<Prisma.$CategoryOnProductPayload>
/**
 * Model DeliveryFee
 * 
 */
export type DeliveryFee = $Result.DefaultSelection<Prisma.$DeliveryFeePayload>
/**
 * Model Price
 * 
 */
export type Price = $Result.DefaultSelection<Prisma.$PricePayload>
/**
 * Model Discount
 * 
 */
export type Discount = $Result.DefaultSelection<Prisma.$DiscountPayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>
/**
 * Model Stock
 * 
 */
export type Stock = $Result.DefaultSelection<Prisma.$StockPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model Links
 * 
 */
export type Links = $Result.DefaultSelection<Prisma.$LinksPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brand`: Exposes CRUD operations for the **Brand** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brand.findMany()
    * ```
    */
  get brand(): Prisma.BrandDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryOnProduct`: Exposes CRUD operations for the **CategoryOnProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryOnProducts
    * const categoryOnProducts = await prisma.categoryOnProduct.findMany()
    * ```
    */
  get categoryOnProduct(): Prisma.CategoryOnProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryFee`: Exposes CRUD operations for the **DeliveryFee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryFees
    * const deliveryFees = await prisma.deliveryFee.findMany()
    * ```
    */
  get deliveryFee(): Prisma.DeliveryFeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.price`: Exposes CRUD operations for the **Price** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prices
    * const prices = await prisma.price.findMany()
    * ```
    */
  get price(): Prisma.PriceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discount`: Exposes CRUD operations for the **Discount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discounts
    * const discounts = await prisma.discount.findMany()
    * ```
    */
  get discount(): Prisma.DiscountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock`: Exposes CRUD operations for the **Stock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stock.findMany()
    * ```
    */
  get stock(): Prisma.StockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.links`: Exposes CRUD operations for the **Links** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Links
    * const links = await prisma.links.findMany()
    * ```
    */
  get links(): Prisma.LinksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Category: 'Category',
    Product: 'Product',
    Brand: 'Brand',
    CategoryOnProduct: 'CategoryOnProduct',
    DeliveryFee: 'DeliveryFee',
    Price: 'Price',
    Discount: 'Discount',
    Offer: 'Offer',
    Stock: 'Stock',
    Unit: 'Unit',
    Links: 'Links',
    Availability: 'Availability'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "product" | "brand" | "categoryOnProduct" | "deliveryFee" | "price" | "discount" | "offer" | "stock" | "unit" | "links" | "availability"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Brand: {
        payload: Prisma.$BrandPayload<ExtArgs>
        fields: Prisma.BrandFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findFirst: {
            args: Prisma.BrandFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          findMany: {
            args: Prisma.BrandFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          create: {
            args: Prisma.BrandCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          createMany: {
            args: Prisma.BrandCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          delete: {
            args: Prisma.BrandDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          update: {
            args: Prisma.BrandUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          deleteMany: {
            args: Prisma.BrandDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>[]
          }
          upsert: {
            args: Prisma.BrandUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandPayload>
          }
          aggregate: {
            args: Prisma.BrandAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrand>
          }
          groupBy: {
            args: Prisma.BrandGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandCountArgs<ExtArgs>
            result: $Utils.Optional<BrandCountAggregateOutputType> | number
          }
        }
      }
      CategoryOnProduct: {
        payload: Prisma.$CategoryOnProductPayload<ExtArgs>
        fields: Prisma.CategoryOnProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryOnProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryOnProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          findFirst: {
            args: Prisma.CategoryOnProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryOnProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          findMany: {
            args: Prisma.CategoryOnProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>[]
          }
          create: {
            args: Prisma.CategoryOnProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          createMany: {
            args: Prisma.CategoryOnProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryOnProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>[]
          }
          delete: {
            args: Prisma.CategoryOnProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          update: {
            args: Prisma.CategoryOnProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          deleteMany: {
            args: Prisma.CategoryOnProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryOnProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryOnProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>[]
          }
          upsert: {
            args: Prisma.CategoryOnProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryOnProductPayload>
          }
          aggregate: {
            args: Prisma.CategoryOnProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryOnProduct>
          }
          groupBy: {
            args: Prisma.CategoryOnProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryOnProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryOnProductCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryOnProductCountAggregateOutputType> | number
          }
        }
      }
      DeliveryFee: {
        payload: Prisma.$DeliveryFeePayload<ExtArgs>
        fields: Prisma.DeliveryFeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryFeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryFeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryFeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryFeePayload>
          }
          findFirst: {
            args: Prisma.DeliveryFeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryFeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryFeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryFeePayload>
          }
          findMany: {
            args: Prisma.DeliveryFeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryFeePayload>[]
          }
          create: {
            args: Prisma.DeliveryFeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryFeePayload>
          }
          createMany: {
            args: Prisma.DeliveryFeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryFeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryFeePayload>[]
          }
          delete: {
            args: Prisma.DeliveryFeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryFeePayload>
          }
          update: {
            args: Prisma.DeliveryFeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryFeePayload>
          }
          deleteMany: {
            args: Prisma.DeliveryFeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryFeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryFeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryFeePayload>[]
          }
          upsert: {
            args: Prisma.DeliveryFeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryFeePayload>
          }
          aggregate: {
            args: Prisma.DeliveryFeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryFee>
          }
          groupBy: {
            args: Prisma.DeliveryFeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryFeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryFeeCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryFeeCountAggregateOutputType> | number
          }
        }
      }
      Price: {
        payload: Prisma.$PricePayload<ExtArgs>
        fields: Prisma.PriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findFirst: {
            args: Prisma.PriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          findMany: {
            args: Prisma.PriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          create: {
            args: Prisma.PriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          createMany: {
            args: Prisma.PriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          delete: {
            args: Prisma.PriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          update: {
            args: Prisma.PriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          deleteMany: {
            args: Prisma.PriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PriceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>[]
          }
          upsert: {
            args: Prisma.PriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PricePayload>
          }
          aggregate: {
            args: Prisma.PriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrice>
          }
          groupBy: {
            args: Prisma.PriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceCountArgs<ExtArgs>
            result: $Utils.Optional<PriceCountAggregateOutputType> | number
          }
        }
      }
      Discount: {
        payload: Prisma.$DiscountPayload<ExtArgs>
        fields: Prisma.DiscountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findFirst: {
            args: Prisma.DiscountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findMany: {
            args: Prisma.DiscountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          create: {
            args: Prisma.DiscountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          createMany: {
            args: Prisma.DiscountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          delete: {
            args: Prisma.DiscountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          update: {
            args: Prisma.DiscountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          deleteMany: {
            args: Prisma.DiscountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          upsert: {
            args: Prisma.DiscountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          aggregate: {
            args: Prisma.DiscountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscount>
          }
          groupBy: {
            args: Prisma.DiscountGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscountCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      Stock: {
        payload: Prisma.$StockPayload<ExtArgs>
        fields: Prisma.StockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findFirst: {
            args: Prisma.StockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          findMany: {
            args: Prisma.StockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          create: {
            args: Prisma.StockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          createMany: {
            args: Prisma.StockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          delete: {
            args: Prisma.StockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          update: {
            args: Prisma.StockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          deleteMany: {
            args: Prisma.StockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>[]
          }
          upsert: {
            args: Prisma.StockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockPayload>
          }
          aggregate: {
            args: Prisma.StockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock>
          }
          groupBy: {
            args: Prisma.StockGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockCountArgs<ExtArgs>
            result: $Utils.Optional<StockCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      Links: {
        payload: Prisma.$LinksPayload<ExtArgs>
        fields: Prisma.LinksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinksPayload>
          }
          findFirst: {
            args: Prisma.LinksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinksPayload>
          }
          findMany: {
            args: Prisma.LinksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinksPayload>[]
          }
          create: {
            args: Prisma.LinksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinksPayload>
          }
          createMany: {
            args: Prisma.LinksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinksPayload>[]
          }
          delete: {
            args: Prisma.LinksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinksPayload>
          }
          update: {
            args: Prisma.LinksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinksPayload>
          }
          deleteMany: {
            args: Prisma.LinksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinksPayload>[]
          }
          upsert: {
            args: Prisma.LinksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinksPayload>
          }
          aggregate: {
            args: Prisma.LinksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinks>
          }
          groupBy: {
            args: Prisma.LinksGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinksGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinksCountArgs<ExtArgs>
            result: $Utils.Optional<LinksCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    product?: ProductOmit
    brand?: BrandOmit
    categoryOnProduct?: CategoryOnProductOmit
    deliveryFee?: DeliveryFeeOmit
    price?: PriceOmit
    discount?: DiscountOmit
    offer?: OfferOmit
    stock?: StockOmit
    unit?: UnitOmit
    links?: LinksOmit
    availability?: AvailabilityOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    children: number
    CategoryOnProduct: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | CategoryCountOutputTypeCountChildrenArgs
    CategoryOnProduct?: boolean | CategoryCountOutputTypeCountCategoryOnProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCategoryOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryOnProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    category: number
    offers: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | ProductCountOutputTypeCountCategoryArgs
    offers?: boolean | ProductCountOutputTypeCountOffersArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryOnProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }


  /**
   * Count Type BrandCountOutputType
   */

  export type BrandCountOutputType = {
    products: number
  }

  export type BrandCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandCountOutputType
     */
    select?: BrandCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandCountOutputType without action
   */
  export type BrandCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type PriceCountOutputType
   */

  export type PriceCountOutputType = {
    Product: number
  }

  export type PriceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Product?: boolean | PriceCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * PriceCountOutputType without action
   */
  export type PriceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceCountOutputType
     */
    select?: PriceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PriceCountOutputType without action
   */
  export type PriceCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type DiscountCountOutputType
   */

  export type DiscountCountOutputType = {
    Price: number
  }

  export type DiscountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Price?: boolean | DiscountCountOutputTypeCountPriceArgs
  }

  // Custom InputTypes
  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCountOutputType
     */
    select?: DiscountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeCountPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    products: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | UnitCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    store: number | null
    level: number | null
    count: number | null
    score: number | null
  }

  export type CategorySumAggregateOutputType = {
    store: number | null
    level: number | null
    count: number | null
    score: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    key: string | null
    name: string | null
    title: string | null
    url: string | null
    parentId: string | null
    image: string | null
    store: number | null
    nameAr: string | null
    nameKa: string | null
    mediaWeb: string | null
    mediaMobile: string | null
    mediaWebAr: string | null
    mediaMobileAr: string | null
    mediaWebKa: string | null
    mediaMobileKa: string | null
    ctaUrl: string | null
    bgColor: string | null
    bg_color: string | null
    thumbnail: string | null
    level: number | null
    count: number | null
    facetName: string | null
    index: string | null
    score: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    key: string | null
    name: string | null
    title: string | null
    url: string | null
    parentId: string | null
    image: string | null
    store: number | null
    nameAr: string | null
    nameKa: string | null
    mediaWeb: string | null
    mediaMobile: string | null
    mediaWebAr: string | null
    mediaMobileAr: string | null
    mediaWebKa: string | null
    mediaMobileKa: string | null
    ctaUrl: string | null
    bgColor: string | null
    bg_color: string | null
    thumbnail: string | null
    level: number | null
    count: number | null
    facetName: string | null
    index: string | null
    score: number | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    storeId: number
    key: number
    name: number
    title: number
    url: number
    parentId: number
    image: number
    store: number
    nameAr: number
    nameKa: number
    mediaWeb: number
    mediaMobile: number
    mediaWebAr: number
    mediaMobileAr: number
    mediaWebKa: number
    mediaMobileKa: number
    ctaUrl: number
    bgColor: number
    bg_color: number
    thumbnail: number
    level: number
    count: number
    facetName: number
    index: number
    score: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    store?: true
    level?: true
    count?: true
    score?: true
  }

  export type CategorySumAggregateInputType = {
    store?: true
    level?: true
    count?: true
    score?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    storeId?: true
    key?: true
    name?: true
    title?: true
    url?: true
    parentId?: true
    image?: true
    store?: true
    nameAr?: true
    nameKa?: true
    mediaWeb?: true
    mediaMobile?: true
    mediaWebAr?: true
    mediaMobileAr?: true
    mediaWebKa?: true
    mediaMobileKa?: true
    ctaUrl?: true
    bgColor?: true
    bg_color?: true
    thumbnail?: true
    level?: true
    count?: true
    facetName?: true
    index?: true
    score?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    storeId?: true
    key?: true
    name?: true
    title?: true
    url?: true
    parentId?: true
    image?: true
    store?: true
    nameAr?: true
    nameKa?: true
    mediaWeb?: true
    mediaMobile?: true
    mediaWebAr?: true
    mediaMobileAr?: true
    mediaWebKa?: true
    mediaMobileKa?: true
    ctaUrl?: true
    bgColor?: true
    bg_color?: true
    thumbnail?: true
    level?: true
    count?: true
    facetName?: true
    index?: true
    score?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    storeId?: true
    key?: true
    name?: true
    title?: true
    url?: true
    parentId?: true
    image?: true
    store?: true
    nameAr?: true
    nameKa?: true
    mediaWeb?: true
    mediaMobile?: true
    mediaWebAr?: true
    mediaMobileAr?: true
    mediaWebKa?: true
    mediaMobileKa?: true
    ctaUrl?: true
    bgColor?: true
    bg_color?: true
    thumbnail?: true
    level?: true
    count?: true
    facetName?: true
    index?: true
    score?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    storeId: string | null
    key: string | null
    name: string | null
    title: string | null
    url: string | null
    parentId: string | null
    image: string | null
    store: number | null
    nameAr: string | null
    nameKa: string | null
    mediaWeb: string | null
    mediaMobile: string | null
    mediaWebAr: string | null
    mediaMobileAr: string | null
    mediaWebKa: string | null
    mediaMobileKa: string | null
    ctaUrl: string | null
    bgColor: string | null
    bg_color: string | null
    thumbnail: string | null
    level: number | null
    count: number | null
    facetName: string | null
    index: string | null
    score: number | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    key?: boolean
    name?: boolean
    title?: boolean
    url?: boolean
    parentId?: boolean
    image?: boolean
    store?: boolean
    nameAr?: boolean
    nameKa?: boolean
    mediaWeb?: boolean
    mediaMobile?: boolean
    mediaWebAr?: boolean
    mediaMobileAr?: boolean
    mediaWebKa?: boolean
    mediaMobileKa?: boolean
    ctaUrl?: boolean
    bgColor?: boolean
    bg_color?: boolean
    thumbnail?: boolean
    level?: boolean
    count?: boolean
    facetName?: boolean
    index?: boolean
    score?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    CategoryOnProduct?: boolean | Category$CategoryOnProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    key?: boolean
    name?: boolean
    title?: boolean
    url?: boolean
    parentId?: boolean
    image?: boolean
    store?: boolean
    nameAr?: boolean
    nameKa?: boolean
    mediaWeb?: boolean
    mediaMobile?: boolean
    mediaWebAr?: boolean
    mediaMobileAr?: boolean
    mediaWebKa?: boolean
    mediaMobileKa?: boolean
    ctaUrl?: boolean
    bgColor?: boolean
    bg_color?: boolean
    thumbnail?: boolean
    level?: boolean
    count?: boolean
    facetName?: boolean
    index?: boolean
    score?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    key?: boolean
    name?: boolean
    title?: boolean
    url?: boolean
    parentId?: boolean
    image?: boolean
    store?: boolean
    nameAr?: boolean
    nameKa?: boolean
    mediaWeb?: boolean
    mediaMobile?: boolean
    mediaWebAr?: boolean
    mediaMobileAr?: boolean
    mediaWebKa?: boolean
    mediaMobileKa?: boolean
    ctaUrl?: boolean
    bgColor?: boolean
    bg_color?: boolean
    thumbnail?: boolean
    level?: boolean
    count?: boolean
    facetName?: boolean
    index?: boolean
    score?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    storeId?: boolean
    key?: boolean
    name?: boolean
    title?: boolean
    url?: boolean
    parentId?: boolean
    image?: boolean
    store?: boolean
    nameAr?: boolean
    nameKa?: boolean
    mediaWeb?: boolean
    mediaMobile?: boolean
    mediaWebAr?: boolean
    mediaMobileAr?: boolean
    mediaWebKa?: boolean
    mediaMobileKa?: boolean
    ctaUrl?: boolean
    bgColor?: boolean
    bg_color?: boolean
    thumbnail?: boolean
    level?: boolean
    count?: boolean
    facetName?: boolean
    index?: boolean
    score?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "key" | "name" | "title" | "url" | "parentId" | "image" | "store" | "nameAr" | "nameKa" | "mediaWeb" | "mediaMobile" | "mediaWebAr" | "mediaMobileAr" | "mediaWebKa" | "mediaMobileKa" | "ctaUrl" | "bgColor" | "bg_color" | "thumbnail" | "level" | "count" | "facetName" | "index" | "score", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    CategoryOnProduct?: boolean | Category$CategoryOnProductArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      children: Prisma.$CategoryPayload<ExtArgs>[]
      CategoryOnProduct: Prisma.$CategoryOnProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string | null
      key: string | null
      name: string | null
      title: string | null
      url: string | null
      parentId: string | null
      image: string | null
      store: number | null
      nameAr: string | null
      nameKa: string | null
      mediaWeb: string | null
      mediaMobile: string | null
      mediaWebAr: string | null
      mediaMobileAr: string | null
      mediaWebKa: string | null
      mediaMobileKa: string | null
      ctaUrl: string | null
      bgColor: string | null
      bg_color: string | null
      thumbnail: string | null
      level: number | null
      count: number | null
      facetName: string | null
      index: string | null
      score: number | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Category$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Category$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CategoryOnProduct<T extends Category$CategoryOnProductArgs<ExtArgs> = {}>(args?: Subset<T, Category$CategoryOnProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly storeId: FieldRef<"Category", 'String'>
    readonly key: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly title: FieldRef<"Category", 'String'>
    readonly url: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'String'>
    readonly store: FieldRef<"Category", 'Int'>
    readonly nameAr: FieldRef<"Category", 'String'>
    readonly nameKa: FieldRef<"Category", 'String'>
    readonly mediaWeb: FieldRef<"Category", 'String'>
    readonly mediaMobile: FieldRef<"Category", 'String'>
    readonly mediaWebAr: FieldRef<"Category", 'String'>
    readonly mediaMobileAr: FieldRef<"Category", 'String'>
    readonly mediaWebKa: FieldRef<"Category", 'String'>
    readonly mediaMobileKa: FieldRef<"Category", 'String'>
    readonly ctaUrl: FieldRef<"Category", 'String'>
    readonly bgColor: FieldRef<"Category", 'String'>
    readonly bg_color: FieldRef<"Category", 'String'>
    readonly thumbnail: FieldRef<"Category", 'String'>
    readonly level: FieldRef<"Category", 'Int'>
    readonly count: FieldRef<"Category", 'Int'>
    readonly facetName: FieldRef<"Category", 'String'>
    readonly index: FieldRef<"Category", 'String'>
    readonly score: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.children
   */
  export type Category$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.CategoryOnProduct
   */
  export type Category$CategoryOnProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    where?: CategoryOnProductWhereInput
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    cursor?: CategoryOnProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryOnProductScalarFieldEnum | CategoryOnProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    availabilityId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    availabilityId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    ean: string | null
    name: string | null
    type: string | null
    preorder: boolean | null
    isExpress: boolean | null
    productOrigin: string | null
    supplier: string | null
    isBulk: boolean | null
    bulkMessage: string | null
    isScalable: boolean | null
    size: string | null
    isFBC: boolean | null
    isMarketPlace: boolean | null
    foodType: string | null
    productCategoriesHearchi: string | null
    soldByWeight: boolean | null
    isRecommendable: boolean | null
    brandId: string | null
    priceId: string | null
    stockId: string | null
    unitId: string | null
    linksId: string | null
    availabilityId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    ean: string | null
    name: string | null
    type: string | null
    preorder: boolean | null
    isExpress: boolean | null
    productOrigin: string | null
    supplier: string | null
    isBulk: boolean | null
    bulkMessage: string | null
    isScalable: boolean | null
    size: string | null
    isFBC: boolean | null
    isMarketPlace: boolean | null
    foodType: string | null
    productCategoriesHearchi: string | null
    soldByWeight: boolean | null
    isRecommendable: boolean | null
    brandId: string | null
    priceId: string | null
    stockId: string | null
    unitId: string | null
    linksId: string | null
    availabilityId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    ean: number
    name: number
    type: number
    preorder: number
    isExpress: number
    productOrigin: number
    supplier: number
    isBulk: number
    bulkMessage: number
    isScalable: number
    size: number
    isFBC: number
    isMarketPlace: number
    foodType: number
    productCategoriesHearchi: number
    soldByWeight: number
    isRecommendable: number
    brandId: number
    priceId: number
    stockId: number
    unitId: number
    promoVoucher: number
    promoBadges: number
    amendableOrders: number
    servingIntents: number
    availableVariants: number
    variants: number
    linksId: number
    availabilityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    availabilityId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    availabilityId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    ean?: true
    name?: true
    type?: true
    preorder?: true
    isExpress?: true
    productOrigin?: true
    supplier?: true
    isBulk?: true
    bulkMessage?: true
    isScalable?: true
    size?: true
    isFBC?: true
    isMarketPlace?: true
    foodType?: true
    productCategoriesHearchi?: true
    soldByWeight?: true
    isRecommendable?: true
    brandId?: true
    priceId?: true
    stockId?: true
    unitId?: true
    linksId?: true
    availabilityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    ean?: true
    name?: true
    type?: true
    preorder?: true
    isExpress?: true
    productOrigin?: true
    supplier?: true
    isBulk?: true
    bulkMessage?: true
    isScalable?: true
    size?: true
    isFBC?: true
    isMarketPlace?: true
    foodType?: true
    productCategoriesHearchi?: true
    soldByWeight?: true
    isRecommendable?: true
    brandId?: true
    priceId?: true
    stockId?: true
    unitId?: true
    linksId?: true
    availabilityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    ean?: true
    name?: true
    type?: true
    preorder?: true
    isExpress?: true
    productOrigin?: true
    supplier?: true
    isBulk?: true
    bulkMessage?: true
    isScalable?: true
    size?: true
    isFBC?: true
    isMarketPlace?: true
    foodType?: true
    productCategoriesHearchi?: true
    soldByWeight?: true
    isRecommendable?: true
    brandId?: true
    priceId?: true
    stockId?: true
    unitId?: true
    promoVoucher?: true
    promoBadges?: true
    amendableOrders?: true
    servingIntents?: true
    availableVariants?: true
    variants?: true
    linksId?: true
    availabilityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId: string | null
    priceId: string
    stockId: string
    unitId: string
    promoVoucher: JsonValue | null
    promoBadges: JsonValue[]
    amendableOrders: JsonValue[]
    servingIntents: string[]
    availableVariants: JsonValue[]
    variants: JsonValue[]
    linksId: string
    availabilityId: number | null
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ean?: boolean
    name?: boolean
    type?: boolean
    preorder?: boolean
    isExpress?: boolean
    productOrigin?: boolean
    supplier?: boolean
    isBulk?: boolean
    bulkMessage?: boolean
    isScalable?: boolean
    size?: boolean
    isFBC?: boolean
    isMarketPlace?: boolean
    foodType?: boolean
    productCategoriesHearchi?: boolean
    soldByWeight?: boolean
    isRecommendable?: boolean
    brandId?: boolean
    priceId?: boolean
    stockId?: boolean
    unitId?: boolean
    promoVoucher?: boolean
    promoBadges?: boolean
    amendableOrders?: boolean
    servingIntents?: boolean
    availableVariants?: boolean
    variants?: boolean
    linksId?: boolean
    availabilityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | Product$brandArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    deliveryFees?: boolean | Product$deliveryFeesArgs<ExtArgs>
    price?: boolean | PriceDefaultArgs<ExtArgs>
    offers?: boolean | Product$offersArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    links?: boolean | LinksDefaultArgs<ExtArgs>
    availability?: boolean | Product$availabilityArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ean?: boolean
    name?: boolean
    type?: boolean
    preorder?: boolean
    isExpress?: boolean
    productOrigin?: boolean
    supplier?: boolean
    isBulk?: boolean
    bulkMessage?: boolean
    isScalable?: boolean
    size?: boolean
    isFBC?: boolean
    isMarketPlace?: boolean
    foodType?: boolean
    productCategoriesHearchi?: boolean
    soldByWeight?: boolean
    isRecommendable?: boolean
    brandId?: boolean
    priceId?: boolean
    stockId?: boolean
    unitId?: boolean
    promoVoucher?: boolean
    promoBadges?: boolean
    amendableOrders?: boolean
    servingIntents?: boolean
    availableVariants?: boolean
    variants?: boolean
    linksId?: boolean
    availabilityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | Product$brandArgs<ExtArgs>
    price?: boolean | PriceDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    links?: boolean | LinksDefaultArgs<ExtArgs>
    availability?: boolean | Product$availabilityArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ean?: boolean
    name?: boolean
    type?: boolean
    preorder?: boolean
    isExpress?: boolean
    productOrigin?: boolean
    supplier?: boolean
    isBulk?: boolean
    bulkMessage?: boolean
    isScalable?: boolean
    size?: boolean
    isFBC?: boolean
    isMarketPlace?: boolean
    foodType?: boolean
    productCategoriesHearchi?: boolean
    soldByWeight?: boolean
    isRecommendable?: boolean
    brandId?: boolean
    priceId?: boolean
    stockId?: boolean
    unitId?: boolean
    promoVoucher?: boolean
    promoBadges?: boolean
    amendableOrders?: boolean
    servingIntents?: boolean
    availableVariants?: boolean
    variants?: boolean
    linksId?: boolean
    availabilityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | Product$brandArgs<ExtArgs>
    price?: boolean | PriceDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    links?: boolean | LinksDefaultArgs<ExtArgs>
    availability?: boolean | Product$availabilityArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    ean?: boolean
    name?: boolean
    type?: boolean
    preorder?: boolean
    isExpress?: boolean
    productOrigin?: boolean
    supplier?: boolean
    isBulk?: boolean
    bulkMessage?: boolean
    isScalable?: boolean
    size?: boolean
    isFBC?: boolean
    isMarketPlace?: boolean
    foodType?: boolean
    productCategoriesHearchi?: boolean
    soldByWeight?: boolean
    isRecommendable?: boolean
    brandId?: boolean
    priceId?: boolean
    stockId?: boolean
    unitId?: boolean
    promoVoucher?: boolean
    promoBadges?: boolean
    amendableOrders?: boolean
    servingIntents?: boolean
    availableVariants?: boolean
    variants?: boolean
    linksId?: boolean
    availabilityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ean" | "name" | "type" | "preorder" | "isExpress" | "productOrigin" | "supplier" | "isBulk" | "bulkMessage" | "isScalable" | "size" | "isFBC" | "isMarketPlace" | "foodType" | "productCategoriesHearchi" | "soldByWeight" | "isRecommendable" | "brandId" | "priceId" | "stockId" | "unitId" | "promoVoucher" | "promoBadges" | "amendableOrders" | "servingIntents" | "availableVariants" | "variants" | "linksId" | "availabilityId" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | Product$brandArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    deliveryFees?: boolean | Product$deliveryFeesArgs<ExtArgs>
    price?: boolean | PriceDefaultArgs<ExtArgs>
    offers?: boolean | Product$offersArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    links?: boolean | LinksDefaultArgs<ExtArgs>
    availability?: boolean | Product$availabilityArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | Product$brandArgs<ExtArgs>
    price?: boolean | PriceDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    links?: boolean | LinksDefaultArgs<ExtArgs>
    availability?: boolean | Product$availabilityArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | Product$brandArgs<ExtArgs>
    price?: boolean | PriceDefaultArgs<ExtArgs>
    stock?: boolean | StockDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    links?: boolean | LinksDefaultArgs<ExtArgs>
    availability?: boolean | Product$availabilityArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      brand: Prisma.$BrandPayload<ExtArgs> | null
      category: Prisma.$CategoryOnProductPayload<ExtArgs>[]
      deliveryFees: Prisma.$DeliveryFeePayload<ExtArgs> | null
      price: Prisma.$PricePayload<ExtArgs>
      offers: Prisma.$OfferPayload<ExtArgs>[]
      stock: Prisma.$StockPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      links: Prisma.$LinksPayload<ExtArgs>
      availability: Prisma.$AvailabilityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ean: string
      name: string
      type: string
      preorder: boolean
      isExpress: boolean
      productOrigin: string | null
      supplier: string
      isBulk: boolean
      bulkMessage: string
      isScalable: boolean
      size: string | null
      isFBC: boolean
      isMarketPlace: boolean
      foodType: string | null
      productCategoriesHearchi: string
      soldByWeight: boolean
      isRecommendable: boolean
      brandId: string | null
      priceId: string
      stockId: string
      unitId: string
      promoVoucher: Prisma.JsonValue | null
      promoBadges: Prisma.JsonValue[]
      amendableOrders: Prisma.JsonValue[]
      servingIntents: string[]
      availableVariants: Prisma.JsonValue[]
      variants: Prisma.JsonValue[]
      linksId: string
      availabilityId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brand<T extends Product$brandArgs<ExtArgs> = {}>(args?: Subset<T, Product$brandArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deliveryFees<T extends Product$deliveryFeesArgs<ExtArgs> = {}>(args?: Subset<T, Product$deliveryFeesArgs<ExtArgs>>): Prisma__DeliveryFeeClient<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    price<T extends PriceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PriceDefaultArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    offers<T extends Product$offersArgs<ExtArgs> = {}>(args?: Subset<T, Product$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stock<T extends StockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockDefaultArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    links<T extends LinksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LinksDefaultArgs<ExtArgs>>): Prisma__LinksClient<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availability<T extends Product$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, Product$availabilityArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly ean: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly type: FieldRef<"Product", 'String'>
    readonly preorder: FieldRef<"Product", 'Boolean'>
    readonly isExpress: FieldRef<"Product", 'Boolean'>
    readonly productOrigin: FieldRef<"Product", 'String'>
    readonly supplier: FieldRef<"Product", 'String'>
    readonly isBulk: FieldRef<"Product", 'Boolean'>
    readonly bulkMessage: FieldRef<"Product", 'String'>
    readonly isScalable: FieldRef<"Product", 'Boolean'>
    readonly size: FieldRef<"Product", 'String'>
    readonly isFBC: FieldRef<"Product", 'Boolean'>
    readonly isMarketPlace: FieldRef<"Product", 'Boolean'>
    readonly foodType: FieldRef<"Product", 'String'>
    readonly productCategoriesHearchi: FieldRef<"Product", 'String'>
    readonly soldByWeight: FieldRef<"Product", 'Boolean'>
    readonly isRecommendable: FieldRef<"Product", 'Boolean'>
    readonly brandId: FieldRef<"Product", 'String'>
    readonly priceId: FieldRef<"Product", 'String'>
    readonly stockId: FieldRef<"Product", 'String'>
    readonly unitId: FieldRef<"Product", 'String'>
    readonly promoVoucher: FieldRef<"Product", 'Json'>
    readonly promoBadges: FieldRef<"Product", 'Json[]'>
    readonly amendableOrders: FieldRef<"Product", 'Json[]'>
    readonly servingIntents: FieldRef<"Product", 'String[]'>
    readonly availableVariants: FieldRef<"Product", 'Json[]'>
    readonly variants: FieldRef<"Product", 'Json[]'>
    readonly linksId: FieldRef<"Product", 'String'>
    readonly availabilityId: FieldRef<"Product", 'Int'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.brand
   */
  export type Product$brandArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    where?: BrandWhereInput
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    where?: CategoryOnProductWhereInput
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    cursor?: CategoryOnProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryOnProductScalarFieldEnum | CategoryOnProductScalarFieldEnum[]
  }

  /**
   * Product.deliveryFees
   */
  export type Product$deliveryFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeInclude<ExtArgs> | null
    where?: DeliveryFeeWhereInput
  }

  /**
   * Product.offers
   */
  export type Product$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Product.availability
   */
  export type Product$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Brand
   */

  export type AggregateBrand = {
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  export type BrandMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BrandCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BrandMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BrandCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type BrandAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brand to aggregate.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandMaxAggregateInputType
  }

  export type GetBrandAggregateType<T extends BrandAggregateArgs> = {
        [P in keyof T & keyof AggregateBrand]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrand[P]>
      : GetScalarType<T[P], AggregateBrand[P]>
  }




  export type BrandGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandWhereInput
    orderBy?: BrandOrderByWithAggregationInput | BrandOrderByWithAggregationInput[]
    by: BrandScalarFieldEnum[] | BrandScalarFieldEnum
    having?: BrandScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandCountAggregateInputType | true
    _min?: BrandMinAggregateInputType
    _max?: BrandMaxAggregateInputType
  }

  export type BrandGroupByOutputType = {
    id: string
    name: string | null
    _count: BrandCountAggregateOutputType | null
    _min: BrandMinAggregateOutputType | null
    _max: BrandMaxAggregateOutputType | null
  }

  type GetBrandGroupByPayload<T extends BrandGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandGroupByOutputType[P]>
            : GetScalarType<T[P], BrandGroupByOutputType[P]>
        }
      >
    >


  export type BrandSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["brand"]>

  export type BrandSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BrandOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["brand"]>
  export type BrandInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Brand$productsArgs<ExtArgs>
    _count?: boolean | BrandCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brand"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
    }, ExtArgs["result"]["brand"]>
    composites: {}
  }

  type BrandGetPayload<S extends boolean | null | undefined | BrandDefaultArgs> = $Result.GetResult<Prisma.$BrandPayload, S>

  type BrandCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandCountAggregateInputType | true
    }

  export interface BrandDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brand'], meta: { name: 'Brand' } }
    /**
     * Find zero or one Brand that matches the filter.
     * @param {BrandFindUniqueArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandFindUniqueArgs>(args: SelectSubset<T, BrandFindUniqueArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brand that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandFindUniqueOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandFindFirstArgs>(args?: SelectSubset<T, BrandFindFirstArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brand that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindFirstOrThrowArgs} args - Arguments to find a Brand
     * @example
     * // Get one Brand
     * const brand = await prisma.brand.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brand.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brand.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandWithIdOnly = await prisma.brand.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandFindManyArgs>(args?: SelectSubset<T, BrandFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brand.
     * @param {BrandCreateArgs} args - Arguments to create a Brand.
     * @example
     * // Create one Brand
     * const Brand = await prisma.brand.create({
     *   data: {
     *     // ... data to create a Brand
     *   }
     * })
     * 
     */
    create<T extends BrandCreateArgs>(args: SelectSubset<T, BrandCreateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandCreateManyArgs>(args?: SelectSubset<T, BrandCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brand = await prisma.brand.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brand.
     * @param {BrandDeleteArgs} args - Arguments to delete one Brand.
     * @example
     * // Delete one Brand
     * const Brand = await prisma.brand.delete({
     *   where: {
     *     // ... filter to delete one Brand
     *   }
     * })
     * 
     */
    delete<T extends BrandDeleteArgs>(args: SelectSubset<T, BrandDeleteArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brand.
     * @param {BrandUpdateArgs} args - Arguments to update one Brand.
     * @example
     * // Update one Brand
     * const brand = await prisma.brand.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandUpdateArgs>(args: SelectSubset<T, BrandUpdateArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brand.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandDeleteManyArgs>(args?: SelectSubset<T, BrandDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandUpdateManyArgs>(args: SelectSubset<T, BrandUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brand = await prisma.brand.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandWithIdOnly = await prisma.brand.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrandUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brand.
     * @param {BrandUpsertArgs} args - Arguments to update or create a Brand.
     * @example
     * // Update or create a Brand
     * const brand = await prisma.brand.upsert({
     *   create: {
     *     // ... data to create a Brand
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brand we want to update
     *   }
     * })
     */
    upsert<T extends BrandUpsertArgs>(args: SelectSubset<T, BrandUpsertArgs<ExtArgs>>): Prisma__BrandClient<$Result.GetResult<Prisma.$BrandPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brand.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandCountArgs>(
      args?: Subset<T, BrandCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandAggregateArgs>(args: Subset<T, BrandAggregateArgs>): Prisma.PrismaPromise<GetBrandAggregateType<T>>

    /**
     * Group by Brand.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandGroupByArgs['orderBy'] }
        : { orderBy?: BrandGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brand model
   */
  readonly fields: BrandFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brand.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Brand$productsArgs<ExtArgs> = {}>(args?: Subset<T, Brand$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Brand model
   */
  interface BrandFieldRefs {
    readonly id: FieldRef<"Brand", 'String'>
    readonly name: FieldRef<"Brand", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Brand findUnique
   */
  export type BrandFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findUniqueOrThrow
   */
  export type BrandFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand findFirst
   */
  export type BrandFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findFirstOrThrow
   */
  export type BrandFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brand to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand findMany
   */
  export type BrandFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandOrderByWithRelationInput | BrandOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandScalarFieldEnum | BrandScalarFieldEnum[]
  }

  /**
   * Brand create
   */
  export type BrandCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to create a Brand.
     */
    data: XOR<BrandCreateInput, BrandUncheckedCreateInput>
  }

  /**
   * Brand createMany
   */
  export type BrandCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand createManyAndReturn
   */
  export type BrandCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandCreateManyInput | BrandCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brand update
   */
  export type BrandUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The data needed to update a Brand.
     */
    data: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
    /**
     * Choose, which Brand to update.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand updateMany
   */
  export type BrandUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand updateManyAndReturn
   */
  export type BrandUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandUpdateManyMutationInput, BrandUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brand upsert
   */
  export type BrandUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * The filter to search for the Brand to update in case it exists.
     */
    where: BrandWhereUniqueInput
    /**
     * In case the Brand found by the `where` argument doesn't exist, create a new Brand with this data.
     */
    create: XOR<BrandCreateInput, BrandUncheckedCreateInput>
    /**
     * In case the Brand was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandUpdateInput, BrandUncheckedUpdateInput>
  }

  /**
   * Brand delete
   */
  export type BrandDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
    /**
     * Filter which Brand to delete.
     */
    where: BrandWhereUniqueInput
  }

  /**
   * Brand deleteMany
   */
  export type BrandDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brand.products
   */
  export type Brand$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Brand without action
   */
  export type BrandDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brand
     */
    select?: BrandSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brand
     */
    omit?: BrandOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandInclude<ExtArgs> | null
  }


  /**
   * Model CategoryOnProduct
   */

  export type AggregateCategoryOnProduct = {
    _count: CategoryOnProductCountAggregateOutputType | null
    _avg: CategoryOnProductAvgAggregateOutputType | null
    _sum: CategoryOnProductSumAggregateOutputType | null
    _min: CategoryOnProductMinAggregateOutputType | null
    _max: CategoryOnProductMaxAggregateOutputType | null
  }

  export type CategoryOnProductAvgAggregateOutputType = {
    productId: number | null
  }

  export type CategoryOnProductSumAggregateOutputType = {
    productId: number | null
  }

  export type CategoryOnProductMinAggregateOutputType = {
    productId: number | null
    categoryId: string | null
  }

  export type CategoryOnProductMaxAggregateOutputType = {
    productId: number | null
    categoryId: string | null
  }

  export type CategoryOnProductCountAggregateOutputType = {
    productId: number
    categoryId: number
    _all: number
  }


  export type CategoryOnProductAvgAggregateInputType = {
    productId?: true
  }

  export type CategoryOnProductSumAggregateInputType = {
    productId?: true
  }

  export type CategoryOnProductMinAggregateInputType = {
    productId?: true
    categoryId?: true
  }

  export type CategoryOnProductMaxAggregateInputType = {
    productId?: true
    categoryId?: true
  }

  export type CategoryOnProductCountAggregateInputType = {
    productId?: true
    categoryId?: true
    _all?: true
  }

  export type CategoryOnProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryOnProduct to aggregate.
     */
    where?: CategoryOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryOnProducts to fetch.
     */
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryOnProducts
    **/
    _count?: true | CategoryOnProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryOnProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryOnProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryOnProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryOnProductMaxAggregateInputType
  }

  export type GetCategoryOnProductAggregateType<T extends CategoryOnProductAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryOnProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryOnProduct[P]>
      : GetScalarType<T[P], AggregateCategoryOnProduct[P]>
  }




  export type CategoryOnProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryOnProductWhereInput
    orderBy?: CategoryOnProductOrderByWithAggregationInput | CategoryOnProductOrderByWithAggregationInput[]
    by: CategoryOnProductScalarFieldEnum[] | CategoryOnProductScalarFieldEnum
    having?: CategoryOnProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryOnProductCountAggregateInputType | true
    _avg?: CategoryOnProductAvgAggregateInputType
    _sum?: CategoryOnProductSumAggregateInputType
    _min?: CategoryOnProductMinAggregateInputType
    _max?: CategoryOnProductMaxAggregateInputType
  }

  export type CategoryOnProductGroupByOutputType = {
    productId: number
    categoryId: string
    _count: CategoryOnProductCountAggregateOutputType | null
    _avg: CategoryOnProductAvgAggregateOutputType | null
    _sum: CategoryOnProductSumAggregateOutputType | null
    _min: CategoryOnProductMinAggregateOutputType | null
    _max: CategoryOnProductMaxAggregateOutputType | null
  }

  type GetCategoryOnProductGroupByPayload<T extends CategoryOnProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryOnProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryOnProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryOnProductGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryOnProductGroupByOutputType[P]>
        }
      >
    >


  export type CategoryOnProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    categoryId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryOnProduct"]>

  export type CategoryOnProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    categoryId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryOnProduct"]>

  export type CategoryOnProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    productId?: boolean
    categoryId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryOnProduct"]>

  export type CategoryOnProductSelectScalar = {
    productId?: boolean
    categoryId?: boolean
  }

  export type CategoryOnProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"productId" | "categoryId", ExtArgs["result"]["categoryOnProduct"]>
  export type CategoryOnProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type CategoryOnProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type CategoryOnProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CategoryOnProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryOnProduct"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      productId: number
      categoryId: string
    }, ExtArgs["result"]["categoryOnProduct"]>
    composites: {}
  }

  type CategoryOnProductGetPayload<S extends boolean | null | undefined | CategoryOnProductDefaultArgs> = $Result.GetResult<Prisma.$CategoryOnProductPayload, S>

  type CategoryOnProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryOnProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryOnProductCountAggregateInputType | true
    }

  export interface CategoryOnProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryOnProduct'], meta: { name: 'CategoryOnProduct' } }
    /**
     * Find zero or one CategoryOnProduct that matches the filter.
     * @param {CategoryOnProductFindUniqueArgs} args - Arguments to find a CategoryOnProduct
     * @example
     * // Get one CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryOnProductFindUniqueArgs>(args: SelectSubset<T, CategoryOnProductFindUniqueArgs<ExtArgs>>): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryOnProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryOnProductFindUniqueOrThrowArgs} args - Arguments to find a CategoryOnProduct
     * @example
     * // Get one CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryOnProductFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryOnProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryOnProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductFindFirstArgs} args - Arguments to find a CategoryOnProduct
     * @example
     * // Get one CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryOnProductFindFirstArgs>(args?: SelectSubset<T, CategoryOnProductFindFirstArgs<ExtArgs>>): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryOnProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductFindFirstOrThrowArgs} args - Arguments to find a CategoryOnProduct
     * @example
     * // Get one CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryOnProductFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryOnProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryOnProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryOnProducts
     * const categoryOnProducts = await prisma.categoryOnProduct.findMany()
     * 
     * // Get first 10 CategoryOnProducts
     * const categoryOnProducts = await prisma.categoryOnProduct.findMany({ take: 10 })
     * 
     * // Only select the `productId`
     * const categoryOnProductWithProductIdOnly = await prisma.categoryOnProduct.findMany({ select: { productId: true } })
     * 
     */
    findMany<T extends CategoryOnProductFindManyArgs>(args?: SelectSubset<T, CategoryOnProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryOnProduct.
     * @param {CategoryOnProductCreateArgs} args - Arguments to create a CategoryOnProduct.
     * @example
     * // Create one CategoryOnProduct
     * const CategoryOnProduct = await prisma.categoryOnProduct.create({
     *   data: {
     *     // ... data to create a CategoryOnProduct
     *   }
     * })
     * 
     */
    create<T extends CategoryOnProductCreateArgs>(args: SelectSubset<T, CategoryOnProductCreateArgs<ExtArgs>>): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryOnProducts.
     * @param {CategoryOnProductCreateManyArgs} args - Arguments to create many CategoryOnProducts.
     * @example
     * // Create many CategoryOnProducts
     * const categoryOnProduct = await prisma.categoryOnProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryOnProductCreateManyArgs>(args?: SelectSubset<T, CategoryOnProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryOnProducts and returns the data saved in the database.
     * @param {CategoryOnProductCreateManyAndReturnArgs} args - Arguments to create many CategoryOnProducts.
     * @example
     * // Create many CategoryOnProducts
     * const categoryOnProduct = await prisma.categoryOnProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryOnProducts and only return the `productId`
     * const categoryOnProductWithProductIdOnly = await prisma.categoryOnProduct.createManyAndReturn({
     *   select: { productId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryOnProductCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryOnProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoryOnProduct.
     * @param {CategoryOnProductDeleteArgs} args - Arguments to delete one CategoryOnProduct.
     * @example
     * // Delete one CategoryOnProduct
     * const CategoryOnProduct = await prisma.categoryOnProduct.delete({
     *   where: {
     *     // ... filter to delete one CategoryOnProduct
     *   }
     * })
     * 
     */
    delete<T extends CategoryOnProductDeleteArgs>(args: SelectSubset<T, CategoryOnProductDeleteArgs<ExtArgs>>): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryOnProduct.
     * @param {CategoryOnProductUpdateArgs} args - Arguments to update one CategoryOnProduct.
     * @example
     * // Update one CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryOnProductUpdateArgs>(args: SelectSubset<T, CategoryOnProductUpdateArgs<ExtArgs>>): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryOnProducts.
     * @param {CategoryOnProductDeleteManyArgs} args - Arguments to filter CategoryOnProducts to delete.
     * @example
     * // Delete a few CategoryOnProducts
     * const { count } = await prisma.categoryOnProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryOnProductDeleteManyArgs>(args?: SelectSubset<T, CategoryOnProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryOnProducts
     * const categoryOnProduct = await prisma.categoryOnProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryOnProductUpdateManyArgs>(args: SelectSubset<T, CategoryOnProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryOnProducts and returns the data updated in the database.
     * @param {CategoryOnProductUpdateManyAndReturnArgs} args - Arguments to update many CategoryOnProducts.
     * @example
     * // Update many CategoryOnProducts
     * const categoryOnProduct = await prisma.categoryOnProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoryOnProducts and only return the `productId`
     * const categoryOnProductWithProductIdOnly = await prisma.categoryOnProduct.updateManyAndReturn({
     *   select: { productId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryOnProductUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryOnProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoryOnProduct.
     * @param {CategoryOnProductUpsertArgs} args - Arguments to update or create a CategoryOnProduct.
     * @example
     * // Update or create a CategoryOnProduct
     * const categoryOnProduct = await prisma.categoryOnProduct.upsert({
     *   create: {
     *     // ... data to create a CategoryOnProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryOnProduct we want to update
     *   }
     * })
     */
    upsert<T extends CategoryOnProductUpsertArgs>(args: SelectSubset<T, CategoryOnProductUpsertArgs<ExtArgs>>): Prisma__CategoryOnProductClient<$Result.GetResult<Prisma.$CategoryOnProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductCountArgs} args - Arguments to filter CategoryOnProducts to count.
     * @example
     * // Count the number of CategoryOnProducts
     * const count = await prisma.categoryOnProduct.count({
     *   where: {
     *     // ... the filter for the CategoryOnProducts we want to count
     *   }
     * })
    **/
    count<T extends CategoryOnProductCountArgs>(
      args?: Subset<T, CategoryOnProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryOnProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryOnProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryOnProductAggregateArgs>(args: Subset<T, CategoryOnProductAggregateArgs>): Prisma.PrismaPromise<GetCategoryOnProductAggregateType<T>>

    /**
     * Group by CategoryOnProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryOnProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryOnProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryOnProductGroupByArgs['orderBy'] }
        : { orderBy?: CategoryOnProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryOnProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryOnProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryOnProduct model
   */
  readonly fields: CategoryOnProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryOnProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryOnProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategoryOnProduct model
   */
  interface CategoryOnProductFieldRefs {
    readonly productId: FieldRef<"CategoryOnProduct", 'Int'>
    readonly categoryId: FieldRef<"CategoryOnProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CategoryOnProduct findUnique
   */
  export type CategoryOnProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter, which CategoryOnProduct to fetch.
     */
    where: CategoryOnProductWhereUniqueInput
  }

  /**
   * CategoryOnProduct findUniqueOrThrow
   */
  export type CategoryOnProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter, which CategoryOnProduct to fetch.
     */
    where: CategoryOnProductWhereUniqueInput
  }

  /**
   * CategoryOnProduct findFirst
   */
  export type CategoryOnProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter, which CategoryOnProduct to fetch.
     */
    where?: CategoryOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryOnProducts to fetch.
     */
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryOnProducts.
     */
    cursor?: CategoryOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryOnProducts.
     */
    distinct?: CategoryOnProductScalarFieldEnum | CategoryOnProductScalarFieldEnum[]
  }

  /**
   * CategoryOnProduct findFirstOrThrow
   */
  export type CategoryOnProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter, which CategoryOnProduct to fetch.
     */
    where?: CategoryOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryOnProducts to fetch.
     */
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryOnProducts.
     */
    cursor?: CategoryOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryOnProducts.
     */
    distinct?: CategoryOnProductScalarFieldEnum | CategoryOnProductScalarFieldEnum[]
  }

  /**
   * CategoryOnProduct findMany
   */
  export type CategoryOnProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter, which CategoryOnProducts to fetch.
     */
    where?: CategoryOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryOnProducts to fetch.
     */
    orderBy?: CategoryOnProductOrderByWithRelationInput | CategoryOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryOnProducts.
     */
    cursor?: CategoryOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryOnProducts.
     */
    skip?: number
    distinct?: CategoryOnProductScalarFieldEnum | CategoryOnProductScalarFieldEnum[]
  }

  /**
   * CategoryOnProduct create
   */
  export type CategoryOnProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryOnProduct.
     */
    data: XOR<CategoryOnProductCreateInput, CategoryOnProductUncheckedCreateInput>
  }

  /**
   * CategoryOnProduct createMany
   */
  export type CategoryOnProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryOnProducts.
     */
    data: CategoryOnProductCreateManyInput | CategoryOnProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryOnProduct createManyAndReturn
   */
  export type CategoryOnProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * The data used to create many CategoryOnProducts.
     */
    data: CategoryOnProductCreateManyInput | CategoryOnProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryOnProduct update
   */
  export type CategoryOnProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryOnProduct.
     */
    data: XOR<CategoryOnProductUpdateInput, CategoryOnProductUncheckedUpdateInput>
    /**
     * Choose, which CategoryOnProduct to update.
     */
    where: CategoryOnProductWhereUniqueInput
  }

  /**
   * CategoryOnProduct updateMany
   */
  export type CategoryOnProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryOnProducts.
     */
    data: XOR<CategoryOnProductUpdateManyMutationInput, CategoryOnProductUncheckedUpdateManyInput>
    /**
     * Filter which CategoryOnProducts to update
     */
    where?: CategoryOnProductWhereInput
    /**
     * Limit how many CategoryOnProducts to update.
     */
    limit?: number
  }

  /**
   * CategoryOnProduct updateManyAndReturn
   */
  export type CategoryOnProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * The data used to update CategoryOnProducts.
     */
    data: XOR<CategoryOnProductUpdateManyMutationInput, CategoryOnProductUncheckedUpdateManyInput>
    /**
     * Filter which CategoryOnProducts to update
     */
    where?: CategoryOnProductWhereInput
    /**
     * Limit how many CategoryOnProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryOnProduct upsert
   */
  export type CategoryOnProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryOnProduct to update in case it exists.
     */
    where: CategoryOnProductWhereUniqueInput
    /**
     * In case the CategoryOnProduct found by the `where` argument doesn't exist, create a new CategoryOnProduct with this data.
     */
    create: XOR<CategoryOnProductCreateInput, CategoryOnProductUncheckedCreateInput>
    /**
     * In case the CategoryOnProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryOnProductUpdateInput, CategoryOnProductUncheckedUpdateInput>
  }

  /**
   * CategoryOnProduct delete
   */
  export type CategoryOnProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
    /**
     * Filter which CategoryOnProduct to delete.
     */
    where: CategoryOnProductWhereUniqueInput
  }

  /**
   * CategoryOnProduct deleteMany
   */
  export type CategoryOnProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryOnProducts to delete
     */
    where?: CategoryOnProductWhereInput
    /**
     * Limit how many CategoryOnProducts to delete.
     */
    limit?: number
  }

  /**
   * CategoryOnProduct without action
   */
  export type CategoryOnProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryOnProduct
     */
    select?: CategoryOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryOnProduct
     */
    omit?: CategoryOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryOnProductInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryFee
   */

  export type AggregateDeliveryFee = {
    _count: DeliveryFeeCountAggregateOutputType | null
    _avg: DeliveryFeeAvgAggregateOutputType | null
    _sum: DeliveryFeeSumAggregateOutputType | null
    _min: DeliveryFeeMinAggregateOutputType | null
    _max: DeliveryFeeMaxAggregateOutputType | null
  }

  export type DeliveryFeeAvgAggregateOutputType = {
    freeDeliveryThreshold: number | null
    productId: number | null
  }

  export type DeliveryFeeSumAggregateOutputType = {
    freeDeliveryThreshold: number | null
    productId: number | null
  }

  export type DeliveryFeeMinAggregateOutputType = {
    id: string | null
    freeDeliveryThreshold: number | null
    productId: number | null
  }

  export type DeliveryFeeMaxAggregateOutputType = {
    id: string | null
    freeDeliveryThreshold: number | null
    productId: number | null
  }

  export type DeliveryFeeCountAggregateOutputType = {
    id: number
    freeDeliveryThreshold: number
    productId: number
    _all: number
  }


  export type DeliveryFeeAvgAggregateInputType = {
    freeDeliveryThreshold?: true
    productId?: true
  }

  export type DeliveryFeeSumAggregateInputType = {
    freeDeliveryThreshold?: true
    productId?: true
  }

  export type DeliveryFeeMinAggregateInputType = {
    id?: true
    freeDeliveryThreshold?: true
    productId?: true
  }

  export type DeliveryFeeMaxAggregateInputType = {
    id?: true
    freeDeliveryThreshold?: true
    productId?: true
  }

  export type DeliveryFeeCountAggregateInputType = {
    id?: true
    freeDeliveryThreshold?: true
    productId?: true
    _all?: true
  }

  export type DeliveryFeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryFee to aggregate.
     */
    where?: DeliveryFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryFees to fetch.
     */
    orderBy?: DeliveryFeeOrderByWithRelationInput | DeliveryFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryFees
    **/
    _count?: true | DeliveryFeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryFeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliveryFeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryFeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryFeeMaxAggregateInputType
  }

  export type GetDeliveryFeeAggregateType<T extends DeliveryFeeAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryFee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryFee[P]>
      : GetScalarType<T[P], AggregateDeliveryFee[P]>
  }




  export type DeliveryFeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryFeeWhereInput
    orderBy?: DeliveryFeeOrderByWithAggregationInput | DeliveryFeeOrderByWithAggregationInput[]
    by: DeliveryFeeScalarFieldEnum[] | DeliveryFeeScalarFieldEnum
    having?: DeliveryFeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryFeeCountAggregateInputType | true
    _avg?: DeliveryFeeAvgAggregateInputType
    _sum?: DeliveryFeeSumAggregateInputType
    _min?: DeliveryFeeMinAggregateInputType
    _max?: DeliveryFeeMaxAggregateInputType
  }

  export type DeliveryFeeGroupByOutputType = {
    id: string
    freeDeliveryThreshold: number
    productId: number | null
    _count: DeliveryFeeCountAggregateOutputType | null
    _avg: DeliveryFeeAvgAggregateOutputType | null
    _sum: DeliveryFeeSumAggregateOutputType | null
    _min: DeliveryFeeMinAggregateOutputType | null
    _max: DeliveryFeeMaxAggregateOutputType | null
  }

  type GetDeliveryFeeGroupByPayload<T extends DeliveryFeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryFeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryFeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryFeeGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryFeeGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryFeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    freeDeliveryThreshold?: boolean
    productId?: boolean
    product?: boolean | DeliveryFee$productArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryFee"]>

  export type DeliveryFeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    freeDeliveryThreshold?: boolean
    productId?: boolean
    product?: boolean | DeliveryFee$productArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryFee"]>

  export type DeliveryFeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    freeDeliveryThreshold?: boolean
    productId?: boolean
    product?: boolean | DeliveryFee$productArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryFee"]>

  export type DeliveryFeeSelectScalar = {
    id?: boolean
    freeDeliveryThreshold?: boolean
    productId?: boolean
  }

  export type DeliveryFeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "freeDeliveryThreshold" | "productId", ExtArgs["result"]["deliveryFee"]>
  export type DeliveryFeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | DeliveryFee$productArgs<ExtArgs>
  }
  export type DeliveryFeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | DeliveryFee$productArgs<ExtArgs>
  }
  export type DeliveryFeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | DeliveryFee$productArgs<ExtArgs>
  }

  export type $DeliveryFeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryFee"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      freeDeliveryThreshold: number
      productId: number | null
    }, ExtArgs["result"]["deliveryFee"]>
    composites: {}
  }

  type DeliveryFeeGetPayload<S extends boolean | null | undefined | DeliveryFeeDefaultArgs> = $Result.GetResult<Prisma.$DeliveryFeePayload, S>

  type DeliveryFeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryFeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryFeeCountAggregateInputType | true
    }

  export interface DeliveryFeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryFee'], meta: { name: 'DeliveryFee' } }
    /**
     * Find zero or one DeliveryFee that matches the filter.
     * @param {DeliveryFeeFindUniqueArgs} args - Arguments to find a DeliveryFee
     * @example
     * // Get one DeliveryFee
     * const deliveryFee = await prisma.deliveryFee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryFeeFindUniqueArgs>(args: SelectSubset<T, DeliveryFeeFindUniqueArgs<ExtArgs>>): Prisma__DeliveryFeeClient<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryFee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryFeeFindUniqueOrThrowArgs} args - Arguments to find a DeliveryFee
     * @example
     * // Get one DeliveryFee
     * const deliveryFee = await prisma.deliveryFee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryFeeFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryFeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryFeeClient<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryFee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFeeFindFirstArgs} args - Arguments to find a DeliveryFee
     * @example
     * // Get one DeliveryFee
     * const deliveryFee = await prisma.deliveryFee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryFeeFindFirstArgs>(args?: SelectSubset<T, DeliveryFeeFindFirstArgs<ExtArgs>>): Prisma__DeliveryFeeClient<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryFee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFeeFindFirstOrThrowArgs} args - Arguments to find a DeliveryFee
     * @example
     * // Get one DeliveryFee
     * const deliveryFee = await prisma.deliveryFee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryFeeFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryFeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryFeeClient<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryFees
     * const deliveryFees = await prisma.deliveryFee.findMany()
     * 
     * // Get first 10 DeliveryFees
     * const deliveryFees = await prisma.deliveryFee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryFeeWithIdOnly = await prisma.deliveryFee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryFeeFindManyArgs>(args?: SelectSubset<T, DeliveryFeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryFee.
     * @param {DeliveryFeeCreateArgs} args - Arguments to create a DeliveryFee.
     * @example
     * // Create one DeliveryFee
     * const DeliveryFee = await prisma.deliveryFee.create({
     *   data: {
     *     // ... data to create a DeliveryFee
     *   }
     * })
     * 
     */
    create<T extends DeliveryFeeCreateArgs>(args: SelectSubset<T, DeliveryFeeCreateArgs<ExtArgs>>): Prisma__DeliveryFeeClient<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryFees.
     * @param {DeliveryFeeCreateManyArgs} args - Arguments to create many DeliveryFees.
     * @example
     * // Create many DeliveryFees
     * const deliveryFee = await prisma.deliveryFee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryFeeCreateManyArgs>(args?: SelectSubset<T, DeliveryFeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryFees and returns the data saved in the database.
     * @param {DeliveryFeeCreateManyAndReturnArgs} args - Arguments to create many DeliveryFees.
     * @example
     * // Create many DeliveryFees
     * const deliveryFee = await prisma.deliveryFee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryFees and only return the `id`
     * const deliveryFeeWithIdOnly = await prisma.deliveryFee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryFeeCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryFeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryFee.
     * @param {DeliveryFeeDeleteArgs} args - Arguments to delete one DeliveryFee.
     * @example
     * // Delete one DeliveryFee
     * const DeliveryFee = await prisma.deliveryFee.delete({
     *   where: {
     *     // ... filter to delete one DeliveryFee
     *   }
     * })
     * 
     */
    delete<T extends DeliveryFeeDeleteArgs>(args: SelectSubset<T, DeliveryFeeDeleteArgs<ExtArgs>>): Prisma__DeliveryFeeClient<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryFee.
     * @param {DeliveryFeeUpdateArgs} args - Arguments to update one DeliveryFee.
     * @example
     * // Update one DeliveryFee
     * const deliveryFee = await prisma.deliveryFee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryFeeUpdateArgs>(args: SelectSubset<T, DeliveryFeeUpdateArgs<ExtArgs>>): Prisma__DeliveryFeeClient<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryFees.
     * @param {DeliveryFeeDeleteManyArgs} args - Arguments to filter DeliveryFees to delete.
     * @example
     * // Delete a few DeliveryFees
     * const { count } = await prisma.deliveryFee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryFeeDeleteManyArgs>(args?: SelectSubset<T, DeliveryFeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryFees
     * const deliveryFee = await prisma.deliveryFee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryFeeUpdateManyArgs>(args: SelectSubset<T, DeliveryFeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryFees and returns the data updated in the database.
     * @param {DeliveryFeeUpdateManyAndReturnArgs} args - Arguments to update many DeliveryFees.
     * @example
     * // Update many DeliveryFees
     * const deliveryFee = await prisma.deliveryFee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryFees and only return the `id`
     * const deliveryFeeWithIdOnly = await prisma.deliveryFee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryFeeUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryFeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryFee.
     * @param {DeliveryFeeUpsertArgs} args - Arguments to update or create a DeliveryFee.
     * @example
     * // Update or create a DeliveryFee
     * const deliveryFee = await prisma.deliveryFee.upsert({
     *   create: {
     *     // ... data to create a DeliveryFee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryFee we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryFeeUpsertArgs>(args: SelectSubset<T, DeliveryFeeUpsertArgs<ExtArgs>>): Prisma__DeliveryFeeClient<$Result.GetResult<Prisma.$DeliveryFeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFeeCountArgs} args - Arguments to filter DeliveryFees to count.
     * @example
     * // Count the number of DeliveryFees
     * const count = await prisma.deliveryFee.count({
     *   where: {
     *     // ... the filter for the DeliveryFees we want to count
     *   }
     * })
    **/
    count<T extends DeliveryFeeCountArgs>(
      args?: Subset<T, DeliveryFeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryFeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryFeeAggregateArgs>(args: Subset<T, DeliveryFeeAggregateArgs>): Prisma.PrismaPromise<GetDeliveryFeeAggregateType<T>>

    /**
     * Group by DeliveryFee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryFeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryFeeGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryFeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryFeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryFeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryFee model
   */
  readonly fields: DeliveryFeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryFee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryFeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends DeliveryFee$productArgs<ExtArgs> = {}>(args?: Subset<T, DeliveryFee$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeliveryFee model
   */
  interface DeliveryFeeFieldRefs {
    readonly id: FieldRef<"DeliveryFee", 'String'>
    readonly freeDeliveryThreshold: FieldRef<"DeliveryFee", 'Int'>
    readonly productId: FieldRef<"DeliveryFee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryFee findUnique
   */
  export type DeliveryFeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryFee to fetch.
     */
    where: DeliveryFeeWhereUniqueInput
  }

  /**
   * DeliveryFee findUniqueOrThrow
   */
  export type DeliveryFeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryFee to fetch.
     */
    where: DeliveryFeeWhereUniqueInput
  }

  /**
   * DeliveryFee findFirst
   */
  export type DeliveryFeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryFee to fetch.
     */
    where?: DeliveryFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryFees to fetch.
     */
    orderBy?: DeliveryFeeOrderByWithRelationInput | DeliveryFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryFees.
     */
    cursor?: DeliveryFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryFees.
     */
    distinct?: DeliveryFeeScalarFieldEnum | DeliveryFeeScalarFieldEnum[]
  }

  /**
   * DeliveryFee findFirstOrThrow
   */
  export type DeliveryFeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryFee to fetch.
     */
    where?: DeliveryFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryFees to fetch.
     */
    orderBy?: DeliveryFeeOrderByWithRelationInput | DeliveryFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryFees.
     */
    cursor?: DeliveryFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryFees.
     */
    distinct?: DeliveryFeeScalarFieldEnum | DeliveryFeeScalarFieldEnum[]
  }

  /**
   * DeliveryFee findMany
   */
  export type DeliveryFeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryFees to fetch.
     */
    where?: DeliveryFeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryFees to fetch.
     */
    orderBy?: DeliveryFeeOrderByWithRelationInput | DeliveryFeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryFees.
     */
    cursor?: DeliveryFeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryFees.
     */
    skip?: number
    distinct?: DeliveryFeeScalarFieldEnum | DeliveryFeeScalarFieldEnum[]
  }

  /**
   * DeliveryFee create
   */
  export type DeliveryFeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryFee.
     */
    data: XOR<DeliveryFeeCreateInput, DeliveryFeeUncheckedCreateInput>
  }

  /**
   * DeliveryFee createMany
   */
  export type DeliveryFeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryFees.
     */
    data: DeliveryFeeCreateManyInput | DeliveryFeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryFee createManyAndReturn
   */
  export type DeliveryFeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryFees.
     */
    data: DeliveryFeeCreateManyInput | DeliveryFeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryFee update
   */
  export type DeliveryFeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryFee.
     */
    data: XOR<DeliveryFeeUpdateInput, DeliveryFeeUncheckedUpdateInput>
    /**
     * Choose, which DeliveryFee to update.
     */
    where: DeliveryFeeWhereUniqueInput
  }

  /**
   * DeliveryFee updateMany
   */
  export type DeliveryFeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryFees.
     */
    data: XOR<DeliveryFeeUpdateManyMutationInput, DeliveryFeeUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryFees to update
     */
    where?: DeliveryFeeWhereInput
    /**
     * Limit how many DeliveryFees to update.
     */
    limit?: number
  }

  /**
   * DeliveryFee updateManyAndReturn
   */
  export type DeliveryFeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryFees.
     */
    data: XOR<DeliveryFeeUpdateManyMutationInput, DeliveryFeeUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryFees to update
     */
    where?: DeliveryFeeWhereInput
    /**
     * Limit how many DeliveryFees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryFee upsert
   */
  export type DeliveryFeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryFee to update in case it exists.
     */
    where: DeliveryFeeWhereUniqueInput
    /**
     * In case the DeliveryFee found by the `where` argument doesn't exist, create a new DeliveryFee with this data.
     */
    create: XOR<DeliveryFeeCreateInput, DeliveryFeeUncheckedCreateInput>
    /**
     * In case the DeliveryFee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryFeeUpdateInput, DeliveryFeeUncheckedUpdateInput>
  }

  /**
   * DeliveryFee delete
   */
  export type DeliveryFeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeInclude<ExtArgs> | null
    /**
     * Filter which DeliveryFee to delete.
     */
    where: DeliveryFeeWhereUniqueInput
  }

  /**
   * DeliveryFee deleteMany
   */
  export type DeliveryFeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryFees to delete
     */
    where?: DeliveryFeeWhereInput
    /**
     * Limit how many DeliveryFees to delete.
     */
    limit?: number
  }

  /**
   * DeliveryFee.product
   */
  export type DeliveryFee$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * DeliveryFee without action
   */
  export type DeliveryFeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryFee
     */
    select?: DeliveryFeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryFee
     */
    omit?: DeliveryFeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryFeeInclude<ExtArgs> | null
  }


  /**
   * Model Price
   */

  export type AggregatePrice = {
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  export type PriceAvgAggregateOutputType = {
    price: number | null
  }

  export type PriceSumAggregateOutputType = {
    price: number | null
  }

  export type PriceMinAggregateOutputType = {
    id: string | null
    currency: string | null
    price: number | null
    formattedValue: string | null
    discountId: string | null
    minBuyingValue: string | null
  }

  export type PriceMaxAggregateOutputType = {
    id: string | null
    currency: string | null
    price: number | null
    formattedValue: string | null
    discountId: string | null
    minBuyingValue: string | null
  }

  export type PriceCountAggregateOutputType = {
    id: number
    currency: number
    price: number
    formattedValue: number
    discountId: number
    minBuyingValue: number
    _all: number
  }


  export type PriceAvgAggregateInputType = {
    price?: true
  }

  export type PriceSumAggregateInputType = {
    price?: true
  }

  export type PriceMinAggregateInputType = {
    id?: true
    currency?: true
    price?: true
    formattedValue?: true
    discountId?: true
    minBuyingValue?: true
  }

  export type PriceMaxAggregateInputType = {
    id?: true
    currency?: true
    price?: true
    formattedValue?: true
    discountId?: true
    minBuyingValue?: true
  }

  export type PriceCountAggregateInputType = {
    id?: true
    currency?: true
    price?: true
    formattedValue?: true
    discountId?: true
    minBuyingValue?: true
    _all?: true
  }

  export type PriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Price to aggregate.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prices
    **/
    _count?: true | PriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceMaxAggregateInputType
  }

  export type GetPriceAggregateType<T extends PriceAggregateArgs> = {
        [P in keyof T & keyof AggregatePrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrice[P]>
      : GetScalarType<T[P], AggregatePrice[P]>
  }




  export type PriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithAggregationInput | PriceOrderByWithAggregationInput[]
    by: PriceScalarFieldEnum[] | PriceScalarFieldEnum
    having?: PriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceCountAggregateInputType | true
    _avg?: PriceAvgAggregateInputType
    _sum?: PriceSumAggregateInputType
    _min?: PriceMinAggregateInputType
    _max?: PriceMaxAggregateInputType
  }

  export type PriceGroupByOutputType = {
    id: string
    currency: string
    price: number
    formattedValue: string
    discountId: string | null
    minBuyingValue: string
    _count: PriceCountAggregateOutputType | null
    _avg: PriceAvgAggregateOutputType | null
    _sum: PriceSumAggregateOutputType | null
    _min: PriceMinAggregateOutputType | null
    _max: PriceMaxAggregateOutputType | null
  }

  type GetPriceGroupByPayload<T extends PriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceGroupByOutputType[P]>
            : GetScalarType<T[P], PriceGroupByOutputType[P]>
        }
      >
    >


  export type PriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currency?: boolean
    price?: boolean
    formattedValue?: boolean
    discountId?: boolean
    minBuyingValue?: boolean
    discount?: boolean | Price$discountArgs<ExtArgs>
    Product?: boolean | Price$ProductArgs<ExtArgs>
    _count?: boolean | PriceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currency?: boolean
    price?: boolean
    formattedValue?: boolean
    discountId?: boolean
    minBuyingValue?: boolean
    discount?: boolean | Price$discountArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currency?: boolean
    price?: boolean
    formattedValue?: boolean
    discountId?: boolean
    minBuyingValue?: boolean
    discount?: boolean | Price$discountArgs<ExtArgs>
  }, ExtArgs["result"]["price"]>

  export type PriceSelectScalar = {
    id?: boolean
    currency?: boolean
    price?: boolean
    formattedValue?: boolean
    discountId?: boolean
    minBuyingValue?: boolean
  }

  export type PriceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "currency" | "price" | "formattedValue" | "discountId" | "minBuyingValue", ExtArgs["result"]["price"]>
  export type PriceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discount?: boolean | Price$discountArgs<ExtArgs>
    Product?: boolean | Price$ProductArgs<ExtArgs>
    _count?: boolean | PriceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PriceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discount?: boolean | Price$discountArgs<ExtArgs>
  }
  export type PriceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    discount?: boolean | Price$discountArgs<ExtArgs>
  }

  export type $PricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Price"
    objects: {
      discount: Prisma.$DiscountPayload<ExtArgs> | null
      Product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      currency: string
      price: number
      formattedValue: string
      discountId: string | null
      minBuyingValue: string
    }, ExtArgs["result"]["price"]>
    composites: {}
  }

  type PriceGetPayload<S extends boolean | null | undefined | PriceDefaultArgs> = $Result.GetResult<Prisma.$PricePayload, S>

  type PriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PriceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PriceCountAggregateInputType | true
    }

  export interface PriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Price'], meta: { name: 'Price' } }
    /**
     * Find zero or one Price that matches the filter.
     * @param {PriceFindUniqueArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceFindUniqueArgs>(args: SelectSubset<T, PriceFindUniqueArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Price that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceFindUniqueOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceFindFirstArgs>(args?: SelectSubset<T, PriceFindFirstArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Price that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindFirstOrThrowArgs} args - Arguments to find a Price
     * @example
     * // Get one Price
     * const price = await prisma.price.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prices
     * const prices = await prisma.price.findMany()
     * 
     * // Get first 10 Prices
     * const prices = await prisma.price.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceWithIdOnly = await prisma.price.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceFindManyArgs>(args?: SelectSubset<T, PriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Price.
     * @param {PriceCreateArgs} args - Arguments to create a Price.
     * @example
     * // Create one Price
     * const Price = await prisma.price.create({
     *   data: {
     *     // ... data to create a Price
     *   }
     * })
     * 
     */
    create<T extends PriceCreateArgs>(args: SelectSubset<T, PriceCreateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prices.
     * @param {PriceCreateManyArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceCreateManyArgs>(args?: SelectSubset<T, PriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prices and returns the data saved in the database.
     * @param {PriceCreateManyAndReturnArgs} args - Arguments to create many Prices.
     * @example
     * // Create many Prices
     * const price = await prisma.price.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prices and only return the `id`
     * const priceWithIdOnly = await prisma.price.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Price.
     * @param {PriceDeleteArgs} args - Arguments to delete one Price.
     * @example
     * // Delete one Price
     * const Price = await prisma.price.delete({
     *   where: {
     *     // ... filter to delete one Price
     *   }
     * })
     * 
     */
    delete<T extends PriceDeleteArgs>(args: SelectSubset<T, PriceDeleteArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Price.
     * @param {PriceUpdateArgs} args - Arguments to update one Price.
     * @example
     * // Update one Price
     * const price = await prisma.price.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceUpdateArgs>(args: SelectSubset<T, PriceUpdateArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prices.
     * @param {PriceDeleteManyArgs} args - Arguments to filter Prices to delete.
     * @example
     * // Delete a few Prices
     * const { count } = await prisma.price.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceDeleteManyArgs>(args?: SelectSubset<T, PriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceUpdateManyArgs>(args: SelectSubset<T, PriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prices and returns the data updated in the database.
     * @param {PriceUpdateManyAndReturnArgs} args - Arguments to update many Prices.
     * @example
     * // Update many Prices
     * const price = await prisma.price.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prices and only return the `id`
     * const priceWithIdOnly = await prisma.price.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PriceUpdateManyAndReturnArgs>(args: SelectSubset<T, PriceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Price.
     * @param {PriceUpsertArgs} args - Arguments to update or create a Price.
     * @example
     * // Update or create a Price
     * const price = await prisma.price.upsert({
     *   create: {
     *     // ... data to create a Price
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Price we want to update
     *   }
     * })
     */
    upsert<T extends PriceUpsertArgs>(args: SelectSubset<T, PriceUpsertArgs<ExtArgs>>): Prisma__PriceClient<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceCountArgs} args - Arguments to filter Prices to count.
     * @example
     * // Count the number of Prices
     * const count = await prisma.price.count({
     *   where: {
     *     // ... the filter for the Prices we want to count
     *   }
     * })
    **/
    count<T extends PriceCountArgs>(
      args?: Subset<T, PriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PriceAggregateArgs>(args: Subset<T, PriceAggregateArgs>): Prisma.PrismaPromise<GetPriceAggregateType<T>>

    /**
     * Group by Price.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceGroupByArgs['orderBy'] }
        : { orderBy?: PriceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Price model
   */
  readonly fields: PriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Price.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    discount<T extends Price$discountArgs<ExtArgs> = {}>(args?: Subset<T, Price$discountArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Product<T extends Price$ProductArgs<ExtArgs> = {}>(args?: Subset<T, Price$ProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Price model
   */
  interface PriceFieldRefs {
    readonly id: FieldRef<"Price", 'String'>
    readonly currency: FieldRef<"Price", 'String'>
    readonly price: FieldRef<"Price", 'Float'>
    readonly formattedValue: FieldRef<"Price", 'String'>
    readonly discountId: FieldRef<"Price", 'String'>
    readonly minBuyingValue: FieldRef<"Price", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Price findUnique
   */
  export type PriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findUniqueOrThrow
   */
  export type PriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price findFirst
   */
  export type PriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findFirstOrThrow
   */
  export type PriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Price to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prices.
     */
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price findMany
   */
  export type PriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter, which Prices to fetch.
     */
    where?: PriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prices to fetch.
     */
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prices.
     */
    cursor?: PriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prices.
     */
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Price create
   */
  export type PriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to create a Price.
     */
    data: XOR<PriceCreateInput, PriceUncheckedCreateInput>
  }

  /**
   * Price createMany
   */
  export type PriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Price createManyAndReturn
   */
  export type PriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * The data used to create many Prices.
     */
    data: PriceCreateManyInput | PriceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price update
   */
  export type PriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The data needed to update a Price.
     */
    data: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
    /**
     * Choose, which Price to update.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price updateMany
   */
  export type PriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
  }

  /**
   * Price updateManyAndReturn
   */
  export type PriceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * The data used to update Prices.
     */
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyInput>
    /**
     * Filter which Prices to update
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Price upsert
   */
  export type PriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * The filter to search for the Price to update in case it exists.
     */
    where: PriceWhereUniqueInput
    /**
     * In case the Price found by the `where` argument doesn't exist, create a new Price with this data.
     */
    create: XOR<PriceCreateInput, PriceUncheckedCreateInput>
    /**
     * In case the Price was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceUpdateInput, PriceUncheckedUpdateInput>
  }

  /**
   * Price delete
   */
  export type PriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    /**
     * Filter which Price to delete.
     */
    where: PriceWhereUniqueInput
  }

  /**
   * Price deleteMany
   */
  export type PriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prices to delete
     */
    where?: PriceWhereInput
    /**
     * Limit how many Prices to delete.
     */
    limit?: number
  }

  /**
   * Price.discount
   */
  export type Price$discountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    where?: DiscountWhereInput
  }

  /**
   * Price.Product
   */
  export type Price$ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Price without action
   */
  export type PriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
  }


  /**
   * Model Discount
   */

  export type AggregateDiscount = {
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  export type DiscountAvgAggregateOutputType = {
    price: number | null
    value: number | null
  }

  export type DiscountSumAggregateOutputType = {
    price: number | null
    value: number | null
  }

  export type DiscountMinAggregateOutputType = {
    id: string | null
    price: number | null
    endDate: Date | null
    type: string | null
    formattedValue: string | null
    value: number | null
    minBuyingValue: string | null
  }

  export type DiscountMaxAggregateOutputType = {
    id: string | null
    price: number | null
    endDate: Date | null
    type: string | null
    formattedValue: string | null
    value: number | null
    minBuyingValue: string | null
  }

  export type DiscountCountAggregateOutputType = {
    id: number
    price: number
    endDate: number
    type: number
    formattedValue: number
    value: number
    minBuyingValue: number
    _all: number
  }


  export type DiscountAvgAggregateInputType = {
    price?: true
    value?: true
  }

  export type DiscountSumAggregateInputType = {
    price?: true
    value?: true
  }

  export type DiscountMinAggregateInputType = {
    id?: true
    price?: true
    endDate?: true
    type?: true
    formattedValue?: true
    value?: true
    minBuyingValue?: true
  }

  export type DiscountMaxAggregateInputType = {
    id?: true
    price?: true
    endDate?: true
    type?: true
    formattedValue?: true
    value?: true
    minBuyingValue?: true
  }

  export type DiscountCountAggregateInputType = {
    id?: true
    price?: true
    endDate?: true
    type?: true
    formattedValue?: true
    value?: true
    minBuyingValue?: true
    _all?: true
  }

  export type DiscountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discount to aggregate.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discounts
    **/
    _count?: true | DiscountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountMaxAggregateInputType
  }

  export type GetDiscountAggregateType<T extends DiscountAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscount[P]>
      : GetScalarType<T[P], AggregateDiscount[P]>
  }




  export type DiscountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountWhereInput
    orderBy?: DiscountOrderByWithAggregationInput | DiscountOrderByWithAggregationInput[]
    by: DiscountScalarFieldEnum[] | DiscountScalarFieldEnum
    having?: DiscountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountCountAggregateInputType | true
    _avg?: DiscountAvgAggregateInputType
    _sum?: DiscountSumAggregateInputType
    _min?: DiscountMinAggregateInputType
    _max?: DiscountMaxAggregateInputType
  }

  export type DiscountGroupByOutputType = {
    id: string
    price: number
    endDate: Date
    type: string
    formattedValue: string
    value: number
    minBuyingValue: string
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  type GetDiscountGroupByPayload<T extends DiscountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountGroupByOutputType[P]>
        }
      >
    >


  export type DiscountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    endDate?: boolean
    type?: boolean
    formattedValue?: boolean
    value?: boolean
    minBuyingValue?: boolean
    Price?: boolean | Discount$PriceArgs<ExtArgs>
    _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discount"]>

  export type DiscountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    endDate?: boolean
    type?: boolean
    formattedValue?: boolean
    value?: boolean
    minBuyingValue?: boolean
  }, ExtArgs["result"]["discount"]>

  export type DiscountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    endDate?: boolean
    type?: boolean
    formattedValue?: boolean
    value?: boolean
    minBuyingValue?: boolean
  }, ExtArgs["result"]["discount"]>

  export type DiscountSelectScalar = {
    id?: boolean
    price?: boolean
    endDate?: boolean
    type?: boolean
    formattedValue?: boolean
    value?: boolean
    minBuyingValue?: boolean
  }

  export type DiscountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "endDate" | "type" | "formattedValue" | "value" | "minBuyingValue", ExtArgs["result"]["discount"]>
  export type DiscountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Price?: boolean | Discount$PriceArgs<ExtArgs>
    _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DiscountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DiscountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discount"
    objects: {
      Price: Prisma.$PricePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      price: number
      endDate: Date
      type: string
      formattedValue: string
      value: number
      minBuyingValue: string
    }, ExtArgs["result"]["discount"]>
    composites: {}
  }

  type DiscountGetPayload<S extends boolean | null | undefined | DiscountDefaultArgs> = $Result.GetResult<Prisma.$DiscountPayload, S>

  type DiscountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscountCountAggregateInputType | true
    }

  export interface DiscountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discount'], meta: { name: 'Discount' } }
    /**
     * Find zero or one Discount that matches the filter.
     * @param {DiscountFindUniqueArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountFindUniqueArgs>(args: SelectSubset<T, DiscountFindUniqueArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscountFindUniqueOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountFindFirstArgs>(args?: SelectSubset<T, DiscountFindFirstArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounts
     * const discounts = await prisma.discount.findMany()
     * 
     * // Get first 10 Discounts
     * const discounts = await prisma.discount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discountWithIdOnly = await prisma.discount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscountFindManyArgs>(args?: SelectSubset<T, DiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discount.
     * @param {DiscountCreateArgs} args - Arguments to create a Discount.
     * @example
     * // Create one Discount
     * const Discount = await prisma.discount.create({
     *   data: {
     *     // ... data to create a Discount
     *   }
     * })
     * 
     */
    create<T extends DiscountCreateArgs>(args: SelectSubset<T, DiscountCreateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discounts.
     * @param {DiscountCreateManyArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscountCreateManyArgs>(args?: SelectSubset<T, DiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discounts and returns the data saved in the database.
     * @param {DiscountCreateManyAndReturnArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discounts and only return the `id`
     * const discountWithIdOnly = await prisma.discount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscountCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discount.
     * @param {DiscountDeleteArgs} args - Arguments to delete one Discount.
     * @example
     * // Delete one Discount
     * const Discount = await prisma.discount.delete({
     *   where: {
     *     // ... filter to delete one Discount
     *   }
     * })
     * 
     */
    delete<T extends DiscountDeleteArgs>(args: SelectSubset<T, DiscountDeleteArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discount.
     * @param {DiscountUpdateArgs} args - Arguments to update one Discount.
     * @example
     * // Update one Discount
     * const discount = await prisma.discount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscountUpdateArgs>(args: SelectSubset<T, DiscountUpdateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discounts.
     * @param {DiscountDeleteManyArgs} args - Arguments to filter Discounts to delete.
     * @example
     * // Delete a few Discounts
     * const { count } = await prisma.discount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscountDeleteManyArgs>(args?: SelectSubset<T, DiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscountUpdateManyArgs>(args: SelectSubset<T, DiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts and returns the data updated in the database.
     * @param {DiscountUpdateManyAndReturnArgs} args - Arguments to update many Discounts.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Discounts and only return the `id`
     * const discountWithIdOnly = await prisma.discount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscountUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discount.
     * @param {DiscountUpsertArgs} args - Arguments to update or create a Discount.
     * @example
     * // Update or create a Discount
     * const discount = await prisma.discount.upsert({
     *   create: {
     *     // ... data to create a Discount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discount we want to update
     *   }
     * })
     */
    upsert<T extends DiscountUpsertArgs>(args: SelectSubset<T, DiscountUpsertArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCountArgs} args - Arguments to filter Discounts to count.
     * @example
     * // Count the number of Discounts
     * const count = await prisma.discount.count({
     *   where: {
     *     // ... the filter for the Discounts we want to count
     *   }
     * })
    **/
    count<T extends DiscountCountArgs>(
      args?: Subset<T, DiscountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiscountAggregateArgs>(args: Subset<T, DiscountAggregateArgs>): Prisma.PrismaPromise<GetDiscountAggregateType<T>>

    /**
     * Group by Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountGroupByArgs['orderBy'] }
        : { orderBy?: DiscountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discount model
   */
  readonly fields: DiscountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Price<T extends Discount$PriceArgs<ExtArgs> = {}>(args?: Subset<T, Discount$PriceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PricePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Discount model
   */
  interface DiscountFieldRefs {
    readonly id: FieldRef<"Discount", 'String'>
    readonly price: FieldRef<"Discount", 'Float'>
    readonly endDate: FieldRef<"Discount", 'DateTime'>
    readonly type: FieldRef<"Discount", 'String'>
    readonly formattedValue: FieldRef<"Discount", 'String'>
    readonly value: FieldRef<"Discount", 'Int'>
    readonly minBuyingValue: FieldRef<"Discount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Discount findUnique
   */
  export type DiscountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findUniqueOrThrow
   */
  export type DiscountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findFirst
   */
  export type DiscountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findFirstOrThrow
   */
  export type DiscountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findMany
   */
  export type DiscountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discounts to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount create
   */
  export type DiscountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The data needed to create a Discount.
     */
    data: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
  }

  /**
   * Discount createMany
   */
  export type DiscountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discount createManyAndReturn
   */
  export type DiscountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discount update
   */
  export type DiscountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The data needed to update a Discount.
     */
    data: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
    /**
     * Choose, which Discount to update.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount updateMany
   */
  export type DiscountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discounts.
     */
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyInput>
    /**
     * Filter which Discounts to update
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to update.
     */
    limit?: number
  }

  /**
   * Discount updateManyAndReturn
   */
  export type DiscountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * The data used to update Discounts.
     */
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyInput>
    /**
     * Filter which Discounts to update
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to update.
     */
    limit?: number
  }

  /**
   * Discount upsert
   */
  export type DiscountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The filter to search for the Discount to update in case it exists.
     */
    where: DiscountWhereUniqueInput
    /**
     * In case the Discount found by the `where` argument doesn't exist, create a new Discount with this data.
     */
    create: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
    /**
     * In case the Discount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
  }

  /**
   * Discount delete
   */
  export type DiscountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter which Discount to delete.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount deleteMany
   */
  export type DiscountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discounts to delete
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to delete.
     */
    limit?: number
  }

  /**
   * Discount.Price
   */
  export type Discount$PriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Price
     */
    select?: PriceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Price
     */
    omit?: PriceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PriceInclude<ExtArgs> | null
    where?: PriceWhereInput
    orderBy?: PriceOrderByWithRelationInput | PriceOrderByWithRelationInput[]
    cursor?: PriceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PriceScalarFieldEnum | PriceScalarFieldEnum[]
  }

  /**
   * Discount without action
   */
  export type DiscountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    productId: number | null
  }

  export type OfferSumAggregateOutputType = {
    productId: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: string | null
    sellerName: string | null
    shopId: string | null
    type: string | null
    shippingIndicator: string | null
    productId: number | null
  }

  export type OfferMaxAggregateOutputType = {
    id: string | null
    sellerName: string | null
    shopId: string | null
    type: string | null
    shippingIndicator: string | null
    productId: number | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    sellerName: number
    shopId: number
    type: number
    purchaseIndicators: number
    shippingIndicator: number
    productId: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    productId?: true
  }

  export type OfferSumAggregateInputType = {
    productId?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    sellerName?: true
    shopId?: true
    type?: true
    shippingIndicator?: true
    productId?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    sellerName?: true
    shopId?: true
    type?: true
    shippingIndicator?: true
    productId?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    sellerName?: true
    shopId?: true
    type?: true
    purchaseIndicators?: true
    shippingIndicator?: true
    productId?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: string
    sellerName: string
    shopId: string
    type: string
    purchaseIndicators: JsonValue
    shippingIndicator: string
    productId: number
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerName?: boolean
    shopId?: boolean
    type?: boolean
    purchaseIndicators?: boolean
    shippingIndicator?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerName?: boolean
    shopId?: boolean
    type?: boolean
    purchaseIndicators?: boolean
    shippingIndicator?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerName?: boolean
    shopId?: boolean
    type?: boolean
    purchaseIndicators?: boolean
    shippingIndicator?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    sellerName?: boolean
    shopId?: boolean
    type?: boolean
    purchaseIndicators?: boolean
    shippingIndicator?: boolean
    productId?: boolean
  }

  export type OfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sellerName" | "shopId" | "type" | "purchaseIndicators" | "shippingIndicator" | "productId", ExtArgs["result"]["offer"]>
  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sellerName: string
      shopId: string
      type: string
      purchaseIndicators: Prisma.JsonValue
      shippingIndicator: string
      productId: number
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {OfferUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Offer model
   */
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'String'>
    readonly sellerName: FieldRef<"Offer", 'String'>
    readonly shopId: FieldRef<"Offer", 'String'>
    readonly type: FieldRef<"Offer", 'String'>
    readonly purchaseIndicators: FieldRef<"Offer", 'Json'>
    readonly shippingIndicator: FieldRef<"Offer", 'String'>
    readonly productId: FieldRef<"Offer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer updateManyAndReturn
   */
  export type OfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to delete.
     */
    limit?: number
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
  }


  /**
   * Model Stock
   */

  export type AggregateStock = {
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  export type StockAvgAggregateOutputType = {
    value: number | null
  }

  export type StockSumAggregateOutputType = {
    value: number | null
  }

  export type StockMinAggregateOutputType = {
    id: string | null
    stockLevelStatus: string | null
    value: number | null
  }

  export type StockMaxAggregateOutputType = {
    id: string | null
    stockLevelStatus: string | null
    value: number | null
  }

  export type StockCountAggregateOutputType = {
    id: number
    stockLevelStatus: number
    value: number
    _all: number
  }


  export type StockAvgAggregateInputType = {
    value?: true
  }

  export type StockSumAggregateInputType = {
    value?: true
  }

  export type StockMinAggregateInputType = {
    id?: true
    stockLevelStatus?: true
    value?: true
  }

  export type StockMaxAggregateInputType = {
    id?: true
    stockLevelStatus?: true
    value?: true
  }

  export type StockCountAggregateInputType = {
    id?: true
    stockLevelStatus?: true
    value?: true
    _all?: true
  }

  export type StockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stock to aggregate.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMaxAggregateInputType
  }

  export type GetStockAggregateType<T extends StockAggregateArgs> = {
        [P in keyof T & keyof AggregateStock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock[P]>
      : GetScalarType<T[P], AggregateStock[P]>
  }




  export type StockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockWhereInput
    orderBy?: StockOrderByWithAggregationInput | StockOrderByWithAggregationInput[]
    by: StockScalarFieldEnum[] | StockScalarFieldEnum
    having?: StockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockCountAggregateInputType | true
    _avg?: StockAvgAggregateInputType
    _sum?: StockSumAggregateInputType
    _min?: StockMinAggregateInputType
    _max?: StockMaxAggregateInputType
  }

  export type StockGroupByOutputType = {
    id: string
    stockLevelStatus: string
    value: number | null
    _count: StockCountAggregateOutputType | null
    _avg: StockAvgAggregateOutputType | null
    _sum: StockSumAggregateOutputType | null
    _min: StockMinAggregateOutputType | null
    _max: StockMaxAggregateOutputType | null
  }

  type GetStockGroupByPayload<T extends StockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockGroupByOutputType[P]>
            : GetScalarType<T[P], StockGroupByOutputType[P]>
        }
      >
    >


  export type StockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockLevelStatus?: boolean
    value?: boolean
    product?: boolean | Stock$productArgs<ExtArgs>
  }, ExtArgs["result"]["stock"]>

  export type StockSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockLevelStatus?: boolean
    value?: boolean
  }, ExtArgs["result"]["stock"]>

  export type StockSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stockLevelStatus?: boolean
    value?: boolean
  }, ExtArgs["result"]["stock"]>

  export type StockSelectScalar = {
    id?: boolean
    stockLevelStatus?: boolean
    value?: boolean
  }

  export type StockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stockLevelStatus" | "value", ExtArgs["result"]["stock"]>
  export type StockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Stock$productArgs<ExtArgs>
  }
  export type StockIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StockIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stock"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stockLevelStatus: string
      value: number | null
    }, ExtArgs["result"]["stock"]>
    composites: {}
  }

  type StockGetPayload<S extends boolean | null | undefined | StockDefaultArgs> = $Result.GetResult<Prisma.$StockPayload, S>

  type StockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockCountAggregateInputType | true
    }

  export interface StockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stock'], meta: { name: 'Stock' } }
    /**
     * Find zero or one Stock that matches the filter.
     * @param {StockFindUniqueArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockFindUniqueArgs>(args: SelectSubset<T, StockFindUniqueArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockFindUniqueOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockFindUniqueOrThrowArgs>(args: SelectSubset<T, StockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockFindFirstArgs>(args?: SelectSubset<T, StockFindFirstArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindFirstOrThrowArgs} args - Arguments to find a Stock
     * @example
     * // Get one Stock
     * const stock = await prisma.stock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockFindFirstOrThrowArgs>(args?: SelectSubset<T, StockFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stock.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockWithIdOnly = await prisma.stock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockFindManyArgs>(args?: SelectSubset<T, StockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock.
     * @param {StockCreateArgs} args - Arguments to create a Stock.
     * @example
     * // Create one Stock
     * const Stock = await prisma.stock.create({
     *   data: {
     *     // ... data to create a Stock
     *   }
     * })
     * 
     */
    create<T extends StockCreateArgs>(args: SelectSubset<T, StockCreateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {StockCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockCreateManyArgs>(args?: SelectSubset<T, StockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {StockCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stock = await prisma.stock.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockCreateManyAndReturnArgs>(args?: SelectSubset<T, StockCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock.
     * @param {StockDeleteArgs} args - Arguments to delete one Stock.
     * @example
     * // Delete one Stock
     * const Stock = await prisma.stock.delete({
     *   where: {
     *     // ... filter to delete one Stock
     *   }
     * })
     * 
     */
    delete<T extends StockDeleteArgs>(args: SelectSubset<T, StockDeleteArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock.
     * @param {StockUpdateArgs} args - Arguments to update one Stock.
     * @example
     * // Update one Stock
     * const stock = await prisma.stock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockUpdateArgs>(args: SelectSubset<T, StockUpdateArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {StockDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockDeleteManyArgs>(args?: SelectSubset<T, StockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockUpdateManyArgs>(args: SelectSubset<T, StockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {StockUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stock = await prisma.stock.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `id`
     * const stockWithIdOnly = await prisma.stock.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockUpdateManyAndReturnArgs>(args: SelectSubset<T, StockUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock.
     * @param {StockUpsertArgs} args - Arguments to update or create a Stock.
     * @example
     * // Update or create a Stock
     * const stock = await prisma.stock.upsert({
     *   create: {
     *     // ... data to create a Stock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock we want to update
     *   }
     * })
     */
    upsert<T extends StockUpsertArgs>(args: SelectSubset<T, StockUpsertArgs<ExtArgs>>): Prisma__StockClient<$Result.GetResult<Prisma.$StockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stock.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StockCountArgs>(
      args?: Subset<T, StockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockAggregateArgs>(args: Subset<T, StockAggregateArgs>): Prisma.PrismaPromise<GetStockAggregateType<T>>

    /**
     * Group by Stock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockGroupByArgs['orderBy'] }
        : { orderBy?: StockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stock model
   */
  readonly fields: StockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends Stock$productArgs<ExtArgs> = {}>(args?: Subset<T, Stock$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stock model
   */
  interface StockFieldRefs {
    readonly id: FieldRef<"Stock", 'String'>
    readonly stockLevelStatus: FieldRef<"Stock", 'String'>
    readonly value: FieldRef<"Stock", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Stock findUnique
   */
  export type StockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findUniqueOrThrow
   */
  export type StockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock findFirst
   */
  export type StockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findFirstOrThrow
   */
  export type StockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stock to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock findMany
   */
  export type StockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StockOrderByWithRelationInput | StockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    distinct?: StockScalarFieldEnum | StockScalarFieldEnum[]
  }

  /**
   * Stock create
   */
  export type StockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to create a Stock.
     */
    data: XOR<StockCreateInput, StockUncheckedCreateInput>
  }

  /**
   * Stock createMany
   */
  export type StockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stock createManyAndReturn
   */
  export type StockCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to create many Stocks.
     */
    data: StockCreateManyInput | StockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stock update
   */
  export type StockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The data needed to update a Stock.
     */
    data: XOR<StockUpdateInput, StockUncheckedUpdateInput>
    /**
     * Choose, which Stock to update.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock updateMany
   */
  export type StockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
  }

  /**
   * Stock updateManyAndReturn
   */
  export type StockUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * The data used to update Stocks.
     */
    data: XOR<StockUpdateManyMutationInput, StockUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
  }

  /**
   * Stock upsert
   */
  export type StockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * The filter to search for the Stock to update in case it exists.
     */
    where: StockWhereUniqueInput
    /**
     * In case the Stock found by the `where` argument doesn't exist, create a new Stock with this data.
     */
    create: XOR<StockCreateInput, StockUncheckedCreateInput>
    /**
     * In case the Stock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockUpdateInput, StockUncheckedUpdateInput>
  }

  /**
   * Stock delete
   */
  export type StockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
    /**
     * Filter which Stock to delete.
     */
    where: StockWhereUniqueInput
  }

  /**
   * Stock deleteMany
   */
  export type StockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to delete
     */
    where?: StockWhereInput
    /**
     * Limit how many Stocks to delete.
     */
    limit?: number
  }

  /**
   * Stock.product
   */
  export type Stock$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * Stock without action
   */
  export type StockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock
     */
    select?: StockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stock
     */
    omit?: StockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    itemsPerUnit: number | null
    incrementBy: number | null
    max: number | null
    min: number | null
    unitItem: number | null
    maxToOrder: number | null
  }

  export type UnitSumAggregateOutputType = {
    itemsPerUnit: number | null
    incrementBy: number | null
    max: number | null
    min: number | null
    unitItem: number | null
    maxToOrder: number | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    unitOfMeasure: string | null
    itemsPerUnit: number | null
    incrementBy: number | null
    size: string | null
    max: number | null
    min: number | null
    unitItem: number | null
    maxToOrder: number | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    unitOfMeasure: string | null
    itemsPerUnit: number | null
    incrementBy: number | null
    size: string | null
    max: number | null
    min: number | null
    unitItem: number | null
    maxToOrder: number | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    unitOfMeasure: number
    itemsPerUnit: number
    incrementBy: number
    size: number
    max: number
    min: number
    unitItem: number
    maxToOrder: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    itemsPerUnit?: true
    incrementBy?: true
    max?: true
    min?: true
    unitItem?: true
    maxToOrder?: true
  }

  export type UnitSumAggregateInputType = {
    itemsPerUnit?: true
    incrementBy?: true
    max?: true
    min?: true
    unitItem?: true
    maxToOrder?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    unitOfMeasure?: true
    itemsPerUnit?: true
    incrementBy?: true
    size?: true
    max?: true
    min?: true
    unitItem?: true
    maxToOrder?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    unitOfMeasure?: true
    itemsPerUnit?: true
    incrementBy?: true
    size?: true
    max?: true
    min?: true
    unitItem?: true
    maxToOrder?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    unitOfMeasure?: true
    itemsPerUnit?: true
    incrementBy?: true
    size?: true
    max?: true
    min?: true
    unitItem?: true
    maxToOrder?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    unitOfMeasure: string
    itemsPerUnit: number
    incrementBy: number
    size: string
    max: number
    min: number
    unitItem: number
    maxToOrder: number
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitOfMeasure?: boolean
    itemsPerUnit?: boolean
    incrementBy?: boolean
    size?: boolean
    max?: boolean
    min?: boolean
    unitItem?: boolean
    maxToOrder?: boolean
    products?: boolean | Unit$productsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitOfMeasure?: boolean
    itemsPerUnit?: boolean
    incrementBy?: boolean
    size?: boolean
    max?: boolean
    min?: boolean
    unitItem?: boolean
    maxToOrder?: boolean
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitOfMeasure?: boolean
    itemsPerUnit?: boolean
    incrementBy?: boolean
    size?: boolean
    max?: boolean
    min?: boolean
    unitItem?: boolean
    maxToOrder?: boolean
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    unitOfMeasure?: boolean
    itemsPerUnit?: boolean
    incrementBy?: boolean
    size?: boolean
    max?: boolean
    min?: boolean
    unitItem?: boolean
    maxToOrder?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitOfMeasure" | "itemsPerUnit" | "incrementBy" | "size" | "max" | "min" | "unitItem" | "maxToOrder", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Unit$productsArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitOfMeasure: string
      itemsPerUnit: number
      incrementBy: number
      size: string
      max: number
      min: number
      unitItem: number
      maxToOrder: number
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Unit$productsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly unitOfMeasure: FieldRef<"Unit", 'String'>
    readonly itemsPerUnit: FieldRef<"Unit", 'Int'>
    readonly incrementBy: FieldRef<"Unit", 'Float'>
    readonly size: FieldRef<"Unit", 'String'>
    readonly max: FieldRef<"Unit", 'Int'>
    readonly min: FieldRef<"Unit", 'Float'>
    readonly unitItem: FieldRef<"Unit", 'Int'>
    readonly maxToOrder: FieldRef<"Unit", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.products
   */
  export type Unit$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model Links
   */

  export type AggregateLinks = {
    _count: LinksCountAggregateOutputType | null
    _min: LinksMinAggregateOutputType | null
    _max: LinksMaxAggregateOutputType | null
  }

  export type LinksMinAggregateOutputType = {
    id: string | null
  }

  export type LinksMaxAggregateOutputType = {
    id: string | null
  }

  export type LinksCountAggregateOutputType = {
    id: number
    images: number
    productUrl: number
    tracking: number
    defaultImages: number
    _all: number
  }


  export type LinksMinAggregateInputType = {
    id?: true
  }

  export type LinksMaxAggregateInputType = {
    id?: true
  }

  export type LinksCountAggregateInputType = {
    id?: true
    images?: true
    productUrl?: true
    tracking?: true
    defaultImages?: true
    _all?: true
  }

  export type LinksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to aggregate.
     */
    where?: LinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinksOrderByWithRelationInput | LinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Links
    **/
    _count?: true | LinksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinksMaxAggregateInputType
  }

  export type GetLinksAggregateType<T extends LinksAggregateArgs> = {
        [P in keyof T & keyof AggregateLinks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinks[P]>
      : GetScalarType<T[P], AggregateLinks[P]>
  }




  export type LinksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinksWhereInput
    orderBy?: LinksOrderByWithAggregationInput | LinksOrderByWithAggregationInput[]
    by: LinksScalarFieldEnum[] | LinksScalarFieldEnum
    having?: LinksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinksCountAggregateInputType | true
    _min?: LinksMinAggregateInputType
    _max?: LinksMaxAggregateInputType
  }

  export type LinksGroupByOutputType = {
    id: string
    images: JsonValue
    productUrl: JsonValue
    tracking: JsonValue
    defaultImages: string[]
    _count: LinksCountAggregateOutputType | null
    _min: LinksMinAggregateOutputType | null
    _max: LinksMaxAggregateOutputType | null
  }

  type GetLinksGroupByPayload<T extends LinksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinksGroupByOutputType[P]>
            : GetScalarType<T[P], LinksGroupByOutputType[P]>
        }
      >
    >


  export type LinksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    images?: boolean
    productUrl?: boolean
    tracking?: boolean
    defaultImages?: boolean
    product?: boolean | Links$productArgs<ExtArgs>
  }, ExtArgs["result"]["links"]>

  export type LinksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    images?: boolean
    productUrl?: boolean
    tracking?: boolean
    defaultImages?: boolean
  }, ExtArgs["result"]["links"]>

  export type LinksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    images?: boolean
    productUrl?: boolean
    tracking?: boolean
    defaultImages?: boolean
  }, ExtArgs["result"]["links"]>

  export type LinksSelectScalar = {
    id?: boolean
    images?: boolean
    productUrl?: boolean
    tracking?: boolean
    defaultImages?: boolean
  }

  export type LinksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "images" | "productUrl" | "tracking" | "defaultImages", ExtArgs["result"]["links"]>
  export type LinksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Links$productArgs<ExtArgs>
  }
  export type LinksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LinksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LinksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Links"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      images: Prisma.JsonValue
      productUrl: Prisma.JsonValue
      tracking: Prisma.JsonValue
      defaultImages: string[]
    }, ExtArgs["result"]["links"]>
    composites: {}
  }

  type LinksGetPayload<S extends boolean | null | undefined | LinksDefaultArgs> = $Result.GetResult<Prisma.$LinksPayload, S>

  type LinksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinksCountAggregateInputType | true
    }

  export interface LinksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Links'], meta: { name: 'Links' } }
    /**
     * Find zero or one Links that matches the filter.
     * @param {LinksFindUniqueArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinksFindUniqueArgs>(args: SelectSubset<T, LinksFindUniqueArgs<ExtArgs>>): Prisma__LinksClient<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Links that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinksFindUniqueOrThrowArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinksFindUniqueOrThrowArgs>(args: SelectSubset<T, LinksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinksClient<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinksFindFirstArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinksFindFirstArgs>(args?: SelectSubset<T, LinksFindFirstArgs<ExtArgs>>): Prisma__LinksClient<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Links that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinksFindFirstOrThrowArgs} args - Arguments to find a Links
     * @example
     * // Get one Links
     * const links = await prisma.links.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinksFindFirstOrThrowArgs>(args?: SelectSubset<T, LinksFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinksClient<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Links that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Links
     * const links = await prisma.links.findMany()
     * 
     * // Get first 10 Links
     * const links = await prisma.links.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const linksWithIdOnly = await prisma.links.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LinksFindManyArgs>(args?: SelectSubset<T, LinksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Links.
     * @param {LinksCreateArgs} args - Arguments to create a Links.
     * @example
     * // Create one Links
     * const Links = await prisma.links.create({
     *   data: {
     *     // ... data to create a Links
     *   }
     * })
     * 
     */
    create<T extends LinksCreateArgs>(args: SelectSubset<T, LinksCreateArgs<ExtArgs>>): Prisma__LinksClient<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Links.
     * @param {LinksCreateManyArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const links = await prisma.links.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinksCreateManyArgs>(args?: SelectSubset<T, LinksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Links and returns the data saved in the database.
     * @param {LinksCreateManyAndReturnArgs} args - Arguments to create many Links.
     * @example
     * // Create many Links
     * const links = await prisma.links.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Links and only return the `id`
     * const linksWithIdOnly = await prisma.links.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinksCreateManyAndReturnArgs>(args?: SelectSubset<T, LinksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Links.
     * @param {LinksDeleteArgs} args - Arguments to delete one Links.
     * @example
     * // Delete one Links
     * const Links = await prisma.links.delete({
     *   where: {
     *     // ... filter to delete one Links
     *   }
     * })
     * 
     */
    delete<T extends LinksDeleteArgs>(args: SelectSubset<T, LinksDeleteArgs<ExtArgs>>): Prisma__LinksClient<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Links.
     * @param {LinksUpdateArgs} args - Arguments to update one Links.
     * @example
     * // Update one Links
     * const links = await prisma.links.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinksUpdateArgs>(args: SelectSubset<T, LinksUpdateArgs<ExtArgs>>): Prisma__LinksClient<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Links.
     * @param {LinksDeleteManyArgs} args - Arguments to filter Links to delete.
     * @example
     * // Delete a few Links
     * const { count } = await prisma.links.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinksDeleteManyArgs>(args?: SelectSubset<T, LinksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Links
     * const links = await prisma.links.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinksUpdateManyArgs>(args: SelectSubset<T, LinksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Links and returns the data updated in the database.
     * @param {LinksUpdateManyAndReturnArgs} args - Arguments to update many Links.
     * @example
     * // Update many Links
     * const links = await prisma.links.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Links and only return the `id`
     * const linksWithIdOnly = await prisma.links.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LinksUpdateManyAndReturnArgs>(args: SelectSubset<T, LinksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Links.
     * @param {LinksUpsertArgs} args - Arguments to update or create a Links.
     * @example
     * // Update or create a Links
     * const links = await prisma.links.upsert({
     *   create: {
     *     // ... data to create a Links
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Links we want to update
     *   }
     * })
     */
    upsert<T extends LinksUpsertArgs>(args: SelectSubset<T, LinksUpsertArgs<ExtArgs>>): Prisma__LinksClient<$Result.GetResult<Prisma.$LinksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinksCountArgs} args - Arguments to filter Links to count.
     * @example
     * // Count the number of Links
     * const count = await prisma.links.count({
     *   where: {
     *     // ... the filter for the Links we want to count
     *   }
     * })
    **/
    count<T extends LinksCountArgs>(
      args?: Subset<T, LinksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LinksAggregateArgs>(args: Subset<T, LinksAggregateArgs>): Prisma.PrismaPromise<GetLinksAggregateType<T>>

    /**
     * Group by Links.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LinksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinksGroupByArgs['orderBy'] }
        : { orderBy?: LinksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Links model
   */
  readonly fields: LinksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Links.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends Links$productArgs<ExtArgs> = {}>(args?: Subset<T, Links$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Links model
   */
  interface LinksFieldRefs {
    readonly id: FieldRef<"Links", 'String'>
    readonly images: FieldRef<"Links", 'Json'>
    readonly productUrl: FieldRef<"Links", 'Json'>
    readonly tracking: FieldRef<"Links", 'Json'>
    readonly defaultImages: FieldRef<"Links", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Links findUnique
   */
  export type LinksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinksInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where: LinksWhereUniqueInput
  }

  /**
   * Links findUniqueOrThrow
   */
  export type LinksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinksInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where: LinksWhereUniqueInput
  }

  /**
   * Links findFirst
   */
  export type LinksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinksInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinksOrderByWithRelationInput | LinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinksScalarFieldEnum | LinksScalarFieldEnum[]
  }

  /**
   * Links findFirstOrThrow
   */
  export type LinksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinksInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinksOrderByWithRelationInput | LinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Links.
     */
    cursor?: LinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Links.
     */
    distinct?: LinksScalarFieldEnum | LinksScalarFieldEnum[]
  }

  /**
   * Links findMany
   */
  export type LinksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinksInclude<ExtArgs> | null
    /**
     * Filter, which Links to fetch.
     */
    where?: LinksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Links to fetch.
     */
    orderBy?: LinksOrderByWithRelationInput | LinksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Links.
     */
    cursor?: LinksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Links from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Links.
     */
    skip?: number
    distinct?: LinksScalarFieldEnum | LinksScalarFieldEnum[]
  }

  /**
   * Links create
   */
  export type LinksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinksInclude<ExtArgs> | null
    /**
     * The data needed to create a Links.
     */
    data: XOR<LinksCreateInput, LinksUncheckedCreateInput>
  }

  /**
   * Links createMany
   */
  export type LinksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Links.
     */
    data: LinksCreateManyInput | LinksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Links createManyAndReturn
   */
  export type LinksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * The data used to create many Links.
     */
    data: LinksCreateManyInput | LinksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Links update
   */
  export type LinksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinksInclude<ExtArgs> | null
    /**
     * The data needed to update a Links.
     */
    data: XOR<LinksUpdateInput, LinksUncheckedUpdateInput>
    /**
     * Choose, which Links to update.
     */
    where: LinksWhereUniqueInput
  }

  /**
   * Links updateMany
   */
  export type LinksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Links.
     */
    data: XOR<LinksUpdateManyMutationInput, LinksUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinksWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Links updateManyAndReturn
   */
  export type LinksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * The data used to update Links.
     */
    data: XOR<LinksUpdateManyMutationInput, LinksUncheckedUpdateManyInput>
    /**
     * Filter which Links to update
     */
    where?: LinksWhereInput
    /**
     * Limit how many Links to update.
     */
    limit?: number
  }

  /**
   * Links upsert
   */
  export type LinksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinksInclude<ExtArgs> | null
    /**
     * The filter to search for the Links to update in case it exists.
     */
    where: LinksWhereUniqueInput
    /**
     * In case the Links found by the `where` argument doesn't exist, create a new Links with this data.
     */
    create: XOR<LinksCreateInput, LinksUncheckedCreateInput>
    /**
     * In case the Links was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinksUpdateInput, LinksUncheckedUpdateInput>
  }

  /**
   * Links delete
   */
  export type LinksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinksInclude<ExtArgs> | null
    /**
     * Filter which Links to delete.
     */
    where: LinksWhereUniqueInput
  }

  /**
   * Links deleteMany
   */
  export type LinksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Links to delete
     */
    where?: LinksWhereInput
    /**
     * Limit how many Links to delete.
     */
    limit?: number
  }

  /**
   * Links.product
   */
  export type Links$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * Links without action
   */
  export type LinksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Links
     */
    select?: LinksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Links
     */
    omit?: LinksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinksInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityAvgAggregateOutputType = {
    id: number | null
    max: number | null
  }

  export type AvailabilitySumAggregateOutputType = {
    id: number | null
    max: number | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: number | null
    isAvailable: boolean | null
    max: number | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: number | null
    isAvailable: boolean | null
    max: number | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    isAvailable: number
    max: number
    _all: number
  }


  export type AvailabilityAvgAggregateInputType = {
    id?: true
    max?: true
  }

  export type AvailabilitySumAggregateInputType = {
    id?: true
    max?: true
  }

  export type AvailabilityMinAggregateInputType = {
    id?: true
    isAvailable?: true
    max?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    isAvailable?: true
    max?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    isAvailable?: true
    max?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _avg?: AvailabilityAvgAggregateInputType
    _sum?: AvailabilitySumAggregateInputType
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: number
    isAvailable: boolean
    max: number
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAvailable?: boolean
    max?: boolean
    product?: boolean | Availability$productArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAvailable?: boolean
    max?: boolean
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isAvailable?: boolean
    max?: boolean
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    isAvailable?: boolean
    max?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isAvailable" | "max", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Availability$productArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      isAvailable: boolean
      max: number
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends Availability$productArgs<ExtArgs> = {}>(args?: Subset<T, Availability$productArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'Int'>
    readonly isAvailable: FieldRef<"Availability", 'Boolean'>
    readonly max: FieldRef<"Availability", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability.product
   */
  export type Availability$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    key: 'key',
    name: 'name',
    title: 'title',
    url: 'url',
    parentId: 'parentId',
    image: 'image',
    store: 'store',
    nameAr: 'nameAr',
    nameKa: 'nameKa',
    mediaWeb: 'mediaWeb',
    mediaMobile: 'mediaMobile',
    mediaWebAr: 'mediaWebAr',
    mediaMobileAr: 'mediaMobileAr',
    mediaWebKa: 'mediaWebKa',
    mediaMobileKa: 'mediaMobileKa',
    ctaUrl: 'ctaUrl',
    bgColor: 'bgColor',
    bg_color: 'bg_color',
    thumbnail: 'thumbnail',
    level: 'level',
    count: 'count',
    facetName: 'facetName',
    index: 'index',
    score: 'score'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    ean: 'ean',
    name: 'name',
    type: 'type',
    preorder: 'preorder',
    isExpress: 'isExpress',
    productOrigin: 'productOrigin',
    supplier: 'supplier',
    isBulk: 'isBulk',
    bulkMessage: 'bulkMessage',
    isScalable: 'isScalable',
    size: 'size',
    isFBC: 'isFBC',
    isMarketPlace: 'isMarketPlace',
    foodType: 'foodType',
    productCategoriesHearchi: 'productCategoriesHearchi',
    soldByWeight: 'soldByWeight',
    isRecommendable: 'isRecommendable',
    brandId: 'brandId',
    priceId: 'priceId',
    stockId: 'stockId',
    unitId: 'unitId',
    promoVoucher: 'promoVoucher',
    promoBadges: 'promoBadges',
    amendableOrders: 'amendableOrders',
    servingIntents: 'servingIntents',
    availableVariants: 'availableVariants',
    variants: 'variants',
    linksId: 'linksId',
    availabilityId: 'availabilityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const BrandScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type BrandScalarFieldEnum = (typeof BrandScalarFieldEnum)[keyof typeof BrandScalarFieldEnum]


  export const CategoryOnProductScalarFieldEnum: {
    productId: 'productId',
    categoryId: 'categoryId'
  };

  export type CategoryOnProductScalarFieldEnum = (typeof CategoryOnProductScalarFieldEnum)[keyof typeof CategoryOnProductScalarFieldEnum]


  export const DeliveryFeeScalarFieldEnum: {
    id: 'id',
    freeDeliveryThreshold: 'freeDeliveryThreshold',
    productId: 'productId'
  };

  export type DeliveryFeeScalarFieldEnum = (typeof DeliveryFeeScalarFieldEnum)[keyof typeof DeliveryFeeScalarFieldEnum]


  export const PriceScalarFieldEnum: {
    id: 'id',
    currency: 'currency',
    price: 'price',
    formattedValue: 'formattedValue',
    discountId: 'discountId',
    minBuyingValue: 'minBuyingValue'
  };

  export type PriceScalarFieldEnum = (typeof PriceScalarFieldEnum)[keyof typeof PriceScalarFieldEnum]


  export const DiscountScalarFieldEnum: {
    id: 'id',
    price: 'price',
    endDate: 'endDate',
    type: 'type',
    formattedValue: 'formattedValue',
    value: 'value',
    minBuyingValue: 'minBuyingValue'
  };

  export type DiscountScalarFieldEnum = (typeof DiscountScalarFieldEnum)[keyof typeof DiscountScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    sellerName: 'sellerName',
    shopId: 'shopId',
    type: 'type',
    purchaseIndicators: 'purchaseIndicators',
    shippingIndicator: 'shippingIndicator',
    productId: 'productId'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const StockScalarFieldEnum: {
    id: 'id',
    stockLevelStatus: 'stockLevelStatus',
    value: 'value'
  };

  export type StockScalarFieldEnum = (typeof StockScalarFieldEnum)[keyof typeof StockScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    unitOfMeasure: 'unitOfMeasure',
    itemsPerUnit: 'itemsPerUnit',
    incrementBy: 'incrementBy',
    size: 'size',
    max: 'max',
    min: 'min',
    unitItem: 'unitItem',
    maxToOrder: 'maxToOrder'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const LinksScalarFieldEnum: {
    id: 'id',
    images: 'images',
    productUrl: 'productUrl',
    tracking: 'tracking',
    defaultImages: 'defaultImages'
  };

  export type LinksScalarFieldEnum = (typeof LinksScalarFieldEnum)[keyof typeof LinksScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    isAvailable: 'isAvailable',
    max: 'max'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    storeId?: StringNullableFilter<"Category"> | string | null
    key?: StringNullableFilter<"Category"> | string | null
    name?: StringNullableFilter<"Category"> | string | null
    title?: StringNullableFilter<"Category"> | string | null
    url?: StringNullableFilter<"Category"> | string | null
    parentId?: StringNullableFilter<"Category"> | string | null
    image?: StringNullableFilter<"Category"> | string | null
    store?: IntNullableFilter<"Category"> | number | null
    nameAr?: StringNullableFilter<"Category"> | string | null
    nameKa?: StringNullableFilter<"Category"> | string | null
    mediaWeb?: StringNullableFilter<"Category"> | string | null
    mediaMobile?: StringNullableFilter<"Category"> | string | null
    mediaWebAr?: StringNullableFilter<"Category"> | string | null
    mediaMobileAr?: StringNullableFilter<"Category"> | string | null
    mediaWebKa?: StringNullableFilter<"Category"> | string | null
    mediaMobileKa?: StringNullableFilter<"Category"> | string | null
    ctaUrl?: StringNullableFilter<"Category"> | string | null
    bgColor?: StringNullableFilter<"Category"> | string | null
    bg_color?: StringNullableFilter<"Category"> | string | null
    thumbnail?: StringNullableFilter<"Category"> | string | null
    level?: IntNullableFilter<"Category"> | number | null
    count?: IntNullableFilter<"Category"> | number | null
    facetName?: StringNullableFilter<"Category"> | string | null
    index?: StringNullableFilter<"Category"> | string | null
    score?: IntNullableFilter<"Category"> | number | null
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    CategoryOnProduct?: CategoryOnProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrderInput | SortOrder
    key?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    store?: SortOrderInput | SortOrder
    nameAr?: SortOrderInput | SortOrder
    nameKa?: SortOrderInput | SortOrder
    mediaWeb?: SortOrderInput | SortOrder
    mediaMobile?: SortOrderInput | SortOrder
    mediaWebAr?: SortOrderInput | SortOrder
    mediaMobileAr?: SortOrderInput | SortOrder
    mediaWebKa?: SortOrderInput | SortOrder
    mediaMobileKa?: SortOrderInput | SortOrder
    ctaUrl?: SortOrderInput | SortOrder
    bgColor?: SortOrderInput | SortOrder
    bg_color?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    count?: SortOrderInput | SortOrder
    facetName?: SortOrderInput | SortOrder
    index?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    parent?: CategoryOrderByWithRelationInput
    children?: CategoryOrderByRelationAggregateInput
    CategoryOnProduct?: CategoryOnProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    storeId?: StringNullableFilter<"Category"> | string | null
    key?: StringNullableFilter<"Category"> | string | null
    name?: StringNullableFilter<"Category"> | string | null
    title?: StringNullableFilter<"Category"> | string | null
    url?: StringNullableFilter<"Category"> | string | null
    parentId?: StringNullableFilter<"Category"> | string | null
    image?: StringNullableFilter<"Category"> | string | null
    store?: IntNullableFilter<"Category"> | number | null
    nameAr?: StringNullableFilter<"Category"> | string | null
    nameKa?: StringNullableFilter<"Category"> | string | null
    mediaWeb?: StringNullableFilter<"Category"> | string | null
    mediaMobile?: StringNullableFilter<"Category"> | string | null
    mediaWebAr?: StringNullableFilter<"Category"> | string | null
    mediaMobileAr?: StringNullableFilter<"Category"> | string | null
    mediaWebKa?: StringNullableFilter<"Category"> | string | null
    mediaMobileKa?: StringNullableFilter<"Category"> | string | null
    ctaUrl?: StringNullableFilter<"Category"> | string | null
    bgColor?: StringNullableFilter<"Category"> | string | null
    bg_color?: StringNullableFilter<"Category"> | string | null
    thumbnail?: StringNullableFilter<"Category"> | string | null
    level?: IntNullableFilter<"Category"> | number | null
    count?: IntNullableFilter<"Category"> | number | null
    facetName?: StringNullableFilter<"Category"> | string | null
    index?: StringNullableFilter<"Category"> | string | null
    score?: IntNullableFilter<"Category"> | number | null
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    CategoryOnProduct?: CategoryOnProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrderInput | SortOrder
    key?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    store?: SortOrderInput | SortOrder
    nameAr?: SortOrderInput | SortOrder
    nameKa?: SortOrderInput | SortOrder
    mediaWeb?: SortOrderInput | SortOrder
    mediaMobile?: SortOrderInput | SortOrder
    mediaWebAr?: SortOrderInput | SortOrder
    mediaMobileAr?: SortOrderInput | SortOrder
    mediaWebKa?: SortOrderInput | SortOrder
    mediaMobileKa?: SortOrderInput | SortOrder
    ctaUrl?: SortOrderInput | SortOrder
    bgColor?: SortOrderInput | SortOrder
    bg_color?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    level?: SortOrderInput | SortOrder
    count?: SortOrderInput | SortOrder
    facetName?: SortOrderInput | SortOrder
    index?: SortOrderInput | SortOrder
    score?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    storeId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    key?: StringNullableWithAggregatesFilter<"Category"> | string | null
    name?: StringNullableWithAggregatesFilter<"Category"> | string | null
    title?: StringNullableWithAggregatesFilter<"Category"> | string | null
    url?: StringNullableWithAggregatesFilter<"Category"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
    image?: StringNullableWithAggregatesFilter<"Category"> | string | null
    store?: IntNullableWithAggregatesFilter<"Category"> | number | null
    nameAr?: StringNullableWithAggregatesFilter<"Category"> | string | null
    nameKa?: StringNullableWithAggregatesFilter<"Category"> | string | null
    mediaWeb?: StringNullableWithAggregatesFilter<"Category"> | string | null
    mediaMobile?: StringNullableWithAggregatesFilter<"Category"> | string | null
    mediaWebAr?: StringNullableWithAggregatesFilter<"Category"> | string | null
    mediaMobileAr?: StringNullableWithAggregatesFilter<"Category"> | string | null
    mediaWebKa?: StringNullableWithAggregatesFilter<"Category"> | string | null
    mediaMobileKa?: StringNullableWithAggregatesFilter<"Category"> | string | null
    ctaUrl?: StringNullableWithAggregatesFilter<"Category"> | string | null
    bgColor?: StringNullableWithAggregatesFilter<"Category"> | string | null
    bg_color?: StringNullableWithAggregatesFilter<"Category"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"Category"> | string | null
    level?: IntNullableWithAggregatesFilter<"Category"> | number | null
    count?: IntNullableWithAggregatesFilter<"Category"> | number | null
    facetName?: StringNullableWithAggregatesFilter<"Category"> | string | null
    index?: StringNullableWithAggregatesFilter<"Category"> | string | null
    score?: IntNullableWithAggregatesFilter<"Category"> | number | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    ean?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    type?: StringFilter<"Product"> | string
    preorder?: BoolFilter<"Product"> | boolean
    isExpress?: BoolFilter<"Product"> | boolean
    productOrigin?: StringNullableFilter<"Product"> | string | null
    supplier?: StringFilter<"Product"> | string
    isBulk?: BoolFilter<"Product"> | boolean
    bulkMessage?: StringFilter<"Product"> | string
    isScalable?: BoolFilter<"Product"> | boolean
    size?: StringNullableFilter<"Product"> | string | null
    isFBC?: BoolFilter<"Product"> | boolean
    isMarketPlace?: BoolFilter<"Product"> | boolean
    foodType?: StringNullableFilter<"Product"> | string | null
    productCategoriesHearchi?: StringFilter<"Product"> | string
    soldByWeight?: BoolFilter<"Product"> | boolean
    isRecommendable?: BoolFilter<"Product"> | boolean
    brandId?: StringNullableFilter<"Product"> | string | null
    priceId?: StringFilter<"Product"> | string
    stockId?: StringFilter<"Product"> | string
    unitId?: StringFilter<"Product"> | string
    promoVoucher?: JsonNullableFilter<"Product">
    promoBadges?: JsonNullableListFilter<"Product">
    amendableOrders?: JsonNullableListFilter<"Product">
    servingIntents?: StringNullableListFilter<"Product">
    availableVariants?: JsonNullableListFilter<"Product">
    variants?: JsonNullableListFilter<"Product">
    linksId?: StringFilter<"Product"> | string
    availabilityId?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    brand?: XOR<BrandNullableScalarRelationFilter, BrandWhereInput> | null
    category?: CategoryOnProductListRelationFilter
    deliveryFees?: XOR<DeliveryFeeNullableScalarRelationFilter, DeliveryFeeWhereInput> | null
    price?: XOR<PriceScalarRelationFilter, PriceWhereInput>
    offers?: OfferListRelationFilter
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    links?: XOR<LinksScalarRelationFilter, LinksWhereInput>
    availability?: XOR<AvailabilityNullableScalarRelationFilter, AvailabilityWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    ean?: SortOrder
    name?: SortOrder
    type?: SortOrder
    preorder?: SortOrder
    isExpress?: SortOrder
    productOrigin?: SortOrderInput | SortOrder
    supplier?: SortOrder
    isBulk?: SortOrder
    bulkMessage?: SortOrder
    isScalable?: SortOrder
    size?: SortOrderInput | SortOrder
    isFBC?: SortOrder
    isMarketPlace?: SortOrder
    foodType?: SortOrderInput | SortOrder
    productCategoriesHearchi?: SortOrder
    soldByWeight?: SortOrder
    isRecommendable?: SortOrder
    brandId?: SortOrderInput | SortOrder
    priceId?: SortOrder
    stockId?: SortOrder
    unitId?: SortOrder
    promoVoucher?: SortOrderInput | SortOrder
    promoBadges?: SortOrder
    amendableOrders?: SortOrder
    servingIntents?: SortOrder
    availableVariants?: SortOrder
    variants?: SortOrder
    linksId?: SortOrder
    availabilityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: BrandOrderByWithRelationInput
    category?: CategoryOnProductOrderByRelationAggregateInput
    deliveryFees?: DeliveryFeeOrderByWithRelationInput
    price?: PriceOrderByWithRelationInput
    offers?: OfferOrderByRelationAggregateInput
    stock?: StockOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    links?: LinksOrderByWithRelationInput
    availability?: AvailabilityOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ean?: string
    stockId?: string
    linksId?: string
    availabilityId?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    type?: StringFilter<"Product"> | string
    preorder?: BoolFilter<"Product"> | boolean
    isExpress?: BoolFilter<"Product"> | boolean
    productOrigin?: StringNullableFilter<"Product"> | string | null
    supplier?: StringFilter<"Product"> | string
    isBulk?: BoolFilter<"Product"> | boolean
    bulkMessage?: StringFilter<"Product"> | string
    isScalable?: BoolFilter<"Product"> | boolean
    size?: StringNullableFilter<"Product"> | string | null
    isFBC?: BoolFilter<"Product"> | boolean
    isMarketPlace?: BoolFilter<"Product"> | boolean
    foodType?: StringNullableFilter<"Product"> | string | null
    productCategoriesHearchi?: StringFilter<"Product"> | string
    soldByWeight?: BoolFilter<"Product"> | boolean
    isRecommendable?: BoolFilter<"Product"> | boolean
    brandId?: StringNullableFilter<"Product"> | string | null
    priceId?: StringFilter<"Product"> | string
    unitId?: StringFilter<"Product"> | string
    promoVoucher?: JsonNullableFilter<"Product">
    promoBadges?: JsonNullableListFilter<"Product">
    amendableOrders?: JsonNullableListFilter<"Product">
    servingIntents?: StringNullableListFilter<"Product">
    availableVariants?: JsonNullableListFilter<"Product">
    variants?: JsonNullableListFilter<"Product">
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    brand?: XOR<BrandNullableScalarRelationFilter, BrandWhereInput> | null
    category?: CategoryOnProductListRelationFilter
    deliveryFees?: XOR<DeliveryFeeNullableScalarRelationFilter, DeliveryFeeWhereInput> | null
    price?: XOR<PriceScalarRelationFilter, PriceWhereInput>
    offers?: OfferListRelationFilter
    stock?: XOR<StockScalarRelationFilter, StockWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    links?: XOR<LinksScalarRelationFilter, LinksWhereInput>
    availability?: XOR<AvailabilityNullableScalarRelationFilter, AvailabilityWhereInput> | null
  }, "id" | "ean" | "stockId" | "linksId" | "availabilityId">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    ean?: SortOrder
    name?: SortOrder
    type?: SortOrder
    preorder?: SortOrder
    isExpress?: SortOrder
    productOrigin?: SortOrderInput | SortOrder
    supplier?: SortOrder
    isBulk?: SortOrder
    bulkMessage?: SortOrder
    isScalable?: SortOrder
    size?: SortOrderInput | SortOrder
    isFBC?: SortOrder
    isMarketPlace?: SortOrder
    foodType?: SortOrderInput | SortOrder
    productCategoriesHearchi?: SortOrder
    soldByWeight?: SortOrder
    isRecommendable?: SortOrder
    brandId?: SortOrderInput | SortOrder
    priceId?: SortOrder
    stockId?: SortOrder
    unitId?: SortOrder
    promoVoucher?: SortOrderInput | SortOrder
    promoBadges?: SortOrder
    amendableOrders?: SortOrder
    servingIntents?: SortOrder
    availableVariants?: SortOrder
    variants?: SortOrder
    linksId?: SortOrder
    availabilityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    ean?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    type?: StringWithAggregatesFilter<"Product"> | string
    preorder?: BoolWithAggregatesFilter<"Product"> | boolean
    isExpress?: BoolWithAggregatesFilter<"Product"> | boolean
    productOrigin?: StringNullableWithAggregatesFilter<"Product"> | string | null
    supplier?: StringWithAggregatesFilter<"Product"> | string
    isBulk?: BoolWithAggregatesFilter<"Product"> | boolean
    bulkMessage?: StringWithAggregatesFilter<"Product"> | string
    isScalable?: BoolWithAggregatesFilter<"Product"> | boolean
    size?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isFBC?: BoolWithAggregatesFilter<"Product"> | boolean
    isMarketPlace?: BoolWithAggregatesFilter<"Product"> | boolean
    foodType?: StringNullableWithAggregatesFilter<"Product"> | string | null
    productCategoriesHearchi?: StringWithAggregatesFilter<"Product"> | string
    soldByWeight?: BoolWithAggregatesFilter<"Product"> | boolean
    isRecommendable?: BoolWithAggregatesFilter<"Product"> | boolean
    brandId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    priceId?: StringWithAggregatesFilter<"Product"> | string
    stockId?: StringWithAggregatesFilter<"Product"> | string
    unitId?: StringWithAggregatesFilter<"Product"> | string
    promoVoucher?: JsonNullableWithAggregatesFilter<"Product">
    promoBadges?: JsonNullableListFilter<"Product">
    amendableOrders?: JsonNullableListFilter<"Product">
    servingIntents?: StringNullableListFilter<"Product">
    availableVariants?: JsonNullableListFilter<"Product">
    variants?: JsonNullableListFilter<"Product">
    linksId?: StringWithAggregatesFilter<"Product"> | string
    availabilityId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type BrandWhereInput = {
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    id?: StringFilter<"Brand"> | string
    name?: StringNullableFilter<"Brand"> | string | null
    products?: ProductListRelationFilter
  }

  export type BrandOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type BrandWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BrandWhereInput | BrandWhereInput[]
    OR?: BrandWhereInput[]
    NOT?: BrandWhereInput | BrandWhereInput[]
    name?: StringNullableFilter<"Brand"> | string | null
    products?: ProductListRelationFilter
  }, "id">

  export type BrandOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: BrandCountOrderByAggregateInput
    _max?: BrandMaxOrderByAggregateInput
    _min?: BrandMinOrderByAggregateInput
  }

  export type BrandScalarWhereWithAggregatesInput = {
    AND?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    OR?: BrandScalarWhereWithAggregatesInput[]
    NOT?: BrandScalarWhereWithAggregatesInput | BrandScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brand"> | string
    name?: StringNullableWithAggregatesFilter<"Brand"> | string | null
  }

  export type CategoryOnProductWhereInput = {
    AND?: CategoryOnProductWhereInput | CategoryOnProductWhereInput[]
    OR?: CategoryOnProductWhereInput[]
    NOT?: CategoryOnProductWhereInput | CategoryOnProductWhereInput[]
    productId?: IntFilter<"CategoryOnProduct"> | number
    categoryId?: StringFilter<"CategoryOnProduct"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type CategoryOnProductOrderByWithRelationInput = {
    productId?: SortOrder
    categoryId?: SortOrder
    product?: ProductOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type CategoryOnProductWhereUniqueInput = Prisma.AtLeast<{
    productId_categoryId?: CategoryOnProductProductIdCategoryIdCompoundUniqueInput
    AND?: CategoryOnProductWhereInput | CategoryOnProductWhereInput[]
    OR?: CategoryOnProductWhereInput[]
    NOT?: CategoryOnProductWhereInput | CategoryOnProductWhereInput[]
    productId?: IntFilter<"CategoryOnProduct"> | number
    categoryId?: StringFilter<"CategoryOnProduct"> | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "productId_categoryId">

  export type CategoryOnProductOrderByWithAggregationInput = {
    productId?: SortOrder
    categoryId?: SortOrder
    _count?: CategoryOnProductCountOrderByAggregateInput
    _avg?: CategoryOnProductAvgOrderByAggregateInput
    _max?: CategoryOnProductMaxOrderByAggregateInput
    _min?: CategoryOnProductMinOrderByAggregateInput
    _sum?: CategoryOnProductSumOrderByAggregateInput
  }

  export type CategoryOnProductScalarWhereWithAggregatesInput = {
    AND?: CategoryOnProductScalarWhereWithAggregatesInput | CategoryOnProductScalarWhereWithAggregatesInput[]
    OR?: CategoryOnProductScalarWhereWithAggregatesInput[]
    NOT?: CategoryOnProductScalarWhereWithAggregatesInput | CategoryOnProductScalarWhereWithAggregatesInput[]
    productId?: IntWithAggregatesFilter<"CategoryOnProduct"> | number
    categoryId?: StringWithAggregatesFilter<"CategoryOnProduct"> | string
  }

  export type DeliveryFeeWhereInput = {
    AND?: DeliveryFeeWhereInput | DeliveryFeeWhereInput[]
    OR?: DeliveryFeeWhereInput[]
    NOT?: DeliveryFeeWhereInput | DeliveryFeeWhereInput[]
    id?: StringFilter<"DeliveryFee"> | string
    freeDeliveryThreshold?: IntFilter<"DeliveryFee"> | number
    productId?: IntNullableFilter<"DeliveryFee"> | number | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type DeliveryFeeOrderByWithRelationInput = {
    id?: SortOrder
    freeDeliveryThreshold?: SortOrder
    productId?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type DeliveryFeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    productId?: number
    AND?: DeliveryFeeWhereInput | DeliveryFeeWhereInput[]
    OR?: DeliveryFeeWhereInput[]
    NOT?: DeliveryFeeWhereInput | DeliveryFeeWhereInput[]
    freeDeliveryThreshold?: IntFilter<"DeliveryFee"> | number
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id" | "productId">

  export type DeliveryFeeOrderByWithAggregationInput = {
    id?: SortOrder
    freeDeliveryThreshold?: SortOrder
    productId?: SortOrderInput | SortOrder
    _count?: DeliveryFeeCountOrderByAggregateInput
    _avg?: DeliveryFeeAvgOrderByAggregateInput
    _max?: DeliveryFeeMaxOrderByAggregateInput
    _min?: DeliveryFeeMinOrderByAggregateInput
    _sum?: DeliveryFeeSumOrderByAggregateInput
  }

  export type DeliveryFeeScalarWhereWithAggregatesInput = {
    AND?: DeliveryFeeScalarWhereWithAggregatesInput | DeliveryFeeScalarWhereWithAggregatesInput[]
    OR?: DeliveryFeeScalarWhereWithAggregatesInput[]
    NOT?: DeliveryFeeScalarWhereWithAggregatesInput | DeliveryFeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryFee"> | string
    freeDeliveryThreshold?: IntWithAggregatesFilter<"DeliveryFee"> | number
    productId?: IntNullableWithAggregatesFilter<"DeliveryFee"> | number | null
  }

  export type PriceWhereInput = {
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    id?: StringFilter<"Price"> | string
    currency?: StringFilter<"Price"> | string
    price?: FloatFilter<"Price"> | number
    formattedValue?: StringFilter<"Price"> | string
    discountId?: StringNullableFilter<"Price"> | string | null
    minBuyingValue?: StringFilter<"Price"> | string
    discount?: XOR<DiscountNullableScalarRelationFilter, DiscountWhereInput> | null
    Product?: ProductListRelationFilter
  }

  export type PriceOrderByWithRelationInput = {
    id?: SortOrder
    currency?: SortOrder
    price?: SortOrder
    formattedValue?: SortOrder
    discountId?: SortOrderInput | SortOrder
    minBuyingValue?: SortOrder
    discount?: DiscountOrderByWithRelationInput
    Product?: ProductOrderByRelationAggregateInput
  }

  export type PriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceWhereInput | PriceWhereInput[]
    OR?: PriceWhereInput[]
    NOT?: PriceWhereInput | PriceWhereInput[]
    currency?: StringFilter<"Price"> | string
    price?: FloatFilter<"Price"> | number
    formattedValue?: StringFilter<"Price"> | string
    discountId?: StringNullableFilter<"Price"> | string | null
    minBuyingValue?: StringFilter<"Price"> | string
    discount?: XOR<DiscountNullableScalarRelationFilter, DiscountWhereInput> | null
    Product?: ProductListRelationFilter
  }, "id">

  export type PriceOrderByWithAggregationInput = {
    id?: SortOrder
    currency?: SortOrder
    price?: SortOrder
    formattedValue?: SortOrder
    discountId?: SortOrderInput | SortOrder
    minBuyingValue?: SortOrder
    _count?: PriceCountOrderByAggregateInput
    _avg?: PriceAvgOrderByAggregateInput
    _max?: PriceMaxOrderByAggregateInput
    _min?: PriceMinOrderByAggregateInput
    _sum?: PriceSumOrderByAggregateInput
  }

  export type PriceScalarWhereWithAggregatesInput = {
    AND?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    OR?: PriceScalarWhereWithAggregatesInput[]
    NOT?: PriceScalarWhereWithAggregatesInput | PriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Price"> | string
    currency?: StringWithAggregatesFilter<"Price"> | string
    price?: FloatWithAggregatesFilter<"Price"> | number
    formattedValue?: StringWithAggregatesFilter<"Price"> | string
    discountId?: StringNullableWithAggregatesFilter<"Price"> | string | null
    minBuyingValue?: StringWithAggregatesFilter<"Price"> | string
  }

  export type DiscountWhereInput = {
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    id?: StringFilter<"Discount"> | string
    price?: FloatFilter<"Discount"> | number
    endDate?: DateTimeFilter<"Discount"> | Date | string
    type?: StringFilter<"Discount"> | string
    formattedValue?: StringFilter<"Discount"> | string
    value?: IntFilter<"Discount"> | number
    minBuyingValue?: StringFilter<"Discount"> | string
    Price?: PriceListRelationFilter
  }

  export type DiscountOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    formattedValue?: SortOrder
    value?: SortOrder
    minBuyingValue?: SortOrder
    Price?: PriceOrderByRelationAggregateInput
  }

  export type DiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    price?: FloatFilter<"Discount"> | number
    endDate?: DateTimeFilter<"Discount"> | Date | string
    type?: StringFilter<"Discount"> | string
    formattedValue?: StringFilter<"Discount"> | string
    value?: IntFilter<"Discount"> | number
    minBuyingValue?: StringFilter<"Discount"> | string
    Price?: PriceListRelationFilter
  }, "id">

  export type DiscountOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    formattedValue?: SortOrder
    value?: SortOrder
    minBuyingValue?: SortOrder
    _count?: DiscountCountOrderByAggregateInput
    _avg?: DiscountAvgOrderByAggregateInput
    _max?: DiscountMaxOrderByAggregateInput
    _min?: DiscountMinOrderByAggregateInput
    _sum?: DiscountSumOrderByAggregateInput
  }

  export type DiscountScalarWhereWithAggregatesInput = {
    AND?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    OR?: DiscountScalarWhereWithAggregatesInput[]
    NOT?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Discount"> | string
    price?: FloatWithAggregatesFilter<"Discount"> | number
    endDate?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
    type?: StringWithAggregatesFilter<"Discount"> | string
    formattedValue?: StringWithAggregatesFilter<"Discount"> | string
    value?: IntWithAggregatesFilter<"Discount"> | number
    minBuyingValue?: StringWithAggregatesFilter<"Discount"> | string
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: StringFilter<"Offer"> | string
    sellerName?: StringFilter<"Offer"> | string
    shopId?: StringFilter<"Offer"> | string
    type?: StringFilter<"Offer"> | string
    purchaseIndicators?: JsonFilter<"Offer">
    shippingIndicator?: StringFilter<"Offer"> | string
    productId?: IntFilter<"Offer"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    sellerName?: SortOrder
    shopId?: SortOrder
    type?: SortOrder
    purchaseIndicators?: SortOrder
    shippingIndicator?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    sellerName?: StringFilter<"Offer"> | string
    shopId?: StringFilter<"Offer"> | string
    type?: StringFilter<"Offer"> | string
    purchaseIndicators?: JsonFilter<"Offer">
    shippingIndicator?: StringFilter<"Offer"> | string
    productId?: IntFilter<"Offer"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    sellerName?: SortOrder
    shopId?: SortOrder
    type?: SortOrder
    purchaseIndicators?: SortOrder
    shippingIndicator?: SortOrder
    productId?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Offer"> | string
    sellerName?: StringWithAggregatesFilter<"Offer"> | string
    shopId?: StringWithAggregatesFilter<"Offer"> | string
    type?: StringWithAggregatesFilter<"Offer"> | string
    purchaseIndicators?: JsonWithAggregatesFilter<"Offer">
    shippingIndicator?: StringWithAggregatesFilter<"Offer"> | string
    productId?: IntWithAggregatesFilter<"Offer"> | number
  }

  export type StockWhereInput = {
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    id?: StringFilter<"Stock"> | string
    stockLevelStatus?: StringFilter<"Stock"> | string
    value?: IntNullableFilter<"Stock"> | number | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type StockOrderByWithRelationInput = {
    id?: SortOrder
    stockLevelStatus?: SortOrder
    value?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type StockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockWhereInput | StockWhereInput[]
    OR?: StockWhereInput[]
    NOT?: StockWhereInput | StockWhereInput[]
    stockLevelStatus?: StringFilter<"Stock"> | string
    value?: IntNullableFilter<"Stock"> | number | null
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id">

  export type StockOrderByWithAggregationInput = {
    id?: SortOrder
    stockLevelStatus?: SortOrder
    value?: SortOrderInput | SortOrder
    _count?: StockCountOrderByAggregateInput
    _avg?: StockAvgOrderByAggregateInput
    _max?: StockMaxOrderByAggregateInput
    _min?: StockMinOrderByAggregateInput
    _sum?: StockSumOrderByAggregateInput
  }

  export type StockScalarWhereWithAggregatesInput = {
    AND?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    OR?: StockScalarWhereWithAggregatesInput[]
    NOT?: StockScalarWhereWithAggregatesInput | StockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stock"> | string
    stockLevelStatus?: StringWithAggregatesFilter<"Stock"> | string
    value?: IntNullableWithAggregatesFilter<"Stock"> | number | null
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    unitOfMeasure?: StringFilter<"Unit"> | string
    itemsPerUnit?: IntFilter<"Unit"> | number
    incrementBy?: FloatFilter<"Unit"> | number
    size?: StringFilter<"Unit"> | string
    max?: IntFilter<"Unit"> | number
    min?: FloatFilter<"Unit"> | number
    unitItem?: IntFilter<"Unit"> | number
    maxToOrder?: IntFilter<"Unit"> | number
    products?: ProductListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    unitOfMeasure?: SortOrder
    itemsPerUnit?: SortOrder
    incrementBy?: SortOrder
    size?: SortOrder
    max?: SortOrder
    min?: SortOrder
    unitItem?: SortOrder
    maxToOrder?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    unitOfMeasure?: StringFilter<"Unit"> | string
    itemsPerUnit?: IntFilter<"Unit"> | number
    incrementBy?: FloatFilter<"Unit"> | number
    size?: StringFilter<"Unit"> | string
    max?: IntFilter<"Unit"> | number
    min?: FloatFilter<"Unit"> | number
    unitItem?: IntFilter<"Unit"> | number
    maxToOrder?: IntFilter<"Unit"> | number
    products?: ProductListRelationFilter
  }, "id">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    unitOfMeasure?: SortOrder
    itemsPerUnit?: SortOrder
    incrementBy?: SortOrder
    size?: SortOrder
    max?: SortOrder
    min?: SortOrder
    unitItem?: SortOrder
    maxToOrder?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    unitOfMeasure?: StringWithAggregatesFilter<"Unit"> | string
    itemsPerUnit?: IntWithAggregatesFilter<"Unit"> | number
    incrementBy?: FloatWithAggregatesFilter<"Unit"> | number
    size?: StringWithAggregatesFilter<"Unit"> | string
    max?: IntWithAggregatesFilter<"Unit"> | number
    min?: FloatWithAggregatesFilter<"Unit"> | number
    unitItem?: IntWithAggregatesFilter<"Unit"> | number
    maxToOrder?: IntWithAggregatesFilter<"Unit"> | number
  }

  export type LinksWhereInput = {
    AND?: LinksWhereInput | LinksWhereInput[]
    OR?: LinksWhereInput[]
    NOT?: LinksWhereInput | LinksWhereInput[]
    id?: StringFilter<"Links"> | string
    images?: JsonFilter<"Links">
    productUrl?: JsonFilter<"Links">
    tracking?: JsonFilter<"Links">
    defaultImages?: StringNullableListFilter<"Links">
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type LinksOrderByWithRelationInput = {
    id?: SortOrder
    images?: SortOrder
    productUrl?: SortOrder
    tracking?: SortOrder
    defaultImages?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type LinksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LinksWhereInput | LinksWhereInput[]
    OR?: LinksWhereInput[]
    NOT?: LinksWhereInput | LinksWhereInput[]
    images?: JsonFilter<"Links">
    productUrl?: JsonFilter<"Links">
    tracking?: JsonFilter<"Links">
    defaultImages?: StringNullableListFilter<"Links">
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id">

  export type LinksOrderByWithAggregationInput = {
    id?: SortOrder
    images?: SortOrder
    productUrl?: SortOrder
    tracking?: SortOrder
    defaultImages?: SortOrder
    _count?: LinksCountOrderByAggregateInput
    _max?: LinksMaxOrderByAggregateInput
    _min?: LinksMinOrderByAggregateInput
  }

  export type LinksScalarWhereWithAggregatesInput = {
    AND?: LinksScalarWhereWithAggregatesInput | LinksScalarWhereWithAggregatesInput[]
    OR?: LinksScalarWhereWithAggregatesInput[]
    NOT?: LinksScalarWhereWithAggregatesInput | LinksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Links"> | string
    images?: JsonWithAggregatesFilter<"Links">
    productUrl?: JsonWithAggregatesFilter<"Links">
    tracking?: JsonWithAggregatesFilter<"Links">
    defaultImages?: StringNullableListFilter<"Links">
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: IntFilter<"Availability"> | number
    isAvailable?: BoolFilter<"Availability"> | boolean
    max?: IntFilter<"Availability"> | number
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    isAvailable?: SortOrder
    max?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    isAvailable?: BoolFilter<"Availability"> | boolean
    max?: IntFilter<"Availability"> | number
    product?: XOR<ProductNullableScalarRelationFilter, ProductWhereInput> | null
  }, "id">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    isAvailable?: SortOrder
    max?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _avg?: AvailabilityAvgOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
    _sum?: AvailabilitySumOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Availability"> | number
    isAvailable?: BoolWithAggregatesFilter<"Availability"> | boolean
    max?: IntWithAggregatesFilter<"Availability"> | number
  }

  export type CategoryCreateInput = {
    id: string
    storeId?: string | null
    key?: string | null
    name?: string | null
    title?: string | null
    url?: string | null
    image?: string | null
    store?: number | null
    nameAr?: string | null
    nameKa?: string | null
    mediaWeb?: string | null
    mediaMobile?: string | null
    mediaWebAr?: string | null
    mediaMobileAr?: string | null
    mediaWebKa?: string | null
    mediaMobileKa?: string | null
    ctaUrl?: string | null
    bgColor?: string | null
    bg_color?: string | null
    thumbnail?: string | null
    level?: number | null
    count?: number | null
    facetName?: string | null
    index?: string | null
    score?: number | null
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    CategoryOnProduct?: CategoryOnProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id: string
    storeId?: string | null
    key?: string | null
    name?: string | null
    title?: string | null
    url?: string | null
    parentId?: string | null
    image?: string | null
    store?: number | null
    nameAr?: string | null
    nameKa?: string | null
    mediaWeb?: string | null
    mediaMobile?: string | null
    mediaWebAr?: string | null
    mediaMobileAr?: string | null
    mediaWebKa?: string | null
    mediaMobileKa?: string | null
    ctaUrl?: string | null
    bgColor?: string | null
    bg_color?: string | null
    thumbnail?: string | null
    level?: number | null
    count?: number | null
    facetName?: string | null
    index?: string | null
    score?: number | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    CategoryOnProduct?: CategoryOnProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableIntFieldUpdateOperationsInput | number | null
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    nameKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWeb?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileKa?: NullableStringFieldUpdateOperationsInput | string | null
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    bg_color?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    facetName?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    CategoryOnProduct?: CategoryOnProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableIntFieldUpdateOperationsInput | number | null
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    nameKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWeb?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileKa?: NullableStringFieldUpdateOperationsInput | string | null
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    bg_color?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    facetName?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    CategoryOnProduct?: CategoryOnProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id: string
    storeId?: string | null
    key?: string | null
    name?: string | null
    title?: string | null
    url?: string | null
    parentId?: string | null
    image?: string | null
    store?: number | null
    nameAr?: string | null
    nameKa?: string | null
    mediaWeb?: string | null
    mediaMobile?: string | null
    mediaWebAr?: string | null
    mediaMobileAr?: string | null
    mediaWebKa?: string | null
    mediaMobileKa?: string | null
    ctaUrl?: string | null
    bgColor?: string | null
    bg_color?: string | null
    thumbnail?: string | null
    level?: number | null
    count?: number | null
    facetName?: string | null
    index?: string | null
    score?: number | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableIntFieldUpdateOperationsInput | number | null
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    nameKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWeb?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileKa?: NullableStringFieldUpdateOperationsInput | string | null
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    bg_color?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    facetName?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableIntFieldUpdateOperationsInput | number | null
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    nameKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWeb?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileKa?: NullableStringFieldUpdateOperationsInput | string | null
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    bg_color?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    facetName?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductCreateInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
    category?: CategoryOnProductCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeCreateNestedOneWithoutProductInput
    price: PriceCreateNestedOneWithoutProductInput
    offers?: OfferCreateNestedManyWithoutProductInput
    stock: StockCreateNestedOneWithoutProductInput
    unit: UnitCreateNestedOneWithoutProductsInput
    links: LinksCreateNestedOneWithoutProductInput
    availability?: AvailabilityCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    priceId: string
    stockId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeUncheckedCreateNestedOneWithoutProductInput
    offers?: OfferUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
    category?: CategoryOnProductUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUpdateOneWithoutProductNestedInput
    price?: PriceUpdateOneRequiredWithoutProductNestedInput
    offers?: OfferUpdateManyWithoutProductNestedInput
    stock?: StockUpdateOneRequiredWithoutProductNestedInput
    unit?: UnitUpdateOneRequiredWithoutProductsNestedInput
    links?: LinksUpdateOneRequiredWithoutProductNestedInput
    availability?: AvailabilityUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUncheckedUpdateOneWithoutProductNestedInput
    offers?: OfferUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    priceId: string
    stockId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrandCreateInput = {
    id: string
    name?: string | null
    products?: ProductCreateNestedManyWithoutBrandInput
  }

  export type BrandUncheckedCreateInput = {
    id: string
    name?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutBrandNestedInput
  }

  export type BrandUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandCreateManyInput = {
    id: string
    name?: string | null
  }

  export type BrandUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryOnProductCreateInput = {
    product: ProductCreateNestedOneWithoutCategoryInput
    category: CategoryCreateNestedOneWithoutCategoryOnProductInput
  }

  export type CategoryOnProductUncheckedCreateInput = {
    productId: number
    categoryId: string
  }

  export type CategoryOnProductUpdateInput = {
    product?: ProductUpdateOneRequiredWithoutCategoryNestedInput
    category?: CategoryUpdateOneRequiredWithoutCategoryOnProductNestedInput
  }

  export type CategoryOnProductUncheckedUpdateInput = {
    productId?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryOnProductCreateManyInput = {
    productId: number
    categoryId: string
  }

  export type CategoryOnProductUpdateManyMutationInput = {

  }

  export type CategoryOnProductUncheckedUpdateManyInput = {
    productId?: IntFieldUpdateOperationsInput | number
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type DeliveryFeeCreateInput = {
    id?: string
    freeDeliveryThreshold: number
    product?: ProductCreateNestedOneWithoutDeliveryFeesInput
  }

  export type DeliveryFeeUncheckedCreateInput = {
    id?: string
    freeDeliveryThreshold: number
    productId?: number | null
  }

  export type DeliveryFeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    freeDeliveryThreshold?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneWithoutDeliveryFeesNestedInput
  }

  export type DeliveryFeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    freeDeliveryThreshold?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DeliveryFeeCreateManyInput = {
    id?: string
    freeDeliveryThreshold: number
    productId?: number | null
  }

  export type DeliveryFeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    freeDeliveryThreshold?: IntFieldUpdateOperationsInput | number
  }

  export type DeliveryFeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    freeDeliveryThreshold?: IntFieldUpdateOperationsInput | number
    productId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PriceCreateInput = {
    id?: string
    currency: string
    price: number
    formattedValue: string
    minBuyingValue: string
    discount?: DiscountCreateNestedOneWithoutPriceInput
    Product?: ProductCreateNestedManyWithoutPriceInput
  }

  export type PriceUncheckedCreateInput = {
    id?: string
    currency: string
    price: number
    formattedValue: string
    discountId?: string | null
    minBuyingValue: string
    Product?: ProductUncheckedCreateNestedManyWithoutPriceInput
  }

  export type PriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    formattedValue?: StringFieldUpdateOperationsInput | string
    minBuyingValue?: StringFieldUpdateOperationsInput | string
    discount?: DiscountUpdateOneWithoutPriceNestedInput
    Product?: ProductUpdateManyWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    formattedValue?: StringFieldUpdateOperationsInput | string
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    minBuyingValue?: StringFieldUpdateOperationsInput | string
    Product?: ProductUncheckedUpdateManyWithoutPriceNestedInput
  }

  export type PriceCreateManyInput = {
    id?: string
    currency: string
    price: number
    formattedValue: string
    discountId?: string | null
    minBuyingValue: string
  }

  export type PriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    formattedValue?: StringFieldUpdateOperationsInput | string
    minBuyingValue?: StringFieldUpdateOperationsInput | string
  }

  export type PriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    formattedValue?: StringFieldUpdateOperationsInput | string
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    minBuyingValue?: StringFieldUpdateOperationsInput | string
  }

  export type DiscountCreateInput = {
    id?: string
    price: number
    endDate: Date | string
    type: string
    formattedValue: string
    value: number
    minBuyingValue: string
    Price?: PriceCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUncheckedCreateInput = {
    id?: string
    price: number
    endDate: Date | string
    type: string
    formattedValue: string
    value: number
    minBuyingValue: string
    Price?: PriceUncheckedCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    formattedValue?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    minBuyingValue?: StringFieldUpdateOperationsInput | string
    Price?: PriceUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    formattedValue?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    minBuyingValue?: StringFieldUpdateOperationsInput | string
    Price?: PriceUncheckedUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountCreateManyInput = {
    id?: string
    price: number
    endDate: Date | string
    type: string
    formattedValue: string
    value: number
    minBuyingValue: string
  }

  export type DiscountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    formattedValue?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    minBuyingValue?: StringFieldUpdateOperationsInput | string
  }

  export type DiscountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    formattedValue?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    minBuyingValue?: StringFieldUpdateOperationsInput | string
  }

  export type OfferCreateInput = {
    id: string
    sellerName: string
    shopId: string
    type: string
    purchaseIndicators: JsonNullValueInput | InputJsonValue
    shippingIndicator: string
    product: ProductCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateInput = {
    id: string
    sellerName: string
    shopId: string
    type: string
    purchaseIndicators: JsonNullValueInput | InputJsonValue
    shippingIndicator: string
    productId: number
  }

  export type OfferUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerName?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    purchaseIndicators?: JsonNullValueInput | InputJsonValue
    shippingIndicator?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerName?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    purchaseIndicators?: JsonNullValueInput | InputJsonValue
    shippingIndicator?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OfferCreateManyInput = {
    id: string
    sellerName: string
    shopId: string
    type: string
    purchaseIndicators: JsonNullValueInput | InputJsonValue
    shippingIndicator: string
    productId: number
  }

  export type OfferUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerName?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    purchaseIndicators?: JsonNullValueInput | InputJsonValue
    shippingIndicator?: StringFieldUpdateOperationsInput | string
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerName?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    purchaseIndicators?: JsonNullValueInput | InputJsonValue
    shippingIndicator?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type StockCreateInput = {
    id?: string
    stockLevelStatus: string
    value?: number | null
    product?: ProductCreateNestedOneWithoutStockInput
  }

  export type StockUncheckedCreateInput = {
    id?: string
    stockLevelStatus: string
    value?: number | null
    product?: ProductUncheckedCreateNestedOneWithoutStockInput
  }

  export type StockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLevelStatus?: StringFieldUpdateOperationsInput | string
    value?: NullableIntFieldUpdateOperationsInput | number | null
    product?: ProductUpdateOneWithoutStockNestedInput
  }

  export type StockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLevelStatus?: StringFieldUpdateOperationsInput | string
    value?: NullableIntFieldUpdateOperationsInput | number | null
    product?: ProductUncheckedUpdateOneWithoutStockNestedInput
  }

  export type StockCreateManyInput = {
    id?: string
    stockLevelStatus: string
    value?: number | null
  }

  export type StockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLevelStatus?: StringFieldUpdateOperationsInput | string
    value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLevelStatus?: StringFieldUpdateOperationsInput | string
    value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UnitCreateInput = {
    id?: string
    unitOfMeasure: string
    itemsPerUnit: number
    incrementBy: number
    size: string
    max: number
    min: number
    unitItem: number
    maxToOrder: number
    products?: ProductCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    unitOfMeasure: string
    itemsPerUnit: number
    incrementBy: number
    size: string
    max: number
    min: number
    unitItem: number
    maxToOrder: number
    products?: ProductUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitOfMeasure?: StringFieldUpdateOperationsInput | string
    itemsPerUnit?: IntFieldUpdateOperationsInput | number
    incrementBy?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    max?: IntFieldUpdateOperationsInput | number
    min?: FloatFieldUpdateOperationsInput | number
    unitItem?: IntFieldUpdateOperationsInput | number
    maxToOrder?: IntFieldUpdateOperationsInput | number
    products?: ProductUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitOfMeasure?: StringFieldUpdateOperationsInput | string
    itemsPerUnit?: IntFieldUpdateOperationsInput | number
    incrementBy?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    max?: IntFieldUpdateOperationsInput | number
    min?: FloatFieldUpdateOperationsInput | number
    unitItem?: IntFieldUpdateOperationsInput | number
    maxToOrder?: IntFieldUpdateOperationsInput | number
    products?: ProductUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    unitOfMeasure: string
    itemsPerUnit: number
    incrementBy: number
    size: string
    max: number
    min: number
    unitItem: number
    maxToOrder: number
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitOfMeasure?: StringFieldUpdateOperationsInput | string
    itemsPerUnit?: IntFieldUpdateOperationsInput | number
    incrementBy?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    max?: IntFieldUpdateOperationsInput | number
    min?: FloatFieldUpdateOperationsInput | number
    unitItem?: IntFieldUpdateOperationsInput | number
    maxToOrder?: IntFieldUpdateOperationsInput | number
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitOfMeasure?: StringFieldUpdateOperationsInput | string
    itemsPerUnit?: IntFieldUpdateOperationsInput | number
    incrementBy?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    max?: IntFieldUpdateOperationsInput | number
    min?: FloatFieldUpdateOperationsInput | number
    unitItem?: IntFieldUpdateOperationsInput | number
    maxToOrder?: IntFieldUpdateOperationsInput | number
  }

  export type LinksCreateInput = {
    id?: string
    images: JsonNullValueInput | InputJsonValue
    productUrl: JsonNullValueInput | InputJsonValue
    tracking: JsonNullValueInput | InputJsonValue
    defaultImages?: LinksCreatedefaultImagesInput | string[]
    product?: ProductCreateNestedOneWithoutLinksInput
  }

  export type LinksUncheckedCreateInput = {
    id?: string
    images: JsonNullValueInput | InputJsonValue
    productUrl: JsonNullValueInput | InputJsonValue
    tracking: JsonNullValueInput | InputJsonValue
    defaultImages?: LinksCreatedefaultImagesInput | string[]
    product?: ProductUncheckedCreateNestedOneWithoutLinksInput
  }

  export type LinksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    productUrl?: JsonNullValueInput | InputJsonValue
    tracking?: JsonNullValueInput | InputJsonValue
    defaultImages?: LinksUpdatedefaultImagesInput | string[]
    product?: ProductUpdateOneWithoutLinksNestedInput
  }

  export type LinksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    productUrl?: JsonNullValueInput | InputJsonValue
    tracking?: JsonNullValueInput | InputJsonValue
    defaultImages?: LinksUpdatedefaultImagesInput | string[]
    product?: ProductUncheckedUpdateOneWithoutLinksNestedInput
  }

  export type LinksCreateManyInput = {
    id?: string
    images: JsonNullValueInput | InputJsonValue
    productUrl: JsonNullValueInput | InputJsonValue
    tracking: JsonNullValueInput | InputJsonValue
    defaultImages?: LinksCreatedefaultImagesInput | string[]
  }

  export type LinksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    productUrl?: JsonNullValueInput | InputJsonValue
    tracking?: JsonNullValueInput | InputJsonValue
    defaultImages?: LinksUpdatedefaultImagesInput | string[]
  }

  export type LinksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    productUrl?: JsonNullValueInput | InputJsonValue
    tracking?: JsonNullValueInput | InputJsonValue
    defaultImages?: LinksUpdatedefaultImagesInput | string[]
  }

  export type AvailabilityCreateInput = {
    isAvailable: boolean
    max: number
    product?: ProductCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: number
    isAvailable: boolean
    max: number
    product?: ProductUncheckedCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUpdateInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    max?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    max?: IntFieldUpdateOperationsInput | number
    product?: ProductUncheckedUpdateOneWithoutAvailabilityNestedInput
  }

  export type AvailabilityCreateManyInput = {
    id?: number
    isAvailable: boolean
    max: number
  }

  export type AvailabilityUpdateManyMutationInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    max?: IntFieldUpdateOperationsInput | number
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    max?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOnProductListRelationFilter = {
    every?: CategoryOnProductWhereInput
    some?: CategoryOnProductWhereInput
    none?: CategoryOnProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOnProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    key?: SortOrder
    name?: SortOrder
    title?: SortOrder
    url?: SortOrder
    parentId?: SortOrder
    image?: SortOrder
    store?: SortOrder
    nameAr?: SortOrder
    nameKa?: SortOrder
    mediaWeb?: SortOrder
    mediaMobile?: SortOrder
    mediaWebAr?: SortOrder
    mediaMobileAr?: SortOrder
    mediaWebKa?: SortOrder
    mediaMobileKa?: SortOrder
    ctaUrl?: SortOrder
    bgColor?: SortOrder
    bg_color?: SortOrder
    thumbnail?: SortOrder
    level?: SortOrder
    count?: SortOrder
    facetName?: SortOrder
    index?: SortOrder
    score?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    store?: SortOrder
    level?: SortOrder
    count?: SortOrder
    score?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    key?: SortOrder
    name?: SortOrder
    title?: SortOrder
    url?: SortOrder
    parentId?: SortOrder
    image?: SortOrder
    store?: SortOrder
    nameAr?: SortOrder
    nameKa?: SortOrder
    mediaWeb?: SortOrder
    mediaMobile?: SortOrder
    mediaWebAr?: SortOrder
    mediaMobileAr?: SortOrder
    mediaWebKa?: SortOrder
    mediaMobileKa?: SortOrder
    ctaUrl?: SortOrder
    bgColor?: SortOrder
    bg_color?: SortOrder
    thumbnail?: SortOrder
    level?: SortOrder
    count?: SortOrder
    facetName?: SortOrder
    index?: SortOrder
    score?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    key?: SortOrder
    name?: SortOrder
    title?: SortOrder
    url?: SortOrder
    parentId?: SortOrder
    image?: SortOrder
    store?: SortOrder
    nameAr?: SortOrder
    nameKa?: SortOrder
    mediaWeb?: SortOrder
    mediaMobile?: SortOrder
    mediaWebAr?: SortOrder
    mediaMobileAr?: SortOrder
    mediaWebKa?: SortOrder
    mediaMobileKa?: SortOrder
    ctaUrl?: SortOrder
    bgColor?: SortOrder
    bg_color?: SortOrder
    thumbnail?: SortOrder
    level?: SortOrder
    count?: SortOrder
    facetName?: SortOrder
    index?: SortOrder
    score?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    store?: SortOrder
    level?: SortOrder
    count?: SortOrder
    score?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BrandNullableScalarRelationFilter = {
    is?: BrandWhereInput | null
    isNot?: BrandWhereInput | null
  }

  export type DeliveryFeeNullableScalarRelationFilter = {
    is?: DeliveryFeeWhereInput | null
    isNot?: DeliveryFeeWhereInput | null
  }

  export type PriceScalarRelationFilter = {
    is?: PriceWhereInput
    isNot?: PriceWhereInput
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type StockScalarRelationFilter = {
    is?: StockWhereInput
    isNot?: StockWhereInput
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type LinksScalarRelationFilter = {
    is?: LinksWhereInput
    isNot?: LinksWhereInput
  }

  export type AvailabilityNullableScalarRelationFilter = {
    is?: AvailabilityWhereInput | null
    isNot?: AvailabilityWhereInput | null
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    ean?: SortOrder
    name?: SortOrder
    type?: SortOrder
    preorder?: SortOrder
    isExpress?: SortOrder
    productOrigin?: SortOrder
    supplier?: SortOrder
    isBulk?: SortOrder
    bulkMessage?: SortOrder
    isScalable?: SortOrder
    size?: SortOrder
    isFBC?: SortOrder
    isMarketPlace?: SortOrder
    foodType?: SortOrder
    productCategoriesHearchi?: SortOrder
    soldByWeight?: SortOrder
    isRecommendable?: SortOrder
    brandId?: SortOrder
    priceId?: SortOrder
    stockId?: SortOrder
    unitId?: SortOrder
    promoVoucher?: SortOrder
    promoBadges?: SortOrder
    amendableOrders?: SortOrder
    servingIntents?: SortOrder
    availableVariants?: SortOrder
    variants?: SortOrder
    linksId?: SortOrder
    availabilityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    availabilityId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    ean?: SortOrder
    name?: SortOrder
    type?: SortOrder
    preorder?: SortOrder
    isExpress?: SortOrder
    productOrigin?: SortOrder
    supplier?: SortOrder
    isBulk?: SortOrder
    bulkMessage?: SortOrder
    isScalable?: SortOrder
    size?: SortOrder
    isFBC?: SortOrder
    isMarketPlace?: SortOrder
    foodType?: SortOrder
    productCategoriesHearchi?: SortOrder
    soldByWeight?: SortOrder
    isRecommendable?: SortOrder
    brandId?: SortOrder
    priceId?: SortOrder
    stockId?: SortOrder
    unitId?: SortOrder
    linksId?: SortOrder
    availabilityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    ean?: SortOrder
    name?: SortOrder
    type?: SortOrder
    preorder?: SortOrder
    isExpress?: SortOrder
    productOrigin?: SortOrder
    supplier?: SortOrder
    isBulk?: SortOrder
    bulkMessage?: SortOrder
    isScalable?: SortOrder
    size?: SortOrder
    isFBC?: SortOrder
    isMarketPlace?: SortOrder
    foodType?: SortOrder
    productCategoriesHearchi?: SortOrder
    soldByWeight?: SortOrder
    isRecommendable?: SortOrder
    brandId?: SortOrder
    priceId?: SortOrder
    stockId?: SortOrder
    unitId?: SortOrder
    linksId?: SortOrder
    availabilityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    availabilityId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BrandMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CategoryOnProductProductIdCategoryIdCompoundUniqueInput = {
    productId: number
    categoryId: string
  }

  export type CategoryOnProductCountOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryOnProductAvgOrderByAggregateInput = {
    productId?: SortOrder
  }

  export type CategoryOnProductMaxOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryOnProductMinOrderByAggregateInput = {
    productId?: SortOrder
    categoryId?: SortOrder
  }

  export type CategoryOnProductSumOrderByAggregateInput = {
    productId?: SortOrder
  }

  export type ProductNullableScalarRelationFilter = {
    is?: ProductWhereInput | null
    isNot?: ProductWhereInput | null
  }

  export type DeliveryFeeCountOrderByAggregateInput = {
    id?: SortOrder
    freeDeliveryThreshold?: SortOrder
    productId?: SortOrder
  }

  export type DeliveryFeeAvgOrderByAggregateInput = {
    freeDeliveryThreshold?: SortOrder
    productId?: SortOrder
  }

  export type DeliveryFeeMaxOrderByAggregateInput = {
    id?: SortOrder
    freeDeliveryThreshold?: SortOrder
    productId?: SortOrder
  }

  export type DeliveryFeeMinOrderByAggregateInput = {
    id?: SortOrder
    freeDeliveryThreshold?: SortOrder
    productId?: SortOrder
  }

  export type DeliveryFeeSumOrderByAggregateInput = {
    freeDeliveryThreshold?: SortOrder
    productId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DiscountNullableScalarRelationFilter = {
    is?: DiscountWhereInput | null
    isNot?: DiscountWhereInput | null
  }

  export type PriceCountOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    price?: SortOrder
    formattedValue?: SortOrder
    discountId?: SortOrder
    minBuyingValue?: SortOrder
  }

  export type PriceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PriceMaxOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    price?: SortOrder
    formattedValue?: SortOrder
    discountId?: SortOrder
    minBuyingValue?: SortOrder
  }

  export type PriceMinOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    price?: SortOrder
    formattedValue?: SortOrder
    discountId?: SortOrder
    minBuyingValue?: SortOrder
  }

  export type PriceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PriceListRelationFilter = {
    every?: PriceWhereInput
    some?: PriceWhereInput
    none?: PriceWhereInput
  }

  export type PriceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscountCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    formattedValue?: SortOrder
    value?: SortOrder
    minBuyingValue?: SortOrder
  }

  export type DiscountAvgOrderByAggregateInput = {
    price?: SortOrder
    value?: SortOrder
  }

  export type DiscountMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    formattedValue?: SortOrder
    value?: SortOrder
    minBuyingValue?: SortOrder
  }

  export type DiscountMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    formattedValue?: SortOrder
    value?: SortOrder
    minBuyingValue?: SortOrder
  }

  export type DiscountSumOrderByAggregateInput = {
    price?: SortOrder
    value?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    sellerName?: SortOrder
    shopId?: SortOrder
    type?: SortOrder
    purchaseIndicators?: SortOrder
    shippingIndicator?: SortOrder
    productId?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    productId?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    sellerName?: SortOrder
    shopId?: SortOrder
    type?: SortOrder
    shippingIndicator?: SortOrder
    productId?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    sellerName?: SortOrder
    shopId?: SortOrder
    type?: SortOrder
    shippingIndicator?: SortOrder
    productId?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    productId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StockCountOrderByAggregateInput = {
    id?: SortOrder
    stockLevelStatus?: SortOrder
    value?: SortOrder
  }

  export type StockAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type StockMaxOrderByAggregateInput = {
    id?: SortOrder
    stockLevelStatus?: SortOrder
    value?: SortOrder
  }

  export type StockMinOrderByAggregateInput = {
    id?: SortOrder
    stockLevelStatus?: SortOrder
    value?: SortOrder
  }

  export type StockSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    unitOfMeasure?: SortOrder
    itemsPerUnit?: SortOrder
    incrementBy?: SortOrder
    size?: SortOrder
    max?: SortOrder
    min?: SortOrder
    unitItem?: SortOrder
    maxToOrder?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    itemsPerUnit?: SortOrder
    incrementBy?: SortOrder
    max?: SortOrder
    min?: SortOrder
    unitItem?: SortOrder
    maxToOrder?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    unitOfMeasure?: SortOrder
    itemsPerUnit?: SortOrder
    incrementBy?: SortOrder
    size?: SortOrder
    max?: SortOrder
    min?: SortOrder
    unitItem?: SortOrder
    maxToOrder?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    unitOfMeasure?: SortOrder
    itemsPerUnit?: SortOrder
    incrementBy?: SortOrder
    size?: SortOrder
    max?: SortOrder
    min?: SortOrder
    unitItem?: SortOrder
    maxToOrder?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    itemsPerUnit?: SortOrder
    incrementBy?: SortOrder
    max?: SortOrder
    min?: SortOrder
    unitItem?: SortOrder
    maxToOrder?: SortOrder
  }

  export type LinksCountOrderByAggregateInput = {
    id?: SortOrder
    images?: SortOrder
    productUrl?: SortOrder
    tracking?: SortOrder
    defaultImages?: SortOrder
  }

  export type LinksMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LinksMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    isAvailable?: SortOrder
    max?: SortOrder
  }

  export type AvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    max?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    isAvailable?: SortOrder
    max?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    isAvailable?: SortOrder
    max?: SortOrder
  }

  export type AvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    max?: SortOrder
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryOnProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput> | CategoryOnProductCreateWithoutCategoryInput[] | CategoryOnProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutCategoryInput | CategoryOnProductCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryOnProductCreateManyCategoryInputEnvelope
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type CategoryOnProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput> | CategoryOnProductCreateWithoutCategoryInput[] | CategoryOnProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutCategoryInput | CategoryOnProductCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryOnProductCreateManyCategoryInputEnvelope
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutChildrenInput, CategoryUpdateWithoutChildrenInput>, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryOnProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput> | CategoryOnProductCreateWithoutCategoryInput[] | CategoryOnProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutCategoryInput | CategoryOnProductCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryOnProductUpsertWithWhereUniqueWithoutCategoryInput | CategoryOnProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryOnProductCreateManyCategoryInputEnvelope
    set?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    disconnect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    delete?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    update?: CategoryOnProductUpdateWithWhereUniqueWithoutCategoryInput | CategoryOnProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryOnProductUpdateManyWithWhereWithoutCategoryInput | CategoryOnProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type CategoryOnProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput> | CategoryOnProductCreateWithoutCategoryInput[] | CategoryOnProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutCategoryInput | CategoryOnProductCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryOnProductUpsertWithWhereUniqueWithoutCategoryInput | CategoryOnProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryOnProductCreateManyCategoryInputEnvelope
    set?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    disconnect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    delete?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    update?: CategoryOnProductUpdateWithWhereUniqueWithoutCategoryInput | CategoryOnProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryOnProductUpdateManyWithWhereWithoutCategoryInput | CategoryOnProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
  }

  export type ProductCreatepromoBadgesInput = {
    set: InputJsonValue[]
  }

  export type ProductCreateamendableOrdersInput = {
    set: InputJsonValue[]
  }

  export type ProductCreateservingIntentsInput = {
    set: string[]
  }

  export type ProductCreateavailableVariantsInput = {
    set: InputJsonValue[]
  }

  export type ProductCreatevariantsInput = {
    set: InputJsonValue[]
  }

  export type BrandCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    connect?: BrandWhereUniqueInput
  }

  export type CategoryOnProductCreateNestedManyWithoutProductInput = {
    create?: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput> | CategoryOnProductCreateWithoutProductInput[] | CategoryOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutProductInput | CategoryOnProductCreateOrConnectWithoutProductInput[]
    createMany?: CategoryOnProductCreateManyProductInputEnvelope
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
  }

  export type DeliveryFeeCreateNestedOneWithoutProductInput = {
    create?: XOR<DeliveryFeeCreateWithoutProductInput, DeliveryFeeUncheckedCreateWithoutProductInput>
    connectOrCreate?: DeliveryFeeCreateOrConnectWithoutProductInput
    connect?: DeliveryFeeWhereUniqueInput
  }

  export type PriceCreateNestedOneWithoutProductInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput>
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput
    connect?: PriceWhereUniqueInput
  }

  export type OfferCreateNestedManyWithoutProductInput = {
    create?: XOR<OfferCreateWithoutProductInput, OfferUncheckedCreateWithoutProductInput> | OfferCreateWithoutProductInput[] | OfferUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutProductInput | OfferCreateOrConnectWithoutProductInput[]
    createMany?: OfferCreateManyProductInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type StockCreateNestedOneWithoutProductInput = {
    create?: XOR<StockCreateWithoutProductInput, StockUncheckedCreateWithoutProductInput>
    connectOrCreate?: StockCreateOrConnectWithoutProductInput
    connect?: StockWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutProductsInput = {
    create?: XOR<UnitCreateWithoutProductsInput, UnitUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutProductsInput
    connect?: UnitWhereUniqueInput
  }

  export type LinksCreateNestedOneWithoutProductInput = {
    create?: XOR<LinksCreateWithoutProductInput, LinksUncheckedCreateWithoutProductInput>
    connectOrCreate?: LinksCreateOrConnectWithoutProductInput
    connect?: LinksWhereUniqueInput
  }

  export type AvailabilityCreateNestedOneWithoutProductInput = {
    create?: XOR<AvailabilityCreateWithoutProductInput, AvailabilityUncheckedCreateWithoutProductInput>
    connectOrCreate?: AvailabilityCreateOrConnectWithoutProductInput
    connect?: AvailabilityWhereUniqueInput
  }

  export type CategoryOnProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput> | CategoryOnProductCreateWithoutProductInput[] | CategoryOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutProductInput | CategoryOnProductCreateOrConnectWithoutProductInput[]
    createMany?: CategoryOnProductCreateManyProductInputEnvelope
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
  }

  export type DeliveryFeeUncheckedCreateNestedOneWithoutProductInput = {
    create?: XOR<DeliveryFeeCreateWithoutProductInput, DeliveryFeeUncheckedCreateWithoutProductInput>
    connectOrCreate?: DeliveryFeeCreateOrConnectWithoutProductInput
    connect?: DeliveryFeeWhereUniqueInput
  }

  export type OfferUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OfferCreateWithoutProductInput, OfferUncheckedCreateWithoutProductInput> | OfferCreateWithoutProductInput[] | OfferUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutProductInput | OfferCreateOrConnectWithoutProductInput[]
    createMany?: OfferCreateManyProductInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProductUpdatepromoBadgesInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ProductUpdateamendableOrdersInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ProductUpdateservingIntentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateavailableVariantsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type ProductUpdatevariantsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BrandUpdateOneWithoutProductsNestedInput = {
    create?: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandCreateOrConnectWithoutProductsInput
    upsert?: BrandUpsertWithoutProductsInput
    disconnect?: BrandWhereInput | boolean
    delete?: BrandWhereInput | boolean
    connect?: BrandWhereUniqueInput
    update?: XOR<XOR<BrandUpdateToOneWithWhereWithoutProductsInput, BrandUpdateWithoutProductsInput>, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryOnProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput> | CategoryOnProductCreateWithoutProductInput[] | CategoryOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutProductInput | CategoryOnProductCreateOrConnectWithoutProductInput[]
    upsert?: CategoryOnProductUpsertWithWhereUniqueWithoutProductInput | CategoryOnProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CategoryOnProductCreateManyProductInputEnvelope
    set?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    disconnect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    delete?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    update?: CategoryOnProductUpdateWithWhereUniqueWithoutProductInput | CategoryOnProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CategoryOnProductUpdateManyWithWhereWithoutProductInput | CategoryOnProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
  }

  export type DeliveryFeeUpdateOneWithoutProductNestedInput = {
    create?: XOR<DeliveryFeeCreateWithoutProductInput, DeliveryFeeUncheckedCreateWithoutProductInput>
    connectOrCreate?: DeliveryFeeCreateOrConnectWithoutProductInput
    upsert?: DeliveryFeeUpsertWithoutProductInput
    disconnect?: DeliveryFeeWhereInput | boolean
    delete?: DeliveryFeeWhereInput | boolean
    connect?: DeliveryFeeWhereUniqueInput
    update?: XOR<XOR<DeliveryFeeUpdateToOneWithWhereWithoutProductInput, DeliveryFeeUpdateWithoutProductInput>, DeliveryFeeUncheckedUpdateWithoutProductInput>
  }

  export type PriceUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput>
    connectOrCreate?: PriceCreateOrConnectWithoutProductInput
    upsert?: PriceUpsertWithoutProductInput
    connect?: PriceWhereUniqueInput
    update?: XOR<XOR<PriceUpdateToOneWithWhereWithoutProductInput, PriceUpdateWithoutProductInput>, PriceUncheckedUpdateWithoutProductInput>
  }

  export type OfferUpdateManyWithoutProductNestedInput = {
    create?: XOR<OfferCreateWithoutProductInput, OfferUncheckedCreateWithoutProductInput> | OfferCreateWithoutProductInput[] | OfferUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutProductInput | OfferCreateOrConnectWithoutProductInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutProductInput | OfferUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OfferCreateManyProductInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutProductInput | OfferUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutProductInput | OfferUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type StockUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<StockCreateWithoutProductInput, StockUncheckedCreateWithoutProductInput>
    connectOrCreate?: StockCreateOrConnectWithoutProductInput
    upsert?: StockUpsertWithoutProductInput
    connect?: StockWhereUniqueInput
    update?: XOR<XOR<StockUpdateToOneWithWhereWithoutProductInput, StockUpdateWithoutProductInput>, StockUncheckedUpdateWithoutProductInput>
  }

  export type UnitUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<UnitCreateWithoutProductsInput, UnitUncheckedCreateWithoutProductsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutProductsInput
    upsert?: UnitUpsertWithoutProductsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutProductsInput, UnitUpdateWithoutProductsInput>, UnitUncheckedUpdateWithoutProductsInput>
  }

  export type LinksUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<LinksCreateWithoutProductInput, LinksUncheckedCreateWithoutProductInput>
    connectOrCreate?: LinksCreateOrConnectWithoutProductInput
    upsert?: LinksUpsertWithoutProductInput
    connect?: LinksWhereUniqueInput
    update?: XOR<XOR<LinksUpdateToOneWithWhereWithoutProductInput, LinksUpdateWithoutProductInput>, LinksUncheckedUpdateWithoutProductInput>
  }

  export type AvailabilityUpdateOneWithoutProductNestedInput = {
    create?: XOR<AvailabilityCreateWithoutProductInput, AvailabilityUncheckedCreateWithoutProductInput>
    connectOrCreate?: AvailabilityCreateOrConnectWithoutProductInput
    upsert?: AvailabilityUpsertWithoutProductInput
    disconnect?: AvailabilityWhereInput | boolean
    delete?: AvailabilityWhereInput | boolean
    connect?: AvailabilityWhereUniqueInput
    update?: XOR<XOR<AvailabilityUpdateToOneWithWhereWithoutProductInput, AvailabilityUpdateWithoutProductInput>, AvailabilityUncheckedUpdateWithoutProductInput>
  }

  export type CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput> | CategoryOnProductCreateWithoutProductInput[] | CategoryOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CategoryOnProductCreateOrConnectWithoutProductInput | CategoryOnProductCreateOrConnectWithoutProductInput[]
    upsert?: CategoryOnProductUpsertWithWhereUniqueWithoutProductInput | CategoryOnProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CategoryOnProductCreateManyProductInputEnvelope
    set?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    disconnect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    delete?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    connect?: CategoryOnProductWhereUniqueInput | CategoryOnProductWhereUniqueInput[]
    update?: CategoryOnProductUpdateWithWhereUniqueWithoutProductInput | CategoryOnProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CategoryOnProductUpdateManyWithWhereWithoutProductInput | CategoryOnProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
  }

  export type DeliveryFeeUncheckedUpdateOneWithoutProductNestedInput = {
    create?: XOR<DeliveryFeeCreateWithoutProductInput, DeliveryFeeUncheckedCreateWithoutProductInput>
    connectOrCreate?: DeliveryFeeCreateOrConnectWithoutProductInput
    upsert?: DeliveryFeeUpsertWithoutProductInput
    disconnect?: DeliveryFeeWhereInput | boolean
    delete?: DeliveryFeeWhereInput | boolean
    connect?: DeliveryFeeWhereUniqueInput
    update?: XOR<XOR<DeliveryFeeUpdateToOneWithWhereWithoutProductInput, DeliveryFeeUpdateWithoutProductInput>, DeliveryFeeUncheckedUpdateWithoutProductInput>
  }

  export type OfferUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OfferCreateWithoutProductInput, OfferUncheckedCreateWithoutProductInput> | OfferCreateWithoutProductInput[] | OfferUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutProductInput | OfferCreateOrConnectWithoutProductInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutProductInput | OfferUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OfferCreateManyProductInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutProductInput | OfferUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutProductInput | OfferUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput> | ProductCreateWithoutBrandInput[] | ProductUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBrandInput | ProductCreateOrConnectWithoutBrandInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBrandInput | ProductUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductCreateManyBrandInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBrandInput | ProductUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBrandInput | ProductUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput
    connect?: ProductWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutCategoryOnProductInput = {
    create?: XOR<CategoryCreateWithoutCategoryOnProductInput, CategoryUncheckedCreateWithoutCategoryOnProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoryOnProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput
    upsert?: ProductUpsertWithoutCategoryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCategoryInput, ProductUpdateWithoutCategoryInput>, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryUpdateOneRequiredWithoutCategoryOnProductNestedInput = {
    create?: XOR<CategoryCreateWithoutCategoryOnProductInput, CategoryUncheckedCreateWithoutCategoryOnProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoryOnProductInput
    upsert?: CategoryUpsertWithoutCategoryOnProductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCategoryOnProductInput, CategoryUpdateWithoutCategoryOnProductInput>, CategoryUncheckedUpdateWithoutCategoryOnProductInput>
  }

  export type ProductCreateNestedOneWithoutDeliveryFeesInput = {
    create?: XOR<ProductCreateWithoutDeliveryFeesInput, ProductUncheckedCreateWithoutDeliveryFeesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDeliveryFeesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneWithoutDeliveryFeesNestedInput = {
    create?: XOR<ProductCreateWithoutDeliveryFeesInput, ProductUncheckedCreateWithoutDeliveryFeesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDeliveryFeesInput
    upsert?: ProductUpsertWithoutDeliveryFeesInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDeliveryFeesInput, ProductUpdateWithoutDeliveryFeesInput>, ProductUncheckedUpdateWithoutDeliveryFeesInput>
  }

  export type DiscountCreateNestedOneWithoutPriceInput = {
    create?: XOR<DiscountCreateWithoutPriceInput, DiscountUncheckedCreateWithoutPriceInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutPriceInput
    connect?: DiscountWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutPriceInput = {
    create?: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput> | ProductCreateWithoutPriceInput[] | ProductUncheckedCreateWithoutPriceInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPriceInput | ProductCreateOrConnectWithoutPriceInput[]
    createMany?: ProductCreateManyPriceInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutPriceInput = {
    create?: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput> | ProductCreateWithoutPriceInput[] | ProductUncheckedCreateWithoutPriceInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPriceInput | ProductCreateOrConnectWithoutPriceInput[]
    createMany?: ProductCreateManyPriceInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiscountUpdateOneWithoutPriceNestedInput = {
    create?: XOR<DiscountCreateWithoutPriceInput, DiscountUncheckedCreateWithoutPriceInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutPriceInput
    upsert?: DiscountUpsertWithoutPriceInput
    disconnect?: DiscountWhereInput | boolean
    delete?: DiscountWhereInput | boolean
    connect?: DiscountWhereUniqueInput
    update?: XOR<XOR<DiscountUpdateToOneWithWhereWithoutPriceInput, DiscountUpdateWithoutPriceInput>, DiscountUncheckedUpdateWithoutPriceInput>
  }

  export type ProductUpdateManyWithoutPriceNestedInput = {
    create?: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput> | ProductCreateWithoutPriceInput[] | ProductUncheckedCreateWithoutPriceInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPriceInput | ProductCreateOrConnectWithoutPriceInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutPriceInput | ProductUpsertWithWhereUniqueWithoutPriceInput[]
    createMany?: ProductCreateManyPriceInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutPriceInput | ProductUpdateWithWhereUniqueWithoutPriceInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutPriceInput | ProductUpdateManyWithWhereWithoutPriceInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutPriceNestedInput = {
    create?: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput> | ProductCreateWithoutPriceInput[] | ProductUncheckedCreateWithoutPriceInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutPriceInput | ProductCreateOrConnectWithoutPriceInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutPriceInput | ProductUpsertWithWhereUniqueWithoutPriceInput[]
    createMany?: ProductCreateManyPriceInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutPriceInput | ProductUpdateWithWhereUniqueWithoutPriceInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutPriceInput | ProductUpdateManyWithWhereWithoutPriceInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type PriceCreateNestedManyWithoutDiscountInput = {
    create?: XOR<PriceCreateWithoutDiscountInput, PriceUncheckedCreateWithoutDiscountInput> | PriceCreateWithoutDiscountInput[] | PriceUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutDiscountInput | PriceCreateOrConnectWithoutDiscountInput[]
    createMany?: PriceCreateManyDiscountInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PriceUncheckedCreateNestedManyWithoutDiscountInput = {
    create?: XOR<PriceCreateWithoutDiscountInput, PriceUncheckedCreateWithoutDiscountInput> | PriceCreateWithoutDiscountInput[] | PriceUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutDiscountInput | PriceCreateOrConnectWithoutDiscountInput[]
    createMany?: PriceCreateManyDiscountInputEnvelope
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
  }

  export type PriceUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<PriceCreateWithoutDiscountInput, PriceUncheckedCreateWithoutDiscountInput> | PriceCreateWithoutDiscountInput[] | PriceUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutDiscountInput | PriceCreateOrConnectWithoutDiscountInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutDiscountInput | PriceUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: PriceCreateManyDiscountInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutDiscountInput | PriceUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutDiscountInput | PriceUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type PriceUncheckedUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<PriceCreateWithoutDiscountInput, PriceUncheckedCreateWithoutDiscountInput> | PriceCreateWithoutDiscountInput[] | PriceUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: PriceCreateOrConnectWithoutDiscountInput | PriceCreateOrConnectWithoutDiscountInput[]
    upsert?: PriceUpsertWithWhereUniqueWithoutDiscountInput | PriceUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: PriceCreateManyDiscountInputEnvelope
    set?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    disconnect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    delete?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    connect?: PriceWhereUniqueInput | PriceWhereUniqueInput[]
    update?: PriceUpdateWithWhereUniqueWithoutDiscountInput | PriceUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: PriceUpdateManyWithWhereWithoutDiscountInput | PriceUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: PriceScalarWhereInput | PriceScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutOffersInput = {
    create?: XOR<ProductCreateWithoutOffersInput, ProductUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOffersInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<ProductCreateWithoutOffersInput, ProductUncheckedCreateWithoutOffersInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOffersInput
    upsert?: ProductUpsertWithoutOffersInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOffersInput, ProductUpdateWithoutOffersInput>, ProductUncheckedUpdateWithoutOffersInput>
  }

  export type ProductCreateNestedOneWithoutStockInput = {
    create?: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedOneWithoutStockInput = {
    create?: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneWithoutStockNestedInput = {
    create?: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockInput
    upsert?: ProductUpsertWithoutStockInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockInput, ProductUpdateWithoutStockInput>, ProductUncheckedUpdateWithoutStockInput>
  }

  export type ProductUncheckedUpdateOneWithoutStockNestedInput = {
    create?: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockInput
    upsert?: ProductUpsertWithoutStockInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockInput, ProductUpdateWithoutStockInput>, ProductUncheckedUpdateWithoutStockInput>
  }

  export type ProductCreateNestedManyWithoutUnitInput = {
    create?: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput> | ProductCreateWithoutUnitInput[] | ProductUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUnitInput | ProductCreateOrConnectWithoutUnitInput[]
    createMany?: ProductCreateManyUnitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput> | ProductCreateWithoutUnitInput[] | ProductUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUnitInput | ProductCreateOrConnectWithoutUnitInput[]
    createMany?: ProductCreateManyUnitInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput> | ProductCreateWithoutUnitInput[] | ProductUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUnitInput | ProductCreateOrConnectWithoutUnitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUnitInput | ProductUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ProductCreateManyUnitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUnitInput | ProductUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUnitInput | ProductUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput> | ProductCreateWithoutUnitInput[] | ProductUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUnitInput | ProductCreateOrConnectWithoutUnitInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUnitInput | ProductUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ProductCreateManyUnitInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUnitInput | ProductUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUnitInput | ProductUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type LinksCreatedefaultImagesInput = {
    set: string[]
  }

  export type ProductCreateNestedOneWithoutLinksInput = {
    create?: XOR<ProductCreateWithoutLinksInput, ProductUncheckedCreateWithoutLinksInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLinksInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedOneWithoutLinksInput = {
    create?: XOR<ProductCreateWithoutLinksInput, ProductUncheckedCreateWithoutLinksInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLinksInput
    connect?: ProductWhereUniqueInput
  }

  export type LinksUpdatedefaultImagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProductUpdateOneWithoutLinksNestedInput = {
    create?: XOR<ProductCreateWithoutLinksInput, ProductUncheckedCreateWithoutLinksInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLinksInput
    upsert?: ProductUpsertWithoutLinksInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutLinksInput, ProductUpdateWithoutLinksInput>, ProductUncheckedUpdateWithoutLinksInput>
  }

  export type ProductUncheckedUpdateOneWithoutLinksNestedInput = {
    create?: XOR<ProductCreateWithoutLinksInput, ProductUncheckedCreateWithoutLinksInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLinksInput
    upsert?: ProductUpsertWithoutLinksInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutLinksInput, ProductUpdateWithoutLinksInput>, ProductUncheckedUpdateWithoutLinksInput>
  }

  export type ProductCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<ProductCreateWithoutAvailabilityInput, ProductUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAvailabilityInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUncheckedCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<ProductCreateWithoutAvailabilityInput, ProductUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAvailabilityInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneWithoutAvailabilityNestedInput = {
    create?: XOR<ProductCreateWithoutAvailabilityInput, ProductUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAvailabilityInput
    upsert?: ProductUpsertWithoutAvailabilityInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAvailabilityInput, ProductUpdateWithoutAvailabilityInput>, ProductUncheckedUpdateWithoutAvailabilityInput>
  }

  export type ProductUncheckedUpdateOneWithoutAvailabilityNestedInput = {
    create?: XOR<ProductCreateWithoutAvailabilityInput, ProductUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAvailabilityInput
    upsert?: ProductUpsertWithoutAvailabilityInput
    disconnect?: ProductWhereInput | boolean
    delete?: ProductWhereInput | boolean
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAvailabilityInput, ProductUpdateWithoutAvailabilityInput>, ProductUncheckedUpdateWithoutAvailabilityInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CategoryCreateWithoutChildrenInput = {
    id: string
    storeId?: string | null
    key?: string | null
    name?: string | null
    title?: string | null
    url?: string | null
    image?: string | null
    store?: number | null
    nameAr?: string | null
    nameKa?: string | null
    mediaWeb?: string | null
    mediaMobile?: string | null
    mediaWebAr?: string | null
    mediaMobileAr?: string | null
    mediaWebKa?: string | null
    mediaMobileKa?: string | null
    ctaUrl?: string | null
    bgColor?: string | null
    bg_color?: string | null
    thumbnail?: string | null
    level?: number | null
    count?: number | null
    facetName?: string | null
    index?: string | null
    score?: number | null
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    CategoryOnProduct?: CategoryOnProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    id: string
    storeId?: string | null
    key?: string | null
    name?: string | null
    title?: string | null
    url?: string | null
    parentId?: string | null
    image?: string | null
    store?: number | null
    nameAr?: string | null
    nameKa?: string | null
    mediaWeb?: string | null
    mediaMobile?: string | null
    mediaWebAr?: string | null
    mediaMobileAr?: string | null
    mediaWebKa?: string | null
    mediaMobileKa?: string | null
    ctaUrl?: string | null
    bgColor?: string | null
    bg_color?: string | null
    thumbnail?: string | null
    level?: number | null
    count?: number | null
    facetName?: string | null
    index?: string | null
    score?: number | null
    CategoryOnProduct?: CategoryOnProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id: string
    storeId?: string | null
    key?: string | null
    name?: string | null
    title?: string | null
    url?: string | null
    image?: string | null
    store?: number | null
    nameAr?: string | null
    nameKa?: string | null
    mediaWeb?: string | null
    mediaMobile?: string | null
    mediaWebAr?: string | null
    mediaMobileAr?: string | null
    mediaWebKa?: string | null
    mediaMobileKa?: string | null
    ctaUrl?: string | null
    bgColor?: string | null
    bg_color?: string | null
    thumbnail?: string | null
    level?: number | null
    count?: number | null
    facetName?: string | null
    index?: string | null
    score?: number | null
    children?: CategoryCreateNestedManyWithoutParentInput
    CategoryOnProduct?: CategoryOnProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id: string
    storeId?: string | null
    key?: string | null
    name?: string | null
    title?: string | null
    url?: string | null
    image?: string | null
    store?: number | null
    nameAr?: string | null
    nameKa?: string | null
    mediaWeb?: string | null
    mediaMobile?: string | null
    mediaWebAr?: string | null
    mediaMobileAr?: string | null
    mediaWebKa?: string | null
    mediaMobileKa?: string | null
    ctaUrl?: string | null
    bgColor?: string | null
    bg_color?: string | null
    thumbnail?: string | null
    level?: number | null
    count?: number | null
    facetName?: string | null
    index?: string | null
    score?: number | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    CategoryOnProduct?: CategoryOnProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type CategoryOnProductCreateWithoutCategoryInput = {
    product: ProductCreateNestedOneWithoutCategoryInput
  }

  export type CategoryOnProductUncheckedCreateWithoutCategoryInput = {
    productId: number
  }

  export type CategoryOnProductCreateOrConnectWithoutCategoryInput = {
    where: CategoryOnProductWhereUniqueInput
    create: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryOnProductCreateManyCategoryInputEnvelope = {
    data: CategoryOnProductCreateManyCategoryInput | CategoryOnProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableIntFieldUpdateOperationsInput | number | null
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    nameKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWeb?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileKa?: NullableStringFieldUpdateOperationsInput | string | null
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    bg_color?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    facetName?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    CategoryOnProduct?: CategoryOnProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableIntFieldUpdateOperationsInput | number | null
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    nameKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWeb?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileKa?: NullableStringFieldUpdateOperationsInput | string | null
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    bg_color?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    facetName?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    CategoryOnProduct?: CategoryOnProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    storeId?: StringNullableFilter<"Category"> | string | null
    key?: StringNullableFilter<"Category"> | string | null
    name?: StringNullableFilter<"Category"> | string | null
    title?: StringNullableFilter<"Category"> | string | null
    url?: StringNullableFilter<"Category"> | string | null
    parentId?: StringNullableFilter<"Category"> | string | null
    image?: StringNullableFilter<"Category"> | string | null
    store?: IntNullableFilter<"Category"> | number | null
    nameAr?: StringNullableFilter<"Category"> | string | null
    nameKa?: StringNullableFilter<"Category"> | string | null
    mediaWeb?: StringNullableFilter<"Category"> | string | null
    mediaMobile?: StringNullableFilter<"Category"> | string | null
    mediaWebAr?: StringNullableFilter<"Category"> | string | null
    mediaMobileAr?: StringNullableFilter<"Category"> | string | null
    mediaWebKa?: StringNullableFilter<"Category"> | string | null
    mediaMobileKa?: StringNullableFilter<"Category"> | string | null
    ctaUrl?: StringNullableFilter<"Category"> | string | null
    bgColor?: StringNullableFilter<"Category"> | string | null
    bg_color?: StringNullableFilter<"Category"> | string | null
    thumbnail?: StringNullableFilter<"Category"> | string | null
    level?: IntNullableFilter<"Category"> | number | null
    count?: IntNullableFilter<"Category"> | number | null
    facetName?: StringNullableFilter<"Category"> | string | null
    index?: StringNullableFilter<"Category"> | string | null
    score?: IntNullableFilter<"Category"> | number | null
  }

  export type CategoryOnProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryOnProductWhereUniqueInput
    update: XOR<CategoryOnProductUpdateWithoutCategoryInput, CategoryOnProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryOnProductCreateWithoutCategoryInput, CategoryOnProductUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryOnProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryOnProductWhereUniqueInput
    data: XOR<CategoryOnProductUpdateWithoutCategoryInput, CategoryOnProductUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryOnProductUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryOnProductScalarWhereInput
    data: XOR<CategoryOnProductUpdateManyMutationInput, CategoryOnProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryOnProductScalarWhereInput = {
    AND?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
    OR?: CategoryOnProductScalarWhereInput[]
    NOT?: CategoryOnProductScalarWhereInput | CategoryOnProductScalarWhereInput[]
    productId?: IntFilter<"CategoryOnProduct"> | number
    categoryId?: StringFilter<"CategoryOnProduct"> | string
  }

  export type BrandCreateWithoutProductsInput = {
    id: string
    name?: string | null
  }

  export type BrandUncheckedCreateWithoutProductsInput = {
    id: string
    name?: string | null
  }

  export type BrandCreateOrConnectWithoutProductsInput = {
    where: BrandWhereUniqueInput
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
  }

  export type CategoryOnProductCreateWithoutProductInput = {
    category: CategoryCreateNestedOneWithoutCategoryOnProductInput
  }

  export type CategoryOnProductUncheckedCreateWithoutProductInput = {
    categoryId: string
  }

  export type CategoryOnProductCreateOrConnectWithoutProductInput = {
    where: CategoryOnProductWhereUniqueInput
    create: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput>
  }

  export type CategoryOnProductCreateManyProductInputEnvelope = {
    data: CategoryOnProductCreateManyProductInput | CategoryOnProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryFeeCreateWithoutProductInput = {
    id?: string
    freeDeliveryThreshold: number
  }

  export type DeliveryFeeUncheckedCreateWithoutProductInput = {
    id?: string
    freeDeliveryThreshold: number
  }

  export type DeliveryFeeCreateOrConnectWithoutProductInput = {
    where: DeliveryFeeWhereUniqueInput
    create: XOR<DeliveryFeeCreateWithoutProductInput, DeliveryFeeUncheckedCreateWithoutProductInput>
  }

  export type PriceCreateWithoutProductInput = {
    id?: string
    currency: string
    price: number
    formattedValue: string
    minBuyingValue: string
    discount?: DiscountCreateNestedOneWithoutPriceInput
  }

  export type PriceUncheckedCreateWithoutProductInput = {
    id?: string
    currency: string
    price: number
    formattedValue: string
    discountId?: string | null
    minBuyingValue: string
  }

  export type PriceCreateOrConnectWithoutProductInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput>
  }

  export type OfferCreateWithoutProductInput = {
    id: string
    sellerName: string
    shopId: string
    type: string
    purchaseIndicators: JsonNullValueInput | InputJsonValue
    shippingIndicator: string
  }

  export type OfferUncheckedCreateWithoutProductInput = {
    id: string
    sellerName: string
    shopId: string
    type: string
    purchaseIndicators: JsonNullValueInput | InputJsonValue
    shippingIndicator: string
  }

  export type OfferCreateOrConnectWithoutProductInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutProductInput, OfferUncheckedCreateWithoutProductInput>
  }

  export type OfferCreateManyProductInputEnvelope = {
    data: OfferCreateManyProductInput | OfferCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type StockCreateWithoutProductInput = {
    id?: string
    stockLevelStatus: string
    value?: number | null
  }

  export type StockUncheckedCreateWithoutProductInput = {
    id?: string
    stockLevelStatus: string
    value?: number | null
  }

  export type StockCreateOrConnectWithoutProductInput = {
    where: StockWhereUniqueInput
    create: XOR<StockCreateWithoutProductInput, StockUncheckedCreateWithoutProductInput>
  }

  export type UnitCreateWithoutProductsInput = {
    id?: string
    unitOfMeasure: string
    itemsPerUnit: number
    incrementBy: number
    size: string
    max: number
    min: number
    unitItem: number
    maxToOrder: number
  }

  export type UnitUncheckedCreateWithoutProductsInput = {
    id?: string
    unitOfMeasure: string
    itemsPerUnit: number
    incrementBy: number
    size: string
    max: number
    min: number
    unitItem: number
    maxToOrder: number
  }

  export type UnitCreateOrConnectWithoutProductsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutProductsInput, UnitUncheckedCreateWithoutProductsInput>
  }

  export type LinksCreateWithoutProductInput = {
    id?: string
    images: JsonNullValueInput | InputJsonValue
    productUrl: JsonNullValueInput | InputJsonValue
    tracking: JsonNullValueInput | InputJsonValue
    defaultImages?: LinksCreatedefaultImagesInput | string[]
  }

  export type LinksUncheckedCreateWithoutProductInput = {
    id?: string
    images: JsonNullValueInput | InputJsonValue
    productUrl: JsonNullValueInput | InputJsonValue
    tracking: JsonNullValueInput | InputJsonValue
    defaultImages?: LinksCreatedefaultImagesInput | string[]
  }

  export type LinksCreateOrConnectWithoutProductInput = {
    where: LinksWhereUniqueInput
    create: XOR<LinksCreateWithoutProductInput, LinksUncheckedCreateWithoutProductInput>
  }

  export type AvailabilityCreateWithoutProductInput = {
    isAvailable: boolean
    max: number
  }

  export type AvailabilityUncheckedCreateWithoutProductInput = {
    id?: number
    isAvailable: boolean
    max: number
  }

  export type AvailabilityCreateOrConnectWithoutProductInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutProductInput, AvailabilityUncheckedCreateWithoutProductInput>
  }

  export type BrandUpsertWithoutProductsInput = {
    update: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandCreateWithoutProductsInput, BrandUncheckedCreateWithoutProductsInput>
    where?: BrandWhereInput
  }

  export type BrandUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandWhereInput
    data: XOR<BrandUpdateWithoutProductsInput, BrandUncheckedUpdateWithoutProductsInput>
  }

  export type BrandUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BrandUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryOnProductUpsertWithWhereUniqueWithoutProductInput = {
    where: CategoryOnProductWhereUniqueInput
    update: XOR<CategoryOnProductUpdateWithoutProductInput, CategoryOnProductUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryOnProductCreateWithoutProductInput, CategoryOnProductUncheckedCreateWithoutProductInput>
  }

  export type CategoryOnProductUpdateWithWhereUniqueWithoutProductInput = {
    where: CategoryOnProductWhereUniqueInput
    data: XOR<CategoryOnProductUpdateWithoutProductInput, CategoryOnProductUncheckedUpdateWithoutProductInput>
  }

  export type CategoryOnProductUpdateManyWithWhereWithoutProductInput = {
    where: CategoryOnProductScalarWhereInput
    data: XOR<CategoryOnProductUpdateManyMutationInput, CategoryOnProductUncheckedUpdateManyWithoutProductInput>
  }

  export type DeliveryFeeUpsertWithoutProductInput = {
    update: XOR<DeliveryFeeUpdateWithoutProductInput, DeliveryFeeUncheckedUpdateWithoutProductInput>
    create: XOR<DeliveryFeeCreateWithoutProductInput, DeliveryFeeUncheckedCreateWithoutProductInput>
    where?: DeliveryFeeWhereInput
  }

  export type DeliveryFeeUpdateToOneWithWhereWithoutProductInput = {
    where?: DeliveryFeeWhereInput
    data: XOR<DeliveryFeeUpdateWithoutProductInput, DeliveryFeeUncheckedUpdateWithoutProductInput>
  }

  export type DeliveryFeeUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    freeDeliveryThreshold?: IntFieldUpdateOperationsInput | number
  }

  export type DeliveryFeeUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    freeDeliveryThreshold?: IntFieldUpdateOperationsInput | number
  }

  export type PriceUpsertWithoutProductInput = {
    update: XOR<PriceUpdateWithoutProductInput, PriceUncheckedUpdateWithoutProductInput>
    create: XOR<PriceCreateWithoutProductInput, PriceUncheckedCreateWithoutProductInput>
    where?: PriceWhereInput
  }

  export type PriceUpdateToOneWithWhereWithoutProductInput = {
    where?: PriceWhereInput
    data: XOR<PriceUpdateWithoutProductInput, PriceUncheckedUpdateWithoutProductInput>
  }

  export type PriceUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    formattedValue?: StringFieldUpdateOperationsInput | string
    minBuyingValue?: StringFieldUpdateOperationsInput | string
    discount?: DiscountUpdateOneWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    formattedValue?: StringFieldUpdateOperationsInput | string
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    minBuyingValue?: StringFieldUpdateOperationsInput | string
  }

  export type OfferUpsertWithWhereUniqueWithoutProductInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutProductInput, OfferUncheckedUpdateWithoutProductInput>
    create: XOR<OfferCreateWithoutProductInput, OfferUncheckedCreateWithoutProductInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutProductInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutProductInput, OfferUncheckedUpdateWithoutProductInput>
  }

  export type OfferUpdateManyWithWhereWithoutProductInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutProductInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: StringFilter<"Offer"> | string
    sellerName?: StringFilter<"Offer"> | string
    shopId?: StringFilter<"Offer"> | string
    type?: StringFilter<"Offer"> | string
    purchaseIndicators?: JsonFilter<"Offer">
    shippingIndicator?: StringFilter<"Offer"> | string
    productId?: IntFilter<"Offer"> | number
  }

  export type StockUpsertWithoutProductInput = {
    update: XOR<StockUpdateWithoutProductInput, StockUncheckedUpdateWithoutProductInput>
    create: XOR<StockCreateWithoutProductInput, StockUncheckedCreateWithoutProductInput>
    where?: StockWhereInput
  }

  export type StockUpdateToOneWithWhereWithoutProductInput = {
    where?: StockWhereInput
    data: XOR<StockUpdateWithoutProductInput, StockUncheckedUpdateWithoutProductInput>
  }

  export type StockUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLevelStatus?: StringFieldUpdateOperationsInput | string
    value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    stockLevelStatus?: StringFieldUpdateOperationsInput | string
    value?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UnitUpsertWithoutProductsInput = {
    update: XOR<UnitUpdateWithoutProductsInput, UnitUncheckedUpdateWithoutProductsInput>
    create: XOR<UnitCreateWithoutProductsInput, UnitUncheckedCreateWithoutProductsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutProductsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutProductsInput, UnitUncheckedUpdateWithoutProductsInput>
  }

  export type UnitUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitOfMeasure?: StringFieldUpdateOperationsInput | string
    itemsPerUnit?: IntFieldUpdateOperationsInput | number
    incrementBy?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    max?: IntFieldUpdateOperationsInput | number
    min?: FloatFieldUpdateOperationsInput | number
    unitItem?: IntFieldUpdateOperationsInput | number
    maxToOrder?: IntFieldUpdateOperationsInput | number
  }

  export type UnitUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitOfMeasure?: StringFieldUpdateOperationsInput | string
    itemsPerUnit?: IntFieldUpdateOperationsInput | number
    incrementBy?: FloatFieldUpdateOperationsInput | number
    size?: StringFieldUpdateOperationsInput | string
    max?: IntFieldUpdateOperationsInput | number
    min?: FloatFieldUpdateOperationsInput | number
    unitItem?: IntFieldUpdateOperationsInput | number
    maxToOrder?: IntFieldUpdateOperationsInput | number
  }

  export type LinksUpsertWithoutProductInput = {
    update: XOR<LinksUpdateWithoutProductInput, LinksUncheckedUpdateWithoutProductInput>
    create: XOR<LinksCreateWithoutProductInput, LinksUncheckedCreateWithoutProductInput>
    where?: LinksWhereInput
  }

  export type LinksUpdateToOneWithWhereWithoutProductInput = {
    where?: LinksWhereInput
    data: XOR<LinksUpdateWithoutProductInput, LinksUncheckedUpdateWithoutProductInput>
  }

  export type LinksUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    productUrl?: JsonNullValueInput | InputJsonValue
    tracking?: JsonNullValueInput | InputJsonValue
    defaultImages?: LinksUpdatedefaultImagesInput | string[]
  }

  export type LinksUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    productUrl?: JsonNullValueInput | InputJsonValue
    tracking?: JsonNullValueInput | InputJsonValue
    defaultImages?: LinksUpdatedefaultImagesInput | string[]
  }

  export type AvailabilityUpsertWithoutProductInput = {
    update: XOR<AvailabilityUpdateWithoutProductInput, AvailabilityUncheckedUpdateWithoutProductInput>
    create: XOR<AvailabilityCreateWithoutProductInput, AvailabilityUncheckedCreateWithoutProductInput>
    where?: AvailabilityWhereInput
  }

  export type AvailabilityUpdateToOneWithWhereWithoutProductInput = {
    where?: AvailabilityWhereInput
    data: XOR<AvailabilityUpdateWithoutProductInput, AvailabilityUncheckedUpdateWithoutProductInput>
  }

  export type AvailabilityUpdateWithoutProductInput = {
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    max?: IntFieldUpdateOperationsInput | number
  }

  export type AvailabilityUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    max?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateWithoutBrandInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryOnProductCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeCreateNestedOneWithoutProductInput
    price: PriceCreateNestedOneWithoutProductInput
    offers?: OfferCreateNestedManyWithoutProductInput
    stock: StockCreateNestedOneWithoutProductInput
    unit: UnitCreateNestedOneWithoutProductsInput
    links: LinksCreateNestedOneWithoutProductInput
    availability?: AvailabilityCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBrandInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    priceId: string
    stockId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeUncheckedCreateNestedOneWithoutProductInput
    offers?: OfferUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBrandInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductCreateManyBrandInputEnvelope = {
    data: ProductCreateManyBrandInput | ProductCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductCreateWithoutBrandInput, ProductUncheckedCreateWithoutBrandInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBrandInput, ProductUncheckedUpdateWithoutBrandInput>
  }

  export type ProductUpdateManyWithWhereWithoutBrandInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    ean?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    type?: StringFilter<"Product"> | string
    preorder?: BoolFilter<"Product"> | boolean
    isExpress?: BoolFilter<"Product"> | boolean
    productOrigin?: StringNullableFilter<"Product"> | string | null
    supplier?: StringFilter<"Product"> | string
    isBulk?: BoolFilter<"Product"> | boolean
    bulkMessage?: StringFilter<"Product"> | string
    isScalable?: BoolFilter<"Product"> | boolean
    size?: StringNullableFilter<"Product"> | string | null
    isFBC?: BoolFilter<"Product"> | boolean
    isMarketPlace?: BoolFilter<"Product"> | boolean
    foodType?: StringNullableFilter<"Product"> | string | null
    productCategoriesHearchi?: StringFilter<"Product"> | string
    soldByWeight?: BoolFilter<"Product"> | boolean
    isRecommendable?: BoolFilter<"Product"> | boolean
    brandId?: StringNullableFilter<"Product"> | string | null
    priceId?: StringFilter<"Product"> | string
    stockId?: StringFilter<"Product"> | string
    unitId?: StringFilter<"Product"> | string
    promoVoucher?: JsonNullableFilter<"Product">
    promoBadges?: JsonNullableListFilter<"Product">
    amendableOrders?: JsonNullableListFilter<"Product">
    servingIntents?: StringNullableListFilter<"Product">
    availableVariants?: JsonNullableListFilter<"Product">
    variants?: JsonNullableListFilter<"Product">
    linksId?: StringFilter<"Product"> | string
    availabilityId?: IntNullableFilter<"Product"> | number | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ProductCreateWithoutCategoryInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
    deliveryFees?: DeliveryFeeCreateNestedOneWithoutProductInput
    price: PriceCreateNestedOneWithoutProductInput
    offers?: OfferCreateNestedManyWithoutProductInput
    stock: StockCreateNestedOneWithoutProductInput
    unit: UnitCreateNestedOneWithoutProductsInput
    links: LinksCreateNestedOneWithoutProductInput
    availability?: AvailabilityCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    priceId: string
    stockId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryFees?: DeliveryFeeUncheckedCreateNestedOneWithoutProductInput
    offers?: OfferUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryCreateWithoutCategoryOnProductInput = {
    id: string
    storeId?: string | null
    key?: string | null
    name?: string | null
    title?: string | null
    url?: string | null
    image?: string | null
    store?: number | null
    nameAr?: string | null
    nameKa?: string | null
    mediaWeb?: string | null
    mediaMobile?: string | null
    mediaWebAr?: string | null
    mediaMobileAr?: string | null
    mediaWebKa?: string | null
    mediaMobileKa?: string | null
    ctaUrl?: string | null
    bgColor?: string | null
    bg_color?: string | null
    thumbnail?: string | null
    level?: number | null
    count?: number | null
    facetName?: string | null
    index?: string | null
    score?: number | null
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutCategoryOnProductInput = {
    id: string
    storeId?: string | null
    key?: string | null
    name?: string | null
    title?: string | null
    url?: string | null
    parentId?: string | null
    image?: string | null
    store?: number | null
    nameAr?: string | null
    nameKa?: string | null
    mediaWeb?: string | null
    mediaMobile?: string | null
    mediaWebAr?: string | null
    mediaMobileAr?: string | null
    mediaWebKa?: string | null
    mediaMobileKa?: string | null
    ctaUrl?: string | null
    bgColor?: string | null
    bg_color?: string | null
    thumbnail?: string | null
    level?: number | null
    count?: number | null
    facetName?: string | null
    index?: string | null
    score?: number | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutCategoryOnProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCategoryOnProductInput, CategoryUncheckedCreateWithoutCategoryOnProductInput>
  }

  export type ProductUpsertWithoutCategoryInput = {
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCategoryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
    deliveryFees?: DeliveryFeeUpdateOneWithoutProductNestedInput
    price?: PriceUpdateOneRequiredWithoutProductNestedInput
    offers?: OfferUpdateManyWithoutProductNestedInput
    stock?: StockUpdateOneRequiredWithoutProductNestedInput
    unit?: UnitUpdateOneRequiredWithoutProductsNestedInput
    links?: LinksUpdateOneRequiredWithoutProductNestedInput
    availability?: AvailabilityUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryFees?: DeliveryFeeUncheckedUpdateOneWithoutProductNestedInput
    offers?: OfferUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CategoryUpsertWithoutCategoryOnProductInput = {
    update: XOR<CategoryUpdateWithoutCategoryOnProductInput, CategoryUncheckedUpdateWithoutCategoryOnProductInput>
    create: XOR<CategoryCreateWithoutCategoryOnProductInput, CategoryUncheckedCreateWithoutCategoryOnProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCategoryOnProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCategoryOnProductInput, CategoryUncheckedUpdateWithoutCategoryOnProductInput>
  }

  export type CategoryUpdateWithoutCategoryOnProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableIntFieldUpdateOperationsInput | number | null
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    nameKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWeb?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileKa?: NullableStringFieldUpdateOperationsInput | string | null
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    bg_color?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    facetName?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCategoryOnProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableIntFieldUpdateOperationsInput | number | null
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    nameKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWeb?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileKa?: NullableStringFieldUpdateOperationsInput | string | null
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    bg_color?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    facetName?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type ProductCreateWithoutDeliveryFeesInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
    category?: CategoryOnProductCreateNestedManyWithoutProductInput
    price: PriceCreateNestedOneWithoutProductInput
    offers?: OfferCreateNestedManyWithoutProductInput
    stock: StockCreateNestedOneWithoutProductInput
    unit: UnitCreateNestedOneWithoutProductsInput
    links: LinksCreateNestedOneWithoutProductInput
    availability?: AvailabilityCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDeliveryFeesInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    priceId: string
    stockId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    offers?: OfferUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDeliveryFeesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDeliveryFeesInput, ProductUncheckedCreateWithoutDeliveryFeesInput>
  }

  export type ProductUpsertWithoutDeliveryFeesInput = {
    update: XOR<ProductUpdateWithoutDeliveryFeesInput, ProductUncheckedUpdateWithoutDeliveryFeesInput>
    create: XOR<ProductCreateWithoutDeliveryFeesInput, ProductUncheckedCreateWithoutDeliveryFeesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDeliveryFeesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDeliveryFeesInput, ProductUncheckedUpdateWithoutDeliveryFeesInput>
  }

  export type ProductUpdateWithoutDeliveryFeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
    category?: CategoryOnProductUpdateManyWithoutProductNestedInput
    price?: PriceUpdateOneRequiredWithoutProductNestedInput
    offers?: OfferUpdateManyWithoutProductNestedInput
    stock?: StockUpdateOneRequiredWithoutProductNestedInput
    unit?: UnitUpdateOneRequiredWithoutProductsNestedInput
    links?: LinksUpdateOneRequiredWithoutProductNestedInput
    availability?: AvailabilityUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDeliveryFeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    offers?: OfferUncheckedUpdateManyWithoutProductNestedInput
  }

  export type DiscountCreateWithoutPriceInput = {
    id?: string
    price: number
    endDate: Date | string
    type: string
    formattedValue: string
    value: number
    minBuyingValue: string
  }

  export type DiscountUncheckedCreateWithoutPriceInput = {
    id?: string
    price: number
    endDate: Date | string
    type: string
    formattedValue: string
    value: number
    minBuyingValue: string
  }

  export type DiscountCreateOrConnectWithoutPriceInput = {
    where: DiscountWhereUniqueInput
    create: XOR<DiscountCreateWithoutPriceInput, DiscountUncheckedCreateWithoutPriceInput>
  }

  export type ProductCreateWithoutPriceInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
    category?: CategoryOnProductCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeCreateNestedOneWithoutProductInput
    offers?: OfferCreateNestedManyWithoutProductInput
    stock: StockCreateNestedOneWithoutProductInput
    unit: UnitCreateNestedOneWithoutProductsInput
    links: LinksCreateNestedOneWithoutProductInput
    availability?: AvailabilityCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutPriceInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    stockId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeUncheckedCreateNestedOneWithoutProductInput
    offers?: OfferUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutPriceInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput>
  }

  export type ProductCreateManyPriceInputEnvelope = {
    data: ProductCreateManyPriceInput | ProductCreateManyPriceInput[]
    skipDuplicates?: boolean
  }

  export type DiscountUpsertWithoutPriceInput = {
    update: XOR<DiscountUpdateWithoutPriceInput, DiscountUncheckedUpdateWithoutPriceInput>
    create: XOR<DiscountCreateWithoutPriceInput, DiscountUncheckedCreateWithoutPriceInput>
    where?: DiscountWhereInput
  }

  export type DiscountUpdateToOneWithWhereWithoutPriceInput = {
    where?: DiscountWhereInput
    data: XOR<DiscountUpdateWithoutPriceInput, DiscountUncheckedUpdateWithoutPriceInput>
  }

  export type DiscountUpdateWithoutPriceInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    formattedValue?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    minBuyingValue?: StringFieldUpdateOperationsInput | string
  }

  export type DiscountUncheckedUpdateWithoutPriceInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    formattedValue?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    minBuyingValue?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpsertWithWhereUniqueWithoutPriceInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutPriceInput, ProductUncheckedUpdateWithoutPriceInput>
    create: XOR<ProductCreateWithoutPriceInput, ProductUncheckedCreateWithoutPriceInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutPriceInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutPriceInput, ProductUncheckedUpdateWithoutPriceInput>
  }

  export type ProductUpdateManyWithWhereWithoutPriceInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutPriceInput>
  }

  export type PriceCreateWithoutDiscountInput = {
    id?: string
    currency: string
    price: number
    formattedValue: string
    minBuyingValue: string
    Product?: ProductCreateNestedManyWithoutPriceInput
  }

  export type PriceUncheckedCreateWithoutDiscountInput = {
    id?: string
    currency: string
    price: number
    formattedValue: string
    minBuyingValue: string
    Product?: ProductUncheckedCreateNestedManyWithoutPriceInput
  }

  export type PriceCreateOrConnectWithoutDiscountInput = {
    where: PriceWhereUniqueInput
    create: XOR<PriceCreateWithoutDiscountInput, PriceUncheckedCreateWithoutDiscountInput>
  }

  export type PriceCreateManyDiscountInputEnvelope = {
    data: PriceCreateManyDiscountInput | PriceCreateManyDiscountInput[]
    skipDuplicates?: boolean
  }

  export type PriceUpsertWithWhereUniqueWithoutDiscountInput = {
    where: PriceWhereUniqueInput
    update: XOR<PriceUpdateWithoutDiscountInput, PriceUncheckedUpdateWithoutDiscountInput>
    create: XOR<PriceCreateWithoutDiscountInput, PriceUncheckedCreateWithoutDiscountInput>
  }

  export type PriceUpdateWithWhereUniqueWithoutDiscountInput = {
    where: PriceWhereUniqueInput
    data: XOR<PriceUpdateWithoutDiscountInput, PriceUncheckedUpdateWithoutDiscountInput>
  }

  export type PriceUpdateManyWithWhereWithoutDiscountInput = {
    where: PriceScalarWhereInput
    data: XOR<PriceUpdateManyMutationInput, PriceUncheckedUpdateManyWithoutDiscountInput>
  }

  export type PriceScalarWhereInput = {
    AND?: PriceScalarWhereInput | PriceScalarWhereInput[]
    OR?: PriceScalarWhereInput[]
    NOT?: PriceScalarWhereInput | PriceScalarWhereInput[]
    id?: StringFilter<"Price"> | string
    currency?: StringFilter<"Price"> | string
    price?: FloatFilter<"Price"> | number
    formattedValue?: StringFilter<"Price"> | string
    discountId?: StringNullableFilter<"Price"> | string | null
    minBuyingValue?: StringFilter<"Price"> | string
  }

  export type ProductCreateWithoutOffersInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
    category?: CategoryOnProductCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeCreateNestedOneWithoutProductInput
    price: PriceCreateNestedOneWithoutProductInput
    stock: StockCreateNestedOneWithoutProductInput
    unit: UnitCreateNestedOneWithoutProductsInput
    links: LinksCreateNestedOneWithoutProductInput
    availability?: AvailabilityCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOffersInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    priceId: string
    stockId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeUncheckedCreateNestedOneWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOffersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOffersInput, ProductUncheckedCreateWithoutOffersInput>
  }

  export type ProductUpsertWithoutOffersInput = {
    update: XOR<ProductUpdateWithoutOffersInput, ProductUncheckedUpdateWithoutOffersInput>
    create: XOR<ProductCreateWithoutOffersInput, ProductUncheckedCreateWithoutOffersInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOffersInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOffersInput, ProductUncheckedUpdateWithoutOffersInput>
  }

  export type ProductUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
    category?: CategoryOnProductUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUpdateOneWithoutProductNestedInput
    price?: PriceUpdateOneRequiredWithoutProductNestedInput
    stock?: StockUpdateOneRequiredWithoutProductNestedInput
    unit?: UnitUpdateOneRequiredWithoutProductsNestedInput
    links?: LinksUpdateOneRequiredWithoutProductNestedInput
    availability?: AvailabilityUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUncheckedUpdateOneWithoutProductNestedInput
  }

  export type ProductCreateWithoutStockInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
    category?: CategoryOnProductCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeCreateNestedOneWithoutProductInput
    price: PriceCreateNestedOneWithoutProductInput
    offers?: OfferCreateNestedManyWithoutProductInput
    unit: UnitCreateNestedOneWithoutProductsInput
    links: LinksCreateNestedOneWithoutProductInput
    availability?: AvailabilityCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    priceId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeUncheckedCreateNestedOneWithoutProductInput
    offers?: OfferUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
  }

  export type ProductUpsertWithoutStockInput = {
    update: XOR<ProductUpdateWithoutStockInput, ProductUncheckedUpdateWithoutStockInput>
    create: XOR<ProductCreateWithoutStockInput, ProductUncheckedCreateWithoutStockInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockInput, ProductUncheckedUpdateWithoutStockInput>
  }

  export type ProductUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
    category?: CategoryOnProductUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUpdateOneWithoutProductNestedInput
    price?: PriceUpdateOneRequiredWithoutProductNestedInput
    offers?: OfferUpdateManyWithoutProductNestedInput
    unit?: UnitUpdateOneRequiredWithoutProductsNestedInput
    links?: LinksUpdateOneRequiredWithoutProductNestedInput
    availability?: AvailabilityUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUncheckedUpdateOneWithoutProductNestedInput
    offers?: OfferUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutUnitInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
    category?: CategoryOnProductCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeCreateNestedOneWithoutProductInput
    price: PriceCreateNestedOneWithoutProductInput
    offers?: OfferCreateNestedManyWithoutProductInput
    stock: StockCreateNestedOneWithoutProductInput
    links: LinksCreateNestedOneWithoutProductInput
    availability?: AvailabilityCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUnitInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    priceId: string
    stockId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeUncheckedCreateNestedOneWithoutProductInput
    offers?: OfferUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUnitInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput>
  }

  export type ProductCreateManyUnitInputEnvelope = {
    data: ProductCreateManyUnitInput | ProductCreateManyUnitInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutUnitInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUnitInput, ProductUncheckedUpdateWithoutUnitInput>
    create: XOR<ProductCreateWithoutUnitInput, ProductUncheckedCreateWithoutUnitInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUnitInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUnitInput, ProductUncheckedUpdateWithoutUnitInput>
  }

  export type ProductUpdateManyWithWhereWithoutUnitInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUnitInput>
  }

  export type ProductCreateWithoutLinksInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
    category?: CategoryOnProductCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeCreateNestedOneWithoutProductInput
    price: PriceCreateNestedOneWithoutProductInput
    offers?: OfferCreateNestedManyWithoutProductInput
    stock: StockCreateNestedOneWithoutProductInput
    unit: UnitCreateNestedOneWithoutProductsInput
    availability?: AvailabilityCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutLinksInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    priceId: string
    stockId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeUncheckedCreateNestedOneWithoutProductInput
    offers?: OfferUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutLinksInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutLinksInput, ProductUncheckedCreateWithoutLinksInput>
  }

  export type ProductUpsertWithoutLinksInput = {
    update: XOR<ProductUpdateWithoutLinksInput, ProductUncheckedUpdateWithoutLinksInput>
    create: XOR<ProductCreateWithoutLinksInput, ProductUncheckedCreateWithoutLinksInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutLinksInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutLinksInput, ProductUncheckedUpdateWithoutLinksInput>
  }

  export type ProductUpdateWithoutLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
    category?: CategoryOnProductUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUpdateOneWithoutProductNestedInput
    price?: PriceUpdateOneRequiredWithoutProductNestedInput
    offers?: OfferUpdateManyWithoutProductNestedInput
    stock?: StockUpdateOneRequiredWithoutProductNestedInput
    unit?: UnitUpdateOneRequiredWithoutProductsNestedInput
    availability?: AvailabilityUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUncheckedUpdateOneWithoutProductNestedInput
    offers?: OfferUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutAvailabilityInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    brand?: BrandCreateNestedOneWithoutProductsInput
    category?: CategoryOnProductCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeCreateNestedOneWithoutProductInput
    price: PriceCreateNestedOneWithoutProductInput
    offers?: OfferCreateNestedManyWithoutProductInput
    stock: StockCreateNestedOneWithoutProductInput
    unit: UnitCreateNestedOneWithoutProductsInput
    links: LinksCreateNestedOneWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAvailabilityInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    priceId: string
    stockId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    category?: CategoryOnProductUncheckedCreateNestedManyWithoutProductInput
    deliveryFees?: DeliveryFeeUncheckedCreateNestedOneWithoutProductInput
    offers?: OfferUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAvailabilityInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAvailabilityInput, ProductUncheckedCreateWithoutAvailabilityInput>
  }

  export type ProductUpsertWithoutAvailabilityInput = {
    update: XOR<ProductUpdateWithoutAvailabilityInput, ProductUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<ProductCreateWithoutAvailabilityInput, ProductUncheckedCreateWithoutAvailabilityInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAvailabilityInput, ProductUncheckedUpdateWithoutAvailabilityInput>
  }

  export type ProductUpdateWithoutAvailabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
    category?: CategoryOnProductUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUpdateOneWithoutProductNestedInput
    price?: PriceUpdateOneRequiredWithoutProductNestedInput
    offers?: OfferUpdateManyWithoutProductNestedInput
    stock?: StockUpdateOneRequiredWithoutProductNestedInput
    unit?: UnitUpdateOneRequiredWithoutProductsNestedInput
    links?: LinksUpdateOneRequiredWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAvailabilityInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUncheckedUpdateOneWithoutProductNestedInput
    offers?: OfferUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CategoryCreateManyParentInput = {
    id: string
    storeId?: string | null
    key?: string | null
    name?: string | null
    title?: string | null
    url?: string | null
    image?: string | null
    store?: number | null
    nameAr?: string | null
    nameKa?: string | null
    mediaWeb?: string | null
    mediaMobile?: string | null
    mediaWebAr?: string | null
    mediaMobileAr?: string | null
    mediaWebKa?: string | null
    mediaMobileKa?: string | null
    ctaUrl?: string | null
    bgColor?: string | null
    bg_color?: string | null
    thumbnail?: string | null
    level?: number | null
    count?: number | null
    facetName?: string | null
    index?: string | null
    score?: number | null
  }

  export type CategoryOnProductCreateManyCategoryInput = {
    productId: number
  }

  export type CategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableIntFieldUpdateOperationsInput | number | null
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    nameKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWeb?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileKa?: NullableStringFieldUpdateOperationsInput | string | null
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    bg_color?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    facetName?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    children?: CategoryUpdateManyWithoutParentNestedInput
    CategoryOnProduct?: CategoryOnProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableIntFieldUpdateOperationsInput | number | null
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    nameKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWeb?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileKa?: NullableStringFieldUpdateOperationsInput | string | null
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    bg_color?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    facetName?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    CategoryOnProduct?: CategoryOnProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    key?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    store?: NullableIntFieldUpdateOperationsInput | number | null
    nameAr?: NullableStringFieldUpdateOperationsInput | string | null
    nameKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWeb?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobile?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileAr?: NullableStringFieldUpdateOperationsInput | string | null
    mediaWebKa?: NullableStringFieldUpdateOperationsInput | string | null
    mediaMobileKa?: NullableStringFieldUpdateOperationsInput | string | null
    ctaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bgColor?: NullableStringFieldUpdateOperationsInput | string | null
    bg_color?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    level?: NullableIntFieldUpdateOperationsInput | number | null
    count?: NullableIntFieldUpdateOperationsInput | number | null
    facetName?: NullableStringFieldUpdateOperationsInput | string | null
    index?: NullableStringFieldUpdateOperationsInput | string | null
    score?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryOnProductUpdateWithoutCategoryInput = {
    product?: ProductUpdateOneRequiredWithoutCategoryNestedInput
  }

  export type CategoryOnProductUncheckedUpdateWithoutCategoryInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryOnProductUncheckedUpdateManyWithoutCategoryInput = {
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryOnProductCreateManyProductInput = {
    categoryId: string
  }

  export type OfferCreateManyProductInput = {
    id: string
    sellerName: string
    shopId: string
    type: string
    purchaseIndicators: JsonNullValueInput | InputJsonValue
    shippingIndicator: string
  }

  export type CategoryOnProductUpdateWithoutProductInput = {
    category?: CategoryUpdateOneRequiredWithoutCategoryOnProductNestedInput
  }

  export type CategoryOnProductUncheckedUpdateWithoutProductInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryOnProductUncheckedUpdateManyWithoutProductInput = {
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type OfferUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerName?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    purchaseIndicators?: JsonNullValueInput | InputJsonValue
    shippingIndicator?: StringFieldUpdateOperationsInput | string
  }

  export type OfferUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerName?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    purchaseIndicators?: JsonNullValueInput | InputJsonValue
    shippingIndicator?: StringFieldUpdateOperationsInput | string
  }

  export type OfferUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerName?: StringFieldUpdateOperationsInput | string
    shopId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    purchaseIndicators?: JsonNullValueInput | InputJsonValue
    shippingIndicator?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyBrandInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    priceId: string
    stockId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryOnProductUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUpdateOneWithoutProductNestedInput
    price?: PriceUpdateOneRequiredWithoutProductNestedInput
    offers?: OfferUpdateManyWithoutProductNestedInput
    stock?: StockUpdateOneRequiredWithoutProductNestedInput
    unit?: UnitUpdateOneRequiredWithoutProductsNestedInput
    links?: LinksUpdateOneRequiredWithoutProductNestedInput
    availability?: AvailabilityUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    priceId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUncheckedUpdateOneWithoutProductNestedInput
    offers?: OfferUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    priceId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyPriceInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    stockId: string
    unitId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutPriceInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
    category?: CategoryOnProductUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUpdateOneWithoutProductNestedInput
    offers?: OfferUpdateManyWithoutProductNestedInput
    stock?: StockUpdateOneRequiredWithoutProductNestedInput
    unit?: UnitUpdateOneRequiredWithoutProductsNestedInput
    links?: LinksUpdateOneRequiredWithoutProductNestedInput
    availability?: AvailabilityUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutPriceInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    stockId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUncheckedUpdateOneWithoutProductNestedInput
    offers?: OfferUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutPriceInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    stockId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceCreateManyDiscountInput = {
    id?: string
    currency: string
    price: number
    formattedValue: string
    minBuyingValue: string
  }

  export type PriceUpdateWithoutDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    formattedValue?: StringFieldUpdateOperationsInput | string
    minBuyingValue?: StringFieldUpdateOperationsInput | string
    Product?: ProductUpdateManyWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateWithoutDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    formattedValue?: StringFieldUpdateOperationsInput | string
    minBuyingValue?: StringFieldUpdateOperationsInput | string
    Product?: ProductUncheckedUpdateManyWithoutPriceNestedInput
  }

  export type PriceUncheckedUpdateManyWithoutDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    formattedValue?: StringFieldUpdateOperationsInput | string
    minBuyingValue?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyUnitInput = {
    id: number
    ean: string
    name: string
    type: string
    preorder: boolean
    isExpress: boolean
    productOrigin?: string | null
    supplier: string
    isBulk: boolean
    bulkMessage: string
    isScalable: boolean
    size?: string | null
    isFBC: boolean
    isMarketPlace: boolean
    foodType?: string | null
    productCategoriesHearchi: string
    soldByWeight: boolean
    isRecommendable: boolean
    brandId?: string | null
    priceId: string
    stockId: string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductCreatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductCreateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductCreateservingIntentsInput | string[]
    availableVariants?: ProductCreateavailableVariantsInput | InputJsonValue[]
    variants?: ProductCreatevariantsInput | InputJsonValue[]
    linksId: string
    availabilityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandUpdateOneWithoutProductsNestedInput
    category?: CategoryOnProductUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUpdateOneWithoutProductNestedInput
    price?: PriceUpdateOneRequiredWithoutProductNestedInput
    offers?: OfferUpdateManyWithoutProductNestedInput
    stock?: StockUpdateOneRequiredWithoutProductNestedInput
    links?: LinksUpdateOneRequiredWithoutProductNestedInput
    availability?: AvailabilityUpdateOneWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryOnProductUncheckedUpdateManyWithoutProductNestedInput
    deliveryFees?: DeliveryFeeUncheckedUpdateOneWithoutProductNestedInput
    offers?: OfferUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUnitInput = {
    id?: IntFieldUpdateOperationsInput | number
    ean?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    preorder?: BoolFieldUpdateOperationsInput | boolean
    isExpress?: BoolFieldUpdateOperationsInput | boolean
    productOrigin?: NullableStringFieldUpdateOperationsInput | string | null
    supplier?: StringFieldUpdateOperationsInput | string
    isBulk?: BoolFieldUpdateOperationsInput | boolean
    bulkMessage?: StringFieldUpdateOperationsInput | string
    isScalable?: BoolFieldUpdateOperationsInput | boolean
    size?: NullableStringFieldUpdateOperationsInput | string | null
    isFBC?: BoolFieldUpdateOperationsInput | boolean
    isMarketPlace?: BoolFieldUpdateOperationsInput | boolean
    foodType?: NullableStringFieldUpdateOperationsInput | string | null
    productCategoriesHearchi?: StringFieldUpdateOperationsInput | string
    soldByWeight?: BoolFieldUpdateOperationsInput | boolean
    isRecommendable?: BoolFieldUpdateOperationsInput | boolean
    brandId?: NullableStringFieldUpdateOperationsInput | string | null
    priceId?: StringFieldUpdateOperationsInput | string
    stockId?: StringFieldUpdateOperationsInput | string
    promoVoucher?: NullableJsonNullValueInput | InputJsonValue
    promoBadges?: ProductUpdatepromoBadgesInput | InputJsonValue[]
    amendableOrders?: ProductUpdateamendableOrdersInput | InputJsonValue[]
    servingIntents?: ProductUpdateservingIntentsInput | string[]
    availableVariants?: ProductUpdateavailableVariantsInput | InputJsonValue[]
    variants?: ProductUpdatevariantsInput | InputJsonValue[]
    linksId?: StringFieldUpdateOperationsInput | string
    availabilityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}