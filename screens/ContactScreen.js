import React from 'react'
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native'
import { FACILITY } from '../config/facility'
import { Ionicons } from '@expo/vector-icons'

export default function ContactScreen() {
	const { phone, email, openingHours } = FACILITY.contact

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => Linking.openURL(`tel:${phone}`)} style={styles.row}>
				<Ionicons name='call' size={22} color='#2d80c1' style={styles.icon} />
				<Text style={styles.text}>{phone}</Text>
			</TouchableOpacity>

			<TouchableOpacity onPress={() => Linking.openURL(`mailto:${email}`)} style={styles.row}>
				<Ionicons name='mail' size={22} color='#2d80c1' style={styles.icon} />
				<Text style={styles.text}>{email}</Text>
			</TouchableOpacity>

			{openingHours && (
				<View style={styles.row}>
					<Ionicons name='time' size={22} color='#2d80c1' style={styles.icon} />
					<View style={styles.openingBlock}>
						{openingHours.map((item, index) => (
							<Text key={index} style={styles.text}>
								{item.days}: {item.hours}
							</Text>
						))}
					</View>
				</View>
			)}
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
		marginBottom: 24,
	},
	header: {
		fontSize: 20,
		fontWeight: '600',
		color: 'white',
		marginLeft: 10,
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 16,
		borderRadius: 12,
		marginBottom: 16,
		shadowColor: '#000',
		shadowOpacity: 0.05,
		shadowRadius: 4,
		shadowOffset: { width: 0, height: 2 },
		elevation: 2,
	},
	icon: {
		marginRight: 12,
	},
	text: {
		fontSize: 16,
		color: '#333',
	},
	openingBlock: {
		flex: 1,
		flexDirection: 'column',
		gap: 2,
	},
})
