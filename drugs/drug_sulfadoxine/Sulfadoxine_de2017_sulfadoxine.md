<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Sulfadoxine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/&quot;},{&quot;label&quot;:&quot;de_2017 \u00b7 sulfadoxine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulfadoxine_de2018_reference&quot;,&quot;label&quot;:&quot;de_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadoxine/Sulfadoxine_de2018_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sulfadoxine — `Sulfadoxine_de2017_sulfadoxine`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.706). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter; c2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).**

A reported unit could not be converted (CL, equation variable and Q), so that value has no SI equivalent. Extracted — sulfadoxine: Fab 1, CL/F 0.0303 L/h, V/F 14.1 L, kabs 0.531 /h, Q/F 0.0252 L/h, V1/F 179 L, CL -75.7 %, Q 47.4 216, 246.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has sulfadoxine, the second reading sulfadoxine and pyrimethamine; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017)
  ·  DOI: [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181)

<div class="pk-model-meta" hidden drug="Sulfadoxine" model-id="Sulfadoxine_de2017_sulfadoxine" status="rejected" stale="false" population="pregnant and postpartum women" measured-compound="sulfadoxine" parameterization="apparent" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, Q/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 | not captured | not captured | not captured | not captured | exact (1.0) | de_2017_table_p5_1:row0:col1 | — | not captured |
| CL/F during pregnancy [L/h]ᵇ | `Q27` · CL/F | 0.0303 | L/h | 8.416666666666668e-09 | [l] / [h] | not captured | llm_confirmed (0.6) | de_2017_table_p5_1:row1:col1 | — | not captured |
| Vc/F [L]ᵇ | `Q76` · V/F | 14.1 | L | 0.0141 | [l] | not captured | llm_corrected (0.6) | de_2017_table_p5_1:row2:col1 | — | not captured |
| ka [/h] | `Q49` · kabs | 0.531 | /h | 0.0001475 | [1] / [h] | not captured | llm_confirmed (0.6) | de_2017_table_p5_1:row3:col1 | — | not captured |
| Qp1/F [L/h]ᵇ | `Q69` · Q/F | 0.0252 | L/h | 7e-09 | [l] / [h] | not captured | llm_confirmed (0.6) | de_2017_table_p5_1:row4:col1 | — | not captured |
| Vp1/F [L]ᵇ | `Q290` · V1/F | 179 | L | 0.179 | [l] | not captured | llm (0.6) | de_2017_table_p5_1:row5:col1 | — | not captured |
| Change in CL when non-pregnant [%] | `Q22` · CL | -75.7 | % | not captured | [%] | not captured | llm_confirmed (0.6) | de_2017_table_p5_1:row9:col1 | — | 31.3 (None% RSE) |
| Site effect (scaling on observations) in Zambia [%] | `Q900` · equation variable | -24.8 | % | not captured | [%] | not captured | llm (0.6) | de_2017_table_p5_1:row15:col1 | — | not captured |
| 236 (216, 246) | `Q30` · Q | 47.4 | 216, 246 | not captured | [216] | not captured | llm (0.6) | de_2017_table_3:row17:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'fRBC:PL [fraction of one]' — extend the ontology if this is a real PK parameter (source ['de_2017_table_p5_1:row8:col1'])
- unit_dimension_mismatch: 'Change in CL when non-pregnant [%]' → Q22 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): 'T50 [weeks]' — extend the ontology if this is a real PK parameter (source ['de_2017_table_p5_1:row10:col1'])
- dropped unlinked row (NIL): 'γ – shape factor' — extend the ontology if this is a real PK parameter (source ['de_2017_table_p5_1:row11:col1'])
- dropped unlinked row (NIL): 'Site effect (scaling on observations) in Mozambique [%]' — extend the ontology if this is a real PK parameter (source ['de_2017_table_p5_1:row13:col1'])
- dropped unlinked row (NIL): 'Site effect (scaling on observations) in Sudan [%]' — extend the ontology if this is a real PK parameter (source ['de_2017_table_p5_1:row14:col1'])
- dropped unlinked row (NIL): '361 (337, 399)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row2:col4'])
- dropped unlinked row (NIL): '3.30 (3.22, 3.34)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row3:col4'])
- dropped unlinked row (NIL): '41.2 (37.0, 45.9)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row4:col4'])
- dropped unlinked row (NIL): '81.9 (74.8, 99.5)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row5:col4'])
- routed '589 (556, 646)' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): '3.37 (3.35, 3.42)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row8:col4'])
- dropped unlinked row (NIL): '83.2 (74.2, 94.7)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row9:col4'])
- dropped unlinked row (NIL): '186 (167, 211)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row10:col4'])
- dropped unlinked row (NIL): '443 (426, 509)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row12:col4'])
- dropped unlinked row (NIL): '3.32 (3.28, 3.38)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row13:col4'])
- dropped unlinked row (NIL): '54.6 (50.9, 65.3)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row14:col4'])
- dropped unlinked row (NIL): '124 (98.7, 143)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row15:col4'])
- unit_dimension_mismatch: '236 (216, 246)' → Q30 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped unlinked row (NIL): '3.26 (3.25, 3.35)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row18:col4'])
- dropped duplicate Q900 ('28.5 (23.3, 35.1)', value '35467') — already have one for this compound
- dropped unlinked row (NIL): '58.4 (45.2, 65.3)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row20:col4'])
- dropped unlinked row (NIL): '426 (304, 565)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row22:col4'])
- dropped unlinked row (NIL): '3.33 (3.25, 3.38)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row23:col4'])
- dropped unlinked row (NIL): '50.8 (34.3, 76.9)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row24:col4'])
- dropped unlinked row (NIL): '107 (72.4, 162)' — extend the ontology if this is a real PK parameter (source ['de_2017_table_3:row25:col4'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sulfadoxine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'sulfadoxine' subgroup of de_2017 (paper reports 2 populations: country, sulfadoxine)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table de_2017_table_p5_1: unparsed_numeric_cell
- table de_2017_table_3: ragged_grid
- companion parameter table 3 transcribed (85 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.706 (12/17 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[site effect (scaling on observations) in sudan [%]]` | not captured | 15.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f [l]b].parameter_id` | Q290 | Q76 | mismatch |
| `gpt-oss-120b` | `parameters[vp1/f [l]b]` | 179 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θrbc/pl [fraction of one]].parameter_id` | Q410 | Q43 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sulfadoxine | sulfadoxine and pyrimethamine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q22 | fail | not captured | -75.7 | not captured | not captured | not captured |
| C5_dimension_Q22 | fail | dimensionless | % | not captured | not captured | ['de_2017_table_p5_1:row9:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['de_2017_table_p5_1:row1:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['de_2017_table_p5_1:row5:col1'] |
| C5_dimension_Q30 | fail | dimensionless | 216, 246 | not captured | not captured | ['de_2017_table_3:row17:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['de_2017_table_p5_1:row3:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['de_2017_table_p5_1:row4:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['de_2017_table_p5_1:row2:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.0303 L/h | not captured | not captured | ['de_2017_table_p5_1:row1:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 179 L | not captured | not captured | ['de_2017_table_p5_1:row5:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 14.1 L | not captured | not captured | ['de_2017_table_p5_1:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_sulfadoxine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `de_2017` / `de_2017::sulfadoxine`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:39 UTC</sub>
