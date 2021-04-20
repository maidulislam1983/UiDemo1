import mock from './mock'

/* eslint-disable import/extensions */

// JWT
import './jwt'

// Apps
import './data/apps/user'
import './data/apps/eCommerce'

mock.onAny().passThrough() // forwards the matched request over network
