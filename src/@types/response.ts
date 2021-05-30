export interface AppResponse<Data> {
  success: boolean;
  message?: string;
  data?: Data;
}
