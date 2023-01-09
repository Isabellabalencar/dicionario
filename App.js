import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './database';
import Som from './som'


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'black'}
            centerComponent={{
              text: 'Dicionario Koo',
              style: { color: '#fff', fontSize: 20 },
            }}
          />

          <Image
            style={styles.image}
            source={
            require("./koo.jpg")
            }
          />

          <TextInput
            style={styles.TextInput}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => {
              this.setState({ chunks: db[this.state.text].chunks });
              this.setState({ phonicSounds: db[this.state.text].phones })
            }}>
            <Text style={styles.TextStyle}>IR</Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map((item, index) => {
              return (
                <Som
                  wordChunk={this.state.chunks[index]}
                  soundChunk={this.state.phonicSounds[index]}
                />
              );
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  TextInput: {
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
    height: 40,
    textAlign: "center",
    borderWidth: 4,
    outline: "non"
  },
  TouchableOpacity: {
    width: "60%",
    height: 50,
    justifyContent: "center",
    alignItems:"center",
    alignSelf: "center",
    borderRadius: 10,
    margin: 5,
    backgroundColor: "black"
  },
  TextStyle: {
    color: "white"
  },
  image: {
    width: 450,
    height: 200
  }
});