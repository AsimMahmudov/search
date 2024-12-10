"use client";

import React from "react";
import { useData } from "../data/data";
import { useSearchStore } from "@/stores/searchStore";

const Hero = () => {
	const { data } = useData();
	const { searchQuery } = useSearchStore();

	const filteredData = data.filter((el) =>
		el.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<div className="box">
			<div className="container">
				<div className="cards">
					{filteredData.length > 0 ? (
						filteredData.map((el, index) => (
							<div className="card" key={index}>
								<h1>{el.title}</h1>
							</div>
						))
					) : (
						<p className="no-product">Нет продукта</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default Hero;
