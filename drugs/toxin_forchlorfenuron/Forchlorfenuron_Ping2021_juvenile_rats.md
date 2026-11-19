<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Forchlorfenuron&quot;,&quot;href&quot;:&quot;drugs/toxin_forchlorfenuron/&quot;},{&quot;label&quot;:&quot;Ping_2021 \u00b7 juvenile_rats&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Forchlorfenuron — `Forchlorfenuron_Ping2021_juvenile_rats`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> Only clearance was extracted — no volume.

<div class="pk-model-meta" hidden drug="Forchlorfenuron" model-id="Forchlorfenuron_Ping2021_juvenile_rats" status="needs_review" stale="false" population="adult and juvenile rats" measured-compound="forchlorfenuron" parameterization="apparent" topology="1C"></div>

## Citation
Ping L, Xu B, Zhou Q, Hong Y, Sun Q, Wang J et al. Comparative Pharmacokinetic Study of Forchlorfenuron in Adult and Juvenile Rats. Molecules (Basel, Switzerland) 26(14) (2021).
  ·  DOI: [10.3390/molecules26144276](https://doi.org/10.3390/molecules26144276)

## Population and dosing

**Population:** adult and juvenile rats · condition healthy · age group mixed.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax (ng/mL) | Cmax | 1148.9 | ng/mL |
| T1/2 (h) | t1/2z | 2.6 | h |
| CLz (L/h/kg) | CL/F | 3.8 | L/h/kg |
| MRT0–t (h) | MRT | 2.6 | h |
| AUC0–t (ng /mL·h) | AUCt | 2745.5 | ng /mL·h |
| AUC0–∞ (ng /mL·h) | AUC∞ | 2753.6 | ng /mL·h |
| F (%) | Fab | 10.2 | % |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.923). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. A reported unit could not be converted (Fab), so that value has no SI equivalent. Extracted — forchlorfenuron: Cmax 1.15e+03 ng/mL, t1/2z 2.6 h, CL/F 3.8 L/h/kg, MRT 2.6 h, AUCt 2.75e+03 ng /mL·h, AUC∞ 2.75e+03 ng /mL·h, Fab 10.2 %.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the value of tvcl: this record has none, the second reading none. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax (ng/mL) | `Q32` · Cmax | 1148.9 | ng/mL | 0.001149 | kg/m3 | ng/ml | exact (1) | molecules-26-04276-t004:row5:col2 |
| T1/2 (h) | `Q57` · t1/2z | 2.6 | h | 9360 | s | h | half_life_rule (0.95) | molecules-26-04276-t004:row5:col3 |
| CLz (L/h/kg) | `Q27` · CL/F | 3.8 | L/h/kg | 7.389e-05 | m3/s | l/(h·kg) | exact (1) | molecules-26-04276-t004:row5:col4 |
| MRT0–t (h) | `Q53` · MRT | 2.6 | h | 9360 | s | h | exact (1) | molecules-26-04276-t004:row5:col5 |
| AUC0–t (ng /mL·h) | `Q19` · AUCt | 2745.5 | ng /mL·h | 9.884 | kg*s/m3 | ng/(h·ml) | exact (1) | molecules-26-04276-t004:row5:col6 |
| AUC0–∞ (ng /mL·h) | `Q17` · AUC∞ | 2753.6 | ng /mL·h | 9.913 | kg*s/m3 | ng/(h·ml) | exact (1) | molecules-26-04276-t004:row5:col7 |
| F (%) | `Q40` · Fab | 10.2 | % |  |  |  | exact (1) | molecules-26-04276-t004:row5:col8 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| TVCL | Q22 | tv_prefix |

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Cmax (ng/mL)'; source reconciliation required
- table representations disagree for 'T1/2 (h)'; source reconciliation required
- table representations disagree for 'CLz (L/h/kg)'; source reconciliation required
- table representations disagree for 'MRT0–t (h)'; source reconciliation required
- table representations disagree for 'AUC0–t (ng /mL·h)'; source reconciliation required
- table representations disagree for 'AUC0–∞ (ng /mL·h)'; source reconciliation required
- table representations disagree for 'F (%)'; source reconciliation required
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=forchlorfenuron
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- bound model equation to Q22 (CL): TVCL = CLPOP * (BW/70)^0.75 * (PNA/6.8)^θPNA
- Q22 (CL) is equation-defined: value moved to equation-variable 'TVCL'; equation kept verbatim
- status held at "Needs review" — not promoted
- population split: 'juvenile rats' subgroup of Ping_2021 (paper reports 5 populations: 30 (p.o.), 5 (i.v.), 90 (p.o.), adult rats, juvenile rats)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table molecules-26-04276-t004: ragged_grid
- transposed table molecules-26-04276-t004: logical view retains original source coordinates
- table molecules-26-04276-t004: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 4
- captured model equation TVCL = CLPOP * (BW/70)^0.75 * (PNA/6.8)^θPNA

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | partly confirmed | 0.923 (12/13 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[tvcl]` |  |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 8 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['molecules-26-04276-t004:row5:col7'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['molecules-26-04276-t004:row5:col6'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['molecules-26-04276-t004:row5:col4'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['molecules-26-04276-t004:row5:col2'] |
| C5_dimension_Q53 | pass | [time] |  | ['molecules-26-04276-t004:row5:col5'] |
| C5_dimension_Q57 | pass | [time] |  | ['molecules-26-04276-t004:row5:col3'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 266 L/h | ['molecules-26-04276-t004:row5:col4'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bforchlorfenuron%5D%20Forchlorfenuron_Ping2021_juvenile_rats&body=Drug%3A%20forchlorfenuron%0ARecord%3A%20Forchlorfenuron_Ping2021_juvenile_rats%0APaper%3A%20Ping_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_forchlorfenuron/Forchlorfenuron_Ping2021_juvenile_rats%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 11:46 UTC</sub>
