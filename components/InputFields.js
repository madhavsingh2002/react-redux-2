import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { updateInput1, updateInput2 } from '../actions/postActions.js';
class InputFields extends Component {
  handleInput1Change = (text) => {
    this.props.updateInput1(text);
  };

  handleInput2Change = (text) => {
    this.props.updateInput2(text);
  };

  render() {
    const { input1, input2 } = this.props;

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter first input"
          value={input1}
          onChangeText={this.handleInput1Change}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter second input"
          value={input2}
          onChangeText={this.handleInput2Change}
        />
        <View style={styles.box}>
          <Text style={styles.boxText}>Input 1: {input1}</Text>
          <Text style={styles.boxText}>Input 2: {input2}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  input1: state.inputs.input1,
  input2: state.inputs.input2,
});

const mapDispatchToProps = {
  updateInput1,
  updateInput2,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputFields);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  box: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  boxText: {
    fontSize: 16,
  },
});
