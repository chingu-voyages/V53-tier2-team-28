function Cal() {
  console.log("component rendered");
  return (
    <div className="table bg-white">
      <table className=" border-black">
        <thead>
          <tr>
            <th className="text-black  border-black">Sunday</th>
            <th className="text-black  border-gray-950">Monday</th>
            <th className="text-black  border-gray-950">Tuesday</th>
            <th className="text-black  border-gray-950">Wednesday</th>
            <th className="text-black  border-gray-950">Thursday</th>
            <th className="text-black  border-gray-950">Friday</th>
            <th className="text-black  border-gray-950">Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-black  border-gray-950"></td>
            <td className=" text-black  border-gray-950"></td>
            <td className=" text-black  border-gray-950"></td>
            <td className="text-black  border-gray-950">
              1<p>Breakfast: Berry Chia Smoothie & Sourdough Raisin Toast</p>
              <p>Lunch: Greek Salad & Veggie Primo Pizza</p>
              <p>Supper: Buffalo Wings & Green Salad</p>
            </td>
            <td className="text-black  border-gray-950">
              2<p>Breakfast: Tomato-Feta Spinach Smoothie & Granola</p>
              <p>Lunch: BLT Sandwich & Cobb Salad</p>
              <p>Supper: Caesar Salad & Lasagna</p>
            </td>
            <td className="text-black  border-gray-950">
              3<p>Breakfast: Peach Mango Pineapple Smoothie</p>
              <p>Lunch: Taco Salad</p>
              <p>Supper: Poutine, Honey Garlic Chicken</p>
            </td>
            <td className="text-black  border-gray-950">4</td>
          </tr>
          <tr>
            <td className="text-black  border-gray-950">5</td>
            <td className="text-black  border-gray-950">6</td>
            <td className="text-black  border-gray-950">7</td>
            <td className="text-black  border-gray-950">8</td>
            <td className="text-black  border-gray-950">9</td>
            <td className="text-black  border-gray-950">10</td>
            <td className="text-black  border-gray-950">11</td>
          </tr>
          <tr>
            <td className="text-black  border-gray-950">12</td>
            <td className="text-black  border-gray-950">13</td>
            <td className="text-black  border-gray-950">14</td>
            <td className="text-black  border-gray-950">15</td>
            <td className="text-black  border-gray-950">16</td>
            <td className="text-black  border-gray-950">17</td>
            <td className="text-black  border-gray-950">18</td>
          </tr>
          <tr>
            <td className="text-black  border-gray-950">19</td>
            <td className="text-black  border-gray-950">20</td>
            <td className="text-black  border-gray-950">21</td>
            <td className="text-black  border-gray-950">22</td>
            <td className="text-black  border-gray-950">23</td>
            <td className="text-black  border-gray-950">24</td>
            <td className="text-black  border-gray-950">25</td>
          </tr>
          <tr>
            <td className="text-black  border-gray-950">26</td>
            <td className="text-black  border-gray-950">27</td>
            <td className="text-black  border-gray-950">28</td>
            <td className="text-black  border-gray-950">29</td>
            <td className="text-black  border-gray-950">30</td>
            <td className="text-black  border-gray-950">31</td>
            <td className="text-black  border-gray-950"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Cal;
