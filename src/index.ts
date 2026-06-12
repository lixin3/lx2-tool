// index.ts
// 导出所有命名导出（例如 getDataType）
export * from './data';

// 重新导出默认导出（即 { getDataType } 对象）
export { default } from './data';