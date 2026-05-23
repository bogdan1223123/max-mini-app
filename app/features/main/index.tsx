"use client";

import { useEffect, useState } from "react";
import styles from "./styles/userReveal.module.css";

type TUser = {
	id?: string;
	first_name?: string;
	last_name?: string;
	username?: string;
	language_code?: string;
	photo_url?: string;
	[key: string]: any;
};

export const MainPage = () => {
	const [user, setUser] = useState<TUser>();

	useEffect(() => {
		const webApp = (window as any).WebApp;

		webApp?.ready();

		const user = webApp?.initDataUnsafe.user;

		setUser(user);
	}, []);

	return (
		<main>
			<h1>Моё мини-приложение MAX</h1>

			{user ? (
				<section style={{ marginTop: 16 }}>
					<h2>Пользователь</h2>

					<section style={{ marginTop: 16 }}>
						<h2>Пользователь</h2>

						<div className={styles.paramList} style={{ marginTop: 8 }}>
							{/* id */}
							<div className={`${styles.revealContainer} ${styles.paramItem}`}>
								<div className={styles.revealContent}>
									<p>
										<strong>id:</strong> {user.id}
									</p>
								</div>
								<div className={styles.revealOverlay} aria-hidden />
							</div>

							{/* name */}
							<div className={`${styles.revealContainer} ${styles.paramItem}`}>
								<div className={styles.revealContent}>
									<p>
										<strong>name:</strong>{" "}
										{user.first_name || user.username || ""}
										{user.last_name ? " " + user.last_name : ""}
									</p>
								</div>
								<div className={styles.revealOverlay} aria-hidden />
							</div>

							{/* avatar/photo */}
							{(user.photo_url || (user as any).avatar) && (
								<div
									className={`${styles.revealContainer} ${styles.paramItem}`}
								>
									<div className={styles.revealContent}>
										<img
											src={user.photo_url || (user as any).avatar}
											alt="avatar"
											style={{ width: 64, height: 64, display: "block" }}
										/>
									</div>
									<div className={styles.revealOverlay} aria-hidden />
								</div>
							)}
						</div>
					</section>
				</section>
			) : (
				<div style={{ marginTop: 16 }}>
					<div className={styles.revealContainer}>
						<p className={styles.revealContent}>Пользователь не передан.</p>
						<div className={styles.revealOverlay} aria-hidden />
					</div>
				</div>
			)}
		</main>
	);
};
