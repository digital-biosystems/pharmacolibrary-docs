<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Alternariol&quot;,&quot;href&quot;:&quot;drugs/toxin_alternariol/&quot;},{&quot;label&quot;:&quot;Borsos_2026 \u00b7 female&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Alternariol — `Alternariol_Borsos2026_female`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q66 unit nmol/mg/min ([substance] / [mass] / [time]) vs [mass] / [time]; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).

<div class="pk-model-meta" hidden drug="Alternariol" model-id="Alternariol_Borsos2026_female" status="rejected" stale="false" population="Sprague-Dawley rat and mouse (model evaluation) extrapolated to adult male, adult female, male child and male toddler humans" measured-compound="Alternariol (AOH)" parameterization="mechanistic" topology="1C"></div>

## Citation
Borsos E, Descamps B, Hetzschold N, Varga E, Marko D, Aichinger G. Human internal exposures to alternariol and its monomethyl ether are predicted below thresholds of in vitro toxicity by physiologically based kinetic modeling. Archives of toxicology 100(11):5009–5025 (2026).
  ·  DOI: [10.1007/s00204-026-04485-x](https://doi.org/10.1007/s00204-026-04485-x)

## Population and dosing

**Population:** Sprague-Dawley rat and mouse (model evaluation) extrapolated to adult male, adult female, male child and male toddler humans · condition healthy (dietary exposure to foodborne mycotoxins) · age group mixed.

**Dosed compound ≠ measured compound:** dosed Alternariol (AOH) and alternariol monomethyl ether (AME) via oral dietary exposure, measured Alternariol (AOH).

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Population/ S9 fractions | equation variable | 2.54 |  |
| Vmax (nmol/mg/min) | Vmax | 8.12 | nmol/mg/min |
| rat intrinsic clearance value | CL | 19.49 | L/min/kg body weight |
| V | V | 1.5 | L/day |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q66 unit nmol/mg/min ([substance] / [mass] / [time]) vs [mass] / [time]; c9 clearance/volume outside physiological window (implausible magnitude — unit/scale extraction error).**

A reported unit could not be converted (Vmax and CL), so that value has no SI equivalent. Extracted — alternariol: Vmax 8.12 nmol/mg/min; Alternariol (AOH): CL 19.5 L/min/kg body weight, V 1.5 L/day.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has Alternariol (AOH) and alternariol monomethyl ether (AME) via oral dietary exposure, the second reading Alternariol (AOH); it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Population/ S9 fractions | `Q900` · equation variable | 2.54 |  | 2.54 |  |  | llm (0.6) | Tab2:row4:col1, Tab2:row10:col1 |
| Vmax (nmol/mg/min) | `Q66` · Vmax | 8.12 | nmol/mg/min |  |  | nM/(min·mg) | special_case (0.95) | Tab2:row4:col2, Tab2:row10:col2 |
| rat intrinsic clearance value | `Q22` · CL | 19.49 | L/min/kg body weight |  |  | L/min/kg body weight | boundary (0.8) | Borsos_2026:other_prose |
| V | `Q61` · V | 1.5 | L/day | 1.736e-08 | m3/s | L | review_gapfill (0.7) | Fan_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Population/ S9 fractions'; source reconciliation required
- table representations disagree for 'Vmax (nmol/mg/min)'; source reconciliation required
- unit_dimension_mismatch: 'Vmax (nmol/mg/min)' → Q66 (unit '[substance] / [mass] / [time]' vs ontology '[mass] / [time]') — route to review
- salvaged Q22 ('rat intrinsic clearance value'=19.49) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Alternariol (AOH)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 3 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'female' subgroup of Borsos_2026 (paper reports 8 populations: alternariol (aoh), alternariol monomethyl ether (ame), female, in silico, in vivo, male, male child, maletoddler)
- row roles (LLM): model_class=pbpk; 0/9 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'AOH-glucuronide' — its concentrations stay mass-only
- molar mass: none found for 'AME-glucuronide' — its concentrations stay mass-only
- molar mass: none found for 'Alternariol (AOH)' — its concentrations stay mass-only
- gap-filled Q61 (V) from Fan_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Tab2: ragged_grid
- transposed table Tab2: logical view retains original source coordinates
- table Tab2: representations disagree; selected evidence retained, not merged
- transposed table Borsos_2026_table_3: logical view retains original source coordinates
- companion parameter table 3 transcribed (6 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.714 (5/7 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[population/ s9 fractions]` | 2.54 |  | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | Alternariol (AOH) and alternariol monomethyl ether (AME) via oral dietary exposure | Alternariol (AOH) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q61 | pass | [length] ** 3 / [time] |  | ['Fan_2021:review'] |
| C5_dimension_Q66 | fail | [mass] / [time] | nmol/mg/min ([substance] / [mass] / [time]) | ['Tab2:row4:col2', 'Tab2:row10:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | L/min/kg body weight | ['Borsos_2026:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 19.49 | ['Borsos_2026:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | fail | volume within physiological range | 1.74e-05 L | ['Fan_2021:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balternariol%5D%20Alternariol_Borsos2026_female&body=Drug%3A%20alternariol%0ARecord%3A%20Alternariol_Borsos2026_female%0APaper%3A%20Borsos_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alternariol/Alternariol_Borsos2026_female%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 14:09 UTC</sub>
