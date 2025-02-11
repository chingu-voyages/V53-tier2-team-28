import SmallestIcon from "./Smallesticon";
import SmallIcon from "./SmallIcon"; // Make sure you import the SmallIcon component
import TableCell from "./TableCell";

function TableRow({ days }) {
  // ! need to "cross-off" icons
  return (
    <tr>
      {days?.map((meal, index) => (
        <TableCell key={index} day={index}>
          {meal ? (
            <>
              <h1>{meal.name}</h1>
              <div className="flex gap-2 justify-center">
                {/* Render dietary restriction icons */}
                {meal.dietIconsObj?.map((iconObj, i) => (
                  <SmallestIcon key={i} src={iconObj.icon} />
                ))}
                {/* Render allergy restriction icons */}
                {meal.allergyIconsObj?.map((iconObj, i) => (
                  <SmallestIcon key={i} src={iconObj.icon} />
                ))}
              </div>
            </>
          ) : (
            <h1>Day Off</h1>
          )}
        </TableCell>
      ))}
    </tr>
  );
}

export default TableRow;
