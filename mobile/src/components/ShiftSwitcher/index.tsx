import { TouchableOpacity, View, Image } from "react-native";
import { MorningIcon } from "@assets";

export default function ShiftSwitcher() {
    return (
        <View className="flex flex-row gap-4">
            <TouchableOpacity>
                <MorningIcon width={24} height={24} />
            </TouchableOpacity>

            <TouchableOpacity>
                <MorningIcon width={24} height={24} />
            </TouchableOpacity>

            <TouchableOpacity>
                <MorningIcon width={24} height={24} />
            </TouchableOpacity>
        </View>
    )
}