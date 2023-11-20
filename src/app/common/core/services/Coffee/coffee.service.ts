/*--****************************************************************************
    --* Project Name    : MakeMyDayWithACoffee
    --* Reference       : Coffee service
    --* Description     : Create coffee service and use dependency injection
    --*                   to include it in your app.
    --* Configuration Record
    --* Review            Ver  Author           Date      Cr       Comments
    --* 001               001  A HATKAR         15/11/23  CR-XXXXX Original
  --****************************************************************************/
import { Injectable } from '@angular/core';
import { CoffeeItemModel } from '../../models/Coffee/coffee-item-model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  //#region Fields

  readonly baseUrl = '/assets/images';

  //#endregion

  //#region Ctor

  constructor() { }

  //#endregion

  //#region Utilities

  coffeeItemList: CoffeeItemModel[] = [
    {
      id: 0,
      name: 'Cappuccino',
      description: 'The prefect balance of espresso, steamed milk and frothed milk. All this makes the coffee taste more diluted and weaker. Some coffee shops will sprinkle cinnamon or flaked chocolate on top.',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/C1.jpg`,
      availableUnits: 50,
      wifi: true,
      maker: 'French press',
      price: '$299'
    },
    {
      id: 1,
      name: 'Black Coffee',
      description: 'A simple coffee with nothing added - no cream, no milk, no sweetener.',
      city: 'Santa Monica',
      state: 'CA',
      photo: `${this.baseUrl}/C2.jpg`,
      availableUnits: 25,
      wifi: true,
      maker: 'Percolator',
      price: '$399'
    },
    {
      id: 2,
      name: 'Cafe Latte',
      description: 'A milk coffee that is made up of one or two shots of espresso, steamed milk and a final thin layer of frothed milk on the top. Latte in Italian means \'milk\'',
      city: 'Juneau',
      state: 'AK',
      photo: `${this.baseUrl}/C3.jpg`,
      availableUnits: 30,
      wifi: true,
      maker: 'Single serve',
      price: '$199'
    },
    {
      id: 3,
      name: 'Mocha',
      description: 'A latte that has been flavoured with chocolate and coffee into one delicious beverage.',
      city: 'Chicago',
      state: 'IL',
      photo: `${this.baseUrl}/C4.jpg`,
      availableUnits: 15,
      wifi: true,
      maker: 'Aeropress',
      price: '$399'
    },
    {
      id: 4,
      name: 'Espresso',
      description: 'Espresso is a strong concentrated coffee that is made by forcing hot water through finely grounded coffee beans.',
      city: 'Gary',
      state: 'IN',
      photo: `${this.baseUrl}/C5.jpg`,
      availableUnits: 5,
      wifi: true,
      maker: 'Drip',
      price: '$419'
    },
    {
      id: 5,
      name: 'Cuban coffee',
      description: 'Cuban coffee is a type of espresso, which is sweetened with natural brown sugar as it is being brewed. A common method for making is to add few drops of the espresso to the sugar and mix vigorously till it results in a creamy, light brown paste.',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/C6.jpg`,
      availableUnits: 4,
      wifi: true,
      maker: 'Pour over',
      price: '$199'
    },
    {
      id: 6,
      name: 'Cortado',
      description: 'Traditional Cortado is unsweetened and has only two essential ingredients; espresso and steamed milk. It has a 1:1 ratio of espresso and milk and is served in small glass cups called Gibraltar.',
      city: 'Spanish',
      state: 'ES',
      photo: `${this.baseUrl}/C7.jpg`,
      availableUnits: 12,
      wifi: true,
      maker: 'Cold brew',
      price: '$299'
    },
    {
      id: 7,
      name: 'Iced coffee',
      description: 'This a regular coffee served with ice, and sometimes milk and sugar.',
      city: 'Oakland',
      state: 'CA',
      photo: `${this.baseUrl}/C8.jpg`,
      availableUnits: 5,
      wifi: true,
      maker: 'Moka',
      price: '$391'
    },
    {
      id: 8,
      name: 'Galão',
      description: 'This Portuguese coffee combines 1/4 espresso with 3/4 of foamed or steamed milk and is typically served in a tall glass. Galão is rich and creamy, though the coffee flavor is not overpowering. A slightly stronger variety of galão is escuro, while a lighter version with more milk goes as galão claro.',
      city: 'Portuguese',
      state: 'CA',
      photo: `${this.baseUrl}/C9.jpg`,
      availableUnits: 67,
      wifi: true,
      maker: 'French press',
      price: '$499'
    },
    {
      id: 9,
      name: 'Macchiato',
      description: 'The macchiato is an espresso coffee drink, topped with a small amount of foamed or steamed milk to allow the taste of the espresso to still shine through.',
      city: 'Portland',
      state: 'OR',
      photo: `${this.baseUrl}/C10.jpg`,
      availableUnits: 1,
      wifi: true,
      maker: 'Percolator',
      price: '$499'
    },
    {
      id: 10,
      name: 'Americano',
      description: 'An americano is quite simply just hot water and espresso. It’ll either be served 1/2 and 1/2 or 1/3 espresso to 2/3 water, depending on the coffee shop in question or how you’ve chosen to brew it.',
      city: 'New York',
      state: 'NY',
      photo: `${this.baseUrl}/C11.jpg`,
      availableUnits: 10,
      wifi: true,
      maker: 'Single serve',
      price: '$229'
    },
  ];

  //#endregion

  //#region Methods

  getAllCoffeeItems(): CoffeeItemModel[] {
    return this.coffeeItemList;
  }

  getCoffeeItemById(id: number): CoffeeItemModel | undefined {
    return this.coffeeItemList.find(coffeeItem => coffeeItem.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Coffee application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  submitContactForm(contactSubject: string, firstName: string, lastName: string, country: string, email: string, comments: string) {
    console.log(`Contact us application received: contactSubject: ${contactSubject}, firstName: ${firstName}, lastName: ${lastName}, country: ${country}, email: ${email}. comments: ${comments}`);
  }

  //#endregion
}
