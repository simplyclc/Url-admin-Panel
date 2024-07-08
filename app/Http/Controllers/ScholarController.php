<?php

namespace App\Http\Controllers;

use App\Http\Resources\ScholarCollection;
use App\Http\Resources\ScholarResource;
use App\Models\Application;
use App\Models\Scholar;
use App\Models\Scholarship;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

use function PHPUnit\Framework\isEmpty;

class ScholarController extends Controller {

    public function index() {

        $user = Auth::user(); 
 
        $a = DB::table('scholars')->where('user_id', $user->id)
            ->join('applications', 'scholars.application_id', 'applications.id')
            ->select('scholars.email', 'scholars.parent_name2', 'scholars.parent_email2', 'applications.*' )->get();
        //$scholar = ScholarResource::collection($a);
        $scholarships = Application::find($a[0]->id)->scholarships()->get();

        return Inertia::render('Scholars/Dashboard',[
            'scholar' => $a,
            'scholarships' => $scholarships,
        ]);
        
    }

    public function scholarsApplication() {
        $user = Auth::user();
        
        $preScholar = Scholar::where('user_id', $user->id)->get();
        $application = Application::where('id', $preScholar[0]['application_id'])->get();

        return Inertia::render('Applications/createApplication', [
            'application' => $application,
        ]);
    }

    public function storeScholarship(Request $request) {
        $user = Auth::user();

        // Get Scholars data buy user_id
        $scholar = Scholar::where('user_id', $user->id)->get();

        // create or update application froms scholars id
        $pplication = DB::table('applications')
              ->where('id', $scholar->application_id)
              ->updateOrInsert([
                    'submitted_on' => $request->submitted_on,
                    'name' => $request->name,
                    'email' => $request->email,
                    'phone' => $request->phone,
                    'parent_name' => $request->parent_name,
                    'application_essay' => $request->application_essay,
                    'community_service' => $request->community_service,
                    'school' => $request->school,
                    'graduation_year' => $request->graduation_year,
                    'gpa' => $request->gpa,
                    'sat_Scheduled' => $request->sat_Scheduled,
                    'sat_score' => $request->sat_score,
                    'act_scheduled' => $request->act_scheduled,
                    'ap_test_name' => $request->ap_test_name,
                    'ap_test_score' => $request->ap_test_score,
                    'ap_test_name2' => $request->ap_test_name2,
                    'ap_test_score2' => $request->ap_test_score2,
                    'college_major' => $request->college_major,
                    'college_interest' => $request->college_interest,
                    'college_major2' => $request->college_major2,
                    'college_interest2' => $request->college_interest2,
                    'family_income' => $request->family_income,
                    'siblings' => $request->siblings,
                    'siblings_attending_college' => $request->siblings_attending_college,
                    'fasfa_acknowledgement' => $request->fasfa_acknowledgement,
                    'college_choice' => $request->college_choice,
                    'college_status' => $request->college_status,
                    'college_choice2' => $request->college_choice2,
                    'college_status2' => $request->college_status2,
                    'reference' => $request->reference,
                    'reference_email' => $request->reference_email,
                    'reference_relationship' => $request->reference_relationship,
                    'reference2' => $request->reference2,
                    'reference_email2' => $request->reference_email2,
                    'reference_relationship2' => $request->reference_relationship2,
              ]);

        dd($pplication);
    }

    public function scholarshipList() {
        $user = Auth::user();
        $scholarship = Scholarship::get();
        // Get scholarships that have been applied to

        return Inertia::render('Scholars/Scholarshiplist', [
            'scholarship' => $scholarship,
        ]);
    }
}