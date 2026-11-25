<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;tenofovir alafenamide&quot;,&quot;href&quot;:&quot;drugs/drug_tenofovir_alafenamide/&quot;},{&quot;label&quot;:&quot;Beliveau_2026 \u00b7 group_1one_taf_implant&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tenofovir alafenamide — `TenofovirAlafenamide_Beliveau2026_group_1one_taf_implant`

> ## <span class="pk-badge pk-badge--neutral">not_reviewed</span>

<div class="pk-model-meta" hidden drug="tenofovir alafenamide" model-id="TenofovirAlafenamide_Beliveau2026_group_1one_taf_implant" status="not_reviewed" stale="false" population="South African women (HIV-1 PrEP)" measured-compound="tenofovir alafenamide" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Beliveau M, Chang C, Lewis L, Letsoalo MP, Karim QA, Karim SSA et al. Population pharmacokinetics of tenofovir alafenamide delivered via an annual subdermal implant in South African women. Scientific reports 16(1) (2026).
  ·  DOI: [10.1038/s41598-026-48746-2](https://doi.org/10.1038/s41598-026-48746-2)

## Population and dosing

**Population:** South African women (HIV-1 PrEP) · condition HIV-1 pre-exposure prophylaxis · age group adult · n = 45.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "not_reviewed": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--neutral">not_reviewed</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.4). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**not_reviewed: every check that could be run on this record passed.**

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has tenofovir alafenamide → tenofovir (metabolism); tenofovir → tenofovir diphosphate (metabolism), the second reading none; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Mean (SD)' — extend the ontology if this is a real PK parameter (source ['Tab5:row2:col1', 'Tab5:row6:col1', 'Tab5:row10:col1'])
- dropped unlinked row (NIL): 'Median (CV%)' — extend the ontology if this is a real PK parameter (source ['Tab5:row3:col1', 'Tab5:row7:col1', 'Tab5:row11:col1'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tenofovir alafenamide
- topology: 2 first-order transfer(s) across 3 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- population split: 'group 1one taf implant(n = 6)' subgroup of Beliveau_2026 (paper reports 5 populations: estimate, group 1one taf implant(n = 6), group 2 aone taf implant(n = 12), group 2 ctwo taf implants(n = 12), overall(n = 30))
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 10 linked by role; re-tagged parent→tenofovir ×8, parent→tenofovir diphosphate ×2

**Extraction notes:**
- table Tab5: unbound_uncertainty
- table Tab5: ambiguous_numeric_format
- table Beliveau_2026_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (16 record(s))
- table Beliveau_2026_table_4: units_need_context
- companion parameter table 4 transcribed (2 record(s))
- LLM selected parameter table(s) 3, 4, 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | primary re-run | 0.4 (2/5 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tenofovir alafenamide', 'tenofovir', 'metabolism'], ['tenofovir', 'tenofovir diphosphate', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `model.parameterization` | mechanistic | apparent | mismatch |
| `gpt-oss-120b` | `parameters[54% increase in v/f]` |  | 54 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btenofovir_alafenamide%5D%20TenofovirAlafenamide_Beliveau2026_group_1one_taf_implant&body=Drug%3A%20tenofovir_alafenamide%0ARecord%3A%20TenofovirAlafenamide_Beliveau2026_group_1one_taf_implant%0APaper%3A%20Beliveau_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tenofovir_alafenamide/TenofovirAlafenamide_Beliveau2026_group_1one_taf_implant%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 17:36 UTC</sub>
