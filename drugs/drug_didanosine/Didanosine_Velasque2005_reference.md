<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;didanosine&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/&quot;},{&quot;label&quot;:&quot;Velasque_2005 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Didanosine_Drusano1992_reference&quot;,&quot;label&quot;:&quot;Drusano_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Drusano1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Pai1992_reference&quot;,&quot;label&quot;:&quot;Pai_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Pai1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Zhou1999_reference&quot;,&quot;label&quot;:&quot;Zhou_1999_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Zhou1999_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Greenberg2022_reference&quot;,&quot;label&quot;:&quot;Greenberg_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Greenberg2022_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Didanosine_Ngara2020_reference&quot;,&quot;label&quot;:&quot;Ngara_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_didanosine/Didanosine_Ngara2020_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# didanosine — `Didanosine_Velasque2005_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL has no unit.

<div class="pk-model-meta" hidden drug="didanosine" model-id="Didanosine_Velasque2005_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="didanosine" parameterization="apparent" topology="2C"></div>

## Citation
Velasque LS, Estrela Rde C, Suarez-Kurtz G, Struchiner CJ. Estimating the genetic component (RGC) in pharmacokinetic variability of the antiretroviral didanosine among healthy Brazilians. AIDS (London, England) 19 Suppl 4:S76–S80 (2005).
  ·  DOI: [10.1097/01.aids.0000191495.89606.2e](https://doi.org/10.1097/01.aids.0000191495.89606.2e)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Oral clearance | CL/F | 55.1 | l/h |
| central volume | V1 | 9.82 | l |
| inter-compartmental clearance | Q | 40.9 | l/h |
| peripheral volume | V2 | 62.7 | l |
| absorption rate constant | kabs | 1.51 | h(-1) |
| RGC of CL | CL | 0.58 | RGC |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.188). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — didanosine: CL/F 55.1 l/h, V1 9.82 l, Q 40.9 l/h, V2 62.7 l, kabs 1.51 h(-1), CL 0.58 RGC.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on how the model is parameterised: this record has apparent, the second reading mechanistic; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Oral clearance | `Q27` · CL/F | 55.1 | l/h | 1.531e-05 | m3/s | l/h | exact (1) | Velasque_2005:abstract, Velasque_2005:abstract, Velasque_2005:abstract, Velasque_2005:abstract, Velasque_2005:abstract |
| central volume | `Q63` · V1 | 9.82 | l | 0.00982 | m3 | l | exact (1) | Velasque_2005:abstract |
| inter-compartmental clearance | `Q30` · Q | 40.9 | l/h | 1.136e-05 | m3/s | l/h | llm_confirmed (0.6) | Velasque_2005:abstract |
| peripheral volume | `Q64` · V2 | 62.7 | l | 0.0627 | m3 | l | exact (1) | Velasque_2005:abstract, Velasque_2005:abstract, Velasque_2005:abstract |
| absorption rate constant | `Q49` · kabs | 1.51 | h(-1) | 0.0004194 | 1/s | 1/h | exact (1) | Velasque_2005:abstract |
| RGC of CL | `Q22` · CL | 0.58 | RGC |  |  | rgc | llm_confirmed (0.6) | Velasque_2005:abstract, Velasque_2005:abstract, Velasque_2005:abstract, Velasque_2005:abstract, Velasque_2005:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'duration of the dose administration' → Q327 (kin, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Velasque_2005:abstract'])
- unit_dimension_unknown: 'RGC' (CL)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=didanosine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Velasque_2005_metadata.yaml (17 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.188 (3/16 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss-120b` | `parameters[absorption rate constant]` | 1.51 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume]` | 9.82 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[d]` |  | 0.44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[inter-compartmental clearance]` | 40.9 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` |  | 1.51 | only_one_extracted |
| `gpt-oss-120b` | `parameters[oral clearance]` | 55.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peripheral volume]` | 62.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q]` |  | 40.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[rgc of cl]` | 0.58 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` |  | 9.82 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Velasque_2005:abstract', 'Velasque_2005:abstract', 'Velasque_2005:abstract', 'Velasque_2005:abstract', 'Velasque_2005:abstract'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Velasque_2005:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Velasque_2005:abstract'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Velasque_2005:abstract'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Velasque_2005:abstract', 'Velasque_2005:abstract', 'Velasque_2005:abstract'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | RGC | ['Velasque_2005:abstract', 'Velasque_2005:abstract', 'Velasque_2005:abstract', 'Velasque_2005:abstract', 'Velasque_2005:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 55.1 L/h | ['Velasque_2005:abstract', 'Velasque_2005:abstract', 'Velasque_2005:abstract', 'Velasque_2005:abstract', 'Velasque_2005:abstract'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 9.82 L | ['Velasque_2005:abstract'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 62.7 L | ['Velasque_2005:abstract', 'Velasque_2005:abstract', 'Velasque_2005:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdidanosine%5D%20Didanosine_Velasque2005_reference&body=Drug%3A%20didanosine%0ARecord%3A%20Didanosine_Velasque2005_reference%0APaper%3A%20Velasque_2005%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_didanosine/Didanosine_Velasque2005_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 22:06 UTC</sub>
