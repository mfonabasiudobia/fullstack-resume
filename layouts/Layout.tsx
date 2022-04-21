import React from 'react'
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
	children : React.ReactNode
} 

const Layout = ({children} : LayoutProps ) => {

	return (
		<div className="relative overflow-hidden">
			<Header />
			{ children }
			<Footer />
		</div>
	)
}

export default Layout