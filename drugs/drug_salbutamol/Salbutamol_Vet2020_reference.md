<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;salbutamol&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/&quot;},{&quot;label&quot;:&quot;Vet_2020 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Salbutamol_Marques2024v2_reference&quot;,&quot;label&quot;:&quot;Marques_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/Salbutamol_Marques2024v2_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Walsh_2023_Glucose&quot;,&quot;label&quot;:&quot;Walsh_2023 \u00b7 Glucose&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_salbutamol/pd_Walsh_2023_Glucose.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# salbutamol — `Salbutamol_Vet2020_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.529), gpt-oss:120b (not confirmed, agreement 0.733). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The salbutamol record was rejected because the enantiomers R-salbutamol and S-salbutamol are linked to the parent only by interconversion with no parameter value, leaving them unconnected to the dose.**

The structure lists interconversion links from salbutamol to R-salbutamol and to S-salbutamol with link parameter 'none' and unknown kind, so the enantiomer compartments have no quantified path from the administered dose — an orphan/unlinked-metabolite finding. A second reader disputed the primary analyte (salbutamol vs R- and S-salbutamol), the links (none vs the two interconversions), and several values: renal clearance 16.3 vs 42 L/h/70 kg, total clearance 8.82 vs 37 L/h/70 kg, and central volume 12.9 vs 281 L/70 kg; the baseline dose was read as 99 by the second reader but null in this record. Extracted — salbutamol: CLR 16.3 L/h/70 kg, CL 8.82 L/h/70 kg, V1 12.9 L/70 kg, Q 20.4 L/h/70 kg, V2 45.5 L/70 kg; R-salbutamol, S-salbutamol: kabs 3.71 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has R- and S-salbutamol, the second reading salbutamol; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:40:28.908970+00:00) predates the upstream re-run (2026-10-07 14:20:10.102915+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `salbutamol`, measured `R- and S-salbutamol`.

## Citation
Vet NJ et al., Population Pharmacokinetics of Intraven…, Clinical pharmacokinetics (2020)
  ·  DOI: [10.1007/s40262-019-00811-y](https://doi.org/10.1007/s40262-019-00811-y)

<div class="pk-model-meta" hidden drug="salbutamol" model-id="Salbutamol_Vet2020_reference" status="needs_review" stale="true" population="children with refractory status asthmaticus" measured-compound="R- and S-salbutamol" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLR-salbutamol (L/h/70 kg) | `Q26` · CLR | 16.3 | L/h/70 kg | 4.527777777777778e-06 | [l] / [[h] · [70kg]] | 15 | llm_confirmed (0.6) | Tab2:row2:col1, Tab2:row2:col2, Tab2:row2:col3, Tab2:row2:col4 | — | not captured |
| CLS-salbutamol (L/h/70 kg) | `Q354` · CLnorm | 8.82 | L/h/70 kg | 2.45e-06 | [l] / [[h] · [70kg]] | 16 | llm (0.6) | Tab2:row3:col1, Tab2:row3:col2, Tab2:row3:col3, Tab2:row3:col4 | — | not captured |
| Vc (L/70 kg) | `Q63` · V1 | 12.9 | L/70 kg | 0.0129 | [l] / [70kg] | 21 | exact (1.0) | Tab2:row4:col1, Tab2:row4:col2, Tab2:row4:col3, Tab2:row4:col4 | — | not captured |
| Q (L/h/70 kg) | `Q30` · Q | 20.4 | L/h/70 kg | 5.666666666666666e-06 | [l] / [[h] · [70kg]] | 41.5 | exact (1.0) | Tab2:row5:col1, Tab2:row5:col2 | — | not captured |
| Vp (L/70 kg) | `Q64` · V2 | 45.5 | L/70 kg | 0.0455 | [l] / [70kg] | 9.6 | exact (1.0) | Tab2:row6:col1, Tab2:row6:col2 | — | not captured |
| k a1 | `Q49` · kabs | 31.6 | h−1 | 0.008777777777777778 | 1/h | not captured | review_gapfill (0.7) | Courlet_2022:review | — | not captured |
| Time before dose-response | `Q83` · tlag | 15.0 | min | 900.0 | h | not captured | review_gapfill (0.7) | Iredale_1991:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'ipv (%)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Baseline dose (μg)' — extend the ontology if this is a real PK parameter (source ['Tab2:row1:col1', 'Tab2:row1:col2', 'Tab2:row1:col3', 'Tab2:row1:col4'])
- NIL: refused to back-fill base 'CLR' from footnote/prose loose number 16.3 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'CL' from footnote/prose loose number 8.82 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V1' from footnote/prose loose number 12.9 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=R- and S-salbutamol
- gap-filled Q49 (kabs) from Courlet_2022's review values (primary lacked it)
- gap-filled Q83 (tlag) from Iredale_1991's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.529 (9/17 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.733 (11/15 fields) | 4 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['salbutamol', 'r-salbutamol', 'interconversion'], ['salbutamol', 's-salbutamol', 'interconversion']] | mismatch |
| `gpt-oss-120b` | `parameters[clr-salbutamol].value` | 16.3 | 42 | mismatch |
| `gpt-oss-120b` | `parameters[cls-salbutamol].parameter_id` | Q354 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cls-salbutamol].value` | 8.82 | 37 | mismatch |
| `gpt-oss-120b` | `parameters[k a1]` | 31.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[time before dose-response]` | 15.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc].value` | 12.9 | 281 | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | R- and S-salbutamol | salbutamol | mismatch |
| `gpt-oss:120b` | `parameters[baseline dose]` | not captured | 99 | only_one_extracted |
| `gpt-oss:120b` | `parameters[clr-salbutamol].value` | 16.3 | 42 | mismatch |
| `gpt-oss:120b` | `parameters[cls-salbutamol].value` | 8.82 | 37 | mismatch |
| `gpt-oss:120b` | `parameters[vc].value` | 12.9 | 281 | mismatch |

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
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col1', 'Tab2:row2:col2', 'Tab2:row2:col3', 'Tab2:row2:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row5:col1', 'Tab2:row5:col2'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row3:col1', 'Tab2:row3:col2', 'Tab2:row3:col3', 'Tab2:row3:col4'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Courlet_2022:review'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Iredale_1991:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q63 | pass | volume within physiological range | 12.9 L | not captured | not captured | ['Tab2:row4:col1', 'Tab2:row4:col2', 'Tab2:row4:col3', 'Tab2:row4:col4'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 45.5 L | not captured | not captured | ['Tab2:row6:col1', 'Tab2:row6:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_salbutamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vet_2020` / `Vet_2020::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:20 UTC</sub>
