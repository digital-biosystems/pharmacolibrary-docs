<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Enniatin B&quot;,&quot;href&quot;:&quot;drugs/toxin_enniatin_b/&quot;},{&quot;label&quot;:&quot;Devreese_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;EnniatinB_Escriv2017_reference&quot;,&quot;label&quot;:&quot;Escriv\u00e1_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_enniatin_b/EnniatinB_Escriv2017_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;EnniatinB_Ojiro2023_reference&quot;,&quot;label&quot;:&quot;Ojiro_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_enniatin_b/EnniatinB_Ojiro2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;EnniatinB_Fraeyman2016_reference&quot;,&quot;label&quot;:&quot;Fraeyman_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_enniatin_b/EnniatinB_Fraeyman2016_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Enniatin B — `EnniatinB_Devreese2014_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> The retention function lacks distribution rate constants, and the model's terminal half-life deviates from the reported 1.57 h by a factor of 2.3.

<div class="pk-model-meta" hidden drug="Enniatin B" model-id="EnniatinB_Devreese2014_reference" status="needs_review" stale="false" population="pigs" measured-compound="Enniatin B1" parameterization="mechanistic" topology="retention"></div>

## Citation
Devreese M, Broekaert N, De Mil T, Fraeyman S, De Backer P, Croubels S. Pilot toxicokinetic study and absolute oral bioavailability of the Fusarium mycotoxin enniatin B1 in pigs. Food and chemical toxicology : an international journal published for the British Industrial Biological Research Association 63:161–165 (2014).
  ·  DOI: [10.1016/j.fct.2013.11.005](https://doi.org/10.1016/j.fct.2013.11.005)

## Population and dosing

**Population:** pigs · condition healthy · age group adult.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 2 exponential pools (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| T 1/2a | t1/2z | 0.15 | h |
| T 1/2elα | t1/2α | 0.15 | h |
| T 1/2elβ | t1/2β | 1.57 | h |
| The systemic clearance | CL | 6.5 | L/h/kg |
| a volume of distribution (VD) of | V | 33.9 | L/kg |
| ENNB | tlag | 9.6 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The retention function lacks distribution rate constants, and the model's terminal half-life deviates from the reported 1.57 h by a factor of 2.3.**

The model uses a retention structure but does not define the transfer parameters A1 and A2, preventing the characterization of distribution kinetics. Additionally, the simulated terminal half-life fails consistency checks against the reported value of 1.57 hours, with the model yielding a result 2.3025 times the paper's estimate. Extracted — Enniatin B1: t1/2z 0.15 h, t1/2α 0.15 h, t1/2β 1.57 h, CL 6.5 L/h/kg, V 33.9 L/kg, tlag 9.6 min.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| T 1/2a | `Q57` · t1/2z | 0.15 | h | 540 | s | h | toxin_unit_relink (0.85) | Devreese_2014:other_prose |
| T 1/2elα | `Q59` · t1/2α | 0.15 | h | 540 | s | h | half_life_rule (0.95) | Devreese_2014:other_prose |
| T 1/2elβ | `Q60` · t1/2β | 1.57 | h | 5652 | s | h | half_life_rule (0.95) | Devreese_2014:other_prose |
| The systemic clearance | `Q22` · CL | 6.5 | L/h/kg | 0.0001264 | m3/s | L/h | review_gapfill (0.7) | Escrivá_2017:review |
| a volume of distribution (VD) of | `Q61` · V | 33.9 | L/kg | 2.373 | m3 | L | review_gapfill (0.7) | Behr_2025:review |
| ENNB | `Q83` · tlag | 9.6 | min | 576 | s | h | review_gapfill (0.7) | Juan-García_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q57 ('T 1/2a'=0.15) from results prose — parameter table was unreadable
- salvaged Q59 ('T 1/2elα'=0.15) from results prose — parameter table was unreadable
- salvaged Q60 ('T 1/2elβ'=1.57) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Enniatin B1
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- molar mass: no plausible PubChem entry for 'Enniatin B1' ('Enniatin B1') — left in mass units
- molar mass: none found for 'Enniatin B1' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Escrivá_2017's review values (primary lacked it)
- gap-filled Q61 (V) from Behr_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Juan-García_2024's review values (primary lacked it)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- text-pointer recovery found no readable extracted parameter table
- toxin: the located table(s) gave no kinetic value — 4 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | fail |  |  |  |  |  |
| C1_half_life_beta | fail | 1.57 | 3.615 | 2.303 | 0.25 | reported t½β |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  |  |  | ['Escrivá_2017:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  |  |  | ['Behr_2025:review'] |
| C5_dimension_Q83 | pass | [time] |  |  |  | ['Juan-García_2024:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.5 |  |  | ['Escrivá_2017:review'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 455 L/h |  |  | ['Escrivá_2017:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.37e+03 L |  |  | ['Behr_2025:review'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_enniatin_b/EnniatinB_Devreese2014_reference/EnniatinB_Devreese2014_reference_matlab.zip" download>EnniatinB_Devreese2014_reference_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_enniatin_b/EnniatinB_Devreese2014_reference/EnniatinB_Devreese2014_reference_sbml.zip" download>EnniatinB_Devreese2014_reference_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_enniatin_b/EnniatinB_Devreese2014_reference/EnniatinB_Devreese2014_reference_cellml.zip" download>EnniatinB_Devreese2014_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Devreese M, Broekaert N, De Mil T, Fraeyman S, De Backer P, Croubels S. Pilot toxicokinetic study and absolute oral bioavailability of the Fusarium mycotoxin enniatin B1 in pigs. Food and chemical toxicology : an international journal published for the British Industrial Biological Research Association 63:161–165 (2014). [doi:10.1016/j.fct.2013.11.005](https://doi.org/10.1016/j.fct.2013.11.005)

**This record:** Pharmacolibrary, model `EnniatinB_Devreese2014_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_enniatin_b/EnniatinB_Devreese2014_reference>

```bibtex
@misc{pharmacolibrary_EnniatinBDevreese2014reference,
  title  = {{Pharmacolibrary model EnniatinB_Devreese2014_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_enniatin_b/EnniatinB_Devreese2014_reference},
  note   = {Parameters from doi:10.1016/j.fct.2013.11.005},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benniatin_b%5D%20EnniatinB_Devreese2014_reference&body=Drug%3A%20enniatin_b%0ARecord%3A%20EnniatinB_Devreese2014_reference%0APaper%3A%20Devreese_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_enniatin_b/EnniatinB_Devreese2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-18 23:27 UTC</sub>
