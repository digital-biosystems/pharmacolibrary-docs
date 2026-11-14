<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Pramipexole&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/&quot;},{&quot;label&quot;:&quot;Hanset_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pramipexole_Pu2017_reference&quot;,&quot;label&quot;:&quot;Pu_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Pu2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pramipexole_Chen2026_fasting_study&quot;,&quot;label&quot;:&quot;Chen_2026_fasting_study&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Chen2026_fasting_study.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pramipexole_Chen2026_fed_study&quot;,&quot;label&quot;:&quot;Chen_2026_fed_study&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Chen2026_fed_study.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pramipexole_Yang2023_geometric_mean&quot;,&quot;label&quot;:&quot;Yang_2023_geometric_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Yang2023_geometric_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pramipexole_Yang2023_geometric_mean_ratio&quot;,&quot;label&quot;:&quot;Yang_2023_geometric_mean_ratio&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Yang2023_geometric_mean_ratio.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Pramipexole_Yang2023_pramipexole_test&quot;,&quot;label&quot;:&quot;Yang_2023_pramipexole_test&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_pramipexole/Pramipexole_Yang2023_pramipexole_test.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Pramipexole — `Pramipexole_Hanset2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Dialysate flow rate Qd is mislabeled as concentration (10.9 µg/L) instead of volumetric flow, causing a dimensional mismatch between units and definition.

<div class="pk-model-meta" hidden drug="Pramipexole" model-id="Pramipexole_Hanset2019_reference" status="rejected" stale="false" population="63-year-old man on chronic hemodialysis" measured-compound="Pramipexole" parameterization="mechanistic" topology="1C"></div>

## Citation
Hanset N, Hantson P, Saint-Marcoux F, Devresse A, Jadoul M, Labriola L. Influence of hemodialysis on pramipexole pharmacokinetics: Lessons from two cases and literature review. Clinical nephrology. Case studies 7:11–16 (2019).
  ·  DOI: [10.5414/CNCS109641](https://doi.org/10.5414/CNCS109641)

## Population and dosing

**Population:** 63-year-old man on chronic hemodialysis · condition chronic hemodialysis · age group elderly · n = 2.

**Dosing:** 0.18 mg, oral, multiple, every 12 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Postdialyzer blood | Ct | 10.6 | µg/L |
| Dialysate | Qd | 10.9 | µg/L |
| Mean dialytic clearance of pramipexole | CL | 76.8 | mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Dialysate flow rate Qd is mislabeled as concentration (10.9 µg/L) instead of volumetric flow, causing a dimensional mismatch between units and definition.**

The parameter Qd, defined as dialysate flow rate, carries the unit µg/L (mass/volume) rather than volume/time. This conflict between the parameter's physical meaning and its reported unit prevented conversion to SI standards, leading to rejection of the model record. Extracted — pramipexole: Ct 10.6 µg/L, Qd 10.9 µg/L, CL 76.8 mL/min.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Postdialyzer blood | `Q75` · Ct | 10.6 | µg/L | 1.06e-05 | kg/m3 | µg/l | llm (0.6) | Hanset_2019_table_2:row3:col4, Hanset_2019_table_2:row3:col6 |
| Dialysate | `Q364` · Qd | 10.9 | µg/L |  |  | µg/l | llm (0.6) | Hanset_2019_table_2:row4:col4, Hanset_2019_table_2:row4:col5, Hanset_2019_table_2:row4:col6, Hanset_2019_table_2:row4:col7 |
| Mean dialytic clearance of pramipexole | `Q22` · CL | 76.8 | mL/min | 1.28e-06 | m3/s | L/h | boundary (0.8) | Hanset_2019:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Predialyzer blood' — extend the ontology if this is a real PK parameter (source ['Hanset_2019_table_2:row2:col1', 'Hanset_2019_table_2:row2:col2', 'Hanset_2019_table_2:row2:col3', 'Hanset_2019_table_2:row2:col4', 'Hanset_2019_table_2:row2:col5', 'Hanset_2019_table_2:row2:col6', 'Hanset_2019_table_2:row2:col7', 'Hanset_2019_table_2:row2:col8', 'Hanset_2019_table_2:row2:col9'])
- unit_dimension_mismatch: 'Dialysate' → Q364 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'Ultrafiltrate' — extend the ontology if this is a real PK parameter (source ['Hanset_2019_table_2:row5:col4', 'Hanset_2019_table_2:row5:col5', 'Hanset_2019_table_2:row5:col6', 'Hanset_2019_table_2:row5:col7'])
- salvaged Q22 ('Mean dialytic clearance of pramipexole'=76.8) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Pramipexole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Hanset_2019_table_2: missing_label

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q364 | fail | [length] ** 3 / [time] | µg/L ([mass] / [length] ** 3) | ['Hanset_2019_table_2:row4:col4', 'Hanset_2019_table_2:row4:col5', 'Hanset_2019_table_2:row4:col6', 'Hanset_2019_table_2:row4:col7'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Hanset_2019_table_2:row3:col4', 'Hanset_2019_table_2:row3:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 76.8 | ['Hanset_2019:results_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.61 L/h | ['Hanset_2019:results_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpramipexole%5D%20Pramipexole_Hanset2019_reference&body=Drug%3A%20pramipexole%0ARecord%3A%20Pramipexole_Hanset2019_reference%0APaper%3A%20Hanset_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_pramipexole/Pramipexole_Hanset2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 23:20 UTC</sub>
