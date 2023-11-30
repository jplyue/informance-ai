import { makeAutoObservable } from 'mobx'

class ListStore {
  items = [
    {
      id: 1,
      title: "What's your function",
      answer:
        'Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram.',
      type: 'normal',
    },
    {
      id: 2,
      title: "What's your function",
      answer:
        'Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram.',
      type: 'normal',
    },
    {
      id: 3,
      title: "What's your function",
      answer:
        'Save time by using Informance AI to provide instantand reliable responses, so you can focus on growingyour community. Integrates to meet your users on both Discord and Telegram.',
      type: 'conflicted',
    },
  ]

  constructor() {
    makeAutoObservable(this)
  }

  addItem(item) {
    this.items.push({
      id: this.items.length + 1,
      ...item,
    })
  }

  removeItem(id) {
    this.items = this.items.filter((item) => item.id !== id)
  }
}

const listStore = new ListStore()
export default listStore
