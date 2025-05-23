import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FACILITY } from '../config/facility'

export default function HomeScreen() {
	const navigation = useNavigation()

	const tiles = [
		{ label: 'Grafik', screen: 'Schedule' },
		{ label: 'Cennik', screen: 'Pricing' },
		{ label: 'Kontakt', screen: 'Contact' },
		{ label: 'Regulamin', screen: 'Rules' },
	]

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Image source={FACILITY.logo} style={styles.logo} />
			<Text style={styles.title}>{FACILITY.name}</Text>
			<Text style={styles.address}>{FACILITY.address}</Text>

			<View style={styles.tilesContainer}>
				{tiles.map((tile, index) => (
					<TouchableOpacity key={index} style={styles.tile} onPress={() => navigation.navigate(tile.screen)}>
						<Text style={styles.tileText}>{tile.label}</Text>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 40,
		paddingHorizontal: 20,
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
	},
	logo: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
		marginBottom: 20,
		borderRadius: 50,
		overflow: 'hidden',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
	},
	address: {
		fontSize: 16,
		color: '#666',
		marginBottom: 30,
		textAlign: 'center',
	},
	tilesContainer: {
		width: '100%',
		gap: 16,
	},
	tile: {
		backgroundColor: '#3498db',
		paddingVertical: 20,
		borderRadius: 12,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 3,
	},
	tileText: {
		color: 'white',
		fontSize: 18,
		fontWeight: '600',
	},
})
