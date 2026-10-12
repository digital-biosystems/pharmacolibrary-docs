<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinblastine&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/&quot;},{&quot;label&quot;:&quot;Owellen_1977 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Toso1995_reference&quot;,&quot;label&quot;:&quot;Toso_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Toso1995_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Zhou1990_reference&quot;,&quot;label&quot;:&quot;Zhou_1990_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_vinblastine/Vinblastine_Zhou1990_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# vinblastine — `Vinblastine_Owellen1977_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.267), gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The vinblastine record was rejected because its three-compartment structure contains a compartment with no path from the dose, and it was built from the paper's abstract alone rather than a fitted model.**

The structure check flagged an unreachable or orphan compartment in the three-compartment model for vinblastine, so the reported parameters (t1/2α 3.9 min, t1/2β 53.0 min, t1/2γ 1173.0 min, V1 16.8 L, V2 79.0 L, V 1656.0 L, CL 46.2 L/h) could not be accepted as a coherent model. Because only the abstract was read, the published summary statistics stood in for a fitted model. A second reader also disagreed on the dosed compound and analyte (recording them as unknown) and on which half-life and volume labels correspond to which values, leaving the parameter assignments uncertain. Extracted — vinblastine: t1/2α 3.9 min, V1 16.8 liters, t1/2β 53 min, V2 79 liters, t1/2γ 1.17e+03 min, V 1.66e+03 liters, CL 46.2 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on how the model is parameterised: this record has mechanistic, the second reading apparent; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-10-05 09:32:47.856135+00:00) predates the upstream re-run (2026-10-06 14:15:39.529454+00:00). Current validate status: `needs_review`.

## Citation
Owellen RJ et al., Pharmacokinetics and metabolism of vinb…, Cancer research (1977)

<div class="pk-model-meta" hidden drug="vinblastine" model-id="Vinblastine_Owellen1977_reference" status="needs_review" stale="true" population="humans" measured-compound="vinblastine" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| alpha phase: t1/2 | `Q59` · t1/2α | 3.90 | min | 234.0 | [min] | not captured | llm_corrected (0.6) | Owellen_1977:abstract | — | not captured |
| Vc | `Q63` · V1 | 16.8 | liters | 0.016800000000000002 | [l] | not captured | exact (1.0) | Owellen_1977:abstract | — | not captured |
| beta phase:t1/2 | `Q60` · t1/2β | 53.0 | min | 3180.0 | [min] | not captured | llm_corrected (0.6) | Owellen_1977:abstract | — | not captured |
| Vbeta | `Q61` · V | 79.0 | liters | 0.079 | [l] | not captured | llm_confirmed (0.6) | Owellen_1977:abstract | — | not captured |
| gamma phase:t1/2 | `Q89` · t1/2γ | 1173.0 | min | 70380.0 | [min] | not captured | llm_corrected (0.6) | Owellen_1977:abstract | — | not captured |
| Systemic clearance | `Q22` · CL | 1491.0 | ml/min | 2.4849999999999998e-05 | L/h | not captured | review_gapfill (0.7) | Levêque_1996:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q61 ('Vgamma', value '1656.0') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=vinblastine
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Levêque_1996's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Owellen_1977_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.267 (4/15 fields) | 11 |
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>23 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[alpha phase: t1/2]` | 3.9 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[beta phase:t1/2]` | 53.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[gamma phase:t1/2]` | 1173.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[t1/2]` | not captured | 3.9 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vbeta]` | not captured | 79.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vbeta]` | 79.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | not captured | 16.8 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vc]` | 16.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vgamma]` | not captured | 1656.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[vgamma]` | 1656.0 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | vinblastine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | vinblastine | unknown | mismatch |
| `qwen3.8-27b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `qwen3.8-27b` | `parameters[alpha phase: vc]` | not captured | 16.8 | only_one_extracted |
| `qwen3.8-27b` | `parameters[beta phase: t1/2]` | not captured | 53.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[beta phase: vbeta]` | not captured | 79.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[beta phase:t1/2]` | 53.0 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[gamma phase: t1/2]` | not captured | 1173.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[gamma phase: vgamma]` | not captured | 1656.0 | only_one_extracted |
| `qwen3.8-27b` | `parameters[gamma phase:t1/2]` | 1173.0 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[systemic clearance]` | 1491.0 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[vbeta]` | 79.0 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[vc]` | 16.8 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Levêque_1996:review'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Owellen_1977:abstract'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Owellen_1977:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Owellen_1977:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Owellen_1977:abstract'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['Owellen_1977:abstract'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1491.0 | not captured | not captured | ['Levêque_1996:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 89.5 L/h | not captured | not captured | ['Levêque_1996:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 79 L | not captured | not captured | ['Owellen_1977:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 16.8 L | not captured | not captured | ['Owellen_1977:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_vinblastine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Owellen_1977` / `Owellen_1977::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 14:15 UTC</sub>
