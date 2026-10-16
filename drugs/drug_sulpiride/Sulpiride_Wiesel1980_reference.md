<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;sulpiride&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/&quot;},{&quot;label&quot;:&quot;Wiesel_1980 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sulpiride_Bressolle1984_reference&quot;,&quot;label&quot;:&quot;Bressolle_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sulpiride/Sulpiride_Bressolle1984_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulpiride — `Sulpiride_Wiesel1980_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.15). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — sulpiride: V 2.72 l/kg, CL 415 ml/min, t1/2z 5.3 h, fe 70 %, CLR 310 ml/min, Fab 27 %, kabs 1.66 h−1, tlag 1.5 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sulpiride, the second reading unknown; it also differs on 16 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Wiesel FA et al., The pharmacokinetics of intravenous and…, European journal of clinica… (1980)
  ·  DOI: [10.1007/BF00558453](https://doi.org/10.1007/BF00558453)

<div class="pk-model-meta" hidden drug="sulpiride" model-id="Sulpiride_Wiesel1980_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="sulpiride" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| average total distribution volume during the terminal slope | `Q61` · V | 2.72 | l/kg | 0.1904 | [l] / [kg] | not captured | llm_confirmed (0.6) | Wiesel_1980:abstract | — | not captured |
| total systemic clearance | `Q22` · CL | 415 | ml/min | 6.916666666666667e-06 | [ml] / [min] | not captured | llm_confirmed (0.6) | Wiesel_1980:abstract | — | not captured |
| serum half-life of the terminal slope following intravenous administration | `Q57` · t1/2z | 5.3 | h | 19080.0 | [h] | not captured | llm_corrected (0.6) | Wiesel_1980:abstract | — | not captured |
| % of the dose recovered unchanged in urine within 36 h following intravenous administration | `Q44` · fe | 70 | % | not captured | [%] | not captured | llm (0.6) | Wiesel_1980:abstract | — | not captured |
| mean renal clearance (intravenous) | `Q26` · CLR | 310 | ml/min | 5.166666666666667e-06 | [ml] / [min] | not captured | llm_confirmed (0.6) | Wiesel_1980:abstract | — | not captured |
| bioavailability determined from combined plasma and urine data | `Q40` · Fab | 27 | % | not captured | not captured | not captured | llm_confirmed (0.6) | Wiesel_1980:abstract | — | not captured |
| Ka1,sul | `Q49` · kabs | 1.66 | h−1 | 0.0004611111111111111 | 1/h | not captured | review_gapfill (0.7) | Yao_2019:review | — | not captured |
| Tlag | `Q83` · tlag | 1.5 | h | 5400.0 | h | not captured | review_gapfill (0.7) | Yao_2019:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'range' — extend the ontology if this is a real PK parameter (source ['Wiesel_1980:abstract'])
- dropped duplicate Q57 ('half-life (urinary excretion rates of unchanged sulpiride)', value 7.15) — already have one for this compound
- unit_dimension_unknown: '% of the dose' (fe)
- dropped duplicate Q44 ('recovery of unchanged drug in urine following oral administration', value 15) — already have one for this compound
- dropped duplicate Q26 ('mean renal clearance (oral)', value 223) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulpiride
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Yao_2019's review values (primary lacked it)
- gap-filled Q83 (tlag) from Yao_2019's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Wiesel_1980_metadata.yaml (10 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.15 (3/20 fields) | 17 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[% of the dose recovered unchanged in urine within 36 h following intravenous administration]` | 70 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[average total distribution volume during the terminal slope]` | 2.72 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[average total distribution volume during the terminal slope]` | not captured | 2.72 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability determined from combined plasma and urine data]` | 27 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability determined from combined plasma and urine data]` | not captured | 27 | only_one_extracted |
| `gpt-oss-120b` | `parameters[half-life of urinary excretion rates of unchanged sulpiride]` | not captured | 7.15 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka1,sul]` | 1.66 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean renal clearance]` | 310 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean renal clearance]` | not captured | 310 | only_one_extracted |
| `gpt-oss-120b` | `parameters[recovered unchanged in urine within 36 h]` | not captured | 70 | only_one_extracted |
| `gpt-oss-120b` | `parameters[serum half-life of the terminal slope following intravenous administration]` | 5.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[serum half-life of the terminal slope following intravenous administration]` | not captured | 5.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tlag]` | 1.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total systemic clearance]` | 415 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total systemic clearance]` | not captured | 415 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sulpiride | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sulpiride | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 6 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wiesel_1980:abstract'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Wiesel_1980:abstract'] |
| C5_dimension_Q44 | pass | dimensionless | not captured | not captured | not captured | ['Wiesel_1980:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Yao_2019:review'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Wiesel_1980:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Wiesel_1980:abstract'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Yao_2019:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 415.0 | not captured | not captured | ['Wiesel_1980:abstract'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 24.9 L/h | not captured | not captured | ['Wiesel_1980:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 190 L | not captured | not captured | ['Wiesel_1980:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_sulpiride/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Wiesel_1980` / `Wiesel_1980::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 17:33 UTC</sub>
