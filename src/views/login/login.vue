<template>
    <div>
        <el-form ref="form" :model="userInfo" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="userInfo.UserName"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="userInfo.Pwd"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="loginFunc">登陆</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { UserInfo } from '../../models/user/userInfo'
import { Auth } from '../../api/auth'
import { __TOKEN_KEY__ } from '../../api/common'
import { AxiosResponse } from 'axios'
import router from '../../router'

@Component({})
export default class Login extends Vue {
  userInfo: UserInfo = new UserInfo()
  authObj: Auth = new Auth()

  loginFunc () {
    this.authObj.login(this.userInfo).then(
      (res: AxiosResponse) => {
        window.localStorage.setItem(__TOKEN_KEY__, res.data.access_token)
        router.push({
          path: '/'
        })
      },
      error => {
        console.log(error)
      }
    )
  }
}
</script>
<style>

</style>

