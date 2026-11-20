<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Simvastatin&quot;,&quot;href&quot;:&quot;drugs/toxin_simvastatin/&quot;},{&quot;label&quot;:&quot;Kumagai_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Simvastatin_Kumagai2020_simvastatin_tas_303_day_19&quot;,&quot;label&quot;:&quot;Kumagai_2020_simvastatin_tas_303_day_19&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_simvastatin/Simvastatin_Kumagai2020_simvastatin_tas_303_day_19.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Simvastatin_Wu2016_reference&quot;,&quot;label&quot;:&quot;Wu_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_simvastatin/Simvastatin_Wu2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Simvastatin — `Simvastatin_Kumagai2020_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Simvastatin" model-id="Simvastatin_Kumagai2020_reference" status="rejected" stale="false" population="12 healthy participants" measured-compound="Simvastatin" parameterization="mechanistic" topology="1C"></div>

## Citation
Kumagai Y, Fujita T, Maeda M, Sasaki Y, Nagaoka M, Huang J et al. A Drug-Drug Interaction Study to Evaluate the Effect of TAS-303 on CYP3A Activity in the Small Intestine and Liver. Journal of clinical pharmacology 60(6):702–710 (2020).
  ·  DOI: [10.1002/jcph.1583](https://doi.org/10.1002/jcph.1583)

## Population and dosing

**Population:** 12 healthy participants · condition healthy · age group adult · n = 12.

**Dosing:** 1, 3, 5 mg, mixed, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C0, ng/mL | C0 | 29.2 | ng/mL |
| AUC0‐t, ng•h/mL | AUCt | 44.4 | ng*h/mL |
| AUC0‐inf, ng•h/mL | AUC∞ | 48.5 | ng*h/mL |
| t1/2, h | t1/2z | 3.9 | h |
| CL, L/h | CL | 21.3 | L/h |
| Vdss, L | Vss | 81.77 | L |
| VT | V | 0.56 | L/kg |
| ka (h−1) | kabs | 4.226 | h−1 |

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
| C0, ng/mL | `Q86` · C0 | 29.2 | ng/mL |  |  | ng/ml | exact (1) | Kumagai_2020_table_3:row1:col1 |
| AUC0‐t, ng•h/mL | `Q19` · AUCt | 44.4 | ng*h/mL |  |  | ng*h/mL | llm (0.6) | Kumagai_2020_table_3:row2:col1, Kumagai_2020_table_3:row2:col2 |
| AUC0‐inf, ng•h/mL | `Q17` · AUC∞ | 48.5 | ng*h/mL |  |  | ng*h/mL | llm (0.6) | Kumagai_2020_table_3:row3:col1, Kumagai_2020_table_3:row3:col2 |
| t1/2, h | `Q57` · t1/2z | 3.9 | h | 1.404e+04 | s | h | half_life_rule (0.95) | Kumagai_2020_table_3:row4:col1, Kumagai_2020_table_3:row4:col2 |
| CL, L/h | `Q22` · CL | 21.3 | L/h | 5.917e-06 | m3/s | l/h | exact (1) | Kumagai_2020_table_3:row5:col1, Kumagai_2020_table_3:row5:col2 |
| Vdss, L | `Q65` · Vss | 81.77 | L | 0.08177 | m3 | l | llm (0.6) | Kumagai_2020_table_3:row6:col1, Kumagai_2020_table_3:row6:col2 |
| VT | `Q61` · V | 0.56 | L/kg | 0.0392 | m3 | L | review_gapfill (0.7) | Wu_2016:review |
| ka (h−1) | `Q49` · kabs | 4.226 | h−1 | 0.001174 | 1/s | 1/h | review_gapfill (0.7) | Chang_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'C0, ng/mL' → Q86 (unit '[mass] / [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- implicit units: 'AUC0‐t, ng•h/mL' → ng*h/mL (from the popPK convention: "The paper reports AUC values in ng*h/mL (e.g., 'AUC0-t was 41.10 ... ng·h/mL' for midazolam and '3.735 ... ng·h/mL' for ")
- implicit units: 'AUC0‐inf, ng•h/mL' → ng*h/mL (from the popPK convention: "The paper reports AUC0-inf values in ng*h/mL (e.g., '4.261 ... ng·h/mL' for simvastatin). The unit for AUC0-inf is consi")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Simvastatin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Kumagai_2020:discussion_prose, Kumagai_2020:other_prose, Kumagai_2020_table_3); populations simvastatin + tas-303 (day 19), simvastatin alone (day 1) kept as separate records
- gap-filled Q61 (V) from Wu_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Chang_2022's review values (primary lacked it)

**Extraction notes:**
- table Kumagai_2020_table_3: unknown_column_role
- table Kumagai_2020_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q17 | pass | [time] * [mass] / [length] ** 3 |  | ['Kumagai_2020_table_3:row3:col1', 'Kumagai_2020_table_3:row3:col2'] |
| C5_dimension_Q19 | pass | [time] * [mass] / [length] ** 3 |  | ['Kumagai_2020_table_3:row2:col1', 'Kumagai_2020_table_3:row2:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Kumagai_2020_table_3:row5:col1', 'Kumagai_2020_table_3:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Chang_2022:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Kumagai_2020_table_3:row4:col1', 'Kumagai_2020_table_3:row4:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Wu_2016:review'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Kumagai_2020_table_3:row6:col1', 'Kumagai_2020_table_3:row6:col2'] |
| C5_dimension_Q86 | fail | [mass] * [time] / [length] ** 3 | ng/mL ([mass] / [length] ** 3) | ['Kumagai_2020_table_3:row1:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 21.3 | ['Kumagai_2020_table_3:row5:col1', 'Kumagai_2020_table_3:row5:col2'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 21.3 L/h | ['Kumagai_2020_table_3:row5:col1', 'Kumagai_2020_table_3:row5:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 39.2 L | ['Wu_2016:review'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 81.8 L | ['Kumagai_2020_table_3:row6:col1', 'Kumagai_2020_table_3:row6:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsimvastatin%5D%20Simvastatin_Kumagai2020_reference&body=Drug%3A%20simvastatin%0ARecord%3A%20Simvastatin_Kumagai2020_reference%0APaper%3A%20Kumagai_2020%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_simvastatin/Simvastatin_Kumagai2020_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 03:45 UTC</sub>
