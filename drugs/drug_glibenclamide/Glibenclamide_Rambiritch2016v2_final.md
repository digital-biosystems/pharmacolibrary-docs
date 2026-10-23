<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glibenclamide&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/&quot;},{&quot;label&quot;:&quot;Rambiritch_2016_2 \u00b7 final&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;pd_Rambiritch_2016_FBG_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 FBG&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_FBG_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rambiritch_2016_full_glucose_profile_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 full glucose profile&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_full_glucose_profile_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Rambiritch_2016_mean_glucose_concentration_2&quot;,&quot;label&quot;:&quot;Rambiritch_2016 \u00b7 mean glucose concentration&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/pd_Rambiritch_2016_mean_glucose_concentration_2.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# glibenclamide — `Glibenclamide_Rambiritch2016v2_final`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The volume of distribution unit is extracted as L/h instead of liters, making the value 51 L/h physiologically implausible for glibenclamide.

<div class="pk-model-meta" hidden drug="glibenclamide" model-id="Glibenclamide_Rambiritch2016v2_final" status="rejected" stale="false" population="South African adults with type 2 diabetes" measured-compound="glibenclamide" parameterization="mechanistic" topology="2C"></div>

## Citation
Rambiritch V, Naidoo P, Maharaj B, Pillai G. Population pharmacokinetic modeling of glibenclamide in poorly controlled South African type 2 diabetic subjects. Clinical pharmacology : advances and applications 8:83–92 (2016).
  ·  DOI: [10.2147/CPAA.S102676](https://doi.org/10.2147/CPAA.S102676)

## Population and dosing

**Population:** South African adults with type 2 diabetes · condition type 2 diabetes · age group adult · n = $24.

**Dosing:** 2.5, 5, 10, 20 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vd | V | 51 | L/h |
| volume of distribution ± SE of glibenclamide for the two-compartment model ... for the central and peripheral compartments, respectively | V2 | 11.7 | L |
| average clearance for glibenclamide ... for the one-compartment model | CL | 1.52 | L/h |
| intercompartmental clearance (Q/f) | Q | 3.84 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The volume of distribution unit is extracted as L/h instead of liters, making the value 51 L/h physiologically implausible for glibenclamide.**

The parameter V for glibenclamide is recorded with a value of 51 and a unit of L/h, which is a rate rather than a volume. This unit mismatch caused the model to be rejected due to an implausible magnitude in the clearance-to-volume ratio. The record was refused because the extraction error renders the pharmacokinetic profile nonsensical. Extracted — glibenclamide: V 51 L/h, V2 11.7 L, CL 1.52 L/h, Q 3.84 L/h.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vd | `Q61` · V | 51 | L/h | 1.417e-05 | m3 | L | exact (1) | Rambiritch_2016_2:other_prose |
| volume of distribution ± SE of glibenclamide for the two-compartment model ... for the central and peripheral compartments, respectively | `Q64` · V2 | 11.7 | L | 0.0117 | m3 | L | boundary_compartment (0.9) | Rambiritch_2016_2:other_prose |
| average clearance for glibenclamide ... for the one-compartment model | `Q22` · CL | 1.52 | L/h | 4.222e-07 | m3/s | L/h | boundary (0.8) | Rambiritch_2016_2:other_prose |
| intercompartmental clearance (Q/f) | `Q30` · Q | 3.84 | L/h | 1.067e-06 | m3/s | L/h | exact (1) | Rambiritch_2016_2:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Ka (1/h)' routed out of structural estimates ('Final two-compartment model BSV (%CV)')
- table section iiv: 'CL/f (L/h)' routed out of structural estimates ('Final two-compartment model BSV (%CV)')
- table section iiv: 'V2/f (L)' routed out of structural estimates ('Final two-compartment model BSV (%CV)')
- table section iiv: 'Q/f (L/h)' routed out of structural estimates ('Final two-compartment model BSV (%CV)')
- table section iiv: 'V3/f (L)' routed out of structural estimates ('Final two-compartment model BSV (%CV)')
- salvaged Q61 ('Vd'=51) from results prose — parameter table was unreadable
- salvaged Q64 ('volume of distribution ± SE of glibenclamide for the two-compartment model ... for the central and peripheral compartments, respectively'=11.7) from results prose — parameter table was unreadable
- salvaged Q22 ('average clearance for glibenclamide ... for the one-compartment model'=1.52) from results prose — parameter table was unreadable
- salvaged Q30 ('intercompartmental clearance (Q/f)'=3.84) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=glibenclamide
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- model equation 'Pj = TVP*exp(ηj)(1)where TVP is the typical value of the PK parameter Pv (eg, CL/f) in the population, Pj is the individual value for P in the jth individual, and ηj is a random variable with mean of zero and variance ωP2' not bound — neither LHS nor base term 'TVP' linked to an ontology parameter
- status held at "Needs review" — not promoted
- model-stage split: 'final two-compartment model bsv (%cv)' is the final model of Rambiritch_2016_2 (paper reports 3 stages: final two-compartment model bsv (%cv), final two-compartment model estimate, one-compartment model estimate); same population, different model-building step

**Extraction notes:**
- table Rambiritch_2016_2_table_p7_1: unparsed_numeric_cell
- table Rambiritch_2016_2_table_2: competing_summary_estimates
- table Rambiritch_2016_2_table_2: ambiguous_uncertainty_binding
- table Rambiritch_2016_2_table_2: ragged_grid
- companion parameter table 2 transcribed (175 record(s))
- transposed table Rambiritch_2016_2_table_4: logical view retains original source coordinates
- companion parameter table 4 transcribed (120 record(s), model stage 'final')
- LLM selected parameter table(s) 2, 3, 4
- captured model equation Pj = TVP*exp(ηj)(1)where TVP is the typical value of the PK parameter Pv (eg, CL/f) in the population, Pj is the individual value for P in the jth individual, and ηj is a random variable with mean of zero and variance ωP2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 1.52 | ['Rambiritch_2016_2:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.52 L/h | ['Rambiritch_2016_2:other_prose'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0142 L | ['Rambiritch_2016_2:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 11.7 L | ['Rambiritch_2016_2:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglibenclamide%5D%20Glibenclamide_Rambiritch2016v2_final&body=Drug%3A%20glibenclamide%0ARecord%3A%20Glibenclamide_Rambiritch2016v2_final%0APaper%3A%20Rambiritch_2016_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glibenclamide/Glibenclamide_Rambiritch2016v2_final%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 09:51 UTC</sub>
