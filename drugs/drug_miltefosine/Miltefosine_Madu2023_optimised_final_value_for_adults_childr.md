<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;miltefosine&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/&quot;},{&quot;label&quot;:&quot;Madu_2023 \u00b7 optimised_final_value_for_adults_children&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Miltefosine_Dorlo2017_reference&quot;,&quot;label&quot;:&quot;Dorlo_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Dorlo2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Miltefosine_Pali2020_reference&quot;,&quot;label&quot;:&quot;Pali\u0107_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Pali2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Miltefosine_Verrest2023_reference&quot;,&quot;label&quot;:&quot;Verrest_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_miltefosine/Miltefosine_Verrest2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# miltefosine — `Miltefosine_Madu2023_optimised_final_value_for_adults_childr`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance; kabs and λ1 have no unit.

<div class="pk-model-meta" hidden drug="miltefosine" model-id="Miltefosine_Madu2023_optimised_final_value_for_adults_childr" status="needs_review" stale="false" population="adult and paediatric patients with leishmaniasis (PBPK virtual populations)" measured-compound="miltefosine" parameterization="mechanistic" topology="1C"></div>

## Citation
Madu SJ, Wang K, Chirumamilla SK, Turner DB, Steel PG, Li M. Assessing Dose-Exposure-Response Relationships of Miltefosine in Adults and Children using Physiologically-Based Pharmacokinetic Modeling Approach. Pharmaceutical research 40(12):2983–3000 (2023).
  ·  DOI: [10.1007/s11095-023-03610-0](https://doi.org/10.1007/s11095-023-03610-0)

## Population and dosing

**Population:** adult and paediatric patients with leishmaniasis (PBPK virtual populations) · condition cutaneous and visceral leishmaniasis · age group mixed.

**Dosing:** 140, 175, 210, 245 mg, oral, multiple, every 24 h.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 8 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Molecular weight (g/mol) | MW | 407.57 | g/mol |
| logPo:w | Kp | 3.7 | children |
| fu | fu | 0.02 | children |
| Peff,man (10−4 cm/s) (Ileum II) | equation variable | 0.31 | Ileum II |
| Absorption Rate Scalar: Global | kabs | 1 | children |
| Vss (L/kg) | Vss | 0.31 | L/kg |
| CLint (uL/min/mg) | CLint | 1.87 | uL/min/mg |
| CLR (L/h) | CLR | 0 | L/h |
| α | λ1 | 0.8 | children |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.786). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance; kabs and λ1 have no unit.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (MW, Kp, fu and equation variable), so that value has no SI equivalent. Extracted — miltefosine: MW 408 g/mol, Kp 3.7 children, fu 0.02 children, kabs 1 children, Vss 0.31 L/kg, CLint 1.87 uL/min/mg, CLR 0 L/h, λ1 0.8 children.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of b/p: this record has none, the second reading 0.86; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Molecular weight (g/mol) | `Q374` · MW | 407.57 | g/mol |  |  | g/(m·ol) | exact (1) | Tab1:row2:col3 |
| logPo:w | `Q410` · Kp | 3.7 | children |  |  | children | llm (0.6) | Tab1:row3:col3 |
| fu | `Q46` · fu | 0.02 | children |  |  | children | exact (1) | Tab1:row7:col3, Tab1:footnote |
| Peff,man (10−4 cm/s) (Ileum II) | `Q900` · equation variable | 0.31 | Ileum II |  |  | ileumii | llm (0.6) | Tab1:row17:col3 |
| Absorption Rate Scalar: Global | `Q49` · kabs | 1 | children |  |  | children | llm_confirmed (0.6) | Tab1:row21:col3 |
| Vss (L/kg) | `Q65` · Vss | 0.31 | L/kg | 0.0217 | m3 | l/kg | exact (1) | Tab1:row26:col3 |
| CLint (uL/min/mg) | `Q3` · CLint | 1.87 | uL/min/mg |  |  | µl/(min·mg) | exact (1) | Tab1:row31:col3 |
| CLR (L/h) | `Q26` · CLR | 0 | L/h | 0 | m3/s | l/h | exact (1) | Tab1:row32:col3 |
| α | `Q67` · λ1 | 0.8 | children |  |  | children | exact (1) | Tab1:row34:col3, Tab1:footnote |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'children' (Kp)
- dropped unlinked row (NIL): 'pKa' — extend the ontology if this is a real PK parameter (source ['Tab1:row5:col3'])
- dropped unlinked row (NIL): 'B/P' — extend the ontology if this is a real PK parameter (source ['Tab1:row6:col3', 'Tab1:footnote'])
- unit_dimension_unknown: 'children' (fu)
- dropped duplicate Q46 ('fuGut', value '1') — already have one for this compound
- dropped unlinked row (NIL): 'Peff,man (10−4 cm/s) (Duodenum)' — extend the ontology if this is a real PK parameter (source ['Tab1:row13:col3'])
- dropped unlinked row (NIL): 'Peff,man (10−4 cm/s) (Jejunum I)' — extend the ontology if this is a real PK parameter (source ['Tab1:row14:col3'])
- dropped unlinked row (NIL): 'Peff,man (10−4 cm/s) (Jejunum II)' — extend the ontology if this is a real PK parameter (source ['Tab1:row15:col3'])
- dropped unlinked row (NIL): 'Peff,man (10−4 cm/s) (Ileum I)' — extend the ontology if this is a real PK parameter (source ['Tab1:row16:col3'])
- unit_dimension_unknown: 'Ileum II' (equation variable)
- dropped unlinked row (NIL): 'Peff,man (10−4 cm/s) (Ileum III)' — extend the ontology if this is a real PK parameter (source ['Tab1:row18:col3'])
- dropped unlinked row (NIL): 'Peff,man (10−4 cm/s) (Ileum IV)' — extend the ontology if this is a real PK parameter (source ['Tab1:row19:col3'])
- dropped unlinked row (NIL): 'Peff,man (10−4 cm/s) (Colon)' — extend the ontology if this is a real PK parameter (source ['Tab1:row20:col3'])
- unit_dimension_unknown: 'children' (kabs)
- dropped unlinked row (NIL): 'Basolateral and Permeability Scalars: Global' — extend the ontology if this is a real PK parameter (source ['Tab1:row22:col3'])
- dropped duplicate Q410 ('Kp Scalar', value '4.92') — already have one for this compound
- unit_dimension_unknown: 'children' (λ1)
- dropped PD-category row 'E0' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tab1:row35:col3', 'Tab1:footnote'])
- dropped value-less row: 'ADAM model'
- dropped value-less row: 'Ptrans,0'
- dropped value-less row: 'Peff,man'
- dropped value-less row: 'Vss'
- dropped value-less row: 'CLint'
- dropped value-less row: 'CLR'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=miltefosine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- population split: 'optimised final value for adults (children)' subgroup of Madu_2023 (paper reports 2 populations: initial value, optimised final value for adults (children))
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell Tab1:row3:col2 = '[33]'
- unparsed cell Tab1:row5:col2 = '[33, 41]'
- unparsed cell Tab1:row6:col2 = '[34]'
- unparsed cell Tab1:row7:col2 = '[12]'
- unparsed cell Tab1:row10:col2 = 'Default value of 1. ASA indicated the model is not sensitive to its value'
- unparsed cell Tab1:row26:col2 = 'An initial value of 0.96 was obtained from the literature [37]. Using ASA the Kp Scalar was optimised to 0.31'
- unparsed cell Tab1:row27:col2 = 'Value first adjusted to obtain the observed Vss. An ASA was conducted to obtain an optimised value of 4.92'
- unparsed cell Tab1:row31:col2 = 'An initial value (2.36) back-calculated [44]. ASA was performed to obtain an optimised value of 1.87'
- unparsed cell Tab1:row34:col2 = 'The default value of one was set as the initial value then ASA was used to give an optimised value of 0.8'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.786 (11/14 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[b/p]` |  | 0.86 | only_one_extracted |
| `gpt-oss-120b` | `parameters[logpo:w]` | 3.7 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[peff,man (10-4 cm/s)]` | 0.31 |  | only_one_extracted |

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
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Tab1:row32:col3'] |
| C5_dimension_Q3 | pass | [length] ** 3 / [time] / [mass] |  | ['Tab1:row31:col3'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['Tab1:row2:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['Tab1:row26:col3'] |
| C5_unit_missing_Q49 | fail | 1 / [time] | children | ['Tab1:row21:col3'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | children | ['Tab1:row34:col3', 'Tab1:footnote'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q65 | pass | volume within physiological range | 21.7 L | ['Tab1:row26:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmiltefosine%5D%20Miltefosine_Madu2023_optimised_final_value_for_adults_childr&body=Drug%3A%20miltefosine%0ARecord%3A%20Miltefosine_Madu2023_optimised_final_value_for_adults_childr%0APaper%3A%20Madu_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_miltefosine/Miltefosine_Madu2023_optimised_final_value_for_adults_childr%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 07:52 UTC</sub>
