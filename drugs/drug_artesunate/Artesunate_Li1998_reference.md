<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artesunate&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/&quot;},{&quot;label&quot;:&quot;Li_1998 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artesunate_Ayyoub2015_reference&quot;,&quot;label&quot;:&quot;Ayyoub_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Ayyoub2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Ding2024_reference&quot;,&quot;label&quot;:&quot;Ding_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Ding2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Pfaffendorf2026_reference&quot;,&quot;label&quot;:&quot;Pfaffendorf_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Pfaffendorf2026_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Chairat2018_reference&quot;,&quot;label&quot;:&quot;Chairat_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Chairat2018_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artesunate_Lohy2017_reference&quot;,&quot;label&quot;:&quot;Lohy_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artesunate/Artesunate_Lohy2017_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artesunate — `Artesunate_Li1998_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Only volume was extracted — no clearance.

<div class="pk-model-meta" hidden drug="artesunate" model-id="Artesunate_Li1998_reference" status="needs_review" stale="false" population="rats" measured-compound="dihydroartemisinin" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Li QG, Peggins JO, Fleckenstein LL, Masonic K, Heiffer MH, Brewer TG. The pharmacokinetics and bioavailability of dihydroartemisinin, arteether, artemether, artesunic acid and artelinic acid in rats. The Journal of pharmacy and pharmacology 50(2):173–182 (1998).
  ·  DOI: [10.1111/j.2042-7158.1998.tb06173.x](https://doi.org/10.1111/j.2042-7158.1998.tb06173.x)

## Population and dosing

**Population:** rats · condition healthy · age group adult.

**Dosed compound ≠ measured compound:** dosed artesunic acid, measured dihydroartemisinin.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 15 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| steady-state volume of distribution (AL) | Vss | 0.39 | L |
| steady-state volume of distribution (DQHS) | Vss | 0.5 | L |
| steady-state volume of distribution (AM) | Vss | 0.67 | L |
| steady-state volume of distribution (AE) | Vss | 0.72 | L |
| steady-state volume of distribution (AS) | Vss | 0.87 | L |
| terminal half-life after intravenous dosing (AL) | t1/2z | 1.35 | h |
| terminal half-life after intravenous dosing (DQHS) | t1/2z | 0.95 | h |
| terminal half-life after intravenous dosing (AM) | t1/2z | 0.53 | h |
| terminal half-life after intravenous dosing (AE) | t1/2z | 0.45 | h |
| terminal half-life after intravenous dosing (AS) | t1/2z | 0.35 | h |
| Bioavailability after intramuscular injection (AS) | Fab | 105 | % |
| Bioavailability after intramuscular injection (AL) | Fab | 95 | % |
| Bioavailability after intramuscular injection (DQHS) | Fab | 85 | % |
| Bioavailability after intramuscular injection (AM) | Fab | 54 | % |
| Bioavailability after intramuscular injection (AE) | Fab | 34 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.04). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — artelinic acid: Vss 0.39 L, t1/2z 1.35 h, Fab 95 %; dihydroartemisinin: Vss 0.5 L, t1/2z 0.95 h, Fab 85 %; artemether: Vss 0.67 L, t1/2z 0.53 h, Fab 54 %; arteether: Vss 0.72 L, t1/2z 0.45 h, Fab 34 %; artesunate: Vss 0.87 L, t1/2z 0.35 h, Fab 105 %.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artesunic acid, the second reading unknown; it also differs on 23 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| steady-state volume of distribution (AL) | `Q65` · Vss | 0.39 | L | 0.00039 | m3 | l | llm_corrected (0.6) | Li_1998:abstract |
| steady-state volume of distribution (DQHS) | `Q65` · Vss | 0.5 | L | 0.0005 | m3 | l | llm_corrected (0.6) | Li_1998:abstract |
| steady-state volume of distribution (AM) | `Q65` · Vss | 0.67 | L | 0.00067 | m3 | l | llm_corrected (0.6) | Li_1998:abstract |
| steady-state volume of distribution (AE) | `Q65` · Vss | 0.72 | L | 0.00072 | m3 | l | llm_corrected (0.6) | Li_1998:abstract |
| steady-state volume of distribution (AS) | `Q65` · Vss | 0.87 | L | 0.00087 | m3 | l | llm_corrected (0.6) | Li_1998:abstract |
| terminal half-life after intravenous dosing (AL) | `Q57` · t1/2z | 1.35 | h | 4860 | s | h | llm (0.6) | Li_1998:abstract |
| terminal half-life after intravenous dosing (DQHS) | `Q57` · t1/2z | 0.95 | h | 3420 | s | h | llm (0.6) | Li_1998:abstract |
| terminal half-life after intravenous dosing (AM) | `Q57` · t1/2z | 0.53 | h | 1908 | s | h | llm (0.6) | Li_1998:abstract |
| terminal half-life after intravenous dosing (AE) | `Q57` · t1/2z | 0.45 | h | 1620 | s | h | llm (0.6) | Li_1998:abstract |
| terminal half-life after intravenous dosing (AS) | `Q57` · t1/2z | 0.35 | h | 1260 | s | h | llm (0.6) | Li_1998:abstract |
| Bioavailability after intramuscular injection (AS) | `Q40` · Fab | 105 | % |  |  |  | llm_confirmed (0.6) | Li_1998:abstract |
| Bioavailability after intramuscular injection (AL) | `Q40` · Fab | 95 | % |  |  |  | llm_confirmed (0.6) | Li_1998:abstract |
| Bioavailability after intramuscular injection (DQHS) | `Q40` · Fab | 85 | % |  |  |  | llm_confirmed (0.6) | Li_1998:abstract |
| Bioavailability after intramuscular injection (AM) | `Q40` · Fab | 54 | % |  |  |  | llm_confirmed (0.6) | Li_1998:abstract |
| Bioavailability after intramuscular injection (AE) | `Q40` · Fab | 34 | % |  |  |  | llm_confirmed (0.6) | Li_1998:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Clearance of AL'
- dropped value-less row: 'Clearance (DQHS)' (captured trailing unit 'DQHS' for child rows)
- dropped value-less row: 'Clearance (AM)' (captured trailing unit 'AM' for child rows)
- dropped value-less row: 'Clearance (AS)' (captured trailing unit 'AS' for child rows)
- dropped value-less row: 'Clearance (AE)' (captured trailing unit 'AE' for child rows)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=dihydroartemisinin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 4 first-order transfer(s) across 5 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 21/21 row label(s) assigned, 0 linked by role; re-tagged dihydroartemisinin→artelinic acid ×4, dihydroartemisinin→artemether ×4, dihydroartemisinin→arteether ×4, dihydroartemisinin→parent ×4
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'dihydroartemisinin', not artesunate — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Li_1998_metadata.yaml (21 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.04 (1/25 fields) | 24 |

<details><summary>24 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.bioavailability.theta` | 105 | -35 | mismatch |
| `gpt-oss-120b` | `model.links` | [['artesunic acid', 'dihydroartemisinin', 'metabolism'], ['artemether', 'dihydroartemisinin', 'metabolism'], ['arteether', 'dihydroartemisinin', 'metabolism'], ['artelinic acid', 'dihydroartemisinin', 'metabolism']] | [['artemether', 'dihydroartemisinin', 'metabolism'], ['arteether', 'dihydroartemisinin', 'metabolism'], ['artesunic acid', 'dihydroartemisinin', 'metabolism'], ['artelinic acid', 'dihydroartemisinin', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[bioavailability after intramuscular injection]` | 105 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability after intramuscular injection]` | 34 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability after intramuscular injection]` | 95 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability after intramuscular injection]` | 54 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability after intramuscular injection]` | 85 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bioavailability after intramuscular injection]` |  | 105 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` | 0.87 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` | 0.72 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` | 0.39 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` | 0.67 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` | 0.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[steady-state volume of distribution]` |  | 0.39 | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life after intravenous dosing]` | 0.35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life after intravenous dosing]` | 0.45 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life after intravenous dosing]` | 1.35 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life after intravenous dosing]` | 0.53 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life after intravenous dosing]` | 0.95 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[terminal half-life after intravenous dosing]` |  | 1.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[volume of distribution]` |  | 0.5 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | artesunic acid | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | dihydroartemisinin | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 15 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q57 | pass | [time] |  | ['Li_1998:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Li_1998:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Li_1998:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Li_1998:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Li_1998:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Li_1998:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Li_1998:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Li_1998:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Li_1998:abstract'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Li_1998:abstract'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 0.39 L | ['Li_1998:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 0.5 L | ['Li_1998:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 0.67 L | ['Li_1998:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 0.72 L | ['Li_1998:abstract'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 0.87 L | ['Li_1998:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bartesunate%5D%20Artesunate_Li1998_reference&body=Drug%3A%20artesunate%0ARecord%3A%20Artesunate_Li1998_reference%0APaper%3A%20Li_1998%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_artesunate/Artesunate_Li1998_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 06:46 UTC</sub>
