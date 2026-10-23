<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;artemether&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/&quot;},{&quot;label&quot;:&quot;Lohy_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artemether_Lohy2018_reference&quot;,&quot;label&quot;:&quot;Lohy_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artemether/Artemether_Lohy2018_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:true}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# artemether — `Artemether_Lohy2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The artemether/dihydroartemisinin parent–metabolite model for pregnant women (Lohy_2018) was rejected: it does not reproduce the paper's terminal half-lives (96 h or 30.4–30.6 h reported vs 12.016600660760643 h simulated), the peripheral volume V2/F (111 L) was never emitted, and the structure is a one-compartment enteral model instead of the parent–metabolite topology.

<div class="pk-model-meta" hidden drug="artemether" model-id="Artemether_Lohy2018_reference" status="rejected" stale="false" population="pregnant women with uncomplicated Plasmodium falciparum malaria (Rwanda)" measured-compound="artemether" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Lohy Das J, Rulisa S, de Vries PJ, Mens PF, Kaligirwa N, Agaba S et al. Population Pharmacokinetics of Artemether, Dihydroartemisinin, and Lumefantrine in Rwandese Pregnant Women Treated for Uncomplicated Plasmodium falciparum Malaria. Antimicrobial agents and chemotherapy 62(10) (2018).
  ·  DOI: [10.1128/AAC.00518-18](https://doi.org/10.1128/AAC.00518-18)

## Population and dosing

**Population:** pregnant women with uncomplicated Plasmodium falciparum malaria (Rwanda) · condition uncomplicated malaria · age group adult · n = 22.

**Dosing:** 80 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed artemether-lumefantrine, measured artemether.

## Model

**Structure:** 1-compartment, oral mammillary model — template `PK_1C_enteral`.  
**Parameterization:** CL/F, Q/F, V/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 12 extracted.  
**Availability:** Model and browser simulation available in **Models** and **Simulation**.

<figure class="pk-models-diagram"><img src="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference.svg" alt="Artemether_Lohy2018_reference diagram"><figcaption>Modelica diagram · Pharmacolibrary · OpenModelica.</figcaption></figure>

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| F | Fab | 1 |  |  | 57.6 (36.8% RSE) |
| MTT (h) | MTT | 0.738 | h | 5.16 | 132 (37.9% RSE) |
| CL/F (liters/h) | CL/F | 4.49 | liters/h | 6.59 |  |
| Vc/F (liters) | V1/F | 139 | liters | 6.77 | 48.7 (56.8% RSE) |
| Q/F (liters/h) | Q/F | 0.924 | liters/h | 13.3 |  |
| Vp/F (liters) | V2/F | 111 | liters | 8.69 |  |
| CLARM/F (liters/h) | CL/F | 467 | liters/h | 17.9 |  |
| VARM/F (liters) | V/F | 3000 | liters | 14.1 |  |
| CLDHA/F (liters/h) | CL/F | 611 | liters/h | 15.4 |  |
| VDHA/F (liters) | V1/F | 137 | liters | 38.9 |  |
| ka (h−1) | kabs | 0.0577 | h−1 |  |  |
| Lag time (h) | tlag | 1.31 | h |  |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.12). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The artemether/dihydroartemisinin parent–metabolite model for pregnant women (Lohy_2018) was rejected: it does not reproduce the paper's terminal half-lives (96 h or 30.4–30.6 h reported vs 12.016600660760643 h simulated), the peripheral volume V2/F (111 L) was never emitted, and the structure is a one-compartment enteral model instead of the parent–metabolite topology.**

Simulated as the paper dosed it, the model's terminal half-life is 12.016600660760643 h against reported values of 96 h (ratio 0.1252) and 30.4–30.6 h (ratios 0.3953 and 0.3927), outside tolerance. The parameter coverage check found 9 of 10 parameters emitted or defaulted, with V2/F (111 L, lumefantrine) missing. The structure check expected a parent–metabolite topology but the model was built as a one-compartment enteral model, and the reported output is the central compartment rather than the measured analyte compartment. One parameter's reported unit could not be converted to SI, so it reached the model builder without an SI value; the builder also assumed F=1 and Fm=1 with no molar correction (apparent parameterization). Extracted — lumefantrine: Fab 1, MTT 0.738 h, CL/F 4.49 liters/h, V1/F 139 liters, Q/F 0.924 liters/h, V2/F 111 liters; artemether: CL/F 467 liters/h, V/F 3e+03 liters, kabs 0.0577 h−1, tlag 1.31 h; dihydroartemisinin: CL/F 611 liters/h, V1/F 137 liters.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has artemether-lumefantrine, the second reading artemether/lumefantrine; it also differs on 21 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F | `Q40` · Fab | 1 |  |  |  |  |  | exact (1) | T2:row2:col1, T2:row12:col1 | 57.6 (36.8% RSE) |
| MTT (h) | `Q81` · MTT | 0.738 | h |  |  | h | 5.16 | exact (1) | T2:row4:col1, T2:row14:col1 | 132 (37.9% RSE) |
| CL/F (liters/h) | `Q27` · CL/F | 4.49 | liters/h | 1.247e-06 | m3/s | l/h | 6.59 | exact (1) | T2:row6:col1 |  |
| Vc/F (liters) | `Q290` · V1/F | 139 | liters | 0.139 | m3 | l | 6.77 | exact (1) | T2:row7:col1 | 48.7 (56.8% RSE) |
| Q/F (liters/h) | `Q69` · Q/F | 0.924 | liters/h | 2.567e-07 | m3/s | l/h | 13.3 | exact (1) | T2:row8:col1 |  |
| Vp/F (liters) | `Q82` · V2/F | 111 | liters | 0.111 | m3 | l | 8.69 | exact (1) | T2:row9:col1 |  |
| CLARM/F (liters/h) | `Q27` · CL/F | 467 | liters/h | 0.0001297 | m3/s | l/h | 17.9 | llm (0.6) | T2:row16:col1 |  |
| VARM/F (liters) | `Q76` · V/F | 3000 | liters | 3 | m3 | l | 14.1 | llm (0.6) | T2:row17:col1 |  |
| CLDHA/F (liters/h) | `Q27` · CL/F | 611 | liters/h | 0.0001697 | m3/s | l/h | 15.4 | exact (1) | T2:row23:col1 |  |
| VDHA/F (liters) | `Q290` · V1/F | 137 | liters | 0.137 | m3 | l | 38.9 | exact (1) | T2:row24:col1 |  |
| ka (h−1) | `Q49` · kabs | 0.0577 | h−1 | 1.603e-05 | 1/s | 1/h |  | review_gapfill (0.7) | Kloprogge_2015:review |  |
| Lag time (h) | `Q83` · tlag | 1.31 | h | 4716 | s | h |  | review_gapfill (0.7) | Kloprogge_2015:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `apparent_assumption`: F=1, Fm=1, no molar correction (parameterization=apparent)

**Interpretation flags:**
- table section iiv: 'MTT (h)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'Vc/F (liters)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'F' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'CLARM/F (liters/h)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'VARM/F (liters)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'CLDHA/F (liters/h)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- table section iiv: 'VDHA/F (liters)' routed out of structural estimates ('BSV/BOV, % CV (% RSE)')
- dropped PD-category row 'Emax (h−1)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row19:col1'])
- dropped PD-category row 'EC50 (nM)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row20:col1'])
- dropped unlinked row (NIL): 'TIMEENZ (h)' — extend the ontology if this is a real PK parameter (source ['T2:row21:col1'])
- dropped value-less row: 'Emax'
- dropped value-less row: 'EC50'
- dropped value-less row: 'TIMEENZ'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=artemether
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [1]
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=compartmental; 18/18 row label(s) assigned, 17 linked by role; re-tagged parent→lumefantrine ×16, parent→artemether ×7, parent→dihydroartemisinin ×4
- gap-filled Q49 (kabs) from Kloprogge_2015's review values (primary lacked it)
- gap-filled Q83 (tlag) from Kloprogge_2015's review values (primary lacked it)
- engineer: parent → metabolite not buildable on PK_3M_9C (None) — the measured compound's 1-compartment model instead

**Extraction notes:**
- unparsed cell T2:row2:col3 = '144 (19.7)b'
- unparsed cell T2:row2:col4 = '106 to 189b'
- unparsed cell T2:row3:col2 = '−0.590 to −0.180'
- unparsed cell T2:row4:col2 = '3.71 to 4.41'
- unparsed cell T2:row4:col4 = '72.6 to 178'
- unparsed cell T2:row6:col2 = '4.18 to 5.17'
- unparsed cell T2:row7:col2 = '119 to 149'
- unparsed cell T2:row7:col4 = '17.8 to 77.8'
- unparsed cell T2:row8:col2 = '0.770 to 1.21'
- unparsed cell T2:row9:col2 = '96.5 to 129'
- unparsed cell T2:row10:col2 = '45.8 to 53.5'
- unparsed cell T2:row12:col4 = '43.2 to 78.8'
- unparsed cell T2:row14:col2 = '0.569 to 0.840'
- unparsed cell T2:row14:col4 = '86.2 to 143.2'
- unparsed cell T2:row16:col2 = '298 to 508'
- unparsed cell T2:row16:col4 = '21.5 to 43.5'
- unparsed cell T2:row17:col2 = '2,050 to 3,180'
- unparsed cell T2:row17:col4 = '15.4 to 31.0'
- unparsed cell T2:row18:col2 = '92.0 to 108'
- unparsed cell T2:row19:col2 = '0.623 to 1.42'
- unparsed cell T2:row20:col2 = '6.16 to 14.4'
- unparsed cell T2:row21:col2 = '7.59 to 41.9'
- unparsed cell T2:row23:col2 = '486 to 782'
- unparsed cell T2:row23:col4 = '12.9 to 29.9'
- unparsed cell T2:row24:col2 = '99.8 to 251'
- unparsed cell T2:row24:col4 = '17.5 to 51.5'
- unparsed cell T2:row25:col2 = '109 to 129'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.12 (3/25 fields) | 22 |

<details><summary>22 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['artemether', 'dihydroartemisinin', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/f]` |  | 4.49 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | 4.49 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clarm/f]` | 467 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cldha/f]` | 611 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  | 1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.0577 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 1.31 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` |  | 4.04 | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | 0.738 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` |  | 0.924 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | 0.924 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[timeenz]` |  | 30.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[varm/f]` |  | 3000 | only_one_extracted |
| `gpt-oss-120b` | `parameters[varm/f]` | 3000 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` |  | 139 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vc/f]` | 139 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vdha/f]` | 137 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` |  | 111 | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp/f]` | 111 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | artemether-lumefantrine | artemether/lumefantrine | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 10 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row6:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row16:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['T2:row23:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T2:row7:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['T2:row24:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kloprogge_2015:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] |  | ['T2:row8:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['T2:row17:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 |  | ['T2:row9:col1'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kloprogge_2015:review'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 4.49 L/h | ['T2:row6:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 467 L/h | ['T2:row16:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 611 L/h | ['T2:row23:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 139 L | ['T2:row7:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 137 L | ['T2:row24:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 3e+03 L | ['T2:row17:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 111 L | ['T2:row9:col1'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  |  | no covariate effects in record |
| T3_apparent_invariant |  | pass |  | F=Fm=1, no molar correction |  | apparent params must not be double-corrected |
| T3_output_variable |  | fail | Metabolite_C (measured=artemether) | central.C |  | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 10 scholar param(s) emitted or defaulted | 9 covered |  | neither emitted nor in defaulted[]: ['V2/F'] |
| T3_topology_template |  | fail | parent_metabolite → PK_3M_9C* | PK_1C_enteral |  | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified |  | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | fail | 96 | 12.02 | 0.1252 | days→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 30.4 | 12.02 | 0.3953 | h→SI vs simulated h |
| T1_t_half_terminal | reference | fail | 30.6 | 12.02 | 0.3927 | h→SI vs simulated h |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

**Administration: oral** — 80 mg, single dose, first-order absorption (ka 0.0577 /h, lag 78.6 min, F 1). Dose in the paper: 80 mg.

<dbs-fmusim paramsurl="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_params.json" metaurl="assets/fmu/PK_1C_enteral.vr.json" wasmurl="assets/fmu/PK_1C_enteral.js" controlsurl="drugs/drug_artemether/Artemether_Lohy2018_reference/Artemether_Lohy2018_reference_sim_controls.json"></dbs-fmusim>

<sub>WebAssembly simulation using extracted parameters. The reference check compares the browser peak with the recorded FMPy result and is disabled after parameter edits. Template `PK_1C_enteral` · parameters `Artemether_Lohy2018_reference_params.json` · controls `Artemether_Lohy2018_reference_sim_controls.json`. *Simulator value* denotes a template default, not an extracted estimate.</sub>

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bartemether%5D%20Artemether_Lohy2018_reference&body=Drug%3A%20artemether%0ARecord%3A%20Artemether_Lohy2018_reference%0APaper%3A%20Lohy_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_artemether/Artemether_Lohy2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 05:52 UTC</sub>
