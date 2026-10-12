<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;peficitinib&quot;,&quot;href&quot;:&quot;drugs/drug_peficitinib/&quot;},{&quot;label&quot;:&quot;Toyoshima_2021 \u00b7 estimate&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# peficitinib — `Peficitinib_Toyoshima2021_estimate`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.118). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Kabs has no unit; the clearance plausibility check could not be computed.**

Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — peficitinib: CL 91.7 L/h, V1 280 L, V2 122 L, Q 10.2 L/h, kabs 5.83 L/h, tlag 0.132 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has peficitinib, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Toyoshima J et al., Population pharmacokinetic analysis of…, British journal of clinical… (2021)
  ·  DOI: [10.1111/bcp.14605](https://doi.org/10.1111/bcp.14605)

<div class="pk-model-meta" hidden drug="peficitinib" model-id="Peficitinib_Toyoshima2021_estimate" status="needs_review" stale="false" population="patients with rheumatoid arthritis" measured-compound="peficitinib" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Structural PK (t) | `Q900` · equation variable | 91.7 | t | not captured | [t] | not captured | llm (0.6) | Toyoshima_2021_table_p6_1:row0:col2 | — | not captured |
| CL (L/h) | `Q22` · CL | 91.7 | L/h | 2.5472222222222224e-05 | L/h | not captured | exact (1.0) | Toyoshima_2021:discussion_prose | — | not captured |
| Vc (L) | `Q63` · V1 | 280 | L | 0.28 | L | not captured | exact (1.0) | Toyoshima_2021:discussion_prose | — | not captured |
| Vp (L) | `Q64` · V2 | 122 | L | 0.122 | L | not captured | exact (1.0) | Toyoshima_2021:discussion_prose | — | not captured |
| Q (L/h) | `Q30` · Q | 10.2 | L/h | 2.833333333333333e-06 | L/h | not captured | exact (1.0) | Toyoshima_2021:discussion_prose | — | not captured |
| Ka (L/h) | `Q49` · kabs | 5.83 | L/h | not captured | L/h | not captured | exact (1.0) | Toyoshima_2021:discussion_prose | — | not captured |
| ALAG (h) | `Q83` · tlag | 0.132 | h | 475.20000000000005 | h | not captured | exact (1.0) | Toyoshima_2021:discussion_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 'Covariate' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- salvaged Q22 ('CL (L/h)'=91.7) from results prose — parameter table was unreadable
- salvaged Q63 ('Vc (L)'=280) from results prose — parameter table was unreadable
- salvaged Q64 ('Vp (L)'=122) from results prose — parameter table was unreadable
- salvaged Q30 ('Q (L/h)'=10.2) from results prose — parameter table was unreadable
- salvaged Q49 ('Ka (L/h)'=5.83) from results prose — parameter table was unreadable
- salvaged Q83 ('ALAG (h)'=0.132) from results prose — parameter table was unreadable
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q22 (CL (L/h)); Q63 (Vc (L)); Q64 (Vp (L)); Q30 (Q (L/h))
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=peficitinib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'estimate' subgroup of Toyoshima_2021 (paper reports 2 populations: estimate, median)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Toyoshima_2021_table_p6_1:row11:col4 = '49.6 C'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.118 (2/17 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[alag]` | 0.132 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[alag]` | not captured | 0.132 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 91.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | not captured | 91.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 5.83 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | not captured | 5.83 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | 10.2 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` | not captured | 10.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[structural pk]` | 91.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | 280 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc]` | not captured | 280 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 122 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | not captured | 122 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | peficitinib | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | peficitinib | unknown | mismatch |

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
| C5_unit_missing_Q49 | fail | 1 / [time] | L/h | not captured | not captured | ['Toyoshima_2021:discussion_prose'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 91.7 | not captured | not captured | ['Toyoshima_2021:discussion_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 91.7 L/h | not captured | not captured | ['Toyoshima_2021:discussion_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 280 L | not captured | not captured | ['Toyoshima_2021:discussion_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 122 L | not captured | not captured | ['Toyoshima_2021:discussion_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_peficitinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Toyoshima_2021` / `Toyoshima_2021::estimate`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:07 UTC</sub>
