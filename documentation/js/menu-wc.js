'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">demo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutPageModule.html" data-type="entity-link" >AboutPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutPageModule-59b5adbb0b85a3767d60ab4370a8c71ed02f9c3bd4b05c68703c86f576de18b064d5851b045704c3e1e61ee2c03d439186dafca441ff414a17db5ce537b55a8d"' : 'data-target="#xs-components-links-module-AboutPageModule-59b5adbb0b85a3767d60ab4370a8c71ed02f9c3bd4b05c68703c86f576de18b064d5851b045704c3e1e61ee2c03d439186dafca441ff414a17db5ce537b55a8d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutPageModule-59b5adbb0b85a3767d60ab4370a8c71ed02f9c3bd4b05c68703c86f576de18b064d5851b045704c3e1e61ee2c03d439186dafca441ff414a17db5ce537b55a8d"' :
                                            'id="xs-components-links-module-AboutPageModule-59b5adbb0b85a3767d60ab4370a8c71ed02f9c3bd4b05c68703c86f576de18b064d5851b045704c3e1e61ee2c03d439186dafca441ff414a17db5ce537b55a8d"' }>
                                            <li class="link">
                                                <a href="components/AboutPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AboutUsTextboxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsTextboxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FaqComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaqComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HowItHelpsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HowItHelpsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/InfoWithImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InfoWithImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LightNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LightNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuoteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondaryFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondaryFooterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutPageRoutingModule.html" data-type="entity-link" >AboutPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2c8e7f3fbf0e84ed1e7307d5d8c7926426dcfbe72497d08e9f99392cba2b9fd622be0ced73d5b71d85314dd40b0a9ff32b6619e77e620c89695d43cb8a42ce3e"' : 'data-target="#xs-components-links-module-AppModule-2c8e7f3fbf0e84ed1e7307d5d8c7926426dcfbe72497d08e9f99392cba2b9fd622be0ced73d5b71d85314dd40b0a9ff32b6619e77e620c89695d43cb8a42ce3e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2c8e7f3fbf0e84ed1e7307d5d8c7926426dcfbe72497d08e9f99392cba2b9fd622be0ced73d5b71d85314dd40b0a9ff32b6619e77e620c89695d43cb8a42ce3e"' :
                                            'id="xs-components-links-module-AppModule-2c8e7f3fbf0e84ed1e7307d5d8c7926426dcfbe72497d08e9f99392cba2b9fd622be0ced73d5b71d85314dd40b0a9ff32b6619e77e620c89695d43cb8a42ce3e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ConsumptionAndProductionPageModule.html" data-type="entity-link" >ConsumptionAndProductionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ConsumptionAndProductionPageModule-0d9becb16cb58ad017138ac05768bad5de497c66faab2b21bf6740782f8f6b1cb3aa53b944d1194aefa751a5404cd6cd26232052e832655b9e46690272663c7f"' : 'data-target="#xs-components-links-module-ConsumptionAndProductionPageModule-0d9becb16cb58ad017138ac05768bad5de497c66faab2b21bf6740782f8f6b1cb3aa53b944d1194aefa751a5404cd6cd26232052e832655b9e46690272663c7f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ConsumptionAndProductionPageModule-0d9becb16cb58ad017138ac05768bad5de497c66faab2b21bf6740782f8f6b1cb3aa53b944d1194aefa751a5404cd6cd26232052e832655b9e46690272663c7f"' :
                                            'id="xs-components-links-module-ConsumptionAndProductionPageModule-0d9becb16cb58ad017138ac05768bad5de497c66faab2b21bf6740782f8f6b1cb3aa53b944d1194aefa751a5404cd6cd26232052e832655b9e46690272663c7f"' }>
                                            <li class="link">
                                                <a href="components/BulletPointsOnTwoSectionsDefaultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BulletPointsOnTwoSectionsDefaultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConsumptionAndProductionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ConsumptionAndProductionPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FactBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FactBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroComponent-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NextProjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NextProjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuoteComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondaryDefaultTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondaryDefaultTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondaryFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondaryFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubheroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubheroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextSliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextSliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ConsumptionAndProductionPageRoutingModule.html" data-type="entity-link" >ConsumptionAndProductionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-93319a3c40ac37f1b4cb7d7c4a6221383a8b20a03b2f0476f824f7a49af375d00ee984b004fc181ce31668458d0e342fcf9b00679c8eae371505f4e520c22914"' : 'data-target="#xs-components-links-module-HomePageModule-93319a3c40ac37f1b4cb7d7c4a6221383a8b20a03b2f0476f824f7a49af375d00ee984b004fc181ce31668458d0e342fcf9b00679c8eae371505f4e520c22914"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-93319a3c40ac37f1b4cb7d7c4a6221383a8b20a03b2f0476f824f7a49af375d00ee984b004fc181ce31668458d0e342fcf9b00679c8eae371505f4e520c22914"' :
                                            'id="xs-components-links-module-HomePageModule-93319a3c40ac37f1b4cb7d7c4a6221383a8b20a03b2f0476f824f7a49af375d00ee984b004fc181ce31668458d0e342fcf9b00679c8eae371505f4e520c22914"' }>
                                            <li class="link">
                                                <a href="components/FollowUsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FollowUsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FourGoalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FourGoalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HowHelpBusinessComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HowHelpBusinessComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LightNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LightNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubHeroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubHeroComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PovertyPageModule.html" data-type="entity-link" >PovertyPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PovertyPageModule-3fb286532401e38ba90031eff98916ce3483da4257c2a6ca6e6aca2759e967f6a99c7802105e1fd6502f0dffbe5537349942f1b71647510cf6c425ef75cb2eb8"' : 'data-target="#xs-components-links-module-PovertyPageModule-3fb286532401e38ba90031eff98916ce3483da4257c2a6ca6e6aca2759e967f6a99c7802105e1fd6502f0dffbe5537349942f1b71647510cf6c425ef75cb2eb8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PovertyPageModule-3fb286532401e38ba90031eff98916ce3483da4257c2a6ca6e6aca2759e967f6a99c7802105e1fd6502f0dffbe5537349942f1b71647510cf6c425ef75cb2eb8"' :
                                            'id="xs-components-links-module-PovertyPageModule-3fb286532401e38ba90031eff98916ce3483da4257c2a6ca6e6aca2759e967f6a99c7802105e1fd6502f0dffbe5537349942f1b71647510cf6c425ef75cb2eb8"' }>
                                            <li class="link">
                                                <a href="components/DefaultListWithTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultListWithTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FactBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FactBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroComponent-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NextProjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NextProjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PovertyPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PovertyPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuoteComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondaryDefaultTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondaryDefaultTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondaryFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondaryFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubheroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubheroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextSliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextSliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PovertyPageRoutingModule.html" data-type="entity-link" >PovertyPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ReducedInequalitiesPageModule.html" data-type="entity-link" >ReducedInequalitiesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReducedInequalitiesPageModule-0479170b780162a07b78f1790753023c3501080643cc3b4d9be262a816f9e1e872a9553ad5f1723a1c12743bb835fea2571b33212de61f3d729e49167151b86f"' : 'data-target="#xs-components-links-module-ReducedInequalitiesPageModule-0479170b780162a07b78f1790753023c3501080643cc3b4d9be262a816f9e1e872a9553ad5f1723a1c12743bb835fea2571b33212de61f3d729e49167151b86f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReducedInequalitiesPageModule-0479170b780162a07b78f1790753023c3501080643cc3b4d9be262a816f9e1e872a9553ad5f1723a1c12743bb835fea2571b33212de61f3d729e49167151b86f"' :
                                            'id="xs-components-links-module-ReducedInequalitiesPageModule-0479170b780162a07b78f1790753023c3501080643cc3b4d9be262a816f9e1e872a9553ad5f1723a1c12743bb835fea2571b33212de61f3d729e49167151b86f"' }>
                                            <li class="link">
                                                <a href="components/DefaultTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FactBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FactBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroComponent-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NextProjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NextProjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuoteComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReducedInequalitiesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReducedInequalitiesPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondaryDefaultTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondaryDefaultTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondaryFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondaryFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SmallBulletPointSectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SmallBulletPointSectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubheroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubheroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextSliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextSliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReducedInequalitiesPageRoutingModule.html" data-type="entity-link" >ReducedInequalitiesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WorkAndEconomicGrowthPageModule.html" data-type="entity-link" >WorkAndEconomicGrowthPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WorkAndEconomicGrowthPageModule-2abc824fc40214ddd7d7000e3a99089e129b577072928675221f8a377819aca6a7b9981ebd0b035e856ca1ef292a8d1bed9da59ff843a734703fe662fb378651"' : 'data-target="#xs-components-links-module-WorkAndEconomicGrowthPageModule-2abc824fc40214ddd7d7000e3a99089e129b577072928675221f8a377819aca6a7b9981ebd0b035e856ca1ef292a8d1bed9da59ff843a734703fe662fb378651"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorkAndEconomicGrowthPageModule-2abc824fc40214ddd7d7000e3a99089e129b577072928675221f8a377819aca6a7b9981ebd0b035e856ca1ef292a8d1bed9da59ff843a734703fe662fb378651"' :
                                            'id="xs-components-links-module-WorkAndEconomicGrowthPageModule-2abc824fc40214ddd7d7000e3a99089e129b577072928675221f8a377819aca6a7b9981ebd0b035e856ca1ef292a8d1bed9da59ff843a734703fe662fb378651"' }>
                                            <li class="link">
                                                <a href="components/BulletPointsOnTwoSectionsDefaultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BulletPointsOnTwoSectionsDefaultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DefaultTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DefaultTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FactBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FactBoxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroComponent-2.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NextProjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NextProjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuoteComponent-1.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QuoteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondaryDefaultTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondaryDefaultTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecondaryFooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecondaryFooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubheroComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubheroComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextSliderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextSliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WorkAndEconomicGrowthPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WorkAndEconomicGrowthPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorkAndEconomicGrowthPageRoutingModule.html" data-type="entity-link" >WorkAndEconomicGrowthPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/HeroComponent-1.html" data-type="entity-link" >HeroComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link" >AppPage</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});