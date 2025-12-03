import { TouchableOpacity, View, Image } from "react-native";
import { MorningIcon, EveningIcon, AfternoonIcon } from "@assets";

export default function ShiftSwitcher() {
    return (
        <View className="p-3 flex flex-row gap-4 border rounded-[32px]">
            <TouchableOpacity>
                <MorningIcon width={18} height={18} />
            </TouchableOpacity>

            <TouchableOpacity>
                <AfternoonIcon width={18} height={18} />
            </TouchableOpacity>

            <TouchableOpacity>
                <EveningIcon width={18} height={18} />
            </TouchableOpacity>
        </View>
    )
}