import { useQuery } from '@apollo/client';
import { GET_MENU } from '../../utils/queries'

const Menu = () => {
  const { loading, data, error } = useQuery(GET_MENU)

  const menuItems = data?.getMenu || [];

  if (error) {
    console.error(error);
    return <div>Error fetching menu items.</div>
  }

  const getToppingDescription = (toppingName) => {
    switch (toppingName) {
      case 'Lettuce':
        return 'Shoestring lettuce is thinly sliced, crisp lettuce that adds a light.'
      case 'Tomato':
        return 'Thinly sliced tomato adds a fresh, juicy layer of flavor.'
      case 'Red Onion':
        return 'Thinly sliced red onion offers a crisp, tangy bite, adding vibrant color and flavor.'
      case 'Sweet Onion':
        return 'Thinly sliced sweet onion provides a mild, deliciously sweet flavor.'
      case 'Sautéed Onion':
        return 'Cooked to golden-brown perfection, adding a rich, sweet, and savory flavor.'
      case 'Dill Pickles':
        return 'Dill pickles bring a delightful crunch and tangy flavor'
      case 'Bacon':
        return 'Savory and crispy, our bacon topping delivers a deliciously smoky flavor and satisfying crunch.'
      case 'Relish':
        return 'Sweet pickle relish adds a burst of flavor with its tangy and sweet notes.'
      case 'Sauerkraut':
        return 'finely shredded cabbage that has been fermented, giving it a tangy, slightly sour flavor with a crunchy texture.'
      case 'Jalapeños':
        return 'These bold, tangy peppers add a delightful zesty kick.'
    }
  };

  const getSauceDescription = (sauceName, sauceType) => {
    // const sName =  sauceName + sauceType
    switch (sauceName) {
      case 'Ketchup':
        switch (sauceType) {
          case 'packets':
            return 'Heinz ketchup packets'
          case '4 oz':
            return 'Heinz ketchup in a 4 ounce container'
          case null:
            return 'Ketchup on your sandwich.'
        }
      case 'Mayo':
        switch (sauceType) {
          case 'packets':
            return `Hellmann's mayo packets`
          case null:
            return `Hellmann's mayo on your sandwich.`
        }
      case 'Yellow Mustard':
        switch (sauceType) {
          case 'packets':
            return 'Yellow mustard packets'
          case null:
            return 'Yellow mustard on your sandwich.'
        }
      case 'Stadium Mustard':
        switch (sauceType) {
          case 'packets':
            return 'Stadium mustard packets'
          case null:
            return 'Stadium mustard on your sandwich.'
        }
      case 'Thousand Island':
        switch (sauceType) {
          case '2 oz':
            return 'Thousand Island in a 2 ounce container.'
          case '4 oz':
            return 'Thousand Island in a 4 ounce container.'
        }
    }
  };

  const getSideDescription = (sideName) => {
    switch(sideName) {
      case 'French Fries':
        return 'Crispy and golden, our freshly cut French fries are made from premium potatoes, hand-cut and fried to perfection. Enjoy them hot and lightly salted.'
      case 'Chips':
        return 'Enjoy a variety of 8 oz bags of crispy chips! Be sure to ask our staff what flavors we have available today.'
      case 'Coleslaw':
        return 'A refreshing blend of finely shredded cabbage and carrots, tossed in a creamy dressing. Our cole slaw is the perfect balance of crunchy and tangy, making it an ideal side dish for your meal.'
      }
  }

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : menuItems.length === 0 ? (
        <div>Our menu is currently unavailable.</div>
      ) : (
        <div>
          {menuItems.map((menuItem) => (
            <div key={menuItem._id}>
              {menuItem.mainCourse.length > 0 && <div>Main Course:</div>}
              <div>
                {menuItem.mainCourse.map((course, index) => (
                  <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{course.mcName}</div>
                      <div className="font-bold text-l mb-2">${course.price}</div>
                      <p className="text-gray-700 text-base">
                        {course.mcName === 'Burger'
                          ? 'This is a Burger'
                          : course.mcName === 'Hot Dog'
                            ? 'this is a Hot Dog'
                            : null}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {menuItem.mainCourse.length > 0 && <div>Toppings:</div>}
              <div>
                {menuItem.toppings.map((topping, index) => (
                  <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{topping.tName}</div>
                      <div className="font-bold text-l mb-2">
                        {topping.price === 0 ? null : `$${topping.price}`}
                      </div>
                      <p className="text-gray-700 text-base">
                        {getToppingDescription(topping.tName)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {menuItem.mainCourse.length > 0 && <div>Sauce:</div>}
              <div>
                {menuItem.sauce.map((sauce, index) => (
                  <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{sauce.sauceName} {sauce.type}</div>
                      <div className="font-bold text-l mb-2">
                        {sauce.price === 0 ? null : `$${sauce.price}`}
                      </div>
                      <p className="text-gray-700 text-base">
                        {getSauceDescription(sauce.sauceName, sauce.type)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {menuItem.mainCourse.length > 0 && <div>Side:</div>}
              <div>
                {menuItem.side.map((side, index) => (
                  <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{side.sideName}</div>
                      <div className="font-bold text-l mb-2">${side.price}</div>
                      <p className="text-gray-700 text-base">
                        {getSideDescription(side.sideName)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {menuItem.mainCourse.length > 0 && <div>Drink:</div>}
              <div>
                {menuItem.drink.map((drink, index) => (
                  <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{drink.dName} ({drink.flavor})</div>
                      <div className="font-bold text-l mb-2">{drink.size}</div>
                      <div className="font-bold text-l mb-2">${drink.price}</div>
                      <p className="text-gray-700 text-base">
                        {drink.dName === 'Burger'
                          ? 'This is a Burger'
                          : drink.dName === 'Hot Dog'
                            ? 'this is a Hot Dog'
                            : null}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div>
                {menuItem.drink.map((drink, index) => (
                  <div key={index}>{drink.dName}{drink.price}</div>
                ))}
              </div> */}

              <div></div>
              <div></div>
              <div></div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

}

export { Menu }