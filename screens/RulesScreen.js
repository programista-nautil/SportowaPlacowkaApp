import React from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function RulesScreen() {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.rulesBox}>
				<Text style={styles.paragraph}>1. Obiekt dostępny jest wyłącznie w godzinach jego funkcjonowania.</Text>
				<Text style={styles.paragraph}>
					2. Każdy użytkownik zobowiązany jest do przestrzegania zasad bezpieczeństwa.
				</Text>
				<Text style={styles.paragraph}>
					3. Zabronione jest bieganie oraz skakanie do wody w miejscach do tego nieprzeznaczonych.
				</Text>
				<Text style={styles.paragraph}>
					4. Osoby poniżej 13. roku życia mogą korzystać z obiektu wyłącznie pod opieką dorosłych.
				</Text>
				<Text style={styles.paragraph}>5. Personel ma prawo odmówić wstępu osobom nieprzestrzegającym regulaminu.</Text>
			</View>
		</ScrollView>
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
	rulesBox: {
		backgroundColor: '#ffffff',
		padding: 16,
		borderRadius: 12,
		gap: 12,
		shadowColor: '#000',
		shadowOpacity: 0.05,
		shadowRadius: 4,
		shadowOffset: { width: 0, height: 2 },
		elevation: 2,
	},
	paragraph: {
		fontSize: 16,
		lineHeight: 24,
		color: '#333',
	},
})
