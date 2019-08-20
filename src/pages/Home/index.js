import React, { Component } from 'react';
import {
  TopNavigation, List, Avatar, Layout, Text, Button, TopNavigationAction 
} from 'react-native-ui-kitten';
import { StyleSheet, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';

import Video from 'react-native-video';
import styles from './styles';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            headerTitle: '',
            headerThumb: '',
            postsDuration: [],
            posts: [
                {
                    PostId: 1,
                    UserId: 1,
                    Name: 'Douglas Pontes',
                    Description: 'teste1 de legendas bla bla blabla bla blabla bla blabla bla blabla bla bla',
                    PostType: '1',
                    ThumbUrl: 'https://pbs.twimg.com/profile_images/976668477758038018/iAHJ1Vbk_400x400.jpg',
                    Url: 'https://pbs.twimg.com/profile_images/976668477758038018/iAHJ1Vbk_400x400.jpg',
                    QtyLikes: '45',
                    QtyComments: '10',
                    ActualUserLiked: true,
                    VideoPaused: true,
                    VideoMuted: true,
                    Duration: 0,
                },
                {
                    PostId: 2,
                    UserId: 2,
                    Name: 'Thales Henrique',
                    Description: 'teste2 de legendas bla bla blabla bla blabla bla blabla bla blabla bla bla',
                    PostType: '2',
                    ThumbUrl: 'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/47129530_1096543713859949_2600328138631477600_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&oh=11f33f44fa1958de1c54aa5a09f5a0b7&oe=5DEE5D96&ig_cache_key=MTk0MzkyNDQ0MjE1NzczNzgzOQ%3D%3D.2.c',
                    Url: 'https://videofeedapp.s3-sa-east-1.amazonaws.com/videoplayback.mp4',
                    QtyLikes: '987',
                    QtyComments: '15',
                    ActualUserLiked: true,
                    VideoPaused: true,
                    VideoMuted: true,
                    Duration: 0,
                },
                {
                    PostId: 3,
                    UserId: 3,
                    Name: 'Guilherme Pagotto',
                    Description: 'teste3 de legendas bla bla blabla bla blabla bla blabla bla blabla bla bla',
                    PostType: '1',
                    ThumbUrl: 'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/39304272_286046502176690_4616721081602932736_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&oh=a0c9411ceff74ec64807cacd83b68f4a&oe=5DE0C51C&ig_cache_key=MTg1NDY3MTkwNjU5NTE5Mzk3OQ%3D%3D.2.c',
                    Url: 'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/39304272_286046502176690_4616721081602932736_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&oh=a0c9411ceff74ec64807cacd83b68f4a&oe=5DE0C51C&ig_cache_key=MTg1NDY3MTkwNjU5NTE5Mzk3OQ%3D%3D.2.c',
                    QtyLikes: '1356',
                    QtyComments: '23',
                    ActualUserLiked: false,
                    VideoPaused: true,
                    VideoMuted: true,
                    Duration: 0,
                },
                {
                    PostId: 4,
                    UserId: 4,
                    Name: 'Nicole Alves',
                    Description: 'teste4 de legendas bla bla blabla bla blabla bla blabla bla blabla bla bla',
                    PostType: '2',
                    ThumbUrl: 'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/39304272_286046502176690_4616721081602932736_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&oh=a0c9411ceff74ec64807cacd83b68f4a&oe=5DE0C51C&ig_cache_key=MTg1NDY3MTkwNjU5NTE5Mzk3OQ%3D%3D.2.c',
                    Url: 'https://videofeedapp.s3-sa-east-1.amazonaws.com/videoplayback.mp4',
                    QtyLikes: '1356',
                    QtyComments: '12',
                    ActualUserLiked: false,
                    VideoPaused: true,
                    VideoMuted: true,
                    Duration: 0,
                },
                {
                    PostId: 5,
                    UserId: 5,
                    Name: 'Breno Balbi',
                    Description: 'teste5 de legendas bla bla blabla bla blabla bla blabla bla blabla bla bla',
                    PostType: '2',
                    ThumbUrl: 'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/39304272_286046502176690_4616721081602932736_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&oh=a0c9411ceff74ec64807cacd83b68f4a&oe=5DE0C51C&ig_cache_key=MTg1NDY3MTkwNjU5NTE5Mzk3OQ%3D%3D.2.c',
                    Url: 'https://videofeedapp.s3-sa-east-1.amazonaws.com/videoplayback.mp4',
                    QtyLikes: '1356',
                    QtyComments: '12',
                    ActualUserLiked: false,
                    VideoPaused: true,
                    VideoMuted: true,
                    Duration: 0,
                },
                {
                    PostId: 5,
                    UserId: 5,
                    Name: 'Guilherme Muniz',
                    Description: 'teste6 de legendas bla bla blabla bla blabla bla blabla bla blabla bla bla',
                    PostType: '1',
                    ThumbUrl: 'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/39304272_286046502176690_4616721081602932736_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&oh=a0c9411ceff74ec64807cacd83b68f4a&oe=5DE0C51C&ig_cache_key=MTg1NDY3MTkwNjU5NTE5Mzk3OQ%3D%3D.2.c',
                    Url: 'https://pbs.twimg.com/profile_images/976668477758038018/iAHJ1Vbk_400x400.jpg',
                    QtyLikes: '1356',
                    QtyComments: '12',
                    ActualUserLiked: false,
                    VideoPaused: true,
                    VideoMuted: true,
                    Duration: 0,
                },
                {
                    PostId: 5,
                    UserId: 5,
                    Name: 'Matheus Carmello',
                    Description: 'teste7 de legendas bla bla blabla bla blabla bla blabla bla blabla bla bla',
                    PostType: '1',
                    ThumbUrl: 'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/39304272_286046502176690_4616721081602932736_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&oh=a0c9411ceff74ec64807cacd83b68f4a&oe=5DE0C51C&ig_cache_key=MTg1NDY3MTkwNjU5NTE5Mzk3OQ%3D%3D.2.c',
                    Url: 'https://pbs.twimg.com/profile_images/976668477758038018/iAHJ1Vbk_400x400.jpg',
                    QtyLikes: '1356',
                    QtyComments: '12',
                    ActualUserLiked: false,
                    VideoPaused: true,
                    VideoMuted: true,
                    Duration: 0,
                },
                {
                    PostId: 5,
                    UserId: 5,
                    Name: 'Jonata Araujo',
                    Description: 'teste8 de legendas bla bla blabla bla blabla bla blabla bla blabla bla bla',
                    PostType: '1',
                    ThumbUrl: 'https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-15/e35/c0.135.1080.1080a/s320x320/39304272_286046502176690_4616721081602932736_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&oh=a0c9411ceff74ec64807cacd83b68f4a&oe=5DE0C51C&ig_cache_key=MTg1NDY3MTkwNjU5NTE5Mzk3OQ%3D%3D.2.c',
                    Url: 'https://pbs.twimg.com/profile_images/976668477758038018/iAHJ1Vbk_400x400.jpg',
                    QtyLikes: '1356',
                    QtyComments: '12',
                    ActualUserLiked: false,
                    VideoPaused: true,
                    VideoMuted: true,
                    Duration: 0,
                },
            ]
        }
    }
    
    lastTap = null;
    
    handleDoubleTap = (index) => {
        let posts = this.state.posts;

        if(posts[index].VideoMuted == false) {
            posts[index].VideoMuted = true;
        } else {
            posts[index].VideoMuted = false;
        }
        
        this.setState({ posts });

        const now = Date.now();
        const DOUBLE_PRESS_DELAY = 300;
        if (this.lastTap && (now - this.lastTap) < DOUBLE_PRESS_DELAY) {
            this.toggleLike(index);
        } else {
            this.lastTap = now;
        }
    }

    toggleLike = (index) => {
        let posts = this.state.posts;
        
        if(posts[index].ActualUserLiked == false) {
            posts[index].ActualUserLiked = true;
            posts[index].QtyLikes = parseInt(posts[index].QtyLikes) + 1;
        } 
        else {
            posts[index].ActualUserLiked = false;
            posts[index].QtyLikes = parseInt(posts[index].QtyLikes) - 1;
        }
        
        this.setState({ posts: posts });
    }

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        if (changed[0].item.PostType == "2") {
            if(!changed[0].isViewable) {
                
                let posts = this.state.posts;

                posts[changed[0].key].VideoPaused = true;

                this.setState({ posts });

            } else {

                let posts = this.state.posts;

                posts[changed[0].key].VideoPaused = false;

                this.setState({ posts });

            }
        }

        if (changed[0].isViewable) {
            this.setState({headerTitle: viewableItems[0].item.Name, headerThumb: viewableItems[0].item.ThumbUrl });
        }
        // if(viewableItems[0]) {
        //     this.setState({headerTitle: viewableItems[0].item.Name});
        // }
    }
    
    renderLeftControl = () => (
        <TopNavigationAction 
            icon={() => (<Avatar source={{ uri: this.state.headerThumb }} size="small" />)}
            onPress={() => {}}
        />
    )

    render() {
        return (
            <Layout style={styles.container}>
                <TopNavigation 
                    title={this.state.headerTitle}
                    titleStyle={{ fontWeight: 'bold' }}
                    leftControl={this.renderLeftControl}
                />
                <List
                    data={this.state.posts}
                    onViewableItemsChanged={this.onViewableItemsChanged}
                    viewabilityConfig={{
                      itemVisiblePercentThreshold: 80
                    }}
                    renderItem={({item, index}) => (
                        <Layout style={{ flex: 1 }}>
                            <Layout style={styles.header}>
                                <Avatar source={{ uri: item.ThumbUrl }} size="small" />
                                <Text category="label" style={styles.txtName}>{item.Name}</Text>
                            </Layout>
                            <Layout>
                                {
                                    item.PostType == "1" && (
                                        <TouchableWithoutFeedback onPress={() => this.handleDoubleTap(index)}>
                                            <Image source={{ uri: item.Url}} resizeMode={"cover"} style={styles.postContent} />
                                        </TouchableWithoutFeedback>
                                    )
                                }
                                {
                                    item.PostType == "2" && (
                                        <TouchableWithoutFeedback onPress={() => this.handleDoubleTap(index)}>
                                            <Video source={{uri: item.Url}}
                                                useTextureView={false}
                                                pictureInPicture={true}
                                                bufferConfig={{
                                                    minBufferMs: 15000,
                                                    maxBufferMs: 50000,
                                                    bufferForPlaybackMs: 2500,
                                                    bufferForPlaybackAfterRebufferMs: 5000
                                                }}
                                                ref={(ref) => {
                                                    this.player = ref;
                                                }}
                                                repeat={true}
                                                paused={item.VideoPaused}
                                                muted={item.VideoMuted}
                                                hideShutterView={true}
                                                //poster={""}
                                                hideShutterView={true}
                                                resizeMode={"cover"}
                                                style={styles.postContent}
                                                onLoad={() => {
                                                    console.log(Math.round(this.state.posts[index].Duration))
                                                    this.player.seek(Math.round(this.state.posts[index].Duration));
                                                }}
                                                onProgress={(time) => {
                                                    let posts = this.state.posts;
                                                    posts[index].Duration = time.currentTime;
                                                    
                                                    this.setState({ posts });
                                                }}
                                            />
                                        </TouchableWithoutFeedback>
                                    )
                                }

                            </Layout>
                            <Layout style={styles.containerReactions}>

                                    { 
                                        item.ActualUserLiked == true  && (
                                            <TouchableOpacity onPress={() => this.toggleLike(index)}>
                                                <AntDesign name="heart" size={26} color={"red"}/>
                                            </TouchableOpacity>
                                        )
                                    }

                                    {
                                        item.ActualUserLiked == false && (
                                            <TouchableOpacity onPress={() => this.toggleLike(index)}>
                                                <AntDesign name="hearto" size={26} />
                                            </TouchableOpacity>
                                        )
                                    }
                                    <TouchableOpacity onPress={() => {}}>
                                        <Image source={require('../../../assets/img/comment-icon.jpg')} style={{ width: 24, height: 24, marginLeft: 4 }} />
                                    </TouchableOpacity>
                                    
                            </Layout>
                            <Layout style={styles.containerPostInfo}>
                                <Text style={{ fontWeight: 'bold', fontSize: 13 }}>{item.QtyLikes} likes</Text>
                                <Text style={{ fontSize: 13 }}><Text style={{ fontWeight: 'bold', fontSize: 13 }}>{item.Name}</Text>{" "}{item.Description}</Text>
                                <Text style={{ color: '#ccc', fontSize: 13}}>Ver todos os {item.QtyComments} comentários</Text>
                            </Layout>
                        </Layout>
                    )}
                />
            </Layout>
        )   
    }
 
};