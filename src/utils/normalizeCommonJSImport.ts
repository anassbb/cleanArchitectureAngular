export function normalizeCommonJSImport<T>(importPromise: Promise<T>): Promise<T> {
  return importPromise.then((m: any) => (m.default || m) as T);
}
