(function (helpSystems) {

    var HelperService = ['$rootScope', '$http', function ($rootScope, $http) {

        var Helper = {};


        Helper.getInboxesAccess = function (params, id) {
            $rootScope.pending = true;
            return $http.get(API.rjswd + 'inboxes/access/'+id);
        };

        Helper.getInboxes = function (params, id) {
            // $rootScope.pending = true;
            // if(id == 6){
            //     var data =  {"dateCollected":1485361163108,"totalRecords":53,"currentRecord":0,"sentRecords":25,"truncatedResults":false,"responses":[{"systemId":"6","fsuseracc":"MY Inbox"},{"systemId":"6","fsuseracc":"Group00"},{"systemId":"6","fsuseracc":"A"},{"systemId":"6","fsuseracc":"My Routing Inbox 100"},{"systemId":"6","fsuseracc":"INBOXTEST00"},{"systemId":"6","fsuseracc":"INBOXTEST10"},{"systemId":"6","fsuseracc":"INBOXTEST20"},{"systemId":"6","fsuseracc":"INBOXTEST30"},{"systemId":"6","fsuseracc":"INBOXTEST40"},{"systemId":"6","fsuseracc":"INBOXTEST50"},{"systemId":"6","fsuseracc":"INBOXTEST60"},{"systemId":"6","fsuseracc":"INBOXTEST70"},{"systemId":"6","fsuseracc":"INBOXTEST80"},{"systemId":"6","fsuseracc":"INBOXTEST90"},{"systemId":"6","fsuseracc":"INBOXTEST05"},{"systemId":"6","fsuseracc":"INBOXTEST15"},{"systemId":"6","fsuseracc":"INBOXTEST25"},{"systemId":"6","fsuseracc":"INBOXTEST35"},{"systemId":"6","fsuseracc":"INBOXTEST45"},{"systemId":"6","fsuseracc":"INBOXTEST55"},{"systemId":"6","fsuseracc":"INBOXTEST65"},{"systemId":"6","fsuseracc":"INBOXTEST75"},{"systemId":"6","fsuseracc":"INBOXTEST85"},{"systemId":"6","fsuseracc":"INBOXTEST95"},{"systemId":"6","fsuseracc":"TEST"}]};
            // }else{
            //     var data =  {"dateCollected":1485428963491,"totalRecords":3,"currentRecord":0,"sentRecords":3,"truncatedResults":false,"responses":[{"systemId":"7","fsuseracc":"MY Inbox"},{"systemId":"7","fsuseracc":"TEST2"},{"systemId":"7","fsuseracc":"URMAP"}]};
            // }
            // return data;
            return $http.get(API.rjswd + 'inboxes/'+id, {params: params});
        };

        Helper.saveUser = function (params) {
            $rootScope.pending = true;
            return $http.post(API.robotweb + 'user_profile/', params);
        };

        Helper.saveConnection = function (params) {
            $rootScope.pending = true;
            return $http.post(API.robotweb + 'defined_iseries/', params);
        };


        
        Helper.getUserSettings = function (params, id) {
            $rootScope.pending = true;

            // return $http.get(API.rjswd + 'inboxes/'+id, params);
            
            return {};

        };

        Helper.getProfileList = function (params, id) {
            $rootScope.pending = true;
            // return $http.get(API.robotweb + 'user_profiles/');

            // 4 columns
            //return {"userProfiles":{"structure":{"actions":true,"totalRecords":6,"currentRecord":1,"sentRecords":6,"dateCollected":1487828589339,"columns":{"id":"ID","name":"Name","username":"userName","hasPassword":"hasPassword"}},"data":[{"id":16,"actions":["Details","Delete","Fire"],"name":"bnm","username":"bnm","removed":false,"hasPassword":true,"connections":[],"iseries":[],"action_disabled":true,"action_editable":true},{"id":15,"actions":["Details","Delete"],"name":"dfg","username":"dfg","removed":false,"hasPassword":true,"connections":[],"iseries":[],"action_disabled":false,"action_editable":true},{"id":3,"actions":["Details","Delete"],"name":"MIKEE","username":"MIKEE","removed":false,"hasPassword":true,"connections":[],"iseries":[],"action_disabled":false,"action_editable":true},{"id":17,"actions":["Details","Delete"],"name":"sx","username":"sarixach","removed":false,"hasPassword":true,"connections":[],"iseries":[],"action_disabled":false,"action_editable":true},{"id":4,"actions":["Details","Delete"],"name":"TEST","username":"TEST","removed":false,"hasPassword":true,"connections":[],"iseries":[],"action_disabled":false,"action_editable":true},{"id":2,"actions":["Details","Delete"],"name":"User00","username":"User00","removed":false,"hasPassword":true,"connections":[],"iseries":[],"action_disabled":false,"action_editable":true}]}};

            // 6 columns
            return {"userProfiles":{"structure":{"actions":true,"totalRecords":6,"currentRecord":1,"sentRecords":6,"dateCollected":1487828589339,"columns":{"id":"ID","name":"Name","age":"Age","username":"userName","email":"Email","city":"City","uuid":"UUID","price":"Price","color":"Color","hasPassword":"hasPassword","address":"Address"}},"data":[{"id":16,"actions":[{"id":1,"name":"Details"},{"id":2,"name":"Delete"}],"name":"bnm","username":"bnm","age":24,"price":"1000000000000$","address":"192.168.0.1","email":"sarixach@gmail.com","color":"White","city":"Yerevan","removed":false,"hasPassword":true,"uuid":"f2a9c5f5-5e13-4aed-a994-6512154f41ed-6512154f41ed-6512154f41ed","connections":[],"iseries":[],"action_disabled":false,"action_editable":true},{"id":15,"actions":[{"id":1,"name":"Details"},{"id":2,"name":"Delete"}],"name":"dfg","username":"dfg","removed":false,"price":"200000000000$","age":25,"address":"192.168.0.2","color":"Blue","city":"Vanadzor","uuid":"f2a9c5f5-5e13-4aed-a994-6512154f41ed","hasPassword":true,"email":"aaaaffffffffffffffffffffffffffffffffffffffffffffffffffaaaaaa@qqqqqqq.com","connections":[],"iseries":[],"action_disabled":true,"action_editable":true},{"id":3,"actions":[{"id":1,"name":"Details"},{"id":2,"name":"Delete"}],"name":"MIKEE","username":"MIKEE","removed":false,"age":26,"price":"3000000000000$","color":"Yellow","address":"192.168.0.3","hasPassword":true,"uuid":"f2a9c5f5-5e13-4aed-a994-6512154f41ed-6512154f41ed","connections":[],"city":"Gyumri","email":"bbbbgggggggggggggggggggggggggggggggggggbbbbbb@qqqqqqqqqq.com","iseries":[],"action_disabled":false,"action_editable":false},{"id":17,"actions":[{"id":1,"name":"Details"},{"id":2,"name":"Delete"}],"name":"sx","username":"sarixach","color":"Brown","removed":false,"hasPassword":true,"price":"5000000000000$","age":50,"address":"192.168.0.5","city":"Armavir","uuid":"f2a9c5f5-5e13-4aed-a994-6512154f41ed","email":"aaaaaaaaaaaa@zzpppppppppppppppppppppzzzzzzzz.com","connections":[],"iseries":[],"action_disabled":false,"action_editable":true},{"id":4,"actions":[{"id":1,"name":"Details"},{"id":2,"name":"Delete"}],"name":"TEST","username":"TEST","removed":false,"color":"Black","price":"6000000000000$","city":"Sevan","uuid":"f2a9c5f5-5e13-4aed-a994-6512154f41ed-6512154f41ed-6512154f41ed","email":"ppppppp@qqqqooooooooooooooooooqqqqqqqqqq.com","age":99,"address":"192.168.0.100","hasPassword":true,"connections":[],"iseries":[],"action_disabled":false,"action_editable":true},{"id":2,"actions":[{"id":1,"name":"Details"},{"id":2,"name":"Delete"}],"name":"User00","username":"User00","city":"Goric","price":"8000000000000$","email":"cvccccccccchhhhhhhhhhhhhhhhhhhhcccc@ssssssssssssss.com","removed":false,"color":"Green","age":70,"uuid":"f2a9c5f5-5e13-4aed-a994-6512154f41ed","address":"192.168.0.101","hasPassword":true,"connections":[],"iseries":[],"action_disabled":true,"action_editable":true}]}};

        };

        Helper.getInboxDocuments = function (systemId, fsuseracc) {
            $rootScope.pending = true;
            return $http.get(API.rjswd + 'documents/'+systemId+'/'+fsuseracc);
        };

        Helper.getDocumentDetails = function (systemId, docId) {
            $rootScope.pending = true;
            var data = {
                // $inbox:A,
                $hasRouting:true
            };

            return $http.get(API.rjswd + 'documents/detail/detailsAndHeadings/'+systemId+'/'+docId, data);

            // return {"docDetails":{"access":true,"folder5":"","folder2":"","folder4":"","folder3":"","folder1":"FOLDER00","docwflow":"Y","docaltlink":"N","docfax":"N","docsplinfo":"Y","doctype2":"DOCTYPE00","chkdate":"2016-09-19 17:04:54.975000","cat3":"","keyword5":"Test Key V","keyword9":"Test Key IX","ftppath":"","docid":"AS400DOC-000000000000175","revdate":"0001-01-01 00:00:00.000000","revuser":"","ftpserver":"","darchsel":"","rfolder2":"","doctype":"pdf","chkouser":"","dcuserid":"","docfile":"/RJSIMAGEDOC/AS400DOC-000000000000175_000000000.pdf","rfolder4":"","dcusrdta":"","expdest":"","dcpages":"0","revision":"0","keyword7":"Test Key VII","dcform":"","dcpty":"","dcspnum":"","expaction":"","rfolder5":"","dcspool":"","dcjob":"","chkuser":"User00","cat1":"","docpath":"/RJSIMAGEDOC/AS400DOC-000000000000175_000000000.pdf","rfolder1":"","dreindex":"","keyword4":"Test Key IV","chkoutsts":"N","rfolder3":"","dccopies":"1","dcjobnbr":"","dcdate":"0001-01-01 00:00:00.000000","title":"Folder00 Document pjdc0009st-2016-08-08_23-08-07-4910451","keyword10":"Test Key X","dctime":"00:00:00","dcddate":"0001-01-01 00:00:00.000000","keyword6":"Test Key VI","ftpfile":"","chkodate":"0001-01-01 00:00:00.000000","keyword8":"Test Key VIII","dvolid":"","cat2":"","keyword2":"Test Key II","keyword1":"aaaa","expdate":"0001-01-01 00:00:00.000000","difssize":"48357","dcstatus":"","diskstatus":"","keyword3":"Test Key III","dcuser1":"","dcolib":"","dcuser2":"","dcusrdfn":"","dcdtime":"00:00:00","dcoutq":"/","dcprtctl":"","dcuser3":"","dcetime":"00:00:00","deldate":"0001-01-01 00:00:00.000000","delete":false,"insert":true,"checkout":true,"notes":false,"move":true,"email":true,"sadmin":"Y","sessuser":"User00"},"classifiers":{"title":null,"keyword1":null,"keyword2":null,"keyword3":null,"keyword4":null,"keyword5":null,"keyword6":null,"keyword7":null,"keyword8":null,"keyword9":null,"keyword10":null},"routes":[{"notes":"","title":"Document Route","sesid":"d0328426-ebdf-19e9-87eb-0004ac1a","docid":"AS400DOC-000000000000175","rflowid":"FLOW-000000000000002","flowseq1":1,"fflowuser":"A","flowseq2":0,"revc":"999999999"}],"headings":{"keyword6":{"value":"6","required":false,"type":"LOOKUP"},"keyword10":{"value":"10","required":false,"type":"LOOKUP"},"title":{"value":"","required":true,"type":"LOOKUP"},"keyword9":{"value":"9","required":false,"type":"LOOKUP"},"keyword3":{"value":"3","required":false,"type":"LOOKUP"},"keyword1":{"value":"1","required":false,"type":"LOOKUP"},"keyword4":{"value":"4","required":false,"type":"LOOKUP"},"keyword5":{"value":"5","required":false,"type":"LOOKUP"},"keyword7":{"value":"7","required":false,"type":"LOOKUP"},"keyword8":{"value":"8","required":false,"type":"LOOKUP"},"keyword2":{"value":"2","required":false,"type":"LOOKUP"}}};

        };

        Helper.getCredentials = function() {
            $rootScope.pending = true;
            // return $http.put(API.robotweb + 'login', params, { 'bbbb': 'aaaa'});
            return $http.get(API.robotweb + 'credentials');

            // return {
            //     credentials : [{
            //         connectionDefinition : {
            //             address:"10.60.133.159",
            //             alias:"indigo",
            //             connected:false,
            //             connectionId:6,
            //             hasPassword:true,
            //             id:6,
            //             installedProducts: [{
            //                 code:"RJSWDI",
            //                 message:null,
            //                 relmod:"R03M25"
            //             }],
            //             library: null,
            //             productType:4,
            //             relMod: null,
            //             removed: false,
            //             secure: false,
            //             type: 4,
            //             username: null,
            //         },
            //         connectionId: 6,
            //         definedISeries: [{
            //             address: "10.60.133.159",
            //             alias:"indigo",
            //             connected:false,
            //             connectionId:6,
            //             hasPassword:true,
            //             id:6,
            //             installedProducts: [{
            //                 code:"RJSWDI",
            //                 message:null,
            //                 relmod:"R03M25"
            //             }],
            //             library: null,
            //             productType:4,
            //             relMod:null,
            //             removed:false,
            //             secure:false,
            //             type:4,
            //             username:null
            //         }],
            //         id:6,
            //         properties:null,
            //         userProfiles: {
            //             connections:[],
            //             hasPassword:true,
            //             id:2,
            //             iseries:[],
            //             name:"User00",
            //             removed:false,
            //             username:"User00"
            //         }
            //
            //     }],
            //     currentRecord:0,
            //     dateCollected:1485353316567,
            //     sendRecords:1,
            //     totalRecords:1
            // };
        };



        return Helper
    }];
    helpSystems.factory('HelperService', HelperService);
})(helpSystems);