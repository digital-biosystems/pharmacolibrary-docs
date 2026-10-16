<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;maraviroc&quot;,&quot;href&quot;:&quot;drugs/drug_maraviroc/&quot;},{&quot;label&quot;:&quot;Chan_2011 \u00b7 simultaneous_pkpd&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Maraviroc_Courlet2021_reference&quot;,&quot;label&quot;:&quot;Courlet_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maraviroc/Maraviroc_Courlet2021_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Maraviroc_Ren2022_reference&quot;,&quot;label&quot;:&quot;Ren_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_maraviroc/Maraviroc_Ren2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# maraviroc — `Maraviroc_Chan2011_simultaneous_pkpd`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — maraviroc: CL 5.18e+03 L/h, V1 349 L, Q 1.29e+03 L/h, V2 1.13e+03 L, kabs 9.36 1/h, Frel 1, tlag 0.0178 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has maraviroc, the second reading unknown; it also differs on 20 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

## Citation
Chan PL et al., The use of the SAEM algorithm in MONOLI…, Journal of pharmacokinetics… (2011)
  ·  DOI: [10.1007/s10928-010-9175-z](https://doi.org/10.1007/s10928-010-9175-z)

<div class="pk-model-meta" hidden drug="maraviroc" model-id="Maraviroc_Chan2011_simultaneous_pkpd" status="needs_review" stale="false" population="asymptomatic HIV-1 infected subjects" measured-compound="maraviroc" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 7 extracted, plus 2 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Total clearance | `Q22` · CL | 5180 | L/h | 0.0014388888888888889 | L/h | not captured | exact (1.0) | Tab2:row2:col4, Tab2:row2:col5 | — | 46.9 (None% RSE) |
| Central volume | `Q63` · V1 | 349 | L | 0.34900000000000003 | L | not captured | exact (1.0) | Tab2:row3:col4, Tab2:row3:col5 | — | not captured |
| Intercompartmental clearance | `Q30` · Q | 1290 | L/h | 0.00035833333333333333 | L/h | not captured | exact (1.0) | Tab2:row4:col4, Tab2:row4:col5 | — | not captured |
| Peripheral volume | `Q64` · V2 | 1130 | L | 1.1300000000000001 | L | not captured | exact (1.0) | Tab2:row5:col4, Tab2:row5:col5 | — | 55.5 (None% RSE) |
| Absorption rate constant | `Q49` · kabs | 9.36 | 1/h | 0.0026 | 1/h | not captured | exact (1.0) | Tab2:row6:col4, Tab2:row6:col5 | — | 69.9 (None% RSE) |
| Relative bioavailability | `Q87` · Frel | 1 | not captured | not captured | not captured | not captured | exact (1.0) | Tab2:row8:col4 | — | not captured |
| Absorption lag time | `Q83` · tlag | 0.0178 | h | 64.08 | h | not captured | exact (1.0) | Tab2:row10:col4, Tab2:row10:col5 | — | not captured |
| theta_kabs_food | `Q900` · theta_kabs_food | 222 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row7:col5 | — | not captured |
| theta_q40_food | `Q900` · theta_q40_food | 14 | not captured | not captured | not captured | not captured | not captured (not captured) | Tab2:row9:col5 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.0049 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.028 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 0.65 (source ['Tab2:footnote']); the table cell was unparseable — needs review
- dropped value-less row: 'd P value'
- covariate effect for Q40 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Total clearance' → L/h (from the popPK convention: 'No unit stated in text; maraviroc CL typically ~100+ L/h, but value 5180 suggests mL/h... however convention for populat')
- implicit units: 'Central volume' → L (from the popPK convention: 'No unit stated; central volumes of distribution are conventionally in L.')
- implicit units: 'Intercompartmental clearance' → L/h (from the popPK convention: 'No unit stated; intercompartmental clearances are conventionally in L/h.')
- implicit units: 'Peripheral volume' → L (from the popPK convention: 'No unit stated; peripheral volumes of distribution are conventionally in L.')
- implicit units: 'Absorption rate constant' → 1/h (from the popPK convention: 'No unit stated; first-order absorption rate constants are conventionally in 1/h.')
- implicit units: 'Absorption lag time' → h (from the popPK convention: 'No unit stated; absorption lag times are conventionally in h.')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=maraviroc
- population split: 'simultaneous pkpd' subgroup of Chan_2011 (paper reports 2 populations: pk alone (pk estimation step of the two-stage approach), simultaneous pkpd)

**Extraction notes:**
- unparsed cell Tab2:row2:col1 = 'CL (l day−1)'
- unparsed cell Tab2:row3:col1 = 'V2 (l)'
- unparsed cell Tab2:row4:col1 = 'Q (l day−1)'
- unparsed cell Tab2:row5:col1 = 'V3 (l)'
- unparsed cell Tab2:row6:col1 = 'ka (day−1)'
- unparsed cell Tab2:row7:col2 = '−0.755a'
- unparsed cell Tab2:row7:col4 = '−0.141c'
- unparsed cell Tab2:row8:col1 = 'F1'
- unparsed cell Tab2:row9:col1 = 'Food on F1'
- unparsed cell Tab2:row9:col2 = '−0.244b'
- unparsed cell Tab2:row9:col4 = '−0.476d'
- unparsed cell Tab2:row12:col1 = 'ω[V2] (%)'
- unparsed cell Tab2:row14:col1 = 'ω[V3] (%)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.125 (3/24 fields) | 21 |

<details><summary>21 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[absorption lag time]` | 0.0178 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption lag time]` | not captured | 0.0178 | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 9.36 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | not captured | 9.36 | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume]` | 349 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume]` | not captured | 349 | only_one_extracted |
| `gpt-oss-120b` | `parameters[death rate of t cells]` | not captured | 0.841 | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance]` | 1290 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[intercompartmental clearance]` | not captured | 1290 | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume]` | 1130 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume]` | not captured | 1130 | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability]` | 1 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[relative bioavailability]` | not captured | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_food]` | 222 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_kabs_food]` | not captured | 222 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q40_food]` | 14 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q40_food]` | not captured | 14 | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance]` | 5180 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[total clearance]` | not captured | 5180 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | maraviroc | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | maraviroc | unknown | mismatch |

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
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row2:col4', 'Tab2:row2:col5'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab2:row4:col4', 'Tab2:row4:col5'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Tab2:row6:col4', 'Tab2:row6:col5'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row3:col4', 'Tab2:row3:col5'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab2:row5:col4', 'Tab2:row5:col5'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Tab2:row10:col4', 'Tab2:row10:col5'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 5180.0 | not captured | not captured | ['Tab2:row2:col4', 'Tab2:row2:col5'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 5.18e+03 L/h | not captured | not captured | ['Tab2:row2:col4', 'Tab2:row2:col5'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 349 L | not captured | not captured | ['Tab2:row3:col4', 'Tab2:row3:col5'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.13e+03 L | not captured | not captured | ['Tab2:row5:col4', 'Tab2:row5:col5'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_maraviroc/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Chan_2011` / `Chan_2011::simultaneous_pkpd`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 16:58 UTC</sub>
