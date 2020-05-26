import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Joe Root",
        email: "jroot@mail.com",
        phone: "000-000-0000",
      },
      {
        id: 2,
        name: "Bob Maley",
        email: "bobmarley@mail.com",
        phone: "111-111-1111",
      },
      {
        id: 3,
        name: "Kevin Peterson",
        email: "kpeterson@mail.com",
        phone: "333-333-3333",
      },
      {
        id: 4,
        name: "Russel Arnold",
        email: "rarnold@mail.com",
        phone: "444-444-4444",
      },
    ],
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;
