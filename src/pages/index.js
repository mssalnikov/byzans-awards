import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			background="--color-byzansCr url(https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/WebMain.png?v=2021-01-03T22:10:47.830Z) center/cover no-repeat"
			color="--light"
			font="--base"
			lg-background="url(https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/WebMain.png?v=2020-12-25T12:34:14.468Z) 48% 70%/cover no-repeat"
			height="70vh"
			sm-background="--color-byzansCr url(https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/MobileMain.png?v=2021-01-03T22:24:19.930Z) 50% 20%/cover no-repeat"
			sm-width="100%"
			sm-height="100vh"
			sm-padding="0 0 0 0"
			lg-justify-content="center"
			lg-align-items="center"
			lg-flex-direction="column"
			align-items="center"
			justify-content="center"
			padding="0 0 0 0"
			display="grid"
			grid-gap="40px 40px 40px"
			md-grid-gap="40px 40px 40px "
			md-align-content="center"
			lg-align-content="center"
			sm-grid-gap="20px 20px 20px"
			sm-align-content="flex-start"
			md-background="--color-byzansCr url(https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/TabletMain.png?v=2021-01-03T22:22:37.591Z) 50% 100%/cover no-repeat"
		>
			<Override
				slot="SectionContent"
				height="auto"
				font="300 16px/24px --fontFamily-googleMontserrat"
				width="80%"
				lg-align-items="center"
				lg-justify-content="center"
				margin="0px 0 0px 0"
				align-self="center"
				display="grid"
				md-justify-self="center"
				sm-width="100%"
				sm-align-self="start"
				sm-height="50%"
				sm-padding="20% 0px 0px 0px"
				sm-grid-template-rows="1fr 1fr"
				md-align-self="start"
				md-width="100%"
				md-height="auto"
				lg-width="100%"
				lg-align-self="auto"
				lg-font="300 16px/24px --fontFamily-googleMontserrat"
				padding="0px 0px 100px 0px"
				justify-self="center"
				md-padding="0px 0px 150px 0px"
			/>
			<Text
				as="h1"
				font="normal normal 900 72px/1.2 --fontFamily-googleMontserrat"
				md-font="normal 700 42px/1.2 --fontFamily-googleMontserrat"
				margin="0 0 2px 0px"
				width="auto"
				display="flex"
				height="auto"
				align-items="center"
				justify-content="center"
				align-self="center"
				lg-text-align="center"
				sm-width="100%"
				md-margin="0 0 2px 0px"
				sm-font="normal 700 42px/1.2 --fontFamily-googleMontserrat"
				lg-margin="0 0 2px 0px"
			>
				Byzans Awards 2020
			</Text>
			<Text
				color="--lightD2"
				letter-spacing="1px"
				text-transform="uppercase"
				margin="20px 0 0 0"
				text-align="center"
				font="300 16px/24px "
				width="100%"
				display="flex"
				justify-content="center"
				align-items="center"
				height="auto"
				sm-width="100%"
				sm-align-items="center"
				sm-justify-content="center"
				sm-font="normal normal 300 18px/24px --fontFamily-googleMontserrat"
				sm-color="#ffffff"
				sm-text-transform="uppercase"
				sm-margin="120px 0 0 0"
				md-margin="120px 0 0 0"
				lg-margin="100px 0 0 0"
				md-font="300 16px/24px --fontFamily-googleMontserrat"
			>
				Byzans users have read a lot over the year. Scroll down to see which books they discussed most
			</Text>
		</Section>
		<Components.AppLink>
			<Override slot="link">
				Let's try
			</Override>
		</Components.AppLink>
		<Box
			sm-height="auto"
			sm-display="flex"
			sm-flex-direction="column"
			sm-align-items="center"
			sm-justify-content="center"
			sm-width="auto"
			width="auto"
			sm-padding="20px 20px 20px 20px"
			md-width="calc(100% - 100px)"
			md-padding="50px 50px 50px 50px"
			padding="30px 30px 30px 30px"
		>
			<Text
				font="normal 500 40px/1.2 --fontFamily-googleMontserrat"
				text-align="center"
				color="#625ed8"
				sm-font="--ranking"
				sm-position="static"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="center"
				sm-align-self="center"
				md-display="flex"
				md-align-items="center"
				md-justify-content="center"
				display="flex"
				justify-content="center"
				align-items="center"
				width="auto"
			>
				Top 30 most discussed books in 2020
			</Text>
			<Text
				font="normal normal 300 28px/1.2 --fontFamily-googleMontserrat"
				color="--byzansCr"
				text-align="center"
				sm-margin="20px 0px 20px 0px"
				sm-font="--leadSm"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="center"
				sm-align-self="center"
				width="auto"
				margin="30px 0px 30px 0px"
			>
				While making this list we counted all activity in each club in 2020. We decided to exclude the books that have already appeared in another status, so no repeating entries. The color of each card corresponds to the book status, just like on Byzans - orange means 'Want to Read', purple means 'Currently Reading', and green means 'Read'. Each book card features 2 numbers - the first is cafe messages, and the second is total of salon posts and comments.
			</Text>
		</Box>
		<Box
			width="auto"
			height="auto"
			display="grid"
			min-width="300px"
			min-height="550px"
			sm-display="grid"
			sm-width="calc(100% - 20px)"
			sm-flex-direction="column"
			sm-align-items="center"
			sm-justify-content="center"
			sm-padding="20px 10px 20px 10px"
			md-display="grid"
			md-width="auto"
			md-height="auto"
			md-align-items="center"
			md-justify-content="center"
			lg-display="grid"
			lg-width="auto"
			lg-height="auto"
			lg-align-items="center"
			lg-justify-content="center"
			padding="20px 20px 20px 20px"
			justify-content="center"
			align-content="center"
			justify-items="center"
			align-items="center"
			grid-template-columns="1fr 1fr 1fr"
			lg-grid-template-columns="1fr 1fr"
			sm-grid-template-columns="1fr"
			md-grid-gap={0}
			grid-gap="40px"
		>
			<Components.IdealBookCard sm-width="250px" sm-margin="20px 20px 20px 20px">
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/30%20the%20shadow%20rising%201.png?v=2020-12-28T13:17:43.992Z" />
				<Override
					slot="box"
					sm-grid-auto-columns="1fr "
					sm-min-width="220px"
					sm-grid-template-columns="1fr "
					sm-grid-auto-rows="1fr"
					sm-grid-template-rows="45px 45px"
					sm-align-items="center"
					sm-align-content="center"
					sm-justify-items="flex-end"
					sm-position="relative"
				/>
				<Override
					slot="statsIcon"
					sm-justify-self="start"
					sm-position="absolute"
					sm-top="3px"
					sm-left="20px"
				/>
				<Override slot="statsIcon1" sm-justify-self="start" sm-position="absolute" sm-bottom="3px" />
				<Override slot="stat1" sm-justify-self="center" />
				<Override slot="stat2" sm-justify-self="center" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				background="--color-byzansR"
				sm-background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
				sm-margin="20px 20px 20px 20px"
			>
				<Override slot="text">
					29
				</Override>
				<Override slot="stat1">
					169
				</Override>
				<Override slot="stat2">
					8
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/29%20the%20dragon%20reborn%201%20(1).png?v=2020-12-28T13:29:31.936Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard sm-margin="20px 20px 20px 20px">
				<Override slot="text">
					28
				</Override>
				<Override slot="stat1">
					118
				</Override>
				<Override slot="stat2">
					53
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/27%20dawnshard%201.png?v=2020-12-28T13:31:12.253Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					27
				</Override>
				<Override slot="stat1">
					126
				</Override>
				<Override slot="stat2">
					45
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/26%20lord%20of%20chaos%201.png?v=2020-12-28T13:31:24.672Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					26
				</Override>
				<Override slot="stat1">
					142
				</Override>
				<Override slot="stat2">
					32
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/25%20the%20great%20hunt%201.png?v=2020-12-28T13:35:01.093Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				background="--color-byzansR"
				sm-background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
				margin="20px 20px 20px 20px"
			>
				<Override slot="text">
					25
				</Override>
				<Override slot="stat1">
					168
				</Override>
				<Override slot="stat2">
					11
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/28%20the%20burning%20white%201.png?v=2020-12-28T13:35:34.021Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					24
				</Override>
				<Override slot="stat1">
					127
				</Override>
				<Override slot="stat2">
					65
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/24%20golden%20son%201.png?v=2020-12-28T14:02:15.074Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					23
				</Override>
				<Override slot="stat1">
					150
				</Override>
				<Override slot="stat2">
					49
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/23%20house%20of%20earth%20and%20blood%201.png?v=2020-12-28T14:02:14.943Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					22
				</Override>
				<Override slot="stat1">
					176
				</Override>
				<Override slot="stat2">
					30
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/22%20skyward%201.png?v=2020-12-28T14:02:54.082Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					21
				</Override>
				<Override slot="stat1">
					142
				</Override>
				<Override slot="stat2">
					66
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/21%20ACOTAR%201.png?v=2020-12-28T14:02:54.084Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				margin="20px 20px 20px 20px"
				background="--color-byzansR"
				sm-background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
			>
				<Override slot="text">
					20
				</Override>
				<Override slot="stat1">
					196
				</Override>
				<Override slot="stat2">
					17
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/20%20the%20name%20of%20the%20wind%201.png?v=2020-12-28T14:02:54.080Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					19
				</Override>
				<Override slot="stat1">
					211
				</Override>
				<Override slot="stat2">
					9
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/19%20got%201.png?v=2020-12-28T14:02:54.077Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					18
				</Override>
				<Override slot="stat1">
					23
				</Override>
				<Override slot="stat2">
					205
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18%20wise%20man's%20fear%201.png?v=2020-12-28T14:02:54.067Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					17
				</Override>
				<Override slot="stat1">
					235
				</Override>
				<Override slot="stat2">
					0
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/17%20memory%20of%20light%201.png?v=2020-12-28T14:14:51.613Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				margin="20px 20px 20px 20px"
				background="--color-byzansR"
				sm-background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
			>
				<Override slot="text">
					16
				</Override>
				<Override slot="stat1">
					309
				</Override>
				<Override slot="stat2">
					0
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/16%20the%20lies%20of%20locke%20lamora%201.png?v=2020-12-28T14:14:51.656Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					15
				</Override>
				<Override slot="stat1">
					318
				</Override>
				<Override slot="stat2">
					0
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/15%20wizards%20first%20rule%201.png?v=2020-12-28T14:14:51.599Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					14
				</Override>
				<Override slot="stat1">
					290
				</Override>
				<Override slot="stat2">
					75
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/14%20the%20blade%20itself%201.png?v=2020-12-28T14:14:51.609Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				margin="20px 20px 20px 20px"
				background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
				sm-background="--color-byzansR"
			>
				<Override slot="text">
					13
				</Override>
				<Override slot="stat1">
					400
				</Override>
				<Override slot="stat2">
					20
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/13%20elantris%201.png?v=2020-12-28T14:14:51.623Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				margin="20px 20px 20px 20px"
				background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
				sm-background="--color-byzansR"
			>
				<Override slot="text">
					12
				</Override>
				<Override slot="stat1">
					474
				</Override>
				<Override slot="stat2">
					20
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/12%20warbreaker%201.png?v=2020-12-28T14:14:51.594Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard>
				<Override slot="text">
					11
				</Override>
				<Override slot="stat1">
					522
				</Override>
				<Override slot="stat2">
					30
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/11%20kings%20of%20the%20wyld%201.png?v=2020-12-28T14:14:51.601Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					10
				</Override>
				<Override slot="stat1">
					271
				</Override>
				<Override slot="stat2">
					282
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/10%20TSIASOS%201.png?v=2020-12-28T14:20:23.393Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					9
				</Override>
				<Override slot="stat1">
					549
				</Override>
				<Override slot="stat2">
					149
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/9%20before%20they%20are%20hanged%201.png?v=2020-12-28T14:20:23.395Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				margin="20px 20px 20px 20px"
				background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
				sm-background="--color-byzansR"
			>
				<Override slot="text">
					8
				</Override>
				<Override slot="stat1">
					638
				</Override>
				<Override slot="stat2">
					136
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/8%20hero%20of%20ages%201.png?v=2020-12-28T14:20:23.408Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				margin="20px 20px 20px 20px"
				background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
				sm-background="--color-byzansR"
			>
				<Override slot="text">
					7
				</Override>
				<Override slot="stat1">
					874
				</Override>
				<Override slot="stat2">
					73
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/7%20well%20of%20ascension%201.png?v=2020-12-28T14:20:23.401Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				margin="20px 20px 20px 20px"
				background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
				sm-background="--color-byzansR"
			>
				<Override slot="text">
					6
				</Override>
				<Override slot="stat1">
					1132
				</Override>
				<Override slot="stat2">
					2
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/6%20eye%20of%20the%20world%201.png?v=2020-12-28T14:20:23.401Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				margin="20px 20px 20px 20px"
				background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
				sm-background="--color-byzansR"
			>
				<Override slot="text">
					5
				</Override>
				<Override slot="stat1">
					1464
				</Override>
				<Override slot="stat2">
					27
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/5%20wor%201.png?v=2020-12-28T14:20:23.410Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px">
				<Override slot="text">
					4
				</Override>
				<Override slot="stat1">
					1158
				</Override>
				<Override slot="stat2">
					695
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/4%20row%201.png?v=2020-12-28T14:20:23.394Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				margin="20px 20px 20px 20px"
				background="--color-byzansR"
				sm-background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
			>
				<Override slot="text">
					3
				</Override>
				<Override slot="stat1">
					1761
				</Override>
				<Override slot="stat2">
					159
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/3%20mistborn%201.png?v=2020-12-28T14:20:23.388Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				margin="20px 20px 20px 20px"
				background="--color-byzansR"
				sm-background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
			>
				<Override slot="text">
					2
				</Override>
				<Override slot="stat1">
					2165
				</Override>
				<Override slot="stat2">
					46
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/2%20wok%201.png?v=2020-12-28T14:20:23.392Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard
				margin="20px 20px 20px 20px"
				background="--color-byzansR"
				sm-background="--color-byzansR"
				md-background="--color-byzansR"
				lg-background="--color-byzansR"
			>
				<Override slot="text">
					1
				</Override>
				<Override slot="stat1">
					2494
				</Override>
				<Override slot="stat2">
					53
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/1%20oathbringer%201.png?v=2020-12-28T12:06:59.538Z" />
			</Components.IdealBookCard>
		</Box>
		<Components.AppLink>
			<Override slot="text">
				Like what you're seeing? Join the club!
			</Override>
			<Override slot="link" width="50%">
				Install the app
			</Override>
		</Components.AppLink>
		<Box
			sm-height="auto"
			sm-display="flex"
			sm-flex-direction="column"
			sm-align-items="center"
			sm-justify-content="center"
			sm-width="auto"
			width="auto"
			sm-padding="20px 20px 20px 20px"
			md-width="calc(100% - 100px)"
			md-padding="50px 50px 50px 50px"
			padding="50px 50px 50px 50px"
		>
			<Text
				font="normal 500 40px/1.2 --fontFamily-googleMontserrat"
				text-align="center"
				color="#625ed8"
				sm-font="--ranking"
				sm-position="static"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="center"
				sm-align-self="center"
				md-display="flex"
				md-align-items="center"
				md-justify-content="center"
				display="flex"
				justify-content="center"
				align-items="center"
				width="auto"
			>
				Top 30 most active buddy reads
			</Text>
			<Text
				font="normal normal 300 28px/1.2 --fontFamily-googleMontserrat"
				color="--byzansCr"
				text-align="center"
				sm-margin="20px 0px 20px 0px"
				sm-font="--leadSm"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="center"
				sm-align-self="center"
				width="auto"
				margin="30px 0px 30px 0px"
			>
				While making this list we counted all cafe messages and salon posts/comments in 'Currently Reading' clubs, which appeared in 2020. On each card. you can see the total of all club messages (first stat) and the total of salon post and comments (second stat).Take a look at our winners - you might be responsible for their place!
			</Text>
		</Box>
		<Box
			width="auto"
			height="auto"
			display="grid"
			min-width="300px"
			min-height="550px"
			sm-display="grid"
			sm-width="calc(100% - 20px)"
			sm-flex-direction="column"
			sm-align-items="center"
			sm-justify-content="center"
			sm-padding="20px 10px 20px 10px"
			md-display="grid"
			md-width="auto"
			md-height="auto"
			md-align-items="center"
			md-justify-content="center"
			lg-display="grid"
			lg-width="auto"
			lg-height="auto"
			lg-align-items="center"
			lg-justify-content="center"
			padding="20px 20px 20px 20px"
			justify-content="center"
			align-content="center"
			justify-items="center"
			align-items="center"
			grid-template-columns="1fr 1fr 1fr"
			lg-grid-template-columns="1fr 1fr"
			sm-grid-template-columns="1fr"
			grid-gap="40px"
			md-grid-gap={0}
		>
			<Components.IdealBookCard margin="20px 20px 20px 20px" sm-width="250px" background="--color-byzansCr">
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/30%20leviathan%20wakes%201.png?v=2021-01-02T07:13:55.960Z" />
				<Override slot="stat1">
					88
				</Override>
				<Override slot="stat2">
					71
				</Override>
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					29
				</Override>
				<Override slot="stat1">
					162
				</Override>
				<Override slot="stat2">
					0
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/29%20towers%20of%20midnight%201.png?v=2021-01-02T07:14:20.890Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					28
				</Override>
				<Override slot="stat1">
					144
				</Override>
				<Override slot="stat2">
					20
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/28%20red%20rising%201.png?v=2021-01-02T07:14:42.119Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					27
				</Override>
				<Override slot="stat1">
					156
				</Override>
				<Override slot="stat2">
					11
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/30%20the%20shadow%20rising%201.png?v=2020-12-28T13:17:43.992Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					26
				</Override>
				<Override slot="stat1">
					118
				</Override>
				<Override slot="stat2">
					53
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/27%20dawnshard%201.png?v=2020-12-28T13:31:12.253Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					25
				</Override>
				<Override slot="stat1">
					142
				</Override>
				<Override slot="stat2">
					29
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/16%20the%20lies%20of%20locke%20lamora%201.png?v=2020-12-28T14:14:51.656Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					24
				</Override>
				<Override slot="stat1">
					126
				</Override>
				<Override slot="stat2">
					45
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/26%20lord%20of%20chaos%201.png?v=2020-12-28T13:31:24.672Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					23
				</Override>
				<Override slot="stat1">
					142
				</Override>
				<Override slot="stat2">
					32
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/25%20the%20great%20hunt%201.png?v=2020-12-28T13:35:01.093Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					22
				</Override>
				<Override slot="stat1">
					127
				</Override>
				<Override slot="stat2">
					65
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/24%20golden%20son%201.png?v=2020-12-28T14:02:15.074Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					21
				</Override>
				<Override slot="stat1">
					150
				</Override>
				<Override slot="stat2">
					48
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/23%20house%20of%20earth%20and%20blood%201.png?v=2021-01-02T07:17:27.119Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					20
				</Override>
				<Override slot="stat1">
					176
				</Override>
				<Override slot="stat2">
					30
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/22%20skyward%201.png?v=2020-12-28T14:02:54.082Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					19
				</Override>
				<Override slot="stat1">
					142
				</Override>
				<Override slot="stat2">
					66
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/21%20ACOTAR%201.png?v=2020-12-28T14:02:54.084Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					18
				</Override>
				<Override slot="stat1">
					211
				</Override>
				<Override slot="stat2">
					2
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/19%20got%201.png?v=2020-12-28T14:02:54.077Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					17
				</Override>
				<Override slot="stat1">
					23
				</Override>
				<Override slot="stat2">
					205
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18%20wise%20man's%20fear%201.png?v=2020-12-28T14:02:54.067Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					16
				</Override>
				<Override slot="stat1">
					235
				</Override>
				<Override slot="stat2">
					0
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/17%20memory%20of%20light%201.png?v=2020-12-28T14:14:51.613Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					15
				</Override>
				<Override slot="stat1">
					220
				</Override>
				<Override slot="stat2">
					31
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/13%20elantris%201.png?v=2020-12-28T14:14:51.623Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					14
				</Override>
				<Override slot="stat1">
					247
				</Override>
				<Override slot="stat2">
					16
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/12%20warbreaker%201.png?v=2020-12-28T14:14:51.594Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					13
				</Override>
				<Override slot="stat1">
					318
				</Override>
				<Override slot="stat2">
					0
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/15%20wizards%20first%20rule%201.png?v=2020-12-28T14:14:51.599Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					12
				</Override>
				<Override slot="stat1">
					268
				</Override>
				<Override slot="stat2">
					55
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/7%20well%20of%20ascension%201.png?v=2020-12-28T14:20:23.401Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					11
				</Override>
				<Override slot="stat1">
					290
				</Override>
				<Override slot="stat2">
					75
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/14%20the%20blade%20itself%201.png?v=2020-12-28T14:14:51.609Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					10
				</Override>
				<Override slot="stat1">
					388
				</Override>
				<Override slot="stat2">
					39
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/6%20eye%20of%20the%20world%201.png?v=2020-12-28T14:20:23.401Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					9
				</Override>
				<Override slot="stat1">
					427
				</Override>
				<Override slot="stat2">
					45
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/1%20oathbringer%201.png?v=2020-12-28T12:06:59.538Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					8
				</Override>
				<Override slot="stat1">
					462
				</Override>
				<Override slot="stat2">
					17
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/8%20hero%20of%20ages%201.png?v=2020-12-28T14:20:23.408Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					7
				</Override>
				<Override slot="stat1">
					431
				</Override>
				<Override slot="stat2">
					66
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/3%20mistborn%201.png?v=2020-12-28T14:20:23.388Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					6
				</Override>
				<Override slot="stat1">
					522
				</Override>
				<Override slot="stat2">
					30
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/11%20kings%20of%20the%20wyld%201.png?v=2020-12-28T14:14:51.601Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					5
				</Override>
				<Override slot="stat1">
					271
				</Override>
				<Override slot="stat2">
					282
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/10%20TSIASOS%201.png?v=2020-12-28T14:20:23.393Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					4
				</Override>
				<Override slot="stat1">
					508
				</Override>
				<Override slot="stat2">
					60
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/5%20wor%201.png?v=2020-12-28T14:20:23.410Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					3
				</Override>
				<Override slot="stat1">
					549
				</Override>
				<Override slot="stat2">
					149
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/9%20before%20they%20are%20hanged%201.png?v=2020-12-28T14:20:23.395Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					2
				</Override>
				<Override slot="stat1">
					750
				</Override>
				<Override slot="stat2">
					203
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/2%20wok%201.png?v=2020-12-28T14:20:23.392Z" />
			</Components.IdealBookCard>
			<Components.IdealBookCard margin="20px 20px 20px 20px" background="--color-byzansCr">
				<Override slot="text">
					1
				</Override>
				<Override slot="stat1">
					1158
				</Override>
				<Override slot="stat2">
					695
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/4%20row%201.png?v=2020-12-28T14:20:23.394Z" />
			</Components.IdealBookCard>
		</Box>
		<Components.AppLink>
			<Override slot="text">
				If you want to read books together with people from all over the world, you know what to do! Byzans is always here.
			</Override>
			<Override slot="link">
				Right here
			</Override>
		</Components.AppLink>
		<Box
			sm-height="auto"
			sm-display="flex"
			sm-flex-direction="column"
			sm-align-items="center"
			sm-justify-content="center"
			sm-width="auto"
			width="auto"
			sm-padding="20px 20px 20px 20px"
			md-width="calc(100% - 100px)"
			md-padding="50px 50px 50px 50px"
			padding="50px 50px 50px 50px"
		>
			<Text
				font="normal 500 40px/1.2 --fontFamily-googleMontserrat"
				text-align="center"
				color="#625ed8"
				sm-font="--ranking"
				sm-position="static"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="center"
				sm-align-self="center"
				md-display="flex"
				md-align-items="center"
				md-justify-content="center"
				display="flex"
				justify-content="center"
				align-items="center"
				width="auto"
			>
				Top 30 most joined book clubs
			</Text>
			<Text
				font="normal normal 300 28px/1.2 --fontFamily-googleMontserrat"
				color="--byzansCr"
				text-align="center"
				sm-margin="20px 0px 20px 0px"
				sm-font="--leadSm"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="center"
				sm-align-self="center"
				width="auto"
				margin="30px 0px 30px 0px"
			>
				Take a look at the clubs, which managed to get the biggest following in the past year. You will see how many users joined each club in 2020 on the book card. The color of each card corresponds to the book status, just like on Byzans - orange means 'Want to Read', purple means 'Currently Reading', and green means 'Read'.
			</Text>
		</Box>
		<Box
			width="auto"
			height="auto"
			display="grid"
			min-width="300px"
			min-height="550px"
			sm-display="grid"
			sm-width="calc(100% - 20px)"
			sm-flex-direction="column"
			sm-align-items="center"
			sm-justify-content="center"
			sm-padding="20px 10px 20px 10px"
			md-display="grid"
			md-width="auto"
			md-height="auto"
			md-align-items="center"
			md-justify-content="center"
			lg-display="grid"
			lg-width="auto"
			lg-height="auto"
			lg-align-items="center"
			lg-justify-content="center"
			padding="20px 20px 20px 20px"
			justify-content="center"
			align-content="center"
			justify-items="center"
			align-items="center"
			grid-template-columns="1fr 1fr 1fr"
			lg-grid-template-columns="1fr 1fr"
			sm-grid-template-columns="1fr"
			grid-gap="40px"
			md-grid-gap={0}
		>
			<Components.JoinedBookCard background="--color-byzansWtr" lg-background="--color-byzansWtr" md-background="--color-byzansWtr" sm-background="--color-byzansWtr">
				<Override slot="stat1">
					190
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/x293.jpg?v=2021-01-03T08:20:38.905Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard background="--color-byzansR">
				<Override slot="text">
					29
				</Override>
				<Override slot="stat1">
					194
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/30%20the%20shadow%20rising%201.png?v=2020-12-28T13:17:43.992Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					28
				</Override>
				<Override slot="stat1">
					203
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/28%20hunger%20games%201.png?v=2021-01-03T08:29:01.310Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					27
				</Override>
				<Override slot="stat1">
					204
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/27%20the%20fellowship%20of%20the%20ring%201.png?v=2021-01-03T08:29:51.770Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					26
				</Override>
				<Override slot="stat1">
					219
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/26%20storm%20front%201.png?v=2021-01-03T08:30:14.173Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					25
				</Override>
				<Override slot="stat1">
					220
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/14%20the%20blade%20itself%201.png?v=2020-12-28T14:14:51.609Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					24
				</Override>
				<Override slot="stat1">
					231
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/19%20got%201.png?v=2020-12-28T14:02:54.077Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					23
				</Override>
				<Override slot="stat1">
					239
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/23%20the%20last%20wish%201.png?v=2020-12-28T14:02:14.952Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					22
				</Override>
				<Override slot="stat1">
					243
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/29%20the%20dragon%20reborn%201%20(1).png?v=2021-01-03T08:32:11.396Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					21
				</Override>
				<Override slot="stat1">
					250
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/21%20ACOTAR%201.png?v=2020-12-28T14:02:54.084Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					20
				</Override>
				<Override slot="stat1">
					254
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/20%20six%20of%20crows%201.png?v=2020-12-28T14:02:54.067Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard background="--color-byzansWtr" lg-background="--color-byzansWtr" md-background="--color-byzansWtr" sm-background="--color-byzansWtr">
				<Override slot="text">
					19
				</Override>
				<Override slot="stat1">
					265
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/16%20the%20lies%20of%20locke%20lamora%201.png?v=2020-12-28T14:14:51.656Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					18
				</Override>
				<Override slot="stat1">
					271
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18%20hp7%201.png?v=2020-12-28T14:02:54.063Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					17
				</Override>
				<Override slot="stat1">
					286
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/17%20hp6%201.png?v=2020-12-28T14:14:51.613Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					16
				</Override>
				<Override slot="stat1">
					294
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/20%20the%20name%20of%20the%20wind%201.png?v=2020-12-28T14:02:54.080Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					15
				</Override>
				<Override slot="stat1">
					298
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/13%20elantris%201.png?v=2020-12-28T14:14:51.623Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					14
				</Override>
				<Override slot="stat1">
					302
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/25%20the%20great%20hunt%201.png?v=2020-12-28T13:35:01.093Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					13
				</Override>
				<Override slot="stat1">
					307
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/13%20hp%205%201.png?v=2020-12-28T14:14:51.602Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					12
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/12%20hp4%201.png?v=2020-12-28T14:14:51.603Z" />
				<Override slot="stat1">
					326
				</Override>
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					11
				</Override>
				<Override slot="stat1">
					331
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/1%20oathbringer%201.png?v=2020-12-28T12:06:59.538Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					10
				</Override>
				<Override slot="stat1">
					333
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/12%20warbreaker%201.png?v=2020-12-28T14:14:51.594Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					9
				</Override>
				<Override slot="stat1">
					337
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/8%20hero%20of%20ages%201.png?v=2020-12-28T14:20:23.408Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					8
				</Override>
				<Override slot="stat1">
					356
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/8%20hp%203%201.png?v=2020-12-28T14:20:23.404Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					7
				</Override>
				<Override slot="stat1">
					423
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/5%20wor%201.png?v=2020-12-28T14:20:23.410Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					6
				</Override>
				<Override slot="stat1">
					432
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/6%20hp2%201.png?v=2020-12-28T14:20:23.391Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					5
				</Override>
				<Override slot="stat1">
					435
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/6%20eye%20of%20the%20world%201.png?v=2020-12-28T14:20:23.401Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					4
				</Override>
				<Override slot="stat1">
					452
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/7%20well%20of%20ascension%201.png?v=2020-12-28T14:20:23.401Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					3
				</Override>
				<Override slot="stat1">
					573
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/3%20hp1%201.png?v=2020-12-28T14:20:23.392Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					2
				</Override>
				<Override slot="stat1">
					626
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/2%20wok%201.png?v=2020-12-28T14:20:23.392Z" />
			</Components.JoinedBookCard>
			<Components.JoinedBookCard>
				<Override slot="text">
					1
				</Override>
				<Override slot="stat1">
					897
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/3%20mistborn%201.png?v=2020-12-28T14:20:23.388Z" />
			</Components.JoinedBookCard>
		</Box>
		<Components.AppLink>
			<Override slot="text">
				Any of the books sound familiar? If none of your friends read the same books as you, you can always discuss them on Byzans!
			</Override>
			<Override slot="link">
				Gimme new friends
			</Override>
		</Components.AppLink>
		<Box
			sm-height="auto"
			sm-display="flex"
			sm-flex-direction="column"
			sm-align-items="center"
			sm-justify-content="center"
			sm-width="auto"
			width="auto"
			sm-padding="20px 20px 20px 20px"
			md-width="calc(100% - 100px)"
			md-padding="50px 50px 50px 50px"
			padding="50px 50px 50px 50px"
		>
			<Text
				font="normal 500 40px/1.2 --fontFamily-googleMontserrat"
				text-align="center"
				color="#625ed8"
				sm-font="--ranking"
				sm-position="static"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="center"
				sm-align-self="center"
				md-display="flex"
				md-align-items="center"
				md-justify-content="center"
				display="flex"
				justify-content="center"
				align-items="center"
				width="auto"
			>
				Top 30 most active users in 2020
			</Text>
			<Text
				font="normal normal 300 28px/1.2 --fontFamily-googleMontserrat"
				color="--byzansCr"
				text-align="center"
				sm-margin="20px 0px 20px 0px"
				sm-font="--leadSm"
				sm-display="flex"
				sm-align-items="center"
				sm-justify-content="center"
				sm-align-self="center"
				width="auto"
				margin="30px 0px 30px 0px"
			>
				And our favourite nomination - top active users on Byzans! To determine which users are the most active, we compared the number of messages/posts/comments they wrote in 2020. Each card features 2 numbers - the first shows cafe messages, sent by the user this year, and the second shows the total of salon posts and comments. Some of our users (mainly in the end of the list) preferred  to stay anonymous, hence the reading ghost. And a reading fox means the user doesn't have profile picture.
			</Text>
		</Box>
		<Box
			width="auto"
			height="auto"
			display="grid"
			min-width="300px"
			min-height="550px"
			sm-display="grid"
			sm-width="calc(100% - 20px)"
			sm-flex-direction="column"
			sm-align-items="center"
			sm-justify-content="center"
			sm-padding="20px 10px 20px 10px"
			md-display="grid"
			md-width="auto"
			md-height="auto"
			md-align-items="center"
			md-justify-content="center"
			lg-display="grid"
			lg-width="auto"
			lg-height="auto"
			lg-align-items="center"
			lg-justify-content="center"
			padding="20px 20px 20px 20px"
			justify-content="center"
			align-content="center"
			justify-items="center"
			align-items="center"
			grid-template-columns="1fr 1fr 1fr"
			lg-grid-template-columns="1fr 1fr"
			sm-grid-template-columns="1fr"
			grid-gap="40px"
			md-grid-gap={0}
		>
			<Components.TopUserCard>
				<Override slot="text1">
					Anonymous
					<br />
					User
				</Override>
				<Override slot="stat1">
					236
				</Override>
				<Override slot="stat2">
					5
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18.png?v=2021-01-03T18:04:58.431Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					29
				</Override>
				<Override slot="text1">
					Anonymous
					<br />
					User
				</Override>
				<Override slot="stat1">
					181
				</Override>
				<Override slot="stat2">
					63
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18.png?v=2021-01-03T18:04:58.431Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					28
				</Override>
				<Override slot="text1">
					Anonymous
					<br />
					User
				</Override>
				<Override slot="stat1">
					278
				</Override>
				<Override slot="stat2">
					0
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18.png?v=2021-01-03T18:04:58.431Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					27
				</Override>
				<Override slot="stat1">
					252
				</Override>
				<Override slot="stat2">
					28
				</Override>
				<Override slot="text1">
					Anonymous
					<br />
					User
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18.png?v=2021-01-03T18:04:58.431Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					26
				</Override>
				<Override slot="stat1">
					250
				</Override>
				<Override slot="stat2">
					35
				</Override>
				<Override slot="text1">
					Anonymous
					<br />
					User
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18.png?v=2021-01-03T18:04:58.431Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					25
				</Override>
				<Override slot="text1">
					Anonymous
					<br />
					User
				</Override>
				<Override slot="stat1">
					289
				</Override>
				<Override slot="stat2">
					14
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18.png?v=2021-01-03T18:04:58.431Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					24
				</Override>
				<Override slot="text1">
					Elliot
					<br />
					Ruiz
				</Override>
				<Override slot="stat1">
					293
				</Override>
				<Override slot="stat2">
					16
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/12.png?v=2021-01-03T18:04:58.440Z" />
			</Components.TopUserCard>
			<Components.TopUserCard md-width="auto" md-height="auto" lg-grid-template-columns="280px">
				<Override slot="text">
					23
				</Override>
				<Override slot="text1" font="normal normal 500 35px --fontFamily-googleMontserrat" lg-font="normal normal 500 30px --fontFamily-googleMontserrat">
					SilverWolfReads (Blog)
				</Override>
				<Override slot="stat1">
					262
				</Override>
				<Override slot="stat2">
					55
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/1.png?v=2021-01-03T18:04:58.440Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					22
				</Override>
				<Override slot="text1">
					Rahul
					<br />
					Attray
				</Override>
				<Override slot="stat1">
					322
				</Override>
				<Override slot="stat2">
					10
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/3.png?v=2021-01-03T18:04:58.437Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					21
				</Override>
				<Override slot="text1">
					Brett
					<br />
					Parsons
				</Override>
				<Override slot="stat1">
					332
				</Override>
				<Override slot="stat2">
					10
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/16.png?v=2021-01-03T18:04:58.439Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					20
				</Override>
				<Override slot="text1">
					Anonymous
					<br />
					User
				</Override>
				<Override slot="stat1">
					376
				</Override>
				<Override slot="stat2">
					17
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18.png?v=2021-01-03T18:04:58.431Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					19
				</Override>
				<Override slot="text1">
					Simon
					<br />
					Gau
				</Override>
				<Override slot="stat1">
					355
				</Override>
				<Override slot="stat2">
					65
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/2.png?v=2021-01-03T18:04:58.431Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					18
				</Override>
				<Override slot="text1">
					Whitney
					<br />
					W.
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/19.png?v=2021-01-03T18:04:58.439Z" />
				<Override slot="stat1">
					441
				</Override>
				<Override slot="stat2">
					9
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					17
				</Override>
				<Override slot="text1">
					Mugdha
					<br />
					M.
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/6.png?v=2021-01-03T18:04:58.435Z" />
				<Override slot="stat1">
					450
				</Override>
				<Override slot="stat2">
					15
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					16
				</Override>
				<Override slot="stat1">
					412
				</Override>
				<Override slot="text1">
					Gabi
					<br />
					Divante
				</Override>
				<Override slot="stat2">
					56
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/11.png?v=2021-01-03T18:04:58.432Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					15
				</Override>
				<Override slot="text1">
					Aya
					<br />
					Kias
				</Override>
				<Override slot="stat1">
					473
				</Override>
				<Override slot="stat2">
					29
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/17.png?v=2021-01-03T18:04:58.447Z" />
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					14
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/13.png?v=2021-01-03T18:04:58.450Z" />
				<Override slot="stat1">
					473
				</Override>
				<Override slot="stat2">
					34
				</Override>
				<Override slot="text1">
					Carina
					<br />
					HH
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					13
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/14.png?v=2021-01-03T18:04:58.431Z" />
				<Override slot="text1">
					Claire
					<br />
					Sun
				</Override>
				<Override slot="stat1">
					332
				</Override>
				<Override slot="stat2">
					176
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					12
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18.png?v=2021-01-03T18:04:58.431Z" />
				<Override slot="text1">
					Anonymous
					<br />
					User
				</Override>
				<Override slot="stat1">
					507
				</Override>
				<Override slot="stat2">
					5
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					11
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/4.png?v=2021-01-03T18:04:58.431Z" />
				<Override slot="text1">
					Paula
					<br />
					Stark
				</Override>
				<Override slot="stat1">
					449
				</Override>
				<Override slot="stat2">
					128
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					10
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/19.png?v=2021-01-03T18:04:58.439Z" />
				<Override slot="text1">
					Marcel
					<br />
					Röösli{" "}
				</Override>
				<Override slot="stat1">
					566
				</Override>
				<Override slot="stat2">
					24
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					9
				</Override>
				<Override slot="text1">
					Anonymous
					<br />
					User
				</Override>
				<Override slot="stat1">
					549
				</Override>
				<Override slot="stat2">
					56
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18.png?v=2021-01-03T18:04:58.431Z" />
			</Components.TopUserCard>
			<Components.TopUserCard lg-grid-template-columns="280px">
				<Override slot="text">
					8
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/15.png?v=2021-01-03T18:04:58.437Z" />
				<Override slot="stat1">
					720
				</Override>
				<Override slot="stat2">
					261
				</Override>
				<Override slot="text1">
					Anastasia
					<br />
					Ignatova
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard lg-grid-template-columns="280px">
				<Override slot="text">
					7
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/5.png?v=2021-01-03T18:04:58.430Z" />
				<Override slot="text1">
					Nico Kääriäinen
				</Override>
				<Override slot="stat1">
					983
				</Override>
				<Override slot="stat2">
					29
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					6
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/18.png?v=2021-01-03T18:04:58.431Z" />
				<Override slot="text1">
					Anonymous
					<br />
					User
				</Override>
				<Override slot="stat1">
					1018
				</Override>
				<Override slot="stat2">
					13
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard lg-grid-template-columns="280px">
				<Override slot="text">
					5
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/19.png?v=2021-01-03T18:04:58.439Z" />
				<Override slot="text1">
					Michele Dionne
				</Override>
				<Override slot="stat1">
					967
				</Override>
				<Override slot="stat2">
					172
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard lg-grid-template-columns="280px">
				<Override slot="text">
					4
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/9.png?v=2021-01-03T18:04:58.438Z" />
				<Override slot="text1">
					Michael Kasslander
				</Override>
				<Override slot="stat1">
					1164
				</Override>
				<Override slot="stat2">
					132
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					3
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/8.png?v=2021-01-03T18:04:58.435Z" />
				<Override slot="text1" display="flex" align-self="center" justify-self="center">
					Luke
					<br />
					Tufts
				</Override>
				<Override slot="stat1">
					1251
				</Override>
				<Override slot="stat2">
					74
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					2
				</Override>
				<Override slot="image" src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/7.png?v=2021-01-03T18:04:58.441Z" justify-content="center" justify-self="center" />
				<Override slot="text1">
					Mike
					<br />
					Salnikov
				</Override>
				<Override slot="stat1">
					1561
				</Override>
				<Override slot="stat2">
					376
				</Override>
			</Components.TopUserCard>
			<Components.TopUserCard>
				<Override slot="text">
					1
				</Override>
				<Override
					slot="image"
					src="https://uploads.quarkly.io/5fe5d9b294657a0021e7d3ef/images/10.png?v=2021-01-03T18:04:58.442Z"
					justify-content="center"
					align-items="center"
					justify-self="center"
				/>
				<Override slot="text1" md-font="normal normal 500 35px --fontFamily-googleMontserrat">
					JOHN [Sleeples]
					<br />
					Atium
				</Override>
				<Override slot="stat1">
					3396
				</Override>
				<Override slot="stat2">
					596
				</Override>
			</Components.TopUserCard>
		</Box>
		<Components.AppLink sm-margin="0px 0px 0 0px" sm-padding="20px 20px 50px 20px" margin="0px 0px 0px 0px" padding="20px 20px 50px 20px">
			<Override slot="text">
				And that's a wrap for 2020! To all our users: we love you and thank you for staying with us! It was so much fun gathering this list and seeing your favourites over the year. We will keep working hard to ensure you have the best experience on our app. And if you don't use Byzans and still somehow ended up on this website, maybe you should give it a go? We definitely wouldn't mind that :){" "}
			</Override>
			<Override slot="link">
				Have fun!
			</Override>
		</Components.AppLink>
		<SocialMedia
			facebook="https://www.facebook.com/ByzansApp"
			twitter="https://twitter.com/ByzansApp"
			icon-size="70px"
			instagram="https://www.instagram.com/byzans.app/"
			height="100px"
			padding="0px 0px 100px 0px"
		>
			<Override slot="icon" border-color="--color-byzansCr" />
			<Override slot="link" color="--byzansCr" background="--color-white" />
		</SocialMedia>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});