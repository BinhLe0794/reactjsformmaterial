# LEARN REACT JS 2022

## REACT JS

VERSION : 17.0.2

## API

AXIOS

## UI

MATERIAL UI V5

## NOTIFICATION

NOTISTRACK

## FORM

REACT-HOOK-FORM
YUP

## STATE MANAGEMENT

REDUX TOOLKIT

# CART FEATURE

### GLOBAL STATE

1. showMiniCart : boolean
2. cartItems => [product ,quantity];

### LOCAL STATE

1. cartItemCount
2. cartTotal --> createSelector(); // using library [reselect]

### ACTIONS FROM REDUX

1. From Detail Page -> add_btn => add product into GLOBAL STATE
2. From Detail Page -> cartItems.product ? +quantity : addNEW
3. From Cart Page -> Adjust the quantity from GLOBAL STATE directly
4. From Cart Page -> Remove the product from GLOBAL STATE directly

### VIEW

1. Using [reselect] to take cartItemsCount and total

2. Using hook useSelector(cartItemsCountSelector) => render View
