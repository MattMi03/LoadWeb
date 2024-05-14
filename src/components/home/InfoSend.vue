<template>
    <section id="func4" style="display: block">
        <h1 class="functitle">信息传送界面</h1>
        <div class="window1">
            <table class="info" border="1">
                <tr>
                    <td class="title">
                        <textarea type="input" maxlength="40" placeholder="title" cols="1"
                            v-model="titleValues"></textarea>
                    </td>
                    <td class="tosent">
                        <textarea type="input" placeholder="tosent" maxlength="10" cols="1"
                            v-model="tosentValues"></textarea>
                    </td>
                </tr>
                <tr>
                    <td class="text">
                        <textarea type="input" placeholder="input" maxlength="400" cols="10"
                            v-model="mainValue"></textarea>
                    </td>
                    <td class="checkboxes">
                        <p class="checkcust">Please select the object to be sent</p>
                        <p class="checkcust">
                            <input type="checkbox" v-model="selectCus" />
                            customer
                        </p>
                        <p class="checkannounce">
                            <input type="checkbox" v-model="selectAnn" />
                            announce
                        </p>
                    </td>
                </tr>
            </table>
            <span id="limit_text1" :color="titleValue.length >= titleLimit ? red : black">{{ titleValue.length }}/{{
                titleLimit }}</span>
            <span id="limit_text2" :color="mainValue.length >= mainLimit ? red : black">{{ mainValue.length }}/{{
                mainLimit
                }}</span>
            <button type="button" class="reset" @click="reset">reset</button>
            <button type="button" class="submit" @click="sentMassage">submit</button>
        </div>
    </section>
</template>

<script>
export default {
    emit: {},
    props: {},
    data() {
        return {
            titleLimit: 40,
            mainLimit: 400,
            titleValue: String,
            tosentValues: String,
            mainValue: String,
            selectCus: false,
            selectAnn: false,
        };
    },
    watch: {
        titleValue() { },
        mainValue() { },
    },
    methods: {
        reset() {
            let ifdelogin = window.confirm("是否确认重置？");
            if (ifdelogin) {
                this.titleValue = "";
                this.tosentValues = "";
                this.mainValue = "";
            }
        },
        sentMassage() {
            if (
                this.titleValue == "" ||
                this.tosentValues == "" ||
                this.mainValue == ""
            ) {
                alert("请完成内容填写");
                return;
            }
            if ((this, this.selectAnn == this.selectCus)) {
                alert("请选择对象或使对象唯一");
                return;
            }
            let ifsub = window.confirm("是否确认提交？");
            if (ifsub) {
                alert("内容已提交");
                this.reset();
            }
        },
    },
};
</script>

<style scoped>
.window1 {
    position: absolute;
    background-color: rgb(234, 234, 234);
    top: 3rem;
    height: 45rem;
    left: 5rem;
    right: 5rem;
    z-index: 0;
}

.window1 p {
    margin-left: 2rem;
    margin-top: 1rem;
}

#func4 .info {
    border: 1px, #000;
    position: relative;
    left: 2rem;
    top: 3rem;
    background-color: #cecdca;
    /*display: none !important;*/
    z-index: 1;
}

#func4 .info td.title {
    height: 42px;
    width: 60rem;
}

#func4 .info input,
#func4 .info textarea {
    background-color: rgb(235, 243, 234);
}

#func4 .info .title textarea {
    max-height: 35px;
    max-width: 60rem;
    min-width: 60rem;
    min-height: 35px;
    z-index: 2;
    font-size: 20px;
}

#limit_text1 {
    position: absolute;
    left: 60rem;
    top: 4rem;
    z-index: 3;
    font-size: 10px;
}

#limit_text2 {
    position: absolute;
    left: 60rem;
    top: 26rem;
    z-index: 3;
    font-size: 10px;
}

.info td.text textarea {
    max-height: 340px;
    min-height: 340px;
    max-width: 60rem;
    min-width: 60rem;
    z-index: 20;
    font-size: 20px;
}

.info td.tosent,
.info td.tosent textarea {
    max-height: 30px;
    max-width: 10rem;
    min-width: 10rem;
    min-height: 30px;
    font-size: 20px;
}

#func4 .reset {
    position: relative;
    height: 2rem;
    width: 5rem;
    left: 30rem;
    top: 3rem;
}

#func4 .submit {
    position: relative;
    height: 2rem;
    width: 5rem;
    left: 35rem;
    top: 3rem;
}

#func4 .checkboxes {
    height: 340px;
    width: 10rem;
}

#func4 .checkcust {
    position: relative;
    right: 30px;
}

#func4 .checkannounce {
    position: relative;
    right: 30px;
}
</style>