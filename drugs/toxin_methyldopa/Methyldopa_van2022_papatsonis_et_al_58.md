<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Methyldopa&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/&quot;},{&quot;label&quot;:&quot;van_2022 \u00b7 papatsonis_et_al_58&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methyldopa_AdamiakGiera2021_reference&quot;,&quot;label&quot;:&quot;Adamiak-Giera_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_AdamiakGiera2021_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methyldopa_Campbell1992_reference&quot;,&quot;label&quot;:&quot;Campbell_1992_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_Campbell1992_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methyldopa_Skerjanec1995_reference&quot;,&quot;label&quot;:&quot;Skerjanec_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_Skerjanec1995_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methyldopa_van2022_haas_et_al_64&quot;,&quot;label&quot;:&quot;van_2022_haas_et_al_64&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methyldopa/Methyldopa_van2022_haas_et_al_64.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methyldopa — `Methyldopa_van2022_papatsonis_et_al_58`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; cL/F has no unit.

<div class="pk-model-meta" hidden drug="Methyldopa" model-id="Methyldopa_van2022_papatsonis_et_al_58" status="needs_review" stale="false" population="pregnant women" measured-compound="Methyldopa" parameterization="apparent" topology="1C"></div>

## Citation
van de Vusse D, Mian P, Schoenmakers S, Flint RB, Visser W, Allegaert K et al. Pharmacokinetics of the most commonly used antihypertensive drugs throughout pregnancy methyldopa, labetalol, and nifedipine: a systematic review. European journal of clinical pharmacology 78(11):1763–1776 (2022).
  ·  DOI: [10.1007/s00228-022-03382-3](https://doi.org/10.1007/s00228-022-03382-3)

## Population and dosing

**Population:** pregnant women · condition pregnancy · age group adult.

**Dosing:** 10, 20, 250, 500 mg, oral, multiple.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 7 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Time of maximum serum concentration (Tmax) | tmax | 1.2 | h |
| Maximum serum concentration | Cmax | 127 | ng/mL |
| elimination half-life | t1/2z | 1.7 | h |
| CL/F (high expressers of CYP3A5) | CL/F | 232.0 | µg/mL |
| V/F | V/F | 32.4 | L |
| ka | kabs | 0.18 | min−1 |
| lag time | tlag | 9.97 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; cL/F has no unit.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Adamiak-Giera_2021) cannot stand in for this paper's evidence. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (Cmax and CL/F), so that value has no SI equivalent. Extracted — methyldopa: tmax 1.2 h, Cmax 127 ng/mL, t1/2z 1.7 h, CL/F 232 µg/mL, V/F 32.4 L, kabs 0.18 min−1, tlag 9.97 min.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Time of maximum serum concentration (Tmax) | `Q56` · tmax | 1.2 | h | 4320 | s | h | llm (0.6) | Tab5:row4:col3 |
| Maximum serum concentration | `Q32` · Cmax | 127 | ng/mL |  |  | ng/mL | llm (0.6) | Tab5:row5:col3 |
| elimination half-life | `Q57` · t1/2z | 1.7 | h | 6120 | s | h | half_life_rule (0.95) | van_2022:other_prose |
| CL/F (high expressers of CYP3A5) | `Q27` · CL/F | 232.0 | µg/mL |  |  | µg/mL | exact (1) | van_2022:other_prose |
| V/F | `Q76` · V/F | 32.4 | L | 0.0324 | m3 | L | review_gapfill (0.7) | Adamiak-Giera_2021:review |
| ka | `Q49` · kabs | 0.18 | min−1 | 0.003 | 1/s | 1/h | review_gapfill (0.7) | Adamiak-Giera_2021:review |
| lag time | `Q83` · tlag | 9.97 | min | 598.2 | s | h | review_gapfill (0.7) | Adamiak-Giera_2021:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'papatsonis et al. [58]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Oral dose' — extend the ontology if this is a real PK parameter (source ['Tab5:row1:col3'])
- dropped unlinked row (NIL): 'Maternal mean nifedipine concentration' — extend the ontology if this is a real PK parameter (source ['Tab5:row7:col3'])
- dropped value-less row: 'Table 5. Pharmacokinetic parameters of nifedipine as tocolytic'
- dropped value-less row: 'Given means are reported'
- dropped value-less row: 'NA not applicable'
- dropped value-less row: 'h hours'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 4 (source ['Tab5:footnote']); the table cell was unparseable — needs review
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number None (source ['Tab5:footnote']); the table cell was unparseable — needs review
- salvaged Q57 ('elimination half-life'=1.7) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F (high expressers of CYP3A5)'=232.0) from results prose — parameter table was unreadable
- implicit units: 'Time of maximum serum concentration (Tmax)' → h (from the popPK convention: "The text defines tmax as 'time at which the maximum serum concentration was reached' and lists it alongside other parame")
- implicit units: 'Maximum serum concentration' → ng/mL (from the popPK convention: "The text reports nifedipine concentrations explicitly in ng/mL (e.g., 'mean maternal serum concentration of nifedipine .")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Methyldopa
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- status held at "Needs review" — not promoted
- population split: 'papatsonis et al. [58]' subgroup of van_2022 (paper reports 7 populations: ferguson et al. [63], haas et al. [60], haas et al. [64], marin et al. [67], papatsonis et al. [58], rogers et al. [48], ter laak et al. [56])
- gap-filled Q76 (V/F) from Adamiak-Giera_2021's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Adamiak-Giera_2021's review values (primary lacked it)
- gap-filled Q83 (tlag) from Adamiak-Giera_2021's review values (primary lacked it)

**Extraction notes:**
- table Tab5: unbound_uncertainty
- table Tab5: unparsed_numeric_cell
- table van_2022_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (8 record(s))
- LLM selected parameter table(s) 3, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab5:row5:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Adamiak-Giera_2021:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab5:row4:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['Adamiak-Giera_2021:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Adamiak-Giera_2021:review'] |
| C5_unit_missing_Q27 | fail | [length] ** 3 / [time] | µg/mL | ['van_2022:other_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q76 | pass | volume within physiological range | 32.4 L | ['Adamiak-Giera_2021:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethyldopa%5D%20Methyldopa_van2022_papatsonis_et_al_58&body=Drug%3A%20methyldopa%0ARecord%3A%20Methyldopa_van2022_papatsonis_et_al_58%0APaper%3A%20van_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methyldopa/Methyldopa_van2022_papatsonis_et_al_58%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 17:41 UTC</sub>
