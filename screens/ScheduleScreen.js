import React, { useState } from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview'
import { FACILITY } from '../config/facility'

export default function ScheduleScreen() {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<View style={styles.container}>
			{isLoading && <ActivityIndicator color='#3498db' size='large' style={styles.loader} />}
			<WebView
				source={{ uri: FACILITY.scheduleIframeUrl }}
				style={styles.webview}
				onLoadEnd={() => setIsLoading(false)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eef6fa',
	},
	webview: {
		flex: 1,
		marginHorizontal: 10,
		borderRadius: 10,
		overflow: 'hidden',
		backgroundColor: '#fff',
	},
	loader: {
		marginTop: 20,
	},
})
