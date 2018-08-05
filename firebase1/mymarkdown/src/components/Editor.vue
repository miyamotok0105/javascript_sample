<template>
    <div id="editor">
        <h1>editor view</h1>
        <span>{{ user.diplayName }}</span>
        <button @click="logout">log out</button>
        <div>
            <div class="memoListWrapper">
                <div class="memoList" v-for="(memo, index) in memos" @click="selectMemo(index)" :data-selected="index == selectedIndex">
                    <p class="memoTitle">{{ displayTitle(memo.markdown) }}
                    </p>
                </div>
                <button class="addMemoBtn" @click="addMemo">add memo</button>
                <button class="deleteMemoBtn" v-if="memos.length > 1" @click="deleteMemo">del memo</button>
                <button class="saveMemoBtn" @click="saveMemos">save memo</button>
                
            </div>
            <textarea class="markdown" v-model="memos[selectedIndex].markdown">
                <div class="preview" v-html="preview()"></div>
            </textarea>
        </div>
    </div>
</template>
<script>
import marked from "marked";
export default {
    name: "editor",
    props: ["user"],
    data() {
        return {
            memos: [
                {
                    markdown: ""
                }
            ],
            selectedIndex: 0
        };
    },
    created: function() {
        firebase
        .database()
        .ref('memos/'+this.user.uid)
        .once('value')
        .then(result => {
            if(result.val()){
                this.memos = result.val();
            }
        })
    },
    methods: {
        logout: function() {
            firebase.auth().signOut();
        },
        addMemo: function() {
            this.memos.push({
                markdown: "example!"
            });
        },
        deleteMemo: function() {
            this.memos.splice(this.selectedIndex, 1);
            if (this.selectedIndex > 0) {
                this.selectedIndex--;
            }
        },
        selectMemo: function(index) {
            this.selectedIndex = index;
        },
        preview: function() {
            return marked(this.markdown);
        },
        displayTitle: function(text) {
            return text.split(/\n/)[0].replace(/#\s/, '');
        },
        saveMemos: function() {
            firebase
            .database()
            .ref('memos/'+this.user.uid)
            .set(this.memos);
        }
    },
    mounted: function(){
        document.onkeydown = e => {
            if (e.key == 's' && e.metakey) {
                this.saveMemos();
                return false;
            }
        }
    },
    beforeDestroy: function() {
        document.onkeydown = null;
    }
};
</script>
<style lang="scss" scoped>
.memoListWrapper {
    width: 19%;
    float: left;
    border-top: 1px solid #000;
}
.memoList {
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    border-bottom: 1px solid #000;
    &:nth-child(even) {
        background-color: #ccc;
    }
    &[data-selected="true"] {
        background-color: #ccf;
    }
}
.memoTitle {
    height: 1.5em;
    margin: 0;
    white-space: nowarp;
    overflow: hidden;
}
.addMemoBtn {
    margin-top: 20px;
}
.editorWapper {
    display: flex;
}
.markdown {
    float: left;
    width: 40%;
    height: 500px;
}
.preview {
    float: left;
    width: 40%;
    text-align: left;
}
.deleteMemoBtn {
    margin: 10px;
}
</style>
