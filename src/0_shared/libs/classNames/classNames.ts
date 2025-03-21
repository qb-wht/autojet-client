// import { Nullable } from '@/0_shared/types';
// export type ClassNameMods = Record<string, boolean | string | undefined>;
// export function cn(className: Nullable<string> | Iterable<string>, ...classNames: Nullable<string>[]) {
//   if (typeof className === 'string') {
//     return new ClassName([className, ...classNames]);
//   }
//   if (className == null) {
//     return new ClassName([...classNames]);
//   }
//   return new ClassName([...className, ...classNames]);
// }
// export class ClassName {
//   constructor(private classes: Nullable<string>[]) {}
//   add(className: Nullable<string>): ClassName {
//     this.classes.push(className);
//     return this;
//   }
//   remove(className: Nullable<string>): ClassName {
//     this.classes = this.classes.filter((clName) => className !== clName);
//     return this;
//   }
//   build(mods?: ClassNameMods): string {
//     if (mods) {
//       this.classes = this.classes.concat(
//         Object.entries(mods)
//           // eslint-disable-next-line @typescript-eslint/no-unused-vars
//           .filter(([_, value]) => Boolean(value))
//           .map(([className]) => String(className))
//       );
//     }
//     return this.classes.join(' ');
//   }
// }
//
import { Nullable } from '@/0_shared/types';

export type ClassNameMods = Record<string, boolean | string | undefined>;

export function cn(className: Nullable<string> | Iterable<string>, ...classNames: Nullable<string>[]) {
  return new ClassName(className, ...classNames);
}

export class ClassName {
  private classes: Set<string>;

  constructor(...classNames: (Nullable<string> | Iterable<string>)[]) {
    this.classes = new Set(classNames.flat().filter((cl): cl is string => Boolean(cl)));
  }

  add(className: string): ClassName {
    if (className) this.classes.add(className);
    return this;
  }

  remove(className: string): ClassName {
    this.classes.delete(className);
    return this;
  }

  build(mods?: ClassNameMods): string {
    const modClasses = mods ? Object.keys(mods).filter((key) => mods[key]) : [];

    return [...this.classes, ...modClasses].join(' ');
  }
}
