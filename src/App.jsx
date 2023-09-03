import { useEffect, useState } from "react";

import downArrow from "./assets/down-arrow.svg";

function App() {
  const themes = [
    {
      name: "Dark",
      headerColor: "#2c3e50",
      headerTextColor: "#ffffff",
      detailColor: "#bdc3c7",
      detailTextColor: "#2c3e50",
    },
    {
      name: "Light",
      headerColor: "#bdc3c7",
      headerTextColor: "#2c3e50",
      detailColor: "#ffffff",
      detailTextColor: "#2c3e50",
    },
    {
      name: "Blue",
      headerColor: "#3498db",
      headerTextColor: "#ffffff",
      detailColor: "#ecf0f1",
      detailTextColor: "#2980b9",
    },
    {
      name: "Red",
      headerColor: "#e74c3c",
      headerTextColor: "#ffffff",
      detailColor: "#ecf0f1",
      detailTextColor: "#c0392b",
    },
  ];

  const users = [
    {
      id: 1,
      email: "alexander@mail.com",
      isMarried: false,
      programmingLanguages: ["Javascript", "C++", "Python"],
    },
    {
      id: 2,
      email: "graham@mail.com",
      isMarried: false,
      programmingLanguages: ["PHP", "Ruby"],
    },
    {
      id: 3,
      email: "bell@mail.com",
      isMarried: false,
      programmingLanguages: ["Go", "Javascript", "Ruby", "C#"],
    },
    {
      id: 4,
      email: "thomas@mail.com",
      isMarried: false,
      programmingLanguages: ["C#", "Rust", "Typescript"],
    },
    {
      id: 5,
      email: "alva@mail.com",
      isMarried: false,
      programmingLanguages: ["Rust", "Python"],
    },
    {
      id: 6,
      email: "edison@mail.com",
      isMarried: false,
      programmingLanguages: ["Ruby", "Python", "Go"],
    },
    {
      id: 7,
      email: "emanuel@mail.com",
      isMarried: false,
      programmingLanguages: ["Php", "C++", "Java"],
    },
    {
      id: 8,
      email: "adebayor@mail.com",
      isMarried: false,
      programmingLanguages: ["Javascript", "Java", "Go"],
    },
  ];
  const [search, setSearch] = useState(null);
  const [searchedData, setSearchedData] = useState(null);
  const [sort, setSort] = useState(false);
  const [dataSort, setDataSort] = useState("none");
  const [result, setResult] = useState(users);

  const searching = (data) => {
    let tempResult;
    if (data === "") {
      tempResult = users;
      sorting(dataSort, tempResult);
    } else {
      tempResult = users.filter((d) => d.email.includes(data));
      sorting(dataSort, tempResult);
    }
  };

  const selectSort = (data) => {
    setSort(false);
    setDataSort(data);
    sorting(data);
  };

  const sorting = (data, prevValue) => {
    let tempValue = prevValue || result;
    if (data === "id asc") {
      setResult(sortById(tempValue, "asc"));
    }
    if (data === "id desc") {
      setResult(sortById(tempValue, "desc"));
    }
    if (data === "email asc") {
      setResult(sortByEmail(tempValue, "asc"));
    }
    if (data === "email desc") {
      setResult(sortByEmail(tempValue, "desc"));
    }
    setResult(tempValue);
  };

  const sortById = (data, drct) => {
    drct === "asc" && data.sort((a, b) => a.id - b.id);
    drct === "desc" && data.sort((a, b) => b.id - a.id);
  };

  const sortByEmail = (data, drct) => {
    data.sort((a, b) => {
      const emailA = a.email.toLowerCase();
      const emailB = b.email.toLowerCase();
      if (drct === "asc") {
        if (emailA < emailB) {
          return -1;
        }
        if (emailA > emailB) {
          return 1;
        }
        return 0;
      }

      if (drct === "desc") {
        if (emailA > emailB) {
          return -1;
        }
        if (emailA < emailB) {
          return 1;
        }
        return 0;
      }
    });
  };
  
  return (
    <>
      <main className="m-10">
        <h1 className="font-bold text-5xl text-center">FAZZ005</h1>
        <section className="flex justify-center items-center my-5 gap-5">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 border-solid border-2 border-gray-400 rounded-md"
            onChange={(e) => searching(e.target.value)}
          />
          <section className="w-48 relative">
            <button
              type="button"
              className="w-full py-2 pl-5 pr-3 border-solid border-2 hover:border-black border-gray-400 rounded-md flex justify-between items-center gap-2"
              onClick={() => (sort === true ? setSort(false) : setSort(true))}
            >
              <div className="flex gap-1">
                <p>Sort :</p>
                <p>{dataSort}</p>
              </div>
              <img
                src={downArrow}
                className={`w-6 ${
                  sort === true
                    ? "transition ease-in-out rotate-180"
                    : "transition ease-in-out rotate-0"
                }`}
              />
            </button>
            <div
              className={`absolute flex-col bg-white w-full border-solid border-2 border-gray-400 rounded-md mt-1 ${
                sort === true ? "flex" : "hidden"
              }`}
            >
              <button
                type="button"
                className="hover:bg-gray-200 w-full py-1"
                onClick={() => selectSort("none")}
              >
                none
              </button>
              <button
                type="button"
                className="hover:bg-gray-200 w-full py-1"
                onClick={() => selectSort("id asc")}
              >
                id asc
              </button>
              <button
                type="button"
                className="hover:bg-gray-200 w-full py-1"
                onClick={() => selectSort("id desc")}
              >
                id desc
              </button>
              <button
                type="button"
                className="hover:bg-gray-200 w-full  py-1"
                onClick={() => selectSort("email asc")}
              >
                email asc
              </button>
              <button
                type="button"
                className="hover:bg-gray-200 w-full  py-1"
                onClick={() => selectSort("email desc")}
              >
                email desc
              </button>
            </div>
          </section>
        </section>
        <section className="w-4/5 mx-auto">
          <div className="grid grid-cols-4 w-full bg-blue-200 px-3 py-2 font-bold border-b-2 border-solid border-b-black">
            <p className="">Id</p>
            <p className="">Email</p>
            <p className="">Mariage</p>
            <p className="">Programming Language</p>
          </div>
          {result.map((d, i) => {
            return (
              <div
                className="grid grid-cols-4 w-full px-3 py-2 text-left  bg-red-200"
                key={i}
              >
                <p className=" ">{d.id}</p>
                <p className=" ">{d.email}</p>
                <p className=" ">
                  {String(d.isMarried) === true ? "Yes" : "No"}
                </p>
                <p className=" ">{d.programmingLanguages.join(", ").split()}</p>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
