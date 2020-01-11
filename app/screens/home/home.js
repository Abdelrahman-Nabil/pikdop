import React, { Component } from 'react'
import Header from '../../components/header/header'
import Icon from '../../components/icon'
import colors from '../../configs/colors'
import { SafeAreaView, View, FlatList, LayoutAnimation, NativeModules } from 'react-native'
import FastImage from 'react-native-fast-image'
import style  from './style'
import SearchForm from '../../components/searchForm/searchForm'
import Button from '../../components/button/button'
import ListItem from '../../components/listItem/listItem'
import Modal from "react-native-modal"
import UserPanel from '../userPanel/userPanel'
import {connect} from 'react-redux'
import * as actions from '../../redux/actions'
import { translator } from '../../localization'

const { UIManager } = NativeModules
import isRTL from '../../localization'

let rtl = isRTL()
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true)

class Home extends Component {

  state = { selected: 0, data: [] }

  componentDidMount(){
    this.props.fetchData('trips', 1)
  }
  page = 1
  loading = false
  hasNextPage = true
  componentWillReceiveProps(nextProps){
    let data = nextProps.trips
    let trips = data.data
    if(trips){
      this.loading = false
      this.hasNextPage = this.page < data.pageCount

      //validate images urls
      trips.map(trip => {
        if(trip.productImage && !trip.productImage.match(/^(https:\/\/).+(.jpeg|.jpg|.png).*/)){
          delete trip.productImage
        }
        if(trip.user && trip.user.image && !trip.user.image.match(/^(https:\/\/).+(.jpeg|.jpg|.png).*/)){
          delete trip.user.image
        }
      })
      this.setState({
        data: this.state.data.concat(trips)
      })
    } else {
      this.loading = false
      this.hasNextPage = false
    }
  }
  renderRightButton = () => (
    <Icon
      name = 'notifications' size = {36} style = {{ color: colors.white }}
      onPress = {() => {}}
    />
  )
  renderLogo = () => (
    <FastImage
      style = {style.logo}
      source = {require('../../assets/images/pikdop2.png')}
      resizeMode={FastImage.resizeMode.contain}
    />
  )
  renderLeftButton = () => (
    <Icon
      name = 'menu' size = {36} style = {{ color: colors.white }}
      onPress = {this._hideUserPanel}
    />
  )

  _changeSelected = (index) => {
      this.setState({ selected: index })
  }


  _renderItem = ({ item, index }) => {
    return (
      <ListItem
        {...item}
      />
    )
  }
  _hideUserPanel = () => {
    this.setState({
      userPanelVisible: !this.state.userPanelVisible
    })
  }
  getSelectedStyle = (index) => {
    let state = this.state
    return state.selected == index
    ? {
      style: {...style.button, ...style.altButtonActive},
      labelStyle: style.altButtonLabelActive,
      innerContainer: style.altButtonInnerActive
     }
    : {
      style: {...style.button, ...style.altButtonInactive},
      labelStyle: style.altButtonLabelInactive,
      innerContainer: style.altButtonInnerInactive
     }
  }
  _handleOnScroll = (event) => {
    let y = event.nativeEvent.contentOffset.y
    LayoutAnimation.easeInEaseOut()
    if(y > 0){
      this.setState({
        shrink: true
      })
    } else {
      this.setState({
        shrink: false
      })
    }
    /*pagination*/
    if((y > (150 * this.page)) && !this.loading && this.hasNextPage){
      this.loading = true
      this.page = this.page + 1
      this.props.fetchData('trips', this.page)
    }
  }
  render(){
    let state = this.state
    return (
      <SafeAreaView style = {style.container}>
        <FastImage
          style = {style.imageBackground}
          source = {require('../../assets/images/3.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Header
          renderLeftButton = {this.renderLeftButton}
          renderLogo = {this.renderLogo}
          renderRightButton = {this.renderRightButton}
        />
        {!state.shrink && <SearchForm
          onSearch = {() => {}}
        />}
        <View style = {style.buttonsContainer}>
          <Button
            label = {translator.translate('shipments')}
            onPress = {() => this._changeSelected(1)}
            {...this.getSelectedStyle(1)}

          />
          <Button
            label = {translator.translate('travelPlans')}
            onPress = {() => this._changeSelected(0)}
            {...this.getSelectedStyle(0)}
          />

        </View>
        <FlatList
          showsVerticalScrollIndicator = {false}
          style = {style.itemList}
          onScroll = {this._handleOnScroll}
          data = {state.data}
          renderItem = {this._renderItem}
        />
        <Modal
          isVisible = {state.userPanelVisible}
          animationIn = {rtl ? 'slideInRight' : 'slideInLeft'}
          animationOut = {rtl ? 'slideOutRight' : 'slideOutLeft'}
          style = {style.userPanel}
          coverScreen
          onBackButtonPress = {this._hideUserPanel}
          onBackdropPress = {this._hideUserPanel}

        >
          <UserPanel />
        </Modal>
      </SafeAreaView>
    )
  }
}
mapStateToProps = (state) => {
  return {
    trips: state.trips,
    orders: state.orders
  }
}

export default connect(mapStateToProps, actions)(Home)
