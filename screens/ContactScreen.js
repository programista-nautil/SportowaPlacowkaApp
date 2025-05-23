import React from 'react'
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import { FACILITY } from '../config/facility'
import { Ionicons } from '@expo/vector-icons'

export default function ContactScreen() {
	const { phone, email, openingHours } = FACILITY.contact

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Kontakt</Text>

			<TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)} style={styles.row}>
				<Ionicons name='call' size={24} color='#3498db' style={styles.icon} />
				<Text style={styles.text}>{phone}</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => Linking.openURL(`mailto:${email}`)} style={styles.row}>
				<Ionicons name='mail' size={24} color='#3498db' style={styles.icon} />
				<Text style={styles.text}>{email}</Text>
			</TouchableOpacity>

			{openingHours && (
				<View style={styles.row}>
					<Ionicons name='time' size={24} color='#3498db' style={styles.icon} />
					<Text style={styles.text}>{openingHours}</Text>
				</View>
			)}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f4f4f4',
		padding: 20,
	},
	header: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 30,
		textAlign: 'center',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 20,
		backgroundColor: '#fff',
		padding: 16,
		borderRadius: 10,
		elevation: 2,
	},
	icon: {
		marginRight: 12,
	},
	text: {
		fontSize: 16,
		color: '#333',
	},
})
