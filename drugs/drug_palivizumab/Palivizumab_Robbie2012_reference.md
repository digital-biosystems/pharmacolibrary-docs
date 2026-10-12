<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;palivizumab&quot;,&quot;href&quot;:&quot;drugs/drug_palivizumab/&quot;},{&quot;label&quot;:&quot;Robbie_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Palivizumab_Huang2017_reference&quot;,&quot;label&quot;:&quot;Huang_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_palivizumab/Palivizumab_Huang2017_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Palivizumab_Li2021_reference&quot;,&quot;label&quot;:&quot;Li_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_palivizumab/Palivizumab_Li2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# palivizumab — `Palivizumab_Robbie2012_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.7), gpt-oss:120b (not confirmed, agreement 0.154). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume; q and CL have no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL), so that value has no SI equivalent. Extracted — palivizumab: Q 2.3, Fab 3.13, CL 9.95 mo, kabs 0.373 day Ϫ1.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has palivizumab, the second reading unknown; it also differs on 10 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-09-28 14:39:17.237393+00:00) predates the upstream re-run (2026-10-07 14:44:34.877238+00:00). Current validate status: `needs_review`.

## Citation
Robbie GJ et al., Population pharmacokinetics of palivizu…, Antimicrobial agents and ch… (2012)
  ·  DOI: [10.1128/AAC.06446-11](https://doi.org/10.1128/AAC.06446-11)

<div class="pk-model-meta" hidden drug="palivizumab" model-id="Palivizumab_Robbie2012_reference" status="needs_review" stale="true" population="adults and children" measured-compound="palivizumab" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 5 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 197 | ml/day | 2.2800925925925924e-09 | L/h | not captured | exact (1.0) | Robbie_2012:results_prose | — | not captured |
| V c | `Q63` · V1 | 4150 | ml | 0.00415 | L | not captured | space_fold (0.95) | Robbie_2012:results_prose | — | not captured |
| V p | `Q64` · V2 | 2230 | ml | 0.0022299999999999998 | L | not captured | space_fold (0.95) | Robbie_2012:results_prose | — | not captured |
| Q | `Q30` · Q | 874 | ml/day | 1.011574074074074e-08 | L/h | not captured | exact (1.0) | Robbie_2012:results_prose | — | not captured |
| k a | `Q49` · kabs | 1.03 | day -1 | 1.1921296296296295e-05 | 1/h | not captured | space_fold (0.95) | Robbie_2012:results_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL ϫ (WT/70) 0.75 ,' routed out of structural estimates ('IIV')
- table section iiv: 'RACE ϭ black' routed out of structural estimates ('IIV')
- table section iiv: 'RACE ϭ Asian' routed out of structural estimates ('IIV')
- table section iiv: 'RACE ϭ other' routed out of structural estimates ('IIV')
- table section iiv: 'CLD' routed out of structural estimates ('IIV')
- table section iiv: 'titer ϭ 20' routed out of structural estimates ('IIV')
- table section iiv: 'titer Ն 80' routed out of structural estimates ('IIV')
- table section iiv: 'Q ϫ (WT/70) 0.75 ,' routed out of structural estimates ('IIV')
- table section iiv: 'F1' routed out of structural estimates ('IIV')
- table section iiv: '␤' routed out of structural estimates ('IIV')
- table section iiv: 'T CL , mo' routed out of structural estimates ('IIV')
- table section iiv: '2 prop' routed out of structural estimates ('IIV')
- dropped value-less row: 'CL ϫ (WT/70) 0.75 ,'
- dropped value-less row: 'RACE ϭ black'
- dropped value-less row: 'RACE ϭ Hispanic 1.05'
- dropped value-less row: 'RACE ϭ Asian'
- dropped value-less row: 'RACE ϭ other'
- dropped value-less row: 'CLD'
- dropped value-less row: 'titer ϭ 10'
- dropped value-less row: 'titer ϭ 20'
- dropped value-less row: 'titer ϭ 40'
- dropped value-less row: 'titer Ն 80'
- dropped value-less row: 'V c ϫ (WT/70) 1.0 , ml 4,090'
- dropped value-less row: 'RACE ϭ Hispanic 1.06'
- dropped value-less row: 'V p ϫ (WT/70) 1.0 , ml 2,230'
- dropped value-less row: 'Q ϫ (WT/70) 0.75 ,'
- dropped value-less row: 'k a , day Ϫ1'
- dropped value-less row: 'F1'
- dropped value-less row: '␤'
- dropped value-less row: 'T CL , mo'
- dropped value-less row: '2 prop'
- salvaged Q22 ('CL'=197) from results prose — parameter table was unreadable
- salvaged Q63 ('V c'=4150) from results prose — parameter table was unreadable
- salvaged Q64 ('V p'=2230) from results prose — parameter table was unreadable
- salvaged Q30 ('Q'=874) from results prose — parameter table was unreadable
- salvaged Q49 ('k a'=1.03) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL); Q63 (V c); Q64 (V p); Q30 (Q)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=palivizumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- molar mass: none found for 'palivizumab' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_2:row1:col3 = '197, 198'
- unparsed cell tab_2:row1:col4 = '48.7 (CV%)'
- unparsed cell tab_2:row3:col3 = '0.997, 1.14'
- unparsed cell tab_2:row4:col2 = '0.985, 1.14'
- unparsed cell tab_2:row5:col3 = '0.967, 1.32'
- unparsed cell tab_2:row6:col3 = '0.999, 1.19'
- unparsed cell tab_2:row7:col3 = '1.13, 1.24'
- unparsed cell tab_2:row8:col2 = '11.50 0.960, 1.45'
- unparsed cell tab_2:row9:col3 = '0.769, 1.25'
- unparsed cell tab_2:row10:col2 = '10.60 0.892, 1.35'
- unparsed cell tab_2:row11:col3 = '1.07, 1.35'
- unparsed cell tab_2:row12:col2 = '3,508, 4,321'
- unparsed cell tab_2:row12:col3 = '61.7 (CV%)'
- unparsed cell tab_2:row13:col2 = '0.921, 1.20'
- unparsed cell tab_2:row14:col2 = '1,694, 2,842'
- unparsed cell tab_2:row15:col3 = '856, 967'
- unparsed cell tab_2:row17:col2 = '13.10 0.691, 1.33'
- unparsed cell tab_2:row18:col3 = '0.631, 0.733'
- unparsed cell tab_2:row19:col3 = '0.384, 0.452'
- unparsed cell tab_2:row20:col3 = '44.3, 94.3'
- unparsed cell tab_2:row22:col3 = '0.0618, 0.0900'
- companion parameter table 2 transcribed (0 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.7 (7/10 fields) | 3 |
| `gpt-oss:120b` | not confirmed | 0.154 (2/13 fields) | 11 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central volume of distribution]` | not captured | 4.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v c]` | 4150 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v p]` | 2230 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[central volume of distribution]` | not captured | 4.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | 197 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` | not captured | 197 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a]` | 1.03 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a]` | not captured | 1.03 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | 874 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` | not captured | 874 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v c]` | 4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v p]` | 2 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | palivizumab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | palivizumab | unknown | mismatch |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 197.0 | not captured | not captured | ['Robbie_2012:results_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00821 L/h | not captured | not captured | ['Robbie_2012:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 4.15 L | not captured | not captured | ['Robbie_2012:results_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 2.23 L | not captured | not captured | ['Robbie_2012:results_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_palivizumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Robbie_2012` / `Robbie_2012::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 14:44 UTC</sub>
