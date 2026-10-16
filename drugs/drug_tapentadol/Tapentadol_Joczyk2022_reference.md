<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;tapentadol&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/&quot;},{&quot;label&quot;:&quot;Jo\u0144czyk_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tapentadol_Khalil2020_final&quot;,&quot;label&quot;:&quot;Khalil_2020_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Khalil2020_final.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tapentadol_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tapentadol/Tapentadol_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tapentadol — `Tapentadol_Joczyk2022_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.368), gpt-oss:120b (not confirmed, agreement 0.688). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**AUCt and AUCSS have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax, Cmin, AUCt and AUCSS), so that value has no SI equivalent. Extracted — tapentadol: Cmax 159 ng/mL, Cmin 22.2 ng/mL, AUCt 231 h•ng/mL, AUCSS 292 h•ng/mL, CL 93.7 L/h, CL/F 272 L/h, V/F 1.2e+03 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tapentadol, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:32:00.558528+00:00) predates the upstream re-run (2026-10-07 05:41:34.680254+00:00). Current validate status: `needs_review`.

## Citation
Jończyk R et al., Multiple Dose Pharmacokinetics of Tapen…, Journal of pain research (2022)
  ·  DOI: [10.2147/JPR.S364902](https://doi.org/10.2147/JPR.S364902)

<div class="pk-model-meta" hidden drug="tapentadol" model-id="Tapentadol_Joczyk2022_reference" status="needs_review" stale="true" population="children aged 2 to &lt;7 years with acute pain" measured-compound="tapentadol" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Cmax,sd (ng/mL) | `Q32` · Cmax | 159.3 | ng/mL | not captured | [ng] / [ml] | 51.6 | llm_confirmed (0.6) | t0003:row0:col3, t0003:row0:col4, t0003:row0:col5, t0003:row0:col6, t0003:row0:col8, t0003:row0:col9, t0003:row0:col10, t0003:row0:col11, t0003:row0:col13, t0003:row0:col14, t0003:row0:col15, t0003:row0:col16 | — | not captured |
| Cmin,sd (ng/mL) | `Q36` · Cmin | 22.2 | ng/mL | not captured | [ng] / [ml] | 72.9 | llm_confirmed (0.6) | t0003:row1:col3, t0003:row1:col4, t0003:row1:col5, t0003:row1:col6, t0003:row1:col8, t0003:row1:col9, t0003:row1:col10, t0003:row1:col11, t0003:row1:col13, t0003:row1:col14, t0003:row1:col15, t0003:row1:col16 | — | not captured |
| AUCτ,sd (h•ng/mL) | `Q19` · AUCt | 230.7 | h•ng/mL | not captured | [[h] · [ng]] / [ml] | 34.9 | llm_confirmed (0.6) | t0003:row2:col3, t0003:row2:col4, t0003:row2:col5, t0003:row2:col6, t0003:row2:col8, t0003:row2:col9, t0003:row2:col10, t0003:row2:col11, t0003:row2:col13, t0003:row2:col14, t0003:row2:col15, t0003:row2:col16 | — | not captured |
| Tapentadol mature CL | `Q22` · CL | 93.7 | L/h | 2.602777777777778e-05 | L/h | not captured | boundary (0.8) | Jończyk_2022:other_prose | — | not captured |
| CL/F | `Q27` · CL/F | 272 | L/h | 7.555555555555556e-05 | L/h | not captured | exact (1.0) | Jończyk_2022:other_prose | — | not captured |
| V/F | `Q76` · V/F | 1203 | L | 1.203 | L | not captured | exact (1.0) | Jończyk_2022:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'h•ng/mL' (AUCt)
- dropped duplicate Q32 ('Cmax,ss (ng/mL)', value '201.2') — already have one for this compound
- dropped duplicate Q36 ('Cmin,ss (ng/mL)', value '29.3') — already have one for this compound
- dropped duplicate Q19 ('AUCτ,ss (h•ng/mL)', value '292.3') — already have one for this compound
- dropped unlinked row (NIL): 'AF' — extend the ontology if this is a real PK parameter (source ['t0003:row6:col3', 't0003:row6:col4', 't0003:row6:col5', 't0003:row6:col6', 't0003:row6:col8', 't0003:row6:col9', 't0003:row6:col10', 't0003:row6:col11', 't0003:row6:col13', 't0003:row6:col14', 't0003:row6:col15', 't0003:row6:col16'])
- salvaged Q22 ('Tapentadol mature CL'=93.7) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F'=272) from results prose — parameter table was unreadable
- salvaged Q76 ('V/F'=1203) from results prose — parameter table was unreadable
- implicit units: 'AUCτ,sd (h•ng/mL)' — the LLM proposed 'h•ng/mL', whose dimension does not fit Q19; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=tapentadol
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0, 0]
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 0 linked by role
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- transposed table t0003: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.368 (7/19 fields) | 12 |
| `gpt-oss:120b` | not confirmed | 0.688 (11/16 fields) | 5 |

<details><summary>17 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tapentadol', 'tapentadol-o-glucuronide', 'metabolism'], ['tapentadol', 'tapentadol-o-sulfate', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[af]` | not captured | 1.28 | only_one_extracted |
| `gpt-oss-120b` | `parameters[aucτ,sd].parameter_id` | Q19 | Q88 | mismatch |
| `gpt-oss-120b` | `parameters[aucτ,ss]` | not captured | 292.3 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 272 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | 272 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tapentadol mature cl]` | 93.7 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tapentadol mature cl]` | not captured | 93.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 1203 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | 1203 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tapentadol | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | tapentadol | unknown | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[af]` | not captured | 1.28 | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl/f]` | 272 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tapentadol mature cl]` | 93.7 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[v/f]` | 1203 | not captured | only_one_extracted |

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
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['t0003:row0:col3', 't0003:row0:col4', 't0003:row0:col5', 't0003:row0:col6', 't0003:row0:col8', 't0003:row0:col9', 't0003:row0:col10', 't0003:row0:col11', 't0003:row0:col13', 't0003:row0:col14', 't0003:row0:col15', 't0003:row0:col16'] |
| C5_dimension_Q36 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['t0003:row1:col3', 't0003:row1:col4', 't0003:row1:col5', 't0003:row1:col6', 't0003:row1:col8', 't0003:row1:col9', 't0003:row1:col10', 't0003:row1:col11', 't0003:row1:col13', 't0003:row1:col14', 't0003:row1:col15', 't0003:row1:col16'] |
| C5_unit_missing_Q19 | fail | [mass] * [time] / [length] ** 3 | h•ng/mL | not captured | not captured | ['t0003:row2:col3', 't0003:row2:col4', 't0003:row2:col5', 't0003:row2:col6', 't0003:row2:col8', 't0003:row2:col9', 't0003:row2:col10', 't0003:row2:col11', 't0003:row2:col13', 't0003:row2:col14', 't0003:row2:col15', 't0003:row2:col16'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 93.7 L/h | not captured | not captured | ['Jończyk_2022:other_prose'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 272 L/h | not captured | not captured | ['Jończyk_2022:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 1.2e+03 L | not captured | not captured | ['Jończyk_2022:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_tapentadol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Jończyk_2022` / `Jończyk_2022::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:41 UTC</sub>
