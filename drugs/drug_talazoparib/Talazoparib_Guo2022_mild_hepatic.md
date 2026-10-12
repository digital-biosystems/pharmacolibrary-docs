<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;talazoparib&quot;,&quot;href&quot;:&quot;drugs/drug_talazoparib/&quot;},{&quot;label&quot;:&quot;Guo_2022 \u00b7 mild_hepatic&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# talazoparib — `Talazoparib_Guo2022_mild_hepatic`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.286). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Qb and CL/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL/F), so that value has no SI equivalent. Extracted — talazoparib: Qb 1, CL/F 44.7 %, CL 16.6 L/h, V2/F 189 L, kabs 5.35 h À1, Q/F 52.9 L/h, tlag 0.422 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of -θq/f: this record has 52.897, the second reading none; it also differs on 9 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Guo C et al., Evaluation of pharmacokinetics and safe…, British journal of clinical… (2022)
  ·  DOI: [10.1111/bcp.15294](https://doi.org/10.1111/bcp.15294)

<div class="pk-model-meta" hidden drug="talazoparib" model-id="Talazoparib_Guo2022_mild_hepatic" status="needs_review" stale="false" population="patients with advanced solid tumours and varying degrees of hepatic impairment" measured-compound="talazoparib" parameterization="apparent" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** CL/F, Q/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Other | `Q900` · equation variable | 0 | not captured | not captured | not captured | not captured | llm (0.6) | tab_0:row11:col2 | — | not captured |
| Bile duct | `Q54` · Qb | 1 | not captured | not captured | not captured | not captured | llm (0.6) | tab_0:row19:col2 | — | not captured |
| Interindividual variance of CL/F in model #3 | `Q27` · CL/F | 44.7 | % | not captured | % | not captured | boundary (0.8) | Guo_2022:results_prose | — | not captured |
| CL u /F (L/h) | `Q22` · CL | 16.57 | L/h | 4.602777777777778e-06 | L/h | not captured | boundary (0.8) | Guo_2022:other_prose | — | not captured |
| -θV2/F (L) | `Q82` · V2/F | 188.816 | L | 0.188816 | L | not captured | boundary (0.8) | Guo_2022:other_prose | — | not captured |
| θ ka (h À1 ) | `Q49` · kabs | 5.351 | h À1 | 0.0014863888888888889 | 1/h | not captured | boundary (0.8) | Guo_2022:other_prose | — | not captured |
| -θQ/F (L/h) | `Q69` · Q/F | 52.897 | L/h | 1.4693611111111112e-05 | L/h | not captured | boundary (0.8) | Guo_2022:other_prose | — | not captured |
| -θTLAG (h) | `Q83` · tlag | 0.422 | h | 1519.2 | h | not captured | boundary (0.8) | Guo_2022:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Mean (SD)' — extend the ontology if this is a real PK parameter (source ['tab_0:row3:col2'])
- dropped unlinked row (NIL): 'Male' — extend the ontology if this is a real PK parameter (source ['tab_0:row6:col2'])
- dropped unlinked row (NIL): 'Female' — extend the ontology if this is a real PK parameter (source ['tab_0:row7:col2'])
- dropped unlinked row (NIL): 'White' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col2'])
- dropped unlinked row (NIL): 'Asian' — extend the ontology if this is a real PK parameter (source ['tab_0:row10:col2'])
- dropped unlinked row (NIL): 'Breast' — extend the ontology if this is a real PK parameter (source ['tab_0:row15:col2'])
- dropped unlinked row (NIL): 'Colorectal' — extend the ontology if this is a real PK parameter (source ['tab_0:row16:col2'])
- dropped unlinked row (NIL): 'Liver' — extend the ontology if this is a real PK parameter (source ['tab_0:row17:col2'])
- dropped unlinked row (NIL): 'Pancreas' — extend the ontology if this is a real PK parameter (source ['tab_0:row18:col2'])
- dropped unlinked row (NIL): 'Other a' — extend the ontology if this is a real PK parameter (source ['tab_0:row20:col2'])
- dropped duplicate Q900 ('0', value '0') — already have one for this compound
- dropped duplicate Q900 ('1', value '9') — already have one for this compound
- dropped unlinked row (NIL): '2' — extend the ontology if this is a real PK parameter (source ['tab_0:row24:col2'])
- salvaged Q27 ('Interindividual variance of CL/F in model #3'=44.7) from results prose — parameter table was unreadable
- salvaged Q22 ('CL u /F (L/h)'=16.57) from results prose — parameter table was unreadable
- salvaged Q82 ('-θV2/F (L)'=188.816) from results prose — parameter table was unreadable
- salvaged Q49 ('θ ka (h À1 )'=5.351) from results prose — parameter table was unreadable
- salvaged Q69 ('-θQ/F (L/h)'=52.897) from results prose — parameter table was unreadable
- salvaged Q83 ('-θTLAG (h)'=0.422) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=talazoparib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'mild hepatic' subgroup of Guo_2022 (paper reports 6 populations: all patients, estimate, mild hepatic, moderate hepatic, normal hepatic, severe hepatic)

**Extraction notes:**
- companion parameter table S6 transcribed (56 record(s))
- LLM selected parameter table(s) S6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.286 (4/14 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[-θq/f]` | 52.897 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[-θtlag]` | 0.422 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[-θv2/f]` | 188.816 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[0]` | not captured | 0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bile duct]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl u /f]` | 16.57 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[interindividual variance of cl/f in model #3]` | 44.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[other]` | 0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ ka]` | 5.351 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 7 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | % | not captured | not captured | ['Guo_2022:results_prose'] |
| C5_unit_missing_Q54 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row19:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 16.6 L/h | not captured | not captured | ['Guo_2022:other_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 189 L | not captured | not captured | ['Guo_2022:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_talazoparib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Guo_2022` / `Guo_2022::mild_hepatic`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-06 21:44 UTC</sub>
