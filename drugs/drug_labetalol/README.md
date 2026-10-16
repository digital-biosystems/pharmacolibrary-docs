<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;labetalol&quot;}]"></div>

# labetalol

- **generic name:** labetalol
- **ATC codes:** `C07AG01`, `C07BG01`, `C07CG01`
- **DrugBank:** [DB00598](https://go.drugbank.com/drugs/DB00598) · **PubChem:** [CID 3869](https://pubchem.ncbi.nlm.nih.gov/compound/3869)
- **molar mass:** 328.4055 g/mol (C19H24N2O3) — DrugBank
- **groups:** approved, investigational

## About

Labetalol is a beta blocker with alpha-blocking activity used to treat high blood pressure, including severe forms, as well as heart-related conditions such as angina, heart attack, and heart failure. It is an approved medicine and remains in general clinical use, often in hospital settings for hypertensive emergencies.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q958087](https://www.wikidata.org/wiki/Q958087) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| labetalol | parent | 328.406 | C19H24N2O3 | DrugBank | [3869](https://pubchem.ncbi.nlm.nih.gov/compound/3869) | Lalonde_1990_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:43 | 2:06 | 0/2/2 | 1/0/0 | 0/0/0 | 132,804/8,521 | einfracz / qwen3.8-27b | 23 | 23/0 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.429), gpt-oss:120b (not confirmed, agreement 0.429). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Elliott_1984_reference](drugs/drug_labetalol/Labetalol_Elliott1984_reference.md) | — | 1-compartment (no model) | 2 | Elliott HL et al., Comparison of the clinical pharmacokine…, British journal of clinical… (1984) | [10.1111/j.1365-2125.1984.tb02392.x](https://doi.org/10.1111/j.1365-2125.1984.tb02392.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.857), gpt-oss:120b (partly confirmed, agreement 0.75). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Lalonde_1990_2_reference](drugs/drug_labetalol/Labetalol_Lalonde1990v2_reference.md) | — | 1-compartment (no model) | 2 | Lalonde RL et al., Labetalol pharmacokinetics and pharmaco…, Clinical pharmacology and t… (1990) | [10.1038/clpt.1990.187](https://doi.org/10.1038/clpt.1990.187) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5), gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chung_1986_reference](drugs/drug_labetalol/Labetalol_Chung1986_reference.md) | — | 1-compartment (no model) | 0 | Chung M et al., Rising multiple-dose pharmacokinetics o…, Journal of clinical pharmac… (1986) | [10.1002/j.1552-4604.1986.tb03518.x](https://doi.org/10.1002/j.1552-4604.1986.tb03518.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714), gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Maronde_1983_reference](drugs/drug_labetalol/Labetalol_Maronde1983_reference.md) | — | 1-compartment (no model) | 0 | Maronde RF et al., Study of single and multiple dose pharm…, The American journal of med… (1983) | [10.1016/0002-9343(83)90135-3](https://doi.org/10.1016/0002-9343(83)90135-3) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Saotome_1993_DBP](drugs/drug_labetalol/pd_Saotome_1993_DBP.md) | diastolic blood pressure ← labetalol · direct sigmoid Emax (Hill) effect | — | Saotome T et al., Labetalol in hypertension during the th…, Journal of clinical pharmac… (1993) | [10.1002/j.1552-4604.1993.tb01933.x](https://doi.org/10.1002/j.1552-4604.1993.tb01933.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Saotome_1993_SBP](drugs/drug_labetalol/pd_Saotome_1993_SBP.md) | systolic blood pressure ← labetalol · direct sigmoid Emax (Hill) effect | — | Saotome T et al., Labetalol in hypertension during the th…, Journal of clinical pharmac… (1993) | [10.1002/j.1552-4604.1993.tb01933.x](https://doi.org/10.1002/j.1552-4604.1993.tb01933.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=labetalol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2D6` inhibitor/substrate, `UGT1A1` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCB5 (unknown), ADRA1A (target), ADRB1 (target), ADRB2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 23  ·  **relevant:** 6
- **records:** 4  ·  extracted 0  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chung_1986.pdf` | Chung M et al., Rising multiple-dose pharmacokinetics o…, Journal of clinical pharmac… (1986) | popPK | 10 | [10.1002/j.1552-4604.1986.tb03518.x](https://doi.org/10.1002/j.1552-4604.1986.tb03518.x) | [3700682](https://pubmed.ncbi.nlm.nih.gov/3700682) | The study reports a two-compartment model and specific half-lives (0.6, 1.3, 8.3 h) for labetalol in humans, but other standard quantitative parameters like clearance (CL) and volume (V) are not explicitly listed in the provided abstract text. |
| `Fischer_2014.pdf` | Fischer JH et al., Influence of gestational age and body w…, Clinical pharmacokinetics (2014) | popPK | 10 | [10.1007/s40262-013-0123-0](https://doi.org/10.1007/s40262-013-0123-0) | [24297680](https://pubmed.ncbi.nlm.nih.gov/24297680) | The study is a population PK model of labetalol, but specific numeric parameter values (CL, V) are not provided in the abstract, only fold-changes relative to postpartum values. |
| `Lalonde_1990_2.pdf` | Lalonde RL et al., Labetalol pharmacokinetics and pharmaco…, Clinical pharmacology and t… (1990) | popPK | 10 | [10.1038/clpt.1990.187](https://doi.org/10.1038/clpt.1990.187) | [2225711](https://pubmed.ncbi.nlm.nih.gov/2225711) | The abstract provides specific numeric values for oral and systemic clearance of labetalol in human subjects, although volume of distribution is only described as unchanged without a specific value. |
| `Saotome_1993.pdf` | Saotome T et al., Labetalol in hypertension during the th…, Journal of clinical pharmac… (1993) | popPK | 10 | [10.1002/j.1552-4604.1993.tb01933.x](https://doi.org/10.1002/j.1552-4604.1993.tb01933.x) | [8227470](https://pubmed.ncbi.nlm.nih.gov/8227470) | The study reports quantitative PK parameters (elimination half-life and apparent oral clearance) for labetalol in human subjects with values explicitly listed in the text. |
| `Maronde_1983.pdf` | Maronde RF et al., Study of single and multiple dose pharm…, The American journal of med… (1983) | popPK | 9 | [10.1016/0002-9343(83)90135-3](https://doi.org/10.1016/0002-9343(83)90135-3) | [6356898](https://pubmed.ncbi.nlm.nih.gov/6356898) | The study reports a two-compartment model and specific values for elimination half-life and steady-state concentrations, but does not explicitly list clearance (CL) or volume of distribution (V) in the provided evidence. |
| `Tenero_1989.pdf` | Tenero DM et al., Pharmacokinetics and pharmacodynamics o…, Clinical pharmacology and t… (1989) | popPK | 8 | [10.1038/clpt.1989.201](https://doi.org/10.1038/clpt.1989.201) | [2598569](https://pubmed.ncbi.nlm.nih.gov/2598569) | The study reports quantitative PK parameters (CL, Vd, t1/2) for dilevalol, the R,R stereoisomer of labetalol, which is considered part of the labetalol pharmacokinetic profile. |

<sub>queue written 2026-10-14T20:42:22.231034+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bhamidipaty-Pelosi_2025 | irrelevant | 3 | 0 | This is a study protocol (design and aims) for a prospective trial, not a report of results; while it cites general literature values in the introduction, it does not report original quantitative PK parameters from its own population model. |
| PD | Bhamidipaty-Pelosi_2025 | not_relevant | 0 | 0 | The text is a study protocol describing planned methods and recruitment; it does not report any results, data, or numeric PD parameters. |
| popPK | Elliott_1984 | relevant | 6 | 4 | The study reports quantitative PK parameters (clearance, half-life, bioavailability) for labetalol in humans, but labetalol is a comparator to the subject drug medroxalol, and specific compartmental parameters (V, Q, ka for labetalol) are largely absent from the provided text/tables. |
| popPK | Fischer_2014 | relevant | 10 | 2 | The study is a population PK model of labetalol, but specific numeric parameter values (CL, V) are not provided in the abstract, only fold-changes relative to postpartum values. |
| popPK | Hassanain_2013 | irrelevant | 0 | 0 | This is an in vitro vascular reactivity study measuring EC50 for vasodilation, not a pharmacokinetic study reporting disposition parameters like clearance or volume for labetalol. |
| popPK | Hong_1984 | irrelevant | 0 | 0 | The study reports in-vitro sperm immobilizing activity (local anesthetic effect) and is not a pharmacokinetic study; it contains no PK parameters for labetalol. |
| popPK | Maciag_2022 | irrelevant | 0 | 0 | Labetalol is used only as a beta-blocker to verify heart rate inhibition, with no pharmacokinetic parameters reported. |
| PD | Maciag_2022 | not_relevant | 2 | 1 | The paper mentions labetalol as a βAR antagonist that inhibited heart rate but provides no numeric concentration-effect data, dose-response curve, or PD parameters for labetalol. |
| popPK | Scalzo_1993 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of cocaine in piglets, where labetalol is used only as a co-administered agent to observe interaction effects, and no PK parameters for labetalol are reported. |
| popPK | Shawkat_2018 | irrelevant | 1 | 0 | This is a pharmacodynamic study analyzing blood pressure and heart rate effects, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, ka) for labetalol. |
| popPK | Smith_2024 | irrelevant | 0 | 0 | This is a comparative clinical efficacy study of antihypertensive drugs, not a pharmacokinetic study, and contains no PK parameters for labetalol. |
| popPK | Wagner_1991 | irrelevant | 2 | 0 | The paper reports pharmacokinetic parameters for labetalol, but the actual numeric values are not present in the provided evidence text. |
| popPK | de_2000 | irrelevant | 0 | 0 | This is a pharmacological study on beta-adrenergic receptor mechanisms in bovine tracheal smooth muscle; labetalol is used only as a comparator for inverse agonism, not for pharmacokinetic analysis. |
| PD | de_2000 | not_relevant | 2 | 1 | The paper investigates beta-2 adrenergic receptor constitutive activity in bovine tracheal smooth muscle; labetalol is only mentioned as a beta-blocker in a rank order of inverse agonism efficacy, with no specific exposure-response or dose-response PD parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:42 UTC</sub>
