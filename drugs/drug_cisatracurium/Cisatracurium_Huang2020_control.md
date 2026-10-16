<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;cisatracurium&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/&quot;},{&quot;label&quot;:&quot;Huang_2020 \u00b7 control&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisatracurium_Liu2012_reference&quot;,&quot;label&quot;:&quot;Liu_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/Cisatracurium_Liu2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisatracurium_Tran1998_reference&quot;,&quot;label&quot;:&quot;Tran_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/Cisatracurium_Tran1998_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cisatracurium — `Cisatracurium_Huang2020_control`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Cisatracurium record rejected because the AUC unit could not be converted to SI, leaving the parameter undefined.**

The review found the area under the curve parameter had a unit that could not be converted to SI units, meaning no standard value could be calculated. Additionally, the model structure was identified as having an unreachable or orphan compartment, which has no path from the dose. Extracted — cisatracurium: kel 0.06 1/min, ki0 0.04 1/min, k12 0.26 1/min, k21 0.19 1/min, V1 56.7 ml/kg, V2 41.3 ml/kg, t1/2α 1.52 min, t1/2β 21.8 min, … (+2).

Independently confirmed by `gpt-oss-120b`.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Huang X et al., Abnormal cisatracurium pharmacodynamics…, BMC anesthesiology (2020)
  ·  DOI: [10.1186/s12871-020-0935-z](https://doi.org/10.1186/s12871-020-0935-z)

<div class="pk-model-meta" hidden drug="cisatracurium" model-id="Cisatracurium_Huang2020_control" status="rejected" stale="false" population="patients with severe aortic regurgitation and control group" measured-compound="cisatracurium" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 10 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| K10 (1/min) | `Q47` · kel | 0.06 | 1/min | 0.001 | 1/h | not captured | exact (1.0) | Tab3:row1:col1 | — | not captured |
| K20 (1/min) | `Q373` · ki0 | 0.04 | 1/min | 0.0006666666666666666 | 1/h | not captured | exact (1.0) | Tab3:row2:col1 | — | not captured |
| K12 (1/min) | `Q301` · k12 | 0.26 | 1/min | 0.004333333333333333 | 1/h | not captured | exact (1.0) | Tab3:row3:col1 | — | not captured |
| K21 (1/min) | `Q302` · k21 | 0.19 | 1/min | 0.0031666666666666666 | 1/h | not captured | exact (1.0) | Tab3:row4:col1 | — | not captured |
| V1 (ml/kg) | `Q63` · V1 | 56.68 | ml/kg | 0.0039676 | [ml] / [kg] | not captured | exact (1.0) | Tab3:row5:col1 | — | not captured |
| V2 (ml/kg) | `Q64` · V2 | 41.31 | ml/kg | 0.0028917 | [ml] / [kg] | not captured | exact (1.0) | Tab3:row6:col1 | — | not captured |
| T1/2α (min) | `Q59` · t1/2α | 1.52 | min | 91.2 | [min] | not captured | exact (1.0) | Tab3:row7:col1 | — | not captured |
| T1/2β (min) | `Q60` · t1/2β | 21.82 | min | 1309.2 | [min] | not captured | exact (1.0) | Tab3:row8:col1 | — | not captured |
| CL (ml/min/kg) | `Q22` · CL | 6.76 | ml/min/kg | 7.886666666666665e-06 | [ml] / [[min] · [kg]] | not captured | exact (1.0) | Tab3:row9:col1 | — | not captured |
| AUC (min*μg/ml) | `Q88` · AUC | 23.81 | min*μg/ml | not captured | [[min] · [µg]] / [ml] | not captured | exact (1.0) | Tab3:row10:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- implicit units: 'K10 (1/min)' → 1/min (from the paper text: "The table in the paper text explicitly lists the parameter as 'K10 (1/min)'. Additionally, the table caption states: 'K1")
- implicit units: 'K20 (1/min)' → 1/min (from the paper text: "The table in the paper text explicitly lists the parameter as 'K20 (1/min)'. Additionally, the table caption states: 'K2")
- implicit units: 'K12 (1/min)' → 1/min (from the paper text: "The table in the paper text explicitly lists the parameter as 'K12 (1/min)'. Additionally, the table caption states: 'K1")
- implicit units: 'K21 (1/min)' → 1/min (from the paper text: "The table in the paper text explicitly lists the parameter as 'K21 (1/min)'. Additionally, the table caption states: 'K2")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cisatracurium
- population split: 'control' subgroup of Huang_2020 (paper reports 2 populations: ar, control)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab3:row3:col2 = '0.19 ± 0.01*'
- unparsed cell Tab3:row4:col2 = '0.11 ± 0.01*'
- unparsed cell Tab3:row7:col2 = '2.56 ± 0.16*'
- unparsed cell Tab3:row10:col2 = '28.79 ± 6.25*'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | confirmed | 1.0 (14/14 fields) | none |

_All readers agree on the compared fields of this record._

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab3:row9:col1'] |
| C5_dimension_Q301 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row3:col1'] |
| C5_dimension_Q302 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row4:col1'] |
| C5_dimension_Q373 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab3:row1:col1'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Tab3:row7:col1'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Tab3:row8:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row5:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab3:row6:col1'] |
| C5_dimension_Q88 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['Tab3:row10:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.76 | not captured | not captured | ['Tab3:row9:col1'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 28.4 L/h | not captured | not captured | ['Tab3:row9:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.97 L | not captured | not captured | ['Tab3:row5:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.89 L | not captured | not captured | ['Tab3:row6:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_cisatracurium/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Huang_2020` / `Huang_2020::control`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 02:22 UTC</sub>
