import { View, ScrollView, StyleSheet } from "react-native";

import colors from "../config/colors";
import LinearBackground from "../components/LinearBackground";
import Text from "../components/Text";

function AgendaScreen({ route }) {
  const { user } = route.params;
  return (
    <LinearBackground colors={[colors.primary, colors.darkGreen]}>
      <View style={styles.container}>
        <View style={styles.screenIndicator}>
          <Text style={styles.topTitle}>Agenda - {user.name}</Text>
        </View>

        <ScrollView style={styles.view}>
          <View style={styles.textContain}>
            <Text style={styles.title}>Youth Empowerment</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic rem
              quasi nobis quas dolorum blanditiis vel! Magni quam recusandae
              iusto assumenda nam ut consequatur repellendus facere sint,
              reiciendis saepe temporibus similique dicta necessitatibus
              consequuntur id! Atque sed iste, tempore nesciunt similique
              quaerat nisi? Nam reiciendis consequatur ex qui, in iusto.
            </Text>
          </View>

          <View style={styles.textContain}>
            <Text style={styles.title}>Electricity</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic rem
              quasi nobis quas dolorum blanditiis vel! Magni quam recusandae
            </Text>
          </View>

          <View style={styles.textContain}>
            <Text style={styles.title}>Poverty Eradication</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic rem
              quasi nobis quas dolorum blanditiis vel
            </Text>
          </View>

          <View style={styles.textContain}>
            <Text style={styles.title}>Industrilization</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic rem
              quasi nobis quas dolorum blanditiis vel
            </Text>
          </View>

          <View style={styles.textContain}>
            <Text style={styles.title}>Education</Text>
            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic rem
              quasi nobis quas dolorum blanditiis vel
            </Text>
          </View>
        </ScrollView>
      </View>
    </LinearBackground>
  );
}

const styles = StyleSheet.create({
  achievements: {
    marginLeft: 10,
  },
  achievement: {
    marginVertical: 4,
  },
  achievementTitle: {
    color: colors.black,
    fontSize: 16,
    fontWeight: "700",
  },
  container: {
    backgroundColor: colors.white,
    height: 700,
    top: 60,
  },
  iconDiv: {
    alignItems: "center",
    borderRadius: 30,
    height: 60,
    justifyContent: "center",
    left: 40,
    position: "absolute",
    top: -25,
    width: 60,
  },
  screenIndicator: {
    alignSelf: "flex-start",
    alignItems: "center",
    backgroundColor: colors.darkGreen,
    borderRadius: 5,
    bottom: 10,
    elevation: 5,
    height: 22,
    justifyContent: "center",
    paddingHorizontal: 14,
    left: 26,
  },
  textContain: {
    marginVertical: 8,
  },
  text: {
    textAlign: "justify",
    color: "#676767",
    fontSize: 12,
    fontWeight: "bold",
  },
  topTitle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    color: colors.darkGreen,
    fontWeight: "700",
  },
  view: {
    paddingHorizontal: 40,
  },
});

export default AgendaScreen;
