import { NativeTabs } from "expo-router/unstable-native-tabs";
import { useColorScheme } from "react-native";

import { Colors } from "@/constants/theme";

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ color: colors.text }}
    >
      {/* INÍCIO */}
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Início</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>

      {/* TAREFAS */}
      <NativeTabs.Trigger name="tarefas">
        <NativeTabs.Trigger.Label>Tarefas</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon sf="checklist" md="checklist" />
      </NativeTabs.Trigger>

      {/* RECOMPENSAS */}
      <NativeTabs.Trigger name="recompensas">
        <NativeTabs.Trigger.Label>Recompensas</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon sf="gift.fill" md="redeem" />
      </NativeTabs.Trigger>

      {/* PERFIL */}
      <NativeTabs.Trigger name="perfil">
        <NativeTabs.Trigger.Label>Perfil</NativeTabs.Trigger.Label>

        <NativeTabs.Trigger.Icon sf="person.fill" md="person" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
