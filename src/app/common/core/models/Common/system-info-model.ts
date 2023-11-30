/*--****************************************************************************
  --* Project Name    : MakeMyDayWithACoffee
  --* Reference       : Entity domain model/interface
  --* Description     : Represents a system info interface
  --* Configuration Record
  --* Review            Ver  Author           Date      Cr       Comments
  --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
--****************************************************************************/
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
