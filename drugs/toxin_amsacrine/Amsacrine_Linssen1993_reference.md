<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Amsacrine&quot;,&quot;href&quot;:&quot;drugs/toxin_amsacrine/&quot;},{&quot;label&quot;:&quot;Linssen_1993 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Amsacrine_Gormley1984_reference&quot;,&quot;label&quot;:&quot;Gormley_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amsacrine/Amsacrine_Gormley1984_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Amsacrine_Paxton1986_reference&quot;,&quot;label&quot;:&quot;Paxton_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_amsacrine/Amsacrine_Paxton1986_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Amsacrine — `Amsacrine_Linssen1993_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Amsacrine" model-id="Amsacrine_Linssen1993_reference" status="needs_review" stale="false" population="patients with acute leukemia" measured-compound="amsacrine (m-AMSA)" parameterization="mechanistic" topology="retention"></div>

## Citation
Linssen P, Brons P, Knops G, Wessels H, de Witte T. Plasma and cellular pharmacokinetics of m-AMSA related to in vitro toxicity towards normal and leukemic clonogenic bone marrow cells (CFU-GM, CFU-L). European journal of haematology 50(3):149–154 (1993).
  ·  DOI: [10.1111/j.1600-0609.1993.tb00083.x](https://doi.org/10.1111/j.1600-0609.1993.tb00083.x)

## Population and dosing

**Population:** patients with acute leukemia · condition acute leukemia · age group adult · n = 5.

## Model

**Structure:** whole-body retention function, 2 exponential pools (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Median plasma peak concentration | Cmax | 1.25 | micrograms/ml |
| median T1/2 alpha alpha (plasma) | t1/2α | 1.6 | h |
| median T1/2 beta (plasma) | t1/2β | 5.0 | h |
| Cl (L/h/kg) | CL | 20.3287 | L/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has amsacrine (m-AMSA), the second reading Amsacrine; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Median plasma peak concentration | `Q32` · Cmax | 1.25 | micrograms/ml | 0.00125 | kg/m3 | µg/ml | llm_confirmed (0.6) | Linssen_1993:abstract |
| median T1/2 alpha alpha (plasma) | `Q59` · t1/2α | 1.6 | h | 5760 | s | h | half_life_rule (0.95) | Linssen_1993:abstract |
| median T1/2 beta (plasma) | `Q60` · t1/2β | 5.0 | h | 1.8e+04 | s | h | half_life_rule (0.95) | Linssen_1993:abstract |
| Cl (L/h/kg) | `Q22` · CL | 20.3287 | L/h/kg | 0.0003953 | m3/s | L/h | review_gapfill (0.7) | Fang_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q32 ('nucleated blood cell peak concentration', value 6.36) — already have one for this compound
- dropped duplicate Q59 ('median T1/2 alpha alpha (nucleated blood cell)', value 0.3) — already have one for this compound
- dropped duplicate Q60 ('median T1/2 beta (nucleated blood cell)', value 5.0) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=amsacrine (m-AMSA)
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- molar mass: none found for 'amsacrine (m-AMSA)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Fang_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Linssen_1993_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.2 (2/10 fields) | 8 |

<details><summary>8 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[median plasma peak concentration]` |  | 1.25 | only_one_extracted |
| `gpt-oss:120b` | `parameters[median plasma peak concentration]` | 1.25 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[median t1/2 alpha alpha]` | 1.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[median t1/2 alpha]` |  | 1.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[median t1/2 beta]` |  | 5.0 | only_one_extracted |
| `gpt-oss:120b` | `parameters[median t1/2 beta]` | 5.0 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | amsacrine (m-AMSA) | Amsacrine | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | amsacrine (m-AMSA) | Amsacrine | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Fang_2016:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Linssen_1993:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Linssen_1993:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Linssen_1993:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 20.33 | ['Fang_2016:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.42e+03 L/h | ['Fang_2016:review'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_amsacrine/Amsacrine_Linssen1993_reference/Amsacrine_Linssen1993_reference_matlab.zip" download>Amsacrine_Linssen1993_reference_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_amsacrine/Amsacrine_Linssen1993_reference/Amsacrine_Linssen1993_reference_sbml.zip" download>Amsacrine_Linssen1993_reference_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_amsacrine/Amsacrine_Linssen1993_reference/Amsacrine_Linssen1993_reference_cellml.zip" download>Amsacrine_Linssen1993_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Linssen P, Brons P, Knops G, Wessels H, de Witte T. Plasma and cellular pharmacokinetics of m-AMSA related to in vitro toxicity towards normal and leukemic clonogenic bone marrow cells (CFU-GM, CFU-L). European journal of haematology 50(3):149–154 (1993). [doi:10.1111/j.1600-0609.1993.tb00083.x](https://doi.org/10.1111/j.1600-0609.1993.tb00083.x)

**This record:** Pharmacolibrary, model `Amsacrine_Linssen1993_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_amsacrine/Amsacrine_Linssen1993_reference>

```bibtex
@misc{pharmacolibrary_AmsacrineLinssen1993reference,
  title  = {{Pharmacolibrary model Amsacrine_Linssen1993_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_amsacrine/Amsacrine_Linssen1993_reference},
  note   = {Parameters from doi:10.1111/j.1600-0609.1993.tb00083.x},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bamsacrine%5D%20Amsacrine_Linssen1993_reference&body=Drug%3A%20amsacrine%0ARecord%3A%20Amsacrine_Linssen1993_reference%0APaper%3A%20Linssen_1993%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_amsacrine/Amsacrine_Linssen1993_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 21:51 UTC</sub>
