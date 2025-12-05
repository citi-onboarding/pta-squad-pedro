import { View, Text } from "react-native";
import ShiftSwitcher from "../src/components/ShiftSwitcher";

const App: React.FC = () => (
  <View className="flex-1 justify-center items-center bg-gray-100 gap-20">
    <Text className="text-xl font-barlowBold text-[#58cbfb]">
      Made with &lt; / &gt; and 🩵 by CITi
    </Text>

    <ShiftSwitcher></ShiftSwitcher>
  </View>

);

export default App;
