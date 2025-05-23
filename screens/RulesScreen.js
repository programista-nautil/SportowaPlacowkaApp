import React from 'react'
import { ScrollView, Text, StyleSheet, View } from 'react-native'

export default function RulesScreen() {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.header}>Regulamin korzystania z obiektu</Text>

			<View style={styles.block}>
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
		backgroundColor: '#f4f4f4',
		paddingHorizontal: 20,
		paddingTop: 20,
	},
	header: {
		fontSize: 22,
		fontWeight: 'bold',
		marginBottom: 20,
		textAlign: 'center',
	},
	block: {
		gap: 12,
	},
	paragraph: {
		fontSize: 16,
		lineHeight: 24,
		color: '#333',
	},
})
