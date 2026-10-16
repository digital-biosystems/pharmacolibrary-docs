<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;dofetilide&quot;,&quot;href&quot;:&quot;drugs/drug_dofetilide/&quot;},{&quot;label&quot;:&quot;Jonker_2005 \u00b7 including_covariates&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dofetilide_Jonker2005_basic_pharmacokinetic_model&quot;,&quot;label&quot;:&quot;Jonker_2005_basic_pharmacokinetic_model&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dofetilide/Dofetilide_Jonker2005_basic_pharmacokinetic_model.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dofetilide_Tunblad2008_base&quot;,&quot;label&quot;:&quot;Tunblad_2008_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dofetilide/Dofetilide_Tunblad2008_base.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dofetilide_Tunblad2008_final&quot;,&quot;label&quot;:&quot;Tunblad_2008_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dofetilide/Dofetilide_Tunblad2008_final.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dofetilide_Ollerstam2006_reference&quot;,&quot;label&quot;:&quot;Ollerstam_2006_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dofetilide/Dofetilide_Ollerstam2006_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Le_1995_QTc&quot;,&quot;label&quot;:&quot;Le_1995 \u00b7 QTc&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_dofetilide/pd_Le_1995_QTc.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Gotta_2015_QTc&quot;,&quot;label&quot;:&quot;Gotta_2015 \u00b7 QTc&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_dofetilide/pd_Gotta_2015_QTc.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Ollerstam_2006_QTc&quot;,&quot;label&quot;:&quot;Ollerstam_2006 \u00b7 QTc&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_dofetilide/pd_Ollerstam_2006_QTc.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dofetilide — `Dofetilide_Jonker2005_including_covariates`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C2 negative clearance/volume in a covariate scenario or base (implausible — base value or shift is wrong).**

Extracted — dofetilide: tlag 0.892 h, Fab 0.425, CL 0.878 L/h, V1 18.8 L, Q 14.8 L/h, V2 505 L, Q2 134 L/h, V3 8.31 L, … (+3).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of clwt: this record has 0.0072, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Jonker DM et al., A pharmacokinetic-pharmacodynamic model…, Clinical pharmacology and t… (2005)
  ·  DOI: [10.1016/j.clpt.2005.02.004](https://doi.org/10.1016/j.clpt.2005.02.004)

<div class="pk-model-meta" hidden drug="dofetilide" model-id="Dofetilide_Jonker2005_including_covariates" status="rejected" stale="false" population="healthy volunteers and patients with ischemic heart disease" measured-compound="dofetilide" parameterization="mechanistic" topology="3C"></div>

**Model structure:** 3-compartment; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| ttag (h) | `Q83` · tlag | 0.892 | h | 3211.2000000000003 | [h] | not captured | llm (0.6) | Jonker_2005_table_2:row1:col3, Jonker_2005_table_2:row1:col4 | — | not captured |
| F | `Q40` · Fab | 0.425 | not captured | not captured | not captured | not captured | exact (1.0) | Jonker_2005_table_2:row2:col3, Jonker_2005_table_2:row2:col4 | — | 23 (None% RSE) |
| CL (L/h) | `Q22` · CL | 0.878 | L/h | 2.438888888888889e-07 | [l] / [h] | not captured | exact (1.0) | Jonker_2005_table_2:row3:col3, Jonker_2005_table_2:row3:col4 | — | 11 (None% RSE) |
| VC (L) | `Q63` · V1 | 18.8 | L | 0.0188 | [l] | not captured | exact (1.0) | Jonker_2005_table_2:row4:col3, Jonker_2005_table_2:row4:col4 | — | 13 (None% RSE) |
| Q1 (L/h) | `Q30` · Q | 14.8 | L/h | 4.111111111111111e-06 | [l] / [h] | not captured | exact (1.0) | Jonker_2005_table_2:row5:col3, Jonker_2005_table_2:row5:col4 | — | 46 (None% RSE) |
| VP1 (L) | `Q64` · V2 | 505 | L | 0.505 | [l] | not captured | exact (1.0) | Jonker_2005_table_2:row6:col3, Jonker_2005_table_2:row6:col4 | — | 110 (None% RSE) |
| Q2 (L/h) | `Q99` · Q2 | 134 | L/h | 3.722222222222222e-05 | [l] / [h] | not captured | second_intercompartmental (0.9) | Jonker_2005_table_2:row7:col3, Jonker_2005_table_2:row7:col4 | — | not captured |
| VP2 (L) | `Q77` · V3 | 8.31 | L | 0.008310000000000001 | [l] | not captured | exact (1.0) | Jonker_2005_table_2:row8:col3, Jonker_2005_table_2:row8:col4 | — | not captured |
| VP,WT (L/kg) | `Q61` · V | -0.0068 | L/kg | -0.000476 | [l] / [kg] | not captured | llm_corrected (0.6) | Jonker_2005_table_2:row10:col3, Jonker_2005_table_2:row10:col4 | — | not captured |
| CLWT (L · h-1 · kg-1) | `Q354` · CLnorm | 0.0072 | L · h-1 · kg-1 | 1.3999999999999998e-07 | [l] / [[h] · [kg]] | not captured | llm (0.6) | Jonker_2005_table_2:row11:col3, Jonker_2005_table_2:row11:col4 | — | not captured |
| ka | `Q49` · kabs | 0.05 | h -1 | 1.388888888888889e-05 | 1/h | not captured | review_gapfill (0.7) | Gotta_2015:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'including covariates' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- 'Q2 (L/h)' linked to Q99: a second intercompartmental clearance beside the Q30 already present
- unit_dimension_mismatch: 'CLAGE (L · h-1 · y-1)' → Q22 (unit 'dimensionless' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CLAGE (L · h-1 · y-1)', value '63.7') — already have one for this compound
- routed 'εAdd (ng/mL)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- routed 'εProp (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dofetilide
- population split: 'including covariates' subgroup of Jonker_2005 (paper reports 2 populations: basic pharmacokinetic model, including covariates)
- gap-filled Q49 (kabs) from Gotta_2015's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- LLM selected parameter table(s) 2
- table Jonker_2005_table_2: missing_label

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.75 (12/16 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[clwt]` | 0.0072 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[ttag]` | 0.892 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp,wt]` | -0.0068 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[εprop]` | not captured | 0.0278 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_base_sign_Q61 | fail | not captured | -0.0068 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jonker_2005_table_2:row3:col3', 'Jonker_2005_table_2:row3:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jonker_2005_table_2:row5:col3', 'Jonker_2005_table_2:row5:col4'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jonker_2005_table_2:row11:col3', 'Jonker_2005_table_2:row11:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Gotta_2015:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jonker_2005_table_2:row10:col3', 'Jonker_2005_table_2:row10:col4'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jonker_2005_table_2:row4:col3', 'Jonker_2005_table_2:row4:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jonker_2005_table_2:row6:col3', 'Jonker_2005_table_2:row6:col4'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['Jonker_2005_table_2:row8:col3', 'Jonker_2005_table_2:row8:col4'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Jonker_2005_table_2:row1:col3', 'Jonker_2005_table_2:row1:col4'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Jonker_2005_table_2:row7:col3', 'Jonker_2005_table_2:row7:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.878 | not captured | not captured | ['Jonker_2005_table_2:row3:col3', 'Jonker_2005_table_2:row3:col4'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.878 L/h | not captured | not captured | ['Jonker_2005_table_2:row3:col3', 'Jonker_2005_table_2:row3:col4'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 18.8 L | not captured | not captured | ['Jonker_2005_table_2:row4:col3', 'Jonker_2005_table_2:row4:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 505 L | not captured | not captured | ['Jonker_2005_table_2:row6:col3', 'Jonker_2005_table_2:row6:col4'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_dofetilide/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jonker_2005` / `Jonker_2005::including_covariates`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 22:04 UTC</sub>
