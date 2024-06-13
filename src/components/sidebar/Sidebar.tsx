import React from "react";
import s from "./styles.module.scss";
import { IUser } from "../../pages/chat/Chat";

interface Props {
  users: IUser[];
}



export const Sidebar: React.FC<Props> = ({ users }) => {
 

  // const filteredList = users.filter((value, index, self) => {
  //   index === self.findIndex((t) => {
  //     t.user === value.user && t.socketID === value.socketID
  //   })
  // })



  if(users.length > 0)
    console.log(users);

  return (
    <div className={s.sidebar}>
      <h4 className={s.header}>Users</h4>
      <ul className={s.users}>{
         users.map((item: IUser) => (
          <li className={s.user} key={item.socketID}>
            <p>{item.user ? item.user : 'test'}</p>
          </li>
        ))
        }
      </ul>
    </div>
  );
};
