/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import {
  FormBuilder,
  Validators,
  FormGroup,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-dynamic',
  templateUrl: './dynamic.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dynamicComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_lRTLtUaG1rCFZdvg(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_lRTLtUaG1rCFZdvg(bh) {
    try {
      bh = this.sd_EnmeHZJ3mahtbLmo(bh);
      //appendnew_next_sd_lRTLtUaG1rCFZdvg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lRTLtUaG1rCFZdvg');
    }
  }

  start(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      this.display(bh);
      //appendnew_next_start
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SdF4GS01eegkdTNI');
    }
  }

  //appendnew_flow_dynamicComponent_start

  sd_EnmeHZJ3mahtbLmo(bh) {
    try {
      this.page.userDetails = [];
      bh = this.sd_QsV4RtGoriuE3dyz(bh);
      //appendnew_next_sd_EnmeHZJ3mahtbLmo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EnmeHZJ3mahtbLmo');
    }
  }

  sd_QsV4RtGoriuE3dyz(bh) {
    try {
      this.page.fb = this.__page_injector__.get(FormBuilder);
      this.page.Validators = Validators;
      bh = this.sd_JHAhJCB9YvSzwdeO(bh);
      //appendnew_next_sd_QsV4RtGoriuE3dyz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_QsV4RtGoriuE3dyz');
    }
  }

  sd_JHAhJCB9YvSzwdeO(bh) {
    try {
      const page = this.page;
      page.userDetails = [
        { id: 'Firstname', label: 'Firstname', types: 'text' },
        { id: 'Lastname', label: 'Lastname', types: 'text' },
        { id: 'Number', label: 'Phone Number', types: 'number' },
        { id: 'Email', label: 'Email', types: 'email' },
        { id: 'Nationality', label: 'Nationality', types: 'text' },
      ];
      // page.form={

      // }
      page.myForm = new FormGroup({
        Firstname: new FormControl(''),
        Lastname: new FormControl(''),
        Number: new FormControl(''),
        Email: new FormControl(''),
        Nationality: new FormControl(''),
      });
      // page.name = new FormControl('niyas');
      //appendnew_next_sd_JHAhJCB9YvSzwdeO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_JHAhJCB9YvSzwdeO');
    }
  }

  display(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page.myForm.value);
      //appendnew_next_display
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_2vwmyldhrbs75JgU');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_dynamicComponent_Catch
}
