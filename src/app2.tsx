import * as React from "react";
import { useState } from "react";
import styled from "styled-components";

export const App = () => {
	const [expanded, setExpanded] = useState(false);

	return (
		<Container>
			<Card expanded={expanded} onClick={e => setExpanded(e => !e)}>
				<div>BeTomorrow</div>
			</Card>
		</Container>
	);
};

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #ccc;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

// const Card = styled.div<{ expanded?: boolean }>`
// 	background: white;
// 	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.33);
// 	width: 100px;
// 	height: 100px;
// 	margin: 10px;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	transform: ${({ expanded }) => (expanded ? "scale(2, 1.5)" : "scale(1)")};
// 	transition: transform 0.33s cubic-bezier(0.175, 0.885, 0.32, 1.275);
// `;

const Card = styled.div<{ expanded: boolean }>`
	background: white;
	margin: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.33);
	width: ${({ expanded }) => (expanded ? "200px" : "100px")};
	height: ${({ expanded }) => (expanded ? "150px" : "100px")};
	transition: all 0.33s cubic-bezier(0.175, 0.885, 0.32, 1.275);
`;
