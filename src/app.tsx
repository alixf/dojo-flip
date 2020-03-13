import * as React from "react";
import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Flipper, Flipped } from "react-flip-toolkit";

export const App = () => {
	const [expanded, setExpanded] = useState(false);

	return (
		<Container>
			<Flipper flipKey={expanded} spring="stiff">
				{expanded ? (
					<Flipped flipId="card">
						<Card onClick={e => setExpanded(e => !e)}>
							<Flipped inverseFlipId="card">
								<Column>
									<Flipped flipId="avatar">
										<Avatar src="http://placekitten.com/340/340" />
									</Flipped>
									<Flipped flipId="name">
										<Name>Mister Kitten</Name>
									</Flipped>
									<Flipped flipId="button">
										<ContactButton>Offer pet</ContactButton>
									</Flipped>
								</Column>
							</Flipped>
						</Card>
					</Flipped>
				) : (
					<Flipped flipId="card">
						<LargeCard onClick={e => setExpanded(e => !e)}>
							<Flipped inverseFlipId="card">
								<Column>
									<Row>
										<Flipped flipId="avatar">
											<Avatar src="http://placekitten.com/340/340" style={{ width: 100, height: 100 }} />
										</Flipped>
										<Flipped flipId="name">
											<Name>Mister Kitten</Name>
										</Flipped>
									</Row>
									<Decription>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt erat lacus, in fringilla
										neque cursus ut.
									</Decription>
									<Row style={{ justifyContent: "flex-end" }}>
										<Flipped flipId="button">
											<ContactButton>Offer pet</ContactButton>
										</Flipped>
									</Row>
								</Column>
							</Flipped>
						</LargeCard>
					</Flipped>
				)}
			</Flipper>
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

const Card = styled.div`
	background: white;
	margin: 10px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: center;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.33);
`;

const LargeCard = styled(Card)`
	width: 500px;
	height: 350px;
	justify-content: space-between;
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Column = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex-grow: 1;
`;

const Avatar = styled.img`
	width: 150px;
	height: 150px;
	border-radius: 150px;
	margin: 10px;
`;

const Name = styled.div`
	margin: 10px;
	align-self: center;
`;

const ContactButton = styled.div`
	padding: 15px 30px;
	margin: 20px;
	background: #0080ff;
	color: white;
	cursor: pointer;
`;

const fadeIn = keyframes`
	from { opacity: 0 }
	to { opacity: 1 }
`;
const Decription = styled.div`
	overflow: hidden;
	box-sizing: border-box;
	text-align: center;
	padding: 0px 20px;
	animation: ${fadeIn} 0.2s linear 0.2s both;
`;
