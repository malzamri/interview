import axios from "axios";
import { useEffect, useState } from "react";
import { VStack } from "@chakra-ui/react";
import DisplayList from "../components/DisplayList";
import Pagination from "../components/Pagination";

export default function Home() {
	const [data, setData] = useState(null);
	const [totalPage, setTotalPage] = useState(null);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetching(page);
	}, [page]);

	const fetching = async page => {
		setData(null);
		setLoading(true);
		try {
			const temp = await axios.get(`https://icanhazdadjoke.com/search?term=&page=${page}`, {
				headers: { Accept: "application/json" },
			});
			// console.log(temp);
			setData(temp.data.results);
			setTotalPage(temp.data.total_pages);
			setLoading(false);
		} catch (error) {
			// console.log(error);
			setError(error);
			setLoading(false);
		}

	};

	return (
		<VStack w="100%" bg="gray.50" minH="100vh">
			<VStack bg="white" shadow="base" mx="3" my="4">
				<DisplayList error={error} data={data} loading={loading} />
				<Pagination page={page} setPage={setPage} totalPage={totalPage} />
			</VStack>
		</VStack>
	);
}
