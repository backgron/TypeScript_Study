# TypeScript

## 类型

### never 

+ 被定义`never`表示没有返回值类型即程序无法执行到返回结果 如死循环、报错
+ `never` 是所有类型的子类型

### void

+ 函数被定义`void`表示返回为空，返回值会为`undefined`
+ 变量被定义`void`类型后，只能复制为`undefined`或者`null`

### any

+ 任何类型 / 动态类型
+ 所有类型都可以是any类型

### unknow

+ 

### 联合类型 A | B

+ 可以是A或者是B

### 交叉类型 A & B

+ 同时满足类型A和B

## 关键字

### keyof

返回interface的key

### extends

继承于，可以跟三元表达式

### in

返回interface的value

### infer

类型推断，判断是否为某个类型，可以跟三元表达式

### typeof

## 语法

### 三元表达式 A ? B ：C

## 内置工具

### Partial  将一个类型的属性全部变为可选

+ 定义

  ```typescript
  type Partial<T> = {
      [P in keyof T]?: T[P];
  };
  ```

+ 使用

  ```typescript
  interface Student {
    name: string
    age: number
  }
  // 不写age也不会报错
  let student: Partial<Student> = {
    name: "name",
  }
  ```

### Required 将一个类型的属性变为全部必选

+ 定义

  ```typescript
  type Required<T> = {
      [P in keyof T]-?: T[P];
  };
  ```

+ 使用

  ```typescript
  interface Student {
    name?: string
    age?: number
  }
  // 不写age也会报错
  let student: Required<Student> = {
    name: "name",
  }
  ```

### Readonly 将一个类型的属性全部变为只读状态

+ 定义

  ```typescript
  type Readonly<T> = {
      readonly [P in keyof T]: T[P];
  };
  ```

+ 使用

  ```typescript
  interface Student {
    name?: string
    age?: number
  }
  
  let student: Readonly<Student> = {
    name: "name",
    age:15
  }
  // 报错，提示name为只读属性
  student.name='other'
  ```
  

### Record 构造一个字面量对象 Type

+ 定义

  ```typescript
  type Record<K extends keyof any, T> = {
      [P in K]: T;
  };
  ```

+ 使用

  ```typescript
  type Student = Record<"name" | "age", string | number>
  
  //等价于
  type Student = {
    name: string | number
    age: string | number
  }
  ```
  
+ 使用2

  ```typescript
  type Key = "name" | "age"
  type Value = { thisValueIs: string }
  
  type Res = Record<Key, Value>
  //等价于
  type Res = {
    name: Value
    age: Value
  }
  ```

  

### Pick 从一个Type中选出一些属性来构造一个新的Type

+ 定义

  ```typescript
  type Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };
  ```

+ 使用

  ```typescript
  interface Student {
    name: string
    age: number
    sex: 0 | 1
  }
  
  type pickStudent = Pick<Student, "name" | "sex">
  
  //等价于
  type pickStudent = {
    name: string
    sex: 0 | 1
  }
  ```

### Omit 从一个Type中删除一些属性，用剩下的构造一个新的Type

+ 定义

  ```typescript
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  ```

+ 使用

  ```typescript
  interface Student {
    name: string
    age: number
    sex: 0 | 1
  }
  
  type omitStudent = Omit<Student, "name" | "age">
  
  //等价于
  type omitStudent = {
    sex: 0 | 1
  }
  
  ```

### Exclude 排除一个联合类型中的某一些类型，来构建一个类型

+ 定义

  ```typescript
  type Exclude<T, U> = T extends U ? never : T;
  ```

+ 使用

  ```typescript
  type uniteType = string | number | Object
  
  type ExcludeUite = Exclude<UniteType, string>
  
  //等价于
  type excludeUite = number | Object
  ```

### Extract 提取一个联合类型中的某些类型，来构造一个新的类型

+ 定义

  ```typescript
  type Extract<T, U> = T extends U ? T : never;
  ```

+ 使用

  ```typescript
  type Student = {
    name: string
    age: number
  }
  
  type UniteType = string | number | Student
  
  type ExtractUite = Extract<UniteType, Student>
  
  //等价于
  type ExtractUite = Student
  
  ```

### Readonly 将一个类型的属性全部变为只读状态

+ 定义

  ```typescript
  type NonNullable<T> = T extends null | undefined ? never : T;
  ```

+ 使用

  ```typescript
  type Student = {
    name?: string
    age: number
    other: undefined
  }
  
  type NonNullableStudent = NonNullable<Student | undefined | string>
  
  //等价
  type NonNullableStudent = Student | string
  ```

### Readonly 将一个类型的属性全部变为只读状态

+ 定义

  ```typescript
  ```

+ 使用

  ```typescript
  ```

### Readonly 将一个类型的属性全部变为只读状态

+ 定义

  ```typescript
  ```

+ 使用

  ```typescript
  ```

### Readonly 将一个类型的属性全部变为只读状态

+ 定义

  ```typescript
  ```

+ 使用

  ```typescript
  ```

### Readonly 将一个类型的属性全部变为只读状态

+ 定义

  ```typescript
  ```

+ 使用

  ```typescript
  ```

### Readonly 将一个类型的属性全部变为只读状态

+ 定义

  ```typescript
  ```

+ 使用

  ```typescript
  ```

### Readonly 将一个类型的属性全部变为只读状态

+ 定义

  ```typescript
  ```

+ 使用

  ```typescript
  ```

### Readonly 将一个类型的属性全部变为只读状态

+ 定义

  ```typescript
  ```

+ 使用

  ```typescript
  ```

### Readonly 将一个类型的属性全部变为只读状态

+ 定义

  ```typescript
  
  ```

+ 使用

  ```typescript
  ```

### Readonly 将一个类型的属性全部变为只读状态

+ 定义

  ```typescript
  ```

+ 使用

  ```typescript
  ```

# tsconfig.json

+ tsconfig.json  是项目ts的配置文件

## 配置项

+ `files`:数组类型，用于表示`ts`管理的文件的具体文件路径

+ `exclude`:数组类型，用于表示`ts`排除的文件

+ `include`:数组类型，用于表示`ts`管理的文件

+ `compileOnSave`:布尔类型，用于`IDE`保存时是否生成编译后文件

+ `extends`:字符串类型，用于继承ts配置

+ `typeAcquistion`:对象类型，设置自动引入库类型定义文件`(.d.ts)`相关，有下面三个子属性

  + `enable`:布尔类型，是否开启自动引入库类型定义文件，默认`false`
  + `include`:数组类型，允许自动引入的库名，如`["jquery","lodash"]`
  + `exculde`:数组类型，排除的库名

+ `complierOptions`:对象类型，设置比那一相关的选项，不设置使用默认配置，配置项比较多，下面独立介绍。

  **注意**：如果不设定`files`和`include`，`ts`默认是`exclude`以外所有的`.ts`和`.tsx`结尾的文件，`files`优先级大于`exclude`大于`include`。

## compilerOptions

+ 目前用过的：

  ```json
   "compilerOptions": {
       "target": "es5",  // 编译后的语言版本
       "module": "commonjs", // 模块化规范
       "jsx": "react", // jsx 用于什么环境 
       "declaration": true,   // 创建 .d.ts 类型声明文件
       "outDir": "./",  // 编译后文件输出路径
       "rootDir":"./src/components", //入口文件
       "moduleResolution": "node",  // 模块解析策略
       "esModuleInterop": true, // 实现es和commonjs相互操作
   }
  ```

  

+ 更多配置：

```json
  "compilerOptions": {
    /* Basic Options */
    "target": "es5", /* target用于指定编译之后的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */
    "module": "commonjs" ,/* 用来指定要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */
    "lib": ["es6", "dom"], /* lib用于指定要包含在编译中的库文件 */
    "allowJs": true,                       /* allowJs设置的值为true或false，用来指定是否允许编译js文件，默认是false，即不编译js文件 */
    "checkJs": true,                       /* checkJs的值为true或false，用来指定是否检查和报告js文件中的错误，默认是false */
    "jsx": "preserve",                     /* 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'. */
    "declaration": true,                   /* declaration的值为true或false，用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true */
    "declarationMap": true,                /* 值为true或false，指定是否为声明文件.d.ts生成map文件 */
    "sourceMap": true,                     /* sourceMap的值为true或false，用来指定编译时是否生成.map文件 */
    "outFile": "./",                       /* outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置 */
    "outDir": "./",                        /* outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹 */
    "rootDir": "./",                       /* 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译 */
    "composite": true,                     /* 是否编译构建引用项目  */
    "incremental": true,                   /* 是否启用增量编译*/
    "tsBuildInfoFile": "./",               /* 指定文件用来存储增量编译信息 */
    "removeComments": true,                /* removeComments的值为true或false，用于指定是否将编译后的文件中的注释删掉，设为true的话即删掉注释，默认为false */
    "noEmit": true,                        /* 不生成编译文件，这个一般比较少用 */
    "importHelpers": true,                 /* importHelpers的值为true或false，指定是否引入tslib里的辅助工具函数，默认为false */
    "downlevelIteration": true,            /* 当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持 */
    "isolatedModules": true,               /* isolatedModules的值为true或false，指定是否将每个文件作为单独的模块，默认为true，它不可以和declaration同时设定 */

    /* Strict Type-Checking Options */
    "strict": true /* strict的值为true或false，用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个严格类型检查，默认为false */,
    "noImplicitAny": true,                 /* noImplicitAny的值为true或false，如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为any，如果noImplicitAny的值为true的话。则没有明确的类型会报错。默认值为false */
    "strictNullChecks": true,              /* strictNullChecks为true时，null和undefined值不能赋给非这两种类型的值，别的类型也不能赋给他们，除了any类型。还有个例外就是undefined可以赋值给void类型 */
    "strictFunctionTypes": true,           /* strictFunctionTypes的值为true或false，用于指定是否使用函数参数双向协变检查 */
    "strictBindCallApply": true,           /* 设为true后会对bind、call和apply绑定的方法的参数的检测是严格检测的 */
    "strictPropertyInitialization": true,  /* 设为true后会检查类的非undefined属性是否已经在构造函数里初始化，如果要开启这项，需要同时开启strictNullChecks，默认为false */
   "noImplicitThis": true,                /* 当this表达式的值为any类型的时候，生成一个错误 */
    "alwaysStrict": true,                  /* alwaysStrict的值为true或false，指定始终以严格模式检查每个模块，并且在编译之后的js文件中加入"use strict"字符串，用来告诉浏览器该js为严格模式 */

    /* Additional Checks */
    "noUnusedLocals": true,                /* 用于检查是否有定义了但是没有使用的变量，对于这一点的检测，使用eslint可以在你书写代码的时候做提示，你可以配合使用。它的默认值为false */
    "noUnusedParameters": true,            /* 用于检查是否有在函数体中没有使用的参数，这个也可以配合eslint来做检查，默认为false */
    "noImplicitReturns": true,             /* 用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示，默认为false */
    "noFallthroughCasesInSwitch": true,    /* 用于检查switch中是否有case没有使用break跳出switch，默认为false */

    /* Module Resolution Options */
    "moduleResolution": "node",            /* 用于选择模块解析策略，有'node'和'classic'两种类型' */
    "baseUrl": "./",                       /* baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响 */
    "paths": {},                           /* 用于设置模块名称到基于baseUrl的路径映射 */
    "rootDirs": [],                        /* rootDirs可以指定一个路径列表，在构建时编译器会将这个路径列表中的路径的内容都放到一个文件夹中 */
    "typeRoots": [],                       /* typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载 */
    "types": [],                           /* types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来 */
    "allowSyntheticDefaultImports": true,  /* 用来指定允许从没有默认导出的模块中默认导入 */
    "esModuleInterop": true /* 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性 */,
    "preserveSymlinks": true,              /* 不把符号链接解析为其真实路径，具体可以了解下webpack和nodejs的symlink相关知识 */

    /* Source Map Options */
    "sourceRoot": "",                      /* sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件位置，这个值会被写进.map文件里 */
    "mapRoot": "",                         /* mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性 */
    "inlineSourceMap": true,               /* 指定是否将map文件的内容和js文件编译在同一个js文件中，如果设为true，则map的内容会以//# sourceMappingURL=然后拼接base64字符串的形式插入在js文件底部 */
    "inlineSources": true,                 /* 用于指定是否进一步将.ts文件的内容也包含到输入文件中 */

    /* Experimental Options */
    "experimentalDecorators": true /* 用于指定是否启用实验性的装饰器特性 */
    "emitDecoratorMetadata": true,         /* 用于指定是否为装饰器提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库 */
  }
```



## 其他

# 生态

+ tslint  
+ ts-node

### 练习：

+ https://github.com/type-challenges/type-challenges/blob/master/README.zh-CN.md 
