<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Clonidine&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/&quot;},{&quot;label&quot;:&quot;Arenas-Lopez_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Cloesmeijer2020_reference&quot;,&quot;label&quot;:&quot;Cloesmeijer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Cloesmeijer2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Gauda2022_clon_q6h&quot;,&quot;label&quot;:&quot;Gauda_2022_clon_q6h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Pflaum2026_dog&quot;,&quot;label&quot;:&quot;Pflaum_2026_dog&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Pflaum2026_dog.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Pflaum2026_human&quot;,&quot;label&quot;:&quot;Pflaum_2026_human&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Pflaum2026_human.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Gauda2022_clon_q8h&quot;,&quot;label&quot;:&quot;Gauda_2022_clon_q8h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q8h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Clonidine — `Clonidine_ArenasLopez2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Clonidine" model-id="Clonidine_ArenasLopez2014_reference" status="rejected" stale="false" population="infants post-cardiac surgery" measured-compound="Clonidine" parameterization="mechanistic" topology="1C"></div>

## Citation
Arenas-Lopez S, Mulla H, Manna S, Durward A, Murdoch IA, Tibby SM. Enteral absorption and haemodynamic response of clonidine in infants post-cardiac surgery. British journal of anaesthesia 113(6):964-969 (2014).
  ·  DOI: [10.1093/bja/aeu258](https://doi.org/10.1093/bja/aeu258)

## Population and dosing

**Population:** infants post-cardiac surgery · condition post-cardiac surgery (postoperative intensive care) · age group infant · n = 46.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| single nasogastric dose of | D1 | 3 | μg kg(-1) |
| clonidine Cmax ranging from | Cmax | 0.15 | ng ml(-1) |
| Tmax from | tmax | 12 | min |
| clearance | CL | 13.7 | litre h(-1) 70 kg(-1) |
| Vd | V | 181 | litre 70 kg(-1) |
| samples | equation variable | 137 |  |
| Ka | kabs | 0.889 | hour−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.267). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of clearance: this record has 13.7, the second reading none; it also differs on 10 more fields. That field does not shape the model.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| single nasogastric dose of | `Q310` · D1 | 3 | μg kg(-1) |  |  | µg/kg | llm (0.6) | Arenas-Lopez_2014:abstract |
| clonidine Cmax ranging from | `Q32` · Cmax | 0.15 | ng ml(-1) | 1.5e-07 | kg/m3 | ng/ml | llm_confirmed (0.6) | Arenas-Lopez_2014:abstract |
| Tmax from | `Q56` · tmax | 12 | min | 720 | s | min | llm_confirmed (0.6) | Arenas-Lopez_2014:abstract |
| clearance | `Q22` · CL | 13.7 | litre h(-1) 70 kg(-1) | 3.806e-06 | m3/s | l/(h·70kg) | exact (1) | Arenas-Lopez_2014:abstract |
| Vd | `Q61` · V | 181 | litre 70 kg(-1) | 0.181 | m3 | l/70kg | exact (1) | Arenas-Lopez_2014:abstract |
| samples | `Q900` · equation variable | 137 |  | 137 |  |  | llm (0.6) | Arenas-Lopez_2014:abstract |
| Ka | `Q49` · kabs | 0.889 | hour−1 | 0.0002469 | 1/s | 1/h | review_gapfill (0.7) | Tang_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'median age' — extend the ontology if this is a real PK parameter (source ['Arenas-Lopez_2014:abstract'])
- unit_dimension_mismatch: 'single nasogastric dose of' → Q310 (unit '[mass]' vs ontology '[time]') — route to review
- dropped duplicate Q32 ('Cmax median', value 0.73) — already have one for this compound
- dropped duplicate Q56 ('Tmax median', value 190) — already have one for this compound
- dropped unlinked row (NIL): 'infants' — extend the ontology if this is a real PK parameter (source ['Arenas-Lopez_2014:abstract', 'Arenas-Lopez_2014:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Clonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Tang_2025's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Arenas-Lopez_2014_metadata.yaml (11 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clearance]` | 13.7 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[clearance]` |  | 13.7 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clonidine cmax ranging from]` | 0.15 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cmax]` |  | 0.73 | only_one_extracted |
| `gpt-oss:120b` | `parameters[samples]` | 137 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[single nasogastric dose of]` | 3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[single nasogastric dose]` |  | 3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax from]` | 12 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[tmax]` |  | 190 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` | 181 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vd]` |  | 181 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Arenas-Lopez_2014:abstract'] |
| C5_dimension_Q310 | fail | [time] | μg kg(-1) ([mass]) | ['Arenas-Lopez_2014:abstract'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Arenas-Lopez_2014:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tang_2025:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Arenas-Lopez_2014:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Arenas-Lopez_2014:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 13.7 | ['Arenas-Lopez_2014:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.7 L/h | ['Arenas-Lopez_2014:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 181 L | ['Arenas-Lopez_2014:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclonidine%5D%20Clonidine_ArenasLopez2014_reference&body=Drug%3A%20clonidine%0ARecord%3A%20Clonidine_ArenasLopez2014_reference%0APaper%3A%20Arenas-Lopez_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_clonidine/Clonidine_ArenasLopez2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 15:57 UTC</sub>
