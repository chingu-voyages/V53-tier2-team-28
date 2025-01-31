import TableHead from "./TableHead"; // Import TableHead component
import TableCell from "./TableCell"; // Import TableCell component

function MenuCalendar() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="table bg-white">
      <table className=" border-black">
        <TableHead>
          {daysOfWeek.map((day, index) => (
            <th key={index} className="text-textColor border-gray-950">
              {day}
            </th>
          ))}
        </TableHead>

        <tbody>
          <tr>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              1<p>Breakfast: Berry Chia Smoothie & Sourdough Raisin Toast</p>
              <p>Lunch: Greek Salad & Veggie Primo Pizza</p>
              <p>Supper: Buffalo Wings & Green Salad</p>
            </TableCell>
            <TableCell>
              2<p>Breakfast: Tomato-Feta Spinach Smoothie & Granola</p>
              <p>Lunch: BLT Sandwich & Cobb Salad</p>
              <p>Supper: Caesar Salad & Lasagna</p>
            </TableCell>
            <TableCell>
              3<p>Breakfast: Peach Mango Pineapple Smoothie</p>
              <p>Lunch: Taco Salad</p>
              <p>Supper: Poutine, Honey Garlic Chicken</p>
            </TableCell>
            <TableCell>4</TableCell>
          </tr>
          <tr>
            <TableCell>5</TableCell>
            <TableCell>6</TableCell>
            <TableCell>7</TableCell>
            <TableCell>8</TableCell>
            <TableCell>9</TableCell>
            <TableCell>10</TableCell>
            <TableCell>11</TableCell>
          </tr>
          <tr>
            <TableCell>12</TableCell>
            <TableCell>13</TableCell>
            <TableCell>14</TableCell>
            <TableCell>15</TableCell>
            <TableCell>16</TableCell>
            <TableCell>17</TableCell>
            <TableCell>18</TableCell>
          </tr>
          <tr>
            <TableCell>19</TableCell>
            <TableCell>20</TableCell>
            <TableCell>21</TableCell>
            <TableCell>22</TableCell>
            <TableCell>23</TableCell>
            <TableCell>24</TableCell>
            <TableCell>25</TableCell>
          </tr>
          <tr>
            <TableCell>26</TableCell>
            <TableCell>27</TableCell>
            <TableCell>28</TableCell>
            <TableCell>29</TableCell>
            <TableCell>30</TableCell>
            <TableCell>31</TableCell>
            <TableCell></TableCell>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MenuCalendar;
