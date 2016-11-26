public class ContactAndLeadSearch {
    public static List<List<SObject>> searchContactsAndLeads(String name){
        List<List<SObject>> searchlist =
        [FIND :name
         IN ALL FIELDS
         RETURNING Contact(FirstName,LastName),Lead(FirstName,LastName)
        ];
		return searchlist;
            
    }
}