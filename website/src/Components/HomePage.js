import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import largeProfilePic from "../Images/IMG_3877 2.jpg";
import background from "../Images/Pxfuel.jpg";

const SocialMedia = lazy(() => import("./SocialMedia"));

const styles = {
	backgroundImage: `url(${background})`,
	backgroundSize: "cover",
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	height: "100vh",
	width: "100vw",
};

export default function HomePage() {
	return (
		<div className="home-page" style={styles}>
			<img
				srcSet={`${largeProfilePic} 1024w,
                  ${largeProfilePic} 768w,
                  ${largeProfilePic} 480w`}
				sizes="(max-width: 480px) 100vw,
               (max-width: 768px) 50vw,
               33vw"
				src={largeProfilePic}
				alt="Profile"
				className="home-page-image"
			/>
			<h1 className="home-page-title">Christopher Smith Jr</h1>
			<h2 className="home-page-subtitle">New Grad Computer Science Major</h2>
			<p className="home-page-description">
				Hi, my name is Christopher Smith Jr and I'm a Computer Science Major with
				experience in web development. I'm passionate about solving problems and
				creating software that can make a positive impact on people's lives.
			</p>
			<Link
				to="/About"
				className="home-page-cta"
				style={{ textDecoration: "none" }}
			>
				Learn More About Me
			</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<SocialMedia />
			</Suspense>
      {/* <Skills /> */}
		</div>
	);
}
