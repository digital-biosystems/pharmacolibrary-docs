<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D10A&quot;,&quot;href&quot;:&quot;atc/D10A.md&quot;},{&quot;label&quot;:&quot;dapsone&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/&quot;},{&quot;label&quot;:&quot;Simpson_2006_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dapsone_Kotila2023_mean&quot;,&quot;label&quot;:&quot;Kotila_2023_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Kotila2023_mean.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Kotila2023_median&quot;,&quot;label&quot;:&quot;Kotila_2023_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Kotila2023_median.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dapsone_Mirochnick2001_reference&quot;,&quot;label&quot;:&quot;Mirochnick_2001_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dapsone/Dapsone_Mirochnick2001_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# dapsone — `Dapsone_Simpson2006v2_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.6), gpt-oss:120b (not confirmed, agreement 0.846). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**AUC has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Extracted — dapsone: kabs 0.93 h -1, CL/F 72 l h -1, Q/F 54.7 l h -1, V1/F 50 l, V2/F 1.61e+03 l, AUC 1.01e+05, t1/2z 26.7 h, V/F 48 l.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has chlorproguanil, dapsone, the second reading chlorproguanil and dapsone; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:26:06.673230+00:00) predates the upstream re-run (2026-10-07 07:43:12.662759+00:00). Current validate status: `needs_review`.

> **Dose compound ≠ measured compound:** dosed `chlorproguanil, dapsone`, measured `chlorproguanil, dapsone, chlorcycloguanil`.

## Citation
Simpson JA et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2006)
  ·  DOI: [10.1111/j.1365-2125.2005.02567.x](https://doi.org/10.1111/j.1365-2125.2005.02567.x)

## Model component
<dbs-pgx drug="dapsone" model-id="Dapsone_Simpson2006v2_reference" status="needs_review" stale="true" population="healthy adults, adults and children with P. falciparum malaria" measured-compound="chlorproguanil, dapsone, chlorcycloguanil" parameterization="apparent" topology="parent_metabolite"></dbs-pgx>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** CL/F, Q/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| k a (h -1 ) | `Q49` · kabs | 0.09 | h -1 | 2.4999999999999998e-05 | [1] / [h] | not captured | exact (1.0) | tab_2:row4:col1, tab_2:row4:col2, tab_2:row15:col1 | — | not captured |
| CL/F (l h -1 ) | `Q27` · CL/F | 51.53 | l h -1 | 1.4313888888888888e-05 | [l] / [h] | not captured | exact (1.0) | tab_2:row5:col1, tab_2:row5:col2, tab_2:row16:col1, tab_2:row16:col2 | — | not captured |
| CLD/F (l h -1 ) | `Q69` · Q/F | 54.67 | l h -1 | 1.5186111111111112e-05 | [l] / [h] | not captured | exact (1.0) | tab_2:row6:col1 | — | not captured |
| V 1 /F (l) | `Q290` · V1/F | 234.40 | l | 0.2344 | [l] | not captured | exact (1.0) | tab_2:row7:col1, tab_2:row7:col2 | — | not captured |
| V 2 /F (l) | `Q82` · V2/F | 1612.75 | l | 1.6127500000000001 | [l] | not captured | exact (1.0) | tab_2:row8:col1 | — | not captured |
| AUC (ng ml -1 h -1 ) = | `Q88` · AUC | 3105 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | tab_2:row10:col1, tab_2:row19:col1 | — | not captured |
| t 1/2 elim (h) | `Q57` · t1/2z | 34.7 | h | 124920.00000000001 | [h] | not captured | llm (0.6) | tab_2:row13:col1, tab_2:row22:col1 | — | not captured |
| V/F (l) | `Q76` · V/F | 76.96 | l | 0.07696 | [l] | not captured | exact (1.0) | tab_2:row17:col1, tab_2:row17:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'interpatient' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- implicit units: 'AUC (ng ml -1 h -1 ) =' — the LLM proposed 'ng ml -1 h -1', whose dimension does not fit Q88; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=chlorproguanil, dapsone, chlorcycloguanil
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 9/9 row label(s) assigned, 13 linked by role; re-tagged parent→chlorproguanil ×17, parent→dapsone ×2
- molar mass: no plausible PubChem entry for 'chlorproguanil, dapsone, chlorcycloguanil' ('no full name in the paper') — left in mass units
- molar mass: PubChem entry choice failed (JSONDecodeError)
- molar mass: none of 1 PubChem candidate(s) is 'chlorproguanil' (LLM) — left in mass units
- molar mass: none of 2 PubChem candidate(s) is 'chlorcycloguanil' (LLM) — left in mass units
- molar mass: none found for 'chlorproguanil' — its concentrations stay mass-only
- molar mass: none found for 'chlorcycloguanil' — its concentrations stay mass-only
- molar mass: none found for 'chlorproguanil, dapsone, chlorcycloguanil' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.6 (9/15 fields) | 6 |
| `gpt-oss:120b` | not confirmed | 0.846 (11/13 fields) | 2 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cld/f]` | 54.67 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t 1/2 elim].parameter_id` | Q57 | Q60 | mismatch |
| `gpt-oss-120b` | `parameters[v 1 /f].parameter_id` | Q290 | Q69 | mismatch |
| `gpt-oss-120b` | `parameters[v 2 /f].parameter_id` | Q82 | Q290 | mismatch |
| `gpt-oss-120b` | `screen.dose_compound` | chlorproguanil, dapsone | chlorproguanil and dapsone | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | chlorproguanil, dapsone, chlorcycloguanil | dapsone | mismatch |
| `gpt-oss:120b` | `parameters[t 1/2 elim].parameter_id` | Q57 | Q60 | mismatch |
| `gpt-oss:120b` | `screen.dose_compound` | chlorproguanil/dapsone | chlorproguanil and dapsone | mismatch |

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
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row5:col1', 'tab_2:row5:col2', 'tab_2:row16:col1', 'tab_2:row16:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row7:col1', 'tab_2:row7:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_2:row4:col1', 'tab_2:row4:col2', 'tab_2:row15:col1'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['tab_2:row13:col1', 'tab_2:row22:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_2:row6:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row17:col1', 'tab_2:row17:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_2:row8:col1'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 | not captured | not captured | not captured | ['tab_2:row10:col1', 'tab_2:row19:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 51.5 L/h | not captured | not captured | ['tab_2:row5:col1', 'tab_2:row5:col2', 'tab_2:row16:col1', 'tab_2:row16:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 234 L | not captured | not captured | ['tab_2:row7:col1', 'tab_2:row7:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 77 L | not captured | not captured | ['tab_2:row17:col1', 'tab_2:row17:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.61e+03 L | not captured | not captured | ['tab_2:row8:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_dapsone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Simpson_2006_2` / `Simpson_2006_2::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:43 UTC</sub>
