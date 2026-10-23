<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;celecoxib&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/&quot;},{&quot;label&quot;:&quot;Hannam_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_shock_0_56&quot;,&quot;label&quot;:&quot;Vaddady_2011_shock_0_56&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_shock_0_56.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_shock_43&quot;,&quot;label&quot;:&quot;Vaddady_2011_shock_43&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_shock_43.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Shi2008_reference&quot;,&quot;label&quot;:&quot;Shi_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Shi2008_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_normo_16&quot;,&quot;label&quot;:&quot;Vaddady_2011_normo_16&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_normo_16.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_shock_110&quot;,&quot;label&quot;:&quot;Vaddady_2011_shock_110&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_shock_110.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# celecoxib — `Celecoxib_Hannam2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:36 UTC (Needs review), but the paper was screened again on 2026-10-07 02:19 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The model does not reproduce the paper's terminal half-life (paper 0.84, model 4.63).

<div class="pk-model-meta" hidden drug="celecoxib" model-id="Celecoxib_Hannam2023_reference" status="rejected" stale="true" population="adults" measured-compound="celecoxib" parameterization="apparent" topology="1C"></div>

## Citation
Hannam JA, Murto KT, Anderson BJ, Dembo G, Kharasch ED. Modeling adult COX-2 cerebrospinal fluid pharmacokinetics to inform pediatric investigation. Paediatric anaesthesia 33(4):291–302 (2023).
  ·  DOI: [10.1111/pan.14590](https://doi.org/10.1111/pan.14590)

## Population and dosing

**Population:** adults · condition healthy · age group adult.

**Dosing:** 200 mg, oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, CLnorm/F, V/F, Vnorm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Vstd/F (l˙70 kg−1) | Vnorm/F | 80.1 | l˙70 kg−1 | 41.9 | 0.268 (None% RSE) |
| CLstd/F (l˙h−1˙70 kg−1) | CLnorm/F | 5.04 | l˙h−1˙70 kg−1 | 42.5 | 0.662 (None% RSE) |
| T1/2 ABS (h) | t1/2ka | 0.421 | h | 41.7 | 1.217 (None% RSE) |
| T_LAG (h) | tlag | 0.511 | h | 44.8 | 0.797 (None% RSE) |
| CL/F | CL/F | 1 |  |  |  |
| V/F | V/F | -0.660 |  |  | 1 (None% RSE) |
| T1/2 keq (h) | t1/2z | 0.839 | h | 49.2 | 0.374 (None% RSE) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.941). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The model does not reproduce the paper's terminal half-life (paper 0.84, model 4.63).**

Simulated as the paper dosed it, the model's terminal half-life differs from the value the paper reports by more than the tolerance. A reported unit could not be converted (Ct), so that value has no SI equivalent. Extracted — celecoxib: t1/2z 49.2 h, Ct 12.5 µg˙L−1, CL 49 L/h/70 kg, V 346 L/70 kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of f: this record has none, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vstd/F (l˙70 kg−1) | `Q353` · Vnorm/F | 80.1 | l˙70 kg−1 | 5.607 | m3 | l/kg | 41.9 | exact (1) | Hannam_2023_table_p5_1:row0:col1, Hannam_2023_table_p5_1:row0:col4 | 0.268 (None% RSE) |
| CLstd/F (l˙h−1˙70 kg−1) | `Q355` · CLnorm/F | 5.04 | l˙h−1˙70 kg−1 | 9.8e-05 | m3/s | l/(h·kg) | 42.5 | exact (1) | Hannam_2023_table_p5_1:row1:col1, Hannam_2023_table_p5_1:row1:col4 | 0.662 (None% RSE) |
| T1/2 ABS (h) | `Q95` · t1/2ka | 0.421 | h | 1516 | s | h | 41.7 | exact (1) | Hannam_2023_table_p5_1:row2:col1, Hannam_2023_table_p5_1:row2:col4 | 1.217 (None% RSE) |
| T_LAG (h) | `Q83` · tlag | 0.511 | h | 1840 | s | h | 44.8 | exact (1) | Hannam_2023_table_p5_1:row3:col1, Hannam_2023_table_p5_1:row3:col4 | 0.797 (None% RSE) |
| CL/F | `Q27` · CL/F | 1 |  |  |  |  |  | exact (1) | Hannam_2023_table_p5_1:row5:col1 |  |
| V/F | `Q76` · V/F | -0.660 |  |  |  |  |  | exact (1) | Hannam_2023_table_p5_1:row6:col1 | 1 (None% RSE) |
| T1/2 keq (h) | `Q57` · t1/2z | 0.839 | h | 3020 | s | h | 49.2 | llm_confirmed (0.6) | Hannam_2023_table_p5_2:row0:col1, Hannam_2023_table_p5_2:row0:col4 | 0.374 (None% RSE) |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Vstd/F (l˙70 kg−1)' routed out of structural estimates ('BSV %')
- table section iiv: 'CLstd/F (l˙h−1˙70 kg−1)' routed out of structural estimates ('BSV %')
- table section iiv: 'T1/2 ABS (h)' routed out of structural estimates ('BSV %')
- table section iiv: 'T_LAG (h)' routed out of structural estimates ('BSV %')
- table section iiv: 'V/F' routed out of structural estimates ('BSV %')
- table section iiv: 'T1/2 ABS' routed out of structural estimates ('BSV %')
- table section iiv: 'T_LAG' routed out of structural estimates ('BSV %')
- table section iiv: 'T1/2 keq (h)' routed out of structural estimates ('BSV %')
- table section iiv: 'Plasma RUV_ADO (µg˙L−1)' routed out of structural estimates ('BSV %')
- table section iiv: 'CSF RUV_ADO (µg˙L−1)' routed out of structural estimates ('BSV %')
- dropped duplicate Q95 ('T1/2 ABS', value '-0.963') — already have one for this compound
- dropped duplicate Q83 ('T_LAG', value '-0.535') — already have one for this compound
- dropped unlinked row (NIL): 'TF' — extend the ontology if this is a real PK parameter (source ['Hannam_2023_table_p5_2:row1:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=celecoxib
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- unparsed cell Hannam_2023_table_p5_1:row0:col3 = '65.5, 96.7'
- unparsed cell Hannam_2023_table_p5_1:row1:col3 = '2.44, 7.80'
- unparsed cell Hannam_2023_table_p5_1:row2:col3 = '0.227, 0.573'
- unparsed cell Hannam_2023_table_p5_1:row3:col3 = '0.197, 0.748'
- unparsed cell Hannam_2023_table_p5_2:row0:col3 = '0.544, 1.13'
- unparsed cell Hannam_2023_table_p5_2:row1:col3 = '1.40, 2.26'
- unparsed cell Hannam_2023_table_p5_2:row2:col3 = '17.8, 48.3'
- unparsed cell Hannam_2023_table_p5_2:row3:col3 = '7.3, 23.7'
- unparsed cell Hannam_2023_table_p5_2:row4:col3 = '0.003, 2.03'
- unparsed cell Hannam_2023_table_p5_2:row5:col3 = '11.8, 58.1'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.941 (16/17 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_base_sign_Q76 | fail |  | -0.66 |  |
| C5_dimension_Q353 | pass | [length] ** 3 |  | ['Hannam_2023_table_p5_1:row0:col1', 'Hannam_2023_table_p5_1:row0:col4'] |
| C5_dimension_Q355 | pass | [length] ** 3 / [time] |  | ['Hannam_2023_table_p5_1:row1:col1', 'Hannam_2023_table_p5_1:row1:col4'] |
| C5_dimension_Q57 | pass | [time] |  | ['Hannam_2023_table_p5_2:row0:col1', 'Hannam_2023_table_p5_2:row0:col4'] |
| C5_dimension_Q83 | pass | [time] |  | ['Hannam_2023_table_p5_1:row3:col1', 'Hannam_2023_table_p5_1:row3:col4'] |
| C5_dimension_Q95 | pass | [time] |  | ['Hannam_2023_table_p5_1:row2:col1', 'Hannam_2023_table_p5_1:row2:col4'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] |  | ['Hannam_2023_table_p5_1:row5:col1'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 |  | ['Hannam_2023_table_p5_1:row6:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=celecoxib) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | pass | 2 scholar param(s) emitted or defaulted | 2 covered |  | all structural parameters accounted for |
| T3_topology_template |  | pass | 1C → PK_1C* | PK_1C |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  |  |  | no engineer deviations to adjudicate |
| T1_t_half_terminal | reference | fail | 0.84 | 4.628 | 5.51 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.05 | 4.628 | 4.408 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.08733 | 4.628 | 53 | min→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.2333 | 4.628 | 19.84 | min→SI vs simulated h |
| T1_t_half_terminal | reference | skipped |  | 4.628 |  | non-numeric value |
| T1_t_half_terminal | reference | fail | 0.35 | 4.628 | 13.22 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.84 | 4.628 | 5.51 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.421 | 4.628 | 10.99 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.647 | 4.628 | 7.154 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.839 | 4.628 | 5.517 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.84 | 4.628 | 5.51 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 1.12 | 4.628 | 4.133 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 0.84 | 4.628 | 5.51 | →SI vs simulated h |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcelecoxib%5D%20Celecoxib_Hannam2023_reference&body=Drug%3A%20celecoxib%0ARecord%3A%20Celecoxib_Hannam2023_reference%0APaper%3A%20Hannam_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_celecoxib/Celecoxib_Hannam2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 02:19 UTC</sub>
