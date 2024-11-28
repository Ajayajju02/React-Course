import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="mt-10 flex justify-center gap-10">
        <NavLink style={(event)=>{
            return{
                color: event.isActive ? "#0B1120": "",
                fontWeight: event.isActive ? "bold": "",
            }
        }} to="/">Home</NavLink>

        <NavLink style={(event)=>{
            return{
                color: event.isActive ? "red": "",
                fontWeight: event.isActive ? "bold": "",

            }
        }} to="/user">User</NavLink>

        <NavLink className={(event)=>{
            return [
                event.isActive ? "text-red-800": "",
                event.isActive ? "font-bold": "",
            ].join(" ");
        }} to="/about">About</NavLink>
      </nav>
  )
}

export default Nav