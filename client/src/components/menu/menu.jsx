import { useQuery } from '@apollo/client';
import { GET_MENU } from '../../utils/queries'

const Menu = () => {
  const { loading, data, error } = useQuery(GET_MENU)

  const menuItems = data?.getMenu || [];

  if (error) {
    console.error(error);
    return <div>Error fetching menu items.</div>
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
              <div>Main Course:</div>
              <div>
                {menuItem.mainCourse.map((course, index) => (
                  <div key={index}>{course.mcName}</div>
                ))}
              </div>
              <div>Toppings:</div>
              <div>
                {menuItem.toppings.map((topping, index) => (
                  <div key={index}>{topping.tName}</div>
                ))}
              </div>
              <div>Sauce:</div>
              <div>
                {menuItem.sauce.map((sauce, index) => (
                  <div key={index}>{sauce.sauceName}</div>
                ))}
              </div>
              <div>Side:</div>
              <div>
                {menuItem.side.map((side, index) => (
                  <div key={index}>{side.sideName}</div>
                ))}
              </div>
              <div>Drink:</div>
              <div>
                {menuItem.drink.map((drink, index) => (
                  <div key={index}>{drink.dName}</div>
                ))}
              </div>
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