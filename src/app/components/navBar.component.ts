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
//append_imports_end

@Component({
  selector: 'bh-navBar',
  templateUrl: './navBar.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class navBarComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_5f8LgW3ntOELHS3I(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_5f8LgW3ntOELHS3I(bh) {
    try {
      bh = this.sd_Qf3fRlL0uSOSUZTK(bh);
      //appendnew_next_sd_5f8LgW3ntOELHS3I
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5f8LgW3ntOELHS3I');
    }
  }

  //appendnew_flow_navBarComponent_start

  sd_Qf3fRlL0uSOSUZTK(bh) {
    try {
      this.page.nav = undefined;
      bh = this.sd_Cy5NsdC0gaF5Gcmj(bh);
      //appendnew_next_sd_Qf3fRlL0uSOSUZTK
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qf3fRlL0uSOSUZTK');
    }
  }

  sd_Cy5NsdC0gaF5Gcmj(bh) {
    try {
      const page = this.page;
      page.nav = ['About Us', 'Services', 'Contact Us'];
      //appendnew_next_sd_Cy5NsdC0gaF5Gcmj
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Cy5NsdC0gaF5Gcmj');
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
  //appendnew_flow_navBarComponent_Catch
}
