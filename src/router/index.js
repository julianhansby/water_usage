import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import DashboardPage from '@/components/DashboardPage'
import AddNewPage from '@/components/AddNewPage'
import ProfilePage from '@/components/ProfilePage'
import UsageHistoryPage from '@/components/UsageHistoryPage'
import GoalsPage from '@/components/GoalsPage'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      component: LoginPage
    },  
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
    	path: '/dashboard',
    	name: 'DashboardPage',
    	component: DashboardPage
    },
    {
    	path: '/add-usage',
    	name: 'AddNewPage',
    	component: AddNewPage
    },
    {
      path: '/profile',
      name: 'ProfilePage',
      component: ProfilePage
    },
    {
      path: '/goals',
      name: 'GoalsPage',
      component: GoalsPage
    },
    {
      path: '/history',
      name: 'UsageHistoryPage',
      component: UsageHistoryPage
    }    
  ]
})
