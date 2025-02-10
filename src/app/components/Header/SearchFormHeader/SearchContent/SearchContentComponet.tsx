import "@/app/css/index.css";

import { MdClose } from "react-icons/md";

const SearchContentComponent = () => {
  const SearchText = [
    {
      id: 1,
      text: "Funko mariguano",
      url: "funko-mariguano",
    },
    {
      id: 2,
      text: "Funko mariguano",
      url: "funko-mariguano",
    },
    {
      id: 3,
      text: "Funko mariguano",
      url: "funko-mariguano",
    },
    {
      id: 4,
      text: "Funko mariguano",
      url: "funko-mariguano",
    },
    {
      id: 5,
      text: "Funko mariguano",
      url: "funko-mariguano",
    },
    {
      id: 6,
      text: "Funko mariguano",
      url: "funko-mariguano",
    },
    {
      id: 7,
      text: "Funko mariguano",
      url: "funko-mariguano",
    },
  ];

  return (
    <div className="container_search_menu_form">
      <nav className="nav_search_menu_form">
        <ul className="ul_search_menu_form">
          {SearchText.map((item) => (
            <li key={item.id} className="li_search_menu_form">
              <a href={item.url} className="link_search_menu_form">
                <span>{item.text}</span>

                <MdClose className="icon_search_menu_form" />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SearchContentComponent;
