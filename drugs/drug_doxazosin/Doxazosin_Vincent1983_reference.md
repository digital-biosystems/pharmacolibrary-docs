<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;doxazosin&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/&quot;},{&quot;label&quot;:&quot;Vincent_1983 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doxazosin_Kaye1986_man&quot;,&quot;label&quot;:&quot;Kaye_1986_man&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Kaye1986_man.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_Kaye1986_rat&quot;,&quot;label&quot;:&quot;Kaye_1986_rat&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Kaye1986_rat.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_Young1988_reference&quot;,&quot;label&quot;:&quot;Young_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Young1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_Elliott1986_reference&quot;,&quot;label&quot;:&quot;Elliott_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_Elliott1986_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Doxazosin_unknown2023_reference&quot;,&quot;label&quot;:&quot;unknown_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/Doxazosin_unknown2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Reid_1990_SBP&quot;,&quot;label&quot;:&quot;Reid_1990 \u00b7 SBP&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_doxazosin/pd_Reid_1990_SBP.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# doxazosin — `Doxazosin_Vincent1983_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="doxazosin" model-id="Doxazosin_Vincent1983_reference" status="needs_review" stale="false" population="healthy volunteers" measured-compound="doxazosin" parameterization="mechanistic" topology="1C"></div>

## Citation
Vincent J, Elliott HL, Meredith PA, Reid JL. Doxazosin, an alpha 1-adrenoceptor antagonist: pharmacokinetics and concentration-effect relationships in man. British journal of clinical pharmacology 15(6):719–725 (1983).
  ·  DOI: [10.1111/j.1365-2125.1983.tb01556.x](https://doi.org/10.1111/j.1365-2125.1983.tb01556.x)

## Population and dosing

**Population:** healthy volunteers · condition healthy · age group adult.

**Dosing:** 1, 2 mg, iv/oral, single.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| terminal elimination half-life following oral and intravenous doxazosin was about | t1/2z | 9 | h |
| mean calculated bioavailability of doxazosin | Fab | 63 |  |
| Doxazosin clearance from whole blood was | CL | 139 | ml/min |
| Doxazosin (0.3 mgkg-') | V | 45.1 | l kg-1 |
| ka | kabs | 0.077 | h-1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.308). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; the clearance plausibility check could not be computed.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Hamilton_1985, unknown_2023) cannot stand in for this paper's evidence. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — doxazosin: t1/2z 9 h, Fab 63, CL 139 ml/min, V 45.1 l kg-1, kabs 0.077 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on bioavailability: this record has 63, the second reading 76.4; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| terminal elimination half-life following oral and intravenous doxazosin was about | `Q57` · t1/2z | 9 | h | 3.24e+04 | s | h | llm (0.6) | Vincent_1983:abstract |
| mean calculated bioavailability of doxazosin | `Q40` · Fab | 63 |  |  |  |  | llm_confirmed (0.6) | Vincent_1983:abstract |
| Doxazosin clearance from whole blood was | `Q22` · CL | 139 | ml/min | 2.317e-06 | m3/s | ml/min | llm_confirmed (0.6) | Vincent_1983:abstract |
| Doxazosin (0.3 mgkg-') | `Q61` · V | 45.1 | l kg-1 | 3.157 | m3 | L | review_gapfill (0.7) | Hamilton_1985:review |
| ka | `Q49` · kabs | 0.077 | h-1 | 2.139e-05 | 1/s | 1/h | review_gapfill (0.7) | unknown_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'maximum fall in blood pressure following i.v. doxazosin was from 123/81 to'
- dropped value-less row: 'associated with a rise in heart rate from 81 to'
- dropped unlinked row (NIL): 'limit of detection' — extend the ontology if this is a real PK parameter (source ['Vincent_1983:abstract'])
- dropped unlinked row (NIL): 'average coefficient of variation' — extend the ontology if this is a real PK parameter (source ['Vincent_1983:abstract'])
- dropped duplicate Q57 ('terminal elimination half-lives ... following i.v.', value 562) — already have one for this compound
- dropped duplicate Q57 ('intravenous and oral terminal elimination half-lives were', value 574) — already have one for this compound
- dropped duplicate Q22 ('Clearance calculated from plasma levels was significantly less at', value 88) — already have one for this compound
- dropped value-less row: 'The maximal changes in supine blood pressure were from 124/76'
- dropped unlinked row (NIL): 'with an associated increase in heart rate from' — extend the ontology if this is a real PK parameter (source ['Vincent_1983:abstract', 'Vincent_1983:abstract'])
- dropped value-less row: 'for i.v. doxazosin and from 116/77'
- dropped duplicate Q57 ('terminal elimination half-life was found to average', value 9.5) — already have one for this compound
- dropped unlinked row (NIL): 'mean of' — extend the ontology if this is a real PK parameter (source ['Vincent_1983:abstract'])
- dropped unlinked row (NIL): 'mean arterial pressure' — extend the ontology if this is a real PK parameter (source ['Vincent_1983:abstract', 'Vincent_1983:abstract', 'Vincent_1983:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=doxazosin
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q61 (V) from Hamilton_1985's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from unknown_2023's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from cached Vincent_1983_extracted.txt (26 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | 63 | 76.4 | mismatch |
| `gpt-oss-120b` | `parameters[auc (ngml-'min) - i.v. - subject i]` |  | 5410 | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability (%) - oral - subject i]` |  | 76.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance (ml/min) - i.v. - subject i]` |  | 185 | only_one_extracted |
| `gpt-oss-120b` | `parameters[doxazosin clearance from whole blood was]` | 139 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mean calculated bioavailability of doxazosin]` | 63 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[t/2 z (min) - i.v. - subject i]` |  | 460 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal elimination half-life following oral and intravenous doxazosin was about]` | 9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tla,g (min) - oral - subject i]` |  | 12 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Vincent_1983:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['unknown_2023:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Vincent_1983:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Hamilton_1985:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 139 | ['Vincent_1983:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.34 L/h | ['Vincent_1983:abstract'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.16e+03 L | ['Hamilton_1985:review'] |

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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdoxazosin%5D%20Doxazosin_Vincent1983_reference&body=Drug%3A%20doxazosin%0ARecord%3A%20Doxazosin_Vincent1983_reference%0APaper%3A%20Vincent_1983%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_doxazosin/Doxazosin_Vincent1983_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-20 10:29 UTC</sub>
