import "react";

declare module "react" {
  interface ScriptHTMLAttributes<T> {
    chat?: string;
  }
}
