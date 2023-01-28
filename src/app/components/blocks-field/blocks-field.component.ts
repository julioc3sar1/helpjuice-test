import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocks-field',
  templateUrl: './blocks-field.component.html',
  styleUrls: ['./blocks-field.component.scss']
})
export class BlocksFieldComponent implements OnInit {

  constructor() {}
  active:boolean = false
  blockValue:string = ''
  blocks:any = []
  blockTypes:any = [
    {
      type: 'h1',
      name: 'Heading 1',
      shortcut_text: '/ + 1',
      shortcut: '/1'
    },
    {
      type: 'h2',
      name: 'Heading 2',
      shortcut_text: '/ + 2',
      shortcut: '/2'
    },
    {
      type: 'p',
      name: 'Paragraph',
      shortcut: '# + space'
    },
  ]

  selectedBlock:any

  ngOnInit(): void {
  }

  getFilteringKeyword():string{
    let keyword = ''
    if(this.blockValue.length>1){
      return keyword = this.blockValue.slice(1)
    }
    return keyword
  }

  getFilteredBlockTypes(keyword:string){
    return this.blockTypes.filter((block:any)  => block.name.toLowerCase().includes(keyword.toLowerCase()))
  }

  typing(event:any){
    const text = event.target.value
    if (text.length > 0) {
      if(text.charAt(0)==='/'){
        this.active = true
        if(text.length>1){
          const blockType = this.blockTypes.find((block:any) => block.shortcut === text)
          if(blockType) this.selectBlock(blockType)        
        }
      }
      if (event.key === 'Enter') {
        if(!this.selectedBlock){
          this.selectBlock(this.blockTypes.find((block:any) => block.type === 'p'))
        }
        this.blocks = [...this.blocks,...[{type: this.selectedBlock.type, value: text}]]
        this.resetBlock()
      }
    }else{
      this.active = false
    }

    if (event.key === 'Escape') this.active = false

  }

  selectBlock(block:object){
    this.selectedBlock = block
    this.blockValue = this.blockValue.slice(2)
    this.active = false
  }

  resetBlock(){
    this.selectedBlock = undefined
    this.blockValue = ''
  }

}