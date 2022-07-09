import React from "react";
import logo from "../../assets/logoCS.svg"
import CartWidget from '../CartWidget/CartWidget'
import { COLORS } from "../../constants/color";
import { Link, NavLink } from "react-router-dom";

const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
}

const Navbar = () => {

    const categories = [
        { name: "men's clothing", id: 0, route: "/category/men's clothing" },
        { name: "women's clothing", id: 1, route: "/category/women's clothing" },
        { name: "electronics", id: 2, route: "/category/electronics" },
        { name: "jewelery", id: 3, route: "/category/jewelery" },
    ];

    return (
        <header style={styles.container}>

            <div style={styles.branchContainer}>
                <Link to="/"><img style={styles.logo} src={logo} alt="" /></Link>
                <h1 style={styles.title}> Carlos eStore - eCommerce</h1>
            </div>

            <div style={styles.links}>
                <nav>
                    {categories.map((category) => <NavLink key={category.id} style={styles.link} to={category.route}>{category.name}</NavLink>)}
                </nav>
                <Link to="/cart"><CartWidget /></Link>
            </div>
        </header >
    )
}

const styles = {
    container: {
        display: viewport.width > 900 ? 'flex' : 'none',
        backgroundColor: COLORS.orange,
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    branchContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        fontSize: 25
    },
    links: {
        display: "flex"
    },
    link: {
        fontSize: 16,
        padding: 20,
        color: COLORS.black
    },
    logo: {
        height: 80
    }
};

export default Navbar 
