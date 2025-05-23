import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { FACILITY } from '../config/facility'
import { Ionicons } from '@expo/vector-icons'

export default function PricingScreen() {
	return (
		<View style={styles.container}>
			<View>
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

				<View style={styles.noteBox}>
					<Text style={styles.note}>
						* Bilet ulgowy przysługuje dzieciom, młodzieży uczącej się do 26. roku życia, osobom z niepełnosprawnością
						oraz seniorom powyżej 65. roku życia.
					</Text>
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eef6fa',
		padding: 20,
	},
	sectionHeader: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#2d80c1',
		paddingVertical: 12,
		paddingHorizontal: 16,
		borderRadius: 10,
		marginBottom: 20,
	},
	header: {
		fontSize: 20,
		fontWeight: '600',
		color: 'white',
		marginLeft: 10,
	},
	list: {
		gap: 16,
		paddingBottom: 20,
	},
	priceRow: {
		backgroundColor: '#ffffff',
		padding: 18,
		borderRadius: 12,
		flexDirection: 'row',
		justifyContent: 'space-between',
		shadowColor: '#000',
		shadowOpacity: 0.08,
		shadowRadius: 6,
		shadowOffset: { width: 0, height: 2 },
		elevation: 3,
	},
	label: {
		fontSize: 16,
		fontWeight: '500',
		color: '#333',
	},
	price: {
		fontSize: 16,
		color: '#2d80c1',
		fontWeight: 'bold',
	},
	noteBox: {
		backgroundColor: '#d9ecf7',
		padding: 12,
		borderRadius: 10,
		marginTop: 10,
	},
	note: {
		fontSize: 13,
		color: '#1e3e58',
		fontStyle: 'italic',
		textAlign: 'center',
	},
})
