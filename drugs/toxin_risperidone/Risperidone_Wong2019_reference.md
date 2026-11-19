<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Risperidone&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/&quot;},{&quot;label&quot;:&quot;Wong_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kneller2020v2_reference&quot;,&quot;label&quot;:&quot;Kneller_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks&quot;,&quot;label&quot;:&quot;Mahdy_2023_gestation_of_pregnancy_40_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Risperidone — `Risperidone_Wong2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> Non-drug clozapine metabolite included; paliperidone covariates lack units; Vmax, Km, KD units fail dimensional checks; oral volume and CL outside physiological ranges.

<div class="pk-model-meta" hidden drug="Risperidone" model-id="Risperidone_Wong2019_reference" status="rejected" stale="false" population="Rats and humans (literature data)" measured-compound="Risperidone" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Wong YC, Centanni M, de Lange ECM. Physiologically Based Modeling Approach to Predict Dopamine D2 Receptor Occupancy of Antipsychotics in Brain: Translation From Rat to Human. Journal of clinical pharmacology 59(5):731–747 (2019).
  ·  DOI: [10.1002/jcph.1365](https://doi.org/10.1002/jcph.1365)

## Population and dosing

**Population:** Rats and humans (literature data) · condition healthy volunteers and schizophrenic patients · age group adult.

**Dosing:** 3, 6 mg/day, oral, multiple.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted, plus 6 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight | MW | 410.5 | g/mol |
| Vmax,pgp | Vmax | 2.8619 | nmol/min/nmol |
| Km,pgp | Km | 12.419 | μM |
| Kd,D2 | KD | 7.2418 | nM |
| koff,D2 | koff | 0.00518 | 1/s |
| fu,plasma | fu | 0.118102 |  |
| theta_q305_cyp2d6 | theta_q305_cyp2d6 | 2.3108 |  |
| theta_q1_cyp2d6 | theta_q1_cyp2d6 | 1.1108 |  |
| theta_q305_cyp3a4 | theta_q305_cyp3a4 | 15108 |  |
| theta_q1_cyp3a4 | theta_q1_cyp3a4 | 61108 |  |
| theta_q305_cyp3a5 | theta_q305_cyp3a5 | 15108 |  |
| theta_q1_cyp3a5 | theta_q1_cyp3a5 | 200108 |  |
| CLbv | CL | 0.312 | L/h/kg |
| apical compartment volume | V | 0.2 | mL |
| KaSC-RIS | kabs | 2.84 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Non-drug clozapine metabolite included; paliperidone covariates lack units; Vmax, Km, KD units fail dimensional checks; oral volume and CL outside physiological ranges.**

The record erroneously includes clozapine and norclozapine, which are unrelated to the measured compound risperidone. Multiple covariate parameters for paliperidone are provided without units, while the maximum metabolic rate is incorrectly labeled with units of inverse time rather than mass per time. Furthermore, the apparent volume of distribution for risperidone is extracted as 0.2 mL, and its clearance is 0.312 L/h/kg, both values being physiologically implausible. Additionally, the specified model structure cannot be represented by the available standard compartment templates. Extracted — risperidone: MW 410 g/mol, Vmax 2.86 nmol/min/nmol, Km 12.4 μM, KD 7.24 nM, koff 0.00518 1/s, fu 0.118, CL 0.312 L/h/kg, V 0.2 mL, … (+1).

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight | `Q374` · MW | 410.5 | g/mol | 0.4105 |  | g/(m·ol) | exact (1) | jcph1365-tbl-0001:row2:col4 |
| Vmax,pgp | `Q66` · Vmax | 2.8619 | nmol/min/nmol |  |  | 1/min | llm_confirmed (0.6) | jcph1365-tbl-0001:row6:col4 |
| Km,pgp | `Q1` · Km | 12.419 | μM |  |  | µM | llm_confirmed (0.6) | jcph1365-tbl-0001:row7:col4 |
| Kd,D2 | `Q331` · KD | 7.2418 | nM |  |  | nM | llm_confirmed (0.6) | jcph1365-tbl-0001:row8:col4 |
| koff,D2 | `Q330` · koff | 0.00518 | 1/s | 0.00518 | 1/s | 1/s | llm_confirmed (0.6) | jcph1365-tbl-0001:row9:col4 |
| fu,plasma | `Q46` · fu | 0.118102 |  | 0.1181 |  |  | llm_confirmed (0.6) | jcph1365-tbl-0001:row11:col4, jcph1365-tbl-0001:row16:col4 |
| theta_q305_cyp2d6 | `Q900` · theta_q305_cyp2d6 | 2.3108 |  |  |  |  |  | jcph1365-tbl-0001:row22:col4 |
| theta_q1_cyp2d6 | `Q900` · theta_q1_cyp2d6 | 1.1108 |  |  |  |  |  | jcph1365-tbl-0001:row23:col4 |
| theta_q305_cyp3a4 | `Q900` · theta_q305_cyp3a4 | 15108 |  |  |  |  |  | jcph1365-tbl-0001:row24:col4 |
| theta_q1_cyp3a4 | `Q900` · theta_q1_cyp3a4 | 61108 |  |  |  |  |  | jcph1365-tbl-0001:row25:col4 |
| theta_q305_cyp3a5 | `Q900` · theta_q305_cyp3a5 | 15108 |  |  |  |  |  | jcph1365-tbl-0001:row26:col4 |
| theta_q1_cyp3a5 | `Q900` · theta_q1_cyp3a5 | 200108 |  |  |  |  |  | jcph1365-tbl-0001:row27:col4 |
| CLbv | `Q22` · CL | 0.312 | L/h/kg | 6.067e-06 | m3/s | L/h | review_gapfill (0.7) | Kozielska_2012:review |
| apical compartment volume | `Q61` · V | 0.2 | mL | 2e-07 | m3 | L | review_gapfill (0.7) | Chothe_2025:review |
| KaSC-RIS | `Q49` · kabs | 2.84 | 1/h | 0.0007889 | 1/s | 1/h | review_gapfill (0.7) | Kozielska_2012:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'risperidone' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- table representations disagree for 'Molecular weight'; source reconciliation required
- table representations disagree for 'Log P'; source reconciliation required
- table representations disagree for 'pKa1'; source reconciliation required
- table representations disagree for 'pKa2'; source reconciliation required
- table representations disagree for 'Vmax,pgp'; source reconciliation required
- table representations disagree for 'Km,pgp'; source reconciliation required
- table representations disagree for 'Kd,D2'; source reconciliation required
- table representations disagree for 'koff,D2'; source reconciliation required
- table representations disagree for 'fu,plasma'; source reconciliation required
- table representations disagree for 'Dissolution time/shape'; source reconciliation required
- table representations disagree for 'CLRenal'; source reconciliation required
- table representations disagree for 'CYP2D6,Vmax'; source reconciliation required
- table representations disagree for 'CYP2D6,Km'; source reconciliation required
- table representations disagree for 'CYP3A4,Vmax'; source reconciliation required
- table representations disagree for 'CYP3A4,Km'; source reconciliation required
- table representations disagree for 'CYP3A5,Vmax'; source reconciliation required
- table representations disagree for 'CYP3A5,Km'; source reconciliation required
- dropped unlinked row (NIL): 'Log P' — extend the ontology if this is a real PK parameter (source ['jcph1365-tbl-0001:row3:col4'])
- dropped unlinked row (NIL): 'pKa1' — extend the ontology if this is a real PK parameter (source ['jcph1365-tbl-0001:row4:col4'])
- dropped unlinked row (NIL): 'pKa2' — extend the ontology if this is a real PK parameter (source ['jcph1365-tbl-0001:row5:col4'])
- unit_dimension_mismatch: 'Vmax,pgp' → Q66 (unit '1 / [time]' vs ontology '[mass] / [time]') — route to review
- unit_dimension_mismatch: 'Km,pgp' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Kd,D2' → Q331 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Dissolution time/shape' — extend the ontology if this is a real PK parameter (source ['jcph1365-tbl-0001:row17:col4'])
- dropped 'CLRenal' → Q26 = 0: a clearance of 0 is not a parameter value (source ['jcph1365-tbl-0001:row19:col4'])
- covariate effect for Q305 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Risperidone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- pharmacogenetic covariate 'theta_q305_cyp2d6' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp2d6' (cyp2d6) — PGx domain
- pharmacogenetic covariate 'theta_q305_cyp3a4' (cyp3a4) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp3a4' (cyp3a4) — PGx domain
- pharmacogenetic covariate 'theta_q305_cyp3a5' (cyp3a5) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp3a5' (cyp3a5) — PGx domain
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 19/19 row label(s) assigned, 5 linked by role; re-tagged Clozapine→parent ×17, Risperidone→parent ×12, Paliperidone→parent ×7, Clozapine→Paliperidone ×4, Risperidone→Paliperidone ×6
- molar mass: none of 1 PubChem candidate(s) is 'Norclozapine' (LLM) — left in mass units
- molar mass: none found for 'Norclozapine' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Kozielska_2012's review values (primary lacked it)
- gap-filled Q61 (V) from Chothe_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is MANUAL_MODEL_CLASS (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kozielska_2012's review values (primary lacked it)

**Extraction notes:**
- table jcph1365-tbl-0001: missing_unit_binding
- table jcph1365-tbl-0001: unparsed_numeric_cell
- table jcph1365-tbl-0001: representations disagree; selected evidence retained, not merged

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | μM ([length]) | ['jcph1365-tbl-0001:row7:col4'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kozielska_2012:review'] |
| C5_dimension_Q330 | pass | 1 / [time] |  | ['jcph1365-tbl-0001:row9:col4'] |
| C5_dimension_Q331 | fail | [mass] / [length] ** 3 | nM ([length]) | ['jcph1365-tbl-0001:row8:col4'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['jcph1365-tbl-0001:row2:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kozielska_2012:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Chothe_2025:review'] |
| C5_dimension_Q66 | fail | [mass] / [time] | nmol/min/nmol (1 / [time]) | ['jcph1365-tbl-0001:row6:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.312 | ['Kozielska_2012:review'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21.8 L/h | ['Kozielska_2012:review'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0002 L | ['Chothe_2025:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Wong2019_reference&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Wong2019_reference%0APaper%3A%20Wong_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_risperidone/Risperidone_Wong2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 01:51 UTC</sub>
