<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;acoramidis&quot;}]"></div>

# acoramidis

- **generic name:** acoramidis
- **ATC codes:** `C01EB25`
- **DrugBank:** [DB17999](https://go.drugbank.com/drugs/DB17999) · **PubChem:** not captured
- **molar mass:** 292.31 g/mol (C15H17FN2O3) — DrugBank
- **groups:** approved, investigational

## About

Acoramidis is a heart medicine used to treat familial amyloid polyneuropathy, a rare inherited condition affecting the nerves. It is authorised in the European Union and remains under investigation for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27451739](https://www.wikidata.org/wiki/Q27451739) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:23 | 1:07 | 0/0/0 | 0/0/0 | 0/0/0 | 119,144/2,350 | einfracz / qwen3.8-27b | 10 | 4/7 | 9/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=acoramidis).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` inhibitor, `UGT1A1` substrate, `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TTR (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 354 matched, 55 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_2026.pdf` | Yu J et al., Understanding Pharmacokinetic-Drug Inte…, Current therapeutic researc… (2026) | pgx | 7 | [10.1016/j.curtheres.2025.100818](https://doi.org/10.1016/j.curtheres.2025.100818) | [41567854](https://www.ncbi.nlm.nih.gov/pubmed/41567854) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-14T22:23:25.399712+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alkholief_2019 | irrelevant | 0 | 0 | The study investigates acyclovir delivery in rabbits, not acoramidis. |
| popPK | Allender_2013 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Andermatt_2022 | irrelevant | 0 | 0 | The paper reports on the clearance of herpes simplex virus and Epstein-Barr virus, not the pharmacokinetics of the drug acoramidis. |
| popPK | Basavaraju_2026 | irrelevant | 0 | 0 | The study focuses on the formulation and ex vivo permeation of valaciclovir, not the pharmacokinetics of acoramidis. |
| popPK | Brandariz-Nuñez_2021 | irrelevant | 0 | 0 | The paper is a systematic review of neurotoxicity cases associated with acyclovir and valacyclovir, and does not contain pharmacokinetic parameters for acoramidis. |
| popPK | Brigden_1981 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| popPK | Dong_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acyclovir in the context of OAT2 downregulation, not acoramidis. |
| PD | Endo_2026 | not_relevant | 2 | 1 | The paper reports clinical efficacy and PK/PD biomarker changes (TTR levels, stabilization) over time but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Englund_1987 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| popPK | Erlich_1997 | irrelevant | 0 | 0 | The paper discusses acyclovir, famciclovir, and valacyclovir for herpes management and does not mention acoramidis or report any PK parameters for it. |
| popPK | Fletcher_1985 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| popPK | Fontana_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of vutrisiran, with acoramidis mentioned only as a comparative TTR stabilizer. |
| PGx | Ji_2025 | not_relevant | 0 | 0 | The paper compares drug binding properties in vitro and does not assess the impact of genetic variants on PK or PD parameters. |
| popPK | Jones_1991 | irrelevant | 0 | 0 | no_text gate: only 28 chars of text extracted (&lt; 400) |
| popPK | Joshi_1995 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Judge_2026 | not_relevant | 3 | 2 | The paper reports qualitative comparisons of TTR stabilization percentages and in vitro potency at fixed concentrations, but does not provide a dose-response curve, Emax/EC50 parameters, or a PK/PD model for acoramidis. |
| popPK | Khammesri_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for acyclovir in elephants, not acoramidis. |
| popPK | Kissling_2015 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | Laskin_1982 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| popPK | Laskin_1983 | irrelevant | 0 | 0 | no_text gate: only 38 chars of text extracted (&lt; 400) |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study focuses on PBPK modeling of placental transfer for acyclovir, cefuroxime, and other drugs; acoramidis is not the subject drug and no parameters for it are reported. |
| popPK | Lomoio_2025 | irrelevant | 0 | 0 | The paper is an in silico structural profiling and ligand docking study, not a pharmacokinetic study reporting disposition parameters. |
| PD | Lomoio_2025 | not_relevant | 0 | 0 | The paper is an in silico structural and docking study analyzing binding affinities of acoramidis to TTR variants, not a pharmacodynamic or exposure-response analysis in biological systems. |
| popPK | Manczak_2023 | irrelevant | 0 | 0 | The paper describes the pharmacokinetics of letermovir, not acoramidis. |
| popPK | Matsumoto_2026 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics of amenamevir, not acoramidis. |
| popPK | Maurer_2025 | irrelevant | 0 | 0 | The paper focuses on the pharmacodynamic effect of acoramidis on serum transthyretin levels and its prognostic association with mortality, without reporting quantitative pharmacokinetic parameters like clearance or volume. |
| PGx | Maurer_2025 | not_relevant | 1 | 0 | The paper describes population PK/PD modeling of acoramidis and its effect on TTR, but it does not report specific pharmacogenomic differences (e.g., genotype-dependent changes) in the PK or PD parameters. |
| popPK | Methven_2026 | irrelevant | 0 | 0 | This is a mechanistic mathematical model of transthyretin amyloidosis where acoramidis is used only to predict therapeutic efficacy via TTR stabilization, not a study reporting pharmacokinetic parameters (CL, V, etc.) for acoramidis. |
| PD | Methven_2026 | not_relevant | 3 | 2 | The paper presents a mechanistic disease model comparing treatment modalities and reports a predicted percentage reduction in a proxy metric (monomer efflux), but it does not provide an exposure-response or dose-response curve with numeric PD parameters (e.g., EC50, Emax) for acoramidis. |
| popPK | Nair_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acyclovir, not acoramidis. |
| popPK | Orr_1995 | irrelevant | 0 | 0 | The paper studies uridine phosphorylase inhibitors (analogues of BAU) for enhancing other drugs, not the pharmacokinetics of acoramidis. |
| popPK | Owens_1996 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| popPK | Preston_1995 | irrelevant | 0 | 0 | The paper focuses on dosage adjustments for 10 antimicrobials (including acyclovir, ceftazidime, imipenem) and does not mention acoramidis or provide PK parameters for it. |
| popPK | Ramirez_2018 | irrelevant | 0 | 0 | The paper studies Herpes Simplex Virus encephalitis and mentions acyclovir (not acoramidis), reporting no pharmacokinetic parameters. |
| popPK | Samies_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for valacyclovir/acyclovir, not acoramidis. |
| popPK | Schaller-Ammann_2022 | irrelevant | 0 | 0 | The study focuses on in vitro skin penetration of acyclovir, lidocaine, and diclofenac, and does not involve acoramidis. |
| popPK | Seth_1985 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | Shakiba_1995 | irrelevant | 0 | 0 | The study investigates acyclovir diphosphate dimyristoylglycerol (ACVDP-DG) in rabbits and humans, not the drug acoramidis. |
| popPK | Sherrod_2026 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes (health status scores) for acoramidis, not pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Shoji_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of acyclovir, not acoramidis. |
| popPK | Singhal_1995 | irrelevant | 0 | 0 | The paper concerns the clinical treatment of CMV with ganciclovir and contains no data or mentions of acoramidis. |
| popPK | Smiley_1996 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of valacyclovir and acyclovir, not acoramidis. |
| popPK | Smith_2016 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| popPK | Stuijt_2025 | irrelevant | 0 | 0 | The paper focuses on acyclovir and cimetidine, not acoramidis. |
| popPK | Stuijt_2026 | irrelevant | 0 | 0 | The study focuses on acyclovir pharmacokinetics and cimetidine interaction, not acoramidis. |
| popPK | Testani_2026 | irrelevant | 0 | 0 | The study reports clinical renal outcomes (eGFR, albumin-to-creatinine ratio) rather than pharmacokinetic parameters (CL, V, ka, t1/2) for acoramidis. |
| popPK | Voigt_2016 | irrelevant | 0 | 0 | The paper discusses brincidofovir for herpes/adenovirus infection and contains no data, parameters, or mentions of acoramidis. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a case report regarding peginterferon alfa-2b and does not involve acoramidis or any pharmacokinetic parameters. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | no_text gate: only 244 chars of text extracted (&lt; 400) |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper reviews drug interactions for drugs approved in 2024 and does not specifically address pharmacogenomic effects on the pharmacokinetics of acoramidis. |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters to derive a pharmacodynamic relationship. |
| PD | unknown_2025_2 | not_relevant | 0 | 0 | The provided text is a title for a paper on vutrisiran, not acoramidis, and contains no pharmacodynamic data or parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
