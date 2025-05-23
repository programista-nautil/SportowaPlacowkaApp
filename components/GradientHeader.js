import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function GradientHeader({ title }) {
	const navigation = useNavigation()
	const canGoBack = navigation.canGoBack()

	return (
		<LinearGradient colors={['#2d80c1', '#85c1e9']} style={styles.header}>
			<View style={styles.inner}>
				{canGoBack && (
					<TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
						<Ionicons name='arrow-back' size={24} color='#fff' />
					</TouchableOpacity>
				)}
				<Text style={styles.title}>{title}</Text>
			</View>
		</LinearGradient>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 90,
		justifyContent: 'flex-end',
		paddingBottom: 12,
		paddingHorizontal: 16,
	},
	inner: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	backButton: {
		marginRight: 10,
	},
	title: {
		fontSize: 20,
		color: '#fff',
		fontWeight: 'bold',
	},
})
