import { TouchableOpacity, View} from "react-native";
import { MorningIcon, EveningIcon, AfternoonIcon } from "@assets";

export default function ShiftSwitcher() {
    return (
        <View className="bg-white p-5 flex flex-row gap-6 border border-gray-200 rounded-[32px]">
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