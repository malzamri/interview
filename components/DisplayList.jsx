import { UnorderedList, ListItem, Center, Heading } from "@chakra-ui/layout";
const DisplayList = ({ error, data, loading }) => {
	if (!!error) {
		return (
			<Center minH="20vh">
				<Heading>Have Error</Heading>
			</Center>
		);
	}
	if (loading || !data) {
		return (
			<Center minH="20vh">
				<Heading>Loading...</Heading>
			</Center>
		);
	}
	return (
		<UnorderedList>
			{data.map(item => (
				<ListItem key={item.id}>{item.joke}</ListItem>
			))}
		</UnorderedList>
	);
};

export default DisplayList;
