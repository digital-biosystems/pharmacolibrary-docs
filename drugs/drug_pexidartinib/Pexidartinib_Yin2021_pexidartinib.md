<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;pexidartinib&quot;,&quot;href&quot;:&quot;drugs/drug_pexidartinib/&quot;},{&quot;label&quot;:&quot;Yin_2021 \u00b7 pexidartinib&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# pexidartinib — `Pexidartinib_Yin2021_pexidartinib`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.267). The first reading is what the record holds.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (Cmax), so that value has no SI equivalent. Extracted — pexidartinib: Cmax 3.52e+03 ng/mL, AUC ratio 3.6, CL/F 5.6 L/h.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of (asian)•exp: this record has none, the second reading 1.27; it also differs on 10 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Yin O et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021)
  ·  DOI: [10.1002/jcph.1753](https://doi.org/10.1002/jcph.1753)

<div class="pk-model-meta" hidden drug="pexidartinib" model-id="Pexidartinib_Yin2021_pexidartinib" status="needs_review" stale="false" population="healthy subjects and patients with TGCT or other solid tumors" measured-compound="pexidartinib" parameterization="apparent" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 3 extracted.

**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax on day 1, ng/mL | `Q32` · Cmax | 3524 | ng/mL | not captured | [ng] / [ml] | not captured | llm_confirmed (0.6) | Yin_2021_table_4:row2:col1 | — | not captured |
| Accumulation ratio a | `Q21` · AUC ratio | 3.6 | not captured | not captured | not captured | not captured | llm (0.6) | Yin_2021_table_4:row4:col1 | — | not captured |
| CL/F, L/h | `Q27` · CL/F | 5.6 | L/h | 1.5555555555555556e-06 | [l] / [h] | not captured | exact (1.0) | Yin_2021_table_4:row5:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('Cmax at steady state, ng/mL', value '8625') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pexidartinib
- template fit: none — only the metabolite is modelled — no parent compartment
- population split: 'pexidartinib' subgroup of Yin_2021 (paper reports 3 populations: estimate a, pexidartinib, zaad)
- row roles (LLM): model_class=compartmental; 28/28 row label(s) assigned, 3 linked by role; re-tagged pexidartinib→parent ×28
- molar mass: no plausible PubChem entry for 'ZAAD' ('pexidartinib glucuronide') — left in mass units
- molar mass: none found for 'ZAAD' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell jcph1753-tbl-0003:row1:col2 = '5.43 to 6.27'
- unparsed cell jcph1753-tbl-0003:row3:col2 = '−0.402 to 0.214'
- unparsed cell jcph1753-tbl-0003:row4:col2 = '1.05 to 1.54'
- unparsed cell jcph1753-tbl-0003:row5:col2 = '−0.180 to 0.322'
- unparsed cell jcph1753-tbl-0003:row6:col2 = '0.183 to 0.306'
- unparsed cell jcph1753-tbl-0003:row7:col2 = '1.16 to 1.36'
- unparsed cell jcph1753-tbl-0003:row8:col2 = '0.808 to 0.934'
- unparsed cell jcph1753-tbl-0003:row13:col2 = '17.9 to 23.8'
- unparsed cell jcph1753-tbl-0003:row16:col2 = '0.385 to 0.390'
- unparsed cell jcph1753-tbl-0003:row17:col2 = '1.20 to 1.25'
- unparsed cell jcph1753-tbl-0003:row19:col2 = '0.0633 to 0.109'
- unparsed cell jcph1753-tbl-0003:row20:col2 = '0.0425 to 0.112'
- unparsed cell jcph1753-tbl-0003:row21:col2 = '0.207 to 0.341'
- unparsed cell jcph1753-tbl-0003:row22:col2 = '−0.0178 to 0.0476'
- unparsed cell jcph1753-tbl-0003:row23:col2 = '−0.105 to 0.0111'
- unparsed cell jcph1753-tbl-0003:row24:col2 = '0.152 to 0.275'
- unparsed cell jcph1753-tbl-0003:row25:col2 = '0.271 to 0.541'
- unparsed cell jcph1753-tbl-0003:row26:col2 = '0.648 to 1.98'
- unparsed cell jcph1753-tbl-0003:row27:col2 = '0.0592 to 0.143'
- unparsed cell jcph1753-tbl-0003:row28:col2 = '1.26 to 2.40'
- unparsed cell jcph1753-tbl-0003:row29:col2 = '0.0560 to 0.0743'
- unparsed cell jcph1753-tbl-0003:row30:col2 = '0.0839 to 0.0927'
- unparsed cell jcph1753-tbl-0003:row31:col2 = '0.0377 to 0.0391'
- unparsed cell Yin_2021_table_4:row3:col2 = '13 564 (6095)'
- companion parameter table 4 transcribed (7 record(s))
- LLM selected parameter table(s) 3, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.267 (4/15 fields) | 11 |

<details><summary>11 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[(asian)•exp]` | not captured | 1.27 | only_one_extracted |
| `qwen3.8-27b` | `parameters[accumulation ratio a]` | 3.6 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[alag1(exp(θ6))]` | not captured | 0.387 | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f (exp(θ1))]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cl/f]` | 5.6 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[cmax on day 1]` | 3524 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[d1(exp(θ7))]` | not captured | 1.22 | only_one_extracted |
| `qwen3.8-27b` | `parameters[q/f(exp(θ4))]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[ω3.2 covvp/f-vc/f]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[ω3.3 vp/f]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[ω5.5 ka]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C2_base_Q27 | pass | 5.6 | 5.83 | 1.0411 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Yin_2021_table_4:row5:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Yin_2021_table_4:row2:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.6 L/h | not captured | not captured | ['Yin_2021_table_4:row5:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pexidartinib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Yin_2021` / `Yin_2021::pexidartinib`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:19 UTC</sub>
