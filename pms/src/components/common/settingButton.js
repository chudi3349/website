import React, { Fragment } from 'react';
import "../layout/styles/styles.scss";

function Settingbtn(props) {

		return ( 
			<Fragment>
				<div 
				style={{
					position: "relative",
					textAlign: "center",
					left: "40px",
					top: "550px",
					marginBottom: "10px",
					width: "150px",
					height: "40px",
					boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
				}}
				>
					<div className="button"><i className={props.icon}></i></div>
					<div className="btn bg-gold" 
					style={{
						color: "white",
						textAlign: "center",
						width: "80px",
						height: "40px",
						position: "absolute",
						left: "68px",
						top: "0px",
						marginBottom: "10px",	
				}}
					>{props.name}</div>
				</div>
			</Fragment>
	
		);
	}

export default Settingbtn;
