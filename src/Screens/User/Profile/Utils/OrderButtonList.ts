import {ItemFlatListProfileOption} from '../../../../Components/ItemFlatListProfile/@Types/ItemFlatListProfile';

function Order(array: any) {
  array.sort(function comparar(
    a: ItemFlatListProfileOption,
    b: ItemFlatListProfileOption,
  ) {
    if (a.position !== null || a.position !== undefined) {
      if (a.position < b.position) {
        return -1;
      }
      if (a.position > b.position) {
        return 1;
      }
      // a deve ser igual a b
    }
    return 0;
  });

  return array;
}

export default Order;
