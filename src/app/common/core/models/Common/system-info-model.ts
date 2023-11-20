//Represents a system info interface
export interface SystemInfoModel {
  AspNetInfo: string;
  IsFullTrust: boolean;
  NfsVersion: string;
  OperatingSystem: string;
  ServerLocaleTime: Date;
  UtcTime: Date;
  CurrentUserTime: Date;
  CurrentStaticCacheManager: string;
  HttpHost: string;
  Headers: any;
  LoadedAssemblies: any;
  AzureBlobStorageEnabled: boolean;
}
