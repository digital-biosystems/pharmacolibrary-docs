<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;Lunar_2021 \u00b7 cycle_1&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Schmulenson2022_reference&quot;,&quot;label&quot;:&quot;Schmulenson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Schmulenson2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Wen2021_reference&quot;,&quot;label&quot;:&quot;Wen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Wen2021_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capecitabine — `Capecitabine_Lunar2021_cycle_1`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="capecitabine" model-id="Capecitabine_Lunar2021_cycle_1" status="needs_review" stale="false" population="patients with metastatic breast cancer" measured-compound="capecitabine" parameterization="mechanistic" topology="1C"></div>

## Citation
Lunar N, Etienne-Grimaldi MC, Macaire P, Thomas F, Dalenc F, Ferrero JM et al. Population pharmacokinetic and pharmacodynamic modeling of capecitabine and its metabolites in breast cancer patients. Cancer chemotherapy and pharmacology 87(2):229–239 (2021).
  ·  DOI: [10.1007/s00280-020-04208-8](https://doi.org/10.1007/s00280-020-04208-8)

## Population and dosing

**Population:** patients with metastatic breast cancer · age group adult · n = condition.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| ka 1 (/h) | kabs | 1.36 | /h |
| t lag1 (h) | tlag | 1.1 | h |
| F 1 | Fab | 0.21 |  |
| k 10 (/h) | kel | 0.42 | /h |
| k 23 (/h) | kcomp | 0.47 | /h |
| k 40 (/h) | ki0 | 0.46 | /h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — capecitabine: kabs 1.36 /h, tlag 1.1 h, Fab 0.21, kel 0.42 /h, kcomp 0.47 /h, ki0 0.46 /h.

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| ka 1 (/h) | `Q49` · kabs | 1.36 | /h | 0.0003778 | 1/s | 1/h | llm_confirmed (0.6) | tab_0:row5:col5, tab_0:row5:col6 |
| t lag1 (h) | `Q83` · tlag | 1.1 | h | 3960 | s | h | llm (0.6) | tab_0:row7:col5, tab_0:row7:col6 |
| F 1 | `Q40` · Fab | 0.21 |  |  |  |  | space_fold (0.95) | tab_0:row9:col5, tab_0:row9:col6 |
| k 10 (/h) | `Q47` · kel | 0.42 | /h | 0.0001167 | 1/s | 1/h | space_fold (0.95) | tab_0:row11:col5, tab_0:row11:col6 |
| k 23 (/h) | `Q48` · kcomp | 0.47 | /h | 0.0001306 | 1/s | 1/h | space_fold (0.95) | tab_0:row12:col5, tab_0:row12:col6 |
| k 40 (/h) | `Q373` · ki0 | 0.46 | /h | 0.0001278 | 1/s | 1/h | space_fold (0.95) | tab_0:row14:col5, tab_0:row14:col6 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('ka 2 (/h)', value '1.55') — already have one for this compound
- dropped duplicate Q83 ('t lag2 (h)', value '0.85') — already have one for this compound
- dropped duplicate Q48 ('k 34 (/h)', value '0.39') — already have one for this compound
- dropped unlinked row (NIL): 'Anemia' — extend the ontology if this is a real PK parameter (source ['Lunar_2021_table_2:row1:col1', 'Lunar_2021_table_2:row1:col2', 'Lunar_2021_table_2:row1:col3', 'Lunar_2021_table_2:row1:col5', 'Lunar_2021_table_2:row1:col6'])
- dropped unlinked row (NIL): 'Leucopenia' — extend the ontology if this is a real PK parameter (source ['Lunar_2021_table_2:row2:col1', 'Lunar_2021_table_2:row2:col2', 'Lunar_2021_table_2:row2:col3', 'Lunar_2021_table_2:row2:col5', 'Lunar_2021_table_2:row2:col6'])
- dropped unlinked row (NIL): 'Neutropenia' — extend the ontology if this is a real PK parameter (source ['Lunar_2021_table_2:row3:col1', 'Lunar_2021_table_2:row3:col2', 'Lunar_2021_table_2:row3:col5'])
- dropped unlinked row (NIL): 'Thrombocytopenia' — extend the ontology if this is a real PK parameter (source ['Lunar_2021_table_2:row4:col1', 'Lunar_2021_table_2:row4:col2', 'Lunar_2021_table_2:row4:col5'])
- dropped unlinked row (NIL): 'Asthenia' — extend the ontology if this is a real PK parameter (source ['Lunar_2021_table_2:row5:col1', 'Lunar_2021_table_2:row5:col2', 'Lunar_2021_table_2:row5:col3', 'Lunar_2021_table_2:row5:col5'])
- dropped unlinked row (NIL): 'Diarrhea' — extend the ontology if this is a real PK parameter (source ['Lunar_2021_table_2:row6:col1', 'Lunar_2021_table_2:row6:col2', 'Lunar_2021_table_2:row6:col3', 'Lunar_2021_table_2:row6:col5', 'Lunar_2021_table_2:row6:col6'])
- dropped unlinked row (NIL): 'Nausea' — extend the ontology if this is a real PK parameter (source ['Lunar_2021_table_2:row7:col1', 'Lunar_2021_table_2:row7:col2'])
- dropped unlinked row (NIL): 'Vomiting' — extend the ontology if this is a real PK parameter (source ['Lunar_2021_table_2:row8:col1'])
- dropped unlinked row (NIL): 'Neurotoxicity' — extend the ontology if this is a real PK parameter (source ['Lunar_2021_table_2:row9:col1', 'Lunar_2021_table_2:row9:col2', 'Lunar_2021_table_2:row9:col5'])
- dropped unlinked row (NIL): 'Hand and foot syndrome' — extend the ontology if this is a real PK parameter (source ['Lunar_2021_table_2:row10:col1', 'Lunar_2021_table_2:row10:col2', 'Lunar_2021_table_2:row10:col5', 'Lunar_2021_table_2:row10:col6'])
- dropped unlinked row (NIL): 'Skin toxicity' — extend the ontology if this is a real PK parameter (source ['Lunar_2021_table_2:row11:col3', 'Lunar_2021_table_2:row11:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=capecitabine
- population split: 'cycle 1 (n = 43)' subgroup of Lunar_2021 (paper reports 2 populations: cycle 1 (n = 43), cycle 2 (n = 38))
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_0:row16:col1 = 'Effect of age on k 40'
- unparsed cell tab_0:row17:col4 = '&lt; 0.001'
- unparsed cell tab_0:row18:col1 = 'Effect of CDA on k 23'
- unparsed cell tab_0:row18:col4 = '&lt; 0.001'
- unparsed cell tab_0:row19:col1 = 'Effect of ALP on k 34'
- unparsed cell tab_0:row19:col4 = '&lt; 0.001'
- companion parameter table 2 transcribed (48 record(s))
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (10/10 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q373 | pass | 1 / [time] |  | ['tab_0:row14:col5', 'tab_0:row14:col6'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['tab_0:row11:col5', 'tab_0:row11:col6'] |
| C5_dimension_Q48 | pass | 1 / [time] |  | ['tab_0:row12:col5', 'tab_0:row12:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_0:row5:col5', 'tab_0:row5:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['tab_0:row7:col5', 'tab_0:row7:col6'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcapecitabine%5D%20Capecitabine_Lunar2021_cycle_1&body=Drug%3A%20capecitabine%0ARecord%3A%20Capecitabine_Lunar2021_cycle_1%0APaper%3A%20Lunar_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_capecitabine/Capecitabine_Lunar2021_cycle_1%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:28 UTC</sub>
