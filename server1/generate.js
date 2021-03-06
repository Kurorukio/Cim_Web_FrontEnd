var faker = require('faker');

var database = { Portfolio: []};

for (var i = 1; i<= 300; i++) {
  database.Portfolio.push({
    KUNDENID :faker.datatype.number() , 
    PORTFOLIONO :faker.datatype.number() , 
    BEZEICHNUNG :faker.name.findName() , 
    MANAGEMENTTYP_CD :faker.name.findName() , 
    MANAGER1_CD :faker.name.findName() , 
    MANAGER2_CD :faker.name.findName() , 
    MANAGER3_CD :faker.name.findName() , 
    MANAGER4_CD :faker.name.findName() , 
    MANAGER5_CD :faker.name.findName() , 
    VERMITTLER_CD :faker.name.findName() , 
    INFOVOLLMACHT :faker.name.findName() , 
    KONTAKT :faker.name.findName() , 
    ERTRAEGNISAUF_CD :faker.name.findName() , 
    WAEHRUNGS_CD :faker.name.findName() , 
    BELEGSATZ_CD :faker.name.findName() , 
    LOESCH_CD :faker.name.findName() , 
    LOESCHDATUM : faker.date.between(),
    CRTDATUM : faker.date.between(),
    CRTUSER :faker.name.findName() , 
    MUTDATUM : faker.date.between(),
    MUTUSER :faker.name.findName() , 
    MISDOMIZIL_CD :faker.name.findName() , 
    ANLAGESTRATEGIE_CD :faker.name.findName() , 
    USWBASKET_CD :faker.name.findName() , 
    VERSANDHAEUFIG_CD :faker.name.findName() , 
    RUBRIK :faker.name.findName() , 
    VERWALTUNGSMODUS_CD :faker.name.findName() , 
    KUNDELETZTERBESUCH : faker.date.between(),
    ANTRAGSORT :faker.name.findName() , 
    ANTRAGSDATUM : faker.date.between(),
    ANDEREPOSTADRESSE_CD :faker.name.findName() , 
    BANKLAGERND_CD :faker.name.findName() , 
    SPEZIALINSTRUKTION :faker.name.findName() , 
    GELDVONKONTOINHABER_CD :faker.name.findName() , 
    MANUALOPEN_CD :faker.name.findName() , 
    KONTONUMMER1 :faker.name.findName() , 
    KONTONUMMER2 :faker.name.findName() , 
    KONTONUMMER3 :faker.name.findName() , 
    FILIAL_CD :faker.name.findName() , 
    RUBRIK1 :faker.name.findName() , 
    RUBRIK2 :faker.name.findName() , 
    RUBRIK3 :faker.name.findName() , 
    ONLINE_CD :faker.datatype.number() , 
    PORTFOLIOTYP_CD :faker.name.findName() , 
    CDPARTC :faker.name.findName() , 
    PO_EU_TAX_PROZENT :faker.datatype.number() , 
    APSYS_STATUS_OPEC :faker.name.findName() , 
    APSYS_ERRI :faker.datatype.number() , 
    APSYS_SHNAS :faker.name.findName() , 
    APSYS_TYPMDCS :faker.name.findName() , 
    APSYS_INTILGS :faker.name.findName() , 
    APSYS_SHLIBPTFS :faker.name.findName() , 
    APSYS_CDSTATDUSC :faker.name.findName() , 
    APSYS_DTDEBPARTL : faker.date.between(),
    APSYS_DTFINPARTL : faker.date.between(),
    APSYS_IDSTRUCS :faker.name.findName() , 
    APSYS_CDPERMI :faker.datatype.number() , 
    APSYS_CDCTGPTFINTS :faker.name.findName() , 
    APSYS_CDCTGPTFSTES :faker.name.findName() , 
    APSYS_CDCTGPTFSTMS :faker.name.findName() , 
    APSYS_CDCTGPTFMAFS :faker.name.findName() , 
    APSYS_CDCTGPTFRISKS :faker.name.findName() , 
    APSYS_CDCTGPTFCOUS :faker.name.findName() , 
    APSYS_CDCTGPTFTRCS :faker.name.findName() , 
    APSYS_CDCTGPTFSTEBRUTNETS :faker.name.findName() , 
    APSYS_FLAGIRSREPPARTC :faker.name.findName() , 
    APSYS_CDCTGPTFTAXINTS :faker.name.findName() , 
    APSYS_IDPOCS :faker.name.findName() , 
    APSYS_INFO :faker.name.findName() , 
    NETTOVERMOEGEN_CHF :faker.name.findName() , 
    APSYS_INTISHS :faker.name.findName() , 
    APSYS_IDPERSL :faker.datatype.number() , 
    APSYS_CDMOTIFPARTS :faker.name.findName() , 
    IN_APSYS_TEMP_ENTSP_USERID :faker.name.findName() , 
    IN_APSYS_TEMP_ENTSP_DATUM : faker.date.between(),
    IN_APSYS_TEMP_ENTSPERREN_CD :faker.name.findName() , 
    KUNDENKATEGORIE_CD :faker.datatype.number() , 
    GEMEINSCHAFTSKONTO_CD :faker.name.findName() , 
    DRITTE_SAEULE_CD :faker.name.findName() , 
    APSYS_TYPPTFS :faker.name.findName() , 
    AUTO_EU_TAX_PERCENTAGE :faker.name.findName() , 
    AKTID :faker.datatype.number() , 
    VALIDID :faker.datatype.number() , 
    VALID_CD :faker.name.findName() , 
    VALIDUSER :faker.name.findName() , 
    APSYS_CDCTGPTFSBXPS :faker.name.findName() , 
    APSYS_CDCTGPTFSDOCS :faker.name.findName() , 
    APSYS_IDENTS :faker.name.findName() , 
    APSYS_CDSOUMBOLC :faker.name.findName() , 
    APSYS_CDFACBOLC :faker.name.findName() , 
    APSYS_FLAGTYPTRFPOLC :faker.name.findName() , 
    APSYS_IDTRFPOLS :faker.name.findName() , 
    APSYS_CDPCTPARTICTITUEUTAXC :faker.name.findName() , 
    APSYS_CDMOTIFCLOS :faker.name.findName() , 
    ENC_SALT :faker.name.findName() , 
    BEZEICHNUNG_ENC :faker.name.findName() , 
    KTOE_AML_PROFIL_CD :faker.name.findName() , 
    APSYS_DEVEVALS :faker.name.findName() , 
    APSYS_CDRNVSTMC :faker.name.findName() , 
    APSYS_CDRGLPRLGC :faker.name.findName() , 
    APSYS_CDCTGPTFCOMAGTCPTS :faker.name.findName() , 
    APSYS_CDCTGPTFROUTORDS :faker.name.findName() , 
    APSYS_CDCTGPTFGRECPTS :faker.name.findName() , 
    APSYS_CDCTGPTFTRSFTITS :faker.name.findName() , 
    APSYS_FLAGEXPSYSEXTTAXI :faker.name.findName() , 
    WB_IST_NICHT_ZWINGEND_CD :faker.name.findName() , 
    APSYS_CDBQERESTC :faker.name.findName() , 
    APSYS_CDCTGPTFTYPPLACS :faker.name.findName() , 
    APSYS_CDEANGRMTCLI1S :faker.name.findName() , 
    APSYS_CDEANGRMTCLI2S :faker.name.findName() , 
    APSYS_CDFATCATYPC :faker.name.findName() , 
    APSYS_IDFATCACLAS :faker.name.findName() , 
    APSYS_CDFATCASTATCALCCRMC :faker.name.findName() , 
    APSYS_CDFATCASTATC :faker.name.findName() , 
    APSYS_COMMENTFATCASTATS :faker.name.findName() , 
    APSYS_CDFATCAMOTIFPARTS :faker.name.findName() , 
    APSYS_CDFATCASTATCALCGLOBC :faker.name.findName() , 
    APSYS_CDFATCASTATCALCLOCC :faker.name.findName() , 
    APSYS_CDVALIDSTATC :faker.name.findName() , 
    APSYS_USERVALIDFATCASTATS :faker.name.findName() ,
    APSYS_DTVALIDFATCASTATL : faker.date.between(),
    APSYS_HRVALIDFATCASTATL : faker.date.between(),
    APSYS_CDCTRNETTC553C :faker.name.findName() , 
    APSYS_FLAGFORCEPOSOSTMANAGI :faker.name.findName() , 
    APSYS_POSOSTMANAGC :faker.name.findName() , 
    APSYS_CRITEREUSFATCASTATL :faker.datatype.number() , 
    APSYS_FLAGSIMSI :faker.name.findName() , 
    NR_OF_BO_IN_WHT_STATEMENT :faker.datatype.number() , 
    PARTNER_WITH_UNL_LIABILITY_CD :faker.name.findName() , 
    COMPANY_MANAGED_BY_BO_CD :faker.name.findName() , 
    IS_TRUSTEE_PHYSICAL_CD :faker.name.findName() , 
    NO_TRADING_US_SECURITIES_CD :faker.name.findName() , 
    PORTFOLIO_SEGR_ACCOUNT_CD :faker.name.findName() , 
    US_WHT_START_DATE : faker.date.between(),
    APSYS_CDCTGPTFIVSTAUTOS :faker.name.findName() , 
    AUTOMATISCHE_VERTEILUNG_CD :faker.name.findName() , 
    APSYS_CDTYPREPORTQIC :faker.name.findName() , 
    APSYS_FLAGIRSNONACTIFI :faker.name.findName() , 
    OPENING_DOCUMENTS_PROPOSED_CD :faker.name.findName() , 
    APSYS_CDCTGPTFALGCPTS :faker.name.findName() , 
    APSYS_IDSTRUCFORJURS :faker.name.findName() , 
    APSYS_IDENTFORJURS :faker.name.findName() , 
    FATCA_BASKET_CD :faker.datatype.number() , 
    APSYS_CDMETHCLOC :faker.name.findName() , 
    APSYS_DTEVALCLOL : faker.date.between(),
    AEOI_EXEMPTION_CD :faker.name.findName() , 
    AEOI_SUB_EXEMPTION_CD :faker.name.findName() , 
    UNDOCUMENTED_ACCOUNT_CD :faker.name.findName() , 
    DORMANT_ACCOUNT_CD :faker.name.findName() , 
    AEOI_CONSISTENCY_STATUS_CD :faker.name.findName() , 
    AEOI_FINAL_STATUS_CD :faker.name.findName() , 
    AEOI_REVIEW_DATE : faker.date.between(),
    APSYS_CDMIFIDEXEMPTC :faker.name.findName() , 
    APSYS_DTDEBMIFIDL : faker.date.between(),
    OPENED_IN_APSYS_DATE : faker.date.between(),
    APSYS_FLAGDELDATAPERSI :faker.name.findName() , 
    APSYS_DTWAITDELDATAPERSL : faker.date.between(),
    APSYS_CDPTFSELDGSC :faker.name.findName() , 
    APSYS_CDMOTIFPARTDGSS :faker.name.findName() , 
    EAM_CD :faker.name.findName() , 
    RETENTION_ON_HOLD :faker.name.findName() , 
    LOGICAL_ERASURE :faker.name.findName() , 
    RETENTION_ON_HOLD_DATE : faker.date.between(),
    RETENTION_ON_HOLD_REASON :faker.name.findName() , 
    LOGICAL_ERASURE_DATE : faker.date.between(),
    LOGICAL_ERASURE_REASON :faker.name.findName() , 
  }) }

  console.log(JSON.stringify(database));