import {
	Html,
	Head,
	Body,
	Container,
	Section,
	Text,
	Link,
	Img,
	Button,
	Tailwind,
} from "@react-email/components";

export default function CostapalmasEmail() {
	// Estilos comunes extraídos para evitar repetición
	const textCommonStyles = "text-left p-0 m-0 text-[17px] text-[#544534] font-['Basis_Grotesque_Pro_Regular',_Arial,_sans-serif]";
	const titleStyles = "text-[#cc7449] font-serif tracking-[0.08em] font-medium text-center mx-auto";

	return (
		<Html lang="es">
			<Head>
				<title>Costa Palmas</title>
			</Head>
			<Tailwind>
				<Body className="bg-white text-center font-sans w-[600px] p-0 m-0">
					<Container className="w-[600px] mx-auto">
						<Section className="bg-[url('https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/header.png')] bg-cover bg-center h-[296px] w-[600px] mx-auto py-10">
							<img
								src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/header-icon.svg"
								alt="Header Icon"
								className="w-[280px] h-auto mx-auto my-[30px]"
							/>
						</Section>
						{/* people */}
						<Img
							src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/people.jpg"
							alt="people"
							className="w-[600px] h-[435px] block mx-auto object-cover"
						/>

						<Section className="bg-[#ede9df] w-[600px] px-[30px] py-10 mx-auto">
							<img src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/title_1.png" alt="title_1" />

							<div className="mb-4 w-[500px] mx-auto space-y-0 leading-tight text-left">
								<Text className={textCommonStyles}>
									Thank you for joining us at The Mexican as we brought a
								</Text>
								<Text className={textCommonStyles}>
									taste of Costa Palmas to the heart of Dallas. We hope you
									enjoyed the vibrant flavors of Baja throughout the evening.
								</Text>
							</div>

							<div className="mb-4 w-[500px] mx-auto space-y-0 leading-tight">
								<Text className={textCommonStyles}>
									Now that you've heard all about our mountain, desert and
								</Text>
								<Text className={textCommonStyles}>
									sea escape on the East Cape of Baja Mexico, you'll want to
								</Text>
								<Text className={textCommonStyles}>
									experience it firsthand. Next time you're planning a trip to
								</Text>
								<Text className={textCommonStyles}>
									Cabo, you're invited to experience all that Costa Palmas has
								</Text>
								<Text className={textCommonStyles}>
									to offer.
								</Text>
							</div>

							<div className="my-10 w-[500px] mx-auto space-y-0 leading-tight text-left">
								<Text className={textCommonStyles}>
									On behalf of your hosts, thank you for spending an evening
								</Text>
								<Text className={textCommonStyles}>
									with us.
								</Text>
							</div>
							
							<div className="w-[500px] mx-auto space-y-4 whitespace-nowrap my-7">
								<Text className="text-center my-0 text-[17px] leading-tight text-[#544534] font-medium font-['Basis_Grotesque_Pro_Regular',_Arial,_sans-serif]">
									Michael Radovan -{" "}
									<Link
										href="mailto:mradovan@costapalmas.com"
										className="text-[#cc7449] no-underline"
									>
										mradovan@costapalmas.com
									</Link>
								</Text>
								<Text className="text-center my-0 text-[17px] leading-tight text-[#544534] font-medium font-['Basis_Grotesque_Pro_Regular',_Arial,_sans-serif]">
									Rachael Thornquist -{" "}
									<Link
										href="mailto:rthornquist@costapalmas.com"
										className="text-[#cc7449] no-underline"
									>
										rthornquist@costapalmas.com
									</Link>
								</Text>
								<Text className="text-center my-0 text-[17px] leading-tight text-[#544534] font-medium font-['Basis_Grotesque_Pro_Regular',_Arial,_sans-serif]">
									Wilder Denholm -{" "}
									<Link
										href="mailto:wdenholm@costapalmas.com"
										className="text-[#cc7449] no-underline"
									>
										wdenholm@costapalmas.com
									</Link>
								</Text>
							</div>

							<Button
								href="https://costapalmasmemories.pic-time.com/-costapalmasindallas1"
								className="py-[10px] px-5 rounded-none w-[280px] h-[45px] bg-[#c1774d] no-underline text-white font-['Prelom_Regular',_Arial,_sans-serif] text-[1.2rem] text-center leading-none mt-[50px] mb-0 mx-auto block"
							>
								CLICK HERE FOR EVENT PHOTOS
							</Button>
						</Section>

						<Img
							src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/family.jpg"
							alt="family"
							className="w-[600px] h-[340px] block mx-auto object-cover"
						/>

						<Section className="bg-[#ede9df] w-[600px] py-18 mx-auto">
							<Text className={`w-[540px] text-[2.4rem] leading-[3rem] ${titleStyles} mt-5`}>
								UPCOMING EVENTS
							</Text>
							<Text className={`w-[540px] text-[2.4rem] leading-[3rem] ${titleStyles} m-0 mb-5`}>
								AT COSTA PALMAS
							</Text>

							<div className="my-10 w-[500px] mx-auto space-y-0 leading-tight">
								<Text className={textCommonStyles}>
									YACHT RENDEZVOUS - June 20th to 22nd.
								</Text>
								<Text className={textCommonStyles}>
									Save the date for our Yacht Rendezvous weekend from
								</Text>
								<Text className={textCommonStyles}>
									Friday to Sunday. Three days of sun- soaked adventure and
									barefoot luxury on land and sea. You can view the weekend's
								</Text>
								<Text className={textCommonStyles}>
									itinerary and details by{" "}
									<Link
										href="https://costapalmasyachtclub.com/rendezvous"
										className="text-[#cc7449] underline"
									>
										visiting our event website.
									</Link>
								</Text>
							</div>

							<div className="w-[500px] mx-auto space-y-0 leading-tight">
								<Text className={textCommonStyles}>
									LA CARERRA GOLF & SOCIAL WEEKEND
								</Text>
								<Text className={textCommonStyles}>
									November 6th to 9th.
								</Text>
								<Text className={textCommonStyles}>
									This is one of Costa Palmas' most anticipated weekends,
								</Text>
								<Text className={textCommonStyles}>
									blending competitive golf with unforgettable social
								</Text>
								<Text className={textCommonStyles}>
									experiences. The weekend includes thrilling rounds on the
								</Text>
								<Text className={textCommonStyles}>
									Robert Trent Jones II golf course, vibrant evenings at the
								</Text>
								<Text className={textCommonStyles}>
									Marina Village, and a festive mix of fine dining, cocktails,
									and
								</Text>
								<Text className={textCommonStyles}>
									entertainment.{" "}
									<Link
										href="https://costapalmas.com/media-gallery/"
										className="text-[#cc7449] underline"
									>
										Click here for a preview of last years event.
									</Link>
								</Text>
							</div>
						</Section>

						<Img
							src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/Palmas.webp"
							alt="Palmas"
							className="w-[600px] h-[250px] block mx-auto object-cover"
						/>

						<Section className="w-[600px] h-[340px] font-['Prelom_Regular',_Arial,_sans-serif] text-white text-[1.4rem] relative bg-[linear-gradient(0deg,#f9f8f3_0%,#d0e1e6_41%,#b6cdd4_79%)] py-[40px] px-0 text-center">
							<Link
								href="https://www.instagram.com/costapalmas"
								className="no-underline text-white text-[0.95rem] tracking-[0.08em] font-thin inline-block leading-[1.3]"
							>
								FOLLOW US @COSTAPALMAS
							</Link>
							<br />
							<Link
								href="mailto:INFO@COSTAPALMAS.COM"
								className="no-underline text-white text-[0.95rem] tracking-[0.08em] font-thin inline-block leading-[1.3]"
							>
								INFO@COSTAPALMAS.COM
							</Link>
							<br />
							<Link
								href="https://costapalmas.com/"
								className="no-underline text-white text-[0.95rem] tracking-[0.08em] font-thin inline-block leading-[1.3]"
							>
								COSTAPALMAS.COM
							</Link>
							<div className="flex justify-center w-full mt-[30px]">
								<img
									src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/footer-icon.svg"
									alt="Costa Palmas Icon"
									className="w-[58px] h-[58px] mx-auto"
								/>
							</div>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
