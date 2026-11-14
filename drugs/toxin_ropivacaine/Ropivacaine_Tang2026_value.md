<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Ropivacaine&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/&quot;},{&quot;label&quot;:&quot;Tang_2026 \u00b7 value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ropivacaine_Butiulca2024v2_reference&quot;,&quot;label&quot;:&quot;Butiulca_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Butiulca2024v2_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Lu2022_reference&quot;,&quot;label&quot;:&quot;Lu_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Lu2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Tang2026_3_oh_ropivacaine&quot;,&quot;label&quot;:&quot;Tang_2026_3_oh_ropivacaine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Tang2026_3_oh_ropivacaine.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Tang2026_ropivacaine&quot;,&quot;label&quot;:&quot;Tang_2026_ropivacaine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Tang2026_ropivacaine.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Butiulca2024_reference&quot;,&quot;label&quot;:&quot;Butiulca_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Butiulca2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ropivacaine_Matsota2024_reference&quot;,&quot;label&quot;:&quot;Matsota_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ropivacaine/Ropivacaine_Matsota2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ropivacaine — `Ropivacaine_Tang2026_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Ropivacaine" model-id="Ropivacaine_Tang2026_value" status="rejected" stale="false" population="patients undergoing open liver surgery" measured-compound="Ropivacaine" parameterization="mechanistic" topology="1C"></div>

## Citation
Tang J, Chen J, Sheng N, Zheng B, Xu L, Zhang J. Physiology-Based Pharmacokinetic Modeling of Ropivacaine After External Oblique Intercostal Plane Block in Open Liver Surgery Patients. Pharmaceuticals (Basel, Switzerland) 19(3) (2026).
  ·  DOI: [10.3390/ph19030348](https://doi.org/10.3390/ph19030348)

## Population and dosing

**Population:** patients undergoing open liver surgery · condition postoperative · age group mixed · n = 28.

**Dosing:** 112.5 mg, other, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted, plus 2 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular mass (g/mol) | MW | 274.4 | g/mol |
| f up | fu | 0.06 |  |
| Renal clearance (mL/min) | CLR | 1 | mL/min |
| theta_q66_cyp1a2 | theta_q66_cyp1a2 | 46 |  |
| theta_q1_cyp1a2 | theta_q1_cyp1a2 | 16 |  |
| ED95 volumes | V | 16.0 | mL |
| ka (h-1) 0.25% ropivacaine | kabs | 32.0 | h-1 |
| ALAG2 (h) | tlag | 0.49 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular mass (g/mol) | `Q374` · MW | 274.4 | g/mol | 0.2744 |  | g/(m·ol) | exact (1) | Tang_2026_table_6:row0:col1 |
| f up | `Q46` · fu | 0.06 |  | 0.06 |  |  | llm (0.6) | Tang_2026_table_6:row2:col1 |
| Renal clearance (mL/min) | `Q26` · CLR | 1 | mL/min | 1.667e-08 | m3/s | ml/min | exact (1) | Tang_2026_table_6:row7:col1 |
| theta_q66_cyp1a2 | `Q900` · theta_q66_cyp1a2 | 46 |  |  |  |  |  | Tang_2026_table_6:row5:col1 |
| theta_q1_cyp1a2 | `Q900` · theta_q1_cyp1a2 | 16 |  |  |  |  |  | Tang_2026_table_6:row6:col1 |
| ED95 volumes | `Q61` · V | 16.0 | mL | 1.6e-05 | m3 | L | review_gapfill (0.7) | Bang_2016:review |
| ka (h-1) 0.25% ropivacaine | `Q49` · kabs | 32.0 | h-1 | 0.008889 | 1/s | 1/h | review_gapfill (0.7) | Ling_2025:review |
| ALAG2 (h) | `Q83` · tlag | 0.49 | h | 1764 | s | h | review_gapfill (0.7) | Ling_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'LogP' — extend the ontology if this is a real PK parameter (source ['Tang_2026_table_6:row1:col1'])
- dropped unlinked row (NIL): 'Solubility (mg/mL)' — extend the ontology if this is a real PK parameter (source ['Tang_2026_table_6:row4:col1'])
- covariate effect for Q66 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q1 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ropivacaine
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- pharmacogenetic covariate 'theta_q66_cyp1a2' (cyp1a2) — PGx domain
- pharmacogenetic covariate 'theta_q1_cyp1a2' (cyp1a2) — PGx domain
- population split: 'value' subgroup of Tang_2026 (paper reports 3 populations: 3-oh ropivacaine (n = 25), ropivacaine (n = 28), value)
- row roles (LLM): model_class=pbpk; 13/13 row label(s) assigned, 0 linked by role; re-tagged 3-OH ropivacaine→parent ×6, PPX→parent ×6
- gap-filled Q61 (V) from Bang_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ling_2025's review values (primary lacked it)
- gap-filled Q83 (tlag) from Ling_2025's review values (primary lacked it)

**Extraction notes:**
- companion parameter table 6 transcribed (7 record(s))

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Tang_2026_table_6:row7:col1'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Tang_2026_table_6:row0:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ling_2025:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Bang_2016:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Ling_2025:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.016 L | ['Bang_2016:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bropivacaine%5D%20Ropivacaine_Tang2026_value&body=Drug%3A%20ropivacaine%0ARecord%3A%20Ropivacaine_Tang2026_value%0APaper%3A%20Tang_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ropivacaine/Ropivacaine_Tang2026_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 15:39 UTC</sub>
