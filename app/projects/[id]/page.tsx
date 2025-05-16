import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { notFound } from "next/navigation"

// This would typically come from a database or API
const projectsData = [
	{
		id: "luxury-fashion-brand",
		title: "Luxury Fashion Brand Campaign",
		category: "Campaigns",
		client: "Elegance Couture",
		duration: "3 months",
		year: "2024",
		mainImage: "/placeholder.svg?height=800&width=1200",
		gallery: [
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
		],
		challenge:
			"Elegance Couture needed to reposition their brand in the digital space to appeal to a younger, affluent audience while maintaining their luxury status.",
		solution:
			"We developed a comprehensive social media campaign across Instagram, TikTok, and Pinterest that showcased their products in aspirational yet relatable contexts. The campaign included influencer partnerships, user-generated content strategies, and immersive AR experiences.",
		results: [
			"250% increase in social media engagement",
			"45% growth in followers across platforms",
			"32% increase in website traffic from social channels",
			"28% boost in online sales during the campaign period",
		],
		testimonial: {
			quote:
				"Zylo Global transformed our social media presence completely. Their strategic approach and creative content have driven exceptional engagement and conversion rates for our brand.",
			name: "Kumari Perera",
			title: "Marketing Director, Elegance Couture",
		},
	},
	{
		id: "tech-startup-strategy",
		title: "Tech Startup Social Strategy",
		category: "Strategy",
		client: "InnovateTech",
		duration: "6 months",
		year: "2024",
		mainImage: "/placeholder.svg?height=800&width=1200",
		gallery: [
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
		],
		challenge:
			"InnovateTech was launching a revolutionary SaaS product but had minimal brand recognition and limited marketing budget.",
		solution:
			"We created a strategic social media plan focused on thought leadership, educational content, and community building. The approach included LinkedIn optimization, Twitter engagement strategies, and targeted content marketing.",
		results: [
			"300% growth in followers within 6 months",
			"185% increase in demo requests from social channels",
			"Featured in 5 major tech publications due to social visibility",
			"Successfully secured Series A funding partly attributed to strong digital presence",
		],
		testimonial: {
			quote:
				"Working with Zylo has been a game-changer for our startup. Their data-driven strategies helped us establish a strong social media presence from day one, resulting in rapid growth.",
			name: "Dinesh Jayawardena",
			title: "CEO, InnovateTech",
		},
	},
	{
		id: "food-beverage-content",
		title: "Food & Beverage Content Series",
		category: "Content",
		client: "Flavor Fusion",
		duration: "4 months",
		year: "2023",
		mainImage: "/placeholder.svg?height=800&width=1200",
		gallery: [
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
		],
		challenge:
			"Flavor Fusion needed to differentiate their premium beverage line in a saturated market and build brand loyalty.",
		solution:
			"We developed a visually stunning content series that showcased their products in creative contexts, highlighting the craftsmanship and quality ingredients. The campaign included recipe videos, behind-the-scenes content, and user-generated content initiatives.",
		results: [
			"1.2M impressions across Instagram and TikTok",
			"68% increase in engagement rate",
			"42% growth in direct sales attributed to social media",
			"Successful partnerships with 3 major food influencers",
		],
		testimonial: {
			quote:
				"The content series created by Zylo Global exceeded our expectations. The creative approach and strategic distribution helped us connect with our audience in meaningful ways.",
			name: "Priyanka Bandara",
			title: "Brand Manager, Flavor Fusion",
		},
	},
	{
		id: "financial-services-rebrand",
		title: "Financial Services Rebrand",
		category: "Branding",
		client: "Secure Wealth Management",
		duration: "5 months",
		year: "2023",
		mainImage: "/placeholder.svg?height=800&width=1200",
		gallery: [
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
		],
		challenge:
			"Secure Wealth Management had an outdated digital presence that didn't reflect their innovative approach to financial services.",
		solution:
			"We executed a complete social media rebrand, including visual identity refresh, content strategy overhaul, and platform optimization. The approach focused on humanizing financial services through storytelling and educational content.",
		results: [
			"75% improvement in brand perception metrics",
			"52% increase in qualified leads from social channels",
			"38% growth in client retention attributed to improved digital engagement",
			"Industry award for 'Most Innovative Financial Services Social Media Strategy'",
		],
		testimonial: {
			quote:
				"Zylo Global's rebrand of our social media presence has completely transformed how our clients and prospects perceive us. The results speak for themselves.",
			name: "Rohan Gunawardena",
			title: "CMO, Secure Wealth Management",
		},
	},
	{
		id: "travel-industry-campaign",
		title: "Travel Industry Campaign",
		category: "Campaigns",
		client: "Wanderlust Adventures",
		duration: "3 months",
		year: "2023",
		mainImage: "/placeholder.svg?height=800&width=1200",
		gallery: [
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
		],
		challenge:
			"Wanderlust Adventures needed to recover from the pandemic's impact on the travel industry and rebuild consumer confidence.",
		solution:
			"We created a multi-platform campaign highlighting safe, immersive travel experiences. The strategy included user-generated content from early travelers, virtual tours, and partnerships with travel influencers.",
		results: [
			"45% increase in bookings attributed to social media",
			"2.5M campaign impressions across platforms",
			"320% increase in website traffic from social channels",
			"Successful partnerships with 8 travel influencers",
		],
		testimonial: {
			quote:
				"The campaign Zylo Global created helped us navigate one of the most challenging periods in the travel industry. Their strategic approach directly contributed to our recovery.",
			name: "Amali Fernando",
			title: "Marketing Director, Wanderlust Adventures",
		},
	},
	{
		id: "healthcare-brand-strategy",
		title: "Healthcare Brand Strategy",
		category: "Strategy",
		client: "Wellness Medical Group",
		duration: "6 months",
		year: "2023",
		mainImage: "/placeholder.svg?height=800&width=1200",
		gallery: [
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
		],
		challenge:
			"Wellness Medical Group needed to establish trust and community engagement while navigating strict healthcare marketing regulations.",
		solution:
			"We developed a comprehensive social media strategy focused on educational content, patient stories, and healthcare provider spotlights. The approach included HIPAA-compliant content workflows and community management protocols.",
		results: [
			"85% increase in patient inquiries from social channels",
			"62% improvement in community sentiment metrics",
			"45% growth in newsletter subscriptions from social media",
			"Successfully established the client as a thought leader in preventative healthcare",
		],
		testimonial: {
			quote:
				"Zylo Global's strategic approach to healthcare social media has helped us build meaningful connections with our community while navigating complex regulatory requirements.",
			name: "Dr. Nimal Dissanayake",
			title: "CEO, Wellness Medical Group",
		},
	},
	{
		id: "retail-holiday-campaign",
		title: "Retail Holiday Campaign",
		category: "Campaigns",
		client: "Urban Style Co.",
		duration: "2 months",
		year: "2023",
		mainImage: "/placeholder.svg?height=800&width=1200",
		gallery: [
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
		],
		challenge:
			"Urban Style Co. needed to stand out during the competitive holiday shopping season and drive both online and in-store sales.",
		solution:
			"We created an integrated holiday campaign across Instagram, Facebook, and TikTok that included shoppable posts, limited-time offers, and user-generated content initiatives. The campaign featured interactive elements like AR filters and social-exclusive promotions.",
		results: [
			"60% increase in holiday sales compared to previous year",
			"3.2M campaign impressions",
			"42% higher conversion rate from social traffic",
			"Successful implementation of social commerce features resulting in $250K direct sales",
		],
		testimonial: {
			quote:
				"The holiday campaign exceeded all our expectations. Zylo Global's strategic approach and creative execution delivered exceptional results during our most critical sales period.",
			name: "Asanka Silva",
			title: "Digital Marketing Manager, Urban Style Co.",
		},
	},
	{
		id: "automotive-content-series",
		title: "Automotive Content Series",
		category: "Content",
		client: "Precision Motors",
		duration: "4 months",
		year: "2022",
		mainImage: "/placeholder.svg?height=800&width=1200",
		gallery: [
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
		],
		challenge:
			"Precision Motors needed to showcase their new vehicle lineup to a younger, tech-savvy audience while maintaining their reputation for engineering excellence.",
		solution:
			"We developed a content series that highlighted vehicle features through immersive storytelling, behind-the-scenes engineering insights, and interactive experiences. The approach included YouTube episodes, Instagram Reels, and TikTok content optimized for each platform.",
		results: [
			"4.5M total views across all content pieces",
			"35% increase in test drive requests from younger demographics",
			"52% growth in social media following during the campaign",
			"Featured as a case study in Automotive Marketing Monthly",
		],
		testimonial: {
			quote:
				"Zylo Global's content series perfectly balanced technical information with engaging storytelling. They helped us connect with a new generation of customers without alienating our core audience.",
			name: "Tharaka Weerasinghe",
			title: "Marketing Director, Precision Motors",
		},
	},
	{
		id: "hospitality-brand-refresh",
		title: "Hospitality Brand Refresh",
		category: "Branding",
		client: "Serenity Hotels & Resorts",
		duration: "5 months",
		year: "2022",
		mainImage: "/placeholder.svg?height=800&width=1200",
		gallery: [
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
			"/placeholder.svg?height=600&width=800",
		],
		challenge:
			"Serenity Hotels & Resorts needed to refresh their digital brand identity to appeal to modern travelers while honoring their legacy of exceptional service.",
		solution:
			"We executed a comprehensive social media brand refresh, including visual identity updates, content pillars redefinition, and channel strategy optimization. The approach emphasized authentic experiences, destination storytelling, and guest-centered content.",
		results: [
			"68% improvement in engagement metrics across platforms",
			"45% increase in direct bookings attributed to social media",
			"3.2M impressions on refresh launch campaign",
			"Successfully repositioned the brand for the luxury experience economy",
		],
		testimonial: {
			quote:
				"The brand refresh by Zylo Global has completely transformed our digital presence. They understood our heritage and helped us evolve for today's travelers without losing our identity.",
			name: "Dilini Rajapaksa",
			title: "Brand Director, Serenity Hotels & Resorts",
		},
	},
]

// Generate static params for all project IDs
export async function generateStaticParams() {
	return projectsData.map((project) => ({
		id: project.id,
	}))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
	const project = projectsData.find((p) => p.id === params.id)

	// Use the basePath from next.config.mjs
	const basePath = '/zylo-global';

	if (!project) {
		notFound()
	}

	return (
		<div className="bg-black min-h-screen pt-24 pb-20">
			<div className="container mx-auto px-4 md:px-6">
				<div className="flex items-center mb-12">
					<Link href={`${basePath}/projects/`}>
						<Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
							<ArrowLeft className="mr-2 h-4 w-4" />
							Back to Projects
						</Button>
					</Link>
				</div>

				<div className="mb-12">
					<span className="text-gold text-sm uppercase tracking-wider mb-2">{project.category}</span>
					<h1 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-6">{project.title}</h1>

					<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
						<div>
							<p className="text-gray-400 text-sm">Client</p>
							<p className="text-white font-medium">{project.client}</p>
						</div>
						<div>
							<p className="text-gray-400 text-sm">Duration</p>
							<p className="text-white font-medium">{project.duration}</p>
						</div>
						<div>
							<p className="text-gray-400 text-sm">Year</p>
							<p className="text-white font-medium">{project.year}</p>
						</div>
						<div>
							<p className="text-gray-400 text-sm">Category</p>
							<p className="text-white font-medium">{project.category}</p>
						</div>
					</div>
				</div>

				<div className="relative aspect-[16/9] mb-16">
					<Image
						src={project.mainImage || "/placeholder.svg"}
						alt={project.title}
						fill
						className="object-cover rounded-lg"
					/>
				</div>

				<div className="grid md:grid-cols-2 gap-12 mb-16">
					<div>
						<h2 className="text-2xl font-serif font-bold mb-4">The Challenge</h2>
						<p className="text-gray-300">{project.challenge}</p>
					</div>
					<div>
						<h2 className="text-2xl font-serif font-bold mb-4">Our Solution</h2>
						<p className="text-gray-300">{project.solution}</p>
					</div>
				</div>

				<div className="mb-16">
					<h2 className="text-2xl font-serif font-bold mb-6">Results</h2>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{project.results.map((result, index) => (
							<div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
								<p className="text-white">{result}</p>
							</div>
						))}
					</div>
				</div>

				<div className="mb-16">
					<h2 className="text-2xl font-serif font-bold mb-6">Gallery</h2>
					<div className="grid md:grid-cols-3 gap-6">
						{project.gallery.map((image, index) => (
							<div key={index} className="relative aspect-[4/3]">
								<Image
									src={image || "/placeholder.svg"}
									alt={`${project.title} gallery image ${index + 1}`}
									fill
									className="object-cover rounded-lg"
								/>
							</div>
						))}
					</div>
				</div>

				<div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-16">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<div className="text-4xl text-gold">"</div>
						<div>
							<p className="text-lg text-gray-300 italic mb-4">{project.testimonial.quote}</p>
							<p className="text-white font-medium">{project.testimonial.name}</p>
							<p className="text-gray-400">{project.testimonial.title}</p>
						</div>
					</div>
				</div>

				<div className="flex justify-between">
					<Link href={`${basePath}/projects/`}>
						<Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
							<ArrowLeft className="mr-2 h-4 w-4" />
							All Projects
						</Button>
					</Link>
					<Link href={`${basePath}/#contact`}>
						<Button className="bg-gold hover:bg-gold-light text-black">
							Start Your Project
							<ArrowRight className="ml-2 h-4 w-4" />
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}



