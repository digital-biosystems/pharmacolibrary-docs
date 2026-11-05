<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;tamoxifen&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/&quot;},{&quot;label&quot;:&quot;Puszkiel_2021 \u00b7 estimate_2&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tamoxifen_Xu2026_reference&quot;,&quot;label&quot;:&quot;Xu_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tamoxifen/Tamoxifen_Xu2026_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tamoxifen — `Tamoxifen_Puszkiel2021_estimate_2`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="tamoxifen" model-id="Tamoxifen_Puszkiel2021_estimate_2" status="rejected" stale="false" population="breast cancer patients" measured-compound="tamoxifen" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Puszkiel A, Arellano C, Vachoux C, Evrard A, Le Morvan V, Boyer JC et al. Model-Based Quantification of Impact of Genetic Polymorphisms and Co-Medications on Pharmacokinetics of Tamoxifen and Six Metabolites in Breast Cancer. Clinical pharmacology and therapeutics 109(5):1244–1255 (2021).
  ·  DOI: [10.1002/cpt.2077](https://doi.org/10.1002/cpt.2077)

## Population and dosing

**Population:** breast cancer patients · condition breast cancer · age group adult · n = 928.

**Dosing:** 20 mg/day, oral, multiple, every 24 h.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| effect_of_age | effect_of_age | -0.382 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has tamoxifen → n-desmethyltamoxifen (metabolism); tamoxifen → 4-hydroxytamoxifen (metabolism); n-desmethyltamoxifen → endoxifen (metabolism) …, the second reading none; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | source |
|---|---|---|---|---|
| effect_of_age | `Q900` · effect_of_age | -0.382 |  | Puszkiel_2021_table_5:row0:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 2 row(s) → endoxifen (abbreviation 2)
- table section iiv: 'kTAM/NDT (% CV)' routed out of structural estimates ('IIV')
- table section iiv: 'kTAM/4-OHTAM (% CV)' routed out of structural estimates ('IIV')
- table section iiv: "kTAM/4'-OHTAM (% CV)" routed out of structural estimates ('IIV')
- table section iiv: 'kTAM/NOX-TAM (% CV)' routed out of structural estimates ('IIV')
- covariate level 'Effect of age' → Q900:effect_of_age = -0.382 (linear_fractional on the model)
- dropped unlinked row (NIL): 'Effect of CYP3A4*22 genotypeᵃ' — extend the ontology if this is a real PK parameter (source ['Puszkiel_2021_table_5:row4:col2'])
- dropped unlinked row (NIL): 'Effect of body weight' — extend the ontology if this is a real PK parameter (source ['Puszkiel_2021_table_5:row5:col2'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tamoxifen
- topology: 5 first-order transfer(s) across 7 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- population split: 'estimate 2' subgroup of Puszkiel_2021 (paper reports 4 populations: estimate 1, estimate 2, value 1, value 2)
- row roles: per-genotype parameters — typical value from the reference group: CYP2D6 NM (h -1 )
- row roles (LLM): model_class=compartmental; 15/15 row label(s) assigned, 17 linked by role; re-tagged parent→endoxifen ×5, parent→N-desmethyltamoxifen ×6, parent→4-hydroxytamoxifen ×2, parent→4'-hydroxytamoxifen ×2, parent→N-oxide-tamoxifen ×2
- molar mass: no plausible PubChem entry for "Z'-endoxifen" ("Z'-endoxifen") — left in mass units
- molar mass: none found for "Z'-endoxifen" — its concentrations stay mass-only
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- table Puszkiel_2021_table_3: unparsed_numeric_cell
- transposed table Puszkiel_2021_table_3: logical view retains original source coordinates
- final table tab_1: no supported point estimates; targeted recovery unresolved
- table Puszkiel_2021_table_4: missing_label
- table Puszkiel_2021_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (12 record(s))
- table Puszkiel_2021_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (14 record(s))
- table Puszkiel_2021_table_6: unknown_column_role
- companion parameter table 6 transcribed (18 record(s))
- LLM selected parameter table(s) 3, 4, 5, 6

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.667 (4/6 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tamoxifen', 'n-desmethyltamoxifen', 'metabolism'], ['tamoxifen', '4-hydroxytamoxifen', 'metabolism'], ['n-desmethyltamoxifen', 'endoxifen', 'metabolism'], ['4-hydroxytamoxifen', "4'-hydroxytamoxifen", 'interconversion'], ['endoxifen', "z'-endoxifen", 'interconversion']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[theta_q319_body_weight]` |  | 0.243 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | fail |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btamoxifen%5D%20Tamoxifen_Puszkiel2021_estimate_2&body=Drug%3A%20tamoxifen%0ARecord%3A%20Tamoxifen_Puszkiel2021_estimate_2%0APaper%3A%20Puszkiel_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tamoxifen/Tamoxifen_Puszkiel2021_estimate_2%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-04 12:05 UTC</sub>
