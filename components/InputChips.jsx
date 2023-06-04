import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Chip } from "react-native-paper";

const InputChip = ({ label }) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleChipClick = () => {
		setIsClicked(!isClicked);
	};

	return (
		<TouchableOpacity onPress={handleChipClick}>
			<Chip
				mode={isClicked ? "outlined" : "flat"}
				onPress={handleChipClick}
				style={{
					borderRadius: 50,
					backgroundColor: isClicked ? "#866051" : "#AF9389",
				}}
				textStyle={{
					color: "#FFFFFF",
				}}>
				{label}
			</Chip>
		</TouchableOpacity>
	);
};

export default InputChip;
