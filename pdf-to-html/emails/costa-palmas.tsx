import {
	Html,
	Head,
	Body,
	Container,
	Section,
	Text,
	Link,
	Img,
	Tailwind,
	Font,
} from "@react-email/components";

export default function CostapalmasEmail() {
	// Estilos comunes extraídos para evitar repetición
	const textCommonStyles =
		"text-left p-0 m-0 text-[17px] text-[#544534] font-['Basis_Grotesque_Pro',_Arial,_sans-serif]";

	return (
		<Html lang="es">
			<Head>
				<title>Costa Palmas</title>
				<meta name="viewport" content="width=600, initial-scale=1.0" />
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
				<style>
					{`
						@media only screen {
							@font-face {
								font-family: 'Basis Grotesque Pro';
								font-style: normal;
								font-weight: 300;
								src: url(https://db.onlinewebfonts.com/t/fb3ddfb68f7942d3a38bb6b63f96ac89.woff2) format('woff2');
								font-display: swap;
							}
							* {
								font-family: 'Basis Grotesque Pro', Arial, sans-serif;
							}
						}
					`}
				</style>
			</Head>
			<Tailwind>
				<Body
					className="bg-white text-center font-sans p-0 m-0 mx-auto"
					style={{
						width: "600px",
						WebkitTextSizeAdjust: "100%",
						textSizeAdjust: "100%",
						fontFamily: "'Basis Grotesque Pro', Arial, sans-serif",
					}}
				>
					<Container style={{ padding: 0, width: "600px", minWidth: "600px" }}>
						<Img
							src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/header.png"
							alt="Header"
							className="bg-contain bg-center"
							style={{ width: "600px"}}
						/>
						{/* people */}
						<Img
							src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/people.jpg"
							alt="people"
							className="h-[435px] block object-cover"
							width="600"
							style={{ width: "600px" }}
						/>

						<Section className="bg-[#ECE8DF] py-10" style={{ width: "600px" }}>
							{/* title-1 */}
							<Img
								src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/title_1.png"
								alt="title_1"
								className="py-10 pb-12  mx-auto w-[600px]"
							/>

							<div className="mb-6 mx-auto space-y-0 leading-tight text-left">
								<Text className={`${textCommonStyles} px-16`}>
									Thank you for joining us at The Mexican as we brought a
								</Text>
								<Text className={`${textCommonStyles} px-16`}>
									taste of Costa Palmas to the heart of Dallas. We hope you
									enjoyed the vibrant flavors of Baja throughout the evening.
								</Text>
							</div>

							<div className="mb-6 mx-auto space-y-0 leading-tight">
								<Text className={`${textCommonStyles} px-16`}>
									Now that you've heard all about our mountain, desert and
								</Text>
								<Text className={`${textCommonStyles} whitespace-nowrap px-16`}>
									sea escape on the East Cape of Baja Mexico, you'll want to
								</Text>
								<Text className={`${textCommonStyles} px-16`}>
									experience it firsthand. Next time you're planning a trip to
								</Text>
								<Text className={`${textCommonStyles} whitespace-nowrap px-16`}>
									Cabo, you're invited to experience all that Costa Palmas has
								</Text>
								<Text className={`${textCommonStyles} px-16`}>to offer.</Text>
							</div>

							<div className="mb-10 mx-auto space-y-0 leading-tight text-left">
								<Text className={`${textCommonStyles} px-16`}>
									On behalf of your hosts, thank you for spending an evening
								</Text>
								<Text className={`${textCommonStyles} px-16`}>with us.</Text>
							</div>

							<div className="px-20 mx-auto whitespace-nowrap my-6">
								<Text className="text-center my-1 text-[17px] leading-tight text-[#544534] font-['Basis_Grotesque_Pro',_Arial,_sans-serif]">
									Michael Radovan -{" "}
									<Link
										href="mailto:mradovan@costapalmas.com"
										className="text-[#544534] font-['Basis_Grotesque_Pro',_Arial,_sans-serif] no-underline"
									>
										mradovan@costapalmas.com
									</Link>
								</Text>
								<Text className="text-center my-1 text-[17px] leading-tight text-[#544534] font-['Basis_Grotesque_Pro',_Arial,_sans-serif]">
									Rachael Thornquist -{" "}
									<Link
										href="mailto:rthornquist@costapalmas.com"
										className="text-[#544534] no-underline font-['Basis_Grotesque_Pro',_Arial,_sans-serif]"
									>
										rthornquist@costapalmas.com
									</Link>
								</Text>
								<Text className="text-center my-1 text-[17px] leading-tight text-[#544534] font-['Basis_Grotesque_Pro',_Arial,_sans-serif]">
									Wilder Denholm -{" "}
									<Link
										href="mailto:wdenholm@costapalmas.com"
										className="text-[#544534] font-['Basis_Grotesque_Pro',_Arial,_sans-serif] no-underline"
									>
										wdenholm@costapalmas.com
									</Link>
								</Text>
							</div>

							<Link href="https://costapalmasmemories.pic-time.com/-costapalmasindallas1">
								{/* button */}
								<Img
									src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/button.png"
									className="mx-auto py-10 w-[600px]"
									alt="CLICK HERE FOR EVENT PHOTOS"
								/>
							</Link>
						</Section>
						{/* family */}
						<Img
							src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/family.jpg"
							alt="family"
							className="h-[340px] block mx-auto object-cover w-[600px] max-w-[600px] mobile-content"
						/>

						<Section className="bg-[#ede9df] py-18 w-[600px] max-w-[600px] mobile-content">
							{/* title-2 */}
							<Img
								src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/title_2.png"
								alt="title_2"
								className="pb-3 pt-20 mx-auto w-[600px]"
							/>

							<div className="py-14 mx-auto space-y-0 leading-normal">
								<Text className={`${textCommonStyles} px-16`}>
									YACHT RENDEZVOUS - June 20th to 22nd.
								</Text>
								<Text className={`${textCommonStyles} px-16`}>
									Save the date for our Yacht Rendezvous weekend from
								</Text>
								<Text className={`${textCommonStyles} whitespace-nowrap px-16`}>
									Friday to Sunday. Three days of sun- soaked adventure and
								</Text>
								<Text className={`${textCommonStyles} whitespace-nowrap px-16`}>
									barefoot luxury on land and sea. You can view the weekend's
								</Text>
								<Text className={`${textCommonStyles} px-16`}>
									itinerary and details by{" "}
									<Link
										href="https://costapalmasyachtclub.com/rendezvous"
										className="text-[#cc7449] underline font-['Basis_Grotesque_Pro',_Arial,_sans-serif]"
									>
										visiting our event website.
									</Link>
								</Text>
							</div>
							<div className="mx-auto space-y-0 leading-normal pb-16">
								<Text className={`${textCommonStyles} px-16`}>
									LA CARERRA GOLF & SOCIAL WEEKEND
								</Text>
								<Text className={`${textCommonStyles} px-16`}>
									November 6th to 9th.
								</Text>
								<Text className={`${textCommonStyles} px-16`}>
									This is one of Costa Palmas' most anticipated weekends,
								</Text>
								<Text className={`${textCommonStyles} px-16`}>
									blending competitive golf with unforgettable social
								</Text>
								<Text className={`${textCommonStyles} px-16`}>
									experiences. The weekend includes thrilling rounds on the
								</Text>
								<Text className={`${textCommonStyles} px-16`}>
									Robert Trent Jones II golf course, vibrant evenings at the
								</Text>
								<Text className={`${textCommonStyles} whitespace-nowrap px-16`}>
									Marina Village, and a festive mix of fine dining, cocktails,
									and
								</Text>
								<Text className={`${textCommonStyles} px-16`}>
									entertainment.{" "}
									<Link
										href="https://costapalmas.com/media-gallery/"
										className="text-[#cc7449] underline font-['Basis_Grotesque_Pro',_Arial,_sans-serif]"
									>
										Click here for a preview of last years event.
									</Link>
								</Text>
							</div>
						</Section>

						<Img
							src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/Palmas.webp"
							alt="Palmas"
							className="h-[360px] mx-auto block object-cover object-[10%_0%] w-[600px] max-w-[600px] mobile-content"
						/>

						<Section 
							style={{
								height: "340px",
								fontFamily: "'Basis-Grotesque-Pro-Light', Arial, sans-serif",
								color: "white",
								fontSize: "1.4rem",
								position: "relative",
								background: "linear-gradient(0deg, #f9f8f3 0%, #d0e1e6 41%, #b6cdd4 79%)",
								padding: "40px 0",
								textAlign: "center",
								width: "600px",
								maxWidth: "600px"
							}}
							className="mobile-content"
						>
							<Link
								href="https://www.instagram.com/costapalmas"
								className="no-underline text-white text-[0.95rem] tracking-[0.08em] font-normal inline-block leading-[1.3] font-['Basis_Grotesque_Pro_Light',_Arial,_sans-serif] mb-4"
							>
								<Img
									src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/text_footer_1.png"
									alt="Instagram"
									className="h-[16px] inline-block"
								/>
							</Link>
							<div className="h-0.5" />
							<Link
								href="mailto:INFO@COSTAPALMAS.COM"
								className="no-underline text-white text-[0.95rem] tracking-[0.08em] font-normal inline-block leading-[1.3] font-['Basis_Grotesque_Pro_Light',_Arial,_sans-serif] mb-4"
							>
								<Img
									src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/text_footer_2.png"
									alt="Email"
									className="h-[16px] inline-block"
								/>
							</Link>
							<div className="h-0.5" />
							<Link
								href="https://costapalmas.com/"
								className="no-underline text-white text-[0.95rem] tracking-[0.08em] font-normal inline-block leading-[1.3] font-['Basis_Grotesque_Pro_Light',_Arial,_sans-serif]"
							>
								<Img
									src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/text_footer_3.png"
									alt="Website"
									className="h-[16px] inline-block"
								/>
							</Link>
							<div className="flex justify-center w-full mt-[30px]">
								<Img
									src="https://raw.githubusercontent.com/saimaneim/PDF-to-HTML/refs/heads/main/pdf-to-html/static/footer-icon.png"
									alt="Costa Palmas Icon"
									className="w-[600px] h-[58px] mx-auto"
								/>
							</div>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
