<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Lormetazepam&quot;,&quot;href&quot;:&quot;drugs/toxin_lormetazepam/&quot;},{&quot;label&quot;:&quot;Shudofsky_2022 \u00b7 patient_b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lormetazepam_Bianconi2022_reference&quot;,&quot;label&quot;:&quot;Bianconi_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lormetazepam/Lormetazepam_Bianconi2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lormetazepam_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lormetazepam/Lormetazepam_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lormetazepam_Kurowski1982_reference&quot;,&quot;label&quot;:&quot;Kurowski_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_lormetazepam/Lormetazepam_Kurowski1982_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Lormetazepam — `Lormetazepam_Shudofsky2022_patient_b`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Lormetazepam" model-id="Lormetazepam_Shudofsky2022_patient_b" status="rejected" stale="false" population="critically ill patients with COVID-19-associated acute respiratory distress syndrome (ARDS) and receiving renal replacement therapy" measured-compound="Lormetazepam" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Shudofsky KN, Janssen PKC, Foudraine N, le Noble JLML. Clearance of Lormetazepam, Midazolam, and Their Conjugated Metabolites by Continuous Venovenous Hemofiltration During Prolonged Sedation in Critically Ill Patients With COVID-19-Associated Acute Respiratory Distress Syndrome. Journal of clinical pharmacology 62(4):568–570 (2022).
  ·  DOI: [10.1002/jcph.2005](https://doi.org/10.1002/jcph.2005)

## Population and dosing

**Population:** critically ill patients with COVID-19-associated acute respiratory distress syndrome (ARDS) and receiving renal replacement therapy · condition renal failure · age group adult · n = 3.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vd a (L) | V | 253 | L |
| Vd a (L) | V | 188 | L |
| clearance | CL | 83.0 | mL/min |
| Ka | kabs | 6.4 | h−1 |
| lag time | tlag | 30.0 | minutes |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vd a (L) | `Q61` · V | 253 | L | 0.253 | m3 | l | llm_confirmed (0.6) | Shudofsky_2022_table_1:row12:col5 |
| Vd a (L) | `Q61` · V | 188 | L | 0.188 | m3 | l | llm_confirmed (0.6) | Shudofsky_2022_table_1:row22:col5 |
| clearance | `Q22` · CL | 83.0 | mL/min | 1.383e-06 | m3/s | L/h | review_gapfill (0.7) | Bianconi_2022:review |
| Ka | `Q49` · kabs | 6.4 | h−1 | 0.001778 | 1/s | 1/h | review_gapfill (0.7) | le_2024:review |
| lag time | `Q83` · tlag | 30.0 | minutes | 1800 | s | h | review_gapfill (0.7) | Ruijs_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'SC d' — extend the ontology if this is a real PK parameter (source ['Shudofsky_2022_table_1:row15:col5'])
- dropped unlinked row (NIL): 'SC d' — extend the ontology if this is a real PK parameter (source ['Shudofsky_2022_table_1:row18:col5'])
- dropped unlinked row (NIL): 'SC d' — extend the ontology if this is a real PK parameter (source ['Shudofsky_2022_table_1:row25:col5', 'Shudofsky_2022_table_1:row33:col5'])
- dropped unlinked row (NIL): 'SC d' — extend the ontology if this is a real PK parameter (source ['Shudofsky_2022_table_1:row29:col5', 'Shudofsky_2022_table_1:row37:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Lormetazepam
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'patient b' subgroup of Shudofsky_2022 (paper reports 2 populations: patient a, patient b)
- row roles: 33 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=noncompartmental; 4/4 row label(s) assigned, 0 linked by role; re-tagged parent→Lormetazepam glucuronide ×2, parent→Midazolam ×9, parent→Midazolam glucuronide ×6
- molar mass: none of 2 PubChem candidate(s) is 'Lormetazepam glucuronide' (LLM) — left in mass units
- molar mass: none found for 'Lormetazepam glucuronide' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Bianconi_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from le_2024's review values (primary lacked it)
- gap-filled Q83 (tlag) from Ruijs_2022's review values (primary lacked it)

**Extraction notes:**
- table Shudofsky_2022_table_1: unknown_column_role
- table Shudofsky_2022_table_1: unbound_uncertainty
- table Shudofsky_2022_table_1: ragged_grid

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bianconi_2022:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['le_2024:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Shudofsky_2022_table_1:row12:col5'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Shudofsky_2022_table_1:row22:col5'] |
| C5_dimension_Q83 | pass | [time] |  | ['Ruijs_2022:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 83 | ['Bianconi_2022:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['glucuronidation', 'hydroxylation', 'glucuronidation'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.98 L/h | ['Bianconi_2022:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 253 L | ['Shudofsky_2022_table_1:row12:col5'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 188 L | ['Shudofsky_2022_table_1:row22:col5'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Blormetazepam%5D%20Lormetazepam_Shudofsky2022_patient_b&body=Drug%3A%20lormetazepam%0ARecord%3A%20Lormetazepam_Shudofsky2022_patient_b%0APaper%3A%20Shudofsky_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_lormetazepam/Lormetazepam_Shudofsky2022_patient_b%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 07:29 UTC</sub>
