/*--****************************************************************************
  --* Project Name    : MakeMyDayWithACoffee
  --* Reference       : Entity domain model/interface
  --* Description     : Represents a coffee interface
  --* Configuration Record
  --* Review            Ver  Author           Date      Cr       Comments
  --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
--****************************************************************************/
  export interface CoffeeItemModel {
  id: number;
  name: string;
  description: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  maker: string;
  price: string,
}
