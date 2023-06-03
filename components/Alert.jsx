import * as React from "react";
import { Dialog, Portal, Title } from "react-native-paper";
import { Text, Button } from "react-native-paper";
import { useState, useEffect } from "react";
Alert = ({
	title,
	text,
	button1label,
	button2label,
	button1onPress,
	button2onPress,
}) => {
	let [visible, setVisible] = useState(true);
	return (
		<Portal>
			<Dialog
				visible={visible}
				dismissable={true}
				onDismiss={() => {
					setVisible(!visible);
				}}>
				<Dialog.Title>{title}</Dialog.Title>
				<Dialog.Content>
					<Text variant='bodyMedium'>{text}</Text>
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={button1onPress}>{button1label}</Button>
					<Button onPress={button2onPress}>{button2label}</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	);
};

export default Alert;
