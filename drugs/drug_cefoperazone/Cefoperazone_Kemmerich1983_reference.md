<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;cefoperazone&quot;,&quot;href&quot;:&quot;drugs/drug_cefoperazone/&quot;},{&quot;label&quot;:&quot;Kemmerich_1983 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cefoperazone_Soback1989_reference&quot;,&quot;label&quot;:&quot;Soback_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefoperazone/Cefoperazone_Soback1989_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cefoperazone_Zhou2022_reference&quot;,&quot;label&quot;:&quot;Zhou_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cefoperazone/Cefoperazone_Zhou2022_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cefoperazone — `Cefoperazone_Kemmerich1983_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**V has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (fe, fe and V), so that value has no SI equivalent. Extracted — cefotaxime: Vnorm 16.6 liters/70 kg, CLR 17.8 mL/min/70kg, fe 60.5 HPLC; cefoperazone: Vnorm 18.7 liters/70 kg, fe 61 hii mg/liter, CL 96.3 mL/min/70kg, V/F 26.7 L/100kg, V 43.9 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has cefotaxime → desacetyl cefotaxime (metabolism), the second reading none; it also differs on 13 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Kemmerich B et al., Comparative pharmacokinetics of cefoper…, Antimicrobial agents and ch… (1983)
  ·  DOI: [10.1128/AAC.23.3.429](https://doi.org/10.1128/AAC.23.3.429)

<div class="pk-model-meta" hidden drug="cefoperazone" model-id="Cefoperazone_Kemmerich1983_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="cefoperazone" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 8 extracted.

**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vds (liters/70 kg) | `Q352` · Vnorm | 16.6 | liters/70 kg | 0.0166 | [l] / [70kg] | not captured | llm (0.6) | tab_0:row2:col2 | — | not captured |
| Vds (liters/70 kg) | `Q352` · Vnorm | 18.7 | liters/70 kg | 0.0187 | [l] / [70kg] | not captured | llm (0.6) | tab_0:row2:col5 | — | not captured |
| CIB (mUmin per 70 kg) 237.8 ± 124.6 413.1 ± 85.0 CIR (mlminper 70 kg) 126.7 ± 30.9 250.2 ± 80.8 | `Q26` · CLR | 17.8 | mL/min/70kg | 2.9666666666666665e-07 | L/h | not captured | llm (0.6) | tab_0:row3:col2 | — | not captured |
| Recovery in urine (%) | `Q44` · fe | 60.5 | HPLC | not captured | [h] · [plc] | not captured | llm (0.6) | tab_0:row4:col2 | — | not captured |
| Recovery in urine (%) | `Q44` · fe | 61.0 | hii mg/liter | not captured | [[h] · [iimg]] / [l] | not captured | llm (0.6) | tab_0:row4:col5 | — | not captured |
| a mean total clearance of | `Q22` · CL | 96.3 | mL/min/70kg | 1.6049999999999999e-06 | L/h | not captured | boundary (0.8) | Kemmerich_1983:discussion_prose | — | not captured |
| The apparent volume of distribution (Vdss) was | `Q76` · V/F | 26.7 | L/100kg | 0.01869 | L | not captured | boundary (0.8) | Kemmerich_1983:discussion_prose | — | not captured |
| (32) found a volume of distribution of | `Q61` · V | 43.9 | % | not captured | % | not captured | boundary (0.8) | Kemmerich_1983:discussion_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'HPLC' (CLR)
- unit_dimension_unknown: 'HPLC' (fe)
- unit_dimension_unknown: 'hii mg/liter' (fe)
- salvaged Q22 ('a mean total clearance of'=96.3) from results prose — parameter table was unreadable
- salvaged Q76 ('The apparent volume of distribution (Vdss) was'=26.7) from results prose — parameter table was unreadable
- salvaged Q61 ('(32) found a volume of distribution of'=43.9) from results prose — parameter table was unreadable
- implicit units: 'CIB (mUmin per 70 kg) 237.8 ± 124.6 413.1 ± 85.0 CIR (mlminper 70 kg) 126.7 ± 30.9 250.2 ± 80.8' → mL/min/70kg (from the paper text: "The paper text states: 'The total body clearance of 69.1 ml/min per 70 kg calculated from our data...' and 'CIR (mlminpe")
- implicit units: 'a mean total clearance of' → mL/min/70kg (from the paper text: "The text states: 'Using a steady-state model, we found a mean total clearance of 96.3 ml/min per 70 kg (20).' The value ")
- implicit units: 'The apparent volume of distribution (Vdss) was' → L/100kg (from the paper text: "The text states for cefoperazone: 'we found a mean of 17.2 liters/100 kg'. While this specific quote is for cefoperazone")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cefoperazone
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell tab_0:row3:col3 = '86.6 ± 13.4 52.8 ± 9.5'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (4/18 fields) | 14 |

<details><summary>14 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['cefotaxime', 'desacetyl cefotaxime', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[(32) found a volume of distribution of]` | 43.9 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[a mean total clearance of]` | 96.3 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cib (mumin per 70 kg) 237.8 ± 124.6 413.1 ± 85.0 cir (mlminper 70 kg) 126.7 ± 30.9 250.2 ± 80.8].parameter_id` | Q26 | Q22 | mismatch |
| `gpt-oss-120b` | `parameters[cib (mumin per 70 kg) 237.8 ± 124.6 413.1 ± 85.0 cir (mlminper 70 kg) 126.7 ± 30.9 250.2 ± 80.8].value` | 17.8 | 182.1 | mismatch |
| `gpt-oss-120b` | `parameters[recovery in urine]` | not captured | 29.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[recovery in urine]` | not captured | 25.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[recovery in urine].value` | 60.5 | 43.3 | mismatch |
| `gpt-oss-120b` | `parameters[the apparent volume of distribution (vdss) was]` | 26.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vds]` | not captured | 10.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vds].parameter_id` | Q352 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[vds].parameter_id` | Q352 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[vds].value` | 16.6 | 13.7 | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Kemmerich_1983:discussion_prose'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row3:col2'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row2:col2'] |
| C5_dimension_Q352 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row2:col5'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Kemmerich_1983:discussion_prose'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | % | not captured | not captured | ['Kemmerich_1983:discussion_prose'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.78 L/h | not captured | not captured | ['Kemmerich_1983:discussion_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 18.7 L | not captured | not captured | ['Kemmerich_1983:discussion_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_cefoperazone/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Kemmerich_1983` / `Kemmerich_1983::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:21 UTC</sub>
