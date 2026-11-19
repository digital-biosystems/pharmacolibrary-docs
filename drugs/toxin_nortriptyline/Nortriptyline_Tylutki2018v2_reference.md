<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Nortriptyline&quot;,&quot;href&quot;:&quot;drugs/toxin_nortriptyline/&quot;},{&quot;label&quot;:&quot;Tylutki_2018_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nortriptyline_Elsamadisi2020_reference&quot;,&quot;label&quot;:&quot;Elsamadisi_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nortriptyline/Nortriptyline_Elsamadisi2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nortriptyline_Smith2011_reference&quot;,&quot;label&quot;:&quot;Smith_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nortriptyline/Nortriptyline_Smith2011_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nortriptyline — `Nortriptyline_Tylutki2018v2_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete; the clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="Nortriptyline" model-id="Nortriptyline_Tylutki2018v2_reference" status="needs_review" stale="false" population="healthy and depressed adults, and amitriptyline overdose patients" measured-compound="nortriptyline" parameterization="mechanistic" topology="1C"></div>

## Citation
Tylutki Z, Mendyk A, Polak S. Physiologically based pharmacokinetic-quantitative systems toxicology and safety (PBPK-QSTS) modeling approach applied to predict the variability of amitriptyline pharmacokinetics and cardiac safety in populations and in individuals. Journal of pharmacokinetics and pharmacodynamics 45(5):663–677 (2018).
  ·  DOI: [10.1007/s10928-018-9597-6](https://doi.org/10.1007/s10928-018-9597-6)

## Population and dosing

**Population:** healthy and depressed adults, and amitriptyline overdose patients · condition therapeutic oral dosing and acute overdose · age group adult.

**Dosing:** 10, 25, 40, 50, 75, 80, 100, 125, 150, 200, 750 mg, oral, [{'doses': [10, 25, 40, 50, 75, 80, 100], 'regimen': 'single'}, {'doses': [25], 'interval_h': 24, 'regimen': 'multiple'}, {'doses': [25], 'interval_h': 8, 'regimen': 'multiple'}, {'doses': [50], 'interval_h': 8, 'regimen': 'multiple'}, {'doses': [75], 'interval_h': 24, 'regimen': 'multiple'}, {'doses': [125], 'interval_h': 24, 'regimen': 'multiple'}, {'doses': [100, 150, 200], 'interval_h': 24, 'regimen': 'multiple'}, {'doses': [75, 150], 'interval_h': 24, 'regimen': 'multiple'}, {'doses': [750], 'regimen': 'single'}].

**Dosed compound ≠ measured compound:** dosed amitriptyline, measured nortriptyline.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Gupta 1999 [3] | equation variable | 75 |  |
| ka | kabs | 0.24 | h−1 |
| tlag (mean) | tlag | 1.33 | h |
| CL (mL/h) | CL | 1580.0 | mL/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete; the clearance plausibility check could not be computed.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Usach_2022) cannot stand in for this paper's evidence. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — nortriptyline: kabs 0.24 h−1, tlag 1.33 h, CL 1.58e+03 mL/h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Gupta 1999 [3] | `Q900` · equation variable | 75 |  | 75 |  |  | llm (0.6) | Tylutki_2018_2_table_S1:row4:col2 |
| ka | `Q49` · kabs | 0.24 | h−1 | 6.667e-05 | 1/s | 1/h | exact (1) | Tylutki_2018_2:prose |
| tlag (mean) | `Q83` · tlag | 1.33 | h | 4788 | s | h | exact (1) | Tylutki_2018_2:prose |
| CL (mL/h) | `Q22` · CL | 1580.0 | mL/h | 4.389e-07 | m3/s | L/h | review_gapfill (0.7) | Usach_2022:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'pbpk model parameters' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Curry 1985 [1]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row2:col2'])
- dropped unlinked row (NIL): 'Venkatakrish nan 2001 [2]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row3:col2'])
- dropped unlinked row (NIL): 'Nam 2015 [4]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row5:col2'])
- dropped unlinked row (NIL): 'Dorian 1983 [5]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row7:col2'])
- dropped unlinked row (NIL): 'Liedholm 1998 [6]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row8:col2'])
- dropped unlinked row (NIL): 'Ogura 1983 [7]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row9:col2'])
- dropped unlinked row (NIL): 'Bhatt 2010 [8]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row11:col2'])
- dropped duplicate Q900 ('Burch 1981 [9]', value '50') — already have one for this compound
- dropped unlinked row (NIL): 'Ghahramani 1996 [10]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row13:col2'])
- dropped unlinked row (NIL): 'Jang 1990 [11]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row14:col2'])
- dropped unlinked row (NIL): 'Mellstorm 1983 [12]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row15:col2'])
- dropped unlinked row (NIL): 'Warrington 1984 [13]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row16:col2'])
- dropped unlinked row (NIL): 'Balant- Gorgia 1982 [14]' — extend the ontology if this is a real PK parameter (source ['Tylutki_2018_2_table_S1:row17:col2'])
- table mostly unlinked (12/14 table-cell rows NIL) — likely the wrong table was located, not 2 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q49 ('ka'=0.24) from results prose — parameter table was unreadable
- salvaged Q83 ('tlag (mean)'=1.33) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=nortriptyline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — pbpk model — not a compartmental parent–metabolite model (site hepatic: 'Assuming:2F=(fa×Fg)×Fhwhere fa is the fraction of administered dose of AT absorbed to enterocytes, Fg is the fraction of')
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 0/14 row label(s) assigned, 0 linked by role
- molar mass: none found for 'amitriptyline' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Usach_2022's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) S1
- table Tylutki_2018_2_table_S1: unknown_column_role
- table Tylutki_2018_2_table_S1: missing_label
- table Tylutki_2018_2_table_S1: unparsed_numeric_cell
- toxin: the located table(s) gave no kinetic value — 6 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Usach_2022:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 1580 | ['Usach_2022:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.58 L/h | ['Usach_2022:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnortriptyline%5D%20Nortriptyline_Tylutki2018v2_reference&body=Drug%3A%20nortriptyline%0ARecord%3A%20Nortriptyline_Tylutki2018v2_reference%0APaper%3A%20Tylutki_2018_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nortriptyline/Nortriptyline_Tylutki2018v2_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 09:40 UTC</sub>
