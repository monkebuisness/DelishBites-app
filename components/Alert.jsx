import * as React from "react";
import { Dialog, Portal, Title } from "react-native-paper";
import { Text, Button } from "react-native-paper";
import { useState, useEffect } from "react";
Alert = ({
	dismissable,
	handleClose,
	title,
	text,
	button1label,
	button2label,
	button1onPress,
	button2onPress,
}) => {
	let [visible, setVisible] = useState(true);
	if (!handleClose) {
		handleClose = () => {
			setVisible(!visible);
		};
	}
	return (
		<Portal>
			<Dialog
				visible={visible}
				dismissable={dismissable}
				onDismiss={handleClose}>
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
