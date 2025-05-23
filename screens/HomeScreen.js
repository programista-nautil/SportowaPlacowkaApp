import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { FACILITY } from '../config/facility'
import { Ionicons } from '@expo/vector-icons'

export default function HomeScreen() {
	const navigation = useNavigation()

	const tiles = [
		{ label: 'Grafik', screen: 'Schedule', icon: 'calendar' },
		{ label: 'Cennik', screen: 'Pricing', icon: 'cash' },
		{ label: 'Kontakt', screen: 'Contact', icon: 'call' },
		{ label: 'Regulamin', screen: 'Rules', icon: 'document-text' },
	]

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<LinearGradient colors={['#2d80c1', '#85c1e9']} style={styles.header}>
				<Image source={FACILITY.logo} style={styles.logo} />
				<Text style={styles.title}>{FACILITY.name}</Text>
				<Text style={styles.address}>{FACILITY.address}</Text>
			</LinearGradient>

			<View style={styles.alertBox}>
				<View style={styles.alertContent}>
					<Ionicons name='information-circle-outline' size={18} color='#2d80c1' style={styles.alertIcon} />
					<Text style={styles.alertText}>Basen nieczynny w święta</Text>
				</View>
			</View>

			<View style={styles.tilesGrid}>
				{tiles.map((tile, index) => (
					<TouchableOpacity
						key={index}
						style={styles.tile}
						activeOpacity={0.8}
						onPress={() => navigation.navigate(tile.screen)}>
						<Ionicons name={tile.icon} size={24} color='white' style={styles.icon} />
						<Text style={styles.tileText}>{tile.label}</Text>
					</TouchableOpacity>
				))}
			</View>

			{FACILITY.contact.openingHours && (
				<View style={styles.hoursBox}>
					<View style={styles.hoursHeaderRow}>
						<Ionicons name='time-outline' size={20} color='#2d80c1' style={styles.icon} />
						<Text style={styles.hoursHeader}>Godziny otwarcia</Text>
					</View>

					{FACILITY.contact.openingHours.map((item, index) => (
						<Text key={index} style={styles.hoursText}>
							{item.days}: {item.hours}
						</Text>
					))}
				</View>
			)}
		</ScrollView>
	)
}

const { width } = Dimensions.get('window')
const tileSize = (width - 60) / 2

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#f4f4f4',
		alignItems: 'center',
		paddingBottom: 40,
	},
	header: {
		paddingTop: 90,
		width: '100%',
		alignItems: 'center',
		paddingVertical: 40,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	logo: {
		width: 110,
		height: 110,
		borderRadius: 55,
		backgroundColor: 'white',
		marginBottom: 16,
	},
	title: {
		fontSize: 26,
		fontWeight: 'bold',
		color: 'white',
	},
	address: {
		fontSize: 17,
		color: '#e0f7ff',
		marginTop: 4,
	},
	alertBox: {
		marginTop: 16,
		backgroundColor: '#eaf4fc',
		padding: 10,
		borderRadius: 10,
		marginHorizontal: 20,
		borderLeftWidth: 4,
		borderLeftColor: '#2d80c1',
	},
	alertContent: {
		flexDirection: 'row',
		alignItems: 'center', // to ustawia wszystko w jednej linii pionowo
	},
	alertIcon: {
		marginRight: 8,
	},
	alertText: {
		color: '#2c3e50',
		fontSize: 14,
	},
	tilesGrid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		gap: 16,
		marginTop: 30,
		paddingHorizontal: 20,
		width: '100%',
	},
	tile: {
		width: tileSize,
		backgroundColor: '#2d80c1',
		paddingVertical: 20,
		borderRadius: 16,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 3,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 6,
		shadowOffset: { width: 0, height: 2 },
	},
	icon: {
		marginBottom: 8,
	},
	tileText: {
		color: 'white',
		fontSize: 16,
		fontWeight: '600',
	},
	footer: {
		marginTop: 40,
	},
	hoursBox: {
		marginTop: 30,
		marginHorizontal: 20,
		backgroundColor: '#ffffff',
		borderRadius: 12,
		padding: 16,
		shadowColor: '#000',
		shadowOpacity: 0.05,
		shadowRadius: 6,
		shadowOffset: { width: 0, height: 2 },
		elevation: 3,
	},
	hoursHeaderRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 10,
	},
	hoursHeader: {
		fontSize: 16,
		fontWeight: '600',
		color: '#2d80c1',
		marginLeft: 8,
	},
	hoursText: {
		fontSize: 15,
		color: '#333',
		lineHeight: 22,
	},
})
