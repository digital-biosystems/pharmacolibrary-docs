<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;magnesium sulfate&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/&quot;},{&quot;label&quot;:&quot;Deng_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MagnesiumSulfate_Chuan2001_reference&quot;,&quot;label&quot;:&quot;Chuan_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_magnesium_sulfate/MagnesiumSulfate_Chuan2001_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# magnesium sulfate — `MagnesiumSulfate_Deng2024_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Needs review), but the paper was screened again on 2026-10-07 19:49 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. No value for magnesium sulfate's clearance and volume of distribution.

<div class="pk-model-meta" hidden drug="magnesium sulfate" model-id="MagnesiumSulfate_Deng2024_reference" status="rejected" stale="true" population="Chinese preeclampsia population" measured-compound="magnesium_sulfate" parameterization="apparent" topology="1C"></div>

## Citation
Deng J, Peng L, Wang Y, Li J, Tang L, Yu Y. Population pharmacokinetics and dose optimization of magnesium sulfate in Chinese preeclampsia population. BMC pregnancy and childbirth 24(1):424 (2024).
  ·  DOI: [10.1186/s12884-024-06620-x](https://doi.org/10.1186/s12884-024-06620-x)

## Population and dosing

**Population:** Chinese preeclampsia population · condition preeclampsia · age group adult · n = 51.

**Dosing:** 5000, 10000 mg, iv, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| tvV(L) | V | 25.07 | L |  |
| tvCL (L/h) | CL | 2.98 | L/h | 0.082 (13.05% RSE) |
| dCLdBMI | CLnorm/F | -0.54 |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No value for magnesium sulfate's clearance and volume of distribution.**

The model was built, but magnesium sulfate's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. Extracted — magnesium sulfate: V 25.1 L, CL 2.98 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| tvV(L) | `Q61` · V | 25.07 | L | 0.02507 | m3 | l | tv_prefix (0.95) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4, Tab2:row3:col5, Tab2:row3:col6, Tab2:row3:col7, Tab2:row3:col8 |  |
| tvCL (L/h) | `Q22` · CL | 2.98 | L/h | 8.278e-07 | m3/s | l/h | tv_prefix (0.95) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4, Tab2:row4:col5, Tab2:row4:col6, Tab2:row4:col7, Tab2:row4:col8 | 0.082 (13.05% RSE) |
| dCLdBMI | `Q355` · CLnorm/F | -0.54 |  |  |  |  | llm (0.6) | Tab2:row8:col1, Tab2:row8:col2, Tab2:row8:col3, Tab2:row8:col5, Tab2:row8:col6, Tab2:row8:col7 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'ω2 V (%)' routed out of structural estimates ('Inter-individual variability')
- table section iiv: 'ω2 CL (%)' routed out of structural estimates ('Inter-individual variability')
- table section residual_error: 'stdev0' routed out of structural estimates ('Residual variability')
- dropped duplicate Q61 ('dVdfurosemide', value '-0.25') — already have one for this compound
- dropped duplicate Q22 ('dCLdfurosemide', value '-0.16') — already have one for this compound
- dropped unlinked row (NIL): 'dCLdCCR' — extend the ontology if this is a real PK parameter (source ['Tab2:row7:col1', 'Tab2:row7:col2', 'Tab2:row7:col3', 'Tab2:row7:col4', 'Tab2:row7:col5', 'Tab2:row7:col6', 'Tab2:row7:col7', 'Tab2:row7:col8'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=magnesium_sulfate
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Tab2:row5:col4 = '(-0.34)-(-0.16)'
- unparsed cell Tab2:row5:col8 = '(-0.33)-(-0.16)'
- unparsed cell Tab2:row6:col4 = '(-0.22)-(-0.096)'
- unparsed cell Tab2:row6:col8 = '(-0.23)-(-0.080)'
- unparsed cell Tab2:row8:col4 = '(-0.70)-(-0.38)'
- unparsed cell Tab2:row8:col8 = '(-0.77)-(-0.22)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.429 (3/7 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[dcldbmi]` | -0.54 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvcl].value` | 2.98 | 1.29 | mismatch |
| `gpt-oss-120b` | `parameters[tvv].value` | 25.07 | 23.31 | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q355 | fail |  | -0.54 |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6', 'Tab2:row4:col7', 'Tab2:row4:col8'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row3:col8'] |
| C5_unit_missing_Q355 | fail | [length] ** 3 / [time] |  | ['Tab2:row8:col1', 'Tab2:row8:col2', 'Tab2:row8:col3', 'Tab2:row8:col5', 'Tab2:row8:col6', 'Tab2:row8:col7'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.98 L/h | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4', 'Tab2:row4:col5', 'Tab2:row4:col6', 'Tab2:row4:col7', 'Tab2:row4:col8'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 25.1 L | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4', 'Tab2:row3:col5', 'Tab2:row3:col6', 'Tab2:row3:col7', 'Tab2:row3:col8'] |

**Reviewer per-scenario checks:**

| check | status | expected | obtained | note |
|---|---|---|---|---|
| T0_analyte_identity | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | skipped |  |  | no covariate effects in record |
| T3_param_coverage | pass | 2 scholar param(s) emitted or defaulted | 2 covered | all structural parameters accounted for |
| T3_topology_template | pass | 1C → PK_1C* | PK_1C | engineer template must match the scholar topology |
| T6_deviations | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmagnesium_sulfate%5D%20MagnesiumSulfate_Deng2024_reference&body=Drug%3A%20magnesium_sulfate%0ARecord%3A%20MagnesiumSulfate_Deng2024_reference%0APaper%3A%20Deng_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_magnesium_sulfate/MagnesiumSulfate_Deng2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 19:49 UTC</sub>
