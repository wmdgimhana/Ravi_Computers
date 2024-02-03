import React from "react";
import { Select, Slider } from "antd";

const Filters = () => {
  return (
    <div className="flex items-center gap-[50px] p-[20px] border-gray-200 border-solid border-[1px] bg-white    shadow-xl justify-center rounded-md flex-wrap">
      <div>
        {/* filter 1 */}
        <div className="flex flex-col items-center gap-[10px]">
          <div>
            <span className="text-[17px] font-[500]">Device Types</span>
          </div>
          <Select
            showSearch
            style={{
              width: 200,
              height: 50,
            }}
            placeholder="Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            options={[
              {
                value: "1",
                label: "Laptops",
              },
              {
                value: "2",
                label: "Desktops",
              },
              {
                value: "3",
                label: "Playstation",
              },
            ]}
          />
        </div>
      </div>

      {/* filter 2 */}
      <div className="flex flex-col items-center gap-[10px]">
        <div>
          <span className="text-[17px] font-[500]">Computer Accessories</span>
        </div>
        <Select
          showSearch
          style={{
            width: 200,
            height: 50,
          }}
          placeholder="Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "RAM",
            },
            {
              value: "2",
              label: "HDD",
            },
            {
              value: "3",
              label: " SSD",
            },

            {
              value: "4",
              label: " Proccessor",
            },
            {
              value: "5",
              label: "Monitors",
            },
          ]}
        />
      </div>

      {/* filter 3 */}
      <div className="flex flex-col items-center gap-[10px]">
        <div>
          <span className="text-[17px] font-[500]">Price Range</span>
        </div>
        <Select
          showSearch
          style={{
            width: 200,
            height: 50,
          }}
          placeholder="Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "Rs. 20,000 - 40,000",
            },
            {
              value: "2",
              label: "Rs. 40,000 - 75,000",
            },
            {
              value: "3",
              label: "Rs. 75,000 - 100,000",
            },

            {
              value: "4",
              label: "Rs. 100,000 - 250,000",
            },
            {
              value: "5",
              label: "Rs. 250,000 - 500,000",
            },
          ]}
        />
      </div>

      {/* filter 4 */}
      <div className="flex flex-col items-center gap-[10px]">
        <div>
          <span className="text-[17px] font-[500]">Computer Types</span>
        </div>
        <Select
          showSearch
          style={{
            width: 200,
            height: 50,
          }}
          placeholder="Select"
          optionFilterProp="children"
          filterOption={(input, option) =>
            (option?.label ?? "").includes(input)
          }
          filterSort={(optionA, optionB) =>
            (optionA?.label ?? "")
              .toLowerCase()
              .localeCompare((optionB?.label ?? "").toLowerCase())
          }
          options={[
            {
              value: "1",
              label: "For Office works",
            },
            {
              value: "2",
              label: "High performance Pc",
            },
            {
              value: "3",
              label: "For Gamers",
            },
          ]}
        />
      </div>

      {/* reset button */}
      <div>
        <div className="py-[10px] px-[25px] bg-red-500 text-white cursor-pointer hover:bg-red-600 rounded-md">
          <span>Reset Filter</span>
        </div>
      </div>
    </div>
  );
};

export default Filters;
