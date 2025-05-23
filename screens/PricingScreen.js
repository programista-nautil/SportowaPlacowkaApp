import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { FACILITY } from '../config/facility'

export default function PricingScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Cennik</Text>

			<FlatList
				data={FACILITY.priceList}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<View style={styles.priceRow}>
						<Text style={styles.label}>{item.label}</Text>
						<Text style={styles.price}>{item.price}</Text>
					</View>
				)}
				contentContainerStyle={styles.list}
			/>

			<Text style={styles.note}>
				* Bilet ulgowy przysługuje dzieciom, młodzieży uczącej się do 26. roku życia, osobom z niepełnosprawnością oraz
				seniorom powyżej 65. roku życia.
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f4f4f4',
		padding: 20,
	},
	header: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	list: {
		gap: 16,
		paddingBottom: 20,
	},
	priceRow: {
		backgroundColor: '#ffffff',
		padding: 16,
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	label: {
		fontSize: 16,
		fontWeight: '500',
	},
	price: {
		fontSize: 16,
		color: '#3498db',
		fontWeight: 'bold',
	},
	note: {
		fontSize: 14,
		color: '#555',
		marginTop: 10,
		fontStyle: 'italic',
		textAlign: 'center',
	},
})
