<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Nickel trioxide&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/&quot;},{&quot;label&quot;:&quot;Tanaka_1988 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_a&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_a.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_b&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_b&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_b.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_c&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_c&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_c.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;NickelTrioxide_Shinohara2017_nio_d&quot;,&quot;label&quot;:&quot;Shinohara_2017_nio_d&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nickel_trioxide/NickelTrioxide_Shinohara2017_nio_d.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nickel trioxide — `NickelTrioxide_Tanaka1988_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> T1/2z has no unit; disposition incomplete — retention function missing λ1 or its half-life — TK_Retention cannot be filled.

<div class="pk-model-meta" hidden drug="Nickel trioxide" model-id="NickelTrioxide_Tanaka1988_reference" status="needs_review" stale="false" population="male Wistar rats" measured-compound="nickel" parameterization="mechanistic" topology="retention"></div>

## Citation
Tanaka I, Horie A, Haratake J, Kodama Y, Tsuchiya K. Lung burden of green nickel oxide aerosol and histopathological findings in rats after continuous inhalation. Biological trace element research 16(1):19–26 (1988).
  ·  DOI: [10.1007/BF02795330](https://doi.org/10.1007/BF02795330)

## Population and dosing

**Population:** male Wistar rats · condition inhalation exposure · age group adult.

**Dosing:** 0.3, 1.2 mg/m3, inhaled, multiple, every 24 h.

**Dosed compound ≠ measured compound:** dosed green nickel oxide, measured nickel.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| biological half time | t1/2z | 7.7 | too |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**T1/2z has no unit; disposition incomplete — retention function missing λ1 or its half-life — TK_Retention cannot be filled.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (t1/2z), so that value has no SI equivalent. None of the extracted parameters is nickel trioxide's own; they describe nickel. Extracted — nickel: t1/2z 7.7 too.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| biological half time | `Q57` · t1/2z | 7.7 | too | too | fuzzy (0.95) | Tanaka_1988:prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'na' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '12 mcb' — extend the ontology if this is a real PK parameter (source ['Tanaka_1988_table_1:row0:col2', 'Tanaka_1988_table_1:row1:col2'])
- dropped unlinked row (NIL): '12-8 mo' — extend the ontology if this is a real PK parameter (source ['Tanaka_1988_table_1:row2:col2', 'Tanaka_1988_table_1:row3:col2', 'Tanaka_1988_table_1:row4:col2', 'Tanaka_1988_table_1:row5:col2'])
- salvaged Q57 ('biological half time'=7.7) from results prose — parameter table was unreadable
- implicit units: 'biological half time' — the LLM proposed 'mo', whose dimension does not fit Q57; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nickel
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- molar mass: none of 1 PubChem candidate(s) is 'nickel' (LLM) — left in mass units
- molar mass: none found for 'nickel' — its concentrations stay mass-only

**Extraction notes:**
- table Tanaka_1988_table_1: unbound_uncertainty
- toxin: the located table(s) gave no kinetic value — 8 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_unit_missing_Q57 | fail | [time] | too | ['Tanaka_1988:prose'] |
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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_nickel_trioxide/NickelTrioxide_Tanaka1988_reference/NickelTrioxide_Tanaka1988_reference_matlab.zip" download>NickelTrioxide_Tanaka1988_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_nickel_trioxide/NickelTrioxide_Tanaka1988_reference/NickelTrioxide_Tanaka1988_reference_sbml.zip" download>NickelTrioxide_Tanaka1988_reference_sbml.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_nickel_trioxide/NickelTrioxide_Tanaka1988_reference/NickelTrioxide_Tanaka1988_reference_cellml.zip" download>NickelTrioxide_Tanaka1988_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Tanaka I, Horie A, Haratake J, Kodama Y, Tsuchiya K. Lung burden of green nickel oxide aerosol and histopathological findings in rats after continuous inhalation. Biological trace element research 16(1):19–26 (1988). [doi:10.1007/BF02795330](https://doi.org/10.1007/BF02795330)

**This record:** Pharmacolibrary, model `NickelTrioxide_Tanaka1988_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_nickel_trioxide/NickelTrioxide_Tanaka1988_reference>

```bibtex
@misc{pharmacolibrary_NickelTrioxideTanaka1988reference,
  title  = {{Pharmacolibrary model NickelTrioxide_Tanaka1988_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_nickel_trioxide/NickelTrioxide_Tanaka1988_reference},
  note   = {Parameters from doi:10.1007/BF02795330},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnickel_trioxide%5D%20NickelTrioxide_Tanaka1988_reference&body=Drug%3A%20nickel_trioxide%0ARecord%3A%20NickelTrioxide_Tanaka1988_reference%0APaper%3A%20Tanaka_1988%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nickel_trioxide/NickelTrioxide_Tanaka1988_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 06:28 UTC</sub>
