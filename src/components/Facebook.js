import React from "react";
import FacebookLogin from "react-facebook-login";
import { useState } from "react";

const Facebook = () => {
	const [state, setState] = useState({
		isLoggedIn: false,
		userID: "",
		name: "",
		email: "",
		picture: "",
	});

	const componentClicked = () => {
		console.log("clicked");
	};

	const responseFacebook = (response) => {
		console.log(response);
		setState({
			isLoggedIn: true,
			userID: response.userID,
			name: response.name,
			picture: response.picture.data.url,
		});
	};

	let fbContent;

	if (state.isLoggedIn) {
		fbContent = (
			<div
				style={{
					width: "400px",
					margin: "auto",
					backgroundColor: "#f4f4f4",
					padding: "20px",
				}}
			>
				<img src={state.picture} alt={state.name} style={{ width: "75px", height: "75px" }} />
				<h2>Welcome {state.name}</h2>
			</div>
		);
	} else {
		fbContent = <FacebookLogin appId="4057313327700044" autoLoad={true} fields="name,email,picture" onClick={componentClicked} callback={responseFacebook} />;
	}

	return <div>{fbContent}</div>;
};

export default Facebook;
