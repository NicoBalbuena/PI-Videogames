import React from "react";
import styles from "./Footer.module.css"; 
import linkin from '../Imagen/linkin.png'
import git from '../Imagen/github.png'

function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<div className={styles.logos}>
				<a href="https://www.linkedin.com/in/fernando-nicol%C3%A1s-balbuena-562748218/">
					<img
						src={linkin}
						alt="LinkedIn"
						width="25" 
						height="25" 
					/>
				</a>
				<a href="https://github.com/NicoBalbuena">
        <img
						src={git}
						alt="LinkedIn"
						width="25" 
						height="25" 
					/>
        </a>
			</div>
			<p>© Fernando Nicolas Balbuena, Reservados todos los derechos.</p>
		</footer>
	);
}

export default Footer;