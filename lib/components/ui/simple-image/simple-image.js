import { Icons } from '../icons'

export default class SimpleImage {
    static get toolbox() {
      return {
        title: 'Image',
        icon: `${Icons.image}`
      };
    }

    constructor({data}){
      this.data = data;
    }
  
    render(){
      const wrapper = document.createElement('div');
      const input = document.createElement('input');
  
      wrapper.classList.add('simple-image');
      wrapper.appendChild(input);
  
      input.placeholder = 'Paste an image URL...';
      input.value = this.data && this.data.url ? this.data.url : '';
  
      return wrapper;
    }
  
    save(blockContent){
      return {
        url: blockContent.value
      }
    }
  }