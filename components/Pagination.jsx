import {
	Box,
	VStack,
	HStack,
	UnorderedList,
	ListItem,
	Button,
	Text,
	Center,
	Heading,
} from "@chakra-ui/react";

const Pagination = ({ page, setPage, totalPage }) => {
	const prevPage = () => {
		setPage(page - 1);
	};

	const nextPage = () => {
		setPage(prevPage => {
			return prevPage + 1;
		});
		setPage(prevPage => {
			return prevPage + 1;
		});
	};

	return (
		<HStack>
			<Button isDisabled={page <= 1} onClick={prevPage}>
				Previous
			</Button>
			<Text>
				Page {page} of {totalPage}
			</Text>
			<Button onClick={nextPage} isDisabled={page >= totalPage}>
				Next
			</Button>
		</HStack>
	);
};

export default Pagination;
