<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S02A&quot;,&quot;href&quot;:&quot;atc/S02A.md&quot;},{&quot;label&quot;:&quot;boric acid&quot;,&quot;href&quot;:&quot;drugs/drug_boric_acid/&quot;},{&quot;label&quot;:&quot;Usuda_1998 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BoricAcid_Jansen1984_reference&quot;,&quot;label&quot;:&quot;Jansen_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_boric_acid/BoricAcid_Jansen1984_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# boric acid — `BoricAcid_Usuda1998_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Syvänen_2012) cannot stand in for this paper's evidence. Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is boric acid's own; they describe boron (boric acid). Extracted — boron (boric acid): t1/2α 0.608 h, t1/2z 4.64 h, V 142 L, CLnorm 0.359 L/h, Cmax 2.13 mg/l, tmax 1.76 h, CL 32.1 mL/min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has boron (boric acid), the second reading boric_acid; it also differs on 17 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `sodium tetraborate`, measured `boron (boric acid)`.

## Citation
Usuda K et al., Serum and urinary boron levels in rats…, Archives of toxicology (1998)
  ·  DOI: [10.1007/s002040050530](https://doi.org/10.1007/s002040050530)

<div class="pk-model-meta" hidden drug="boric acid" model-id="BoricAcid_Usuda1998_reference" status="needs_review" stale="false" population="rats" measured-compound="boron (boric acid)" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 7 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| r | `Q900` · equation variable | 0.999 | not captured | not captured | not captured | not captured | llm (0.6) | Usuda_1998:abstract | — | not captured |
| t1/2a | `Q59` · t1/2α | 0.608 | h | 2188.7999999999997 | [h] | not captured | llm_corrected (0.6) | Usuda_1998:abstract | — | not captured |
| t1/2 | `Q57` · t1/2z | 4.64 | h | 16704.0 | [h] | not captured | exact (1.0) | Usuda_1998:abstract | — | not captured |
| Vd | `Q61` · V | 142.0 | L | 0.14200000000000002 | L | not captured | exact (1.0) | Usuda_1998:abstract | — | not captured |
| Ctot | `Q354` · CLnorm | 0.359 | L/h | 9.972222222222223e-08 | L/h | not captured | llm (0.6) | Usuda_1998:abstract | — | not captured |
| Cmax | `Q32` · Cmax | 2.13 | mg/l | not captured | [mg] / [l] | not captured | exact (1.0) | Usuda_1998:abstract | — | not captured |
| Tmax | `Q56` · tmax | 1.76 | h | 6336.0 | [h] | not captured | exact (1.0) | Usuda_1998:abstract | — | not captured |
| CL (mL/min) | `Q22` · CL | 32.1 | mL/min | 5.350000000000001e-07 | L/h | not captured | review_gapfill (0.7) | Syvänen_2012:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q900 ('regression coefficient', value 0.954) — already have one for this compound
- unit_dimension_unknown: 'ml/100 g body wt.' (V)
- unit_dimension_unknown: 'ml/min per 100 g body wt.' (CLnorm)
- implicit units: 'Vd' → L (from the popPK convention: 'No unit stated in text or table footnotes; volume of distribution parameters in population PK are conventionally reporte')
- implicit units: 'Ctot' → L/h (from the popPK convention: 'No unit stated in text or table footnotes; normalized total clearance (CLnorm, standardized to 70 kg) is conventionally ')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=boron (boric acid)
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Syvänen_2012's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Usuda_1998_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (3/21 fields) | 18 |

<details><summary>18 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[boron concentration in solution]` | not captured | 0.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` | 32.1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | not captured | 2.13 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cmax]` | 2.13 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ctot]` | not captured | 0.359 | only_one_extracted |
| `gpt-oss-120b` | `parameters[ctot]` | 0.359 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[dose volume]` | not captured | 2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[r]` | 0.999 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[regression coefficient]` | not captured | 0.954 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | not captured | 4.64 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2]` | 4.64 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2a]` | not captured | 0.608 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2a]` | 0.608 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | not captured | 1.76 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tmax]` | 1.76 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 142.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | boron (boric acid) | boric_acid | mismatch |

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
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Syvänen_2012:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Usuda_1998:abstract'] |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Usuda_1998:abstract'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Usuda_1998:abstract'] |
| C5_dimension_Q57 | pass | [time] | not captured | not captured | not captured | ['Usuda_1998:abstract'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['Usuda_1998:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Usuda_1998:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 32.1 | not captured | not captured | ['Syvänen_2012:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.93 L/h | not captured | not captured | ['Syvänen_2012:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 142 L | not captured | not captured | ['Usuda_1998:abstract'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_boric_acid/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Usuda_1998` / `Usuda_1998::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 17:48 UTC</sub>
