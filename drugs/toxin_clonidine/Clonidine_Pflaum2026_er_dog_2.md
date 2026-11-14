<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Clonidine&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/&quot;},{&quot;label&quot;:&quot;Pflaum_2026 \u00b7 er_dog_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Cloesmeijer2020_reference&quot;,&quot;label&quot;:&quot;Cloesmeijer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Cloesmeijer2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Gauda2022_clon_q6h&quot;,&quot;label&quot;:&quot;Gauda_2022_clon_q6h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Pflaum2026_dog&quot;,&quot;label&quot;:&quot;Pflaum_2026_dog&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Pflaum2026_dog.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Pflaum2026_human&quot;,&quot;label&quot;:&quot;Pflaum_2026_human&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Pflaum2026_human.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Gauda2022_clon_q8h&quot;,&quot;label&quot;:&quot;Gauda_2022_clon_q8h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q8h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Clonidine — `Clonidine_Pflaum2026_er_dog_2`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Clonidine" model-id="Clonidine_Pflaum2026_er_dog_2" status="rejected" stale="false" population="healthy laboratory beagles" measured-compound="Clonidine" parameterization="mechanistic" topology="retention"></div>

## Citation
Pflaum K, Albright J, Cox S, Smith J. Pharmacokinetics of Orally Administered Clonidine in Dogs. Journal of veterinary pharmacology and therapeutics 49(5):450-456 (2026).
  ·  DOI: [10.1111/jvp.70092](https://doi.org/10.1111/jvp.70092)

## Population and dosing

**Population:** healthy laboratory beagles · condition healthy · age group adult · n = 6.

**Dosing:** 3.5 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed Clonidine HCl, measured Clonidine.

> **Species: dog.** This record comes from an animal study (dog), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 270 | ng/mL |
| Tmax (h) | tmax | 0.75 | h |
| λz (1/h) | kel | 2.66 | 1/h |
| T1/2 λz (h) | t1/2z | 0.46 | h |
| AUClast (h × ng/mL | AUClast | 150 | h |
| AUCinf (h × ng/mL | AUC∞ | 152.26 | h |
| AUC%extr (%) | AUC%ext | 1.48 | % |
| AUMC | AUMC | 117.37 | h |
| MRTlast (h) | MRT | 0.75 | h |
| Ka | kabs | 0.889 | hour−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 270 | ng/mL | 0.00027 | kg/m3 | ng/ml | exact (1) | Pflaum_2026_table_3:row0:col2 |
| Tmax (h) | `Q56` · tmax | 0.75 | h | 2700 | s | h | exact (1) | Pflaum_2026_table_3:row1:col2 |
| λz (1/h) | `Q47` · kel | 2.66 | 1/h | 0.0007389 | 1/s | 1/h | exact (1) | Pflaum_2026_table_3:row2:col2 |
| T1/2 λz (h) | `Q57` · t1/2z | 0.46 | h | 1656 | s | h | half_life_rule (0.95) | Pflaum_2026_table_3:row3:col2 |
| AUClast (h × ng/mL | `Q74` · AUClast | 150 | h |  |  | h | llm_confirmed (0.6) | Pflaum_2026_table_3:row4:col2 |
| AUCinf (h × ng/mL | `Q17` · AUC∞ | 152.26 | h |  |  | h | llm_confirmed (0.6) | Pflaum_2026_table_3:row5:col2 |
| AUC%extr (%) | `Q84` · AUC%ext | 1.48 | % | 0.0148 |  | % | llm_corrected (0.6) | Pflaum_2026_table_3:row6:col2 |
| AUMC | `Q20` · AUMC | 117.37 | h |  |  | h | exact (1) | Pflaum_2026_table_3:row7:col2 |
| MRTlast (h) | `Q53` · MRT | 0.75 | h | 2700 | s | h | exact (1) | Pflaum_2026_table_3:row8:col2 |
| Ka | `Q49` · kabs | 0.889 | hour−1 | 0.0002469 | 1/s | 1/h | review_gapfill (0.7) | Tang_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUClast (h × ng/mL' → Q74 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUCinf (h × ng/mL' → Q17 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'AUMC' → Q20 (unit '[time]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Clonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'er dog 2' subgroup of Pflaum_2026 (paper reports 4 populations: dog, er dog 1, er dog 2, human)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q49 (kabs) from Tang_2025's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2, 3, 4
- table Pflaum_2026_table_4: unbound_uncertainty
- transposed table Pflaum_2026_table_4: logical view retains original source coordinates

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | fail | [mass] * [time] / [length] ** 3 | h ([time]) | ['Pflaum_2026_table_3:row5:col2'] |
| C5_dimension_Q20 | fail | [mass] * [time] / [length] ** 3 | h ([time]) | ['Pflaum_2026_table_3:row7:col2'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Pflaum_2026_table_3:row0:col2'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Pflaum_2026_table_3:row2:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tang_2025:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Pflaum_2026_table_3:row8:col2'] |
| C5_dimension_Q56 | pass | [time] |  | ['Pflaum_2026_table_3:row1:col2'] |
| C5_dimension_Q57 | pass | [time] |  | ['Pflaum_2026_table_3:row3:col2'] |
| C5_dimension_Q74 | fail | [mass] * [time] / [length] ** 3 | h ([time]) | ['Pflaum_2026_table_3:row4:col2'] |
| C5_dimension_Q84 | pass | dimensionless |  | ['Pflaum_2026_table_3:row6:col2'] |
| C8_topology | pass |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclonidine%5D%20Clonidine_Pflaum2026_er_dog_2&body=Drug%3A%20clonidine%0ARecord%3A%20Clonidine_Pflaum2026_er_dog_2%0APaper%3A%20Pflaum_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_clonidine/Clonidine_Pflaum2026_er_dog_2%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 15:57 UTC</sub>
