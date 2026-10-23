<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03D&quot;,&quot;href&quot;:&quot;atc/R03D.md&quot;},{&quot;label&quot;:&quot;aminophylline&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/&quot;},{&quot;label&quot;:&quot;Kuze_1988 \u00b7 im&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aminophylline_Amponsah2017_reference&quot;,&quot;label&quot;:&quot;Amponsah_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Amponsah2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aminophylline_Jameson1990_reference&quot;,&quot;label&quot;:&quot;Jameson_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Jameson1990_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aminophylline_Frymoyer2020_reference&quot;,&quot;label&quot;:&quot;Frymoyer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Frymoyer2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aminophylline_Goetz1989_reference&quot;,&quot;label&quot;:&quot;Goetz_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Goetz1989_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aminophylline_Shi2013_reference&quot;,&quot;label&quot;:&quot;Shi_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aminophylline/Aminophylline_Shi2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aminophylline — `Aminophylline_Kuze1988_im`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> The aminophylline/theophylline record was rejected because the fast-disposition rate constant λ1 (10.273) and the bioavailability Fab (1.019) were reported with 'n=5' instead of a unit, so they could not be given SI values, and the 3-compartment structure contains an unreachable compartment.

<div class="pk-model-meta" hidden drug="aminophylline" model-id="Aminophylline_Kuze1988_im" status="rejected" stale="false" population="anesthetized beagle-mix dogs" measured-compound="theophylline" parameterization="mechanistic" topology="3C"></div>

## Citation
Kuze T, Miyazaki H, Taneike T. [Theophylline: pharmacokinetics, metabolism and urinary excretion in dogs]. Nihon yakurigaku zasshi. Folia pharmacologica Japonica 91(5):325–334 (1988).
  ·  DOI: [10.1254/fpj.91.325](https://doi.org/10.1254/fpj.91.325)

## Population and dosing

**Population:** anesthetized beagle-mix dogs · condition healthy · age group adult · n = 13.

**Dosing:** 574 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed aminophylline, measured theophylline.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 13 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| α | λ1 | 10.273 | n=5 |
| β | kel | 0.137 | 1/h |
| K₁₂ | k12 | 6.378 | 1/h |
| K₂₁ | k21 | 3.906 | 1/h |
| V₁ | V1 | 0.291 | L/kg |
| V₂ | V2 | 0.462 | L/kg |
| Vd | V | 0.793 | L/kg |
| CLtot | CL | 0.105 | L/h/kg |
| AUC | AUC | 94.008 | ug*h/mL |
| T₁/₂α | t1/2α | 0.088 | h |
| T₁/₂β | t1/2β | 5.941 | h |
| F | Fab | 1.019 | n=5 |
| Ka | kabs | 4.707 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.889). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The aminophylline/theophylline record was rejected because the fast-disposition rate constant λ1 (10.273) and the bioavailability Fab (1.019) were reported with 'n=5' instead of a unit, so they could not be given SI values, and the 3-compartment structure contains an unreachable compartment.**

For theophylline in anesthetized beagle-mix dogs, λ1 (fast disposition phase, 10.273) and Fab (absolute bioavailability, 1.019) were reported with 'n=5' in place of a unit, so these two parameters could not be converted to SI units. The structure check also failed: the 3-compartment topology contains an unreachable/orphan compartment with no path from the dose. The remaining parameters (kel 0.137 1/h, k12 6.378 1/h, k21 3.906 1/h, V1 0.291 L/kg, V2 0.462 L/kg, CL 0.105 L/h/kg, AUC 94.008 ug*h/mL, t1/2α 0.088 h, t1/2β 5.941 h, kabs 4.707 1/h) were reported with usable units. Extracted — theophylline: λ1 10.3 n=5, kel 0.137 1/h, k12 6.38 1/h, k21 3.91 1/h, V1 0.291 L/kg, V2 0.462 L/kg, V 0.793 L/kg, CL 0.105 L/h/kg, … (+5).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has aminophylline, the second reading unknown; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| α | `Q67` · λ1 | 10.273 | n=5 |  |  | n=5 | exact (1) | Kuze_1988_table_1:row1:col3 |
| β | `Q47` · kel | 0.137 | 1/h | 3.806e-05 | 1/s | 1/h | exact (1) | Kuze_1988_table_1:row3:col3 |
| K₁₂ | `Q301` · k12 | 6.378 | 1/h | 0.001772 | 1/s | 1/h | exact (1) | Kuze_1988_table_1:row4:col3 |
| K₂₁ | `Q302` · k21 | 3.906 | 1/h | 0.001085 | 1/s | 1/h | exact (1) | Kuze_1988_table_1:row5:col3 |
| V₁ | `Q63` · V1 | 0.291 | L/kg | 0.02037 | m3 | L | exact (1) | Kuze_1988_table_1:row7:col3 |
| V₂ | `Q64` · V2 | 0.462 | L/kg | 0.03234 | m3 | L | exact (1) | Kuze_1988_table_1:row8:col3 |
| Vd | `Q61` · V | 0.793 | L/kg | 0.05551 | m3 | L | exact (1) | Kuze_1988_table_1:row9:col3 |
| CLtot | `Q22` · CL | 0.105 | L/h/kg | 2.042e-06 | m3/s | L/h | exact (1) | Kuze_1988_table_1:row10:col3 |
| AUC | `Q88` · AUC | 94.008 | ug*h/mL |  |  | ug*h/mL | exact (1) | Kuze_1988_table_1:row11:col3 |
| T₁/₂α | `Q59` · t1/2α | 0.088 | h | 316.8 | s | h | exact (1) | Kuze_1988_table_1:row12:col3 |
| T₁/₂β | `Q60` · t1/2β | 5.941 | h | 2.139e+04 | s | h | exact (1) | Kuze_1988_table_1:row13:col3 |
| F | `Q40` · Fab | 1.019 | n=5 |  |  |  | exact (1) | Kuze_1988_table_1:row14:col3 |
| Ka | `Q49` · kabs | 4.707 | 1/h | 0.001307 | 1/s | 1/h | exact (1) | Kuze_1988_table_1:row15:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'A' — extend the ontology if this is a real PK parameter (source ['Kuze_1988_table_1:row0:col3'])
- unit_dimension_unknown: 'n=5' (λ1)
- dropped unlinked row (NIL): 'B' — extend the ontology if this is a real PK parameter (source ['Kuze_1988_table_1:row2:col3'])
- unit_dimension_unknown: 'n=5' (kel)
- unit_dimension_unknown: 'n=5' (k12)
- unit_dimension_unknown: 'n=5' (k21)
- dropped duplicate Q47 ('Kel', value '0.388') — already have one for this compound
- unit_dimension_unknown: 'n=5' (V1)
- unit_dimension_unknown: 'n=5' (V2)
- unit_dimension_unknown: 'n=5' (V)
- unit_dimension_unknown: 'n=5' (CL)
- unit_dimension_unknown: 'n=5' (AUC)
- unit_dimension_unknown: 'n=5' (t1/2α)
- unit_dimension_unknown: 'n=5' (t1/2β)
- unit_dimension_unknown: 'n=5' (kabs)
- implicit units: 'α' — the LLM proposed '1/h', whose dimension does not fit Q67; left unset
- implicit units: 'β' → 1/h (from the paper text: "'The elimination rate constant was 0.37±0.05 hr-1' (abstract); β is an elimination rate constant in 1/h.")
- implicit units: 'K₁₂' → 1/h (from the popPK convention: 'No unit stated for K12; first-order intercompartmental transfer rate constants are conventionally in 1/h, consistent wit')
- implicit units: 'K₂₁' → 1/h (from the popPK convention: 'No unit stated for K21; first-order transfer rate constants are conventionally in 1/h.')
- implicit units: 'V₁' → L/kg (from the paper text: "'the volume of distribution (Vd) was 0.73±0.04 l/kg' (abstract); volumes are expressed per kg body weight.")
- implicit units: 'V₂' → L/kg (from the paper text: "'the volume of distribution (Vd) was 0.73±0.04 l/kg' (abstract); compartment volumes are expressed per kg.")
- implicit units: 'Vd' → L/kg (from the paper text: "'the volume of distribution (Vd) was 0.73±0.04 l/kg' (abstract).")
- implicit units: 'CLtot' → L/h/kg (from the popPK convention: 'No unit stated; CLtot = dose/AUC = 8.2 mg/kg ÷ 94 µg·h/mL ≈ 0.09 L/h/kg, consistent with the value 0.105, so L/h/kg.')
- implicit units: 'AUC' → ug*h/mL (from the popPK convention: 'No unit stated; AUC of ~94 with dose 8.2 mg/kg giving CLtot ≈ 0.1 L/h/kg implies AUC in µg·h/mL.')
- implicit units: 'T₁/₂α' → h (from the paper text: "'The half-time (T1/2β) of theophylline was 5.63±0.83 hr'; half-lives are in hours.")
- implicit units: 'T₁/₂β' → h (from the paper text: "'The half-time (T1/2β) of theophylline was 5.63±0.83 hr' (abstract).")
- implicit units: 'Ka' → 1/h (from the popPK convention: 'No unit stated; absorption rate constant conventionally in 1/h, consistent with other rate constants in hr^-1.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=theophylline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'im (n=5)' subgroup of Kuze_1988 (paper reports 3 populations: im (n=5), iv (n=10), po (n=5))
- review gap-fill skipped: this record measures 'theophylline', not aminophylline — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.889 (16/18 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `screen.dose_compound` | aminophylline | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | theophylline | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 13 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 5.63 | 5.235 | 0.9298 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Kuze_1988_table_1:row10:col3'] |
| C5_dimension_Q301 | pass | 1 / [time] |  |  |  | ['Kuze_1988_table_1:row4:col3'] |
| C5_dimension_Q302 | pass | 1 / [time] |  |  |  | ['Kuze_1988_table_1:row5:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  |  |  | ['Kuze_1988_table_1:row3:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Kuze_1988_table_1:row15:col3'] |
| C5_dimension_Q59 | pass | [time] |  |  |  | ['Kuze_1988_table_1:row12:col3'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['Kuze_1988_table_1:row13:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Kuze_1988_table_1:row9:col3'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  |  |  | ['Kuze_1988_table_1:row7:col3'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  |  |  | ['Kuze_1988_table_1:row8:col3'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  |  |  | ['Kuze_1988_table_1:row11:col3'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | n=5 |  |  | ['Kuze_1988_table_1:row1:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.105 |  |  | ['Kuze_1988_table_1:row10:col3'] |
| C8_topology | fail |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.35 L/h |  |  | ['Kuze_1988_table_1:row10:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 55.5 L |  |  | ['Kuze_1988_table_1:row9:col3'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 20.4 L |  |  | ['Kuze_1988_table_1:row7:col3'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 32.3 L |  |  | ['Kuze_1988_table_1:row8:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baminophylline%5D%20Aminophylline_Kuze1988_im&body=Drug%3A%20aminophylline%0ARecord%3A%20Aminophylline_Kuze1988_im%0APaper%3A%20Kuze_1988%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aminophylline/Aminophylline_Kuze1988_im%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 23:44 UTC</sub>
