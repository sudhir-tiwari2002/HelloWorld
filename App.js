import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView aria-hidden>
      <Text style={{ textAlign: "left", fontSize:36  ,paddingTop:30 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus
        odio sed dui semper rutrum. Morbi rutrum sem nisi, at mattis felis
        suscipit id. Etiam sed pellentesque magna. Aenean ac nibh nisi. Aenean
        leo risus, imperdiet quis orci id, dapibus tincidunt odio. Fusce sed
        facilisis tellus. Quisque vel orci interdum, facilisis sapien ac,
        aliquam lorem. Vestibulum varius felis vel laoreet placerat. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Aliquam eget augue nisl. Integer ac scelerisque
        orci. 
        <Text style={{ textAlign: "left", fontSize:22  }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        maximus egestas est gravida sollicitudin. Sed commodo, lectus et aliquet
        volutpat, ligula justo convallis dui, vitae efficitur eros est at lorem.
        Etiam fringilla mi faucibus, ultricies magna ac, ullamcorper tortor.
        Pellentesque volutpat sem et justo auctor, sed convallis sapien porta.
        Aliquam vitae leo diam. Vivamus sapien dui, fringilla quis aliquet ut,
        dignissim non metus. Aenean mi felis, pulvinar vel turpis vel, luctus
        luctus velit. Aenean non molestie nisl. Integer vulputate porta
        fermentum.</Text>
       
      </Text>
      <Text style={{ textAlign: "left" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus
        odio sed dui semper rutrum. Morbi rutrum sem nisi, at mattis felis
        suscipit id. Etiam sed pellentesque magna. Aenean ac nibh nisi. Aenean
        leo risus, imperdiet quis orci id, dapibus tincidunt odio. Fusce sed
        facilisis tellus. Quisque vel orci interdum, facilisis sapien ac,
        aliquam lorem. Vestibulum varius felis vel laoreet placerat. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Aliquam eget augue nisl. Integer ac scelerisque
        orci. 
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        maximus egestas est gravida sollicitudin. Sed commodo, lectus et aliquet
        volutpat, ligula justo convallis dui, vitae efficitur eros est at lorem.
        Etiam fringilla mi faucibus, ultricies magna ac, ullamcorper tortor.
        Pellentesque volutpat sem et justo auctor, sed convallis sapien porta.
        Aliquam vitae leo diam. Vivamus sapien dui, fringilla quis aliquet ut,
        dignissim non metus. Aenean mi felis, pulvinar vel turpis vel, luctus
        luctus velit. Aenean non molestie nisl. Integer vulputate porta
        fermentum.
      </Text>
      <Text style={{ textAlign: "left" , paddingBottom:30 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus
        odio sed dui semper rutrum. Morbi rutrum sem nisi, at mattis felis
        suscipit id. Etiam sed pellentesque magna. Aenean ac nibh nisi. Aenean
        leo risus, imperdiet quis orci id, dapibus tincidunt odio. Fusce sed
        facilisis tellus. Quisque vel orci interdum, facilisis sapien ac,
        aliquam lorem. Vestibulum varius felis vel laoreet placerat. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Aliquam eget augue nisl. Integer ac scelerisque
        orci. 
        
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        maximus egestas est gravida sollicitudin. Sed commodo, lectus et aliquet
        volutpat, ligula justo convallis dui, vitae efficitur eros est at lorem.
        Etiam fringilla mi faucibus, ultricies magna ac, ullamcorper tortor.
        Pellentesque volutpat sem et justo auctor, sed convallis sapien porta.
        Aliquam vitae leo diam. Vivamus sapien dui, fringilla quis aliquet ut,
        dignissim non metus. Aenean mi felis, pulvinar vel turpis vel, luctus
        luctus velit. Aenean non molestie nisl. Integer vulputate porta
        fermentum.
      </Text>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 30,
    padding: 10,
  },
});
