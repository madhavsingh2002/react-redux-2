import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions.js';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );

  render() {
    const { loading, posts, error } = this.props;

    if (loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.error}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      );
    }

    return (
      <FlatList
        data={posts}
        renderItem={this.renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  error: state.posts.error,
});

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  item: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});
