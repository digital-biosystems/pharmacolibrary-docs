<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Sodium selenite&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/&quot;},{&quot;label&quot;:&quot;Symonds_1981 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumSelenite_Brodin2015_reference&quot;,&quot;label&quot;:&quot;Brodin_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Brodin2015_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Jayachandran2021_reference&quot;,&quot;label&quot;:&quot;Jayachandran_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Jayachandran2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Patterson1992_reference&quot;,&quot;label&quot;:&quot;Patterson_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Patterson1992_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Zhang2020_reference&quot;,&quot;label&quot;:&quot;Zhang_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Zhang2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Jger2016_reference&quot;,&quot;label&quot;:&quot;J\u00e4ger_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Jger2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;SodiumSelenite_Xing2019_reference&quot;,&quot;label&quot;:&quot;Xing_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_sodium_selenite/SodiumSelenite_Xing2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Sodium selenite — `SodiumSelenite_Symonds1981_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

> disposition incomplete — retention function missing A3, λ1 or its half-life, λ2 or its half-life — TK_Retention cannot be filled.

<div class="pk-model-meta" hidden drug="Sodium selenite" model-id="SodiumSelenite_Symonds1981_reference" status="needs_review" stale="false" population="steers" measured-compound="Selenium" parameterization="mechanistic" topology="retention"></div>

## Citation
Symonds HW, Mather DL, Vagg MJ. The excretion of selenium in bile and urine of steers: the influence of form and amount of Se salt. The British journal of nutrition 46(3):487–493 (1981).
  ·  DOI: [10.1079/bjn19810057](https://doi.org/10.1079/bjn19810057)

## Population and dosing

**Population:** steers · condition healthy · age group adult · n = 4.

**Dosing:** 5, 5000 pg, iv, multiple, every 168 h.

**Dosed compound ≠ measured compound:** dosed Sodium selenite, measured Selenium.

> **Species: cattle.** This record comes from an animal study (cattle), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 3 exponential pools (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| A1 | A1 | 1900 | ml |
| A2 | A2 | 2120 | ml |
| γ | t1/2γ | 693 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**disposition incomplete — retention function missing A3, λ1 or its half-life, λ2 or its half-life — TK_Retention cannot be filled.**

A reported unit could not be converted (A1 and A2), so that value has no SI equivalent. Extracted — sodium selenite: A1 1.9e+03 ml, A2 2.12e+03 ml, t1/2γ 693 min.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| A1 | `Q415` · A1 | 1900 | ml |  |  | ml | exact (1) | Symonds_1981_table_3:row0:col2, Symonds_1981_table_3:row0:col5, Symonds_1981_table_3:row4:col2, Symonds_1981_table_3:row4:col5 |
| A2 | `Q416` · A2 | 2120 | ml |  |  | ml | exact (1) | Symonds_1981_table_3:row1:col2, Symonds_1981_table_3:row1:col5, Symonds_1981_table_3:row5:col2, Symonds_1981_table_3:row5:col5 |
| γ | `Q89` · t1/2γ | 693 | min | 4.158e+04 | s | min | llm (0.6) | Symonds_1981_table_1:row3:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q415 ('B', value '2220') — already have one for this compound
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['Symonds_1981_table_3:row3:col2', 'Symonds_1981_table_3:row3:col5', 'Symonds_1981_table_3:row7:col2', 'Symonds_1981_table_3:row7:col5'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Selenium
- toxin: 3 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- review gap-fill skipped: this record measures 'Selenium', not sodium_selenite — the review values are the parent's

**Extraction notes:**
- table Symonds_1981_table_3: unbound_uncertainty
- table Symonds_1981_table_3: unparsed_numeric_cell
- table Symonds_1981_table_1: missing_label
- table Symonds_1981_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (1 record(s))
- LLM selected parameter table(s) 1
- toxin: the located table(s) gave no kinetic value — 19 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q89 | pass | [time] |  | ['Symonds_1981_table_1:row3:col2'] |
| C8_topology | pass |  |  |  |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_sodium_selenite/SodiumSelenite_Symonds1981_reference/SodiumSelenite_Symonds1981_reference_matlab.zip" download>SodiumSelenite_Symonds1981_reference_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_sodium_selenite/SodiumSelenite_Symonds1981_reference/SodiumSelenite_Symonds1981_reference_sbml.zip" download>SodiumSelenite_Symonds1981_reference_sbml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_sodium_selenite/SodiumSelenite_Symonds1981_reference/SodiumSelenite_Symonds1981_reference_cellml.zip" download>SodiumSelenite_Symonds1981_reference_cellml.zip</a> <span class="pk-size">(3.3 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Symonds HW, Mather DL, Vagg MJ. The excretion of selenium in bile and urine of steers: the influence of form and amount of Se salt. The British journal of nutrition 46(3):487–493 (1981). [doi:10.1079/bjn19810057](https://doi.org/10.1079/bjn19810057)

**This record:** Pharmacolibrary, model `SodiumSelenite_Symonds1981_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_sodium_selenite/SodiumSelenite_Symonds1981_reference>

```bibtex
@misc{pharmacolibrary_SodiumSeleniteSymonds1981reference,
  title  = {{Pharmacolibrary model SodiumSelenite_Symonds1981_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_sodium_selenite/SodiumSelenite_Symonds1981_reference},
  note   = {Parameters from doi:10.1079/bjn19810057},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsodium_selenite%5D%20SodiumSelenite_Symonds1981_reference&body=Drug%3A%20sodium_selenite%0ARecord%3A%20SodiumSelenite_Symonds1981_reference%0APaper%3A%20Symonds_1981%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_sodium_selenite/SodiumSelenite_Symonds1981_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 01:13 UTC</sub>
