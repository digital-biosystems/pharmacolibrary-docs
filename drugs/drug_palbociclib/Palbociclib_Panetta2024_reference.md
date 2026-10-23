<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;palbociclib&quot;,&quot;href&quot;:&quot;drugs/drug_palbociclib/&quot;},{&quot;label&quot;:&quot;Panetta_2024 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# palbociclib — `Palbociclib_Panetta2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> V/F and CL/F have no unit.

<div class="pk-model-meta" hidden drug="palbociclib" model-id="Palbociclib_Panetta2024_reference" status="needs_review" stale="false" population="children and young adults with recurrent, progressive, or refractory brain tumors" measured-compound="palbociclib" parameterization="apparent" topology="1C"></div>

## Citation
Panetta JC, Selvo NS, Mater DV, Stewart CF. Population Pharmacokinetic and Pharmacodynamic Study of Palbociclib in Children and Young Adults with Recurrent, Progressive, or Refractory Brain Tumors. Pharmaceutics 16(12) (2024).
  ·  DOI: [10.3390/pharmaceutics16121528](https://doi.org/10.3390/pharmaceutics16121528)

## Population and dosing

**Population:** children and young adults with recurrent, progressive, or refractory brain tumors · condition recurrent, progressive, or refractory brain tumors · age group mixed · n = 33.

**Dosing:** 50, 75, 95 mg/m2, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Absorption lag time Tlag (h) | tlag | 0.8 | h | 12.3 | 0.68 (14.4% RSE) |
| Absorption rate constant ka (/h) | kabs | 0.48 | /h | 17.9 | 0.88 (16% RSE) |
| Volume V/F (L/m2) | V/F | 664.5 | L/m2 | 4.1 |  |
| Clearance CL/F (L/h/m2) | CL/F | 36.8 | L/h/m2 | 5.8 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--green" title="re-read by qwen3.8-27b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**V/F and CL/F have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (V/F and CL/F), so that value has no SI equivalent. Extracted — palbociclib: tlag 0.8 h, kabs 0.48 /h, V/F 664 L/m2, CL/F 36.8 L/h/m2.

Independently confirmed by `qwen3.8-27b`.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Absorption lag time Tlag (h) | `Q83` · tlag | 0.8 | h | 2880 | s | h | 12.3 | llm_confirmed (0.6) | pharmaceutics-16-01528-t002:row3:col1, pharmaceutics-16-01528-t002:row3:col2, pharmaceutics-16-01528-t002:row3:col3 | 0.68 (14.4% RSE) |
| Absorption rate constant ka (/h) | `Q49` · kabs | 0.48 | /h | 0.0001333 | 1/s | 1/h | 17.9 | llm_confirmed (0.6) | pharmaceutics-16-01528-t002:row4:col1, pharmaceutics-16-01528-t002:row4:col2, pharmaceutics-16-01528-t002:row4:col3 | 0.88 (16% RSE) |
| Volume V/F (L/m2) | `Q76` · V/F | 664.5 | L/m2 |  |  | l/m2 | 4.1 | llm_corrected (0.6) | pharmaceutics-16-01528-t002:row5:col1, pharmaceutics-16-01528-t002:row5:col2, pharmaceutics-16-01528-t002:row5:col3 |  |
| Clearance CL/F (L/h/m2) | `Q27` · CL/F | 36.8 | L/h/m2 |  |  | l/(h·m2) | 5.8 | llm_corrected (0.6) | pharmaceutics-16-01528-t002:row6:col1, pharmaceutics-16-01528-t002:row6:col2, pharmaceutics-16-01528-t002:row6:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'Absorption lag time Tlag' routed out of structural estimates ('Inter-patient variabilities (IIV) *')
- table section iiv: 'Absorption rate constant ka' routed out of structural estimates ('Inter-patient variabilities (IIV) *')
- table section iiv: 'Volume V/F' routed out of structural estimates ('Inter-patient variabilities (IIV) *')
- table section iiv: 'Clearance CL/F' routed out of structural estimates ('Inter-patient variabilities (IIV) *')
- table section iov: 'Clearance CL/F' routed out of structural estimates ('Inter-occasion variabilities (IOV)')
- table section iov: 'Residual proportional error' routed out of structural estimates ('Inter-occasion variabilities (IOV)')
- table section iov: '2 × Log-likelihood value (OFV)' routed out of structural estimates ('Inter-occasion variabilities (IOV)')
- column 'base model est.(rse%) *' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- unit_dimension_unknown: 'L/m2' (V/F)
- unit_dimension_unknown: 'L/h/m2' (CL/F)
- routed 'AST on CL/F' → Q314 (omega_cov) to covariance — variability estimate, not a structural parameter
- implicit units: 'Volume V/F (L/m2)' — the LLM proposed 'L/m2', whose dimension does not fit Q76; left unset
- implicit units: 'Clearance CL/F (L/h/m2)' — the LLM proposed 'L/h/m2', whose dimension does not fit Q27; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=palbociclib
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pharmaceutics-16-01528-t002:row3:col4 = '0.65; 0.97'
- unparsed cell pharmaceutics-16-01528-t002:row4:col4 = '0.39; 0.70'
- unparsed cell pharmaceutics-16-01528-t002:row5:col4 = '617.1; 757.1'
- unparsed cell pharmaceutics-16-01528-t002:row6:col4 = '30.5; 37.9'
- unparsed cell pharmaceutics-16-01528-t002:row8:col4 = '−0.12; −0.36'
- unparsed cell pharmaceutics-16-01528-t002:row10:col4 = '0.54; 0.88'
- unparsed cell pharmaceutics-16-01528-t002:row11:col4 = '0.34; 1.19'
- unparsed cell pharmaceutics-16-01528-t002:row12:col4 = '0.02; 0.26'
- unparsed cell pharmaceutics-16-01528-t002:row13:col4 = '0.15; 0.30'
- unparsed cell pharmaceutics-16-01528-t002:row15:col4 = '0.09; 0.18'
- unparsed cell pharmaceutics-16-01528-t002:row16:col4 = '0.26; 0.39'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--green">cross-checked ✓</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | confirmed | 1.0 (12/12 fields) | none |

_All readers agree on the compared fields of this record._

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['pharmaceutics-16-01528-t002:row4:col1', 'pharmaceutics-16-01528-t002:row4:col2', 'pharmaceutics-16-01528-t002:row4:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['pharmaceutics-16-01528-t002:row3:col1', 'pharmaceutics-16-01528-t002:row3:col2', 'pharmaceutics-16-01528-t002:row3:col3'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | L/h/m2 | ['pharmaceutics-16-01528-t002:row6:col1', 'pharmaceutics-16-01528-t002:row6:col2', 'pharmaceutics-16-01528-t002:row6:col3'] |
| C5_unit_missing_Q76 | fail | [length] ** 3 | L/m2 | ['pharmaceutics-16-01528-t002:row5:col1', 'pharmaceutics-16-01528-t002:row5:col2', 'pharmaceutics-16-01528-t002:row5:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpalbociclib%5D%20Palbociclib_Panetta2024_reference&body=Drug%3A%20palbociclib%0ARecord%3A%20Palbociclib_Panetta2024_reference%0APaper%3A%20Panetta_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_palbociclib/Palbociclib_Panetta2024_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 04:09 UTC</sub>
