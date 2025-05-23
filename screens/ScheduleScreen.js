import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { WebView } from 'react-native-webview'
import { FACILITY } from '../config/facility'

export default function ScheduleScreen() {
	return (
		<View style={styles.container}>
			<WebView
				source={{ uri: FACILITY.scheduleIframeUrl }}
				style={styles.webview}
				startInLoadingState={true}
				renderLoading={() => <ActivityIndicator color='#3498db' size='large' style={styles.loader} />}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	webview: {
		flex: 1,
	},
	loader: {
		marginTop: 20,
	},
})
