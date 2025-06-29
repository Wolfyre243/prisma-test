
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
 * Model course
 * 
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>
/**
 * Model department
 * 
 */
export type department = $Result.DefaultSelection<Prisma.$departmentPayload>
/**
 * Model staff
 * 
 */
export type staff = $Result.DefaultSelection<Prisma.$staffPayload>
/**
 * Model staffBackup
 * 
 */
export type staffBackup = $Result.DefaultSelection<Prisma.$staffBackupPayload>
/**
 * Model userAccount
 * 
 */
export type userAccount = $Result.DefaultSelection<Prisma.$userAccountPayload>
/**
 * Model userRole
 * 
 */
export type userRole = $Result.DefaultSelection<Prisma.$userRolePayload>
/**
 * Model module
 * 
 */
export type module = $Result.DefaultSelection<Prisma.$modulePayload>
/**
 * Model staffDependent
 * 
 */
export type staffDependent = $Result.DefaultSelection<Prisma.$staffDependentPayload>
/**
 * Model preRequisite
 * 
 */
export type preRequisite = $Result.DefaultSelection<Prisma.$preRequisitePayload>
/**
 * Model country
 * 
 */
export type country = $Result.DefaultSelection<Prisma.$countryPayload>
/**
 * Model student
 * 
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>
/**
 * Model studModPerformance
 * 
 */
export type studModPerformance = $Result.DefaultSelection<Prisma.$studModPerformancePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.course.findMany()
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
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
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
   * `prisma.course`: Exposes CRUD operations for the **course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.courseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.departmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staff`: Exposes CRUD operations for the **staff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staff
    * const staff = await prisma.staff.findMany()
    * ```
    */
  get staff(): Prisma.staffDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffBackup`: Exposes CRUD operations for the **staffBackup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffBackups
    * const staffBackups = await prisma.staffBackup.findMany()
    * ```
    */
  get staffBackup(): Prisma.staffBackupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAccount`: Exposes CRUD operations for the **userAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAccounts
    * const userAccounts = await prisma.userAccount.findMany()
    * ```
    */
  get userAccount(): Prisma.userAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **userRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.userRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.moduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffDependent`: Exposes CRUD operations for the **staffDependent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaffDependents
    * const staffDependents = await prisma.staffDependent.findMany()
    * ```
    */
  get staffDependent(): Prisma.staffDependentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preRequisite`: Exposes CRUD operations for the **preRequisite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PreRequisites
    * const preRequisites = await prisma.preRequisite.findMany()
    * ```
    */
  get preRequisite(): Prisma.preRequisiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.country`: Exposes CRUD operations for the **country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.countryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studModPerformance`: Exposes CRUD operations for the **studModPerformance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudModPerformances
    * const studModPerformances = await prisma.studModPerformance.findMany()
    * ```
    */
  get studModPerformance(): Prisma.studModPerformanceDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    course: 'course',
    department: 'department',
    staff: 'staff',
    staffBackup: 'staffBackup',
    userAccount: 'userAccount',
    userRole: 'userRole',
    module: 'module',
    staffDependent: 'staffDependent',
    preRequisite: 'preRequisite',
    country: 'country',
    student: 'student',
    studModPerformance: 'studModPerformance'
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
      modelProps: "course" | "department" | "staff" | "staffBackup" | "userAccount" | "userRole" | "module" | "staffDependent" | "preRequisite" | "country" | "student" | "studModPerformance"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      course: {
        payload: Prisma.$coursePayload<ExtArgs>
        fields: Prisma.courseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.courseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.courseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[]
          }
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$coursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.courseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      department: {
        payload: Prisma.$departmentPayload<ExtArgs>
        fields: Prisma.departmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.departmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.departmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findFirst: {
            args: Prisma.departmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.departmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          findMany: {
            args: Prisma.departmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          create: {
            args: Prisma.departmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          createMany: {
            args: Prisma.departmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.departmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          delete: {
            args: Prisma.departmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          update: {
            args: Prisma.departmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          deleteMany: {
            args: Prisma.departmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.departmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.departmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>[]
          }
          upsert: {
            args: Prisma.departmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$departmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.departmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.departmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      staff: {
        payload: Prisma.$staffPayload<ExtArgs>
        fields: Prisma.staffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findFirst: {
            args: Prisma.staffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          findMany: {
            args: Prisma.staffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          create: {
            args: Prisma.staffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          createMany: {
            args: Prisma.staffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.staffCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          delete: {
            args: Prisma.staffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          update: {
            args: Prisma.staffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          deleteMany: {
            args: Prisma.staffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.staffUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>[]
          }
          upsert: {
            args: Prisma.staffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffPayload>
          }
          aggregate: {
            args: Prisma.StaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaff>
          }
          groupBy: {
            args: Prisma.staffGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.staffCountArgs<ExtArgs>
            result: $Utils.Optional<StaffCountAggregateOutputType> | number
          }
        }
      }
      staffBackup: {
        payload: Prisma.$staffBackupPayload<ExtArgs>
        fields: Prisma.staffBackupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staffBackupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffBackupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staffBackupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffBackupPayload>
          }
          findFirst: {
            args: Prisma.staffBackupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffBackupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staffBackupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffBackupPayload>
          }
          findMany: {
            args: Prisma.staffBackupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffBackupPayload>[]
          }
          create: {
            args: Prisma.staffBackupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffBackupPayload>
          }
          createMany: {
            args: Prisma.staffBackupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.staffBackupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffBackupPayload>[]
          }
          delete: {
            args: Prisma.staffBackupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffBackupPayload>
          }
          update: {
            args: Prisma.staffBackupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffBackupPayload>
          }
          deleteMany: {
            args: Prisma.staffBackupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staffBackupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.staffBackupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffBackupPayload>[]
          }
          upsert: {
            args: Prisma.staffBackupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffBackupPayload>
          }
          aggregate: {
            args: Prisma.StaffBackupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffBackup>
          }
          groupBy: {
            args: Prisma.staffBackupGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffBackupGroupByOutputType>[]
          }
          count: {
            args: Prisma.staffBackupCountArgs<ExtArgs>
            result: $Utils.Optional<StaffBackupCountAggregateOutputType> | number
          }
        }
      }
      userAccount: {
        payload: Prisma.$userAccountPayload<ExtArgs>
        fields: Prisma.userAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAccountPayload>
          }
          findFirst: {
            args: Prisma.userAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAccountPayload>
          }
          findMany: {
            args: Prisma.userAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAccountPayload>[]
          }
          create: {
            args: Prisma.userAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAccountPayload>
          }
          createMany: {
            args: Prisma.userAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAccountPayload>[]
          }
          delete: {
            args: Prisma.userAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAccountPayload>
          }
          update: {
            args: Prisma.userAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAccountPayload>
          }
          deleteMany: {
            args: Prisma.userAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAccountPayload>[]
          }
          upsert: {
            args: Prisma.userAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userAccountPayload>
          }
          aggregate: {
            args: Prisma.UserAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAccount>
          }
          groupBy: {
            args: Prisma.userAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.userAccountCountArgs<ExtArgs>
            result: $Utils.Optional<UserAccountCountAggregateOutputType> | number
          }
        }
      }
      userRole: {
        payload: Prisma.$userRolePayload<ExtArgs>
        fields: Prisma.userRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          findFirst: {
            args: Prisma.userRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          findMany: {
            args: Prisma.userRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>[]
          }
          create: {
            args: Prisma.userRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          createMany: {
            args: Prisma.userRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>[]
          }
          delete: {
            args: Prisma.userRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          update: {
            args: Prisma.userRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          deleteMany: {
            args: Prisma.userRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>[]
          }
          upsert: {
            args: Prisma.userRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.userRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.userRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      module: {
        payload: Prisma.$modulePayload<ExtArgs>
        fields: Prisma.moduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.moduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.moduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          findFirst: {
            args: Prisma.moduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.moduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          findMany: {
            args: Prisma.moduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[]
          }
          create: {
            args: Prisma.moduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          createMany: {
            args: Prisma.moduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.moduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[]
          }
          delete: {
            args: Prisma.moduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          update: {
            args: Prisma.moduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          deleteMany: {
            args: Prisma.moduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.moduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.moduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>[]
          }
          upsert: {
            args: Prisma.moduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$modulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.moduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.moduleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      staffDependent: {
        payload: Prisma.$staffDependentPayload<ExtArgs>
        fields: Prisma.staffDependentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staffDependentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffDependentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staffDependentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffDependentPayload>
          }
          findFirst: {
            args: Prisma.staffDependentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffDependentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staffDependentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffDependentPayload>
          }
          findMany: {
            args: Prisma.staffDependentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffDependentPayload>[]
          }
          create: {
            args: Prisma.staffDependentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffDependentPayload>
          }
          createMany: {
            args: Prisma.staffDependentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.staffDependentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffDependentPayload>[]
          }
          delete: {
            args: Prisma.staffDependentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffDependentPayload>
          }
          update: {
            args: Prisma.staffDependentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffDependentPayload>
          }
          deleteMany: {
            args: Prisma.staffDependentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staffDependentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.staffDependentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffDependentPayload>[]
          }
          upsert: {
            args: Prisma.staffDependentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffDependentPayload>
          }
          aggregate: {
            args: Prisma.StaffDependentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffDependent>
          }
          groupBy: {
            args: Prisma.staffDependentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffDependentGroupByOutputType>[]
          }
          count: {
            args: Prisma.staffDependentCountArgs<ExtArgs>
            result: $Utils.Optional<StaffDependentCountAggregateOutputType> | number
          }
        }
      }
      preRequisite: {
        payload: Prisma.$preRequisitePayload<ExtArgs>
        fields: Prisma.preRequisiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.preRequisiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preRequisitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.preRequisiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preRequisitePayload>
          }
          findFirst: {
            args: Prisma.preRequisiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preRequisitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.preRequisiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preRequisitePayload>
          }
          findMany: {
            args: Prisma.preRequisiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preRequisitePayload>[]
          }
          create: {
            args: Prisma.preRequisiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preRequisitePayload>
          }
          createMany: {
            args: Prisma.preRequisiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.preRequisiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preRequisitePayload>[]
          }
          delete: {
            args: Prisma.preRequisiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preRequisitePayload>
          }
          update: {
            args: Prisma.preRequisiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preRequisitePayload>
          }
          deleteMany: {
            args: Prisma.preRequisiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.preRequisiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.preRequisiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preRequisitePayload>[]
          }
          upsert: {
            args: Prisma.preRequisiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$preRequisitePayload>
          }
          aggregate: {
            args: Prisma.PreRequisiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreRequisite>
          }
          groupBy: {
            args: Prisma.preRequisiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreRequisiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.preRequisiteCountArgs<ExtArgs>
            result: $Utils.Optional<PreRequisiteCountAggregateOutputType> | number
          }
        }
      }
      country: {
        payload: Prisma.$countryPayload<ExtArgs>
        fields: Prisma.countryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.countryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.countryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          findFirst: {
            args: Prisma.countryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.countryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          findMany: {
            args: Prisma.countryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>[]
          }
          create: {
            args: Prisma.countryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          createMany: {
            args: Prisma.countryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.countryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>[]
          }
          delete: {
            args: Prisma.countryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          update: {
            args: Prisma.countryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          deleteMany: {
            args: Prisma.countryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.countryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.countryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>[]
          }
          upsert: {
            args: Prisma.countryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.countryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.countryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      studModPerformance: {
        payload: Prisma.$studModPerformancePayload<ExtArgs>
        fields: Prisma.studModPerformanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studModPerformanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studModPerformancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studModPerformanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studModPerformancePayload>
          }
          findFirst: {
            args: Prisma.studModPerformanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studModPerformancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studModPerformanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studModPerformancePayload>
          }
          findMany: {
            args: Prisma.studModPerformanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studModPerformancePayload>[]
          }
          create: {
            args: Prisma.studModPerformanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studModPerformancePayload>
          }
          createMany: {
            args: Prisma.studModPerformanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studModPerformanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studModPerformancePayload>[]
          }
          delete: {
            args: Prisma.studModPerformanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studModPerformancePayload>
          }
          update: {
            args: Prisma.studModPerformanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studModPerformancePayload>
          }
          deleteMany: {
            args: Prisma.studModPerformanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studModPerformanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studModPerformanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studModPerformancePayload>[]
          }
          upsert: {
            args: Prisma.studModPerformanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studModPerformancePayload>
          }
          aggregate: {
            args: Prisma.StudModPerformanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudModPerformance>
          }
          groupBy: {
            args: Prisma.studModPerformanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudModPerformanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.studModPerformanceCountArgs<ExtArgs>
            result: $Utils.Optional<StudModPerformanceCountAggregateOutputType> | number
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
    course?: courseOmit
    department?: departmentOmit
    staff?: staffOmit
    staffBackup?: staffBackupOmit
    userAccount?: userAccountOmit
    userRole?: userRoleOmit
    module?: moduleOmit
    staffDependent?: staffDependentOmit
    preRequisite?: preRequisiteOmit
    country?: countryOmit
    student?: studentOmit
    studModPerformance?: studModPerformanceOmit
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
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    student: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | CourseCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    staffDeptCodToDepartment: number
    course: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffDeptCodToDepartment?: boolean | DepartmentCountOutputTypeCountStaffDeptCodToDepartmentArgs
    course?: boolean | DepartmentCountOutputTypeCountCourseArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountStaffDeptCodToDepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
  }


  /**
   * Count Type StaffCountOutputType
   */

  export type StaffCountOutputType = {
    departmentHodToStaff: number
    staffDependent: number
    module: number
  }

  export type StaffCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentHodToStaff?: boolean | StaffCountOutputTypeCountDepartmentHodToStaffArgs
    staffDependent?: boolean | StaffCountOutputTypeCountStaffDependentArgs
    module?: boolean | StaffCountOutputTypeCountModuleArgs
  }

  // Custom InputTypes
  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffCountOutputType
     */
    select?: StaffCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountDepartmentHodToStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountStaffDependentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffDependentWhereInput
  }

  /**
   * StaffCountOutputType without action
   */
  export type StaffCountOutputTypeCountModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    preRequisiteModCodeToModule: number
    preRequisiteRequisiteToModule: number
    studModPerformance: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preRequisiteModCodeToModule?: boolean | ModuleCountOutputTypeCountPreRequisiteModCodeToModuleArgs
    preRequisiteRequisiteToModule?: boolean | ModuleCountOutputTypeCountPreRequisiteRequisiteToModuleArgs
    studModPerformance?: boolean | ModuleCountOutputTypeCountStudModPerformanceArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountPreRequisiteModCodeToModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preRequisiteWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountPreRequisiteRequisiteToModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preRequisiteWhereInput
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountStudModPerformanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studModPerformanceWhereInput
  }


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    student: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | CountryCountOutputTypeCountStudentArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    studModPerformance: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studModPerformance?: boolean | StudentCountOutputTypeCountStudModPerformanceArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudModPerformanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studModPerformanceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    crseFee: Decimal | null
    labFee: Decimal | null
  }

  export type CourseSumAggregateOutputType = {
    crseFee: Decimal | null
    labFee: Decimal | null
  }

  export type CourseMinAggregateOutputType = {
    crseCode: string | null
    crseName: string | null
    offeredBy: string | null
    crseFee: Decimal | null
    labFee: Decimal | null
  }

  export type CourseMaxAggregateOutputType = {
    crseCode: string | null
    crseName: string | null
    offeredBy: string | null
    crseFee: Decimal | null
    labFee: Decimal | null
  }

  export type CourseCountAggregateOutputType = {
    crseCode: number
    crseName: number
    offeredBy: number
    crseFee: number
    labFee: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    crseFee?: true
    labFee?: true
  }

  export type CourseSumAggregateInputType = {
    crseFee?: true
    labFee?: true
  }

  export type CourseMinAggregateInputType = {
    crseCode?: true
    crseName?: true
    offeredBy?: true
    crseFee?: true
    labFee?: true
  }

  export type CourseMaxAggregateInputType = {
    crseCode?: true
    crseName?: true
    offeredBy?: true
    crseFee?: true
    labFee?: true
  }

  export type CourseCountAggregateInputType = {
    crseCode?: true
    crseName?: true
    offeredBy?: true
    crseFee?: true
    labFee?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: courseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    crseCode: string
    crseName: string
    offeredBy: string
    crseFee: Decimal
    labFee: Decimal | null
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    crseCode?: boolean
    crseName?: boolean
    offeredBy?: boolean
    crseFee?: boolean
    labFee?: boolean
    department?: boolean | departmentDefaultArgs<ExtArgs>
    student?: boolean | course$studentArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    crseCode?: boolean
    crseName?: boolean
    offeredBy?: boolean
    crseFee?: boolean
    labFee?: boolean
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    crseCode?: boolean
    crseName?: boolean
    offeredBy?: boolean
    crseFee?: boolean
    labFee?: boolean
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type courseSelectScalar = {
    crseCode?: boolean
    crseName?: boolean
    offeredBy?: boolean
    crseFee?: boolean
    labFee?: boolean
  }

  export type courseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"crseCode" | "crseName" | "offeredBy" | "crseFee" | "labFee", ExtArgs["result"]["course"]>
  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | departmentDefaultArgs<ExtArgs>
    student?: boolean | course$studentArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type courseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }
  export type courseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | departmentDefaultArgs<ExtArgs>
  }

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course"
    objects: {
      department: Prisma.$departmentPayload<ExtArgs>
      student: Prisma.$studentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      crseCode: string
      crseName: string
      offeredBy: string
      crseFee: Prisma.Decimal
      labFee: Prisma.Decimal | null
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<Prisma.$coursePayload, S>

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<courseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course'], meta: { name: 'course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends courseFindUniqueArgs>(args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs>(args: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends courseFindFirstArgs>(args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs>(args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `crseCode`
     * const courseWithCrseCodeOnly = await prisma.course.findMany({ select: { crseCode: true } })
     * 
     */
    findMany<T extends courseFindManyArgs>(args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends courseCreateArgs>(args: SelectSubset<T, courseCreateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {courseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends courseCreateManyArgs>(args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {courseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `crseCode`
     * const courseWithCrseCodeOnly = await prisma.course.createManyAndReturn({
     *   select: { crseCode: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends courseCreateManyAndReturnArgs>(args?: SelectSubset<T, courseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends courseDeleteArgs>(args: SelectSubset<T, courseDeleteArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends courseUpdateArgs>(args: SelectSubset<T, courseUpdateArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends courseDeleteManyArgs>(args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends courseUpdateManyArgs>(args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {courseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `crseCode`
     * const courseWithCrseCodeOnly = await prisma.course.updateManyAndReturn({
     *   select: { crseCode: true },
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
    updateManyAndReturn<T extends courseUpdateManyAndReturnArgs>(args: SelectSubset<T, courseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends courseUpsertArgs>(args: SelectSubset<T, courseUpsertArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
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
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course model
   */
  readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends departmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, departmentDefaultArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends course$studentArgs<ExtArgs> = {}>(args?: Subset<T, course$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly crseCode: FieldRef<"course", 'String'>
    readonly crseName: FieldRef<"course", 'String'>
    readonly offeredBy: FieldRef<"course", 'String'>
    readonly crseFee: FieldRef<"course", 'Decimal'>
    readonly labFee: FieldRef<"course", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>
  }

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course createManyAndReturn
   */
  export type courseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
  }

  /**
   * course updateManyAndReturn
   */
  export type courseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>
  }

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput
  }

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput
    /**
     * Limit how many courses to delete.
     */
    limit?: number
  }

  /**
   * course.student
   */
  export type course$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    cursor?: studentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
  }


  /**
   * Model department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    noOfStaff: number | null
    maxStaffStrength: number | null
    budget: Decimal | null
    expenditure: Decimal | null
  }

  export type DepartmentSumAggregateOutputType = {
    noOfStaff: number | null
    maxStaffStrength: number | null
    budget: Decimal | null
    expenditure: Decimal | null
  }

  export type DepartmentMinAggregateOutputType = {
    deptCode: string | null
    deptName: string | null
    hod: string | null
    noOfStaff: number | null
    maxStaffStrength: number | null
    budget: Decimal | null
    expenditure: Decimal | null
    hodApptDate: Date | null
  }

  export type DepartmentMaxAggregateOutputType = {
    deptCode: string | null
    deptName: string | null
    hod: string | null
    noOfStaff: number | null
    maxStaffStrength: number | null
    budget: Decimal | null
    expenditure: Decimal | null
    hodApptDate: Date | null
  }

  export type DepartmentCountAggregateOutputType = {
    deptCode: number
    deptName: number
    hod: number
    noOfStaff: number
    maxStaffStrength: number
    budget: number
    expenditure: number
    hodApptDate: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    noOfStaff?: true
    maxStaffStrength?: true
    budget?: true
    expenditure?: true
  }

  export type DepartmentSumAggregateInputType = {
    noOfStaff?: true
    maxStaffStrength?: true
    budget?: true
    expenditure?: true
  }

  export type DepartmentMinAggregateInputType = {
    deptCode?: true
    deptName?: true
    hod?: true
    noOfStaff?: true
    maxStaffStrength?: true
    budget?: true
    expenditure?: true
    hodApptDate?: true
  }

  export type DepartmentMaxAggregateInputType = {
    deptCode?: true
    deptName?: true
    hod?: true
    noOfStaff?: true
    maxStaffStrength?: true
    budget?: true
    expenditure?: true
    hodApptDate?: true
  }

  export type DepartmentCountAggregateInputType = {
    deptCode?: true
    deptName?: true
    hod?: true
    noOfStaff?: true
    maxStaffStrength?: true
    budget?: true
    expenditure?: true
    hodApptDate?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which department to aggregate.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type departmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: departmentWhereInput
    orderBy?: departmentOrderByWithAggregationInput | departmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: departmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    deptCode: string
    deptName: string
    hod: string
    noOfStaff: number | null
    maxStaffStrength: number | null
    budget: Decimal | null
    expenditure: Decimal | null
    hodApptDate: Date | null
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends departmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type departmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deptCode?: boolean
    deptName?: boolean
    hod?: boolean
    noOfStaff?: boolean
    maxStaffStrength?: boolean
    budget?: boolean
    expenditure?: boolean
    hodApptDate?: boolean
    departmentHodToStaff?: boolean | staffDefaultArgs<ExtArgs>
    staffDeptCodToDepartment?: boolean | department$staffDeptCodToDepartmentArgs<ExtArgs>
    course?: boolean | department$courseArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type departmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deptCode?: boolean
    deptName?: boolean
    hod?: boolean
    noOfStaff?: boolean
    maxStaffStrength?: boolean
    budget?: boolean
    expenditure?: boolean
    hodApptDate?: boolean
    departmentHodToStaff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type departmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deptCode?: boolean
    deptName?: boolean
    hod?: boolean
    noOfStaff?: boolean
    maxStaffStrength?: boolean
    budget?: boolean
    expenditure?: boolean
    hodApptDate?: boolean
    departmentHodToStaff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type departmentSelectScalar = {
    deptCode?: boolean
    deptName?: boolean
    hod?: boolean
    noOfStaff?: boolean
    maxStaffStrength?: boolean
    budget?: boolean
    expenditure?: boolean
    hodApptDate?: boolean
  }

  export type departmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deptCode" | "deptName" | "hod" | "noOfStaff" | "maxStaffStrength" | "budget" | "expenditure" | "hodApptDate", ExtArgs["result"]["department"]>
  export type departmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentHodToStaff?: boolean | staffDefaultArgs<ExtArgs>
    staffDeptCodToDepartment?: boolean | department$staffDeptCodToDepartmentArgs<ExtArgs>
    course?: boolean | department$courseArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type departmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentHodToStaff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type departmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentHodToStaff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $departmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "department"
    objects: {
      departmentHodToStaff: Prisma.$staffPayload<ExtArgs>
      staffDeptCodToDepartment: Prisma.$staffPayload<ExtArgs>[]
      course: Prisma.$coursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      deptCode: string
      deptName: string
      hod: string
      noOfStaff: number | null
      maxStaffStrength: number | null
      budget: Prisma.Decimal | null
      expenditure: Prisma.Decimal | null
      hodApptDate: Date | null
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type departmentGetPayload<S extends boolean | null | undefined | departmentDefaultArgs> = $Result.GetResult<Prisma.$departmentPayload, S>

  type departmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<departmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface departmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['department'], meta: { name: 'department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {departmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends departmentFindUniqueArgs>(args: SelectSubset<T, departmentFindUniqueArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {departmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends departmentFindUniqueOrThrowArgs>(args: SelectSubset<T, departmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends departmentFindFirstArgs>(args?: SelectSubset<T, departmentFindFirstArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends departmentFindFirstOrThrowArgs>(args?: SelectSubset<T, departmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `deptCode`
     * const departmentWithDeptCodeOnly = await prisma.department.findMany({ select: { deptCode: true } })
     * 
     */
    findMany<T extends departmentFindManyArgs>(args?: SelectSubset<T, departmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {departmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends departmentCreateArgs>(args: SelectSubset<T, departmentCreateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {departmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends departmentCreateManyArgs>(args?: SelectSubset<T, departmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {departmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `deptCode`
     * const departmentWithDeptCodeOnly = await prisma.department.createManyAndReturn({
     *   select: { deptCode: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends departmentCreateManyAndReturnArgs>(args?: SelectSubset<T, departmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {departmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends departmentDeleteArgs>(args: SelectSubset<T, departmentDeleteArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {departmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends departmentUpdateArgs>(args: SelectSubset<T, departmentUpdateArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {departmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends departmentDeleteManyArgs>(args?: SelectSubset<T, departmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends departmentUpdateManyArgs>(args: SelectSubset<T, departmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {departmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `deptCode`
     * const departmentWithDeptCodeOnly = await prisma.department.updateManyAndReturn({
     *   select: { deptCode: true },
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
    updateManyAndReturn<T extends departmentUpdateManyAndReturnArgs>(args: SelectSubset<T, departmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {departmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends departmentUpsertArgs>(args: SelectSubset<T, departmentUpsertArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends departmentCountArgs>(
      args?: Subset<T, departmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departmentGroupByArgs} args - Group by arguments.
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
      T extends departmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: departmentGroupByArgs['orderBy'] }
        : { orderBy?: departmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, departmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the department model
   */
  readonly fields: departmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__departmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departmentHodToStaff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staffDeptCodToDepartment<T extends department$staffDeptCodToDepartmentArgs<ExtArgs> = {}>(args?: Subset<T, department$staffDeptCodToDepartmentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    course<T extends department$courseArgs<ExtArgs> = {}>(args?: Subset<T, department$courseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the department model
   */
  interface departmentFieldRefs {
    readonly deptCode: FieldRef<"department", 'String'>
    readonly deptName: FieldRef<"department", 'String'>
    readonly hod: FieldRef<"department", 'String'>
    readonly noOfStaff: FieldRef<"department", 'Int'>
    readonly maxStaffStrength: FieldRef<"department", 'Int'>
    readonly budget: FieldRef<"department", 'Decimal'>
    readonly expenditure: FieldRef<"department", 'Decimal'>
    readonly hodApptDate: FieldRef<"department", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * department findUnique
   */
  export type departmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findUniqueOrThrow
   */
  export type departmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department findFirst
   */
  export type departmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findFirstOrThrow
   */
  export type departmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which department to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department findMany
   */
  export type departmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter, which departments to fetch.
     */
    where?: departmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departments to fetch.
     */
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departments.
     */
    cursor?: departmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * department create
   */
  export type departmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to create a department.
     */
    data: XOR<departmentCreateInput, departmentUncheckedCreateInput>
  }

  /**
   * department createMany
   */
  export type departmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * department createManyAndReturn
   */
  export type departmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * The data used to create many departments.
     */
    data: departmentCreateManyInput | departmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * department update
   */
  export type departmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The data needed to update a department.
     */
    data: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
    /**
     * Choose, which department to update.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department updateMany
   */
  export type departmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
  }

  /**
   * department updateManyAndReturn
   */
  export type departmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * The data used to update departments.
     */
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyInput>
    /**
     * Filter which departments to update
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * department upsert
   */
  export type departmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * The filter to search for the department to update in case it exists.
     */
    where: departmentWhereUniqueInput
    /**
     * In case the department found by the `where` argument doesn't exist, create a new department with this data.
     */
    create: XOR<departmentCreateInput, departmentUncheckedCreateInput>
    /**
     * In case the department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<departmentUpdateInput, departmentUncheckedUpdateInput>
  }

  /**
   * department delete
   */
  export type departmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    /**
     * Filter which department to delete.
     */
    where: departmentWhereUniqueInput
  }

  /**
   * department deleteMany
   */
  export type departmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which departments to delete
     */
    where?: departmentWhereInput
    /**
     * Limit how many departments to delete.
     */
    limit?: number
  }

  /**
   * department.staffDeptCodToDepartment
   */
  export type department$staffDeptCodToDepartmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    cursor?: staffWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * department.course
   */
  export type department$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the course
     */
    omit?: courseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: courseInclude<ExtArgs> | null
    where?: courseWhereInput
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[]
    cursor?: courseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * department without action
   */
  export type departmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
  }


  /**
   * Model staff
   */

  export type AggregateStaff = {
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  export type StaffAvgAggregateOutputType = {
    pay: Decimal | null
    allowance: Decimal | null
    hourlyRate: Decimal | null
    joinYr: number | null
  }

  export type StaffSumAggregateOutputType = {
    pay: Decimal | null
    allowance: Decimal | null
    hourlyRate: Decimal | null
    joinYr: number | null
  }

  export type StaffMinAggregateOutputType = {
    staffNo: string | null
    staffName: string | null
    supervisorStaffNo: string | null
    dob: Date | null
    grade: string | null
    maritalStatus: string | null
    pay: Decimal | null
    allowance: Decimal | null
    hourlyRate: Decimal | null
    gender: string | null
    citizenship: string | null
    joinYr: number | null
    deptCode: string | null
    typeOfEmployment: string | null
    highestQln: string | null
    designation: string | null
  }

  export type StaffMaxAggregateOutputType = {
    staffNo: string | null
    staffName: string | null
    supervisorStaffNo: string | null
    dob: Date | null
    grade: string | null
    maritalStatus: string | null
    pay: Decimal | null
    allowance: Decimal | null
    hourlyRate: Decimal | null
    gender: string | null
    citizenship: string | null
    joinYr: number | null
    deptCode: string | null
    typeOfEmployment: string | null
    highestQln: string | null
    designation: string | null
  }

  export type StaffCountAggregateOutputType = {
    staffNo: number
    staffName: number
    supervisorStaffNo: number
    dob: number
    grade: number
    maritalStatus: number
    pay: number
    allowance: number
    hourlyRate: number
    gender: number
    citizenship: number
    joinYr: number
    deptCode: number
    typeOfEmployment: number
    highestQln: number
    designation: number
    _all: number
  }


  export type StaffAvgAggregateInputType = {
    pay?: true
    allowance?: true
    hourlyRate?: true
    joinYr?: true
  }

  export type StaffSumAggregateInputType = {
    pay?: true
    allowance?: true
    hourlyRate?: true
    joinYr?: true
  }

  export type StaffMinAggregateInputType = {
    staffNo?: true
    staffName?: true
    supervisorStaffNo?: true
    dob?: true
    grade?: true
    maritalStatus?: true
    pay?: true
    allowance?: true
    hourlyRate?: true
    gender?: true
    citizenship?: true
    joinYr?: true
    deptCode?: true
    typeOfEmployment?: true
    highestQln?: true
    designation?: true
  }

  export type StaffMaxAggregateInputType = {
    staffNo?: true
    staffName?: true
    supervisorStaffNo?: true
    dob?: true
    grade?: true
    maritalStatus?: true
    pay?: true
    allowance?: true
    hourlyRate?: true
    gender?: true
    citizenship?: true
    joinYr?: true
    deptCode?: true
    typeOfEmployment?: true
    highestQln?: true
    designation?: true
  }

  export type StaffCountAggregateInputType = {
    staffNo?: true
    staffName?: true
    supervisorStaffNo?: true
    dob?: true
    grade?: true
    maritalStatus?: true
    pay?: true
    allowance?: true
    hourlyRate?: true
    gender?: true
    citizenship?: true
    joinYr?: true
    deptCode?: true
    typeOfEmployment?: true
    highestQln?: true
    designation?: true
    _all?: true
  }

  export type StaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to aggregate.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staff
    **/
    _count?: true | StaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffMaxAggregateInputType
  }

  export type GetStaffAggregateType<T extends StaffAggregateArgs> = {
        [P in keyof T & keyof AggregateStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaff[P]>
      : GetScalarType<T[P], AggregateStaff[P]>
  }




  export type staffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffWhereInput
    orderBy?: staffOrderByWithAggregationInput | staffOrderByWithAggregationInput[]
    by: StaffScalarFieldEnum[] | StaffScalarFieldEnum
    having?: staffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffCountAggregateInputType | true
    _avg?: StaffAvgAggregateInputType
    _sum?: StaffSumAggregateInputType
    _min?: StaffMinAggregateInputType
    _max?: StaffMaxAggregateInputType
  }

  export type StaffGroupByOutputType = {
    staffNo: string
    staffName: string
    supervisorStaffNo: string | null
    dob: Date
    grade: string
    maritalStatus: string
    pay: Decimal | null
    allowance: Decimal | null
    hourlyRate: Decimal | null
    gender: string
    citizenship: string
    joinYr: number
    deptCode: string
    typeOfEmployment: string
    highestQln: string
    designation: string
    _count: StaffCountAggregateOutputType | null
    _avg: StaffAvgAggregateOutputType | null
    _sum: StaffSumAggregateOutputType | null
    _min: StaffMinAggregateOutputType | null
    _max: StaffMaxAggregateOutputType | null
  }

  type GetStaffGroupByPayload<T extends staffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffGroupByOutputType[P]>
            : GetScalarType<T[P], StaffGroupByOutputType[P]>
        }
      >
    >


  export type staffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffNo?: boolean
    staffName?: boolean
    supervisorStaffNo?: boolean
    dob?: boolean
    grade?: boolean
    maritalStatus?: boolean
    pay?: boolean
    allowance?: boolean
    hourlyRate?: boolean
    gender?: boolean
    citizenship?: boolean
    joinYr?: boolean
    deptCode?: boolean
    typeOfEmployment?: boolean
    highestQln?: boolean
    designation?: boolean
    departmentHodToStaff?: boolean | staff$departmentHodToStaffArgs<ExtArgs>
    staffDeptCodeToDepartment?: boolean | departmentDefaultArgs<ExtArgs>
    staffDependent?: boolean | staff$staffDependentArgs<ExtArgs>
    module?: boolean | staff$moduleArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type staffSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffNo?: boolean
    staffName?: boolean
    supervisorStaffNo?: boolean
    dob?: boolean
    grade?: boolean
    maritalStatus?: boolean
    pay?: boolean
    allowance?: boolean
    hourlyRate?: boolean
    gender?: boolean
    citizenship?: boolean
    joinYr?: boolean
    deptCode?: boolean
    typeOfEmployment?: boolean
    highestQln?: boolean
    designation?: boolean
    staffDeptCodeToDepartment?: boolean | departmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type staffSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffNo?: boolean
    staffName?: boolean
    supervisorStaffNo?: boolean
    dob?: boolean
    grade?: boolean
    maritalStatus?: boolean
    pay?: boolean
    allowance?: boolean
    hourlyRate?: boolean
    gender?: boolean
    citizenship?: boolean
    joinYr?: boolean
    deptCode?: boolean
    typeOfEmployment?: boolean
    highestQln?: boolean
    designation?: boolean
    staffDeptCodeToDepartment?: boolean | departmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staff"]>

  export type staffSelectScalar = {
    staffNo?: boolean
    staffName?: boolean
    supervisorStaffNo?: boolean
    dob?: boolean
    grade?: boolean
    maritalStatus?: boolean
    pay?: boolean
    allowance?: boolean
    hourlyRate?: boolean
    gender?: boolean
    citizenship?: boolean
    joinYr?: boolean
    deptCode?: boolean
    typeOfEmployment?: boolean
    highestQln?: boolean
    designation?: boolean
  }

  export type staffOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"staffNo" | "staffName" | "supervisorStaffNo" | "dob" | "grade" | "maritalStatus" | "pay" | "allowance" | "hourlyRate" | "gender" | "citizenship" | "joinYr" | "deptCode" | "typeOfEmployment" | "highestQln" | "designation", ExtArgs["result"]["staff"]>
  export type staffInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departmentHodToStaff?: boolean | staff$departmentHodToStaffArgs<ExtArgs>
    staffDeptCodeToDepartment?: boolean | departmentDefaultArgs<ExtArgs>
    staffDependent?: boolean | staff$staffDependentArgs<ExtArgs>
    module?: boolean | staff$moduleArgs<ExtArgs>
    _count?: boolean | StaffCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type staffIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffDeptCodeToDepartment?: boolean | departmentDefaultArgs<ExtArgs>
  }
  export type staffIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffDeptCodeToDepartment?: boolean | departmentDefaultArgs<ExtArgs>
  }

  export type $staffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staff"
    objects: {
      departmentHodToStaff: Prisma.$departmentPayload<ExtArgs>[]
      staffDeptCodeToDepartment: Prisma.$departmentPayload<ExtArgs>
      staffDependent: Prisma.$staffDependentPayload<ExtArgs>[]
      module: Prisma.$modulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      staffNo: string
      staffName: string
      supervisorStaffNo: string | null
      dob: Date
      grade: string
      maritalStatus: string
      pay: Prisma.Decimal | null
      allowance: Prisma.Decimal | null
      hourlyRate: Prisma.Decimal | null
      gender: string
      citizenship: string
      joinYr: number
      deptCode: string
      typeOfEmployment: string
      highestQln: string
      designation: string
    }, ExtArgs["result"]["staff"]>
    composites: {}
  }

  type staffGetPayload<S extends boolean | null | undefined | staffDefaultArgs> = $Result.GetResult<Prisma.$staffPayload, S>

  type staffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staffFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffCountAggregateInputType | true
    }

  export interface staffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staff'], meta: { name: 'staff' } }
    /**
     * Find zero or one Staff that matches the filter.
     * @param {staffFindUniqueArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staffFindUniqueArgs>(args: SelectSubset<T, staffFindUniqueArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staff that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staffFindUniqueOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staffFindUniqueOrThrowArgs>(args: SelectSubset<T, staffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staffFindFirstArgs>(args?: SelectSubset<T, staffFindFirstArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindFirstOrThrowArgs} args - Arguments to find a Staff
     * @example
     * // Get one Staff
     * const staff = await prisma.staff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staffFindFirstOrThrowArgs>(args?: SelectSubset<T, staffFindFirstOrThrowArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staff
     * const staff = await prisma.staff.findMany()
     * 
     * // Get first 10 Staff
     * const staff = await prisma.staff.findMany({ take: 10 })
     * 
     * // Only select the `staffNo`
     * const staffWithStaffNoOnly = await prisma.staff.findMany({ select: { staffNo: true } })
     * 
     */
    findMany<T extends staffFindManyArgs>(args?: SelectSubset<T, staffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staff.
     * @param {staffCreateArgs} args - Arguments to create a Staff.
     * @example
     * // Create one Staff
     * const Staff = await prisma.staff.create({
     *   data: {
     *     // ... data to create a Staff
     *   }
     * })
     * 
     */
    create<T extends staffCreateArgs>(args: SelectSubset<T, staffCreateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staff.
     * @param {staffCreateManyArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staffCreateManyArgs>(args?: SelectSubset<T, staffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staff and returns the data saved in the database.
     * @param {staffCreateManyAndReturnArgs} args - Arguments to create many Staff.
     * @example
     * // Create many Staff
     * const staff = await prisma.staff.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staff and only return the `staffNo`
     * const staffWithStaffNoOnly = await prisma.staff.createManyAndReturn({
     *   select: { staffNo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends staffCreateManyAndReturnArgs>(args?: SelectSubset<T, staffCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staff.
     * @param {staffDeleteArgs} args - Arguments to delete one Staff.
     * @example
     * // Delete one Staff
     * const Staff = await prisma.staff.delete({
     *   where: {
     *     // ... filter to delete one Staff
     *   }
     * })
     * 
     */
    delete<T extends staffDeleteArgs>(args: SelectSubset<T, staffDeleteArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staff.
     * @param {staffUpdateArgs} args - Arguments to update one Staff.
     * @example
     * // Update one Staff
     * const staff = await prisma.staff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staffUpdateArgs>(args: SelectSubset<T, staffUpdateArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staff.
     * @param {staffDeleteManyArgs} args - Arguments to filter Staff to delete.
     * @example
     * // Delete a few Staff
     * const { count } = await prisma.staff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staffDeleteManyArgs>(args?: SelectSubset<T, staffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staffUpdateManyArgs>(args: SelectSubset<T, staffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staff and returns the data updated in the database.
     * @param {staffUpdateManyAndReturnArgs} args - Arguments to update many Staff.
     * @example
     * // Update many Staff
     * const staff = await prisma.staff.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staff and only return the `staffNo`
     * const staffWithStaffNoOnly = await prisma.staff.updateManyAndReturn({
     *   select: { staffNo: true },
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
    updateManyAndReturn<T extends staffUpdateManyAndReturnArgs>(args: SelectSubset<T, staffUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staff.
     * @param {staffUpsertArgs} args - Arguments to update or create a Staff.
     * @example
     * // Update or create a Staff
     * const staff = await prisma.staff.upsert({
     *   create: {
     *     // ... data to create a Staff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staff we want to update
     *   }
     * })
     */
    upsert<T extends staffUpsertArgs>(args: SelectSubset<T, staffUpsertArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffCountArgs} args - Arguments to filter Staff to count.
     * @example
     * // Count the number of Staff
     * const count = await prisma.staff.count({
     *   where: {
     *     // ... the filter for the Staff we want to count
     *   }
     * })
    **/
    count<T extends staffCountArgs>(
      args?: Subset<T, staffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffAggregateArgs>(args: Subset<T, StaffAggregateArgs>): Prisma.PrismaPromise<GetStaffAggregateType<T>>

    /**
     * Group by Staff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffGroupByArgs} args - Group by arguments.
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
      T extends staffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffGroupByArgs['orderBy'] }
        : { orderBy?: staffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, staffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staff model
   */
  readonly fields: staffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departmentHodToStaff<T extends staff$departmentHodToStaffArgs<ExtArgs> = {}>(args?: Subset<T, staff$departmentHodToStaffArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffDeptCodeToDepartment<T extends departmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, departmentDefaultArgs<ExtArgs>>): Prisma__departmentClient<$Result.GetResult<Prisma.$departmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staffDependent<T extends staff$staffDependentArgs<ExtArgs> = {}>(args?: Subset<T, staff$staffDependentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    module<T extends staff$moduleArgs<ExtArgs> = {}>(args?: Subset<T, staff$moduleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the staff model
   */
  interface staffFieldRefs {
    readonly staffNo: FieldRef<"staff", 'String'>
    readonly staffName: FieldRef<"staff", 'String'>
    readonly supervisorStaffNo: FieldRef<"staff", 'String'>
    readonly dob: FieldRef<"staff", 'DateTime'>
    readonly grade: FieldRef<"staff", 'String'>
    readonly maritalStatus: FieldRef<"staff", 'String'>
    readonly pay: FieldRef<"staff", 'Decimal'>
    readonly allowance: FieldRef<"staff", 'Decimal'>
    readonly hourlyRate: FieldRef<"staff", 'Decimal'>
    readonly gender: FieldRef<"staff", 'String'>
    readonly citizenship: FieldRef<"staff", 'String'>
    readonly joinYr: FieldRef<"staff", 'Int'>
    readonly deptCode: FieldRef<"staff", 'String'>
    readonly typeOfEmployment: FieldRef<"staff", 'String'>
    readonly highestQln: FieldRef<"staff", 'String'>
    readonly designation: FieldRef<"staff", 'String'>
  }
    

  // Custom InputTypes
  /**
   * staff findUnique
   */
  export type staffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findUniqueOrThrow
   */
  export type staffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff findFirst
   */
  export type staffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findFirstOrThrow
   */
  export type staffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staff.
     */
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff findMany
   */
  export type staffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter, which staff to fetch.
     */
    where?: staffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staff to fetch.
     */
    orderBy?: staffOrderByWithRelationInput | staffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staff.
     */
    cursor?: staffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staff from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staff.
     */
    skip?: number
    distinct?: StaffScalarFieldEnum | StaffScalarFieldEnum[]
  }

  /**
   * staff create
   */
  export type staffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to create a staff.
     */
    data: XOR<staffCreateInput, staffUncheckedCreateInput>
  }

  /**
   * staff createMany
   */
  export type staffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staff createManyAndReturn
   */
  export type staffCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * The data used to create many staff.
     */
    data: staffCreateManyInput | staffCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * staff update
   */
  export type staffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The data needed to update a staff.
     */
    data: XOR<staffUpdateInput, staffUncheckedUpdateInput>
    /**
     * Choose, which staff to update.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff updateMany
   */
  export type staffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
  }

  /**
   * staff updateManyAndReturn
   */
  export type staffUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * The data used to update staff.
     */
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyInput>
    /**
     * Filter which staff to update
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * staff upsert
   */
  export type staffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * The filter to search for the staff to update in case it exists.
     */
    where: staffWhereUniqueInput
    /**
     * In case the staff found by the `where` argument doesn't exist, create a new staff with this data.
     */
    create: XOR<staffCreateInput, staffUncheckedCreateInput>
    /**
     * In case the staff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffUpdateInput, staffUncheckedUpdateInput>
  }

  /**
   * staff delete
   */
  export type staffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    /**
     * Filter which staff to delete.
     */
    where: staffWhereUniqueInput
  }

  /**
   * staff deleteMany
   */
  export type staffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staff to delete
     */
    where?: staffWhereInput
    /**
     * Limit how many staff to delete.
     */
    limit?: number
  }

  /**
   * staff.departmentHodToStaff
   */
  export type staff$departmentHodToStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the department
     */
    select?: departmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the department
     */
    omit?: departmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: departmentInclude<ExtArgs> | null
    where?: departmentWhereInput
    orderBy?: departmentOrderByWithRelationInput | departmentOrderByWithRelationInput[]
    cursor?: departmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * staff.staffDependent
   */
  export type staff$staffDependentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentInclude<ExtArgs> | null
    where?: staffDependentWhereInput
    orderBy?: staffDependentOrderByWithRelationInput | staffDependentOrderByWithRelationInput[]
    cursor?: staffDependentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffDependentScalarFieldEnum | StaffDependentScalarFieldEnum[]
  }

  /**
   * staff.module
   */
  export type staff$moduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    where?: moduleWhereInput
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    cursor?: moduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * staff without action
   */
  export type staffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
  }


  /**
   * Model staffBackup
   */

  export type AggregateStaffBackup = {
    _count: StaffBackupCountAggregateOutputType | null
    _avg: StaffBackupAvgAggregateOutputType | null
    _sum: StaffBackupSumAggregateOutputType | null
    _min: StaffBackupMinAggregateOutputType | null
    _max: StaffBackupMaxAggregateOutputType | null
  }

  export type StaffBackupAvgAggregateOutputType = {
    pay: Decimal | null
    allowance: Decimal | null
    hourlyRate: Decimal | null
    joinYr: number | null
  }

  export type StaffBackupSumAggregateOutputType = {
    pay: Decimal | null
    allowance: Decimal | null
    hourlyRate: Decimal | null
    joinYr: number | null
  }

  export type StaffBackupMinAggregateOutputType = {
    staffNo: string | null
    staffName: string | null
    supervisor: string | null
    dob: Date | null
    grade: string | null
    maritalStatus: string | null
    pay: Decimal | null
    allowance: Decimal | null
    hourlyRate: Decimal | null
    gender: string | null
    citizenship: string | null
    joinYr: number | null
    deptCode: string | null
    typeOfEmployment: string | null
    highestQln: string | null
    designation: string | null
  }

  export type StaffBackupMaxAggregateOutputType = {
    staffNo: string | null
    staffName: string | null
    supervisor: string | null
    dob: Date | null
    grade: string | null
    maritalStatus: string | null
    pay: Decimal | null
    allowance: Decimal | null
    hourlyRate: Decimal | null
    gender: string | null
    citizenship: string | null
    joinYr: number | null
    deptCode: string | null
    typeOfEmployment: string | null
    highestQln: string | null
    designation: string | null
  }

  export type StaffBackupCountAggregateOutputType = {
    staffNo: number
    staffName: number
    supervisor: number
    dob: number
    grade: number
    maritalStatus: number
    pay: number
    allowance: number
    hourlyRate: number
    gender: number
    citizenship: number
    joinYr: number
    deptCode: number
    typeOfEmployment: number
    highestQln: number
    designation: number
    _all: number
  }


  export type StaffBackupAvgAggregateInputType = {
    pay?: true
    allowance?: true
    hourlyRate?: true
    joinYr?: true
  }

  export type StaffBackupSumAggregateInputType = {
    pay?: true
    allowance?: true
    hourlyRate?: true
    joinYr?: true
  }

  export type StaffBackupMinAggregateInputType = {
    staffNo?: true
    staffName?: true
    supervisor?: true
    dob?: true
    grade?: true
    maritalStatus?: true
    pay?: true
    allowance?: true
    hourlyRate?: true
    gender?: true
    citizenship?: true
    joinYr?: true
    deptCode?: true
    typeOfEmployment?: true
    highestQln?: true
    designation?: true
  }

  export type StaffBackupMaxAggregateInputType = {
    staffNo?: true
    staffName?: true
    supervisor?: true
    dob?: true
    grade?: true
    maritalStatus?: true
    pay?: true
    allowance?: true
    hourlyRate?: true
    gender?: true
    citizenship?: true
    joinYr?: true
    deptCode?: true
    typeOfEmployment?: true
    highestQln?: true
    designation?: true
  }

  export type StaffBackupCountAggregateInputType = {
    staffNo?: true
    staffName?: true
    supervisor?: true
    dob?: true
    grade?: true
    maritalStatus?: true
    pay?: true
    allowance?: true
    hourlyRate?: true
    gender?: true
    citizenship?: true
    joinYr?: true
    deptCode?: true
    typeOfEmployment?: true
    highestQln?: true
    designation?: true
    _all?: true
  }

  export type StaffBackupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staffBackup to aggregate.
     */
    where?: staffBackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffBackups to fetch.
     */
    orderBy?: staffBackupOrderByWithRelationInput | staffBackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffBackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffBackups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffBackups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staffBackups
    **/
    _count?: true | StaffBackupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffBackupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffBackupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffBackupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffBackupMaxAggregateInputType
  }

  export type GetStaffBackupAggregateType<T extends StaffBackupAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffBackup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffBackup[P]>
      : GetScalarType<T[P], AggregateStaffBackup[P]>
  }




  export type staffBackupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffBackupWhereInput
    orderBy?: staffBackupOrderByWithAggregationInput | staffBackupOrderByWithAggregationInput[]
    by: StaffBackupScalarFieldEnum[] | StaffBackupScalarFieldEnum
    having?: staffBackupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffBackupCountAggregateInputType | true
    _avg?: StaffBackupAvgAggregateInputType
    _sum?: StaffBackupSumAggregateInputType
    _min?: StaffBackupMinAggregateInputType
    _max?: StaffBackupMaxAggregateInputType
  }

  export type StaffBackupGroupByOutputType = {
    staffNo: string
    staffName: string
    supervisor: string | null
    dob: Date
    grade: string
    maritalStatus: string
    pay: Decimal | null
    allowance: Decimal | null
    hourlyRate: Decimal | null
    gender: string
    citizenship: string
    joinYr: number
    deptCode: string
    typeOfEmployment: string
    highestQln: string
    designation: string
    _count: StaffBackupCountAggregateOutputType | null
    _avg: StaffBackupAvgAggregateOutputType | null
    _sum: StaffBackupSumAggregateOutputType | null
    _min: StaffBackupMinAggregateOutputType | null
    _max: StaffBackupMaxAggregateOutputType | null
  }

  type GetStaffBackupGroupByPayload<T extends staffBackupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffBackupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffBackupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffBackupGroupByOutputType[P]>
            : GetScalarType<T[P], StaffBackupGroupByOutputType[P]>
        }
      >
    >


  export type staffBackupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffNo?: boolean
    staffName?: boolean
    supervisor?: boolean
    dob?: boolean
    grade?: boolean
    maritalStatus?: boolean
    pay?: boolean
    allowance?: boolean
    hourlyRate?: boolean
    gender?: boolean
    citizenship?: boolean
    joinYr?: boolean
    deptCode?: boolean
    typeOfEmployment?: boolean
    highestQln?: boolean
    designation?: boolean
  }, ExtArgs["result"]["staffBackup"]>

  export type staffBackupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffNo?: boolean
    staffName?: boolean
    supervisor?: boolean
    dob?: boolean
    grade?: boolean
    maritalStatus?: boolean
    pay?: boolean
    allowance?: boolean
    hourlyRate?: boolean
    gender?: boolean
    citizenship?: boolean
    joinYr?: boolean
    deptCode?: boolean
    typeOfEmployment?: boolean
    highestQln?: boolean
    designation?: boolean
  }, ExtArgs["result"]["staffBackup"]>

  export type staffBackupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffNo?: boolean
    staffName?: boolean
    supervisor?: boolean
    dob?: boolean
    grade?: boolean
    maritalStatus?: boolean
    pay?: boolean
    allowance?: boolean
    hourlyRate?: boolean
    gender?: boolean
    citizenship?: boolean
    joinYr?: boolean
    deptCode?: boolean
    typeOfEmployment?: boolean
    highestQln?: boolean
    designation?: boolean
  }, ExtArgs["result"]["staffBackup"]>

  export type staffBackupSelectScalar = {
    staffNo?: boolean
    staffName?: boolean
    supervisor?: boolean
    dob?: boolean
    grade?: boolean
    maritalStatus?: boolean
    pay?: boolean
    allowance?: boolean
    hourlyRate?: boolean
    gender?: boolean
    citizenship?: boolean
    joinYr?: boolean
    deptCode?: boolean
    typeOfEmployment?: boolean
    highestQln?: boolean
    designation?: boolean
  }

  export type staffBackupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"staffNo" | "staffName" | "supervisor" | "dob" | "grade" | "maritalStatus" | "pay" | "allowance" | "hourlyRate" | "gender" | "citizenship" | "joinYr" | "deptCode" | "typeOfEmployment" | "highestQln" | "designation", ExtArgs["result"]["staffBackup"]>

  export type $staffBackupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staffBackup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      staffNo: string
      staffName: string
      supervisor: string | null
      dob: Date
      grade: string
      maritalStatus: string
      pay: Prisma.Decimal | null
      allowance: Prisma.Decimal | null
      hourlyRate: Prisma.Decimal | null
      gender: string
      citizenship: string
      joinYr: number
      deptCode: string
      typeOfEmployment: string
      highestQln: string
      designation: string
    }, ExtArgs["result"]["staffBackup"]>
    composites: {}
  }

  type staffBackupGetPayload<S extends boolean | null | undefined | staffBackupDefaultArgs> = $Result.GetResult<Prisma.$staffBackupPayload, S>

  type staffBackupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staffBackupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffBackupCountAggregateInputType | true
    }

  export interface staffBackupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staffBackup'], meta: { name: 'staffBackup' } }
    /**
     * Find zero or one StaffBackup that matches the filter.
     * @param {staffBackupFindUniqueArgs} args - Arguments to find a StaffBackup
     * @example
     * // Get one StaffBackup
     * const staffBackup = await prisma.staffBackup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staffBackupFindUniqueArgs>(args: SelectSubset<T, staffBackupFindUniqueArgs<ExtArgs>>): Prisma__staffBackupClient<$Result.GetResult<Prisma.$staffBackupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffBackup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staffBackupFindUniqueOrThrowArgs} args - Arguments to find a StaffBackup
     * @example
     * // Get one StaffBackup
     * const staffBackup = await prisma.staffBackup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staffBackupFindUniqueOrThrowArgs>(args: SelectSubset<T, staffBackupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staffBackupClient<$Result.GetResult<Prisma.$staffBackupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffBackup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffBackupFindFirstArgs} args - Arguments to find a StaffBackup
     * @example
     * // Get one StaffBackup
     * const staffBackup = await prisma.staffBackup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staffBackupFindFirstArgs>(args?: SelectSubset<T, staffBackupFindFirstArgs<ExtArgs>>): Prisma__staffBackupClient<$Result.GetResult<Prisma.$staffBackupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffBackup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffBackupFindFirstOrThrowArgs} args - Arguments to find a StaffBackup
     * @example
     * // Get one StaffBackup
     * const staffBackup = await prisma.staffBackup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staffBackupFindFirstOrThrowArgs>(args?: SelectSubset<T, staffBackupFindFirstOrThrowArgs<ExtArgs>>): Prisma__staffBackupClient<$Result.GetResult<Prisma.$staffBackupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffBackups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffBackupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffBackups
     * const staffBackups = await prisma.staffBackup.findMany()
     * 
     * // Get first 10 StaffBackups
     * const staffBackups = await prisma.staffBackup.findMany({ take: 10 })
     * 
     * // Only select the `staffNo`
     * const staffBackupWithStaffNoOnly = await prisma.staffBackup.findMany({ select: { staffNo: true } })
     * 
     */
    findMany<T extends staffBackupFindManyArgs>(args?: SelectSubset<T, staffBackupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffBackupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffBackup.
     * @param {staffBackupCreateArgs} args - Arguments to create a StaffBackup.
     * @example
     * // Create one StaffBackup
     * const StaffBackup = await prisma.staffBackup.create({
     *   data: {
     *     // ... data to create a StaffBackup
     *   }
     * })
     * 
     */
    create<T extends staffBackupCreateArgs>(args: SelectSubset<T, staffBackupCreateArgs<ExtArgs>>): Prisma__staffBackupClient<$Result.GetResult<Prisma.$staffBackupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffBackups.
     * @param {staffBackupCreateManyArgs} args - Arguments to create many StaffBackups.
     * @example
     * // Create many StaffBackups
     * const staffBackup = await prisma.staffBackup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staffBackupCreateManyArgs>(args?: SelectSubset<T, staffBackupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffBackups and returns the data saved in the database.
     * @param {staffBackupCreateManyAndReturnArgs} args - Arguments to create many StaffBackups.
     * @example
     * // Create many StaffBackups
     * const staffBackup = await prisma.staffBackup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffBackups and only return the `staffNo`
     * const staffBackupWithStaffNoOnly = await prisma.staffBackup.createManyAndReturn({
     *   select: { staffNo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends staffBackupCreateManyAndReturnArgs>(args?: SelectSubset<T, staffBackupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffBackupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffBackup.
     * @param {staffBackupDeleteArgs} args - Arguments to delete one StaffBackup.
     * @example
     * // Delete one StaffBackup
     * const StaffBackup = await prisma.staffBackup.delete({
     *   where: {
     *     // ... filter to delete one StaffBackup
     *   }
     * })
     * 
     */
    delete<T extends staffBackupDeleteArgs>(args: SelectSubset<T, staffBackupDeleteArgs<ExtArgs>>): Prisma__staffBackupClient<$Result.GetResult<Prisma.$staffBackupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffBackup.
     * @param {staffBackupUpdateArgs} args - Arguments to update one StaffBackup.
     * @example
     * // Update one StaffBackup
     * const staffBackup = await prisma.staffBackup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staffBackupUpdateArgs>(args: SelectSubset<T, staffBackupUpdateArgs<ExtArgs>>): Prisma__staffBackupClient<$Result.GetResult<Prisma.$staffBackupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffBackups.
     * @param {staffBackupDeleteManyArgs} args - Arguments to filter StaffBackups to delete.
     * @example
     * // Delete a few StaffBackups
     * const { count } = await prisma.staffBackup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staffBackupDeleteManyArgs>(args?: SelectSubset<T, staffBackupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffBackups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffBackupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffBackups
     * const staffBackup = await prisma.staffBackup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staffBackupUpdateManyArgs>(args: SelectSubset<T, staffBackupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffBackups and returns the data updated in the database.
     * @param {staffBackupUpdateManyAndReturnArgs} args - Arguments to update many StaffBackups.
     * @example
     * // Update many StaffBackups
     * const staffBackup = await prisma.staffBackup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffBackups and only return the `staffNo`
     * const staffBackupWithStaffNoOnly = await prisma.staffBackup.updateManyAndReturn({
     *   select: { staffNo: true },
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
    updateManyAndReturn<T extends staffBackupUpdateManyAndReturnArgs>(args: SelectSubset<T, staffBackupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffBackupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffBackup.
     * @param {staffBackupUpsertArgs} args - Arguments to update or create a StaffBackup.
     * @example
     * // Update or create a StaffBackup
     * const staffBackup = await prisma.staffBackup.upsert({
     *   create: {
     *     // ... data to create a StaffBackup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffBackup we want to update
     *   }
     * })
     */
    upsert<T extends staffBackupUpsertArgs>(args: SelectSubset<T, staffBackupUpsertArgs<ExtArgs>>): Prisma__staffBackupClient<$Result.GetResult<Prisma.$staffBackupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffBackups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffBackupCountArgs} args - Arguments to filter StaffBackups to count.
     * @example
     * // Count the number of StaffBackups
     * const count = await prisma.staffBackup.count({
     *   where: {
     *     // ... the filter for the StaffBackups we want to count
     *   }
     * })
    **/
    count<T extends staffBackupCountArgs>(
      args?: Subset<T, staffBackupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffBackupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffBackup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffBackupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffBackupAggregateArgs>(args: Subset<T, StaffBackupAggregateArgs>): Prisma.PrismaPromise<GetStaffBackupAggregateType<T>>

    /**
     * Group by StaffBackup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffBackupGroupByArgs} args - Group by arguments.
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
      T extends staffBackupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffBackupGroupByArgs['orderBy'] }
        : { orderBy?: staffBackupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, staffBackupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffBackupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staffBackup model
   */
  readonly fields: staffBackupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staffBackup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffBackupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the staffBackup model
   */
  interface staffBackupFieldRefs {
    readonly staffNo: FieldRef<"staffBackup", 'String'>
    readonly staffName: FieldRef<"staffBackup", 'String'>
    readonly supervisor: FieldRef<"staffBackup", 'String'>
    readonly dob: FieldRef<"staffBackup", 'DateTime'>
    readonly grade: FieldRef<"staffBackup", 'String'>
    readonly maritalStatus: FieldRef<"staffBackup", 'String'>
    readonly pay: FieldRef<"staffBackup", 'Decimal'>
    readonly allowance: FieldRef<"staffBackup", 'Decimal'>
    readonly hourlyRate: FieldRef<"staffBackup", 'Decimal'>
    readonly gender: FieldRef<"staffBackup", 'String'>
    readonly citizenship: FieldRef<"staffBackup", 'String'>
    readonly joinYr: FieldRef<"staffBackup", 'Int'>
    readonly deptCode: FieldRef<"staffBackup", 'String'>
    readonly typeOfEmployment: FieldRef<"staffBackup", 'String'>
    readonly highestQln: FieldRef<"staffBackup", 'String'>
    readonly designation: FieldRef<"staffBackup", 'String'>
  }
    

  // Custom InputTypes
  /**
   * staffBackup findUnique
   */
  export type staffBackupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
    /**
     * Filter, which staffBackup to fetch.
     */
    where: staffBackupWhereUniqueInput
  }

  /**
   * staffBackup findUniqueOrThrow
   */
  export type staffBackupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
    /**
     * Filter, which staffBackup to fetch.
     */
    where: staffBackupWhereUniqueInput
  }

  /**
   * staffBackup findFirst
   */
  export type staffBackupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
    /**
     * Filter, which staffBackup to fetch.
     */
    where?: staffBackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffBackups to fetch.
     */
    orderBy?: staffBackupOrderByWithRelationInput | staffBackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staffBackups.
     */
    cursor?: staffBackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffBackups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffBackups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staffBackups.
     */
    distinct?: StaffBackupScalarFieldEnum | StaffBackupScalarFieldEnum[]
  }

  /**
   * staffBackup findFirstOrThrow
   */
  export type staffBackupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
    /**
     * Filter, which staffBackup to fetch.
     */
    where?: staffBackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffBackups to fetch.
     */
    orderBy?: staffBackupOrderByWithRelationInput | staffBackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staffBackups.
     */
    cursor?: staffBackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffBackups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffBackups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staffBackups.
     */
    distinct?: StaffBackupScalarFieldEnum | StaffBackupScalarFieldEnum[]
  }

  /**
   * staffBackup findMany
   */
  export type staffBackupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
    /**
     * Filter, which staffBackups to fetch.
     */
    where?: staffBackupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffBackups to fetch.
     */
    orderBy?: staffBackupOrderByWithRelationInput | staffBackupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staffBackups.
     */
    cursor?: staffBackupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffBackups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffBackups.
     */
    skip?: number
    distinct?: StaffBackupScalarFieldEnum | StaffBackupScalarFieldEnum[]
  }

  /**
   * staffBackup create
   */
  export type staffBackupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
    /**
     * The data needed to create a staffBackup.
     */
    data: XOR<staffBackupCreateInput, staffBackupUncheckedCreateInput>
  }

  /**
   * staffBackup createMany
   */
  export type staffBackupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staffBackups.
     */
    data: staffBackupCreateManyInput | staffBackupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staffBackup createManyAndReturn
   */
  export type staffBackupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
    /**
     * The data used to create many staffBackups.
     */
    data: staffBackupCreateManyInput | staffBackupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staffBackup update
   */
  export type staffBackupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
    /**
     * The data needed to update a staffBackup.
     */
    data: XOR<staffBackupUpdateInput, staffBackupUncheckedUpdateInput>
    /**
     * Choose, which staffBackup to update.
     */
    where: staffBackupWhereUniqueInput
  }

  /**
   * staffBackup updateMany
   */
  export type staffBackupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staffBackups.
     */
    data: XOR<staffBackupUpdateManyMutationInput, staffBackupUncheckedUpdateManyInput>
    /**
     * Filter which staffBackups to update
     */
    where?: staffBackupWhereInput
    /**
     * Limit how many staffBackups to update.
     */
    limit?: number
  }

  /**
   * staffBackup updateManyAndReturn
   */
  export type staffBackupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
    /**
     * The data used to update staffBackups.
     */
    data: XOR<staffBackupUpdateManyMutationInput, staffBackupUncheckedUpdateManyInput>
    /**
     * Filter which staffBackups to update
     */
    where?: staffBackupWhereInput
    /**
     * Limit how many staffBackups to update.
     */
    limit?: number
  }

  /**
   * staffBackup upsert
   */
  export type staffBackupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
    /**
     * The filter to search for the staffBackup to update in case it exists.
     */
    where: staffBackupWhereUniqueInput
    /**
     * In case the staffBackup found by the `where` argument doesn't exist, create a new staffBackup with this data.
     */
    create: XOR<staffBackupCreateInput, staffBackupUncheckedCreateInput>
    /**
     * In case the staffBackup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffBackupUpdateInput, staffBackupUncheckedUpdateInput>
  }

  /**
   * staffBackup delete
   */
  export type staffBackupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
    /**
     * Filter which staffBackup to delete.
     */
    where: staffBackupWhereUniqueInput
  }

  /**
   * staffBackup deleteMany
   */
  export type staffBackupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staffBackups to delete
     */
    where?: staffBackupWhereInput
    /**
     * Limit how many staffBackups to delete.
     */
    limit?: number
  }

  /**
   * staffBackup without action
   */
  export type staffBackupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffBackup
     */
    select?: staffBackupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffBackup
     */
    omit?: staffBackupOmit<ExtArgs> | null
  }


  /**
   * Model userAccount
   */

  export type AggregateUserAccount = {
    _count: UserAccountCountAggregateOutputType | null
    _avg: UserAccountAvgAggregateOutputType | null
    _sum: UserAccountSumAggregateOutputType | null
    _min: UserAccountMinAggregateOutputType | null
    _max: UserAccountMaxAggregateOutputType | null
  }

  export type UserAccountAvgAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type UserAccountSumAggregateOutputType = {
    id: number | null
    role: number | null
  }

  export type UserAccountMinAggregateOutputType = {
    id: number | null
    accountNo: string | null
    role: number | null
    password: string | null
  }

  export type UserAccountMaxAggregateOutputType = {
    id: number | null
    accountNo: string | null
    role: number | null
    password: string | null
  }

  export type UserAccountCountAggregateOutputType = {
    id: number
    accountNo: number
    role: number
    password: number
    _all: number
  }


  export type UserAccountAvgAggregateInputType = {
    id?: true
    role?: true
  }

  export type UserAccountSumAggregateInputType = {
    id?: true
    role?: true
  }

  export type UserAccountMinAggregateInputType = {
    id?: true
    accountNo?: true
    role?: true
    password?: true
  }

  export type UserAccountMaxAggregateInputType = {
    id?: true
    accountNo?: true
    role?: true
    password?: true
  }

  export type UserAccountCountAggregateInputType = {
    id?: true
    accountNo?: true
    role?: true
    password?: true
    _all?: true
  }

  export type UserAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userAccount to aggregate.
     */
    where?: userAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userAccounts to fetch.
     */
    orderBy?: userAccountOrderByWithRelationInput | userAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userAccounts
    **/
    _count?: true | UserAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAccountMaxAggregateInputType
  }

  export type GetUserAccountAggregateType<T extends UserAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAccount[P]>
      : GetScalarType<T[P], AggregateUserAccount[P]>
  }




  export type userAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userAccountWhereInput
    orderBy?: userAccountOrderByWithAggregationInput | userAccountOrderByWithAggregationInput[]
    by: UserAccountScalarFieldEnum[] | UserAccountScalarFieldEnum
    having?: userAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAccountCountAggregateInputType | true
    _avg?: UserAccountAvgAggregateInputType
    _sum?: UserAccountSumAggregateInputType
    _min?: UserAccountMinAggregateInputType
    _max?: UserAccountMaxAggregateInputType
  }

  export type UserAccountGroupByOutputType = {
    id: number
    accountNo: string
    role: number
    password: string
    _count: UserAccountCountAggregateOutputType | null
    _avg: UserAccountAvgAggregateOutputType | null
    _sum: UserAccountSumAggregateOutputType | null
    _min: UserAccountMinAggregateOutputType | null
    _max: UserAccountMaxAggregateOutputType | null
  }

  type GetUserAccountGroupByPayload<T extends userAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAccountGroupByOutputType[P]>
            : GetScalarType<T[P], UserAccountGroupByOutputType[P]>
        }
      >
    >


  export type userAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountNo?: boolean
    role?: boolean
    password?: boolean
  }, ExtArgs["result"]["userAccount"]>

  export type userAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountNo?: boolean
    role?: boolean
    password?: boolean
  }, ExtArgs["result"]["userAccount"]>

  export type userAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountNo?: boolean
    role?: boolean
    password?: boolean
  }, ExtArgs["result"]["userAccount"]>

  export type userAccountSelectScalar = {
    id?: boolean
    accountNo?: boolean
    role?: boolean
    password?: boolean
  }

  export type userAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountNo" | "role" | "password", ExtArgs["result"]["userAccount"]>

  export type $userAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userAccount"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      accountNo: string
      role: number
      password: string
    }, ExtArgs["result"]["userAccount"]>
    composites: {}
  }

  type userAccountGetPayload<S extends boolean | null | undefined | userAccountDefaultArgs> = $Result.GetResult<Prisma.$userAccountPayload, S>

  type userAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAccountCountAggregateInputType | true
    }

  export interface userAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userAccount'], meta: { name: 'userAccount' } }
    /**
     * Find zero or one UserAccount that matches the filter.
     * @param {userAccountFindUniqueArgs} args - Arguments to find a UserAccount
     * @example
     * // Get one UserAccount
     * const userAccount = await prisma.userAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userAccountFindUniqueArgs>(args: SelectSubset<T, userAccountFindUniqueArgs<ExtArgs>>): Prisma__userAccountClient<$Result.GetResult<Prisma.$userAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userAccountFindUniqueOrThrowArgs} args - Arguments to find a UserAccount
     * @example
     * // Get one UserAccount
     * const userAccount = await prisma.userAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, userAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userAccountClient<$Result.GetResult<Prisma.$userAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAccountFindFirstArgs} args - Arguments to find a UserAccount
     * @example
     * // Get one UserAccount
     * const userAccount = await prisma.userAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userAccountFindFirstArgs>(args?: SelectSubset<T, userAccountFindFirstArgs<ExtArgs>>): Prisma__userAccountClient<$Result.GetResult<Prisma.$userAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAccountFindFirstOrThrowArgs} args - Arguments to find a UserAccount
     * @example
     * // Get one UserAccount
     * const userAccount = await prisma.userAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, userAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__userAccountClient<$Result.GetResult<Prisma.$userAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAccounts
     * const userAccounts = await prisma.userAccount.findMany()
     * 
     * // Get first 10 UserAccounts
     * const userAccounts = await prisma.userAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAccountWithIdOnly = await prisma.userAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userAccountFindManyArgs>(args?: SelectSubset<T, userAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAccount.
     * @param {userAccountCreateArgs} args - Arguments to create a UserAccount.
     * @example
     * // Create one UserAccount
     * const UserAccount = await prisma.userAccount.create({
     *   data: {
     *     // ... data to create a UserAccount
     *   }
     * })
     * 
     */
    create<T extends userAccountCreateArgs>(args: SelectSubset<T, userAccountCreateArgs<ExtArgs>>): Prisma__userAccountClient<$Result.GetResult<Prisma.$userAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAccounts.
     * @param {userAccountCreateManyArgs} args - Arguments to create many UserAccounts.
     * @example
     * // Create many UserAccounts
     * const userAccount = await prisma.userAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userAccountCreateManyArgs>(args?: SelectSubset<T, userAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAccounts and returns the data saved in the database.
     * @param {userAccountCreateManyAndReturnArgs} args - Arguments to create many UserAccounts.
     * @example
     * // Create many UserAccounts
     * const userAccount = await prisma.userAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAccounts and only return the `id`
     * const userAccountWithIdOnly = await prisma.userAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, userAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAccount.
     * @param {userAccountDeleteArgs} args - Arguments to delete one UserAccount.
     * @example
     * // Delete one UserAccount
     * const UserAccount = await prisma.userAccount.delete({
     *   where: {
     *     // ... filter to delete one UserAccount
     *   }
     * })
     * 
     */
    delete<T extends userAccountDeleteArgs>(args: SelectSubset<T, userAccountDeleteArgs<ExtArgs>>): Prisma__userAccountClient<$Result.GetResult<Prisma.$userAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAccount.
     * @param {userAccountUpdateArgs} args - Arguments to update one UserAccount.
     * @example
     * // Update one UserAccount
     * const userAccount = await prisma.userAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userAccountUpdateArgs>(args: SelectSubset<T, userAccountUpdateArgs<ExtArgs>>): Prisma__userAccountClient<$Result.GetResult<Prisma.$userAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAccounts.
     * @param {userAccountDeleteManyArgs} args - Arguments to filter UserAccounts to delete.
     * @example
     * // Delete a few UserAccounts
     * const { count } = await prisma.userAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userAccountDeleteManyArgs>(args?: SelectSubset<T, userAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAccounts
     * const userAccount = await prisma.userAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userAccountUpdateManyArgs>(args: SelectSubset<T, userAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAccounts and returns the data updated in the database.
     * @param {userAccountUpdateManyAndReturnArgs} args - Arguments to update many UserAccounts.
     * @example
     * // Update many UserAccounts
     * const userAccount = await prisma.userAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAccounts and only return the `id`
     * const userAccountWithIdOnly = await prisma.userAccount.updateManyAndReturn({
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
    updateManyAndReturn<T extends userAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, userAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAccount.
     * @param {userAccountUpsertArgs} args - Arguments to update or create a UserAccount.
     * @example
     * // Update or create a UserAccount
     * const userAccount = await prisma.userAccount.upsert({
     *   create: {
     *     // ... data to create a UserAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAccount we want to update
     *   }
     * })
     */
    upsert<T extends userAccountUpsertArgs>(args: SelectSubset<T, userAccountUpsertArgs<ExtArgs>>): Prisma__userAccountClient<$Result.GetResult<Prisma.$userAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAccountCountArgs} args - Arguments to filter UserAccounts to count.
     * @example
     * // Count the number of UserAccounts
     * const count = await prisma.userAccount.count({
     *   where: {
     *     // ... the filter for the UserAccounts we want to count
     *   }
     * })
    **/
    count<T extends userAccountCountArgs>(
      args?: Subset<T, userAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAccountAggregateArgs>(args: Subset<T, UserAccountAggregateArgs>): Prisma.PrismaPromise<GetUserAccountAggregateType<T>>

    /**
     * Group by UserAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userAccountGroupByArgs} args - Group by arguments.
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
      T extends userAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userAccountGroupByArgs['orderBy'] }
        : { orderBy?: userAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userAccount model
   */
  readonly fields: userAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the userAccount model
   */
  interface userAccountFieldRefs {
    readonly id: FieldRef<"userAccount", 'Int'>
    readonly accountNo: FieldRef<"userAccount", 'String'>
    readonly role: FieldRef<"userAccount", 'Int'>
    readonly password: FieldRef<"userAccount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * userAccount findUnique
   */
  export type userAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
    /**
     * Filter, which userAccount to fetch.
     */
    where: userAccountWhereUniqueInput
  }

  /**
   * userAccount findUniqueOrThrow
   */
  export type userAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
    /**
     * Filter, which userAccount to fetch.
     */
    where: userAccountWhereUniqueInput
  }

  /**
   * userAccount findFirst
   */
  export type userAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
    /**
     * Filter, which userAccount to fetch.
     */
    where?: userAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userAccounts to fetch.
     */
    orderBy?: userAccountOrderByWithRelationInput | userAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userAccounts.
     */
    cursor?: userAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userAccounts.
     */
    distinct?: UserAccountScalarFieldEnum | UserAccountScalarFieldEnum[]
  }

  /**
   * userAccount findFirstOrThrow
   */
  export type userAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
    /**
     * Filter, which userAccount to fetch.
     */
    where?: userAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userAccounts to fetch.
     */
    orderBy?: userAccountOrderByWithRelationInput | userAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userAccounts.
     */
    cursor?: userAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userAccounts.
     */
    distinct?: UserAccountScalarFieldEnum | UserAccountScalarFieldEnum[]
  }

  /**
   * userAccount findMany
   */
  export type userAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
    /**
     * Filter, which userAccounts to fetch.
     */
    where?: userAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userAccounts to fetch.
     */
    orderBy?: userAccountOrderByWithRelationInput | userAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userAccounts.
     */
    cursor?: userAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userAccounts.
     */
    skip?: number
    distinct?: UserAccountScalarFieldEnum | UserAccountScalarFieldEnum[]
  }

  /**
   * userAccount create
   */
  export type userAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
    /**
     * The data needed to create a userAccount.
     */
    data: XOR<userAccountCreateInput, userAccountUncheckedCreateInput>
  }

  /**
   * userAccount createMany
   */
  export type userAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userAccounts.
     */
    data: userAccountCreateManyInput | userAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userAccount createManyAndReturn
   */
  export type userAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
    /**
     * The data used to create many userAccounts.
     */
    data: userAccountCreateManyInput | userAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userAccount update
   */
  export type userAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
    /**
     * The data needed to update a userAccount.
     */
    data: XOR<userAccountUpdateInput, userAccountUncheckedUpdateInput>
    /**
     * Choose, which userAccount to update.
     */
    where: userAccountWhereUniqueInput
  }

  /**
   * userAccount updateMany
   */
  export type userAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userAccounts.
     */
    data: XOR<userAccountUpdateManyMutationInput, userAccountUncheckedUpdateManyInput>
    /**
     * Filter which userAccounts to update
     */
    where?: userAccountWhereInput
    /**
     * Limit how many userAccounts to update.
     */
    limit?: number
  }

  /**
   * userAccount updateManyAndReturn
   */
  export type userAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
    /**
     * The data used to update userAccounts.
     */
    data: XOR<userAccountUpdateManyMutationInput, userAccountUncheckedUpdateManyInput>
    /**
     * Filter which userAccounts to update
     */
    where?: userAccountWhereInput
    /**
     * Limit how many userAccounts to update.
     */
    limit?: number
  }

  /**
   * userAccount upsert
   */
  export type userAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
    /**
     * The filter to search for the userAccount to update in case it exists.
     */
    where: userAccountWhereUniqueInput
    /**
     * In case the userAccount found by the `where` argument doesn't exist, create a new userAccount with this data.
     */
    create: XOR<userAccountCreateInput, userAccountUncheckedCreateInput>
    /**
     * In case the userAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userAccountUpdateInput, userAccountUncheckedUpdateInput>
  }

  /**
   * userAccount delete
   */
  export type userAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
    /**
     * Filter which userAccount to delete.
     */
    where: userAccountWhereUniqueInput
  }

  /**
   * userAccount deleteMany
   */
  export type userAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userAccounts to delete
     */
    where?: userAccountWhereInput
    /**
     * Limit how many userAccounts to delete.
     */
    limit?: number
  }

  /**
   * userAccount without action
   */
  export type userAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userAccount
     */
    select?: userAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userAccount
     */
    omit?: userAccountOmit<ExtArgs> | null
  }


  /**
   * Model userRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    id: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    id: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    id?: true
  }

  export type UserRoleSumAggregateInputType = {
    id?: true
  }

  export type UserRoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userRole to aggregate.
     */
    where?: userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userRoles to fetch.
     */
    orderBy?: userRoleOrderByWithRelationInput | userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned userRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type userRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userRoleWhereInput
    orderBy?: userRoleOrderByWithAggregationInput | userRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: userRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: number
    name: string
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends userRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type userRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type userRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type userRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type userRoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type userRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["userRole"]>

  export type $userRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "userRole"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type userRoleGetPayload<S extends boolean | null | undefined | userRoleDefaultArgs> = $Result.GetResult<Prisma.$userRolePayload, S>

  type userRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface userRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['userRole'], meta: { name: 'userRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {userRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userRoleFindUniqueArgs>(args: SelectSubset<T, userRoleFindUniqueArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, userRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userRoleFindFirstArgs>(args?: SelectSubset<T, userRoleFindFirstArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, userRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userRoleFindManyArgs>(args?: SelectSubset<T, userRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {userRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends userRoleCreateArgs>(args: SelectSubset<T, userRoleCreateArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {userRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userRoleCreateManyArgs>(args?: SelectSubset<T, userRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {userRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, userRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {userRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends userRoleDeleteArgs>(args: SelectSubset<T, userRoleDeleteArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {userRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userRoleUpdateArgs>(args: SelectSubset<T, userRoleUpdateArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {userRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userRoleDeleteManyArgs>(args?: SelectSubset<T, userRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userRoleUpdateManyArgs>(args: SelectSubset<T, userRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {userRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.updateManyAndReturn({
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
    updateManyAndReturn<T extends userRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, userRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {userRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends userRoleUpsertArgs>(args: SelectSubset<T, userRoleUpsertArgs<ExtArgs>>): Prisma__userRoleClient<$Result.GetResult<Prisma.$userRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends userRoleCountArgs>(
      args?: Subset<T, userRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userRoleGroupByArgs} args - Group by arguments.
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
      T extends userRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userRoleGroupByArgs['orderBy'] }
        : { orderBy?: userRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the userRole model
   */
  readonly fields: userRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for userRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the userRole model
   */
  interface userRoleFieldRefs {
    readonly id: FieldRef<"userRole", 'Int'>
    readonly name: FieldRef<"userRole", 'String'>
  }
    

  // Custom InputTypes
  /**
   * userRole findUnique
   */
  export type userRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Filter, which userRole to fetch.
     */
    where: userRoleWhereUniqueInput
  }

  /**
   * userRole findUniqueOrThrow
   */
  export type userRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Filter, which userRole to fetch.
     */
    where: userRoleWhereUniqueInput
  }

  /**
   * userRole findFirst
   */
  export type userRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Filter, which userRole to fetch.
     */
    where?: userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userRoles to fetch.
     */
    orderBy?: userRoleOrderByWithRelationInput | userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userRoles.
     */
    cursor?: userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * userRole findFirstOrThrow
   */
  export type userRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Filter, which userRole to fetch.
     */
    where?: userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userRoles to fetch.
     */
    orderBy?: userRoleOrderByWithRelationInput | userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for userRoles.
     */
    cursor?: userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of userRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * userRole findMany
   */
  export type userRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Filter, which userRoles to fetch.
     */
    where?: userRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of userRoles to fetch.
     */
    orderBy?: userRoleOrderByWithRelationInput | userRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing userRoles.
     */
    cursor?: userRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` userRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` userRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * userRole create
   */
  export type userRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * The data needed to create a userRole.
     */
    data: XOR<userRoleCreateInput, userRoleUncheckedCreateInput>
  }

  /**
   * userRole createMany
   */
  export type userRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many userRoles.
     */
    data: userRoleCreateManyInput | userRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userRole createManyAndReturn
   */
  export type userRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * The data used to create many userRoles.
     */
    data: userRoleCreateManyInput | userRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * userRole update
   */
  export type userRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * The data needed to update a userRole.
     */
    data: XOR<userRoleUpdateInput, userRoleUncheckedUpdateInput>
    /**
     * Choose, which userRole to update.
     */
    where: userRoleWhereUniqueInput
  }

  /**
   * userRole updateMany
   */
  export type userRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update userRoles.
     */
    data: XOR<userRoleUpdateManyMutationInput, userRoleUncheckedUpdateManyInput>
    /**
     * Filter which userRoles to update
     */
    where?: userRoleWhereInput
    /**
     * Limit how many userRoles to update.
     */
    limit?: number
  }

  /**
   * userRole updateManyAndReturn
   */
  export type userRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * The data used to update userRoles.
     */
    data: XOR<userRoleUpdateManyMutationInput, userRoleUncheckedUpdateManyInput>
    /**
     * Filter which userRoles to update
     */
    where?: userRoleWhereInput
    /**
     * Limit how many userRoles to update.
     */
    limit?: number
  }

  /**
   * userRole upsert
   */
  export type userRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * The filter to search for the userRole to update in case it exists.
     */
    where: userRoleWhereUniqueInput
    /**
     * In case the userRole found by the `where` argument doesn't exist, create a new userRole with this data.
     */
    create: XOR<userRoleCreateInput, userRoleUncheckedCreateInput>
    /**
     * In case the userRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userRoleUpdateInput, userRoleUncheckedUpdateInput>
  }

  /**
   * userRole delete
   */
  export type userRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
    /**
     * Filter which userRole to delete.
     */
    where: userRoleWhereUniqueInput
  }

  /**
   * userRole deleteMany
   */
  export type userRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which userRoles to delete
     */
    where?: userRoleWhereInput
    /**
     * Limit how many userRoles to delete.
     */
    limit?: number
  }

  /**
   * userRole without action
   */
  export type userRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the userRole
     */
    select?: userRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the userRole
     */
    omit?: userRoleOmit<ExtArgs> | null
  }


  /**
   * Model module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    creditUnit: number | null
  }

  export type ModuleSumAggregateOutputType = {
    creditUnit: number | null
  }

  export type ModuleMinAggregateOutputType = {
    modCode: string | null
    modName: string | null
    creditUnit: number | null
    modCoord: string | null
  }

  export type ModuleMaxAggregateOutputType = {
    modCode: string | null
    modName: string | null
    creditUnit: number | null
    modCoord: string | null
  }

  export type ModuleCountAggregateOutputType = {
    modCode: number
    modName: number
    creditUnit: number
    modCoord: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    creditUnit?: true
  }

  export type ModuleSumAggregateInputType = {
    creditUnit?: true
  }

  export type ModuleMinAggregateInputType = {
    modCode?: true
    modName?: true
    creditUnit?: true
    modCoord?: true
  }

  export type ModuleMaxAggregateInputType = {
    modCode?: true
    modName?: true
    creditUnit?: true
    modCoord?: true
  }

  export type ModuleCountAggregateInputType = {
    modCode?: true
    modName?: true
    creditUnit?: true
    modCoord?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which module to aggregate.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type moduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: moduleWhereInput
    orderBy?: moduleOrderByWithAggregationInput | moduleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: moduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    modCode: string
    modName: string
    creditUnit: number
    modCoord: string | null
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends moduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type moduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    modCode?: boolean
    modName?: boolean
    creditUnit?: boolean
    modCoord?: boolean
    staff?: boolean | module$staffArgs<ExtArgs>
    preRequisiteModCodeToModule?: boolean | module$preRequisiteModCodeToModuleArgs<ExtArgs>
    preRequisiteRequisiteToModule?: boolean | module$preRequisiteRequisiteToModuleArgs<ExtArgs>
    studModPerformance?: boolean | module$studModPerformanceArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type moduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    modCode?: boolean
    modName?: boolean
    creditUnit?: boolean
    modCoord?: boolean
    staff?: boolean | module$staffArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type moduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    modCode?: boolean
    modName?: boolean
    creditUnit?: boolean
    modCoord?: boolean
    staff?: boolean | module$staffArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type moduleSelectScalar = {
    modCode?: boolean
    modName?: boolean
    creditUnit?: boolean
    modCoord?: boolean
  }

  export type moduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"modCode" | "modName" | "creditUnit" | "modCoord", ExtArgs["result"]["module"]>
  export type moduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | module$staffArgs<ExtArgs>
    preRequisiteModCodeToModule?: boolean | module$preRequisiteModCodeToModuleArgs<ExtArgs>
    preRequisiteRequisiteToModule?: boolean | module$preRequisiteRequisiteToModuleArgs<ExtArgs>
    studModPerformance?: boolean | module$studModPerformanceArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type moduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | module$staffArgs<ExtArgs>
  }
  export type moduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | module$staffArgs<ExtArgs>
  }

  export type $modulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "module"
    objects: {
      staff: Prisma.$staffPayload<ExtArgs> | null
      preRequisiteModCodeToModule: Prisma.$preRequisitePayload<ExtArgs>[]
      preRequisiteRequisiteToModule: Prisma.$preRequisitePayload<ExtArgs>[]
      studModPerformance: Prisma.$studModPerformancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      modCode: string
      modName: string
      creditUnit: number
      modCoord: string | null
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type moduleGetPayload<S extends boolean | null | undefined | moduleDefaultArgs> = $Result.GetResult<Prisma.$modulePayload, S>

  type moduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<moduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface moduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['module'], meta: { name: 'module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {moduleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends moduleFindUniqueArgs>(args: SelectSubset<T, moduleFindUniqueArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {moduleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends moduleFindUniqueOrThrowArgs>(args: SelectSubset<T, moduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends moduleFindFirstArgs>(args?: SelectSubset<T, moduleFindFirstArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends moduleFindFirstOrThrowArgs>(args?: SelectSubset<T, moduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `modCode`
     * const moduleWithModCodeOnly = await prisma.module.findMany({ select: { modCode: true } })
     * 
     */
    findMany<T extends moduleFindManyArgs>(args?: SelectSubset<T, moduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {moduleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends moduleCreateArgs>(args: SelectSubset<T, moduleCreateArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {moduleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends moduleCreateManyArgs>(args?: SelectSubset<T, moduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {moduleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `modCode`
     * const moduleWithModCodeOnly = await prisma.module.createManyAndReturn({
     *   select: { modCode: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends moduleCreateManyAndReturnArgs>(args?: SelectSubset<T, moduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {moduleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends moduleDeleteArgs>(args: SelectSubset<T, moduleDeleteArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {moduleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends moduleUpdateArgs>(args: SelectSubset<T, moduleUpdateArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {moduleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends moduleDeleteManyArgs>(args?: SelectSubset<T, moduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends moduleUpdateManyArgs>(args: SelectSubset<T, moduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {moduleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `modCode`
     * const moduleWithModCodeOnly = await prisma.module.updateManyAndReturn({
     *   select: { modCode: true },
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
    updateManyAndReturn<T extends moduleUpdateManyAndReturnArgs>(args: SelectSubset<T, moduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {moduleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends moduleUpsertArgs>(args: SelectSubset<T, moduleUpsertArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends moduleCountArgs>(
      args?: Subset<T, moduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {moduleGroupByArgs} args - Group by arguments.
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
      T extends moduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: moduleGroupByArgs['orderBy'] }
        : { orderBy?: moduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, moduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the module model
   */
  readonly fields: moduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__moduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends module$staffArgs<ExtArgs> = {}>(args?: Subset<T, module$staffArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    preRequisiteModCodeToModule<T extends module$preRequisiteModCodeToModuleArgs<ExtArgs> = {}>(args?: Subset<T, module$preRequisiteModCodeToModuleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preRequisiteRequisiteToModule<T extends module$preRequisiteRequisiteToModuleArgs<ExtArgs> = {}>(args?: Subset<T, module$preRequisiteRequisiteToModuleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studModPerformance<T extends module$studModPerformanceArgs<ExtArgs> = {}>(args?: Subset<T, module$studModPerformanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the module model
   */
  interface moduleFieldRefs {
    readonly modCode: FieldRef<"module", 'String'>
    readonly modName: FieldRef<"module", 'String'>
    readonly creditUnit: FieldRef<"module", 'Int'>
    readonly modCoord: FieldRef<"module", 'String'>
  }
    

  // Custom InputTypes
  /**
   * module findUnique
   */
  export type moduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module findUniqueOrThrow
   */
  export type moduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module findFirst
   */
  export type moduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module findFirstOrThrow
   */
  export type moduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which module to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module findMany
   */
  export type moduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter, which modules to fetch.
     */
    where?: moduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of modules to fetch.
     */
    orderBy?: moduleOrderByWithRelationInput | moduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing modules.
     */
    cursor?: moduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * module create
   */
  export type moduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The data needed to create a module.
     */
    data: XOR<moduleCreateInput, moduleUncheckedCreateInput>
  }

  /**
   * module createMany
   */
  export type moduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many modules.
     */
    data: moduleCreateManyInput | moduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * module createManyAndReturn
   */
  export type moduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * The data used to create many modules.
     */
    data: moduleCreateManyInput | moduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * module update
   */
  export type moduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The data needed to update a module.
     */
    data: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>
    /**
     * Choose, which module to update.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module updateMany
   */
  export type moduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update modules.
     */
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyInput>
    /**
     * Filter which modules to update
     */
    where?: moduleWhereInput
    /**
     * Limit how many modules to update.
     */
    limit?: number
  }

  /**
   * module updateManyAndReturn
   */
  export type moduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * The data used to update modules.
     */
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyInput>
    /**
     * Filter which modules to update
     */
    where?: moduleWhereInput
    /**
     * Limit how many modules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * module upsert
   */
  export type moduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * The filter to search for the module to update in case it exists.
     */
    where: moduleWhereUniqueInput
    /**
     * In case the module found by the `where` argument doesn't exist, create a new module with this data.
     */
    create: XOR<moduleCreateInput, moduleUncheckedCreateInput>
    /**
     * In case the module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<moduleUpdateInput, moduleUncheckedUpdateInput>
  }

  /**
   * module delete
   */
  export type moduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
    /**
     * Filter which module to delete.
     */
    where: moduleWhereUniqueInput
  }

  /**
   * module deleteMany
   */
  export type moduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which modules to delete
     */
    where?: moduleWhereInput
    /**
     * Limit how many modules to delete.
     */
    limit?: number
  }

  /**
   * module.staff
   */
  export type module$staffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staff
     */
    select?: staffSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staff
     */
    omit?: staffOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffInclude<ExtArgs> | null
    where?: staffWhereInput
  }

  /**
   * module.preRequisiteModCodeToModule
   */
  export type module$preRequisiteModCodeToModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
    where?: preRequisiteWhereInput
    orderBy?: preRequisiteOrderByWithRelationInput | preRequisiteOrderByWithRelationInput[]
    cursor?: preRequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreRequisiteScalarFieldEnum | PreRequisiteScalarFieldEnum[]
  }

  /**
   * module.preRequisiteRequisiteToModule
   */
  export type module$preRequisiteRequisiteToModuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
    where?: preRequisiteWhereInput
    orderBy?: preRequisiteOrderByWithRelationInput | preRequisiteOrderByWithRelationInput[]
    cursor?: preRequisiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreRequisiteScalarFieldEnum | PreRequisiteScalarFieldEnum[]
  }

  /**
   * module.studModPerformance
   */
  export type module$studModPerformanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
    where?: studModPerformanceWhereInput
    orderBy?: studModPerformanceOrderByWithRelationInput | studModPerformanceOrderByWithRelationInput[]
    cursor?: studModPerformanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudModPerformanceScalarFieldEnum | StudModPerformanceScalarFieldEnum[]
  }

  /**
   * module without action
   */
  export type moduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the module
     */
    select?: moduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the module
     */
    omit?: moduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: moduleInclude<ExtArgs> | null
  }


  /**
   * Model staffDependent
   */

  export type AggregateStaffDependent = {
    _count: StaffDependentCountAggregateOutputType | null
    _min: StaffDependentMinAggregateOutputType | null
    _max: StaffDependentMaxAggregateOutputType | null
  }

  export type StaffDependentMinAggregateOutputType = {
    staffNo: string | null
    dependentName: string | null
    relationship: string | null
  }

  export type StaffDependentMaxAggregateOutputType = {
    staffNo: string | null
    dependentName: string | null
    relationship: string | null
  }

  export type StaffDependentCountAggregateOutputType = {
    staffNo: number
    dependentName: number
    relationship: number
    _all: number
  }


  export type StaffDependentMinAggregateInputType = {
    staffNo?: true
    dependentName?: true
    relationship?: true
  }

  export type StaffDependentMaxAggregateInputType = {
    staffNo?: true
    dependentName?: true
    relationship?: true
  }

  export type StaffDependentCountAggregateInputType = {
    staffNo?: true
    dependentName?: true
    relationship?: true
    _all?: true
  }

  export type StaffDependentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staffDependent to aggregate.
     */
    where?: staffDependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffDependents to fetch.
     */
    orderBy?: staffDependentOrderByWithRelationInput | staffDependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffDependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffDependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffDependents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staffDependents
    **/
    _count?: true | StaffDependentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffDependentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffDependentMaxAggregateInputType
  }

  export type GetStaffDependentAggregateType<T extends StaffDependentAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffDependent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffDependent[P]>
      : GetScalarType<T[P], AggregateStaffDependent[P]>
  }




  export type staffDependentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffDependentWhereInput
    orderBy?: staffDependentOrderByWithAggregationInput | staffDependentOrderByWithAggregationInput[]
    by: StaffDependentScalarFieldEnum[] | StaffDependentScalarFieldEnum
    having?: staffDependentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffDependentCountAggregateInputType | true
    _min?: StaffDependentMinAggregateInputType
    _max?: StaffDependentMaxAggregateInputType
  }

  export type StaffDependentGroupByOutputType = {
    staffNo: string
    dependentName: string
    relationship: string
    _count: StaffDependentCountAggregateOutputType | null
    _min: StaffDependentMinAggregateOutputType | null
    _max: StaffDependentMaxAggregateOutputType | null
  }

  type GetStaffDependentGroupByPayload<T extends staffDependentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffDependentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffDependentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffDependentGroupByOutputType[P]>
            : GetScalarType<T[P], StaffDependentGroupByOutputType[P]>
        }
      >
    >


  export type staffDependentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffNo?: boolean
    dependentName?: boolean
    relationship?: boolean
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffDependent"]>

  export type staffDependentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffNo?: boolean
    dependentName?: boolean
    relationship?: boolean
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffDependent"]>

  export type staffDependentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staffNo?: boolean
    dependentName?: boolean
    relationship?: boolean
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffDependent"]>

  export type staffDependentSelectScalar = {
    staffNo?: boolean
    dependentName?: boolean
    relationship?: boolean
  }

  export type staffDependentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"staffNo" | "dependentName" | "relationship", ExtArgs["result"]["staffDependent"]>
  export type staffDependentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type staffDependentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }
  export type staffDependentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staff?: boolean | staffDefaultArgs<ExtArgs>
  }

  export type $staffDependentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staffDependent"
    objects: {
      staff: Prisma.$staffPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      staffNo: string
      dependentName: string
      relationship: string
    }, ExtArgs["result"]["staffDependent"]>
    composites: {}
  }

  type staffDependentGetPayload<S extends boolean | null | undefined | staffDependentDefaultArgs> = $Result.GetResult<Prisma.$staffDependentPayload, S>

  type staffDependentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staffDependentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffDependentCountAggregateInputType | true
    }

  export interface staffDependentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staffDependent'], meta: { name: 'staffDependent' } }
    /**
     * Find zero or one StaffDependent that matches the filter.
     * @param {staffDependentFindUniqueArgs} args - Arguments to find a StaffDependent
     * @example
     * // Get one StaffDependent
     * const staffDependent = await prisma.staffDependent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staffDependentFindUniqueArgs>(args: SelectSubset<T, staffDependentFindUniqueArgs<ExtArgs>>): Prisma__staffDependentClient<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaffDependent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staffDependentFindUniqueOrThrowArgs} args - Arguments to find a StaffDependent
     * @example
     * // Get one StaffDependent
     * const staffDependent = await prisma.staffDependent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staffDependentFindUniqueOrThrowArgs>(args: SelectSubset<T, staffDependentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staffDependentClient<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffDependent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffDependentFindFirstArgs} args - Arguments to find a StaffDependent
     * @example
     * // Get one StaffDependent
     * const staffDependent = await prisma.staffDependent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staffDependentFindFirstArgs>(args?: SelectSubset<T, staffDependentFindFirstArgs<ExtArgs>>): Prisma__staffDependentClient<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaffDependent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffDependentFindFirstOrThrowArgs} args - Arguments to find a StaffDependent
     * @example
     * // Get one StaffDependent
     * const staffDependent = await prisma.staffDependent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staffDependentFindFirstOrThrowArgs>(args?: SelectSubset<T, staffDependentFindFirstOrThrowArgs<ExtArgs>>): Prisma__staffDependentClient<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaffDependents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffDependentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaffDependents
     * const staffDependents = await prisma.staffDependent.findMany()
     * 
     * // Get first 10 StaffDependents
     * const staffDependents = await prisma.staffDependent.findMany({ take: 10 })
     * 
     * // Only select the `staffNo`
     * const staffDependentWithStaffNoOnly = await prisma.staffDependent.findMany({ select: { staffNo: true } })
     * 
     */
    findMany<T extends staffDependentFindManyArgs>(args?: SelectSubset<T, staffDependentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaffDependent.
     * @param {staffDependentCreateArgs} args - Arguments to create a StaffDependent.
     * @example
     * // Create one StaffDependent
     * const StaffDependent = await prisma.staffDependent.create({
     *   data: {
     *     // ... data to create a StaffDependent
     *   }
     * })
     * 
     */
    create<T extends staffDependentCreateArgs>(args: SelectSubset<T, staffDependentCreateArgs<ExtArgs>>): Prisma__staffDependentClient<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaffDependents.
     * @param {staffDependentCreateManyArgs} args - Arguments to create many StaffDependents.
     * @example
     * // Create many StaffDependents
     * const staffDependent = await prisma.staffDependent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staffDependentCreateManyArgs>(args?: SelectSubset<T, staffDependentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaffDependents and returns the data saved in the database.
     * @param {staffDependentCreateManyAndReturnArgs} args - Arguments to create many StaffDependents.
     * @example
     * // Create many StaffDependents
     * const staffDependent = await prisma.staffDependent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaffDependents and only return the `staffNo`
     * const staffDependentWithStaffNoOnly = await prisma.staffDependent.createManyAndReturn({
     *   select: { staffNo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends staffDependentCreateManyAndReturnArgs>(args?: SelectSubset<T, staffDependentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaffDependent.
     * @param {staffDependentDeleteArgs} args - Arguments to delete one StaffDependent.
     * @example
     * // Delete one StaffDependent
     * const StaffDependent = await prisma.staffDependent.delete({
     *   where: {
     *     // ... filter to delete one StaffDependent
     *   }
     * })
     * 
     */
    delete<T extends staffDependentDeleteArgs>(args: SelectSubset<T, staffDependentDeleteArgs<ExtArgs>>): Prisma__staffDependentClient<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaffDependent.
     * @param {staffDependentUpdateArgs} args - Arguments to update one StaffDependent.
     * @example
     * // Update one StaffDependent
     * const staffDependent = await prisma.staffDependent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staffDependentUpdateArgs>(args: SelectSubset<T, staffDependentUpdateArgs<ExtArgs>>): Prisma__staffDependentClient<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaffDependents.
     * @param {staffDependentDeleteManyArgs} args - Arguments to filter StaffDependents to delete.
     * @example
     * // Delete a few StaffDependents
     * const { count } = await prisma.staffDependent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staffDependentDeleteManyArgs>(args?: SelectSubset<T, staffDependentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffDependents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffDependentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaffDependents
     * const staffDependent = await prisma.staffDependent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staffDependentUpdateManyArgs>(args: SelectSubset<T, staffDependentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaffDependents and returns the data updated in the database.
     * @param {staffDependentUpdateManyAndReturnArgs} args - Arguments to update many StaffDependents.
     * @example
     * // Update many StaffDependents
     * const staffDependent = await prisma.staffDependent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaffDependents and only return the `staffNo`
     * const staffDependentWithStaffNoOnly = await prisma.staffDependent.updateManyAndReturn({
     *   select: { staffNo: true },
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
    updateManyAndReturn<T extends staffDependentUpdateManyAndReturnArgs>(args: SelectSubset<T, staffDependentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaffDependent.
     * @param {staffDependentUpsertArgs} args - Arguments to update or create a StaffDependent.
     * @example
     * // Update or create a StaffDependent
     * const staffDependent = await prisma.staffDependent.upsert({
     *   create: {
     *     // ... data to create a StaffDependent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaffDependent we want to update
     *   }
     * })
     */
    upsert<T extends staffDependentUpsertArgs>(args: SelectSubset<T, staffDependentUpsertArgs<ExtArgs>>): Prisma__staffDependentClient<$Result.GetResult<Prisma.$staffDependentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaffDependents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffDependentCountArgs} args - Arguments to filter StaffDependents to count.
     * @example
     * // Count the number of StaffDependents
     * const count = await prisma.staffDependent.count({
     *   where: {
     *     // ... the filter for the StaffDependents we want to count
     *   }
     * })
    **/
    count<T extends staffDependentCountArgs>(
      args?: Subset<T, staffDependentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffDependentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaffDependent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffDependentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffDependentAggregateArgs>(args: Subset<T, StaffDependentAggregateArgs>): Prisma.PrismaPromise<GetStaffDependentAggregateType<T>>

    /**
     * Group by StaffDependent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffDependentGroupByArgs} args - Group by arguments.
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
      T extends staffDependentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffDependentGroupByArgs['orderBy'] }
        : { orderBy?: staffDependentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, staffDependentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffDependentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staffDependent model
   */
  readonly fields: staffDependentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staffDependent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffDependentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staff<T extends staffDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffDefaultArgs<ExtArgs>>): Prisma__staffClient<$Result.GetResult<Prisma.$staffPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the staffDependent model
   */
  interface staffDependentFieldRefs {
    readonly staffNo: FieldRef<"staffDependent", 'String'>
    readonly dependentName: FieldRef<"staffDependent", 'String'>
    readonly relationship: FieldRef<"staffDependent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * staffDependent findUnique
   */
  export type staffDependentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentInclude<ExtArgs> | null
    /**
     * Filter, which staffDependent to fetch.
     */
    where: staffDependentWhereUniqueInput
  }

  /**
   * staffDependent findUniqueOrThrow
   */
  export type staffDependentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentInclude<ExtArgs> | null
    /**
     * Filter, which staffDependent to fetch.
     */
    where: staffDependentWhereUniqueInput
  }

  /**
   * staffDependent findFirst
   */
  export type staffDependentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentInclude<ExtArgs> | null
    /**
     * Filter, which staffDependent to fetch.
     */
    where?: staffDependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffDependents to fetch.
     */
    orderBy?: staffDependentOrderByWithRelationInput | staffDependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staffDependents.
     */
    cursor?: staffDependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffDependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffDependents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staffDependents.
     */
    distinct?: StaffDependentScalarFieldEnum | StaffDependentScalarFieldEnum[]
  }

  /**
   * staffDependent findFirstOrThrow
   */
  export type staffDependentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentInclude<ExtArgs> | null
    /**
     * Filter, which staffDependent to fetch.
     */
    where?: staffDependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffDependents to fetch.
     */
    orderBy?: staffDependentOrderByWithRelationInput | staffDependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staffDependents.
     */
    cursor?: staffDependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffDependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffDependents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staffDependents.
     */
    distinct?: StaffDependentScalarFieldEnum | StaffDependentScalarFieldEnum[]
  }

  /**
   * staffDependent findMany
   */
  export type staffDependentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentInclude<ExtArgs> | null
    /**
     * Filter, which staffDependents to fetch.
     */
    where?: staffDependentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffDependents to fetch.
     */
    orderBy?: staffDependentOrderByWithRelationInput | staffDependentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staffDependents.
     */
    cursor?: staffDependentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffDependents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffDependents.
     */
    skip?: number
    distinct?: StaffDependentScalarFieldEnum | StaffDependentScalarFieldEnum[]
  }

  /**
   * staffDependent create
   */
  export type staffDependentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentInclude<ExtArgs> | null
    /**
     * The data needed to create a staffDependent.
     */
    data: XOR<staffDependentCreateInput, staffDependentUncheckedCreateInput>
  }

  /**
   * staffDependent createMany
   */
  export type staffDependentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staffDependents.
     */
    data: staffDependentCreateManyInput | staffDependentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staffDependent createManyAndReturn
   */
  export type staffDependentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * The data used to create many staffDependents.
     */
    data: staffDependentCreateManyInput | staffDependentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * staffDependent update
   */
  export type staffDependentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentInclude<ExtArgs> | null
    /**
     * The data needed to update a staffDependent.
     */
    data: XOR<staffDependentUpdateInput, staffDependentUncheckedUpdateInput>
    /**
     * Choose, which staffDependent to update.
     */
    where: staffDependentWhereUniqueInput
  }

  /**
   * staffDependent updateMany
   */
  export type staffDependentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staffDependents.
     */
    data: XOR<staffDependentUpdateManyMutationInput, staffDependentUncheckedUpdateManyInput>
    /**
     * Filter which staffDependents to update
     */
    where?: staffDependentWhereInput
    /**
     * Limit how many staffDependents to update.
     */
    limit?: number
  }

  /**
   * staffDependent updateManyAndReturn
   */
  export type staffDependentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * The data used to update staffDependents.
     */
    data: XOR<staffDependentUpdateManyMutationInput, staffDependentUncheckedUpdateManyInput>
    /**
     * Filter which staffDependents to update
     */
    where?: staffDependentWhereInput
    /**
     * Limit how many staffDependents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * staffDependent upsert
   */
  export type staffDependentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentInclude<ExtArgs> | null
    /**
     * The filter to search for the staffDependent to update in case it exists.
     */
    where: staffDependentWhereUniqueInput
    /**
     * In case the staffDependent found by the `where` argument doesn't exist, create a new staffDependent with this data.
     */
    create: XOR<staffDependentCreateInput, staffDependentUncheckedCreateInput>
    /**
     * In case the staffDependent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffDependentUpdateInput, staffDependentUncheckedUpdateInput>
  }

  /**
   * staffDependent delete
   */
  export type staffDependentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentInclude<ExtArgs> | null
    /**
     * Filter which staffDependent to delete.
     */
    where: staffDependentWhereUniqueInput
  }

  /**
   * staffDependent deleteMany
   */
  export type staffDependentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staffDependents to delete
     */
    where?: staffDependentWhereInput
    /**
     * Limit how many staffDependents to delete.
     */
    limit?: number
  }

  /**
   * staffDependent without action
   */
  export type staffDependentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffDependent
     */
    select?: staffDependentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffDependent
     */
    omit?: staffDependentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffDependentInclude<ExtArgs> | null
  }


  /**
   * Model preRequisite
   */

  export type AggregatePreRequisite = {
    _count: PreRequisiteCountAggregateOutputType | null
    _min: PreRequisiteMinAggregateOutputType | null
    _max: PreRequisiteMaxAggregateOutputType | null
  }

  export type PreRequisiteMinAggregateOutputType = {
    modCode: string | null
    requisite: string | null
  }

  export type PreRequisiteMaxAggregateOutputType = {
    modCode: string | null
    requisite: string | null
  }

  export type PreRequisiteCountAggregateOutputType = {
    modCode: number
    requisite: number
    _all: number
  }


  export type PreRequisiteMinAggregateInputType = {
    modCode?: true
    requisite?: true
  }

  export type PreRequisiteMaxAggregateInputType = {
    modCode?: true
    requisite?: true
  }

  export type PreRequisiteCountAggregateInputType = {
    modCode?: true
    requisite?: true
    _all?: true
  }

  export type PreRequisiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preRequisite to aggregate.
     */
    where?: preRequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preRequisites to fetch.
     */
    orderBy?: preRequisiteOrderByWithRelationInput | preRequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: preRequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preRequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preRequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned preRequisites
    **/
    _count?: true | PreRequisiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreRequisiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreRequisiteMaxAggregateInputType
  }

  export type GetPreRequisiteAggregateType<T extends PreRequisiteAggregateArgs> = {
        [P in keyof T & keyof AggregatePreRequisite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreRequisite[P]>
      : GetScalarType<T[P], AggregatePreRequisite[P]>
  }




  export type preRequisiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: preRequisiteWhereInput
    orderBy?: preRequisiteOrderByWithAggregationInput | preRequisiteOrderByWithAggregationInput[]
    by: PreRequisiteScalarFieldEnum[] | PreRequisiteScalarFieldEnum
    having?: preRequisiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreRequisiteCountAggregateInputType | true
    _min?: PreRequisiteMinAggregateInputType
    _max?: PreRequisiteMaxAggregateInputType
  }

  export type PreRequisiteGroupByOutputType = {
    modCode: string
    requisite: string
    _count: PreRequisiteCountAggregateOutputType | null
    _min: PreRequisiteMinAggregateOutputType | null
    _max: PreRequisiteMaxAggregateOutputType | null
  }

  type GetPreRequisiteGroupByPayload<T extends preRequisiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreRequisiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreRequisiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreRequisiteGroupByOutputType[P]>
            : GetScalarType<T[P], PreRequisiteGroupByOutputType[P]>
        }
      >
    >


  export type preRequisiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    modCode?: boolean
    requisite?: boolean
    preRequisiteModCodeToModule?: boolean | moduleDefaultArgs<ExtArgs>
    preRequisiteRequisiteToModule?: boolean | moduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preRequisite"]>

  export type preRequisiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    modCode?: boolean
    requisite?: boolean
    preRequisiteModCodeToModule?: boolean | moduleDefaultArgs<ExtArgs>
    preRequisiteRequisiteToModule?: boolean | moduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preRequisite"]>

  export type preRequisiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    modCode?: boolean
    requisite?: boolean
    preRequisiteModCodeToModule?: boolean | moduleDefaultArgs<ExtArgs>
    preRequisiteRequisiteToModule?: boolean | moduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preRequisite"]>

  export type preRequisiteSelectScalar = {
    modCode?: boolean
    requisite?: boolean
  }

  export type preRequisiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"modCode" | "requisite", ExtArgs["result"]["preRequisite"]>
  export type preRequisiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preRequisiteModCodeToModule?: boolean | moduleDefaultArgs<ExtArgs>
    preRequisiteRequisiteToModule?: boolean | moduleDefaultArgs<ExtArgs>
  }
  export type preRequisiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preRequisiteModCodeToModule?: boolean | moduleDefaultArgs<ExtArgs>
    preRequisiteRequisiteToModule?: boolean | moduleDefaultArgs<ExtArgs>
  }
  export type preRequisiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preRequisiteModCodeToModule?: boolean | moduleDefaultArgs<ExtArgs>
    preRequisiteRequisiteToModule?: boolean | moduleDefaultArgs<ExtArgs>
  }

  export type $preRequisitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "preRequisite"
    objects: {
      preRequisiteModCodeToModule: Prisma.$modulePayload<ExtArgs>
      preRequisiteRequisiteToModule: Prisma.$modulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      modCode: string
      requisite: string
    }, ExtArgs["result"]["preRequisite"]>
    composites: {}
  }

  type preRequisiteGetPayload<S extends boolean | null | undefined | preRequisiteDefaultArgs> = $Result.GetResult<Prisma.$preRequisitePayload, S>

  type preRequisiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<preRequisiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreRequisiteCountAggregateInputType | true
    }

  export interface preRequisiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['preRequisite'], meta: { name: 'preRequisite' } }
    /**
     * Find zero or one PreRequisite that matches the filter.
     * @param {preRequisiteFindUniqueArgs} args - Arguments to find a PreRequisite
     * @example
     * // Get one PreRequisite
     * const preRequisite = await prisma.preRequisite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends preRequisiteFindUniqueArgs>(args: SelectSubset<T, preRequisiteFindUniqueArgs<ExtArgs>>): Prisma__preRequisiteClient<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PreRequisite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {preRequisiteFindUniqueOrThrowArgs} args - Arguments to find a PreRequisite
     * @example
     * // Get one PreRequisite
     * const preRequisite = await prisma.preRequisite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends preRequisiteFindUniqueOrThrowArgs>(args: SelectSubset<T, preRequisiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__preRequisiteClient<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreRequisite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preRequisiteFindFirstArgs} args - Arguments to find a PreRequisite
     * @example
     * // Get one PreRequisite
     * const preRequisite = await prisma.preRequisite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends preRequisiteFindFirstArgs>(args?: SelectSubset<T, preRequisiteFindFirstArgs<ExtArgs>>): Prisma__preRequisiteClient<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PreRequisite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preRequisiteFindFirstOrThrowArgs} args - Arguments to find a PreRequisite
     * @example
     * // Get one PreRequisite
     * const preRequisite = await prisma.preRequisite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends preRequisiteFindFirstOrThrowArgs>(args?: SelectSubset<T, preRequisiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__preRequisiteClient<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PreRequisites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preRequisiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PreRequisites
     * const preRequisites = await prisma.preRequisite.findMany()
     * 
     * // Get first 10 PreRequisites
     * const preRequisites = await prisma.preRequisite.findMany({ take: 10 })
     * 
     * // Only select the `modCode`
     * const preRequisiteWithModCodeOnly = await prisma.preRequisite.findMany({ select: { modCode: true } })
     * 
     */
    findMany<T extends preRequisiteFindManyArgs>(args?: SelectSubset<T, preRequisiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PreRequisite.
     * @param {preRequisiteCreateArgs} args - Arguments to create a PreRequisite.
     * @example
     * // Create one PreRequisite
     * const PreRequisite = await prisma.preRequisite.create({
     *   data: {
     *     // ... data to create a PreRequisite
     *   }
     * })
     * 
     */
    create<T extends preRequisiteCreateArgs>(args: SelectSubset<T, preRequisiteCreateArgs<ExtArgs>>): Prisma__preRequisiteClient<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PreRequisites.
     * @param {preRequisiteCreateManyArgs} args - Arguments to create many PreRequisites.
     * @example
     * // Create many PreRequisites
     * const preRequisite = await prisma.preRequisite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends preRequisiteCreateManyArgs>(args?: SelectSubset<T, preRequisiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PreRequisites and returns the data saved in the database.
     * @param {preRequisiteCreateManyAndReturnArgs} args - Arguments to create many PreRequisites.
     * @example
     * // Create many PreRequisites
     * const preRequisite = await prisma.preRequisite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PreRequisites and only return the `modCode`
     * const preRequisiteWithModCodeOnly = await prisma.preRequisite.createManyAndReturn({
     *   select: { modCode: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends preRequisiteCreateManyAndReturnArgs>(args?: SelectSubset<T, preRequisiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PreRequisite.
     * @param {preRequisiteDeleteArgs} args - Arguments to delete one PreRequisite.
     * @example
     * // Delete one PreRequisite
     * const PreRequisite = await prisma.preRequisite.delete({
     *   where: {
     *     // ... filter to delete one PreRequisite
     *   }
     * })
     * 
     */
    delete<T extends preRequisiteDeleteArgs>(args: SelectSubset<T, preRequisiteDeleteArgs<ExtArgs>>): Prisma__preRequisiteClient<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PreRequisite.
     * @param {preRequisiteUpdateArgs} args - Arguments to update one PreRequisite.
     * @example
     * // Update one PreRequisite
     * const preRequisite = await prisma.preRequisite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends preRequisiteUpdateArgs>(args: SelectSubset<T, preRequisiteUpdateArgs<ExtArgs>>): Prisma__preRequisiteClient<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PreRequisites.
     * @param {preRequisiteDeleteManyArgs} args - Arguments to filter PreRequisites to delete.
     * @example
     * // Delete a few PreRequisites
     * const { count } = await prisma.preRequisite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends preRequisiteDeleteManyArgs>(args?: SelectSubset<T, preRequisiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreRequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preRequisiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PreRequisites
     * const preRequisite = await prisma.preRequisite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends preRequisiteUpdateManyArgs>(args: SelectSubset<T, preRequisiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PreRequisites and returns the data updated in the database.
     * @param {preRequisiteUpdateManyAndReturnArgs} args - Arguments to update many PreRequisites.
     * @example
     * // Update many PreRequisites
     * const preRequisite = await prisma.preRequisite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PreRequisites and only return the `modCode`
     * const preRequisiteWithModCodeOnly = await prisma.preRequisite.updateManyAndReturn({
     *   select: { modCode: true },
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
    updateManyAndReturn<T extends preRequisiteUpdateManyAndReturnArgs>(args: SelectSubset<T, preRequisiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PreRequisite.
     * @param {preRequisiteUpsertArgs} args - Arguments to update or create a PreRequisite.
     * @example
     * // Update or create a PreRequisite
     * const preRequisite = await prisma.preRequisite.upsert({
     *   create: {
     *     // ... data to create a PreRequisite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PreRequisite we want to update
     *   }
     * })
     */
    upsert<T extends preRequisiteUpsertArgs>(args: SelectSubset<T, preRequisiteUpsertArgs<ExtArgs>>): Prisma__preRequisiteClient<$Result.GetResult<Prisma.$preRequisitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PreRequisites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preRequisiteCountArgs} args - Arguments to filter PreRequisites to count.
     * @example
     * // Count the number of PreRequisites
     * const count = await prisma.preRequisite.count({
     *   where: {
     *     // ... the filter for the PreRequisites we want to count
     *   }
     * })
    **/
    count<T extends preRequisiteCountArgs>(
      args?: Subset<T, preRequisiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreRequisiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PreRequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreRequisiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreRequisiteAggregateArgs>(args: Subset<T, PreRequisiteAggregateArgs>): Prisma.PrismaPromise<GetPreRequisiteAggregateType<T>>

    /**
     * Group by PreRequisite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {preRequisiteGroupByArgs} args - Group by arguments.
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
      T extends preRequisiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: preRequisiteGroupByArgs['orderBy'] }
        : { orderBy?: preRequisiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, preRequisiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreRequisiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the preRequisite model
   */
  readonly fields: preRequisiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for preRequisite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__preRequisiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preRequisiteModCodeToModule<T extends moduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduleDefaultArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    preRequisiteRequisiteToModule<T extends moduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduleDefaultArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the preRequisite model
   */
  interface preRequisiteFieldRefs {
    readonly modCode: FieldRef<"preRequisite", 'String'>
    readonly requisite: FieldRef<"preRequisite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * preRequisite findUnique
   */
  export type preRequisiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
    /**
     * Filter, which preRequisite to fetch.
     */
    where: preRequisiteWhereUniqueInput
  }

  /**
   * preRequisite findUniqueOrThrow
   */
  export type preRequisiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
    /**
     * Filter, which preRequisite to fetch.
     */
    where: preRequisiteWhereUniqueInput
  }

  /**
   * preRequisite findFirst
   */
  export type preRequisiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
    /**
     * Filter, which preRequisite to fetch.
     */
    where?: preRequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preRequisites to fetch.
     */
    orderBy?: preRequisiteOrderByWithRelationInput | preRequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preRequisites.
     */
    cursor?: preRequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preRequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preRequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preRequisites.
     */
    distinct?: PreRequisiteScalarFieldEnum | PreRequisiteScalarFieldEnum[]
  }

  /**
   * preRequisite findFirstOrThrow
   */
  export type preRequisiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
    /**
     * Filter, which preRequisite to fetch.
     */
    where?: preRequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preRequisites to fetch.
     */
    orderBy?: preRequisiteOrderByWithRelationInput | preRequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for preRequisites.
     */
    cursor?: preRequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preRequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preRequisites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of preRequisites.
     */
    distinct?: PreRequisiteScalarFieldEnum | PreRequisiteScalarFieldEnum[]
  }

  /**
   * preRequisite findMany
   */
  export type preRequisiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
    /**
     * Filter, which preRequisites to fetch.
     */
    where?: preRequisiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of preRequisites to fetch.
     */
    orderBy?: preRequisiteOrderByWithRelationInput | preRequisiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing preRequisites.
     */
    cursor?: preRequisiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` preRequisites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` preRequisites.
     */
    skip?: number
    distinct?: PreRequisiteScalarFieldEnum | PreRequisiteScalarFieldEnum[]
  }

  /**
   * preRequisite create
   */
  export type preRequisiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
    /**
     * The data needed to create a preRequisite.
     */
    data: XOR<preRequisiteCreateInput, preRequisiteUncheckedCreateInput>
  }

  /**
   * preRequisite createMany
   */
  export type preRequisiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many preRequisites.
     */
    data: preRequisiteCreateManyInput | preRequisiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * preRequisite createManyAndReturn
   */
  export type preRequisiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * The data used to create many preRequisites.
     */
    data: preRequisiteCreateManyInput | preRequisiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * preRequisite update
   */
  export type preRequisiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
    /**
     * The data needed to update a preRequisite.
     */
    data: XOR<preRequisiteUpdateInput, preRequisiteUncheckedUpdateInput>
    /**
     * Choose, which preRequisite to update.
     */
    where: preRequisiteWhereUniqueInput
  }

  /**
   * preRequisite updateMany
   */
  export type preRequisiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update preRequisites.
     */
    data: XOR<preRequisiteUpdateManyMutationInput, preRequisiteUncheckedUpdateManyInput>
    /**
     * Filter which preRequisites to update
     */
    where?: preRequisiteWhereInput
    /**
     * Limit how many preRequisites to update.
     */
    limit?: number
  }

  /**
   * preRequisite updateManyAndReturn
   */
  export type preRequisiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * The data used to update preRequisites.
     */
    data: XOR<preRequisiteUpdateManyMutationInput, preRequisiteUncheckedUpdateManyInput>
    /**
     * Filter which preRequisites to update
     */
    where?: preRequisiteWhereInput
    /**
     * Limit how many preRequisites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * preRequisite upsert
   */
  export type preRequisiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
    /**
     * The filter to search for the preRequisite to update in case it exists.
     */
    where: preRequisiteWhereUniqueInput
    /**
     * In case the preRequisite found by the `where` argument doesn't exist, create a new preRequisite with this data.
     */
    create: XOR<preRequisiteCreateInput, preRequisiteUncheckedCreateInput>
    /**
     * In case the preRequisite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<preRequisiteUpdateInput, preRequisiteUncheckedUpdateInput>
  }

  /**
   * preRequisite delete
   */
  export type preRequisiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
    /**
     * Filter which preRequisite to delete.
     */
    where: preRequisiteWhereUniqueInput
  }

  /**
   * preRequisite deleteMany
   */
  export type preRequisiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which preRequisites to delete
     */
    where?: preRequisiteWhereInput
    /**
     * Limit how many preRequisites to delete.
     */
    limit?: number
  }

  /**
   * preRequisite without action
   */
  export type preRequisiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the preRequisite
     */
    select?: preRequisiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the preRequisite
     */
    omit?: preRequisiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: preRequisiteInclude<ExtArgs> | null
  }


  /**
   * Model country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    countryName: string | null
    language: string | null
    region: string | null
  }

  export type CountryMaxAggregateOutputType = {
    countryName: string | null
    language: string | null
    region: string | null
  }

  export type CountryCountAggregateOutputType = {
    countryName: number
    language: number
    region: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    countryName?: true
    language?: true
    region?: true
  }

  export type CountryMaxAggregateInputType = {
    countryName?: true
    language?: true
    region?: true
  }

  export type CountryCountAggregateInputType = {
    countryName?: true
    language?: true
    region?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which country to aggregate.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type countryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: countryWhereInput
    orderBy?: countryOrderByWithAggregationInput | countryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: countryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    countryName: string
    language: string
    region: string
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends countryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type countrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    countryName?: boolean
    language?: boolean
    region?: boolean
    student?: boolean | country$studentArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type countrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    countryName?: boolean
    language?: boolean
    region?: boolean
  }, ExtArgs["result"]["country"]>

  export type countrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    countryName?: boolean
    language?: boolean
    region?: boolean
  }, ExtArgs["result"]["country"]>

  export type countrySelectScalar = {
    countryName?: boolean
    language?: boolean
    region?: boolean
  }

  export type countryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"countryName" | "language" | "region", ExtArgs["result"]["country"]>
  export type countryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | country$studentArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type countryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type countryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $countryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "country"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      countryName: string
      language: string
      region: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type countryGetPayload<S extends boolean | null | undefined | countryDefaultArgs> = $Result.GetResult<Prisma.$countryPayload, S>

  type countryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<countryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface countryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['country'], meta: { name: 'country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {countryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends countryFindUniqueArgs>(args: SelectSubset<T, countryFindUniqueArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {countryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends countryFindUniqueOrThrowArgs>(args: SelectSubset<T, countryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends countryFindFirstArgs>(args?: SelectSubset<T, countryFindFirstArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends countryFindFirstOrThrowArgs>(args?: SelectSubset<T, countryFindFirstOrThrowArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `countryName`
     * const countryWithCountryNameOnly = await prisma.country.findMany({ select: { countryName: true } })
     * 
     */
    findMany<T extends countryFindManyArgs>(args?: SelectSubset<T, countryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {countryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends countryCreateArgs>(args: SelectSubset<T, countryCreateArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {countryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends countryCreateManyArgs>(args?: SelectSubset<T, countryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {countryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `countryName`
     * const countryWithCountryNameOnly = await prisma.country.createManyAndReturn({
     *   select: { countryName: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends countryCreateManyAndReturnArgs>(args?: SelectSubset<T, countryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {countryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends countryDeleteArgs>(args: SelectSubset<T, countryDeleteArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {countryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends countryUpdateArgs>(args: SelectSubset<T, countryUpdateArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {countryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends countryDeleteManyArgs>(args?: SelectSubset<T, countryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends countryUpdateManyArgs>(args: SelectSubset<T, countryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {countryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `countryName`
     * const countryWithCountryNameOnly = await prisma.country.updateManyAndReturn({
     *   select: { countryName: true },
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
    updateManyAndReturn<T extends countryUpdateManyAndReturnArgs>(args: SelectSubset<T, countryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {countryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends countryUpsertArgs>(args: SelectSubset<T, countryUpsertArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends countryCountArgs>(
      args?: Subset<T, countryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countryGroupByArgs} args - Group by arguments.
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
      T extends countryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: countryGroupByArgs['orderBy'] }
        : { orderBy?: countryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, countryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the country model
   */
  readonly fields: countryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__countryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends country$studentArgs<ExtArgs> = {}>(args?: Subset<T, country$studentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the country model
   */
  interface countryFieldRefs {
    readonly countryName: FieldRef<"country", 'String'>
    readonly language: FieldRef<"country", 'String'>
    readonly region: FieldRef<"country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * country findUnique
   */
  export type countryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country findUniqueOrThrow
   */
  export type countryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country findFirst
   */
  export type countryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * country findFirstOrThrow
   */
  export type countryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter, which country to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * country findMany
   */
  export type countryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countryOrderByWithRelationInput | countryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countries.
     */
    cursor?: countryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * country create
   */
  export type countryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * The data needed to create a country.
     */
    data: XOR<countryCreateInput, countryUncheckedCreateInput>
  }

  /**
   * country createMany
   */
  export type countryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many countries.
     */
    data: countryCreateManyInput | countryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * country createManyAndReturn
   */
  export type countryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * The data used to create many countries.
     */
    data: countryCreateManyInput | countryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * country update
   */
  export type countryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * The data needed to update a country.
     */
    data: XOR<countryUpdateInput, countryUncheckedUpdateInput>
    /**
     * Choose, which country to update.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country updateMany
   */
  export type countryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update countries.
     */
    data: XOR<countryUpdateManyMutationInput, countryUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countryWhereInput
    /**
     * Limit how many countries to update.
     */
    limit?: number
  }

  /**
   * country updateManyAndReturn
   */
  export type countryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * The data used to update countries.
     */
    data: XOR<countryUpdateManyMutationInput, countryUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countryWhereInput
    /**
     * Limit how many countries to update.
     */
    limit?: number
  }

  /**
   * country upsert
   */
  export type countryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * The filter to search for the country to update in case it exists.
     */
    where: countryWhereUniqueInput
    /**
     * In case the country found by the `where` argument doesn't exist, create a new country with this data.
     */
    create: XOR<countryCreateInput, countryUncheckedCreateInput>
    /**
     * In case the country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<countryUpdateInput, countryUncheckedUpdateInput>
  }

  /**
   * country delete
   */
  export type countryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
    /**
     * Filter which country to delete.
     */
    where: countryWhereUniqueInput
  }

  /**
   * country deleteMany
   */
  export type countryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to delete
     */
    where?: countryWhereInput
    /**
     * Limit how many countries to delete.
     */
    limit?: number
  }

  /**
   * country.student
   */
  export type country$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    cursor?: studentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * country without action
   */
  export type countryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the country
     */
    select?: countrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the country
     */
    omit?: countryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: countryInclude<ExtArgs> | null
  }


  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    admNo: string | null
    studName: string | null
    gender: string | null
    address: string | null
    mobilePhone: string | null
    homePhone: string | null
    dob: Date | null
    nationality: string | null
    crseCode: string | null
  }

  export type StudentMaxAggregateOutputType = {
    admNo: string | null
    studName: string | null
    gender: string | null
    address: string | null
    mobilePhone: string | null
    homePhone: string | null
    dob: Date | null
    nationality: string | null
    crseCode: string | null
  }

  export type StudentCountAggregateOutputType = {
    admNo: number
    studName: number
    gender: number
    address: number
    mobilePhone: number
    homePhone: number
    dob: number
    nationality: number
    crseCode: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    admNo?: true
    studName?: true
    gender?: true
    address?: true
    mobilePhone?: true
    homePhone?: true
    dob?: true
    nationality?: true
    crseCode?: true
  }

  export type StudentMaxAggregateInputType = {
    admNo?: true
    studName?: true
    gender?: true
    address?: true
    mobilePhone?: true
    homePhone?: true
    dob?: true
    nationality?: true
    crseCode?: true
  }

  export type StudentCountAggregateInputType = {
    admNo?: true
    studName?: true
    gender?: true
    address?: true
    mobilePhone?: true
    homePhone?: true
    dob?: true
    nationality?: true
    crseCode?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date
    nationality: string
    crseCode: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admNo?: boolean
    studName?: boolean
    gender?: boolean
    address?: boolean
    mobilePhone?: boolean
    homePhone?: boolean
    dob?: boolean
    nationality?: boolean
    crseCode?: boolean
    country?: boolean | countryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    studModPerformance?: boolean | student$studModPerformanceArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admNo?: boolean
    studName?: boolean
    gender?: boolean
    address?: boolean
    mobilePhone?: boolean
    homePhone?: boolean
    dob?: boolean
    nationality?: boolean
    crseCode?: boolean
    country?: boolean | countryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admNo?: boolean
    studName?: boolean
    gender?: boolean
    address?: boolean
    mobilePhone?: boolean
    homePhone?: boolean
    dob?: boolean
    nationality?: boolean
    crseCode?: boolean
    country?: boolean | countryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectScalar = {
    admNo?: boolean
    studName?: boolean
    gender?: boolean
    address?: boolean
    mobilePhone?: boolean
    homePhone?: boolean
    dob?: boolean
    nationality?: boolean
    crseCode?: boolean
  }

  export type studentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"admNo" | "studName" | "gender" | "address" | "mobilePhone" | "homePhone" | "dob" | "nationality" | "crseCode", ExtArgs["result"]["student"]>
  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | countryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
    studModPerformance?: boolean | student$studModPerformanceArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type studentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | countryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }
  export type studentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | countryDefaultArgs<ExtArgs>
    course?: boolean | courseDefaultArgs<ExtArgs>
  }

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      country: Prisma.$countryPayload<ExtArgs>
      course: Prisma.$coursePayload<ExtArgs>
      studModPerformance: Prisma.$studModPerformancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      admNo: string
      studName: string
      gender: string
      address: string
      mobilePhone: string
      homePhone: string
      dob: Date
      nationality: string
      crseCode: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentFindUniqueArgs>(args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(args: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentFindFirstArgs>(args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `admNo`
     * const studentWithAdmNoOnly = await prisma.student.findMany({ select: { admNo: true } })
     * 
     */
    findMany<T extends studentFindManyArgs>(args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends studentCreateArgs>(args: SelectSubset<T, studentCreateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCreateManyArgs>(args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {studentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `admNo`
     * const studentWithAdmNoOnly = await prisma.student.createManyAndReturn({
     *   select: { admNo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studentCreateManyAndReturnArgs>(args?: SelectSubset<T, studentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends studentDeleteArgs>(args: SelectSubset<T, studentDeleteArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentUpdateArgs>(args: SelectSubset<T, studentUpdateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentDeleteManyArgs>(args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentUpdateManyArgs>(args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {studentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `admNo`
     * const studentWithAdmNoOnly = await prisma.student.updateManyAndReturn({
     *   select: { admNo: true },
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
    updateManyAndReturn<T extends studentUpdateManyAndReturnArgs>(args: SelectSubset<T, studentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends studentUpsertArgs>(args: SelectSubset<T, studentUpsertArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
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
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends countryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, countryDefaultArgs<ExtArgs>>): Prisma__countryClient<$Result.GetResult<Prisma.$countryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends courseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, courseDefaultArgs<ExtArgs>>): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    studModPerformance<T extends student$studModPerformanceArgs<ExtArgs> = {}>(args?: Subset<T, student$studModPerformanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly admNo: FieldRef<"student", 'String'>
    readonly studName: FieldRef<"student", 'String'>
    readonly gender: FieldRef<"student", 'String'>
    readonly address: FieldRef<"student", 'String'>
    readonly mobilePhone: FieldRef<"student", 'String'>
    readonly homePhone: FieldRef<"student", 'String'>
    readonly dob: FieldRef<"student", 'DateTime'>
    readonly nationality: FieldRef<"student", 'String'>
    readonly crseCode: FieldRef<"student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student createManyAndReturn
   */
  export type studentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student updateManyAndReturn
   */
  export type studentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * student.studModPerformance
   */
  export type student$studModPerformanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
    where?: studModPerformanceWhereInput
    orderBy?: studModPerformanceOrderByWithRelationInput | studModPerformanceOrderByWithRelationInput[]
    cursor?: studModPerformanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudModPerformanceScalarFieldEnum | StudModPerformanceScalarFieldEnum[]
  }

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
  }


  /**
   * Model studModPerformance
   */

  export type AggregateStudModPerformance = {
    _count: StudModPerformanceCountAggregateOutputType | null
    _avg: StudModPerformanceAvgAggregateOutputType | null
    _sum: StudModPerformanceSumAggregateOutputType | null
    _min: StudModPerformanceMinAggregateOutputType | null
    _max: StudModPerformanceMaxAggregateOutputType | null
  }

  export type StudModPerformanceAvgAggregateOutputType = {
    mark: number | null
  }

  export type StudModPerformanceSumAggregateOutputType = {
    mark: number | null
  }

  export type StudModPerformanceMinAggregateOutputType = {
    admNo: string | null
    modRegistered: string | null
    mark: number | null
    grade: string | null
  }

  export type StudModPerformanceMaxAggregateOutputType = {
    admNo: string | null
    modRegistered: string | null
    mark: number | null
    grade: string | null
  }

  export type StudModPerformanceCountAggregateOutputType = {
    admNo: number
    modRegistered: number
    mark: number
    grade: number
    _all: number
  }


  export type StudModPerformanceAvgAggregateInputType = {
    mark?: true
  }

  export type StudModPerformanceSumAggregateInputType = {
    mark?: true
  }

  export type StudModPerformanceMinAggregateInputType = {
    admNo?: true
    modRegistered?: true
    mark?: true
    grade?: true
  }

  export type StudModPerformanceMaxAggregateInputType = {
    admNo?: true
    modRegistered?: true
    mark?: true
    grade?: true
  }

  export type StudModPerformanceCountAggregateInputType = {
    admNo?: true
    modRegistered?: true
    mark?: true
    grade?: true
    _all?: true
  }

  export type StudModPerformanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which studModPerformance to aggregate.
     */
    where?: studModPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studModPerformances to fetch.
     */
    orderBy?: studModPerformanceOrderByWithRelationInput | studModPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studModPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studModPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studModPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned studModPerformances
    **/
    _count?: true | StudModPerformanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudModPerformanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudModPerformanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudModPerformanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudModPerformanceMaxAggregateInputType
  }

  export type GetStudModPerformanceAggregateType<T extends StudModPerformanceAggregateArgs> = {
        [P in keyof T & keyof AggregateStudModPerformance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudModPerformance[P]>
      : GetScalarType<T[P], AggregateStudModPerformance[P]>
  }




  export type studModPerformanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studModPerformanceWhereInput
    orderBy?: studModPerformanceOrderByWithAggregationInput | studModPerformanceOrderByWithAggregationInput[]
    by: StudModPerformanceScalarFieldEnum[] | StudModPerformanceScalarFieldEnum
    having?: studModPerformanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudModPerformanceCountAggregateInputType | true
    _avg?: StudModPerformanceAvgAggregateInputType
    _sum?: StudModPerformanceSumAggregateInputType
    _min?: StudModPerformanceMinAggregateInputType
    _max?: StudModPerformanceMaxAggregateInputType
  }

  export type StudModPerformanceGroupByOutputType = {
    admNo: string
    modRegistered: string
    mark: number
    grade: string
    _count: StudModPerformanceCountAggregateOutputType | null
    _avg: StudModPerformanceAvgAggregateOutputType | null
    _sum: StudModPerformanceSumAggregateOutputType | null
    _min: StudModPerformanceMinAggregateOutputType | null
    _max: StudModPerformanceMaxAggregateOutputType | null
  }

  type GetStudModPerformanceGroupByPayload<T extends studModPerformanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudModPerformanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudModPerformanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudModPerformanceGroupByOutputType[P]>
            : GetScalarType<T[P], StudModPerformanceGroupByOutputType[P]>
        }
      >
    >


  export type studModPerformanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admNo?: boolean
    modRegistered?: boolean
    mark?: boolean
    grade?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studModPerformance"]>

  export type studModPerformanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admNo?: boolean
    modRegistered?: boolean
    mark?: boolean
    grade?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studModPerformance"]>

  export type studModPerformanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admNo?: boolean
    modRegistered?: boolean
    mark?: boolean
    grade?: boolean
    student?: boolean | studentDefaultArgs<ExtArgs>
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studModPerformance"]>

  export type studModPerformanceSelectScalar = {
    admNo?: boolean
    modRegistered?: boolean
    mark?: boolean
    grade?: boolean
  }

  export type studModPerformanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"admNo" | "modRegistered" | "mark" | "grade", ExtArgs["result"]["studModPerformance"]>
  export type studModPerformanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }
  export type studModPerformanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }
  export type studModPerformanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>
    module?: boolean | moduleDefaultArgs<ExtArgs>
  }

  export type $studModPerformancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "studModPerformance"
    objects: {
      student: Prisma.$studentPayload<ExtArgs>
      module: Prisma.$modulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      admNo: string
      modRegistered: string
      mark: number
      grade: string
    }, ExtArgs["result"]["studModPerformance"]>
    composites: {}
  }

  type studModPerformanceGetPayload<S extends boolean | null | undefined | studModPerformanceDefaultArgs> = $Result.GetResult<Prisma.$studModPerformancePayload, S>

  type studModPerformanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studModPerformanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudModPerformanceCountAggregateInputType | true
    }

  export interface studModPerformanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['studModPerformance'], meta: { name: 'studModPerformance' } }
    /**
     * Find zero or one StudModPerformance that matches the filter.
     * @param {studModPerformanceFindUniqueArgs} args - Arguments to find a StudModPerformance
     * @example
     * // Get one StudModPerformance
     * const studModPerformance = await prisma.studModPerformance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studModPerformanceFindUniqueArgs>(args: SelectSubset<T, studModPerformanceFindUniqueArgs<ExtArgs>>): Prisma__studModPerformanceClient<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudModPerformance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studModPerformanceFindUniqueOrThrowArgs} args - Arguments to find a StudModPerformance
     * @example
     * // Get one StudModPerformance
     * const studModPerformance = await prisma.studModPerformance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studModPerformanceFindUniqueOrThrowArgs>(args: SelectSubset<T, studModPerformanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studModPerformanceClient<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudModPerformance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studModPerformanceFindFirstArgs} args - Arguments to find a StudModPerformance
     * @example
     * // Get one StudModPerformance
     * const studModPerformance = await prisma.studModPerformance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studModPerformanceFindFirstArgs>(args?: SelectSubset<T, studModPerformanceFindFirstArgs<ExtArgs>>): Prisma__studModPerformanceClient<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudModPerformance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studModPerformanceFindFirstOrThrowArgs} args - Arguments to find a StudModPerformance
     * @example
     * // Get one StudModPerformance
     * const studModPerformance = await prisma.studModPerformance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studModPerformanceFindFirstOrThrowArgs>(args?: SelectSubset<T, studModPerformanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__studModPerformanceClient<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudModPerformances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studModPerformanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudModPerformances
     * const studModPerformances = await prisma.studModPerformance.findMany()
     * 
     * // Get first 10 StudModPerformances
     * const studModPerformances = await prisma.studModPerformance.findMany({ take: 10 })
     * 
     * // Only select the `admNo`
     * const studModPerformanceWithAdmNoOnly = await prisma.studModPerformance.findMany({ select: { admNo: true } })
     * 
     */
    findMany<T extends studModPerformanceFindManyArgs>(args?: SelectSubset<T, studModPerformanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudModPerformance.
     * @param {studModPerformanceCreateArgs} args - Arguments to create a StudModPerformance.
     * @example
     * // Create one StudModPerformance
     * const StudModPerformance = await prisma.studModPerformance.create({
     *   data: {
     *     // ... data to create a StudModPerformance
     *   }
     * })
     * 
     */
    create<T extends studModPerformanceCreateArgs>(args: SelectSubset<T, studModPerformanceCreateArgs<ExtArgs>>): Prisma__studModPerformanceClient<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudModPerformances.
     * @param {studModPerformanceCreateManyArgs} args - Arguments to create many StudModPerformances.
     * @example
     * // Create many StudModPerformances
     * const studModPerformance = await prisma.studModPerformance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studModPerformanceCreateManyArgs>(args?: SelectSubset<T, studModPerformanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudModPerformances and returns the data saved in the database.
     * @param {studModPerformanceCreateManyAndReturnArgs} args - Arguments to create many StudModPerformances.
     * @example
     * // Create many StudModPerformances
     * const studModPerformance = await prisma.studModPerformance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudModPerformances and only return the `admNo`
     * const studModPerformanceWithAdmNoOnly = await prisma.studModPerformance.createManyAndReturn({
     *   select: { admNo: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studModPerformanceCreateManyAndReturnArgs>(args?: SelectSubset<T, studModPerformanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudModPerformance.
     * @param {studModPerformanceDeleteArgs} args - Arguments to delete one StudModPerformance.
     * @example
     * // Delete one StudModPerformance
     * const StudModPerformance = await prisma.studModPerformance.delete({
     *   where: {
     *     // ... filter to delete one StudModPerformance
     *   }
     * })
     * 
     */
    delete<T extends studModPerformanceDeleteArgs>(args: SelectSubset<T, studModPerformanceDeleteArgs<ExtArgs>>): Prisma__studModPerformanceClient<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudModPerformance.
     * @param {studModPerformanceUpdateArgs} args - Arguments to update one StudModPerformance.
     * @example
     * // Update one StudModPerformance
     * const studModPerformance = await prisma.studModPerformance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studModPerformanceUpdateArgs>(args: SelectSubset<T, studModPerformanceUpdateArgs<ExtArgs>>): Prisma__studModPerformanceClient<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudModPerformances.
     * @param {studModPerformanceDeleteManyArgs} args - Arguments to filter StudModPerformances to delete.
     * @example
     * // Delete a few StudModPerformances
     * const { count } = await prisma.studModPerformance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studModPerformanceDeleteManyArgs>(args?: SelectSubset<T, studModPerformanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudModPerformances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studModPerformanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudModPerformances
     * const studModPerformance = await prisma.studModPerformance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studModPerformanceUpdateManyArgs>(args: SelectSubset<T, studModPerformanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudModPerformances and returns the data updated in the database.
     * @param {studModPerformanceUpdateManyAndReturnArgs} args - Arguments to update many StudModPerformances.
     * @example
     * // Update many StudModPerformances
     * const studModPerformance = await prisma.studModPerformance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudModPerformances and only return the `admNo`
     * const studModPerformanceWithAdmNoOnly = await prisma.studModPerformance.updateManyAndReturn({
     *   select: { admNo: true },
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
    updateManyAndReturn<T extends studModPerformanceUpdateManyAndReturnArgs>(args: SelectSubset<T, studModPerformanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudModPerformance.
     * @param {studModPerformanceUpsertArgs} args - Arguments to update or create a StudModPerformance.
     * @example
     * // Update or create a StudModPerformance
     * const studModPerformance = await prisma.studModPerformance.upsert({
     *   create: {
     *     // ... data to create a StudModPerformance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudModPerformance we want to update
     *   }
     * })
     */
    upsert<T extends studModPerformanceUpsertArgs>(args: SelectSubset<T, studModPerformanceUpsertArgs<ExtArgs>>): Prisma__studModPerformanceClient<$Result.GetResult<Prisma.$studModPerformancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudModPerformances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studModPerformanceCountArgs} args - Arguments to filter StudModPerformances to count.
     * @example
     * // Count the number of StudModPerformances
     * const count = await prisma.studModPerformance.count({
     *   where: {
     *     // ... the filter for the StudModPerformances we want to count
     *   }
     * })
    **/
    count<T extends studModPerformanceCountArgs>(
      args?: Subset<T, studModPerformanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudModPerformanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudModPerformance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudModPerformanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudModPerformanceAggregateArgs>(args: Subset<T, StudModPerformanceAggregateArgs>): Prisma.PrismaPromise<GetStudModPerformanceAggregateType<T>>

    /**
     * Group by StudModPerformance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studModPerformanceGroupByArgs} args - Group by arguments.
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
      T extends studModPerformanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studModPerformanceGroupByArgs['orderBy'] }
        : { orderBy?: studModPerformanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, studModPerformanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudModPerformanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the studModPerformance model
   */
  readonly fields: studModPerformanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for studModPerformance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studModPerformanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    module<T extends moduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, moduleDefaultArgs<ExtArgs>>): Prisma__moduleClient<$Result.GetResult<Prisma.$modulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the studModPerformance model
   */
  interface studModPerformanceFieldRefs {
    readonly admNo: FieldRef<"studModPerformance", 'String'>
    readonly modRegistered: FieldRef<"studModPerformance", 'String'>
    readonly mark: FieldRef<"studModPerformance", 'Int'>
    readonly grade: FieldRef<"studModPerformance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * studModPerformance findUnique
   */
  export type studModPerformanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which studModPerformance to fetch.
     */
    where: studModPerformanceWhereUniqueInput
  }

  /**
   * studModPerformance findUniqueOrThrow
   */
  export type studModPerformanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which studModPerformance to fetch.
     */
    where: studModPerformanceWhereUniqueInput
  }

  /**
   * studModPerformance findFirst
   */
  export type studModPerformanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which studModPerformance to fetch.
     */
    where?: studModPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studModPerformances to fetch.
     */
    orderBy?: studModPerformanceOrderByWithRelationInput | studModPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for studModPerformances.
     */
    cursor?: studModPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studModPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studModPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of studModPerformances.
     */
    distinct?: StudModPerformanceScalarFieldEnum | StudModPerformanceScalarFieldEnum[]
  }

  /**
   * studModPerformance findFirstOrThrow
   */
  export type studModPerformanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which studModPerformance to fetch.
     */
    where?: studModPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studModPerformances to fetch.
     */
    orderBy?: studModPerformanceOrderByWithRelationInput | studModPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for studModPerformances.
     */
    cursor?: studModPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studModPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studModPerformances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of studModPerformances.
     */
    distinct?: StudModPerformanceScalarFieldEnum | StudModPerformanceScalarFieldEnum[]
  }

  /**
   * studModPerformance findMany
   */
  export type studModPerformanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
    /**
     * Filter, which studModPerformances to fetch.
     */
    where?: studModPerformanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of studModPerformances to fetch.
     */
    orderBy?: studModPerformanceOrderByWithRelationInput | studModPerformanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing studModPerformances.
     */
    cursor?: studModPerformanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` studModPerformances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` studModPerformances.
     */
    skip?: number
    distinct?: StudModPerformanceScalarFieldEnum | StudModPerformanceScalarFieldEnum[]
  }

  /**
   * studModPerformance create
   */
  export type studModPerformanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
    /**
     * The data needed to create a studModPerformance.
     */
    data: XOR<studModPerformanceCreateInput, studModPerformanceUncheckedCreateInput>
  }

  /**
   * studModPerformance createMany
   */
  export type studModPerformanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many studModPerformances.
     */
    data: studModPerformanceCreateManyInput | studModPerformanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * studModPerformance createManyAndReturn
   */
  export type studModPerformanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * The data used to create many studModPerformances.
     */
    data: studModPerformanceCreateManyInput | studModPerformanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * studModPerformance update
   */
  export type studModPerformanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
    /**
     * The data needed to update a studModPerformance.
     */
    data: XOR<studModPerformanceUpdateInput, studModPerformanceUncheckedUpdateInput>
    /**
     * Choose, which studModPerformance to update.
     */
    where: studModPerformanceWhereUniqueInput
  }

  /**
   * studModPerformance updateMany
   */
  export type studModPerformanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update studModPerformances.
     */
    data: XOR<studModPerformanceUpdateManyMutationInput, studModPerformanceUncheckedUpdateManyInput>
    /**
     * Filter which studModPerformances to update
     */
    where?: studModPerformanceWhereInput
    /**
     * Limit how many studModPerformances to update.
     */
    limit?: number
  }

  /**
   * studModPerformance updateManyAndReturn
   */
  export type studModPerformanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * The data used to update studModPerformances.
     */
    data: XOR<studModPerformanceUpdateManyMutationInput, studModPerformanceUncheckedUpdateManyInput>
    /**
     * Filter which studModPerformances to update
     */
    where?: studModPerformanceWhereInput
    /**
     * Limit how many studModPerformances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * studModPerformance upsert
   */
  export type studModPerformanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
    /**
     * The filter to search for the studModPerformance to update in case it exists.
     */
    where: studModPerformanceWhereUniqueInput
    /**
     * In case the studModPerformance found by the `where` argument doesn't exist, create a new studModPerformance with this data.
     */
    create: XOR<studModPerformanceCreateInput, studModPerformanceUncheckedCreateInput>
    /**
     * In case the studModPerformance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studModPerformanceUpdateInput, studModPerformanceUncheckedUpdateInput>
  }

  /**
   * studModPerformance delete
   */
  export type studModPerformanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
    /**
     * Filter which studModPerformance to delete.
     */
    where: studModPerformanceWhereUniqueInput
  }

  /**
   * studModPerformance deleteMany
   */
  export type studModPerformanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which studModPerformances to delete
     */
    where?: studModPerformanceWhereInput
    /**
     * Limit how many studModPerformances to delete.
     */
    limit?: number
  }

  /**
   * studModPerformance without action
   */
  export type studModPerformanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the studModPerformance
     */
    select?: studModPerformanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the studModPerformance
     */
    omit?: studModPerformanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studModPerformanceInclude<ExtArgs> | null
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


  export const CourseScalarFieldEnum: {
    crseCode: 'crseCode',
    crseName: 'crseName',
    offeredBy: 'offeredBy',
    crseFee: 'crseFee',
    labFee: 'labFee'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    deptCode: 'deptCode',
    deptName: 'deptName',
    hod: 'hod',
    noOfStaff: 'noOfStaff',
    maxStaffStrength: 'maxStaffStrength',
    budget: 'budget',
    expenditure: 'expenditure',
    hodApptDate: 'hodApptDate'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const StaffScalarFieldEnum: {
    staffNo: 'staffNo',
    staffName: 'staffName',
    supervisorStaffNo: 'supervisorStaffNo',
    dob: 'dob',
    grade: 'grade',
    maritalStatus: 'maritalStatus',
    pay: 'pay',
    allowance: 'allowance',
    hourlyRate: 'hourlyRate',
    gender: 'gender',
    citizenship: 'citizenship',
    joinYr: 'joinYr',
    deptCode: 'deptCode',
    typeOfEmployment: 'typeOfEmployment',
    highestQln: 'highestQln',
    designation: 'designation'
  };

  export type StaffScalarFieldEnum = (typeof StaffScalarFieldEnum)[keyof typeof StaffScalarFieldEnum]


  export const StaffBackupScalarFieldEnum: {
    staffNo: 'staffNo',
    staffName: 'staffName',
    supervisor: 'supervisor',
    dob: 'dob',
    grade: 'grade',
    maritalStatus: 'maritalStatus',
    pay: 'pay',
    allowance: 'allowance',
    hourlyRate: 'hourlyRate',
    gender: 'gender',
    citizenship: 'citizenship',
    joinYr: 'joinYr',
    deptCode: 'deptCode',
    typeOfEmployment: 'typeOfEmployment',
    highestQln: 'highestQln',
    designation: 'designation'
  };

  export type StaffBackupScalarFieldEnum = (typeof StaffBackupScalarFieldEnum)[keyof typeof StaffBackupScalarFieldEnum]


  export const UserAccountScalarFieldEnum: {
    id: 'id',
    accountNo: 'accountNo',
    role: 'role',
    password: 'password'
  };

  export type UserAccountScalarFieldEnum = (typeof UserAccountScalarFieldEnum)[keyof typeof UserAccountScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    modCode: 'modCode',
    modName: 'modName',
    creditUnit: 'creditUnit',
    modCoord: 'modCoord'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const StaffDependentScalarFieldEnum: {
    staffNo: 'staffNo',
    dependentName: 'dependentName',
    relationship: 'relationship'
  };

  export type StaffDependentScalarFieldEnum = (typeof StaffDependentScalarFieldEnum)[keyof typeof StaffDependentScalarFieldEnum]


  export const PreRequisiteScalarFieldEnum: {
    modCode: 'modCode',
    requisite: 'requisite'
  };

  export type PreRequisiteScalarFieldEnum = (typeof PreRequisiteScalarFieldEnum)[keyof typeof PreRequisiteScalarFieldEnum]


  export const CountryScalarFieldEnum: {
    countryName: 'countryName',
    language: 'language',
    region: 'region'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    admNo: 'admNo',
    studName: 'studName',
    gender: 'gender',
    address: 'address',
    mobilePhone: 'mobilePhone',
    homePhone: 'homePhone',
    dob: 'dob',
    nationality: 'nationality',
    crseCode: 'crseCode'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const StudModPerformanceScalarFieldEnum: {
    admNo: 'admNo',
    modRegistered: 'modRegistered',
    mark: 'mark',
    grade: 'grade'
  };

  export type StudModPerformanceScalarFieldEnum = (typeof StudModPerformanceScalarFieldEnum)[keyof typeof StudModPerformanceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    crseCode?: StringFilter<"course"> | string
    crseName?: StringFilter<"course"> | string
    offeredBy?: StringFilter<"course"> | string
    crseFee?: DecimalFilter<"course"> | Decimal | DecimalJsLike | number | string
    labFee?: DecimalNullableFilter<"course"> | Decimal | DecimalJsLike | number | string | null
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
    student?: StudentListRelationFilter
  }

  export type courseOrderByWithRelationInput = {
    crseCode?: SortOrder
    crseName?: SortOrder
    offeredBy?: SortOrder
    crseFee?: SortOrder
    labFee?: SortOrderInput | SortOrder
    department?: departmentOrderByWithRelationInput
    student?: studentOrderByRelationAggregateInput
  }

  export type courseWhereUniqueInput = Prisma.AtLeast<{
    crseCode?: string
    AND?: courseWhereInput | courseWhereInput[]
    OR?: courseWhereInput[]
    NOT?: courseWhereInput | courseWhereInput[]
    crseName?: StringFilter<"course"> | string
    offeredBy?: StringFilter<"course"> | string
    crseFee?: DecimalFilter<"course"> | Decimal | DecimalJsLike | number | string
    labFee?: DecimalNullableFilter<"course"> | Decimal | DecimalJsLike | number | string | null
    department?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
    student?: StudentListRelationFilter
  }, "crseCode">

  export type courseOrderByWithAggregationInput = {
    crseCode?: SortOrder
    crseName?: SortOrder
    offeredBy?: SortOrder
    crseFee?: SortOrder
    labFee?: SortOrderInput | SortOrder
    _count?: courseCountOrderByAggregateInput
    _avg?: courseAvgOrderByAggregateInput
    _max?: courseMaxOrderByAggregateInput
    _min?: courseMinOrderByAggregateInput
    _sum?: courseSumOrderByAggregateInput
  }

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    OR?: courseScalarWhereWithAggregatesInput[]
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[]
    crseCode?: StringWithAggregatesFilter<"course"> | string
    crseName?: StringWithAggregatesFilter<"course"> | string
    offeredBy?: StringWithAggregatesFilter<"course"> | string
    crseFee?: DecimalWithAggregatesFilter<"course"> | Decimal | DecimalJsLike | number | string
    labFee?: DecimalNullableWithAggregatesFilter<"course"> | Decimal | DecimalJsLike | number | string | null
  }

  export type departmentWhereInput = {
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    deptCode?: StringFilter<"department"> | string
    deptName?: StringFilter<"department"> | string
    hod?: StringFilter<"department"> | string
    noOfStaff?: IntNullableFilter<"department"> | number | null
    maxStaffStrength?: IntNullableFilter<"department"> | number | null
    budget?: DecimalNullableFilter<"department"> | Decimal | DecimalJsLike | number | string | null
    expenditure?: DecimalNullableFilter<"department"> | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: DateTimeNullableFilter<"department"> | Date | string | null
    departmentHodToStaff?: XOR<StaffScalarRelationFilter, staffWhereInput>
    staffDeptCodToDepartment?: StaffListRelationFilter
    course?: CourseListRelationFilter
  }

  export type departmentOrderByWithRelationInput = {
    deptCode?: SortOrder
    deptName?: SortOrder
    hod?: SortOrder
    noOfStaff?: SortOrderInput | SortOrder
    maxStaffStrength?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    expenditure?: SortOrderInput | SortOrder
    hodApptDate?: SortOrderInput | SortOrder
    departmentHodToStaff?: staffOrderByWithRelationInput
    staffDeptCodToDepartment?: staffOrderByRelationAggregateInput
    course?: courseOrderByRelationAggregateInput
  }

  export type departmentWhereUniqueInput = Prisma.AtLeast<{
    deptCode?: string
    AND?: departmentWhereInput | departmentWhereInput[]
    OR?: departmentWhereInput[]
    NOT?: departmentWhereInput | departmentWhereInput[]
    deptName?: StringFilter<"department"> | string
    hod?: StringFilter<"department"> | string
    noOfStaff?: IntNullableFilter<"department"> | number | null
    maxStaffStrength?: IntNullableFilter<"department"> | number | null
    budget?: DecimalNullableFilter<"department"> | Decimal | DecimalJsLike | number | string | null
    expenditure?: DecimalNullableFilter<"department"> | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: DateTimeNullableFilter<"department"> | Date | string | null
    departmentHodToStaff?: XOR<StaffScalarRelationFilter, staffWhereInput>
    staffDeptCodToDepartment?: StaffListRelationFilter
    course?: CourseListRelationFilter
  }, "deptCode">

  export type departmentOrderByWithAggregationInput = {
    deptCode?: SortOrder
    deptName?: SortOrder
    hod?: SortOrder
    noOfStaff?: SortOrderInput | SortOrder
    maxStaffStrength?: SortOrderInput | SortOrder
    budget?: SortOrderInput | SortOrder
    expenditure?: SortOrderInput | SortOrder
    hodApptDate?: SortOrderInput | SortOrder
    _count?: departmentCountOrderByAggregateInput
    _avg?: departmentAvgOrderByAggregateInput
    _max?: departmentMaxOrderByAggregateInput
    _min?: departmentMinOrderByAggregateInput
    _sum?: departmentSumOrderByAggregateInput
  }

  export type departmentScalarWhereWithAggregatesInput = {
    AND?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    OR?: departmentScalarWhereWithAggregatesInput[]
    NOT?: departmentScalarWhereWithAggregatesInput | departmentScalarWhereWithAggregatesInput[]
    deptCode?: StringWithAggregatesFilter<"department"> | string
    deptName?: StringWithAggregatesFilter<"department"> | string
    hod?: StringWithAggregatesFilter<"department"> | string
    noOfStaff?: IntNullableWithAggregatesFilter<"department"> | number | null
    maxStaffStrength?: IntNullableWithAggregatesFilter<"department"> | number | null
    budget?: DecimalNullableWithAggregatesFilter<"department"> | Decimal | DecimalJsLike | number | string | null
    expenditure?: DecimalNullableWithAggregatesFilter<"department"> | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: DateTimeNullableWithAggregatesFilter<"department"> | Date | string | null
  }

  export type staffWhereInput = {
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    staffNo?: StringFilter<"staff"> | string
    staffName?: StringFilter<"staff"> | string
    supervisorStaffNo?: StringNullableFilter<"staff"> | string | null
    dob?: DateTimeFilter<"staff"> | Date | string
    grade?: StringFilter<"staff"> | string
    maritalStatus?: StringFilter<"staff"> | string
    pay?: DecimalNullableFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    allowance?: DecimalNullableFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: DecimalNullableFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    gender?: StringFilter<"staff"> | string
    citizenship?: StringFilter<"staff"> | string
    joinYr?: IntFilter<"staff"> | number
    deptCode?: StringFilter<"staff"> | string
    typeOfEmployment?: StringFilter<"staff"> | string
    highestQln?: StringFilter<"staff"> | string
    designation?: StringFilter<"staff"> | string
    departmentHodToStaff?: DepartmentListRelationFilter
    staffDeptCodeToDepartment?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
    staffDependent?: StaffDependentListRelationFilter
    module?: ModuleListRelationFilter
  }

  export type staffOrderByWithRelationInput = {
    staffNo?: SortOrder
    staffName?: SortOrder
    supervisorStaffNo?: SortOrderInput | SortOrder
    dob?: SortOrder
    grade?: SortOrder
    maritalStatus?: SortOrder
    pay?: SortOrderInput | SortOrder
    allowance?: SortOrderInput | SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    gender?: SortOrder
    citizenship?: SortOrder
    joinYr?: SortOrder
    deptCode?: SortOrder
    typeOfEmployment?: SortOrder
    highestQln?: SortOrder
    designation?: SortOrder
    departmentHodToStaff?: departmentOrderByRelationAggregateInput
    staffDeptCodeToDepartment?: departmentOrderByWithRelationInput
    staffDependent?: staffDependentOrderByRelationAggregateInput
    module?: moduleOrderByRelationAggregateInput
  }

  export type staffWhereUniqueInput = Prisma.AtLeast<{
    staffNo?: string
    AND?: staffWhereInput | staffWhereInput[]
    OR?: staffWhereInput[]
    NOT?: staffWhereInput | staffWhereInput[]
    staffName?: StringFilter<"staff"> | string
    supervisorStaffNo?: StringNullableFilter<"staff"> | string | null
    dob?: DateTimeFilter<"staff"> | Date | string
    grade?: StringFilter<"staff"> | string
    maritalStatus?: StringFilter<"staff"> | string
    pay?: DecimalNullableFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    allowance?: DecimalNullableFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: DecimalNullableFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    gender?: StringFilter<"staff"> | string
    citizenship?: StringFilter<"staff"> | string
    joinYr?: IntFilter<"staff"> | number
    deptCode?: StringFilter<"staff"> | string
    typeOfEmployment?: StringFilter<"staff"> | string
    highestQln?: StringFilter<"staff"> | string
    designation?: StringFilter<"staff"> | string
    departmentHodToStaff?: DepartmentListRelationFilter
    staffDeptCodeToDepartment?: XOR<DepartmentScalarRelationFilter, departmentWhereInput>
    staffDependent?: StaffDependentListRelationFilter
    module?: ModuleListRelationFilter
  }, "staffNo">

  export type staffOrderByWithAggregationInput = {
    staffNo?: SortOrder
    staffName?: SortOrder
    supervisorStaffNo?: SortOrderInput | SortOrder
    dob?: SortOrder
    grade?: SortOrder
    maritalStatus?: SortOrder
    pay?: SortOrderInput | SortOrder
    allowance?: SortOrderInput | SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    gender?: SortOrder
    citizenship?: SortOrder
    joinYr?: SortOrder
    deptCode?: SortOrder
    typeOfEmployment?: SortOrder
    highestQln?: SortOrder
    designation?: SortOrder
    _count?: staffCountOrderByAggregateInput
    _avg?: staffAvgOrderByAggregateInput
    _max?: staffMaxOrderByAggregateInput
    _min?: staffMinOrderByAggregateInput
    _sum?: staffSumOrderByAggregateInput
  }

  export type staffScalarWhereWithAggregatesInput = {
    AND?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    OR?: staffScalarWhereWithAggregatesInput[]
    NOT?: staffScalarWhereWithAggregatesInput | staffScalarWhereWithAggregatesInput[]
    staffNo?: StringWithAggregatesFilter<"staff"> | string
    staffName?: StringWithAggregatesFilter<"staff"> | string
    supervisorStaffNo?: StringNullableWithAggregatesFilter<"staff"> | string | null
    dob?: DateTimeWithAggregatesFilter<"staff"> | Date | string
    grade?: StringWithAggregatesFilter<"staff"> | string
    maritalStatus?: StringWithAggregatesFilter<"staff"> | string
    pay?: DecimalNullableWithAggregatesFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    allowance?: DecimalNullableWithAggregatesFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: DecimalNullableWithAggregatesFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    gender?: StringWithAggregatesFilter<"staff"> | string
    citizenship?: StringWithAggregatesFilter<"staff"> | string
    joinYr?: IntWithAggregatesFilter<"staff"> | number
    deptCode?: StringWithAggregatesFilter<"staff"> | string
    typeOfEmployment?: StringWithAggregatesFilter<"staff"> | string
    highestQln?: StringWithAggregatesFilter<"staff"> | string
    designation?: StringWithAggregatesFilter<"staff"> | string
  }

  export type staffBackupWhereInput = {
    AND?: staffBackupWhereInput | staffBackupWhereInput[]
    OR?: staffBackupWhereInput[]
    NOT?: staffBackupWhereInput | staffBackupWhereInput[]
    staffNo?: StringFilter<"staffBackup"> | string
    staffName?: StringFilter<"staffBackup"> | string
    supervisor?: StringNullableFilter<"staffBackup"> | string | null
    dob?: DateTimeFilter<"staffBackup"> | Date | string
    grade?: StringFilter<"staffBackup"> | string
    maritalStatus?: StringFilter<"staffBackup"> | string
    pay?: DecimalNullableFilter<"staffBackup"> | Decimal | DecimalJsLike | number | string | null
    allowance?: DecimalNullableFilter<"staffBackup"> | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: DecimalNullableFilter<"staffBackup"> | Decimal | DecimalJsLike | number | string | null
    gender?: StringFilter<"staffBackup"> | string
    citizenship?: StringFilter<"staffBackup"> | string
    joinYr?: IntFilter<"staffBackup"> | number
    deptCode?: StringFilter<"staffBackup"> | string
    typeOfEmployment?: StringFilter<"staffBackup"> | string
    highestQln?: StringFilter<"staffBackup"> | string
    designation?: StringFilter<"staffBackup"> | string
  }

  export type staffBackupOrderByWithRelationInput = {
    staffNo?: SortOrder
    staffName?: SortOrder
    supervisor?: SortOrderInput | SortOrder
    dob?: SortOrder
    grade?: SortOrder
    maritalStatus?: SortOrder
    pay?: SortOrderInput | SortOrder
    allowance?: SortOrderInput | SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    gender?: SortOrder
    citizenship?: SortOrder
    joinYr?: SortOrder
    deptCode?: SortOrder
    typeOfEmployment?: SortOrder
    highestQln?: SortOrder
    designation?: SortOrder
  }

  export type staffBackupWhereUniqueInput = Prisma.AtLeast<{
    staffNo?: string
    AND?: staffBackupWhereInput | staffBackupWhereInput[]
    OR?: staffBackupWhereInput[]
    NOT?: staffBackupWhereInput | staffBackupWhereInput[]
    staffName?: StringFilter<"staffBackup"> | string
    supervisor?: StringNullableFilter<"staffBackup"> | string | null
    dob?: DateTimeFilter<"staffBackup"> | Date | string
    grade?: StringFilter<"staffBackup"> | string
    maritalStatus?: StringFilter<"staffBackup"> | string
    pay?: DecimalNullableFilter<"staffBackup"> | Decimal | DecimalJsLike | number | string | null
    allowance?: DecimalNullableFilter<"staffBackup"> | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: DecimalNullableFilter<"staffBackup"> | Decimal | DecimalJsLike | number | string | null
    gender?: StringFilter<"staffBackup"> | string
    citizenship?: StringFilter<"staffBackup"> | string
    joinYr?: IntFilter<"staffBackup"> | number
    deptCode?: StringFilter<"staffBackup"> | string
    typeOfEmployment?: StringFilter<"staffBackup"> | string
    highestQln?: StringFilter<"staffBackup"> | string
    designation?: StringFilter<"staffBackup"> | string
  }, "staffNo">

  export type staffBackupOrderByWithAggregationInput = {
    staffNo?: SortOrder
    staffName?: SortOrder
    supervisor?: SortOrderInput | SortOrder
    dob?: SortOrder
    grade?: SortOrder
    maritalStatus?: SortOrder
    pay?: SortOrderInput | SortOrder
    allowance?: SortOrderInput | SortOrder
    hourlyRate?: SortOrderInput | SortOrder
    gender?: SortOrder
    citizenship?: SortOrder
    joinYr?: SortOrder
    deptCode?: SortOrder
    typeOfEmployment?: SortOrder
    highestQln?: SortOrder
    designation?: SortOrder
    _count?: staffBackupCountOrderByAggregateInput
    _avg?: staffBackupAvgOrderByAggregateInput
    _max?: staffBackupMaxOrderByAggregateInput
    _min?: staffBackupMinOrderByAggregateInput
    _sum?: staffBackupSumOrderByAggregateInput
  }

  export type staffBackupScalarWhereWithAggregatesInput = {
    AND?: staffBackupScalarWhereWithAggregatesInput | staffBackupScalarWhereWithAggregatesInput[]
    OR?: staffBackupScalarWhereWithAggregatesInput[]
    NOT?: staffBackupScalarWhereWithAggregatesInput | staffBackupScalarWhereWithAggregatesInput[]
    staffNo?: StringWithAggregatesFilter<"staffBackup"> | string
    staffName?: StringWithAggregatesFilter<"staffBackup"> | string
    supervisor?: StringNullableWithAggregatesFilter<"staffBackup"> | string | null
    dob?: DateTimeWithAggregatesFilter<"staffBackup"> | Date | string
    grade?: StringWithAggregatesFilter<"staffBackup"> | string
    maritalStatus?: StringWithAggregatesFilter<"staffBackup"> | string
    pay?: DecimalNullableWithAggregatesFilter<"staffBackup"> | Decimal | DecimalJsLike | number | string | null
    allowance?: DecimalNullableWithAggregatesFilter<"staffBackup"> | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: DecimalNullableWithAggregatesFilter<"staffBackup"> | Decimal | DecimalJsLike | number | string | null
    gender?: StringWithAggregatesFilter<"staffBackup"> | string
    citizenship?: StringWithAggregatesFilter<"staffBackup"> | string
    joinYr?: IntWithAggregatesFilter<"staffBackup"> | number
    deptCode?: StringWithAggregatesFilter<"staffBackup"> | string
    typeOfEmployment?: StringWithAggregatesFilter<"staffBackup"> | string
    highestQln?: StringWithAggregatesFilter<"staffBackup"> | string
    designation?: StringWithAggregatesFilter<"staffBackup"> | string
  }

  export type userAccountWhereInput = {
    AND?: userAccountWhereInput | userAccountWhereInput[]
    OR?: userAccountWhereInput[]
    NOT?: userAccountWhereInput | userAccountWhereInput[]
    id?: IntFilter<"userAccount"> | number
    accountNo?: StringFilter<"userAccount"> | string
    role?: IntFilter<"userAccount"> | number
    password?: StringFilter<"userAccount"> | string
  }

  export type userAccountOrderByWithRelationInput = {
    id?: SortOrder
    accountNo?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type userAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userAccountWhereInput | userAccountWhereInput[]
    OR?: userAccountWhereInput[]
    NOT?: userAccountWhereInput | userAccountWhereInput[]
    accountNo?: StringFilter<"userAccount"> | string
    role?: IntFilter<"userAccount"> | number
    password?: StringFilter<"userAccount"> | string
  }, "id">

  export type userAccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountNo?: SortOrder
    role?: SortOrder
    password?: SortOrder
    _count?: userAccountCountOrderByAggregateInput
    _avg?: userAccountAvgOrderByAggregateInput
    _max?: userAccountMaxOrderByAggregateInput
    _min?: userAccountMinOrderByAggregateInput
    _sum?: userAccountSumOrderByAggregateInput
  }

  export type userAccountScalarWhereWithAggregatesInput = {
    AND?: userAccountScalarWhereWithAggregatesInput | userAccountScalarWhereWithAggregatesInput[]
    OR?: userAccountScalarWhereWithAggregatesInput[]
    NOT?: userAccountScalarWhereWithAggregatesInput | userAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userAccount"> | number
    accountNo?: StringWithAggregatesFilter<"userAccount"> | string
    role?: IntWithAggregatesFilter<"userAccount"> | number
    password?: StringWithAggregatesFilter<"userAccount"> | string
  }

  export type userRoleWhereInput = {
    AND?: userRoleWhereInput | userRoleWhereInput[]
    OR?: userRoleWhereInput[]
    NOT?: userRoleWhereInput | userRoleWhereInput[]
    id?: IntFilter<"userRole"> | number
    name?: StringFilter<"userRole"> | string
  }

  export type userRoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type userRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userRoleWhereInput | userRoleWhereInput[]
    OR?: userRoleWhereInput[]
    NOT?: userRoleWhereInput | userRoleWhereInput[]
    name?: StringFilter<"userRole"> | string
  }, "id">

  export type userRoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: userRoleCountOrderByAggregateInput
    _avg?: userRoleAvgOrderByAggregateInput
    _max?: userRoleMaxOrderByAggregateInput
    _min?: userRoleMinOrderByAggregateInput
    _sum?: userRoleSumOrderByAggregateInput
  }

  export type userRoleScalarWhereWithAggregatesInput = {
    AND?: userRoleScalarWhereWithAggregatesInput | userRoleScalarWhereWithAggregatesInput[]
    OR?: userRoleScalarWhereWithAggregatesInput[]
    NOT?: userRoleScalarWhereWithAggregatesInput | userRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"userRole"> | number
    name?: StringWithAggregatesFilter<"userRole"> | string
  }

  export type moduleWhereInput = {
    AND?: moduleWhereInput | moduleWhereInput[]
    OR?: moduleWhereInput[]
    NOT?: moduleWhereInput | moduleWhereInput[]
    modCode?: StringFilter<"module"> | string
    modName?: StringFilter<"module"> | string
    creditUnit?: IntFilter<"module"> | number
    modCoord?: StringNullableFilter<"module"> | string | null
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    preRequisiteModCodeToModule?: PreRequisiteListRelationFilter
    preRequisiteRequisiteToModule?: PreRequisiteListRelationFilter
    studModPerformance?: StudModPerformanceListRelationFilter
  }

  export type moduleOrderByWithRelationInput = {
    modCode?: SortOrder
    modName?: SortOrder
    creditUnit?: SortOrder
    modCoord?: SortOrderInput | SortOrder
    staff?: staffOrderByWithRelationInput
    preRequisiteModCodeToModule?: preRequisiteOrderByRelationAggregateInput
    preRequisiteRequisiteToModule?: preRequisiteOrderByRelationAggregateInput
    studModPerformance?: studModPerformanceOrderByRelationAggregateInput
  }

  export type moduleWhereUniqueInput = Prisma.AtLeast<{
    modCode?: string
    AND?: moduleWhereInput | moduleWhereInput[]
    OR?: moduleWhereInput[]
    NOT?: moduleWhereInput | moduleWhereInput[]
    modName?: StringFilter<"module"> | string
    creditUnit?: IntFilter<"module"> | number
    modCoord?: StringNullableFilter<"module"> | string | null
    staff?: XOR<StaffNullableScalarRelationFilter, staffWhereInput> | null
    preRequisiteModCodeToModule?: PreRequisiteListRelationFilter
    preRequisiteRequisiteToModule?: PreRequisiteListRelationFilter
    studModPerformance?: StudModPerformanceListRelationFilter
  }, "modCode">

  export type moduleOrderByWithAggregationInput = {
    modCode?: SortOrder
    modName?: SortOrder
    creditUnit?: SortOrder
    modCoord?: SortOrderInput | SortOrder
    _count?: moduleCountOrderByAggregateInput
    _avg?: moduleAvgOrderByAggregateInput
    _max?: moduleMaxOrderByAggregateInput
    _min?: moduleMinOrderByAggregateInput
    _sum?: moduleSumOrderByAggregateInput
  }

  export type moduleScalarWhereWithAggregatesInput = {
    AND?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[]
    OR?: moduleScalarWhereWithAggregatesInput[]
    NOT?: moduleScalarWhereWithAggregatesInput | moduleScalarWhereWithAggregatesInput[]
    modCode?: StringWithAggregatesFilter<"module"> | string
    modName?: StringWithAggregatesFilter<"module"> | string
    creditUnit?: IntWithAggregatesFilter<"module"> | number
    modCoord?: StringNullableWithAggregatesFilter<"module"> | string | null
  }

  export type staffDependentWhereInput = {
    AND?: staffDependentWhereInput | staffDependentWhereInput[]
    OR?: staffDependentWhereInput[]
    NOT?: staffDependentWhereInput | staffDependentWhereInput[]
    staffNo?: StringFilter<"staffDependent"> | string
    dependentName?: StringFilter<"staffDependent"> | string
    relationship?: StringFilter<"staffDependent"> | string
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }

  export type staffDependentOrderByWithRelationInput = {
    staffNo?: SortOrder
    dependentName?: SortOrder
    relationship?: SortOrder
    staff?: staffOrderByWithRelationInput
  }

  export type staffDependentWhereUniqueInput = Prisma.AtLeast<{
    staffNo_dependentName?: staffDependentStaffNoDependentNameCompoundUniqueInput
    AND?: staffDependentWhereInput | staffDependentWhereInput[]
    OR?: staffDependentWhereInput[]
    NOT?: staffDependentWhereInput | staffDependentWhereInput[]
    staffNo?: StringFilter<"staffDependent"> | string
    dependentName?: StringFilter<"staffDependent"> | string
    relationship?: StringFilter<"staffDependent"> | string
    staff?: XOR<StaffScalarRelationFilter, staffWhereInput>
  }, "staffNo_dependentName">

  export type staffDependentOrderByWithAggregationInput = {
    staffNo?: SortOrder
    dependentName?: SortOrder
    relationship?: SortOrder
    _count?: staffDependentCountOrderByAggregateInput
    _max?: staffDependentMaxOrderByAggregateInput
    _min?: staffDependentMinOrderByAggregateInput
  }

  export type staffDependentScalarWhereWithAggregatesInput = {
    AND?: staffDependentScalarWhereWithAggregatesInput | staffDependentScalarWhereWithAggregatesInput[]
    OR?: staffDependentScalarWhereWithAggregatesInput[]
    NOT?: staffDependentScalarWhereWithAggregatesInput | staffDependentScalarWhereWithAggregatesInput[]
    staffNo?: StringWithAggregatesFilter<"staffDependent"> | string
    dependentName?: StringWithAggregatesFilter<"staffDependent"> | string
    relationship?: StringWithAggregatesFilter<"staffDependent"> | string
  }

  export type preRequisiteWhereInput = {
    AND?: preRequisiteWhereInput | preRequisiteWhereInput[]
    OR?: preRequisiteWhereInput[]
    NOT?: preRequisiteWhereInput | preRequisiteWhereInput[]
    modCode?: StringFilter<"preRequisite"> | string
    requisite?: StringFilter<"preRequisite"> | string
    preRequisiteModCodeToModule?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
    preRequisiteRequisiteToModule?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
  }

  export type preRequisiteOrderByWithRelationInput = {
    modCode?: SortOrder
    requisite?: SortOrder
    preRequisiteModCodeToModule?: moduleOrderByWithRelationInput
    preRequisiteRequisiteToModule?: moduleOrderByWithRelationInput
  }

  export type preRequisiteWhereUniqueInput = Prisma.AtLeast<{
    modCode_requisite?: preRequisiteModCodeRequisiteCompoundUniqueInput
    AND?: preRequisiteWhereInput | preRequisiteWhereInput[]
    OR?: preRequisiteWhereInput[]
    NOT?: preRequisiteWhereInput | preRequisiteWhereInput[]
    modCode?: StringFilter<"preRequisite"> | string
    requisite?: StringFilter<"preRequisite"> | string
    preRequisiteModCodeToModule?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
    preRequisiteRequisiteToModule?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
  }, "modCode_requisite">

  export type preRequisiteOrderByWithAggregationInput = {
    modCode?: SortOrder
    requisite?: SortOrder
    _count?: preRequisiteCountOrderByAggregateInput
    _max?: preRequisiteMaxOrderByAggregateInput
    _min?: preRequisiteMinOrderByAggregateInput
  }

  export type preRequisiteScalarWhereWithAggregatesInput = {
    AND?: preRequisiteScalarWhereWithAggregatesInput | preRequisiteScalarWhereWithAggregatesInput[]
    OR?: preRequisiteScalarWhereWithAggregatesInput[]
    NOT?: preRequisiteScalarWhereWithAggregatesInput | preRequisiteScalarWhereWithAggregatesInput[]
    modCode?: StringWithAggregatesFilter<"preRequisite"> | string
    requisite?: StringWithAggregatesFilter<"preRequisite"> | string
  }

  export type countryWhereInput = {
    AND?: countryWhereInput | countryWhereInput[]
    OR?: countryWhereInput[]
    NOT?: countryWhereInput | countryWhereInput[]
    countryName?: StringFilter<"country"> | string
    language?: StringFilter<"country"> | string
    region?: StringFilter<"country"> | string
    student?: StudentListRelationFilter
  }

  export type countryOrderByWithRelationInput = {
    countryName?: SortOrder
    language?: SortOrder
    region?: SortOrder
    student?: studentOrderByRelationAggregateInput
  }

  export type countryWhereUniqueInput = Prisma.AtLeast<{
    countryName?: string
    AND?: countryWhereInput | countryWhereInput[]
    OR?: countryWhereInput[]
    NOT?: countryWhereInput | countryWhereInput[]
    language?: StringFilter<"country"> | string
    region?: StringFilter<"country"> | string
    student?: StudentListRelationFilter
  }, "countryName">

  export type countryOrderByWithAggregationInput = {
    countryName?: SortOrder
    language?: SortOrder
    region?: SortOrder
    _count?: countryCountOrderByAggregateInput
    _max?: countryMaxOrderByAggregateInput
    _min?: countryMinOrderByAggregateInput
  }

  export type countryScalarWhereWithAggregatesInput = {
    AND?: countryScalarWhereWithAggregatesInput | countryScalarWhereWithAggregatesInput[]
    OR?: countryScalarWhereWithAggregatesInput[]
    NOT?: countryScalarWhereWithAggregatesInput | countryScalarWhereWithAggregatesInput[]
    countryName?: StringWithAggregatesFilter<"country"> | string
    language?: StringWithAggregatesFilter<"country"> | string
    region?: StringWithAggregatesFilter<"country"> | string
  }

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    admNo?: StringFilter<"student"> | string
    studName?: StringFilter<"student"> | string
    gender?: StringFilter<"student"> | string
    address?: StringFilter<"student"> | string
    mobilePhone?: StringFilter<"student"> | string
    homePhone?: StringFilter<"student"> | string
    dob?: DateTimeFilter<"student"> | Date | string
    nationality?: StringFilter<"student"> | string
    crseCode?: StringFilter<"student"> | string
    country?: XOR<CountryScalarRelationFilter, countryWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    studModPerformance?: StudModPerformanceListRelationFilter
  }

  export type studentOrderByWithRelationInput = {
    admNo?: SortOrder
    studName?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    mobilePhone?: SortOrder
    homePhone?: SortOrder
    dob?: SortOrder
    nationality?: SortOrder
    crseCode?: SortOrder
    country?: countryOrderByWithRelationInput
    course?: courseOrderByWithRelationInput
    studModPerformance?: studModPerformanceOrderByRelationAggregateInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    admNo?: string
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    studName?: StringFilter<"student"> | string
    gender?: StringFilter<"student"> | string
    address?: StringFilter<"student"> | string
    mobilePhone?: StringFilter<"student"> | string
    homePhone?: StringFilter<"student"> | string
    dob?: DateTimeFilter<"student"> | Date | string
    nationality?: StringFilter<"student"> | string
    crseCode?: StringFilter<"student"> | string
    country?: XOR<CountryScalarRelationFilter, countryWhereInput>
    course?: XOR<CourseScalarRelationFilter, courseWhereInput>
    studModPerformance?: StudModPerformanceListRelationFilter
  }, "admNo">

  export type studentOrderByWithAggregationInput = {
    admNo?: SortOrder
    studName?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    mobilePhone?: SortOrder
    homePhone?: SortOrder
    dob?: SortOrder
    nationality?: SortOrder
    crseCode?: SortOrder
    _count?: studentCountOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    admNo?: StringWithAggregatesFilter<"student"> | string
    studName?: StringWithAggregatesFilter<"student"> | string
    gender?: StringWithAggregatesFilter<"student"> | string
    address?: StringWithAggregatesFilter<"student"> | string
    mobilePhone?: StringWithAggregatesFilter<"student"> | string
    homePhone?: StringWithAggregatesFilter<"student"> | string
    dob?: DateTimeWithAggregatesFilter<"student"> | Date | string
    nationality?: StringWithAggregatesFilter<"student"> | string
    crseCode?: StringWithAggregatesFilter<"student"> | string
  }

  export type studModPerformanceWhereInput = {
    AND?: studModPerformanceWhereInput | studModPerformanceWhereInput[]
    OR?: studModPerformanceWhereInput[]
    NOT?: studModPerformanceWhereInput | studModPerformanceWhereInput[]
    admNo?: StringFilter<"studModPerformance"> | string
    modRegistered?: StringFilter<"studModPerformance"> | string
    mark?: IntFilter<"studModPerformance"> | number
    grade?: StringFilter<"studModPerformance"> | string
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    module?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
  }

  export type studModPerformanceOrderByWithRelationInput = {
    admNo?: SortOrder
    modRegistered?: SortOrder
    mark?: SortOrder
    grade?: SortOrder
    student?: studentOrderByWithRelationInput
    module?: moduleOrderByWithRelationInput
  }

  export type studModPerformanceWhereUniqueInput = Prisma.AtLeast<{
    admNo_modRegistered?: studModPerformanceAdmNoModRegisteredCompoundUniqueInput
    AND?: studModPerformanceWhereInput | studModPerformanceWhereInput[]
    OR?: studModPerformanceWhereInput[]
    NOT?: studModPerformanceWhereInput | studModPerformanceWhereInput[]
    admNo?: StringFilter<"studModPerformance"> | string
    modRegistered?: StringFilter<"studModPerformance"> | string
    mark?: IntFilter<"studModPerformance"> | number
    grade?: StringFilter<"studModPerformance"> | string
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
    module?: XOR<ModuleScalarRelationFilter, moduleWhereInput>
  }, "admNo_modRegistered">

  export type studModPerformanceOrderByWithAggregationInput = {
    admNo?: SortOrder
    modRegistered?: SortOrder
    mark?: SortOrder
    grade?: SortOrder
    _count?: studModPerformanceCountOrderByAggregateInput
    _avg?: studModPerformanceAvgOrderByAggregateInput
    _max?: studModPerformanceMaxOrderByAggregateInput
    _min?: studModPerformanceMinOrderByAggregateInput
    _sum?: studModPerformanceSumOrderByAggregateInput
  }

  export type studModPerformanceScalarWhereWithAggregatesInput = {
    AND?: studModPerformanceScalarWhereWithAggregatesInput | studModPerformanceScalarWhereWithAggregatesInput[]
    OR?: studModPerformanceScalarWhereWithAggregatesInput[]
    NOT?: studModPerformanceScalarWhereWithAggregatesInput | studModPerformanceScalarWhereWithAggregatesInput[]
    admNo?: StringWithAggregatesFilter<"studModPerformance"> | string
    modRegistered?: StringWithAggregatesFilter<"studModPerformance"> | string
    mark?: IntWithAggregatesFilter<"studModPerformance"> | number
    grade?: StringWithAggregatesFilter<"studModPerformance"> | string
  }

  export type courseCreateInput = {
    crseCode: string
    crseName: string
    crseFee: Decimal | DecimalJsLike | number | string
    labFee?: Decimal | DecimalJsLike | number | string | null
    department: departmentCreateNestedOneWithoutCourseInput
    student?: studentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateInput = {
    crseCode: string
    crseName: string
    offeredBy: string
    crseFee: Decimal | DecimalJsLike | number | string
    labFee?: Decimal | DecimalJsLike | number | string | null
    student?: studentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseUpdateInput = {
    crseCode?: StringFieldUpdateOperationsInput | string
    crseName?: StringFieldUpdateOperationsInput | string
    crseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    department?: departmentUpdateOneRequiredWithoutCourseNestedInput
    student?: studentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateInput = {
    crseCode?: StringFieldUpdateOperationsInput | string
    crseName?: StringFieldUpdateOperationsInput | string
    offeredBy?: StringFieldUpdateOperationsInput | string
    crseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    student?: studentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseCreateManyInput = {
    crseCode: string
    crseName: string
    offeredBy: string
    crseFee: Decimal | DecimalJsLike | number | string
    labFee?: Decimal | DecimalJsLike | number | string | null
  }

  export type courseUpdateManyMutationInput = {
    crseCode?: StringFieldUpdateOperationsInput | string
    crseName?: StringFieldUpdateOperationsInput | string
    crseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type courseUncheckedUpdateManyInput = {
    crseCode?: StringFieldUpdateOperationsInput | string
    crseName?: StringFieldUpdateOperationsInput | string
    offeredBy?: StringFieldUpdateOperationsInput | string
    crseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type departmentCreateInput = {
    deptCode: string
    deptName: string
    noOfStaff?: number | null
    maxStaffStrength?: number | null
    budget?: Decimal | DecimalJsLike | number | string | null
    expenditure?: Decimal | DecimalJsLike | number | string | null
    hodApptDate?: Date | string | null
    departmentHodToStaff: staffCreateNestedOneWithoutDepartmentHodToStaffInput
    staffDeptCodToDepartment?: staffCreateNestedManyWithoutStaffDeptCodeToDepartmentInput
    course?: courseCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUncheckedCreateInput = {
    deptCode: string
    deptName: string
    hod: string
    noOfStaff?: number | null
    maxStaffStrength?: number | null
    budget?: Decimal | DecimalJsLike | number | string | null
    expenditure?: Decimal | DecimalJsLike | number | string | null
    hodApptDate?: Date | string | null
    staffDeptCodToDepartment?: staffUncheckedCreateNestedManyWithoutStaffDeptCodeToDepartmentInput
    course?: courseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUpdateInput = {
    deptCode?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    noOfStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaffStrength?: NullableIntFieldUpdateOperationsInput | number | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentHodToStaff?: staffUpdateOneRequiredWithoutDepartmentHodToStaffNestedInput
    staffDeptCodToDepartment?: staffUpdateManyWithoutStaffDeptCodeToDepartmentNestedInput
    course?: courseUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateInput = {
    deptCode?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    hod?: StringFieldUpdateOperationsInput | string
    noOfStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaffStrength?: NullableIntFieldUpdateOperationsInput | number | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staffDeptCodToDepartment?: staffUncheckedUpdateManyWithoutStaffDeptCodeToDepartmentNestedInput
    course?: courseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentCreateManyInput = {
    deptCode: string
    deptName: string
    hod: string
    noOfStaff?: number | null
    maxStaffStrength?: number | null
    budget?: Decimal | DecimalJsLike | number | string | null
    expenditure?: Decimal | DecimalJsLike | number | string | null
    hodApptDate?: Date | string | null
  }

  export type departmentUpdateManyMutationInput = {
    deptCode?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    noOfStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaffStrength?: NullableIntFieldUpdateOperationsInput | number | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type departmentUncheckedUpdateManyInput = {
    deptCode?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    hod?: StringFieldUpdateOperationsInput | string
    noOfStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaffStrength?: NullableIntFieldUpdateOperationsInput | number | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffCreateInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    typeOfEmployment: string
    highestQln: string
    designation: string
    departmentHodToStaff?: departmentCreateNestedManyWithoutDepartmentHodToStaffInput
    staffDeptCodeToDepartment: departmentCreateNestedOneWithoutStaffDeptCodToDepartmentInput
    staffDependent?: staffDependentCreateNestedManyWithoutStaffInput
    module?: moduleCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    deptCode: string
    typeOfEmployment: string
    highestQln: string
    designation: string
    departmentHodToStaff?: departmentUncheckedCreateNestedManyWithoutDepartmentHodToStaffInput
    staffDependent?: staffDependentUncheckedCreateNestedManyWithoutStaffInput
    module?: moduleUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffUpdateInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    departmentHodToStaff?: departmentUpdateManyWithoutDepartmentHodToStaffNestedInput
    staffDeptCodeToDepartment?: departmentUpdateOneRequiredWithoutStaffDeptCodToDepartmentNestedInput
    staffDependent?: staffDependentUpdateManyWithoutStaffNestedInput
    module?: moduleUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    deptCode?: StringFieldUpdateOperationsInput | string
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    departmentHodToStaff?: departmentUncheckedUpdateManyWithoutDepartmentHodToStaffNestedInput
    staffDependent?: staffDependentUncheckedUpdateManyWithoutStaffNestedInput
    module?: moduleUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffCreateManyInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    deptCode: string
    typeOfEmployment: string
    highestQln: string
    designation: string
  }

  export type staffUpdateManyMutationInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
  }

  export type staffUncheckedUpdateManyInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    deptCode?: StringFieldUpdateOperationsInput | string
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
  }

  export type staffBackupCreateInput = {
    staffNo: string
    staffName: string
    supervisor?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    deptCode: string
    typeOfEmployment: string
    highestQln: string
    designation: string
  }

  export type staffBackupUncheckedCreateInput = {
    staffNo: string
    staffName: string
    supervisor?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    deptCode: string
    typeOfEmployment: string
    highestQln: string
    designation: string
  }

  export type staffBackupUpdateInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisor?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    deptCode?: StringFieldUpdateOperationsInput | string
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
  }

  export type staffBackupUncheckedUpdateInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisor?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    deptCode?: StringFieldUpdateOperationsInput | string
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
  }

  export type staffBackupCreateManyInput = {
    staffNo: string
    staffName: string
    supervisor?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    deptCode: string
    typeOfEmployment: string
    highestQln: string
    designation: string
  }

  export type staffBackupUpdateManyMutationInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisor?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    deptCode?: StringFieldUpdateOperationsInput | string
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
  }

  export type staffBackupUncheckedUpdateManyInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisor?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    deptCode?: StringFieldUpdateOperationsInput | string
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
  }

  export type userAccountCreateInput = {
    id: number
    accountNo: string
    role: number
    password: string
  }

  export type userAccountUncheckedCreateInput = {
    id: number
    accountNo: string
    role: number
    password: string
  }

  export type userAccountUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountNo?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountNo?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userAccountCreateManyInput = {
    id: number
    accountNo: string
    role: number
    password: string
  }

  export type userAccountUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountNo?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountNo?: StringFieldUpdateOperationsInput | string
    role?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userRoleCreateInput = {
    id: number
    name: string
  }

  export type userRoleUncheckedCreateInput = {
    id: number
    name: string
  }

  export type userRoleUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userRoleCreateManyInput = {
    id: number
    name: string
  }

  export type userRoleUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type userRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type moduleCreateInput = {
    modCode: string
    modName: string
    creditUnit: number
    staff?: staffCreateNestedOneWithoutModuleInput
    preRequisiteModCodeToModule?: preRequisiteCreateNestedManyWithoutPreRequisiteModCodeToModuleInput
    preRequisiteRequisiteToModule?: preRequisiteCreateNestedManyWithoutPreRequisiteRequisiteToModuleInput
    studModPerformance?: studModPerformanceCreateNestedManyWithoutModuleInput
  }

  export type moduleUncheckedCreateInput = {
    modCode: string
    modName: string
    creditUnit: number
    modCoord?: string | null
    preRequisiteModCodeToModule?: preRequisiteUncheckedCreateNestedManyWithoutPreRequisiteModCodeToModuleInput
    preRequisiteRequisiteToModule?: preRequisiteUncheckedCreateNestedManyWithoutPreRequisiteRequisiteToModuleInput
    studModPerformance?: studModPerformanceUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleUpdateInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
    staff?: staffUpdateOneWithoutModuleNestedInput
    preRequisiteModCodeToModule?: preRequisiteUpdateManyWithoutPreRequisiteModCodeToModuleNestedInput
    preRequisiteRequisiteToModule?: preRequisiteUpdateManyWithoutPreRequisiteRequisiteToModuleNestedInput
    studModPerformance?: studModPerformanceUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
    modCoord?: NullableStringFieldUpdateOperationsInput | string | null
    preRequisiteModCodeToModule?: preRequisiteUncheckedUpdateManyWithoutPreRequisiteModCodeToModuleNestedInput
    preRequisiteRequisiteToModule?: preRequisiteUncheckedUpdateManyWithoutPreRequisiteRequisiteToModuleNestedInput
    studModPerformance?: studModPerformanceUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type moduleCreateManyInput = {
    modCode: string
    modName: string
    creditUnit: number
    modCoord?: string | null
  }

  export type moduleUpdateManyMutationInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
  }

  export type moduleUncheckedUpdateManyInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
    modCoord?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type staffDependentCreateInput = {
    dependentName: string
    relationship?: string
    staff: staffCreateNestedOneWithoutStaffDependentInput
  }

  export type staffDependentUncheckedCreateInput = {
    staffNo: string
    dependentName: string
    relationship?: string
  }

  export type staffDependentUpdateInput = {
    dependentName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
    staff?: staffUpdateOneRequiredWithoutStaffDependentNestedInput
  }

  export type staffDependentUncheckedUpdateInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    dependentName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
  }

  export type staffDependentCreateManyInput = {
    staffNo: string
    dependentName: string
    relationship?: string
  }

  export type staffDependentUpdateManyMutationInput = {
    dependentName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
  }

  export type staffDependentUncheckedUpdateManyInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    dependentName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
  }

  export type preRequisiteCreateInput = {
    preRequisiteModCodeToModule: moduleCreateNestedOneWithoutPreRequisiteModCodeToModuleInput
    preRequisiteRequisiteToModule: moduleCreateNestedOneWithoutPreRequisiteRequisiteToModuleInput
  }

  export type preRequisiteUncheckedCreateInput = {
    modCode: string
    requisite: string
  }

  export type preRequisiteUpdateInput = {
    preRequisiteModCodeToModule?: moduleUpdateOneRequiredWithoutPreRequisiteModCodeToModuleNestedInput
    preRequisiteRequisiteToModule?: moduleUpdateOneRequiredWithoutPreRequisiteRequisiteToModuleNestedInput
  }

  export type preRequisiteUncheckedUpdateInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    requisite?: StringFieldUpdateOperationsInput | string
  }

  export type preRequisiteCreateManyInput = {
    modCode: string
    requisite: string
  }

  export type preRequisiteUpdateManyMutationInput = {

  }

  export type preRequisiteUncheckedUpdateManyInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    requisite?: StringFieldUpdateOperationsInput | string
  }

  export type countryCreateInput = {
    countryName: string
    language: string
    region: string
    student?: studentCreateNestedManyWithoutCountryInput
  }

  export type countryUncheckedCreateInput = {
    countryName: string
    language: string
    region: string
    student?: studentUncheckedCreateNestedManyWithoutCountryInput
  }

  export type countryUpdateInput = {
    countryName?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    student?: studentUpdateManyWithoutCountryNestedInput
  }

  export type countryUncheckedUpdateInput = {
    countryName?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    student?: studentUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type countryCreateManyInput = {
    countryName: string
    language: string
    region: string
  }

  export type countryUpdateManyMutationInput = {
    countryName?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type countryUncheckedUpdateManyInput = {
    countryName?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type studentCreateInput = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date | string
    country: countryCreateNestedOneWithoutStudentInput
    course: courseCreateNestedOneWithoutStudentInput
    studModPerformance?: studModPerformanceCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateInput = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date | string
    nationality: string
    crseCode: string
    studModPerformance?: studModPerformanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: countryUpdateOneRequiredWithoutStudentNestedInput
    course?: courseUpdateOneRequiredWithoutStudentNestedInput
    studModPerformance?: studModPerformanceUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    crseCode?: StringFieldUpdateOperationsInput | string
    studModPerformance?: studModPerformanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date | string
    nationality: string
    crseCode: string
  }

  export type studentUpdateManyMutationInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type studentUncheckedUpdateManyInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    crseCode?: StringFieldUpdateOperationsInput | string
  }

  export type studModPerformanceCreateInput = {
    mark: number
    grade: string
    student: studentCreateNestedOneWithoutStudModPerformanceInput
    module: moduleCreateNestedOneWithoutStudModPerformanceInput
  }

  export type studModPerformanceUncheckedCreateInput = {
    admNo: string
    modRegistered: string
    mark: number
    grade: string
  }

  export type studModPerformanceUpdateInput = {
    mark?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    student?: studentUpdateOneRequiredWithoutStudModPerformanceNestedInput
    module?: moduleUpdateOneRequiredWithoutStudModPerformanceNestedInput
  }

  export type studModPerformanceUncheckedUpdateInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    modRegistered?: StringFieldUpdateOperationsInput | string
    mark?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type studModPerformanceCreateManyInput = {
    admNo: string
    modRegistered: string
    mark: number
    grade: string
  }

  export type studModPerformanceUpdateManyMutationInput = {
    mark?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type studModPerformanceUncheckedUpdateManyInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    modRegistered?: StringFieldUpdateOperationsInput | string
    mark?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DepartmentScalarRelationFilter = {
    is?: departmentWhereInput
    isNot?: departmentWhereInput
  }

  export type StudentListRelationFilter = {
    every?: studentWhereInput
    some?: studentWhereInput
    none?: studentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type studentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type courseCountOrderByAggregateInput = {
    crseCode?: SortOrder
    crseName?: SortOrder
    offeredBy?: SortOrder
    crseFee?: SortOrder
    labFee?: SortOrder
  }

  export type courseAvgOrderByAggregateInput = {
    crseFee?: SortOrder
    labFee?: SortOrder
  }

  export type courseMaxOrderByAggregateInput = {
    crseCode?: SortOrder
    crseName?: SortOrder
    offeredBy?: SortOrder
    crseFee?: SortOrder
    labFee?: SortOrder
  }

  export type courseMinOrderByAggregateInput = {
    crseCode?: SortOrder
    crseName?: SortOrder
    offeredBy?: SortOrder
    crseFee?: SortOrder
    labFee?: SortOrder
  }

  export type courseSumOrderByAggregateInput = {
    crseFee?: SortOrder
    labFee?: SortOrder
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

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StaffScalarRelationFilter = {
    is?: staffWhereInput
    isNot?: staffWhereInput
  }

  export type StaffListRelationFilter = {
    every?: staffWhereInput
    some?: staffWhereInput
    none?: staffWhereInput
  }

  export type CourseListRelationFilter = {
    every?: courseWhereInput
    some?: courseWhereInput
    none?: courseWhereInput
  }

  export type staffOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type courseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type departmentCountOrderByAggregateInput = {
    deptCode?: SortOrder
    deptName?: SortOrder
    hod?: SortOrder
    noOfStaff?: SortOrder
    maxStaffStrength?: SortOrder
    budget?: SortOrder
    expenditure?: SortOrder
    hodApptDate?: SortOrder
  }

  export type departmentAvgOrderByAggregateInput = {
    noOfStaff?: SortOrder
    maxStaffStrength?: SortOrder
    budget?: SortOrder
    expenditure?: SortOrder
  }

  export type departmentMaxOrderByAggregateInput = {
    deptCode?: SortOrder
    deptName?: SortOrder
    hod?: SortOrder
    noOfStaff?: SortOrder
    maxStaffStrength?: SortOrder
    budget?: SortOrder
    expenditure?: SortOrder
    hodApptDate?: SortOrder
  }

  export type departmentMinOrderByAggregateInput = {
    deptCode?: SortOrder
    deptName?: SortOrder
    hod?: SortOrder
    noOfStaff?: SortOrder
    maxStaffStrength?: SortOrder
    budget?: SortOrder
    expenditure?: SortOrder
    hodApptDate?: SortOrder
  }

  export type departmentSumOrderByAggregateInput = {
    noOfStaff?: SortOrder
    maxStaffStrength?: SortOrder
    budget?: SortOrder
    expenditure?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type DepartmentListRelationFilter = {
    every?: departmentWhereInput
    some?: departmentWhereInput
    none?: departmentWhereInput
  }

  export type StaffDependentListRelationFilter = {
    every?: staffDependentWhereInput
    some?: staffDependentWhereInput
    none?: staffDependentWhereInput
  }

  export type ModuleListRelationFilter = {
    every?: moduleWhereInput
    some?: moduleWhereInput
    none?: moduleWhereInput
  }

  export type departmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type staffDependentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type moduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type staffCountOrderByAggregateInput = {
    staffNo?: SortOrder
    staffName?: SortOrder
    supervisorStaffNo?: SortOrder
    dob?: SortOrder
    grade?: SortOrder
    maritalStatus?: SortOrder
    pay?: SortOrder
    allowance?: SortOrder
    hourlyRate?: SortOrder
    gender?: SortOrder
    citizenship?: SortOrder
    joinYr?: SortOrder
    deptCode?: SortOrder
    typeOfEmployment?: SortOrder
    highestQln?: SortOrder
    designation?: SortOrder
  }

  export type staffAvgOrderByAggregateInput = {
    pay?: SortOrder
    allowance?: SortOrder
    hourlyRate?: SortOrder
    joinYr?: SortOrder
  }

  export type staffMaxOrderByAggregateInput = {
    staffNo?: SortOrder
    staffName?: SortOrder
    supervisorStaffNo?: SortOrder
    dob?: SortOrder
    grade?: SortOrder
    maritalStatus?: SortOrder
    pay?: SortOrder
    allowance?: SortOrder
    hourlyRate?: SortOrder
    gender?: SortOrder
    citizenship?: SortOrder
    joinYr?: SortOrder
    deptCode?: SortOrder
    typeOfEmployment?: SortOrder
    highestQln?: SortOrder
    designation?: SortOrder
  }

  export type staffMinOrderByAggregateInput = {
    staffNo?: SortOrder
    staffName?: SortOrder
    supervisorStaffNo?: SortOrder
    dob?: SortOrder
    grade?: SortOrder
    maritalStatus?: SortOrder
    pay?: SortOrder
    allowance?: SortOrder
    hourlyRate?: SortOrder
    gender?: SortOrder
    citizenship?: SortOrder
    joinYr?: SortOrder
    deptCode?: SortOrder
    typeOfEmployment?: SortOrder
    highestQln?: SortOrder
    designation?: SortOrder
  }

  export type staffSumOrderByAggregateInput = {
    pay?: SortOrder
    allowance?: SortOrder
    hourlyRate?: SortOrder
    joinYr?: SortOrder
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

  export type staffBackupCountOrderByAggregateInput = {
    staffNo?: SortOrder
    staffName?: SortOrder
    supervisor?: SortOrder
    dob?: SortOrder
    grade?: SortOrder
    maritalStatus?: SortOrder
    pay?: SortOrder
    allowance?: SortOrder
    hourlyRate?: SortOrder
    gender?: SortOrder
    citizenship?: SortOrder
    joinYr?: SortOrder
    deptCode?: SortOrder
    typeOfEmployment?: SortOrder
    highestQln?: SortOrder
    designation?: SortOrder
  }

  export type staffBackupAvgOrderByAggregateInput = {
    pay?: SortOrder
    allowance?: SortOrder
    hourlyRate?: SortOrder
    joinYr?: SortOrder
  }

  export type staffBackupMaxOrderByAggregateInput = {
    staffNo?: SortOrder
    staffName?: SortOrder
    supervisor?: SortOrder
    dob?: SortOrder
    grade?: SortOrder
    maritalStatus?: SortOrder
    pay?: SortOrder
    allowance?: SortOrder
    hourlyRate?: SortOrder
    gender?: SortOrder
    citizenship?: SortOrder
    joinYr?: SortOrder
    deptCode?: SortOrder
    typeOfEmployment?: SortOrder
    highestQln?: SortOrder
    designation?: SortOrder
  }

  export type staffBackupMinOrderByAggregateInput = {
    staffNo?: SortOrder
    staffName?: SortOrder
    supervisor?: SortOrder
    dob?: SortOrder
    grade?: SortOrder
    maritalStatus?: SortOrder
    pay?: SortOrder
    allowance?: SortOrder
    hourlyRate?: SortOrder
    gender?: SortOrder
    citizenship?: SortOrder
    joinYr?: SortOrder
    deptCode?: SortOrder
    typeOfEmployment?: SortOrder
    highestQln?: SortOrder
    designation?: SortOrder
  }

  export type staffBackupSumOrderByAggregateInput = {
    pay?: SortOrder
    allowance?: SortOrder
    hourlyRate?: SortOrder
    joinYr?: SortOrder
  }

  export type userAccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountNo?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type userAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type userAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountNo?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type userAccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountNo?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type userAccountSumOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type userRoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type userRoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type userRoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type userRoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StaffNullableScalarRelationFilter = {
    is?: staffWhereInput | null
    isNot?: staffWhereInput | null
  }

  export type PreRequisiteListRelationFilter = {
    every?: preRequisiteWhereInput
    some?: preRequisiteWhereInput
    none?: preRequisiteWhereInput
  }

  export type StudModPerformanceListRelationFilter = {
    every?: studModPerformanceWhereInput
    some?: studModPerformanceWhereInput
    none?: studModPerformanceWhereInput
  }

  export type preRequisiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studModPerformanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type moduleCountOrderByAggregateInput = {
    modCode?: SortOrder
    modName?: SortOrder
    creditUnit?: SortOrder
    modCoord?: SortOrder
  }

  export type moduleAvgOrderByAggregateInput = {
    creditUnit?: SortOrder
  }

  export type moduleMaxOrderByAggregateInput = {
    modCode?: SortOrder
    modName?: SortOrder
    creditUnit?: SortOrder
    modCoord?: SortOrder
  }

  export type moduleMinOrderByAggregateInput = {
    modCode?: SortOrder
    modName?: SortOrder
    creditUnit?: SortOrder
    modCoord?: SortOrder
  }

  export type moduleSumOrderByAggregateInput = {
    creditUnit?: SortOrder
  }

  export type staffDependentStaffNoDependentNameCompoundUniqueInput = {
    staffNo: string
    dependentName: string
  }

  export type staffDependentCountOrderByAggregateInput = {
    staffNo?: SortOrder
    dependentName?: SortOrder
    relationship?: SortOrder
  }

  export type staffDependentMaxOrderByAggregateInput = {
    staffNo?: SortOrder
    dependentName?: SortOrder
    relationship?: SortOrder
  }

  export type staffDependentMinOrderByAggregateInput = {
    staffNo?: SortOrder
    dependentName?: SortOrder
    relationship?: SortOrder
  }

  export type ModuleScalarRelationFilter = {
    is?: moduleWhereInput
    isNot?: moduleWhereInput
  }

  export type preRequisiteModCodeRequisiteCompoundUniqueInput = {
    modCode: string
    requisite: string
  }

  export type preRequisiteCountOrderByAggregateInput = {
    modCode?: SortOrder
    requisite?: SortOrder
  }

  export type preRequisiteMaxOrderByAggregateInput = {
    modCode?: SortOrder
    requisite?: SortOrder
  }

  export type preRequisiteMinOrderByAggregateInput = {
    modCode?: SortOrder
    requisite?: SortOrder
  }

  export type countryCountOrderByAggregateInput = {
    countryName?: SortOrder
    language?: SortOrder
    region?: SortOrder
  }

  export type countryMaxOrderByAggregateInput = {
    countryName?: SortOrder
    language?: SortOrder
    region?: SortOrder
  }

  export type countryMinOrderByAggregateInput = {
    countryName?: SortOrder
    language?: SortOrder
    region?: SortOrder
  }

  export type CountryScalarRelationFilter = {
    is?: countryWhereInput
    isNot?: countryWhereInput
  }

  export type CourseScalarRelationFilter = {
    is?: courseWhereInput
    isNot?: courseWhereInput
  }

  export type studentCountOrderByAggregateInput = {
    admNo?: SortOrder
    studName?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    mobilePhone?: SortOrder
    homePhone?: SortOrder
    dob?: SortOrder
    nationality?: SortOrder
    crseCode?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    admNo?: SortOrder
    studName?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    mobilePhone?: SortOrder
    homePhone?: SortOrder
    dob?: SortOrder
    nationality?: SortOrder
    crseCode?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    admNo?: SortOrder
    studName?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    mobilePhone?: SortOrder
    homePhone?: SortOrder
    dob?: SortOrder
    nationality?: SortOrder
    crseCode?: SortOrder
  }

  export type StudentScalarRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type studModPerformanceAdmNoModRegisteredCompoundUniqueInput = {
    admNo: string
    modRegistered: string
  }

  export type studModPerformanceCountOrderByAggregateInput = {
    admNo?: SortOrder
    modRegistered?: SortOrder
    mark?: SortOrder
    grade?: SortOrder
  }

  export type studModPerformanceAvgOrderByAggregateInput = {
    mark?: SortOrder
  }

  export type studModPerformanceMaxOrderByAggregateInput = {
    admNo?: SortOrder
    modRegistered?: SortOrder
    mark?: SortOrder
    grade?: SortOrder
  }

  export type studModPerformanceMinOrderByAggregateInput = {
    admNo?: SortOrder
    modRegistered?: SortOrder
    mark?: SortOrder
    grade?: SortOrder
  }

  export type studModPerformanceSumOrderByAggregateInput = {
    mark?: SortOrder
  }

  export type departmentCreateNestedOneWithoutCourseInput = {
    create?: XOR<departmentCreateWithoutCourseInput, departmentUncheckedCreateWithoutCourseInput>
    connectOrCreate?: departmentCreateOrConnectWithoutCourseInput
    connect?: departmentWhereUniqueInput
  }

  export type studentCreateNestedManyWithoutCourseInput = {
    create?: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput> | studentCreateWithoutCourseInput[] | studentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourseInput | studentCreateOrConnectWithoutCourseInput[]
    createMany?: studentCreateManyCourseInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type studentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput> | studentCreateWithoutCourseInput[] | studentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourseInput | studentCreateOrConnectWithoutCourseInput[]
    createMany?: studentCreateManyCourseInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type departmentUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<departmentCreateWithoutCourseInput, departmentUncheckedCreateWithoutCourseInput>
    connectOrCreate?: departmentCreateOrConnectWithoutCourseInput
    upsert?: departmentUpsertWithoutCourseInput
    connect?: departmentWhereUniqueInput
    update?: XOR<XOR<departmentUpdateToOneWithWhereWithoutCourseInput, departmentUpdateWithoutCourseInput>, departmentUncheckedUpdateWithoutCourseInput>
  }

  export type studentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput> | studentCreateWithoutCourseInput[] | studentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourseInput | studentCreateOrConnectWithoutCourseInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutCourseInput | studentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: studentCreateManyCourseInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutCourseInput | studentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: studentUpdateManyWithWhereWithoutCourseInput | studentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type studentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput> | studentCreateWithoutCourseInput[] | studentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourseInput | studentCreateOrConnectWithoutCourseInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutCourseInput | studentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: studentCreateManyCourseInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutCourseInput | studentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: studentUpdateManyWithWhereWithoutCourseInput | studentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type staffCreateNestedOneWithoutDepartmentHodToStaffInput = {
    create?: XOR<staffCreateWithoutDepartmentHodToStaffInput, staffUncheckedCreateWithoutDepartmentHodToStaffInput>
    connectOrCreate?: staffCreateOrConnectWithoutDepartmentHodToStaffInput
    connect?: staffWhereUniqueInput
  }

  export type staffCreateNestedManyWithoutStaffDeptCodeToDepartmentInput = {
    create?: XOR<staffCreateWithoutStaffDeptCodeToDepartmentInput, staffUncheckedCreateWithoutStaffDeptCodeToDepartmentInput> | staffCreateWithoutStaffDeptCodeToDepartmentInput[] | staffUncheckedCreateWithoutStaffDeptCodeToDepartmentInput[]
    connectOrCreate?: staffCreateOrConnectWithoutStaffDeptCodeToDepartmentInput | staffCreateOrConnectWithoutStaffDeptCodeToDepartmentInput[]
    createMany?: staffCreateManyStaffDeptCodeToDepartmentInputEnvelope
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
  }

  export type courseCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<courseCreateWithoutDepartmentInput, courseUncheckedCreateWithoutDepartmentInput> | courseCreateWithoutDepartmentInput[] | courseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: courseCreateOrConnectWithoutDepartmentInput | courseCreateOrConnectWithoutDepartmentInput[]
    createMany?: courseCreateManyDepartmentInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type staffUncheckedCreateNestedManyWithoutStaffDeptCodeToDepartmentInput = {
    create?: XOR<staffCreateWithoutStaffDeptCodeToDepartmentInput, staffUncheckedCreateWithoutStaffDeptCodeToDepartmentInput> | staffCreateWithoutStaffDeptCodeToDepartmentInput[] | staffUncheckedCreateWithoutStaffDeptCodeToDepartmentInput[]
    connectOrCreate?: staffCreateOrConnectWithoutStaffDeptCodeToDepartmentInput | staffCreateOrConnectWithoutStaffDeptCodeToDepartmentInput[]
    createMany?: staffCreateManyStaffDeptCodeToDepartmentInputEnvelope
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
  }

  export type courseUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<courseCreateWithoutDepartmentInput, courseUncheckedCreateWithoutDepartmentInput> | courseCreateWithoutDepartmentInput[] | courseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: courseCreateOrConnectWithoutDepartmentInput | courseCreateOrConnectWithoutDepartmentInput[]
    createMany?: courseCreateManyDepartmentInputEnvelope
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type staffUpdateOneRequiredWithoutDepartmentHodToStaffNestedInput = {
    create?: XOR<staffCreateWithoutDepartmentHodToStaffInput, staffUncheckedCreateWithoutDepartmentHodToStaffInput>
    connectOrCreate?: staffCreateOrConnectWithoutDepartmentHodToStaffInput
    upsert?: staffUpsertWithoutDepartmentHodToStaffInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutDepartmentHodToStaffInput, staffUpdateWithoutDepartmentHodToStaffInput>, staffUncheckedUpdateWithoutDepartmentHodToStaffInput>
  }

  export type staffUpdateManyWithoutStaffDeptCodeToDepartmentNestedInput = {
    create?: XOR<staffCreateWithoutStaffDeptCodeToDepartmentInput, staffUncheckedCreateWithoutStaffDeptCodeToDepartmentInput> | staffCreateWithoutStaffDeptCodeToDepartmentInput[] | staffUncheckedCreateWithoutStaffDeptCodeToDepartmentInput[]
    connectOrCreate?: staffCreateOrConnectWithoutStaffDeptCodeToDepartmentInput | staffCreateOrConnectWithoutStaffDeptCodeToDepartmentInput[]
    upsert?: staffUpsertWithWhereUniqueWithoutStaffDeptCodeToDepartmentInput | staffUpsertWithWhereUniqueWithoutStaffDeptCodeToDepartmentInput[]
    createMany?: staffCreateManyStaffDeptCodeToDepartmentInputEnvelope
    set?: staffWhereUniqueInput | staffWhereUniqueInput[]
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[]
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    update?: staffUpdateWithWhereUniqueWithoutStaffDeptCodeToDepartmentInput | staffUpdateWithWhereUniqueWithoutStaffDeptCodeToDepartmentInput[]
    updateMany?: staffUpdateManyWithWhereWithoutStaffDeptCodeToDepartmentInput | staffUpdateManyWithWhereWithoutStaffDeptCodeToDepartmentInput[]
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[]
  }

  export type courseUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<courseCreateWithoutDepartmentInput, courseUncheckedCreateWithoutDepartmentInput> | courseCreateWithoutDepartmentInput[] | courseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: courseCreateOrConnectWithoutDepartmentInput | courseCreateOrConnectWithoutDepartmentInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutDepartmentInput | courseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: courseCreateManyDepartmentInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutDepartmentInput | courseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: courseUpdateManyWithWhereWithoutDepartmentInput | courseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type staffUncheckedUpdateManyWithoutStaffDeptCodeToDepartmentNestedInput = {
    create?: XOR<staffCreateWithoutStaffDeptCodeToDepartmentInput, staffUncheckedCreateWithoutStaffDeptCodeToDepartmentInput> | staffCreateWithoutStaffDeptCodeToDepartmentInput[] | staffUncheckedCreateWithoutStaffDeptCodeToDepartmentInput[]
    connectOrCreate?: staffCreateOrConnectWithoutStaffDeptCodeToDepartmentInput | staffCreateOrConnectWithoutStaffDeptCodeToDepartmentInput[]
    upsert?: staffUpsertWithWhereUniqueWithoutStaffDeptCodeToDepartmentInput | staffUpsertWithWhereUniqueWithoutStaffDeptCodeToDepartmentInput[]
    createMany?: staffCreateManyStaffDeptCodeToDepartmentInputEnvelope
    set?: staffWhereUniqueInput | staffWhereUniqueInput[]
    disconnect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    delete?: staffWhereUniqueInput | staffWhereUniqueInput[]
    connect?: staffWhereUniqueInput | staffWhereUniqueInput[]
    update?: staffUpdateWithWhereUniqueWithoutStaffDeptCodeToDepartmentInput | staffUpdateWithWhereUniqueWithoutStaffDeptCodeToDepartmentInput[]
    updateMany?: staffUpdateManyWithWhereWithoutStaffDeptCodeToDepartmentInput | staffUpdateManyWithWhereWithoutStaffDeptCodeToDepartmentInput[]
    deleteMany?: staffScalarWhereInput | staffScalarWhereInput[]
  }

  export type courseUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<courseCreateWithoutDepartmentInput, courseUncheckedCreateWithoutDepartmentInput> | courseCreateWithoutDepartmentInput[] | courseUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: courseCreateOrConnectWithoutDepartmentInput | courseCreateOrConnectWithoutDepartmentInput[]
    upsert?: courseUpsertWithWhereUniqueWithoutDepartmentInput | courseUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: courseCreateManyDepartmentInputEnvelope
    set?: courseWhereUniqueInput | courseWhereUniqueInput[]
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[]
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[]
    update?: courseUpdateWithWhereUniqueWithoutDepartmentInput | courseUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: courseUpdateManyWithWhereWithoutDepartmentInput | courseUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[]
  }

  export type departmentCreateNestedManyWithoutDepartmentHodToStaffInput = {
    create?: XOR<departmentCreateWithoutDepartmentHodToStaffInput, departmentUncheckedCreateWithoutDepartmentHodToStaffInput> | departmentCreateWithoutDepartmentHodToStaffInput[] | departmentUncheckedCreateWithoutDepartmentHodToStaffInput[]
    connectOrCreate?: departmentCreateOrConnectWithoutDepartmentHodToStaffInput | departmentCreateOrConnectWithoutDepartmentHodToStaffInput[]
    createMany?: departmentCreateManyDepartmentHodToStaffInputEnvelope
    connect?: departmentWhereUniqueInput | departmentWhereUniqueInput[]
  }

  export type departmentCreateNestedOneWithoutStaffDeptCodToDepartmentInput = {
    create?: XOR<departmentCreateWithoutStaffDeptCodToDepartmentInput, departmentUncheckedCreateWithoutStaffDeptCodToDepartmentInput>
    connectOrCreate?: departmentCreateOrConnectWithoutStaffDeptCodToDepartmentInput
    connect?: departmentWhereUniqueInput
  }

  export type staffDependentCreateNestedManyWithoutStaffInput = {
    create?: XOR<staffDependentCreateWithoutStaffInput, staffDependentUncheckedCreateWithoutStaffInput> | staffDependentCreateWithoutStaffInput[] | staffDependentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staffDependentCreateOrConnectWithoutStaffInput | staffDependentCreateOrConnectWithoutStaffInput[]
    createMany?: staffDependentCreateManyStaffInputEnvelope
    connect?: staffDependentWhereUniqueInput | staffDependentWhereUniqueInput[]
  }

  export type moduleCreateNestedManyWithoutStaffInput = {
    create?: XOR<moduleCreateWithoutStaffInput, moduleUncheckedCreateWithoutStaffInput> | moduleCreateWithoutStaffInput[] | moduleUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutStaffInput | moduleCreateOrConnectWithoutStaffInput[]
    createMany?: moduleCreateManyStaffInputEnvelope
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
  }

  export type departmentUncheckedCreateNestedManyWithoutDepartmentHodToStaffInput = {
    create?: XOR<departmentCreateWithoutDepartmentHodToStaffInput, departmentUncheckedCreateWithoutDepartmentHodToStaffInput> | departmentCreateWithoutDepartmentHodToStaffInput[] | departmentUncheckedCreateWithoutDepartmentHodToStaffInput[]
    connectOrCreate?: departmentCreateOrConnectWithoutDepartmentHodToStaffInput | departmentCreateOrConnectWithoutDepartmentHodToStaffInput[]
    createMany?: departmentCreateManyDepartmentHodToStaffInputEnvelope
    connect?: departmentWhereUniqueInput | departmentWhereUniqueInput[]
  }

  export type staffDependentUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<staffDependentCreateWithoutStaffInput, staffDependentUncheckedCreateWithoutStaffInput> | staffDependentCreateWithoutStaffInput[] | staffDependentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staffDependentCreateOrConnectWithoutStaffInput | staffDependentCreateOrConnectWithoutStaffInput[]
    createMany?: staffDependentCreateManyStaffInputEnvelope
    connect?: staffDependentWhereUniqueInput | staffDependentWhereUniqueInput[]
  }

  export type moduleUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<moduleCreateWithoutStaffInput, moduleUncheckedCreateWithoutStaffInput> | moduleCreateWithoutStaffInput[] | moduleUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutStaffInput | moduleCreateOrConnectWithoutStaffInput[]
    createMany?: moduleCreateManyStaffInputEnvelope
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type departmentUpdateManyWithoutDepartmentHodToStaffNestedInput = {
    create?: XOR<departmentCreateWithoutDepartmentHodToStaffInput, departmentUncheckedCreateWithoutDepartmentHodToStaffInput> | departmentCreateWithoutDepartmentHodToStaffInput[] | departmentUncheckedCreateWithoutDepartmentHodToStaffInput[]
    connectOrCreate?: departmentCreateOrConnectWithoutDepartmentHodToStaffInput | departmentCreateOrConnectWithoutDepartmentHodToStaffInput[]
    upsert?: departmentUpsertWithWhereUniqueWithoutDepartmentHodToStaffInput | departmentUpsertWithWhereUniqueWithoutDepartmentHodToStaffInput[]
    createMany?: departmentCreateManyDepartmentHodToStaffInputEnvelope
    set?: departmentWhereUniqueInput | departmentWhereUniqueInput[]
    disconnect?: departmentWhereUniqueInput | departmentWhereUniqueInput[]
    delete?: departmentWhereUniqueInput | departmentWhereUniqueInput[]
    connect?: departmentWhereUniqueInput | departmentWhereUniqueInput[]
    update?: departmentUpdateWithWhereUniqueWithoutDepartmentHodToStaffInput | departmentUpdateWithWhereUniqueWithoutDepartmentHodToStaffInput[]
    updateMany?: departmentUpdateManyWithWhereWithoutDepartmentHodToStaffInput | departmentUpdateManyWithWhereWithoutDepartmentHodToStaffInput[]
    deleteMany?: departmentScalarWhereInput | departmentScalarWhereInput[]
  }

  export type departmentUpdateOneRequiredWithoutStaffDeptCodToDepartmentNestedInput = {
    create?: XOR<departmentCreateWithoutStaffDeptCodToDepartmentInput, departmentUncheckedCreateWithoutStaffDeptCodToDepartmentInput>
    connectOrCreate?: departmentCreateOrConnectWithoutStaffDeptCodToDepartmentInput
    upsert?: departmentUpsertWithoutStaffDeptCodToDepartmentInput
    connect?: departmentWhereUniqueInput
    update?: XOR<XOR<departmentUpdateToOneWithWhereWithoutStaffDeptCodToDepartmentInput, departmentUpdateWithoutStaffDeptCodToDepartmentInput>, departmentUncheckedUpdateWithoutStaffDeptCodToDepartmentInput>
  }

  export type staffDependentUpdateManyWithoutStaffNestedInput = {
    create?: XOR<staffDependentCreateWithoutStaffInput, staffDependentUncheckedCreateWithoutStaffInput> | staffDependentCreateWithoutStaffInput[] | staffDependentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staffDependentCreateOrConnectWithoutStaffInput | staffDependentCreateOrConnectWithoutStaffInput[]
    upsert?: staffDependentUpsertWithWhereUniqueWithoutStaffInput | staffDependentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: staffDependentCreateManyStaffInputEnvelope
    set?: staffDependentWhereUniqueInput | staffDependentWhereUniqueInput[]
    disconnect?: staffDependentWhereUniqueInput | staffDependentWhereUniqueInput[]
    delete?: staffDependentWhereUniqueInput | staffDependentWhereUniqueInput[]
    connect?: staffDependentWhereUniqueInput | staffDependentWhereUniqueInput[]
    update?: staffDependentUpdateWithWhereUniqueWithoutStaffInput | staffDependentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: staffDependentUpdateManyWithWhereWithoutStaffInput | staffDependentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: staffDependentScalarWhereInput | staffDependentScalarWhereInput[]
  }

  export type moduleUpdateManyWithoutStaffNestedInput = {
    create?: XOR<moduleCreateWithoutStaffInput, moduleUncheckedCreateWithoutStaffInput> | moduleCreateWithoutStaffInput[] | moduleUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutStaffInput | moduleCreateOrConnectWithoutStaffInput[]
    upsert?: moduleUpsertWithWhereUniqueWithoutStaffInput | moduleUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: moduleCreateManyStaffInputEnvelope
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    update?: moduleUpdateWithWhereUniqueWithoutStaffInput | moduleUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: moduleUpdateManyWithWhereWithoutStaffInput | moduleUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[]
  }

  export type departmentUncheckedUpdateManyWithoutDepartmentHodToStaffNestedInput = {
    create?: XOR<departmentCreateWithoutDepartmentHodToStaffInput, departmentUncheckedCreateWithoutDepartmentHodToStaffInput> | departmentCreateWithoutDepartmentHodToStaffInput[] | departmentUncheckedCreateWithoutDepartmentHodToStaffInput[]
    connectOrCreate?: departmentCreateOrConnectWithoutDepartmentHodToStaffInput | departmentCreateOrConnectWithoutDepartmentHodToStaffInput[]
    upsert?: departmentUpsertWithWhereUniqueWithoutDepartmentHodToStaffInput | departmentUpsertWithWhereUniqueWithoutDepartmentHodToStaffInput[]
    createMany?: departmentCreateManyDepartmentHodToStaffInputEnvelope
    set?: departmentWhereUniqueInput | departmentWhereUniqueInput[]
    disconnect?: departmentWhereUniqueInput | departmentWhereUniqueInput[]
    delete?: departmentWhereUniqueInput | departmentWhereUniqueInput[]
    connect?: departmentWhereUniqueInput | departmentWhereUniqueInput[]
    update?: departmentUpdateWithWhereUniqueWithoutDepartmentHodToStaffInput | departmentUpdateWithWhereUniqueWithoutDepartmentHodToStaffInput[]
    updateMany?: departmentUpdateManyWithWhereWithoutDepartmentHodToStaffInput | departmentUpdateManyWithWhereWithoutDepartmentHodToStaffInput[]
    deleteMany?: departmentScalarWhereInput | departmentScalarWhereInput[]
  }

  export type staffDependentUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<staffDependentCreateWithoutStaffInput, staffDependentUncheckedCreateWithoutStaffInput> | staffDependentCreateWithoutStaffInput[] | staffDependentUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: staffDependentCreateOrConnectWithoutStaffInput | staffDependentCreateOrConnectWithoutStaffInput[]
    upsert?: staffDependentUpsertWithWhereUniqueWithoutStaffInput | staffDependentUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: staffDependentCreateManyStaffInputEnvelope
    set?: staffDependentWhereUniqueInput | staffDependentWhereUniqueInput[]
    disconnect?: staffDependentWhereUniqueInput | staffDependentWhereUniqueInput[]
    delete?: staffDependentWhereUniqueInput | staffDependentWhereUniqueInput[]
    connect?: staffDependentWhereUniqueInput | staffDependentWhereUniqueInput[]
    update?: staffDependentUpdateWithWhereUniqueWithoutStaffInput | staffDependentUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: staffDependentUpdateManyWithWhereWithoutStaffInput | staffDependentUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: staffDependentScalarWhereInput | staffDependentScalarWhereInput[]
  }

  export type moduleUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<moduleCreateWithoutStaffInput, moduleUncheckedCreateWithoutStaffInput> | moduleCreateWithoutStaffInput[] | moduleUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: moduleCreateOrConnectWithoutStaffInput | moduleCreateOrConnectWithoutStaffInput[]
    upsert?: moduleUpsertWithWhereUniqueWithoutStaffInput | moduleUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: moduleCreateManyStaffInputEnvelope
    set?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    disconnect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    delete?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    connect?: moduleWhereUniqueInput | moduleWhereUniqueInput[]
    update?: moduleUpdateWithWhereUniqueWithoutStaffInput | moduleUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: moduleUpdateManyWithWhereWithoutStaffInput | moduleUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: moduleScalarWhereInput | moduleScalarWhereInput[]
  }

  export type staffCreateNestedOneWithoutModuleInput = {
    create?: XOR<staffCreateWithoutModuleInput, staffUncheckedCreateWithoutModuleInput>
    connectOrCreate?: staffCreateOrConnectWithoutModuleInput
    connect?: staffWhereUniqueInput
  }

  export type preRequisiteCreateNestedManyWithoutPreRequisiteModCodeToModuleInput = {
    create?: XOR<preRequisiteCreateWithoutPreRequisiteModCodeToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteModCodeToModuleInput> | preRequisiteCreateWithoutPreRequisiteModCodeToModuleInput[] | preRequisiteUncheckedCreateWithoutPreRequisiteModCodeToModuleInput[]
    connectOrCreate?: preRequisiteCreateOrConnectWithoutPreRequisiteModCodeToModuleInput | preRequisiteCreateOrConnectWithoutPreRequisiteModCodeToModuleInput[]
    createMany?: preRequisiteCreateManyPreRequisiteModCodeToModuleInputEnvelope
    connect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
  }

  export type preRequisiteCreateNestedManyWithoutPreRequisiteRequisiteToModuleInput = {
    create?: XOR<preRequisiteCreateWithoutPreRequisiteRequisiteToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput> | preRequisiteCreateWithoutPreRequisiteRequisiteToModuleInput[] | preRequisiteUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput[]
    connectOrCreate?: preRequisiteCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput | preRequisiteCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput[]
    createMany?: preRequisiteCreateManyPreRequisiteRequisiteToModuleInputEnvelope
    connect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
  }

  export type studModPerformanceCreateNestedManyWithoutModuleInput = {
    create?: XOR<studModPerformanceCreateWithoutModuleInput, studModPerformanceUncheckedCreateWithoutModuleInput> | studModPerformanceCreateWithoutModuleInput[] | studModPerformanceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: studModPerformanceCreateOrConnectWithoutModuleInput | studModPerformanceCreateOrConnectWithoutModuleInput[]
    createMany?: studModPerformanceCreateManyModuleInputEnvelope
    connect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
  }

  export type preRequisiteUncheckedCreateNestedManyWithoutPreRequisiteModCodeToModuleInput = {
    create?: XOR<preRequisiteCreateWithoutPreRequisiteModCodeToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteModCodeToModuleInput> | preRequisiteCreateWithoutPreRequisiteModCodeToModuleInput[] | preRequisiteUncheckedCreateWithoutPreRequisiteModCodeToModuleInput[]
    connectOrCreate?: preRequisiteCreateOrConnectWithoutPreRequisiteModCodeToModuleInput | preRequisiteCreateOrConnectWithoutPreRequisiteModCodeToModuleInput[]
    createMany?: preRequisiteCreateManyPreRequisiteModCodeToModuleInputEnvelope
    connect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
  }

  export type preRequisiteUncheckedCreateNestedManyWithoutPreRequisiteRequisiteToModuleInput = {
    create?: XOR<preRequisiteCreateWithoutPreRequisiteRequisiteToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput> | preRequisiteCreateWithoutPreRequisiteRequisiteToModuleInput[] | preRequisiteUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput[]
    connectOrCreate?: preRequisiteCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput | preRequisiteCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput[]
    createMany?: preRequisiteCreateManyPreRequisiteRequisiteToModuleInputEnvelope
    connect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
  }

  export type studModPerformanceUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<studModPerformanceCreateWithoutModuleInput, studModPerformanceUncheckedCreateWithoutModuleInput> | studModPerformanceCreateWithoutModuleInput[] | studModPerformanceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: studModPerformanceCreateOrConnectWithoutModuleInput | studModPerformanceCreateOrConnectWithoutModuleInput[]
    createMany?: studModPerformanceCreateManyModuleInputEnvelope
    connect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
  }

  export type staffUpdateOneWithoutModuleNestedInput = {
    create?: XOR<staffCreateWithoutModuleInput, staffUncheckedCreateWithoutModuleInput>
    connectOrCreate?: staffCreateOrConnectWithoutModuleInput
    upsert?: staffUpsertWithoutModuleInput
    disconnect?: staffWhereInput | boolean
    delete?: staffWhereInput | boolean
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutModuleInput, staffUpdateWithoutModuleInput>, staffUncheckedUpdateWithoutModuleInput>
  }

  export type preRequisiteUpdateManyWithoutPreRequisiteModCodeToModuleNestedInput = {
    create?: XOR<preRequisiteCreateWithoutPreRequisiteModCodeToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteModCodeToModuleInput> | preRequisiteCreateWithoutPreRequisiteModCodeToModuleInput[] | preRequisiteUncheckedCreateWithoutPreRequisiteModCodeToModuleInput[]
    connectOrCreate?: preRequisiteCreateOrConnectWithoutPreRequisiteModCodeToModuleInput | preRequisiteCreateOrConnectWithoutPreRequisiteModCodeToModuleInput[]
    upsert?: preRequisiteUpsertWithWhereUniqueWithoutPreRequisiteModCodeToModuleInput | preRequisiteUpsertWithWhereUniqueWithoutPreRequisiteModCodeToModuleInput[]
    createMany?: preRequisiteCreateManyPreRequisiteModCodeToModuleInputEnvelope
    set?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    disconnect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    delete?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    connect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    update?: preRequisiteUpdateWithWhereUniqueWithoutPreRequisiteModCodeToModuleInput | preRequisiteUpdateWithWhereUniqueWithoutPreRequisiteModCodeToModuleInput[]
    updateMany?: preRequisiteUpdateManyWithWhereWithoutPreRequisiteModCodeToModuleInput | preRequisiteUpdateManyWithWhereWithoutPreRequisiteModCodeToModuleInput[]
    deleteMany?: preRequisiteScalarWhereInput | preRequisiteScalarWhereInput[]
  }

  export type preRequisiteUpdateManyWithoutPreRequisiteRequisiteToModuleNestedInput = {
    create?: XOR<preRequisiteCreateWithoutPreRequisiteRequisiteToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput> | preRequisiteCreateWithoutPreRequisiteRequisiteToModuleInput[] | preRequisiteUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput[]
    connectOrCreate?: preRequisiteCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput | preRequisiteCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput[]
    upsert?: preRequisiteUpsertWithWhereUniqueWithoutPreRequisiteRequisiteToModuleInput | preRequisiteUpsertWithWhereUniqueWithoutPreRequisiteRequisiteToModuleInput[]
    createMany?: preRequisiteCreateManyPreRequisiteRequisiteToModuleInputEnvelope
    set?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    disconnect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    delete?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    connect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    update?: preRequisiteUpdateWithWhereUniqueWithoutPreRequisiteRequisiteToModuleInput | preRequisiteUpdateWithWhereUniqueWithoutPreRequisiteRequisiteToModuleInput[]
    updateMany?: preRequisiteUpdateManyWithWhereWithoutPreRequisiteRequisiteToModuleInput | preRequisiteUpdateManyWithWhereWithoutPreRequisiteRequisiteToModuleInput[]
    deleteMany?: preRequisiteScalarWhereInput | preRequisiteScalarWhereInput[]
  }

  export type studModPerformanceUpdateManyWithoutModuleNestedInput = {
    create?: XOR<studModPerformanceCreateWithoutModuleInput, studModPerformanceUncheckedCreateWithoutModuleInput> | studModPerformanceCreateWithoutModuleInput[] | studModPerformanceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: studModPerformanceCreateOrConnectWithoutModuleInput | studModPerformanceCreateOrConnectWithoutModuleInput[]
    upsert?: studModPerformanceUpsertWithWhereUniqueWithoutModuleInput | studModPerformanceUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: studModPerformanceCreateManyModuleInputEnvelope
    set?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    disconnect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    delete?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    connect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    update?: studModPerformanceUpdateWithWhereUniqueWithoutModuleInput | studModPerformanceUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: studModPerformanceUpdateManyWithWhereWithoutModuleInput | studModPerformanceUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: studModPerformanceScalarWhereInput | studModPerformanceScalarWhereInput[]
  }

  export type preRequisiteUncheckedUpdateManyWithoutPreRequisiteModCodeToModuleNestedInput = {
    create?: XOR<preRequisiteCreateWithoutPreRequisiteModCodeToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteModCodeToModuleInput> | preRequisiteCreateWithoutPreRequisiteModCodeToModuleInput[] | preRequisiteUncheckedCreateWithoutPreRequisiteModCodeToModuleInput[]
    connectOrCreate?: preRequisiteCreateOrConnectWithoutPreRequisiteModCodeToModuleInput | preRequisiteCreateOrConnectWithoutPreRequisiteModCodeToModuleInput[]
    upsert?: preRequisiteUpsertWithWhereUniqueWithoutPreRequisiteModCodeToModuleInput | preRequisiteUpsertWithWhereUniqueWithoutPreRequisiteModCodeToModuleInput[]
    createMany?: preRequisiteCreateManyPreRequisiteModCodeToModuleInputEnvelope
    set?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    disconnect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    delete?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    connect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    update?: preRequisiteUpdateWithWhereUniqueWithoutPreRequisiteModCodeToModuleInput | preRequisiteUpdateWithWhereUniqueWithoutPreRequisiteModCodeToModuleInput[]
    updateMany?: preRequisiteUpdateManyWithWhereWithoutPreRequisiteModCodeToModuleInput | preRequisiteUpdateManyWithWhereWithoutPreRequisiteModCodeToModuleInput[]
    deleteMany?: preRequisiteScalarWhereInput | preRequisiteScalarWhereInput[]
  }

  export type preRequisiteUncheckedUpdateManyWithoutPreRequisiteRequisiteToModuleNestedInput = {
    create?: XOR<preRequisiteCreateWithoutPreRequisiteRequisiteToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput> | preRequisiteCreateWithoutPreRequisiteRequisiteToModuleInput[] | preRequisiteUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput[]
    connectOrCreate?: preRequisiteCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput | preRequisiteCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput[]
    upsert?: preRequisiteUpsertWithWhereUniqueWithoutPreRequisiteRequisiteToModuleInput | preRequisiteUpsertWithWhereUniqueWithoutPreRequisiteRequisiteToModuleInput[]
    createMany?: preRequisiteCreateManyPreRequisiteRequisiteToModuleInputEnvelope
    set?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    disconnect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    delete?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    connect?: preRequisiteWhereUniqueInput | preRequisiteWhereUniqueInput[]
    update?: preRequisiteUpdateWithWhereUniqueWithoutPreRequisiteRequisiteToModuleInput | preRequisiteUpdateWithWhereUniqueWithoutPreRequisiteRequisiteToModuleInput[]
    updateMany?: preRequisiteUpdateManyWithWhereWithoutPreRequisiteRequisiteToModuleInput | preRequisiteUpdateManyWithWhereWithoutPreRequisiteRequisiteToModuleInput[]
    deleteMany?: preRequisiteScalarWhereInput | preRequisiteScalarWhereInput[]
  }

  export type studModPerformanceUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<studModPerformanceCreateWithoutModuleInput, studModPerformanceUncheckedCreateWithoutModuleInput> | studModPerformanceCreateWithoutModuleInput[] | studModPerformanceUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: studModPerformanceCreateOrConnectWithoutModuleInput | studModPerformanceCreateOrConnectWithoutModuleInput[]
    upsert?: studModPerformanceUpsertWithWhereUniqueWithoutModuleInput | studModPerformanceUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: studModPerformanceCreateManyModuleInputEnvelope
    set?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    disconnect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    delete?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    connect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    update?: studModPerformanceUpdateWithWhereUniqueWithoutModuleInput | studModPerformanceUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: studModPerformanceUpdateManyWithWhereWithoutModuleInput | studModPerformanceUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: studModPerformanceScalarWhereInput | studModPerformanceScalarWhereInput[]
  }

  export type staffCreateNestedOneWithoutStaffDependentInput = {
    create?: XOR<staffCreateWithoutStaffDependentInput, staffUncheckedCreateWithoutStaffDependentInput>
    connectOrCreate?: staffCreateOrConnectWithoutStaffDependentInput
    connect?: staffWhereUniqueInput
  }

  export type staffUpdateOneRequiredWithoutStaffDependentNestedInput = {
    create?: XOR<staffCreateWithoutStaffDependentInput, staffUncheckedCreateWithoutStaffDependentInput>
    connectOrCreate?: staffCreateOrConnectWithoutStaffDependentInput
    upsert?: staffUpsertWithoutStaffDependentInput
    connect?: staffWhereUniqueInput
    update?: XOR<XOR<staffUpdateToOneWithWhereWithoutStaffDependentInput, staffUpdateWithoutStaffDependentInput>, staffUncheckedUpdateWithoutStaffDependentInput>
  }

  export type moduleCreateNestedOneWithoutPreRequisiteModCodeToModuleInput = {
    create?: XOR<moduleCreateWithoutPreRequisiteModCodeToModuleInput, moduleUncheckedCreateWithoutPreRequisiteModCodeToModuleInput>
    connectOrCreate?: moduleCreateOrConnectWithoutPreRequisiteModCodeToModuleInput
    connect?: moduleWhereUniqueInput
  }

  export type moduleCreateNestedOneWithoutPreRequisiteRequisiteToModuleInput = {
    create?: XOR<moduleCreateWithoutPreRequisiteRequisiteToModuleInput, moduleUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput>
    connectOrCreate?: moduleCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput
    connect?: moduleWhereUniqueInput
  }

  export type moduleUpdateOneRequiredWithoutPreRequisiteModCodeToModuleNestedInput = {
    create?: XOR<moduleCreateWithoutPreRequisiteModCodeToModuleInput, moduleUncheckedCreateWithoutPreRequisiteModCodeToModuleInput>
    connectOrCreate?: moduleCreateOrConnectWithoutPreRequisiteModCodeToModuleInput
    upsert?: moduleUpsertWithoutPreRequisiteModCodeToModuleInput
    connect?: moduleWhereUniqueInput
    update?: XOR<XOR<moduleUpdateToOneWithWhereWithoutPreRequisiteModCodeToModuleInput, moduleUpdateWithoutPreRequisiteModCodeToModuleInput>, moduleUncheckedUpdateWithoutPreRequisiteModCodeToModuleInput>
  }

  export type moduleUpdateOneRequiredWithoutPreRequisiteRequisiteToModuleNestedInput = {
    create?: XOR<moduleCreateWithoutPreRequisiteRequisiteToModuleInput, moduleUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput>
    connectOrCreate?: moduleCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput
    upsert?: moduleUpsertWithoutPreRequisiteRequisiteToModuleInput
    connect?: moduleWhereUniqueInput
    update?: XOR<XOR<moduleUpdateToOneWithWhereWithoutPreRequisiteRequisiteToModuleInput, moduleUpdateWithoutPreRequisiteRequisiteToModuleInput>, moduleUncheckedUpdateWithoutPreRequisiteRequisiteToModuleInput>
  }

  export type studentCreateNestedManyWithoutCountryInput = {
    create?: XOR<studentCreateWithoutCountryInput, studentUncheckedCreateWithoutCountryInput> | studentCreateWithoutCountryInput[] | studentUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCountryInput | studentCreateOrConnectWithoutCountryInput[]
    createMany?: studentCreateManyCountryInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type studentUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<studentCreateWithoutCountryInput, studentUncheckedCreateWithoutCountryInput> | studentCreateWithoutCountryInput[] | studentUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCountryInput | studentCreateOrConnectWithoutCountryInput[]
    createMany?: studentCreateManyCountryInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type studentUpdateManyWithoutCountryNestedInput = {
    create?: XOR<studentCreateWithoutCountryInput, studentUncheckedCreateWithoutCountryInput> | studentCreateWithoutCountryInput[] | studentUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCountryInput | studentCreateOrConnectWithoutCountryInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutCountryInput | studentUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: studentCreateManyCountryInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutCountryInput | studentUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: studentUpdateManyWithWhereWithoutCountryInput | studentUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type studentUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<studentCreateWithoutCountryInput, studentUncheckedCreateWithoutCountryInput> | studentCreateWithoutCountryInput[] | studentUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCountryInput | studentCreateOrConnectWithoutCountryInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutCountryInput | studentUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: studentCreateManyCountryInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutCountryInput | studentUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: studentUpdateManyWithWhereWithoutCountryInput | studentUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type countryCreateNestedOneWithoutStudentInput = {
    create?: XOR<countryCreateWithoutStudentInput, countryUncheckedCreateWithoutStudentInput>
    connectOrCreate?: countryCreateOrConnectWithoutStudentInput
    connect?: countryWhereUniqueInput
  }

  export type courseCreateNestedOneWithoutStudentInput = {
    create?: XOR<courseCreateWithoutStudentInput, courseUncheckedCreateWithoutStudentInput>
    connectOrCreate?: courseCreateOrConnectWithoutStudentInput
    connect?: courseWhereUniqueInput
  }

  export type studModPerformanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<studModPerformanceCreateWithoutStudentInput, studModPerformanceUncheckedCreateWithoutStudentInput> | studModPerformanceCreateWithoutStudentInput[] | studModPerformanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studModPerformanceCreateOrConnectWithoutStudentInput | studModPerformanceCreateOrConnectWithoutStudentInput[]
    createMany?: studModPerformanceCreateManyStudentInputEnvelope
    connect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
  }

  export type studModPerformanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<studModPerformanceCreateWithoutStudentInput, studModPerformanceUncheckedCreateWithoutStudentInput> | studModPerformanceCreateWithoutStudentInput[] | studModPerformanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studModPerformanceCreateOrConnectWithoutStudentInput | studModPerformanceCreateOrConnectWithoutStudentInput[]
    createMany?: studModPerformanceCreateManyStudentInputEnvelope
    connect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
  }

  export type countryUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<countryCreateWithoutStudentInput, countryUncheckedCreateWithoutStudentInput>
    connectOrCreate?: countryCreateOrConnectWithoutStudentInput
    upsert?: countryUpsertWithoutStudentInput
    connect?: countryWhereUniqueInput
    update?: XOR<XOR<countryUpdateToOneWithWhereWithoutStudentInput, countryUpdateWithoutStudentInput>, countryUncheckedUpdateWithoutStudentInput>
  }

  export type courseUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<courseCreateWithoutStudentInput, courseUncheckedCreateWithoutStudentInput>
    connectOrCreate?: courseCreateOrConnectWithoutStudentInput
    upsert?: courseUpsertWithoutStudentInput
    connect?: courseWhereUniqueInput
    update?: XOR<XOR<courseUpdateToOneWithWhereWithoutStudentInput, courseUpdateWithoutStudentInput>, courseUncheckedUpdateWithoutStudentInput>
  }

  export type studModPerformanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<studModPerformanceCreateWithoutStudentInput, studModPerformanceUncheckedCreateWithoutStudentInput> | studModPerformanceCreateWithoutStudentInput[] | studModPerformanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studModPerformanceCreateOrConnectWithoutStudentInput | studModPerformanceCreateOrConnectWithoutStudentInput[]
    upsert?: studModPerformanceUpsertWithWhereUniqueWithoutStudentInput | studModPerformanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: studModPerformanceCreateManyStudentInputEnvelope
    set?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    disconnect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    delete?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    connect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    update?: studModPerformanceUpdateWithWhereUniqueWithoutStudentInput | studModPerformanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: studModPerformanceUpdateManyWithWhereWithoutStudentInput | studModPerformanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: studModPerformanceScalarWhereInput | studModPerformanceScalarWhereInput[]
  }

  export type studModPerformanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<studModPerformanceCreateWithoutStudentInput, studModPerformanceUncheckedCreateWithoutStudentInput> | studModPerformanceCreateWithoutStudentInput[] | studModPerformanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: studModPerformanceCreateOrConnectWithoutStudentInput | studModPerformanceCreateOrConnectWithoutStudentInput[]
    upsert?: studModPerformanceUpsertWithWhereUniqueWithoutStudentInput | studModPerformanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: studModPerformanceCreateManyStudentInputEnvelope
    set?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    disconnect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    delete?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    connect?: studModPerformanceWhereUniqueInput | studModPerformanceWhereUniqueInput[]
    update?: studModPerformanceUpdateWithWhereUniqueWithoutStudentInput | studModPerformanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: studModPerformanceUpdateManyWithWhereWithoutStudentInput | studModPerformanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: studModPerformanceScalarWhereInput | studModPerformanceScalarWhereInput[]
  }

  export type studentCreateNestedOneWithoutStudModPerformanceInput = {
    create?: XOR<studentCreateWithoutStudModPerformanceInput, studentUncheckedCreateWithoutStudModPerformanceInput>
    connectOrCreate?: studentCreateOrConnectWithoutStudModPerformanceInput
    connect?: studentWhereUniqueInput
  }

  export type moduleCreateNestedOneWithoutStudModPerformanceInput = {
    create?: XOR<moduleCreateWithoutStudModPerformanceInput, moduleUncheckedCreateWithoutStudModPerformanceInput>
    connectOrCreate?: moduleCreateOrConnectWithoutStudModPerformanceInput
    connect?: moduleWhereUniqueInput
  }

  export type studentUpdateOneRequiredWithoutStudModPerformanceNestedInput = {
    create?: XOR<studentCreateWithoutStudModPerformanceInput, studentUncheckedCreateWithoutStudModPerformanceInput>
    connectOrCreate?: studentCreateOrConnectWithoutStudModPerformanceInput
    upsert?: studentUpsertWithoutStudModPerformanceInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutStudModPerformanceInput, studentUpdateWithoutStudModPerformanceInput>, studentUncheckedUpdateWithoutStudModPerformanceInput>
  }

  export type moduleUpdateOneRequiredWithoutStudModPerformanceNestedInput = {
    create?: XOR<moduleCreateWithoutStudModPerformanceInput, moduleUncheckedCreateWithoutStudModPerformanceInput>
    connectOrCreate?: moduleCreateOrConnectWithoutStudModPerformanceInput
    upsert?: moduleUpsertWithoutStudModPerformanceInput
    connect?: moduleWhereUniqueInput
    update?: XOR<XOR<moduleUpdateToOneWithWhereWithoutStudModPerformanceInput, moduleUpdateWithoutStudModPerformanceInput>, moduleUncheckedUpdateWithoutStudModPerformanceInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type departmentCreateWithoutCourseInput = {
    deptCode: string
    deptName: string
    noOfStaff?: number | null
    maxStaffStrength?: number | null
    budget?: Decimal | DecimalJsLike | number | string | null
    expenditure?: Decimal | DecimalJsLike | number | string | null
    hodApptDate?: Date | string | null
    departmentHodToStaff: staffCreateNestedOneWithoutDepartmentHodToStaffInput
    staffDeptCodToDepartment?: staffCreateNestedManyWithoutStaffDeptCodeToDepartmentInput
  }

  export type departmentUncheckedCreateWithoutCourseInput = {
    deptCode: string
    deptName: string
    hod: string
    noOfStaff?: number | null
    maxStaffStrength?: number | null
    budget?: Decimal | DecimalJsLike | number | string | null
    expenditure?: Decimal | DecimalJsLike | number | string | null
    hodApptDate?: Date | string | null
    staffDeptCodToDepartment?: staffUncheckedCreateNestedManyWithoutStaffDeptCodeToDepartmentInput
  }

  export type departmentCreateOrConnectWithoutCourseInput = {
    where: departmentWhereUniqueInput
    create: XOR<departmentCreateWithoutCourseInput, departmentUncheckedCreateWithoutCourseInput>
  }

  export type studentCreateWithoutCourseInput = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date | string
    country: countryCreateNestedOneWithoutStudentInput
    studModPerformance?: studModPerformanceCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutCourseInput = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date | string
    nationality: string
    studModPerformance?: studModPerformanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutCourseInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput>
  }

  export type studentCreateManyCourseInputEnvelope = {
    data: studentCreateManyCourseInput | studentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type departmentUpsertWithoutCourseInput = {
    update: XOR<departmentUpdateWithoutCourseInput, departmentUncheckedUpdateWithoutCourseInput>
    create: XOR<departmentCreateWithoutCourseInput, departmentUncheckedCreateWithoutCourseInput>
    where?: departmentWhereInput
  }

  export type departmentUpdateToOneWithWhereWithoutCourseInput = {
    where?: departmentWhereInput
    data: XOR<departmentUpdateWithoutCourseInput, departmentUncheckedUpdateWithoutCourseInput>
  }

  export type departmentUpdateWithoutCourseInput = {
    deptCode?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    noOfStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaffStrength?: NullableIntFieldUpdateOperationsInput | number | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentHodToStaff?: staffUpdateOneRequiredWithoutDepartmentHodToStaffNestedInput
    staffDeptCodToDepartment?: staffUpdateManyWithoutStaffDeptCodeToDepartmentNestedInput
  }

  export type departmentUncheckedUpdateWithoutCourseInput = {
    deptCode?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    hod?: StringFieldUpdateOperationsInput | string
    noOfStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaffStrength?: NullableIntFieldUpdateOperationsInput | number | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staffDeptCodToDepartment?: staffUncheckedUpdateManyWithoutStaffDeptCodeToDepartmentNestedInput
  }

  export type studentUpsertWithWhereUniqueWithoutCourseInput = {
    where: studentWhereUniqueInput
    update: XOR<studentUpdateWithoutCourseInput, studentUncheckedUpdateWithoutCourseInput>
    create: XOR<studentCreateWithoutCourseInput, studentUncheckedCreateWithoutCourseInput>
  }

  export type studentUpdateWithWhereUniqueWithoutCourseInput = {
    where: studentWhereUniqueInput
    data: XOR<studentUpdateWithoutCourseInput, studentUncheckedUpdateWithoutCourseInput>
  }

  export type studentUpdateManyWithWhereWithoutCourseInput = {
    where: studentScalarWhereInput
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutCourseInput>
  }

  export type studentScalarWhereInput = {
    AND?: studentScalarWhereInput | studentScalarWhereInput[]
    OR?: studentScalarWhereInput[]
    NOT?: studentScalarWhereInput | studentScalarWhereInput[]
    admNo?: StringFilter<"student"> | string
    studName?: StringFilter<"student"> | string
    gender?: StringFilter<"student"> | string
    address?: StringFilter<"student"> | string
    mobilePhone?: StringFilter<"student"> | string
    homePhone?: StringFilter<"student"> | string
    dob?: DateTimeFilter<"student"> | Date | string
    nationality?: StringFilter<"student"> | string
    crseCode?: StringFilter<"student"> | string
  }

  export type staffCreateWithoutDepartmentHodToStaffInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    typeOfEmployment: string
    highestQln: string
    designation: string
    staffDeptCodeToDepartment: departmentCreateNestedOneWithoutStaffDeptCodToDepartmentInput
    staffDependent?: staffDependentCreateNestedManyWithoutStaffInput
    module?: moduleCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutDepartmentHodToStaffInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    deptCode: string
    typeOfEmployment: string
    highestQln: string
    designation: string
    staffDependent?: staffDependentUncheckedCreateNestedManyWithoutStaffInput
    module?: moduleUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutDepartmentHodToStaffInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutDepartmentHodToStaffInput, staffUncheckedCreateWithoutDepartmentHodToStaffInput>
  }

  export type staffCreateWithoutStaffDeptCodeToDepartmentInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    typeOfEmployment: string
    highestQln: string
    designation: string
    departmentHodToStaff?: departmentCreateNestedManyWithoutDepartmentHodToStaffInput
    staffDependent?: staffDependentCreateNestedManyWithoutStaffInput
    module?: moduleCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutStaffDeptCodeToDepartmentInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    typeOfEmployment: string
    highestQln: string
    designation: string
    departmentHodToStaff?: departmentUncheckedCreateNestedManyWithoutDepartmentHodToStaffInput
    staffDependent?: staffDependentUncheckedCreateNestedManyWithoutStaffInput
    module?: moduleUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutStaffDeptCodeToDepartmentInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutStaffDeptCodeToDepartmentInput, staffUncheckedCreateWithoutStaffDeptCodeToDepartmentInput>
  }

  export type staffCreateManyStaffDeptCodeToDepartmentInputEnvelope = {
    data: staffCreateManyStaffDeptCodeToDepartmentInput | staffCreateManyStaffDeptCodeToDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type courseCreateWithoutDepartmentInput = {
    crseCode: string
    crseName: string
    crseFee: Decimal | DecimalJsLike | number | string
    labFee?: Decimal | DecimalJsLike | number | string | null
    student?: studentCreateNestedManyWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutDepartmentInput = {
    crseCode: string
    crseName: string
    crseFee: Decimal | DecimalJsLike | number | string
    labFee?: Decimal | DecimalJsLike | number | string | null
    student?: studentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type courseCreateOrConnectWithoutDepartmentInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutDepartmentInput, courseUncheckedCreateWithoutDepartmentInput>
  }

  export type courseCreateManyDepartmentInputEnvelope = {
    data: courseCreateManyDepartmentInput | courseCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type staffUpsertWithoutDepartmentHodToStaffInput = {
    update: XOR<staffUpdateWithoutDepartmentHodToStaffInput, staffUncheckedUpdateWithoutDepartmentHodToStaffInput>
    create: XOR<staffCreateWithoutDepartmentHodToStaffInput, staffUncheckedCreateWithoutDepartmentHodToStaffInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutDepartmentHodToStaffInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutDepartmentHodToStaffInput, staffUncheckedUpdateWithoutDepartmentHodToStaffInput>
  }

  export type staffUpdateWithoutDepartmentHodToStaffInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    staffDeptCodeToDepartment?: departmentUpdateOneRequiredWithoutStaffDeptCodToDepartmentNestedInput
    staffDependent?: staffDependentUpdateManyWithoutStaffNestedInput
    module?: moduleUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutDepartmentHodToStaffInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    deptCode?: StringFieldUpdateOperationsInput | string
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    staffDependent?: staffDependentUncheckedUpdateManyWithoutStaffNestedInput
    module?: moduleUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffUpsertWithWhereUniqueWithoutStaffDeptCodeToDepartmentInput = {
    where: staffWhereUniqueInput
    update: XOR<staffUpdateWithoutStaffDeptCodeToDepartmentInput, staffUncheckedUpdateWithoutStaffDeptCodeToDepartmentInput>
    create: XOR<staffCreateWithoutStaffDeptCodeToDepartmentInput, staffUncheckedCreateWithoutStaffDeptCodeToDepartmentInput>
  }

  export type staffUpdateWithWhereUniqueWithoutStaffDeptCodeToDepartmentInput = {
    where: staffWhereUniqueInput
    data: XOR<staffUpdateWithoutStaffDeptCodeToDepartmentInput, staffUncheckedUpdateWithoutStaffDeptCodeToDepartmentInput>
  }

  export type staffUpdateManyWithWhereWithoutStaffDeptCodeToDepartmentInput = {
    where: staffScalarWhereInput
    data: XOR<staffUpdateManyMutationInput, staffUncheckedUpdateManyWithoutStaffDeptCodeToDepartmentInput>
  }

  export type staffScalarWhereInput = {
    AND?: staffScalarWhereInput | staffScalarWhereInput[]
    OR?: staffScalarWhereInput[]
    NOT?: staffScalarWhereInput | staffScalarWhereInput[]
    staffNo?: StringFilter<"staff"> | string
    staffName?: StringFilter<"staff"> | string
    supervisorStaffNo?: StringNullableFilter<"staff"> | string | null
    dob?: DateTimeFilter<"staff"> | Date | string
    grade?: StringFilter<"staff"> | string
    maritalStatus?: StringFilter<"staff"> | string
    pay?: DecimalNullableFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    allowance?: DecimalNullableFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: DecimalNullableFilter<"staff"> | Decimal | DecimalJsLike | number | string | null
    gender?: StringFilter<"staff"> | string
    citizenship?: StringFilter<"staff"> | string
    joinYr?: IntFilter<"staff"> | number
    deptCode?: StringFilter<"staff"> | string
    typeOfEmployment?: StringFilter<"staff"> | string
    highestQln?: StringFilter<"staff"> | string
    designation?: StringFilter<"staff"> | string
  }

  export type courseUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: courseWhereUniqueInput
    update: XOR<courseUpdateWithoutDepartmentInput, courseUncheckedUpdateWithoutDepartmentInput>
    create: XOR<courseCreateWithoutDepartmentInput, courseUncheckedCreateWithoutDepartmentInput>
  }

  export type courseUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: courseWhereUniqueInput
    data: XOR<courseUpdateWithoutDepartmentInput, courseUncheckedUpdateWithoutDepartmentInput>
  }

  export type courseUpdateManyWithWhereWithoutDepartmentInput = {
    where: courseScalarWhereInput
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type courseScalarWhereInput = {
    AND?: courseScalarWhereInput | courseScalarWhereInput[]
    OR?: courseScalarWhereInput[]
    NOT?: courseScalarWhereInput | courseScalarWhereInput[]
    crseCode?: StringFilter<"course"> | string
    crseName?: StringFilter<"course"> | string
    offeredBy?: StringFilter<"course"> | string
    crseFee?: DecimalFilter<"course"> | Decimal | DecimalJsLike | number | string
    labFee?: DecimalNullableFilter<"course"> | Decimal | DecimalJsLike | number | string | null
  }

  export type departmentCreateWithoutDepartmentHodToStaffInput = {
    deptCode: string
    deptName: string
    noOfStaff?: number | null
    maxStaffStrength?: number | null
    budget?: Decimal | DecimalJsLike | number | string | null
    expenditure?: Decimal | DecimalJsLike | number | string | null
    hodApptDate?: Date | string | null
    staffDeptCodToDepartment?: staffCreateNestedManyWithoutStaffDeptCodeToDepartmentInput
    course?: courseCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUncheckedCreateWithoutDepartmentHodToStaffInput = {
    deptCode: string
    deptName: string
    noOfStaff?: number | null
    maxStaffStrength?: number | null
    budget?: Decimal | DecimalJsLike | number | string | null
    expenditure?: Decimal | DecimalJsLike | number | string | null
    hodApptDate?: Date | string | null
    staffDeptCodToDepartment?: staffUncheckedCreateNestedManyWithoutStaffDeptCodeToDepartmentInput
    course?: courseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentCreateOrConnectWithoutDepartmentHodToStaffInput = {
    where: departmentWhereUniqueInput
    create: XOR<departmentCreateWithoutDepartmentHodToStaffInput, departmentUncheckedCreateWithoutDepartmentHodToStaffInput>
  }

  export type departmentCreateManyDepartmentHodToStaffInputEnvelope = {
    data: departmentCreateManyDepartmentHodToStaffInput | departmentCreateManyDepartmentHodToStaffInput[]
    skipDuplicates?: boolean
  }

  export type departmentCreateWithoutStaffDeptCodToDepartmentInput = {
    deptCode: string
    deptName: string
    noOfStaff?: number | null
    maxStaffStrength?: number | null
    budget?: Decimal | DecimalJsLike | number | string | null
    expenditure?: Decimal | DecimalJsLike | number | string | null
    hodApptDate?: Date | string | null
    departmentHodToStaff: staffCreateNestedOneWithoutDepartmentHodToStaffInput
    course?: courseCreateNestedManyWithoutDepartmentInput
  }

  export type departmentUncheckedCreateWithoutStaffDeptCodToDepartmentInput = {
    deptCode: string
    deptName: string
    hod: string
    noOfStaff?: number | null
    maxStaffStrength?: number | null
    budget?: Decimal | DecimalJsLike | number | string | null
    expenditure?: Decimal | DecimalJsLike | number | string | null
    hodApptDate?: Date | string | null
    course?: courseUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type departmentCreateOrConnectWithoutStaffDeptCodToDepartmentInput = {
    where: departmentWhereUniqueInput
    create: XOR<departmentCreateWithoutStaffDeptCodToDepartmentInput, departmentUncheckedCreateWithoutStaffDeptCodToDepartmentInput>
  }

  export type staffDependentCreateWithoutStaffInput = {
    dependentName: string
    relationship?: string
  }

  export type staffDependentUncheckedCreateWithoutStaffInput = {
    dependentName: string
    relationship?: string
  }

  export type staffDependentCreateOrConnectWithoutStaffInput = {
    where: staffDependentWhereUniqueInput
    create: XOR<staffDependentCreateWithoutStaffInput, staffDependentUncheckedCreateWithoutStaffInput>
  }

  export type staffDependentCreateManyStaffInputEnvelope = {
    data: staffDependentCreateManyStaffInput | staffDependentCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type moduleCreateWithoutStaffInput = {
    modCode: string
    modName: string
    creditUnit: number
    preRequisiteModCodeToModule?: preRequisiteCreateNestedManyWithoutPreRequisiteModCodeToModuleInput
    preRequisiteRequisiteToModule?: preRequisiteCreateNestedManyWithoutPreRequisiteRequisiteToModuleInput
    studModPerformance?: studModPerformanceCreateNestedManyWithoutModuleInput
  }

  export type moduleUncheckedCreateWithoutStaffInput = {
    modCode: string
    modName: string
    creditUnit: number
    preRequisiteModCodeToModule?: preRequisiteUncheckedCreateNestedManyWithoutPreRequisiteModCodeToModuleInput
    preRequisiteRequisiteToModule?: preRequisiteUncheckedCreateNestedManyWithoutPreRequisiteRequisiteToModuleInput
    studModPerformance?: studModPerformanceUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutStaffInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutStaffInput, moduleUncheckedCreateWithoutStaffInput>
  }

  export type moduleCreateManyStaffInputEnvelope = {
    data: moduleCreateManyStaffInput | moduleCreateManyStaffInput[]
    skipDuplicates?: boolean
  }

  export type departmentUpsertWithWhereUniqueWithoutDepartmentHodToStaffInput = {
    where: departmentWhereUniqueInput
    update: XOR<departmentUpdateWithoutDepartmentHodToStaffInput, departmentUncheckedUpdateWithoutDepartmentHodToStaffInput>
    create: XOR<departmentCreateWithoutDepartmentHodToStaffInput, departmentUncheckedCreateWithoutDepartmentHodToStaffInput>
  }

  export type departmentUpdateWithWhereUniqueWithoutDepartmentHodToStaffInput = {
    where: departmentWhereUniqueInput
    data: XOR<departmentUpdateWithoutDepartmentHodToStaffInput, departmentUncheckedUpdateWithoutDepartmentHodToStaffInput>
  }

  export type departmentUpdateManyWithWhereWithoutDepartmentHodToStaffInput = {
    where: departmentScalarWhereInput
    data: XOR<departmentUpdateManyMutationInput, departmentUncheckedUpdateManyWithoutDepartmentHodToStaffInput>
  }

  export type departmentScalarWhereInput = {
    AND?: departmentScalarWhereInput | departmentScalarWhereInput[]
    OR?: departmentScalarWhereInput[]
    NOT?: departmentScalarWhereInput | departmentScalarWhereInput[]
    deptCode?: StringFilter<"department"> | string
    deptName?: StringFilter<"department"> | string
    hod?: StringFilter<"department"> | string
    noOfStaff?: IntNullableFilter<"department"> | number | null
    maxStaffStrength?: IntNullableFilter<"department"> | number | null
    budget?: DecimalNullableFilter<"department"> | Decimal | DecimalJsLike | number | string | null
    expenditure?: DecimalNullableFilter<"department"> | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: DateTimeNullableFilter<"department"> | Date | string | null
  }

  export type departmentUpsertWithoutStaffDeptCodToDepartmentInput = {
    update: XOR<departmentUpdateWithoutStaffDeptCodToDepartmentInput, departmentUncheckedUpdateWithoutStaffDeptCodToDepartmentInput>
    create: XOR<departmentCreateWithoutStaffDeptCodToDepartmentInput, departmentUncheckedCreateWithoutStaffDeptCodToDepartmentInput>
    where?: departmentWhereInput
  }

  export type departmentUpdateToOneWithWhereWithoutStaffDeptCodToDepartmentInput = {
    where?: departmentWhereInput
    data: XOR<departmentUpdateWithoutStaffDeptCodToDepartmentInput, departmentUncheckedUpdateWithoutStaffDeptCodToDepartmentInput>
  }

  export type departmentUpdateWithoutStaffDeptCodToDepartmentInput = {
    deptCode?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    noOfStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaffStrength?: NullableIntFieldUpdateOperationsInput | number | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentHodToStaff?: staffUpdateOneRequiredWithoutDepartmentHodToStaffNestedInput
    course?: courseUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateWithoutStaffDeptCodToDepartmentInput = {
    deptCode?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    hod?: StringFieldUpdateOperationsInput | string
    noOfStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaffStrength?: NullableIntFieldUpdateOperationsInput | number | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    course?: courseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type staffDependentUpsertWithWhereUniqueWithoutStaffInput = {
    where: staffDependentWhereUniqueInput
    update: XOR<staffDependentUpdateWithoutStaffInput, staffDependentUncheckedUpdateWithoutStaffInput>
    create: XOR<staffDependentCreateWithoutStaffInput, staffDependentUncheckedCreateWithoutStaffInput>
  }

  export type staffDependentUpdateWithWhereUniqueWithoutStaffInput = {
    where: staffDependentWhereUniqueInput
    data: XOR<staffDependentUpdateWithoutStaffInput, staffDependentUncheckedUpdateWithoutStaffInput>
  }

  export type staffDependentUpdateManyWithWhereWithoutStaffInput = {
    where: staffDependentScalarWhereInput
    data: XOR<staffDependentUpdateManyMutationInput, staffDependentUncheckedUpdateManyWithoutStaffInput>
  }

  export type staffDependentScalarWhereInput = {
    AND?: staffDependentScalarWhereInput | staffDependentScalarWhereInput[]
    OR?: staffDependentScalarWhereInput[]
    NOT?: staffDependentScalarWhereInput | staffDependentScalarWhereInput[]
    staffNo?: StringFilter<"staffDependent"> | string
    dependentName?: StringFilter<"staffDependent"> | string
    relationship?: StringFilter<"staffDependent"> | string
  }

  export type moduleUpsertWithWhereUniqueWithoutStaffInput = {
    where: moduleWhereUniqueInput
    update: XOR<moduleUpdateWithoutStaffInput, moduleUncheckedUpdateWithoutStaffInput>
    create: XOR<moduleCreateWithoutStaffInput, moduleUncheckedCreateWithoutStaffInput>
  }

  export type moduleUpdateWithWhereUniqueWithoutStaffInput = {
    where: moduleWhereUniqueInput
    data: XOR<moduleUpdateWithoutStaffInput, moduleUncheckedUpdateWithoutStaffInput>
  }

  export type moduleUpdateManyWithWhereWithoutStaffInput = {
    where: moduleScalarWhereInput
    data: XOR<moduleUpdateManyMutationInput, moduleUncheckedUpdateManyWithoutStaffInput>
  }

  export type moduleScalarWhereInput = {
    AND?: moduleScalarWhereInput | moduleScalarWhereInput[]
    OR?: moduleScalarWhereInput[]
    NOT?: moduleScalarWhereInput | moduleScalarWhereInput[]
    modCode?: StringFilter<"module"> | string
    modName?: StringFilter<"module"> | string
    creditUnit?: IntFilter<"module"> | number
    modCoord?: StringNullableFilter<"module"> | string | null
  }

  export type staffCreateWithoutModuleInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    typeOfEmployment: string
    highestQln: string
    designation: string
    departmentHodToStaff?: departmentCreateNestedManyWithoutDepartmentHodToStaffInput
    staffDeptCodeToDepartment: departmentCreateNestedOneWithoutStaffDeptCodToDepartmentInput
    staffDependent?: staffDependentCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutModuleInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    deptCode: string
    typeOfEmployment: string
    highestQln: string
    designation: string
    departmentHodToStaff?: departmentUncheckedCreateNestedManyWithoutDepartmentHodToStaffInput
    staffDependent?: staffDependentUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutModuleInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutModuleInput, staffUncheckedCreateWithoutModuleInput>
  }

  export type preRequisiteCreateWithoutPreRequisiteModCodeToModuleInput = {
    preRequisiteRequisiteToModule: moduleCreateNestedOneWithoutPreRequisiteRequisiteToModuleInput
  }

  export type preRequisiteUncheckedCreateWithoutPreRequisiteModCodeToModuleInput = {
    requisite: string
  }

  export type preRequisiteCreateOrConnectWithoutPreRequisiteModCodeToModuleInput = {
    where: preRequisiteWhereUniqueInput
    create: XOR<preRequisiteCreateWithoutPreRequisiteModCodeToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteModCodeToModuleInput>
  }

  export type preRequisiteCreateManyPreRequisiteModCodeToModuleInputEnvelope = {
    data: preRequisiteCreateManyPreRequisiteModCodeToModuleInput | preRequisiteCreateManyPreRequisiteModCodeToModuleInput[]
    skipDuplicates?: boolean
  }

  export type preRequisiteCreateWithoutPreRequisiteRequisiteToModuleInput = {
    preRequisiteModCodeToModule: moduleCreateNestedOneWithoutPreRequisiteModCodeToModuleInput
  }

  export type preRequisiteUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput = {
    modCode: string
  }

  export type preRequisiteCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput = {
    where: preRequisiteWhereUniqueInput
    create: XOR<preRequisiteCreateWithoutPreRequisiteRequisiteToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput>
  }

  export type preRequisiteCreateManyPreRequisiteRequisiteToModuleInputEnvelope = {
    data: preRequisiteCreateManyPreRequisiteRequisiteToModuleInput | preRequisiteCreateManyPreRequisiteRequisiteToModuleInput[]
    skipDuplicates?: boolean
  }

  export type studModPerformanceCreateWithoutModuleInput = {
    mark: number
    grade: string
    student: studentCreateNestedOneWithoutStudModPerformanceInput
  }

  export type studModPerformanceUncheckedCreateWithoutModuleInput = {
    admNo: string
    mark: number
    grade: string
  }

  export type studModPerformanceCreateOrConnectWithoutModuleInput = {
    where: studModPerformanceWhereUniqueInput
    create: XOR<studModPerformanceCreateWithoutModuleInput, studModPerformanceUncheckedCreateWithoutModuleInput>
  }

  export type studModPerformanceCreateManyModuleInputEnvelope = {
    data: studModPerformanceCreateManyModuleInput | studModPerformanceCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type staffUpsertWithoutModuleInput = {
    update: XOR<staffUpdateWithoutModuleInput, staffUncheckedUpdateWithoutModuleInput>
    create: XOR<staffCreateWithoutModuleInput, staffUncheckedCreateWithoutModuleInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutModuleInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutModuleInput, staffUncheckedUpdateWithoutModuleInput>
  }

  export type staffUpdateWithoutModuleInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    departmentHodToStaff?: departmentUpdateManyWithoutDepartmentHodToStaffNestedInput
    staffDeptCodeToDepartment?: departmentUpdateOneRequiredWithoutStaffDeptCodToDepartmentNestedInput
    staffDependent?: staffDependentUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutModuleInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    deptCode?: StringFieldUpdateOperationsInput | string
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    departmentHodToStaff?: departmentUncheckedUpdateManyWithoutDepartmentHodToStaffNestedInput
    staffDependent?: staffDependentUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type preRequisiteUpsertWithWhereUniqueWithoutPreRequisiteModCodeToModuleInput = {
    where: preRequisiteWhereUniqueInput
    update: XOR<preRequisiteUpdateWithoutPreRequisiteModCodeToModuleInput, preRequisiteUncheckedUpdateWithoutPreRequisiteModCodeToModuleInput>
    create: XOR<preRequisiteCreateWithoutPreRequisiteModCodeToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteModCodeToModuleInput>
  }

  export type preRequisiteUpdateWithWhereUniqueWithoutPreRequisiteModCodeToModuleInput = {
    where: preRequisiteWhereUniqueInput
    data: XOR<preRequisiteUpdateWithoutPreRequisiteModCodeToModuleInput, preRequisiteUncheckedUpdateWithoutPreRequisiteModCodeToModuleInput>
  }

  export type preRequisiteUpdateManyWithWhereWithoutPreRequisiteModCodeToModuleInput = {
    where: preRequisiteScalarWhereInput
    data: XOR<preRequisiteUpdateManyMutationInput, preRequisiteUncheckedUpdateManyWithoutPreRequisiteModCodeToModuleInput>
  }

  export type preRequisiteScalarWhereInput = {
    AND?: preRequisiteScalarWhereInput | preRequisiteScalarWhereInput[]
    OR?: preRequisiteScalarWhereInput[]
    NOT?: preRequisiteScalarWhereInput | preRequisiteScalarWhereInput[]
    modCode?: StringFilter<"preRequisite"> | string
    requisite?: StringFilter<"preRequisite"> | string
  }

  export type preRequisiteUpsertWithWhereUniqueWithoutPreRequisiteRequisiteToModuleInput = {
    where: preRequisiteWhereUniqueInput
    update: XOR<preRequisiteUpdateWithoutPreRequisiteRequisiteToModuleInput, preRequisiteUncheckedUpdateWithoutPreRequisiteRequisiteToModuleInput>
    create: XOR<preRequisiteCreateWithoutPreRequisiteRequisiteToModuleInput, preRequisiteUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput>
  }

  export type preRequisiteUpdateWithWhereUniqueWithoutPreRequisiteRequisiteToModuleInput = {
    where: preRequisiteWhereUniqueInput
    data: XOR<preRequisiteUpdateWithoutPreRequisiteRequisiteToModuleInput, preRequisiteUncheckedUpdateWithoutPreRequisiteRequisiteToModuleInput>
  }

  export type preRequisiteUpdateManyWithWhereWithoutPreRequisiteRequisiteToModuleInput = {
    where: preRequisiteScalarWhereInput
    data: XOR<preRequisiteUpdateManyMutationInput, preRequisiteUncheckedUpdateManyWithoutPreRequisiteRequisiteToModuleInput>
  }

  export type studModPerformanceUpsertWithWhereUniqueWithoutModuleInput = {
    where: studModPerformanceWhereUniqueInput
    update: XOR<studModPerformanceUpdateWithoutModuleInput, studModPerformanceUncheckedUpdateWithoutModuleInput>
    create: XOR<studModPerformanceCreateWithoutModuleInput, studModPerformanceUncheckedCreateWithoutModuleInput>
  }

  export type studModPerformanceUpdateWithWhereUniqueWithoutModuleInput = {
    where: studModPerformanceWhereUniqueInput
    data: XOR<studModPerformanceUpdateWithoutModuleInput, studModPerformanceUncheckedUpdateWithoutModuleInput>
  }

  export type studModPerformanceUpdateManyWithWhereWithoutModuleInput = {
    where: studModPerformanceScalarWhereInput
    data: XOR<studModPerformanceUpdateManyMutationInput, studModPerformanceUncheckedUpdateManyWithoutModuleInput>
  }

  export type studModPerformanceScalarWhereInput = {
    AND?: studModPerformanceScalarWhereInput | studModPerformanceScalarWhereInput[]
    OR?: studModPerformanceScalarWhereInput[]
    NOT?: studModPerformanceScalarWhereInput | studModPerformanceScalarWhereInput[]
    admNo?: StringFilter<"studModPerformance"> | string
    modRegistered?: StringFilter<"studModPerformance"> | string
    mark?: IntFilter<"studModPerformance"> | number
    grade?: StringFilter<"studModPerformance"> | string
  }

  export type staffCreateWithoutStaffDependentInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    typeOfEmployment: string
    highestQln: string
    designation: string
    departmentHodToStaff?: departmentCreateNestedManyWithoutDepartmentHodToStaffInput
    staffDeptCodeToDepartment: departmentCreateNestedOneWithoutStaffDeptCodToDepartmentInput
    module?: moduleCreateNestedManyWithoutStaffInput
  }

  export type staffUncheckedCreateWithoutStaffDependentInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    deptCode: string
    typeOfEmployment: string
    highestQln: string
    designation: string
    departmentHodToStaff?: departmentUncheckedCreateNestedManyWithoutDepartmentHodToStaffInput
    module?: moduleUncheckedCreateNestedManyWithoutStaffInput
  }

  export type staffCreateOrConnectWithoutStaffDependentInput = {
    where: staffWhereUniqueInput
    create: XOR<staffCreateWithoutStaffDependentInput, staffUncheckedCreateWithoutStaffDependentInput>
  }

  export type staffUpsertWithoutStaffDependentInput = {
    update: XOR<staffUpdateWithoutStaffDependentInput, staffUncheckedUpdateWithoutStaffDependentInput>
    create: XOR<staffCreateWithoutStaffDependentInput, staffUncheckedCreateWithoutStaffDependentInput>
    where?: staffWhereInput
  }

  export type staffUpdateToOneWithWhereWithoutStaffDependentInput = {
    where?: staffWhereInput
    data: XOR<staffUpdateWithoutStaffDependentInput, staffUncheckedUpdateWithoutStaffDependentInput>
  }

  export type staffUpdateWithoutStaffDependentInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    departmentHodToStaff?: departmentUpdateManyWithoutDepartmentHodToStaffNestedInput
    staffDeptCodeToDepartment?: departmentUpdateOneRequiredWithoutStaffDeptCodToDepartmentNestedInput
    module?: moduleUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutStaffDependentInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    deptCode?: StringFieldUpdateOperationsInput | string
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    departmentHodToStaff?: departmentUncheckedUpdateManyWithoutDepartmentHodToStaffNestedInput
    module?: moduleUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type moduleCreateWithoutPreRequisiteModCodeToModuleInput = {
    modCode: string
    modName: string
    creditUnit: number
    staff?: staffCreateNestedOneWithoutModuleInput
    preRequisiteRequisiteToModule?: preRequisiteCreateNestedManyWithoutPreRequisiteRequisiteToModuleInput
    studModPerformance?: studModPerformanceCreateNestedManyWithoutModuleInput
  }

  export type moduleUncheckedCreateWithoutPreRequisiteModCodeToModuleInput = {
    modCode: string
    modName: string
    creditUnit: number
    modCoord?: string | null
    preRequisiteRequisiteToModule?: preRequisiteUncheckedCreateNestedManyWithoutPreRequisiteRequisiteToModuleInput
    studModPerformance?: studModPerformanceUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutPreRequisiteModCodeToModuleInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutPreRequisiteModCodeToModuleInput, moduleUncheckedCreateWithoutPreRequisiteModCodeToModuleInput>
  }

  export type moduleCreateWithoutPreRequisiteRequisiteToModuleInput = {
    modCode: string
    modName: string
    creditUnit: number
    staff?: staffCreateNestedOneWithoutModuleInput
    preRequisiteModCodeToModule?: preRequisiteCreateNestedManyWithoutPreRequisiteModCodeToModuleInput
    studModPerformance?: studModPerformanceCreateNestedManyWithoutModuleInput
  }

  export type moduleUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput = {
    modCode: string
    modName: string
    creditUnit: number
    modCoord?: string | null
    preRequisiteModCodeToModule?: preRequisiteUncheckedCreateNestedManyWithoutPreRequisiteModCodeToModuleInput
    studModPerformance?: studModPerformanceUncheckedCreateNestedManyWithoutModuleInput
  }

  export type moduleCreateOrConnectWithoutPreRequisiteRequisiteToModuleInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutPreRequisiteRequisiteToModuleInput, moduleUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput>
  }

  export type moduleUpsertWithoutPreRequisiteModCodeToModuleInput = {
    update: XOR<moduleUpdateWithoutPreRequisiteModCodeToModuleInput, moduleUncheckedUpdateWithoutPreRequisiteModCodeToModuleInput>
    create: XOR<moduleCreateWithoutPreRequisiteModCodeToModuleInput, moduleUncheckedCreateWithoutPreRequisiteModCodeToModuleInput>
    where?: moduleWhereInput
  }

  export type moduleUpdateToOneWithWhereWithoutPreRequisiteModCodeToModuleInput = {
    where?: moduleWhereInput
    data: XOR<moduleUpdateWithoutPreRequisiteModCodeToModuleInput, moduleUncheckedUpdateWithoutPreRequisiteModCodeToModuleInput>
  }

  export type moduleUpdateWithoutPreRequisiteModCodeToModuleInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
    staff?: staffUpdateOneWithoutModuleNestedInput
    preRequisiteRequisiteToModule?: preRequisiteUpdateManyWithoutPreRequisiteRequisiteToModuleNestedInput
    studModPerformance?: studModPerformanceUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateWithoutPreRequisiteModCodeToModuleInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
    modCoord?: NullableStringFieldUpdateOperationsInput | string | null
    preRequisiteRequisiteToModule?: preRequisiteUncheckedUpdateManyWithoutPreRequisiteRequisiteToModuleNestedInput
    studModPerformance?: studModPerformanceUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type moduleUpsertWithoutPreRequisiteRequisiteToModuleInput = {
    update: XOR<moduleUpdateWithoutPreRequisiteRequisiteToModuleInput, moduleUncheckedUpdateWithoutPreRequisiteRequisiteToModuleInput>
    create: XOR<moduleCreateWithoutPreRequisiteRequisiteToModuleInput, moduleUncheckedCreateWithoutPreRequisiteRequisiteToModuleInput>
    where?: moduleWhereInput
  }

  export type moduleUpdateToOneWithWhereWithoutPreRequisiteRequisiteToModuleInput = {
    where?: moduleWhereInput
    data: XOR<moduleUpdateWithoutPreRequisiteRequisiteToModuleInput, moduleUncheckedUpdateWithoutPreRequisiteRequisiteToModuleInput>
  }

  export type moduleUpdateWithoutPreRequisiteRequisiteToModuleInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
    staff?: staffUpdateOneWithoutModuleNestedInput
    preRequisiteModCodeToModule?: preRequisiteUpdateManyWithoutPreRequisiteModCodeToModuleNestedInput
    studModPerformance?: studModPerformanceUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateWithoutPreRequisiteRequisiteToModuleInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
    modCoord?: NullableStringFieldUpdateOperationsInput | string | null
    preRequisiteModCodeToModule?: preRequisiteUncheckedUpdateManyWithoutPreRequisiteModCodeToModuleNestedInput
    studModPerformance?: studModPerformanceUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type studentCreateWithoutCountryInput = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date | string
    course: courseCreateNestedOneWithoutStudentInput
    studModPerformance?: studModPerformanceCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutCountryInput = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date | string
    crseCode: string
    studModPerformance?: studModPerformanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutCountryInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutCountryInput, studentUncheckedCreateWithoutCountryInput>
  }

  export type studentCreateManyCountryInputEnvelope = {
    data: studentCreateManyCountryInput | studentCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type studentUpsertWithWhereUniqueWithoutCountryInput = {
    where: studentWhereUniqueInput
    update: XOR<studentUpdateWithoutCountryInput, studentUncheckedUpdateWithoutCountryInput>
    create: XOR<studentCreateWithoutCountryInput, studentUncheckedCreateWithoutCountryInput>
  }

  export type studentUpdateWithWhereUniqueWithoutCountryInput = {
    where: studentWhereUniqueInput
    data: XOR<studentUpdateWithoutCountryInput, studentUncheckedUpdateWithoutCountryInput>
  }

  export type studentUpdateManyWithWhereWithoutCountryInput = {
    where: studentScalarWhereInput
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutCountryInput>
  }

  export type countryCreateWithoutStudentInput = {
    countryName: string
    language: string
    region: string
  }

  export type countryUncheckedCreateWithoutStudentInput = {
    countryName: string
    language: string
    region: string
  }

  export type countryCreateOrConnectWithoutStudentInput = {
    where: countryWhereUniqueInput
    create: XOR<countryCreateWithoutStudentInput, countryUncheckedCreateWithoutStudentInput>
  }

  export type courseCreateWithoutStudentInput = {
    crseCode: string
    crseName: string
    crseFee: Decimal | DecimalJsLike | number | string
    labFee?: Decimal | DecimalJsLike | number | string | null
    department: departmentCreateNestedOneWithoutCourseInput
  }

  export type courseUncheckedCreateWithoutStudentInput = {
    crseCode: string
    crseName: string
    offeredBy: string
    crseFee: Decimal | DecimalJsLike | number | string
    labFee?: Decimal | DecimalJsLike | number | string | null
  }

  export type courseCreateOrConnectWithoutStudentInput = {
    where: courseWhereUniqueInput
    create: XOR<courseCreateWithoutStudentInput, courseUncheckedCreateWithoutStudentInput>
  }

  export type studModPerformanceCreateWithoutStudentInput = {
    mark: number
    grade: string
    module: moduleCreateNestedOneWithoutStudModPerformanceInput
  }

  export type studModPerformanceUncheckedCreateWithoutStudentInput = {
    modRegistered: string
    mark: number
    grade: string
  }

  export type studModPerformanceCreateOrConnectWithoutStudentInput = {
    where: studModPerformanceWhereUniqueInput
    create: XOR<studModPerformanceCreateWithoutStudentInput, studModPerformanceUncheckedCreateWithoutStudentInput>
  }

  export type studModPerformanceCreateManyStudentInputEnvelope = {
    data: studModPerformanceCreateManyStudentInput | studModPerformanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type countryUpsertWithoutStudentInput = {
    update: XOR<countryUpdateWithoutStudentInput, countryUncheckedUpdateWithoutStudentInput>
    create: XOR<countryCreateWithoutStudentInput, countryUncheckedCreateWithoutStudentInput>
    where?: countryWhereInput
  }

  export type countryUpdateToOneWithWhereWithoutStudentInput = {
    where?: countryWhereInput
    data: XOR<countryUpdateWithoutStudentInput, countryUncheckedUpdateWithoutStudentInput>
  }

  export type countryUpdateWithoutStudentInput = {
    countryName?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type countryUncheckedUpdateWithoutStudentInput = {
    countryName?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
  }

  export type courseUpsertWithoutStudentInput = {
    update: XOR<courseUpdateWithoutStudentInput, courseUncheckedUpdateWithoutStudentInput>
    create: XOR<courseCreateWithoutStudentInput, courseUncheckedCreateWithoutStudentInput>
    where?: courseWhereInput
  }

  export type courseUpdateToOneWithWhereWithoutStudentInput = {
    where?: courseWhereInput
    data: XOR<courseUpdateWithoutStudentInput, courseUncheckedUpdateWithoutStudentInput>
  }

  export type courseUpdateWithoutStudentInput = {
    crseCode?: StringFieldUpdateOperationsInput | string
    crseName?: StringFieldUpdateOperationsInput | string
    crseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    department?: departmentUpdateOneRequiredWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutStudentInput = {
    crseCode?: StringFieldUpdateOperationsInput | string
    crseName?: StringFieldUpdateOperationsInput | string
    offeredBy?: StringFieldUpdateOperationsInput | string
    crseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type studModPerformanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: studModPerformanceWhereUniqueInput
    update: XOR<studModPerformanceUpdateWithoutStudentInput, studModPerformanceUncheckedUpdateWithoutStudentInput>
    create: XOR<studModPerformanceCreateWithoutStudentInput, studModPerformanceUncheckedCreateWithoutStudentInput>
  }

  export type studModPerformanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: studModPerformanceWhereUniqueInput
    data: XOR<studModPerformanceUpdateWithoutStudentInput, studModPerformanceUncheckedUpdateWithoutStudentInput>
  }

  export type studModPerformanceUpdateManyWithWhereWithoutStudentInput = {
    where: studModPerformanceScalarWhereInput
    data: XOR<studModPerformanceUpdateManyMutationInput, studModPerformanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type studentCreateWithoutStudModPerformanceInput = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date | string
    country: countryCreateNestedOneWithoutStudentInput
    course: courseCreateNestedOneWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutStudModPerformanceInput = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date | string
    nationality: string
    crseCode: string
  }

  export type studentCreateOrConnectWithoutStudModPerformanceInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutStudModPerformanceInput, studentUncheckedCreateWithoutStudModPerformanceInput>
  }

  export type moduleCreateWithoutStudModPerformanceInput = {
    modCode: string
    modName: string
    creditUnit: number
    staff?: staffCreateNestedOneWithoutModuleInput
    preRequisiteModCodeToModule?: preRequisiteCreateNestedManyWithoutPreRequisiteModCodeToModuleInput
    preRequisiteRequisiteToModule?: preRequisiteCreateNestedManyWithoutPreRequisiteRequisiteToModuleInput
  }

  export type moduleUncheckedCreateWithoutStudModPerformanceInput = {
    modCode: string
    modName: string
    creditUnit: number
    modCoord?: string | null
    preRequisiteModCodeToModule?: preRequisiteUncheckedCreateNestedManyWithoutPreRequisiteModCodeToModuleInput
    preRequisiteRequisiteToModule?: preRequisiteUncheckedCreateNestedManyWithoutPreRequisiteRequisiteToModuleInput
  }

  export type moduleCreateOrConnectWithoutStudModPerformanceInput = {
    where: moduleWhereUniqueInput
    create: XOR<moduleCreateWithoutStudModPerformanceInput, moduleUncheckedCreateWithoutStudModPerformanceInput>
  }

  export type studentUpsertWithoutStudModPerformanceInput = {
    update: XOR<studentUpdateWithoutStudModPerformanceInput, studentUncheckedUpdateWithoutStudModPerformanceInput>
    create: XOR<studentCreateWithoutStudModPerformanceInput, studentUncheckedCreateWithoutStudModPerformanceInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutStudModPerformanceInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutStudModPerformanceInput, studentUncheckedUpdateWithoutStudModPerformanceInput>
  }

  export type studentUpdateWithoutStudModPerformanceInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: countryUpdateOneRequiredWithoutStudentNestedInput
    course?: courseUpdateOneRequiredWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutStudModPerformanceInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    crseCode?: StringFieldUpdateOperationsInput | string
  }

  export type moduleUpsertWithoutStudModPerformanceInput = {
    update: XOR<moduleUpdateWithoutStudModPerformanceInput, moduleUncheckedUpdateWithoutStudModPerformanceInput>
    create: XOR<moduleCreateWithoutStudModPerformanceInput, moduleUncheckedCreateWithoutStudModPerformanceInput>
    where?: moduleWhereInput
  }

  export type moduleUpdateToOneWithWhereWithoutStudModPerformanceInput = {
    where?: moduleWhereInput
    data: XOR<moduleUpdateWithoutStudModPerformanceInput, moduleUncheckedUpdateWithoutStudModPerformanceInput>
  }

  export type moduleUpdateWithoutStudModPerformanceInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
    staff?: staffUpdateOneWithoutModuleNestedInput
    preRequisiteModCodeToModule?: preRequisiteUpdateManyWithoutPreRequisiteModCodeToModuleNestedInput
    preRequisiteRequisiteToModule?: preRequisiteUpdateManyWithoutPreRequisiteRequisiteToModuleNestedInput
  }

  export type moduleUncheckedUpdateWithoutStudModPerformanceInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
    modCoord?: NullableStringFieldUpdateOperationsInput | string | null
    preRequisiteModCodeToModule?: preRequisiteUncheckedUpdateManyWithoutPreRequisiteModCodeToModuleNestedInput
    preRequisiteRequisiteToModule?: preRequisiteUncheckedUpdateManyWithoutPreRequisiteRequisiteToModuleNestedInput
  }

  export type studentCreateManyCourseInput = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date | string
    nationality: string
  }

  export type studentUpdateWithoutCourseInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: countryUpdateOneRequiredWithoutStudentNestedInput
    studModPerformance?: studModPerformanceUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutCourseInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
    studModPerformance?: studModPerformanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateManyWithoutCourseInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    nationality?: StringFieldUpdateOperationsInput | string
  }

  export type staffCreateManyStaffDeptCodeToDepartmentInput = {
    staffNo: string
    staffName: string
    supervisorStaffNo?: string | null
    dob: Date | string
    grade: string
    maritalStatus: string
    pay?: Decimal | DecimalJsLike | number | string | null
    allowance?: Decimal | DecimalJsLike | number | string | null
    hourlyRate?: Decimal | DecimalJsLike | number | string | null
    gender: string
    citizenship: string
    joinYr: number
    typeOfEmployment: string
    highestQln: string
    designation: string
  }

  export type courseCreateManyDepartmentInput = {
    crseCode: string
    crseName: string
    crseFee: Decimal | DecimalJsLike | number | string
    labFee?: Decimal | DecimalJsLike | number | string | null
  }

  export type staffUpdateWithoutStaffDeptCodeToDepartmentInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    departmentHodToStaff?: departmentUpdateManyWithoutDepartmentHodToStaffNestedInput
    staffDependent?: staffDependentUpdateManyWithoutStaffNestedInput
    module?: moduleUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateWithoutStaffDeptCodeToDepartmentInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    departmentHodToStaff?: departmentUncheckedUpdateManyWithoutDepartmentHodToStaffNestedInput
    staffDependent?: staffDependentUncheckedUpdateManyWithoutStaffNestedInput
    module?: moduleUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type staffUncheckedUpdateManyWithoutStaffDeptCodeToDepartmentInput = {
    staffNo?: StringFieldUpdateOperationsInput | string
    staffName?: StringFieldUpdateOperationsInput | string
    supervisorStaffNo?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    grade?: StringFieldUpdateOperationsInput | string
    maritalStatus?: StringFieldUpdateOperationsInput | string
    pay?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    allowance?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hourlyRate?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    gender?: StringFieldUpdateOperationsInput | string
    citizenship?: StringFieldUpdateOperationsInput | string
    joinYr?: IntFieldUpdateOperationsInput | number
    typeOfEmployment?: StringFieldUpdateOperationsInput | string
    highestQln?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
  }

  export type courseUpdateWithoutDepartmentInput = {
    crseCode?: StringFieldUpdateOperationsInput | string
    crseName?: StringFieldUpdateOperationsInput | string
    crseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    student?: studentUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateWithoutDepartmentInput = {
    crseCode?: StringFieldUpdateOperationsInput | string
    crseName?: StringFieldUpdateOperationsInput | string
    crseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    student?: studentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type courseUncheckedUpdateManyWithoutDepartmentInput = {
    crseCode?: StringFieldUpdateOperationsInput | string
    crseName?: StringFieldUpdateOperationsInput | string
    crseFee?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    labFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type departmentCreateManyDepartmentHodToStaffInput = {
    deptCode: string
    deptName: string
    noOfStaff?: number | null
    maxStaffStrength?: number | null
    budget?: Decimal | DecimalJsLike | number | string | null
    expenditure?: Decimal | DecimalJsLike | number | string | null
    hodApptDate?: Date | string | null
  }

  export type staffDependentCreateManyStaffInput = {
    dependentName: string
    relationship?: string
  }

  export type moduleCreateManyStaffInput = {
    modCode: string
    modName: string
    creditUnit: number
  }

  export type departmentUpdateWithoutDepartmentHodToStaffInput = {
    deptCode?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    noOfStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaffStrength?: NullableIntFieldUpdateOperationsInput | number | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staffDeptCodToDepartment?: staffUpdateManyWithoutStaffDeptCodeToDepartmentNestedInput
    course?: courseUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateWithoutDepartmentHodToStaffInput = {
    deptCode?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    noOfStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaffStrength?: NullableIntFieldUpdateOperationsInput | number | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staffDeptCodToDepartment?: staffUncheckedUpdateManyWithoutStaffDeptCodeToDepartmentNestedInput
    course?: courseUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type departmentUncheckedUpdateManyWithoutDepartmentHodToStaffInput = {
    deptCode?: StringFieldUpdateOperationsInput | string
    deptName?: StringFieldUpdateOperationsInput | string
    noOfStaff?: NullableIntFieldUpdateOperationsInput | number | null
    maxStaffStrength?: NullableIntFieldUpdateOperationsInput | number | null
    budget?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    expenditure?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    hodApptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type staffDependentUpdateWithoutStaffInput = {
    dependentName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
  }

  export type staffDependentUncheckedUpdateWithoutStaffInput = {
    dependentName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
  }

  export type staffDependentUncheckedUpdateManyWithoutStaffInput = {
    dependentName?: StringFieldUpdateOperationsInput | string
    relationship?: StringFieldUpdateOperationsInput | string
  }

  export type moduleUpdateWithoutStaffInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
    preRequisiteModCodeToModule?: preRequisiteUpdateManyWithoutPreRequisiteModCodeToModuleNestedInput
    preRequisiteRequisiteToModule?: preRequisiteUpdateManyWithoutPreRequisiteRequisiteToModuleNestedInput
    studModPerformance?: studModPerformanceUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateWithoutStaffInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
    preRequisiteModCodeToModule?: preRequisiteUncheckedUpdateManyWithoutPreRequisiteModCodeToModuleNestedInput
    preRequisiteRequisiteToModule?: preRequisiteUncheckedUpdateManyWithoutPreRequisiteRequisiteToModuleNestedInput
    studModPerformance?: studModPerformanceUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type moduleUncheckedUpdateManyWithoutStaffInput = {
    modCode?: StringFieldUpdateOperationsInput | string
    modName?: StringFieldUpdateOperationsInput | string
    creditUnit?: IntFieldUpdateOperationsInput | number
  }

  export type preRequisiteCreateManyPreRequisiteModCodeToModuleInput = {
    requisite: string
  }

  export type preRequisiteCreateManyPreRequisiteRequisiteToModuleInput = {
    modCode: string
  }

  export type studModPerformanceCreateManyModuleInput = {
    admNo: string
    mark: number
    grade: string
  }

  export type preRequisiteUpdateWithoutPreRequisiteModCodeToModuleInput = {
    preRequisiteRequisiteToModule?: moduleUpdateOneRequiredWithoutPreRequisiteRequisiteToModuleNestedInput
  }

  export type preRequisiteUncheckedUpdateWithoutPreRequisiteModCodeToModuleInput = {
    requisite?: StringFieldUpdateOperationsInput | string
  }

  export type preRequisiteUncheckedUpdateManyWithoutPreRequisiteModCodeToModuleInput = {
    requisite?: StringFieldUpdateOperationsInput | string
  }

  export type preRequisiteUpdateWithoutPreRequisiteRequisiteToModuleInput = {
    preRequisiteModCodeToModule?: moduleUpdateOneRequiredWithoutPreRequisiteModCodeToModuleNestedInput
  }

  export type preRequisiteUncheckedUpdateWithoutPreRequisiteRequisiteToModuleInput = {
    modCode?: StringFieldUpdateOperationsInput | string
  }

  export type preRequisiteUncheckedUpdateManyWithoutPreRequisiteRequisiteToModuleInput = {
    modCode?: StringFieldUpdateOperationsInput | string
  }

  export type studModPerformanceUpdateWithoutModuleInput = {
    mark?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    student?: studentUpdateOneRequiredWithoutStudModPerformanceNestedInput
  }

  export type studModPerformanceUncheckedUpdateWithoutModuleInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    mark?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type studModPerformanceUncheckedUpdateManyWithoutModuleInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    mark?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type studentCreateManyCountryInput = {
    admNo: string
    studName: string
    gender: string
    address: string
    mobilePhone: string
    homePhone: string
    dob: Date | string
    crseCode: string
  }

  export type studentUpdateWithoutCountryInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: courseUpdateOneRequiredWithoutStudentNestedInput
    studModPerformance?: studModPerformanceUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutCountryInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    crseCode?: StringFieldUpdateOperationsInput | string
    studModPerformance?: studModPerformanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateManyWithoutCountryInput = {
    admNo?: StringFieldUpdateOperationsInput | string
    studName?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    mobilePhone?: StringFieldUpdateOperationsInput | string
    homePhone?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    crseCode?: StringFieldUpdateOperationsInput | string
  }

  export type studModPerformanceCreateManyStudentInput = {
    modRegistered: string
    mark: number
    grade: string
  }

  export type studModPerformanceUpdateWithoutStudentInput = {
    mark?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
    module?: moduleUpdateOneRequiredWithoutStudModPerformanceNestedInput
  }

  export type studModPerformanceUncheckedUpdateWithoutStudentInput = {
    modRegistered?: StringFieldUpdateOperationsInput | string
    mark?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
  }

  export type studModPerformanceUncheckedUpdateManyWithoutStudentInput = {
    modRegistered?: StringFieldUpdateOperationsInput | string
    mark?: IntFieldUpdateOperationsInput | number
    grade?: StringFieldUpdateOperationsInput | string
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