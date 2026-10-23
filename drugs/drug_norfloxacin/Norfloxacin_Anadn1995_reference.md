<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;norfloxacin&quot;,&quot;href&quot;:&quot;drugs/drug_norfloxacin/&quot;},{&quot;label&quot;:&quot;Anad\u00f3n_1995 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Norfloxacin_Martnez2017_reference&quot;,&quot;label&quot;:&quot;Mart\u00ednez_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_norfloxacin/Norfloxacin_Martnez2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# norfloxacin — `Norfloxacin_Anadn1995_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="norfloxacin" model-id="Norfloxacin_Anadn1995_reference" status="needs_review" stale="false" population="healthy pigs" measured-compound="norfloxacin" parameterization="mechanistic" topology="1C"></div>

## Citation
Anadón A, Martinez-Larrañaga MR, Diaz MJ, Fernandez R, Martinez MA, Fernandez MC. Pharmacokinetics and tissue residues of norfloxacin and its N-desethyl- and oxo-metabolites in healthy pigs. Journal of veterinary pharmacology and therapeutics 18(3):220–225 (1995).
  ·  DOI: [10.1111/j.1365-2885.1995.tb00582.x](https://doi.org/10.1111/j.1365-2885.1995.tb00582.x)

## Population and dosing

**Population:** healthy pigs · condition healthy · age group adult.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| tmax | tmax | 1.46 | h |
| The elimination half-life (t1/2 beta) and the mean residence time of norfloxacin in plasma were 4.99 +/- 0.28 and 6.05 +/- 0.22 h, respectively, after i.m. administration | MRT | 4.99 | h |
| The elimination half-life (t1/2 beta) and the mean residence time of norfloxacin in plasma were 4.99 +/- 0.28 and 6.05 +/- 0.22 h, respectively, after i.m. administration and 3.65 +/- 0.16 and 3.34 +/- 0.16 h, respectively, after i.v. | t1/2z | 3.65 | h |
| Intramuscular bioavailability | Fab | 53.7 | % |
| CL | CL | 0.19 | L/h/kg |
| Vd(area) | V | 2.36 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.538). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Martínez_2017) cannot stand in for this paper's evidence. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — norfloxacin: tmax 1.46 h, MRT 4.99 h, t1/2z 3.65 h, Fab 53.7 %, CL 0.19 L/h/kg, V 2.36 L/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl: this record has 0.19, the second reading none; it also differs on 5 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| tmax | `Q56` · tmax | 1.46 | h | 5256 | s | h | exact (1) | Anadón_1995:abstract |
| The elimination half-life (t1/2 beta) and the mean residence time of norfloxacin in plasma were 4.99 +/- 0.28 and 6.05 +/- 0.22 h, respectively, after i.m. administration | `Q53` · MRT | 4.99 | h | 1.796e+04 | s | h | llm_confirmed (0.6) | Anadón_1995:abstract, Anadón_1995:abstract |
| The elimination half-life (t1/2 beta) and the mean residence time of norfloxacin in plasma were 4.99 +/- 0.28 and 6.05 +/- 0.22 h, respectively, after i.m. administration and 3.65 +/- 0.16 and 3.34 +/- 0.16 h, respectively, after i.v. | `Q57` · t1/2z | 3.65 | h | 1.314e+04 | s | h | llm_corrected (0.6) | Anadón_1995:abstract, Anadón_1995:abstract |
| Intramuscular bioavailability | `Q40` · Fab | 53.7 | % |  |  |  | boundary (0.8) | Anadón_1995:abstract |
| CL | `Q22` · CL | 0.19 | L/h/kg | 3.694e-06 | m3/s | L/h | review_gapfill (0.7) | Martínez_2017:review |
| Vd(area) | `Q61` · V | 2.36 | L/kg | 0.1652 | m3 | L | review_gapfill (0.7) | Martínez_2017:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'single intramuscular (i.m.) and intravenous (i.v.) dosage' — extend the ontology if this is a real PK parameter (source ['Anadón_1995:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=norfloxacin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Martínez_2017's review values (primary lacked it)
- gap-filled Q61 (V) from Martínez_2017's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Anadón_1995_metadata.yaml (7 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.538 (7/13 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl]` | 0.19 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` |  | 6.05 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 beta]` |  | 4.99 | only_one_extracted |
| `gpt-oss-120b` | `parameters[the elimination half-life (t1/2 beta) and the mean residence time of norfloxacin in plasma were 4.99 +/- 0.28 and 6.05 +/- 0.22 h, respectively, after i.m. administration and 3.65 +/- 0.16 and 3.34 +/- 0.16 h, respectively, after i.v.]` | 3.65 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[the elimination half-life (t1/2 beta) and the mean residence time of norfloxacin in plasma were 4.99 +/- 0.28 and 6.05 +/- 0.22 h, respectively, after i.m. administration]` | 4.99 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vd]` | 2.36 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Martínez_2017:review'] |
| C5_dimension_Q53 | pass | [time] |  | ['Anadón_1995:abstract', 'Anadón_1995:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Anadón_1995:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Anadón_1995:abstract', 'Anadón_1995:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Martínez_2017:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.19 | ['Martínez_2017:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 13.3 L/h | ['Martínez_2017:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 165 L | ['Martínez_2017:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnorfloxacin%5D%20Norfloxacin_Anadn1995_reference&body=Drug%3A%20norfloxacin%0ARecord%3A%20Norfloxacin_Anadn1995_reference%0APaper%3A%20Anad%C3%B3n_1995%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_norfloxacin/Norfloxacin_Anadn1995_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 11:33 UTC</sub>
