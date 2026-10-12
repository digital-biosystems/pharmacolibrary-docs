<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Piperaquine&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/&quot;},{&quot;label&quot;:&quot;Hoglund_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Piperaquine_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_population_estimatec&quot;,&quot;label&quot;:&quot;Chotsiri_2021_population_estimatec&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_population_estimatec.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Chotsiri2021_prior_estimateb&quot;,&quot;label&quot;:&quot;Chotsiri_2021_prior_estimateb&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Chotsiri2021_prior_estimateb.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Zaloumis2012_reference&quot;,&quot;label&quot;:&quot;Zaloumis_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Zaloumis2012_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Piperaquine_Ding2024_nonmem_population_estimates_rse_a&quot;,&quot;label&quot;:&quot;Ding_2024_nonmem_population_estimates_rse_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_piperaquine/Piperaquine_Ding2024_nonmem_population_estimates_rse_a.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Piperaquine — `Piperaquine_Hoglund2017_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Extracted — piperaquine: CL 0.001 L/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of elimination clearance ... (p: this record has 0.001, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

> **Dose compound ≠ measured compound:** dosed `piperaquine phosphate`, measured `piperaquine`.

## Citation
Hoglund RM et al., Population Pharmacokinetic Properties o…, PLoS medicine (2017)
  ·  DOI: [10.1371/journal.pmed.1002212](https://doi.org/10.1371/journal.pmed.1002212)

<div class="pk-model-meta" hidden drug="Piperaquine" model-id="Piperaquine_Hoglund2017_reference" status="needs_review" stale="false" population="adults and children with uncomplicated falciparum malaria and healthy volunteers" measured-compound="piperaquine" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 1 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| elimination clearance ... (p | `Q22` · CL | 0.001 | L/h | 2.7777777777777777e-10 | L/h | not captured | boundary (0.8) | Hoglund_2017:other_prose | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| F (percent) | Q40 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'CL/F (l/h)' (captured trailing unit 'l/h' for child rows)
- dropped value-less row: 'VC/F (l)' (captured trailing unit 'l' for child rows)
- dropped value-less row: 'Q1/F (l/h)' (captured trailing unit 'l/h' for child rows)
- dropped value-less row: 'VP1/F (l)' (captured trailing unit 'l' for child rows)
- dropped value-less row: 'Q2/F (l/h)' (captured trailing unit 'l/h' for child rows)
- dropped value-less row: 'VP2/F (l)' (captured trailing unit 'l' for child rows)
- dropped value-less row: 'MTT (h)' (captured trailing unit 'h' for child rows)
- dropped value-less row: 'Number of transit compartments'
- dropped value-less row: 'Scale (percent)' (captured trailing unit 'percent' for child rows)
- dropped value-less row: 'MF50 (years)' (captured trailing unit 'years' for child rows)
- dropped value-less row: 'HillMF'
- dropped value-less row: 'DoseF (percent)' (captured trailing unit 'percent' for child rows)
- salvaged Q22 ('elimination clearance ... (p'=0.001) from results prose — parameter table was unreadable
- implicit units: 'elimination clearance ... (p' → L/h (from the popPK convention: 'The paper does not state a unit for elimination clearance; it discusses clearance allometrically scaled with body weight')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=piperaquine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pmed.1002212.t003:row1:col1 = '55.4 [4.22]'
- unparsed cell pmed.1002212.t003:row1:col3 = '27.9 [7.43]'
- unparsed cell pmed.1002212.t003:row2:col1 = '2,910 [6.98]'
- unparsed cell pmed.1002212.t003:row2:col3 = '67.0 [15.5]'
- unparsed cell pmed.1002212.t003:row3:col1 = '310 [8.03]'
- unparsed cell pmed.1002212.t003:row4:col1 = '4,910 [5.85]'
- unparsed cell pmed.1002212.t003:row4:col3 = '24.0 [44.2]'
- unparsed cell pmed.1002212.t003:row5:col1 = '105 [4.98]'
- unparsed cell pmed.1002212.t003:row5:col3 = '23.6 [15.6]'
- unparsed cell pmed.1002212.t003:row6:col1 = '30,900 [4.79]'
- unparsed cell pmed.1002212.t003:row6:col3 = '34.7 [7.21]'
- unparsed cell pmed.1002212.t003:row7:col1 = '2.11 [4.54]'
- unparsed cell pmed.1002212.t003:row7:col3 = '38.0 [15.8]/46.4 [9.36]'
- unparsed cell pmed.1002212.t003:row7:col4 = '26.7–50.3/38.6–55.1'
- unparsed cell pmed.1002212.t003:row7:col5 = '59.1/71.3'
- unparsed cell pmed.1002212.t003:row9:col3 = '41.4 [8.65]/53.5 [6.69]'
- unparsed cell pmed.1002212.t003:row9:col4 = '34.0–48.2/46.1–60.2'
- unparsed cell pmed.1002212.t003:row9:col5 = '31.1/59.7'
- unparsed cell pmed.1002212.t003:row10:col1 = '0.115 [3.43]'
- unparsed cell pmed.1002212.t003:row12:col1 = '106 [7.24]'
- unparsed cell pmed.1002212.t003:row13:col1 = '0.575 [13.6]'
- unparsed cell pmed.1002212.t003:row14:col1 = '5.51 [29.6]'
- unparsed cell pmed.1002212.t003:row15:col1 = '23.7 [17.8]'
- LLM selected parameter table(s) 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.857 (6/7 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[elimination clearance ... (p]` | 0.001 | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 1 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Hoglund_2017:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.001 | not captured | not captured | ['Hoglund_2017:other_prose'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.001 L/h | not captured | not captured | ['Hoglund_2017:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_piperaquine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hoglund_2017` / `Hoglund_2017::reference`)


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 07:37 UTC</sub>
