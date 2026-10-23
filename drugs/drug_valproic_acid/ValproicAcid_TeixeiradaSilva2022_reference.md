<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;valproic acid&quot;,&quot;href&quot;:&quot;drugs/drug_valproic_acid/&quot;},{&quot;label&quot;:&quot;Teixeira-da-Silva_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ValproicAcid_Huo2025_reference&quot;,&quot;label&quot;:&quot;Huo_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_valproic_acid/ValproicAcid_Huo2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ValproicAcid_Zang2022_reference&quot;,&quot;label&quot;:&quot;Zang_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_valproic_acid/ValproicAcid_Zang2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# valproic acid — `ValproicAcid_TeixeiradaSilva2022_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="valproic acid" model-id="ValproicAcid_TeixeiradaSilva2022_reference" status="needs_review" stale="false" population="pediatric and adult Caucasian patients" measured-compound="valproic acid" parameterization="apparent" topology="1C"></div>

## Citation
Teixeira-da-Silva P, Pérez-Blanco JS, Santos-Buelga D, Otero MJ, García MJ. Population Pharmacokinetics of Valproic Acid in Pediatric and Adult Caucasian Patients. Pharmaceutics 14(4) (2022).
  ·  DOI: [10.3390/pharmaceutics14040811](https://doi.org/10.3390/pharmaceutics14040811)

## Population and dosing

**Population:** pediatric and adult Caucasian patients · condition epilepsy · age group mixed · n = ? 1204 patients included.

**Dosing:** 200, 300, 500 mg, oral, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| CL/F | CL/F | 0.646 | L/h | 26.8 (None% RSE) |
| V/F | V/F | 68.8 | L |  |
| Ka | kabs | 1.93 | h−1 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Huo_2025) cannot stand in for this paper's evidence. Extracted — valproic acid: CL/F 0.646 L/h, V/F 68.8 L, kabs 1.93 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has valproic acid, the second reading valproic_acid; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| CL/F | `Q27` · CL/F | 0.646 | L/h | 1.794e-07 | m3/s | L/h | exact (1) | pharmaceutics-14-00811-t002:row3:col1, pharmaceutics-14-00811-t002:row3:col2, pharmaceutics-14-00811-t002:row3:col4, pharmaceutics-14-00811-t002:row3:col5, pharmaceutics-14-00811-t002:row3:col7, pharmaceutics-14-00811-t002:row3:col8 | 26.8 (None% RSE) |
| V/F | `Q76` · V/F | 68.8 | L | 0.0688 | m3 | L | review_gapfill (0.7) | Huo_2025:review |  |
| Ka | `Q49` · kabs | 1.93 | h−1 | 0.0005361 | 1/s | 1/h | review_gapfill (0.7) | Huo_2025:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'Development Dataset' (CL/F)
- dropped unlinked row (NIL): 'AGE' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-00811-t002:row4:col1', 'pharmaceutics-14-00811-t002:row4:col2', 'pharmaceutics-14-00811-t002:row4:col4', 'pharmaceutics-14-00811-t002:row4:col5', 'pharmaceutics-14-00811-t002:row4:col7', 'pharmaceutics-14-00811-t002:row4:col8'])
- dropped unlinked row (NIL): 'CBZ' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-00811-t002:row5:col1', 'pharmaceutics-14-00811-t002:row5:col2', 'pharmaceutics-14-00811-t002:row5:col4', 'pharmaceutics-14-00811-t002:row5:col5', 'pharmaceutics-14-00811-t002:row5:col7', 'pharmaceutics-14-00811-t002:row5:col8'])
- dropped unlinked row (NIL): 'PB' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-00811-t002:row6:col1', 'pharmaceutics-14-00811-t002:row6:col2', 'pharmaceutics-14-00811-t002:row6:col4', 'pharmaceutics-14-00811-t002:row6:col5', 'pharmaceutics-14-00811-t002:row6:col7', 'pharmaceutics-14-00811-t002:row6:col8'])
- dropped unlinked row (NIL): 'PHT' — extend the ontology if this is a real PK parameter (source ['pharmaceutics-14-00811-t002:row7:col1', 'pharmaceutics-14-00811-t002:row7:col2', 'pharmaceutics-14-00811-t002:row7:col4', 'pharmaceutics-14-00811-t002:row7:col5', 'pharmaceutics-14-00811-t002:row7:col7', 'pharmaceutics-14-00811-t002:row7:col8'])
- NIL: refused to back-fill base 'kabs' from footnote/prose loose number 2.64 (source ['pharmaceutics-14-00811-t002:footnote', 'pharmaceutics-14-00811-t002:footnote', 'pharmaceutics-14-00811-t002:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'V/F' from footnote/prose loose number 14 (source ['pharmaceutics-14-00811-t002:footnote']); the table cell was unparseable — needs review
- table mostly unlinked (4/5 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- implicit units: 'CL/F' → L/h (from the paper text: 'The paper text explicitly states: "The estimated CL/F of VPA for a typical patient with a median TBW of 70 kg and absenc')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=valproic acid
- status held at route_to_review — not promoted
- gap-filled Q76 (V/F) from Huo_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Huo_2025's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.222 (2/9 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[age]` |  | -0.034 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f].covariate_forms` | [] | ['power'] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f].value` | 0.646 | 0.631 | mismatch |
| `gpt-oss-120b` | `parameters[ka]` | 1.93 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | 68.8 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | valproic acid | valproic_acid | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | valproic acid | valproic_acid | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | fail |  |  |  |  |  |
| C2_base_Q27 | pass | 0.646 | 0.646 | 1 | 0.05 | footnote reference category |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  |  |  | ['pharmaceutics-14-00811-t002:row3:col1', 'pharmaceutics-14-00811-t002:row3:col2', 'pharmaceutics-14-00811-t002:row3:col4', 'pharmaceutics-14-00811-t002:row3:col5', 'pharmaceutics-14-00811-t002:row3:col7', 'pharmaceutics-14-00811-t002:row3:col8'] |
| C5_dimension_Q49 | pass | 1 / [time] |  |  |  | ['Huo_2025:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  |  |  | ['Huo_2025:review'] |
| C7_apparent_coherence | pass |  |  |  |  |  |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.646 L/h |  |  | ['pharmaceutics-14-00811-t002:row3:col1', 'pharmaceutics-14-00811-t002:row3:col2', 'pharmaceutics-14-00811-t002:row3:col4', 'pharmaceutics-14-00811-t002:row3:col5', 'pharmaceutics-14-00811-t002:row3:col7', 'pharmaceutics-14-00811-t002:row3:col8'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 68.8 L |  |  | ['Huo_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvalproic_acid%5D%20ValproicAcid_TeixeiradaSilva2022_reference&body=Drug%3A%20valproic_acid%0ARecord%3A%20ValproicAcid_TeixeiradaSilva2022_reference%0APaper%3A%20Teixeira-da-Silva_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_valproic_acid/ValproicAcid_TeixeiradaSilva2022_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:54 UTC</sub>
