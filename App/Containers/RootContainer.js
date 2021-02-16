import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { connect } from 'react-redux'
import messaging from '@react-native-firebase/messaging'
import PushNotification from 'react-native-push-notification'

import StartupActions from '../Redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import AppNavigation from '../Navigation/AppNavigation'

// styles
import { apply } from '../Themes/OsmiProvider'

const RootContainer = (props) => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      PushNotification.localNotification({
        message: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        bigPictureUrl: remoteMessage.notification.android.imageUrl,
        smallIcon: remoteMessage.notification.android.imageUrl,
      })
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    if (!ReduxPersist.active) {
      props.startup()
    }
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={apply('white')} />
      <AppNavigation />
    </>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer)