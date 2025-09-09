"use client";

import { useState } from "react";
import css from "./TagsMenu.module.css";
import Link from "next/link";



export default function TagsMenu() {
    const [isNotesOpen, setIsNotesOpen] = useState(false);

    const openNotes = () => setIsNotesOpen(!isNotesOpen);



    return (
        <div className={css.menuContainer}>
            <button className={css.menuButton} onClick={openNotes}>
                Notes ▾
            </button>
            {isNotesOpen && <ul className={css.menuList}>
                <li className={css.menuItem}>
                    <Link href={`url до сторінки за відповідним тегом`} className={css.menuLink}>
                        Назва тегу
                    </Link>
                </li>
            </ul>}
        </div>
    );
};
