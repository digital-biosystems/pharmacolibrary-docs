<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;filgotinib&quot;}]"></div>

# filgotinib

- **generic name:** filgotinib
- **ATC codes:** `L04AF04`
- **DrugBank:** [DB14845](https://go.drugbank.com/drugs/DB14845) · **PubChem:** not captured
- **molar mass:** 425.51 g/mol (C21H23N5O3S) — DrugBank
- **groups:** approved, investigational

## About

Filgotinib is a JAK inhibitor used to treat rheumatoid arthritis. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19904163](https://www.wikidata.org/wiki/Q19904163) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| filgotinib | parent | 425.51 | C21H23N5O3S | DrugBank | — | Namour_2015 |
| active metabolite | metabolite | 357.432 | C17H19N5O2S | PubChem | [67479440](https://pubchem.ncbi.nlm.nih.gov/compound/67479440) | Namour_2015 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Namour_2015_anova_p_value](drugs/drug_filgotinib/Filgotinib_Namour2015_anova_p_value.md) | — | parent + metabolite (no model) | 5 | Namour F et al., Pharmacokinetics and Pharmacokinetic/Ph…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ anovaa_p_value](drugs/drug_filgotinib/Filgotinib_Namour2015_anovaa_p_value.md) | — | parent + metabolite (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ anovaa_p_value_tukey_s_test](drugs/drug_filgotinib/Filgotinib_Namour2015_anovaa_p_value_tukey_s_test.md) | — | parent + metabolite (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub> | [↳ estimate_rse](drugs/drug_filgotinib/Filgotinib_Namour2015_estimate_rse.md) | — | parent + metabolite (no model) | 12 (+2 cov.) |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ filgotinib](drugs/drug_filgotinib/Filgotinib_Namour2015_filgotinib.md) | — | parent + metabolite (no model) | 5 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [↳ metabolite](drugs/drug_filgotinib/Filgotinib_Namour2015_metabolite.md) | — | parent + metabolite (no model) | 5 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Namour_2015_pSTAT1](drugs/drug_filgotinib/pd_Namour_2015_pSTAT1.md) | pSTAT1-positive cells biomarker turnover ← filgotinib and metabolite | — | Namour F et al., Pharmacokinetics and Pharmacokinetic/Ph…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=filgotinib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CES1` metabolizer, `CES2` metabolizer | DrugBank actor |
| metabolism | small intestine | `CES2` metabolizer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: JAK1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:03 | 3:02 | 0/6/0 | 1/0/0 | 0/0/0 | 262,949/13,995 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 6  ·  extracted 0  ·  needs_review 0  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adami_2025 | irrelevant | 0 | 0 | The paper is a clinical pharmacodynamic analysis of glucocorticoid sparing effects in rheumatoid arthritis and does not report any pharmacokinetic parameters for filgotinib. |
| popPK | Chandran_2023 | irrelevant | 0 | 0 | The paper is a pharmacodynamic and biomarker study of filgotinib in psoriatic arthritis and does not report pharmacokinetic disposition parameters. |
| popPK | Ma_2025 | irrelevant | 0 | 0 | This is a post-hoc efficacy analysis of filgotinib in Crohn's disease reporting clinical and endoscopic response rates, not a pharmacokinetic study. |
| popPK | Meng_2022 | relevant | 9 | 2 | This is a relevant population PK study for filgotinib, but the specific numeric parameter values (CL, V, ka) are in Supporting Information Tables S3/S4 which are not included in the provided evidence. |
| popPK | Namour_2015_2 | relevant | 8 | 2 | The text is an author's reply to a PK modeling study containing specific numeric values for model comparison (OFV) and ratio estimates, but it lacks the core population PK parameter values (CL, V, Q) which are likely in the original publication or figures not provided. |
| popPK | Qtaishat_2026 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of efficacy and safety in Crohn's disease, containing no pharmacokinetic data or disposition parameters for filgotinib. |
| popPK | Quraishi_2026 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis regarding the incidence of acne (an adverse event) in IBD patients treated with JAK inhibitors, and it reports no pharmacokinetic parameters for filgotinib. |
| popPK | Sonomoto_2026 | irrelevant | 0 | 0 | The paper is a real-world comparative effectiveness and safety study of JAK inhibitors, reporting clinical outcomes like CDAI scores rather than pharmacokinetic parameters for filgotinib. |
| popPK | Srinivas_2015 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study investigates the antiviral effects of filgotinib in vitro against coronaviruses and does not report pharmacokinetic parameters for filgotinib. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study evaluates a different drug (H018) using filgotinib only as a positive control, and filgotinib plasma concentrations were explicitly reported as undetectable. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 00:01 UTC</sub>
