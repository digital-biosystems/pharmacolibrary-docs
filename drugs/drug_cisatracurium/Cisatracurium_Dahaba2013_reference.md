<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;cisatracurium&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/&quot;},{&quot;label&quot;:&quot;Dahaba_2013 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cisatracurium_Liu2012_reference&quot;,&quot;label&quot;:&quot;Liu_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/Cisatracurium_Liu2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cisatracurium_Tran1998_reference&quot;,&quot;label&quot;:&quot;Tran_1998_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cisatracurium/Cisatracurium_Tran1998_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cisatracurium — `Cisatracurium_Dahaba2013_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="cisatracurium" model-id="Cisatracurium_Dahaba2013_reference" status="needs_review" stale="false" population="patients undergoing acute normovolemic hemodilution or control" measured-compound="cisatracurium" parameterization="mechanistic" topology="1C"></div>

## Citation
Dahaba AA, Suljevic I, Oettl K, Xiao Z, Dong H, Xiong L et al. Influence of acute normovolemic hemodilution on the pharmacokinetics of Cisatracurium Besylate. Minerva anestesiologica 79(11):1238–1247 (2013).

## Population and dosing

**Population:** patients undergoing acute normovolemic hemodilution or control · condition healthy (ANH cohort) · age group adult · n = 40.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Central and steady state apparent volumes of distribution (V1, Vdss) and slope factor (γ) ... ANH | V | 90.8 | mL kg-1 |
| effect-compartment concentration at 50% neuromuscular block was lower in the ANH | Ct | 136.4 | ng·mL-1 |
| Elimination half-life (t1/2 β) and mean residence time (MRT) ... ANH | t1/2β | 37.2 | min |
| distribution half-life (t1/2 α), effect-compartment equilibration rate-constant (keo), central and total clearances (Clc, Cl) ... ANH | t1/2α | 2.4 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — cisatracurium: V 90.8 mL kg-1, Ct 136 ng·mL-1, t1/2β 37.2 min, t1/2α 2.4 min.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has cisatracurium, the second reading unknown; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Central and steady state apparent volumes of distribution (V1, Vdss) and slope factor (γ) ... ANH | `Q61` · V | 90.8 | mL kg-1 | 0.006356 | m3 | ml/kg | llm_corrected (0.6) | Dahaba_2013:abstract, Dahaba_2013:abstract, Dahaba_2013:abstract |
| effect-compartment concentration at 50% neuromuscular block was lower in the ANH | `Q75` · Ct | 136.4 | ng·mL-1 |  |  | ng/ml | llm (0.6) | Dahaba_2013:abstract |
| Elimination half-life (t1/2 β) and mean residence time (MRT) ... ANH | `Q60` · t1/2β | 37.2 | min | 2232 | s | min | llm_corrected (0.6) | Dahaba_2013:abstract, Dahaba_2013:abstract |
| distribution half-life (t1/2 α), effect-compartment equilibration rate-constant (keo), central and total clearances (Clc, Cl) ... ANH | `Q59` · t1/2α | 2.4 | min | 144 | s | min | llm_corrected (0.6) | Dahaba_2013:abstract, Dahaba_2013:abstract, Dahaba_2013:abstract, Dahaba_2013:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q63 ('Central and steady state apparent volumes of distribution (V1, Vdss) and slope factor (γ) ... control group', value 65.5) — already have one for this compound
- dropped duplicate Q75 ('effect-compartment concentration at 50% neuromuscular block was lower in the ANH ... control group', value 158.5) — already have one for this compound
- dropped unlinked row (NIL): 'Elimination half-life (t1/2 β) and mean residence time (MRT) ... control group' — extend the ontology if this is a real PK parameter (source ['Dahaba_2013:abstract', 'Dahaba_2013:abstract'])
- dropped duplicate Q59 ('distribution half-life (t1/2 α), effect-compartment equilibration rate-constant (keo), central and total clearances (Clc, Cl) ... control group', value 1.9) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=cisatracurium
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Central and steady state apparent volumes of distribution (V1, Vdss) and slope factor (γ) ... ANH' is the general volume)
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Dahaba_2013_metadata.yaml (20 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[central and steady state apparent volumes of distribution (v1, vdss) and slope factor (γ) ... anh]` | 90.8 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clc]` |  | 6.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[distribution half-life (t1/2 α), effect-compartment equilibration rate-constant (keo), central and total clearances (clc, cl) ... anh]` | 2.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[effect-compartment concentration at 50% neuromuscular block was lower in the anh]` | 136.4 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[elimination half-life (t1/2 β) and mean residence time (mrt) ... anh]` | 37.2 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mrt]` |  | 23.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 α]` |  | 2.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[t1/2 β]` |  | 37.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` |  | 90.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdss]` |  | 159.1 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | cisatracurium | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | cisatracurium | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q59 | pass | [time] |  | ['Dahaba_2013:abstract', 'Dahaba_2013:abstract', 'Dahaba_2013:abstract', 'Dahaba_2013:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Dahaba_2013:abstract', 'Dahaba_2013:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Dahaba_2013:abstract', 'Dahaba_2013:abstract', 'Dahaba_2013:abstract'] |
| C5_dimension_Q75 | pass | [mass] / [length] ** 3 |  | ['Dahaba_2013:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 6.36 L | ['Dahaba_2013:abstract', 'Dahaba_2013:abstract', 'Dahaba_2013:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcisatracurium%5D%20Cisatracurium_Dahaba2013_reference&body=Drug%3A%20cisatracurium%0ARecord%3A%20Cisatracurium_Dahaba2013_reference%0APaper%3A%20Dahaba_2013%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cisatracurium/Cisatracurium_Dahaba2013_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 02:22 UTC</sub>
