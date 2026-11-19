<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Ochratoxin A&quot;,&quot;href&quot;:&quot;drugs/toxin_ochratoxin_a/&quot;},{&quot;label&quot;:&quot;Zhu_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;OchratoxinA_Bernhoft2017_reference&quot;,&quot;label&quot;:&quot;Bernhoft_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ochratoxin_a/OchratoxinA_Bernhoft2017_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;OchratoxinA_Fuchs1992_reference&quot;,&quot;label&quot;:&quot;Fuchs_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ochratoxin_a/OchratoxinA_Fuchs1992_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ochratoxin A — `OchratoxinA_Zhu2024_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> CL and V have no unit.

<div class="pk-model-meta" hidden drug="Ochratoxin A" model-id="OchratoxinA_Zhu2024_reference" status="needs_review" stale="false" population="lactating sows" measured-compound="Ochratoxin A" parameterization="mechanistic" topology="1C"></div>

## Citation
Zhu Q, Qu H, Kang R, Zheng Y, Guo Q, Huang S et al. The Toxicokinetics, Excretion Patterns, and Milk Transmission of Ochratoxin A in Lactating Sows. Toxins 16(3) (2024).
  ·  DOI: [10.3390/toxins16030128](https://doi.org/10.3390/toxins16030128)

## Population and dosing

**Population:** lactating sows · condition healthy · age group adult · n = 4.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| elimination half-life (OTA) | t1/2z | 78.47 | h |
| Cl (OTA) | CL | 0.0014 | L·kg BW−1·h–1 |
| Vd (OTA) | V | 0.16 | L/kg BW |
| half-life of ... OTα | t1/2α | 33.61 | h |
| GT | tlag | 6.32 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL and V have no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL and V), so that value has no SI equivalent. Extracted — ochratoxin a: t1/2z 78.5 h, CL 0.0014 L·kg BW−1·h–1, V 0.16 L/kg BW, t1/2α 33.6 h, tlag 6.32 min.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| elimination half-life (OTA) | `Q57` · t1/2z | 78.47 | h | 2.825e+05 | s | h | half_life_rule (0.95) | Zhu_2024:other_prose |
| Cl (OTA) | `Q22` · CL | 0.0014 | L·kg BW−1·h–1 |  |  | L·kg BW−1·h–1 | exact (1) | Zhu_2024:other_prose |
| Vd (OTA) | `Q61` · V | 0.16 | L/kg BW |  |  | L/kg BW | exact (1) | Zhu_2024:other_prose |
| half-life of ... OTα | `Q59` · t1/2α | 33.61 | h | 1.21e+05 | s | h | half_life_rule (0.95) | Zhu_2024:discussion_prose |
| GT | `Q83` · tlag | 6.32 | min | 379.2 | s | h | review_gapfill (0.7) | Berger_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Tmax'
- dropped value-less row: 'Cmax'
- dropped value-less row: 'T1/2Elim'
- dropped value-less row: 'AUC'
- dropped value-less row: 'MRT'
- dropped value-less row: 'Cl'
- dropped value-less row: 'Vd'
- salvaged Q57 ('elimination half-life (OTA)'=78.47) from results prose — parameter table was unreadable
- salvaged Q22 ('Cl (OTA)'=0.0014) from results prose — parameter table was unreadable
- salvaged Q61 ('Vd (OTA)'=0.16) from results prose — parameter table was unreadable
- salvaged Q59 ('half-life of ... OTα'=33.61) from results prose — parameter table was unreadable
- implicit units: LLM call failed (JSONDecodeError: Extra data: line 1 column 174 (char 173)) — units left missing
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Ochratoxin A
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Zhu_2024:discussion_prose, Zhu_2024:other_prose, toxins-16-00128-t003:footnote); populations value of ota, value of otα kept as separate records
- row roles (LLM): model_class=noncompartmental; 0/15 row label(s) assigned, 0 linked by role
- molar mass: none found for 'Ochratoxin alpha (OTα)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Berger_2025's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | pass | 78.47 | 79.22 | 1.01 | 0.25 | reported t½β |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Berger_2025:review'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | L·kg BW−1·h–1 |  |  | ['Zhu_2024:other_prose'] |
| C5_unit_missing_Q61 | fail | [length] ** 3 | L/kg BW |  |  | ['Zhu_2024:other_prose'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0014 |  |  | ['Zhu_2024:other_prose'] |
| C8_topology | pass |  |  |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bochratoxin_a%5D%20OchratoxinA_Zhu2024_reference&body=Drug%3A%20ochratoxin_a%0ARecord%3A%20OchratoxinA_Zhu2024_reference%0APaper%3A%20Zhu_2024%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ochratoxin_a/OchratoxinA_Zhu2024_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 15:43 UTC</sub>
