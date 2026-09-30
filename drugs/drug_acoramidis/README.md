<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;acoramidis&quot;}]"></div>

# acoramidis

- **generic name:** acoramidis
- **ATC codes:** `C01EB25`
- **DrugBank:** [DB17999](https://go.drugbank.com/drugs/DB17999) · **PubChem:** not captured
- **molar mass:** 292.31 g/mol (C15H17FN2O3) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Acoramidis is a small molecule stabilizer of transthyretin (TTR) for use in patients with TTR amyloidosis.[L51958] Similar to the previously developed [tafamidis], acoramidis is used to stabilize TTR in its tetrameric form, preventing the formation of amyloidogenic monomers and the progression of amyloidosis.[A264768] Although they share a mechanism of action, acoramidis is more selective for TTR and is a more potent stabilizer when compared to tafamidis.[A264768]

Acoramidis has been in development since at least 2013.[A264808] It was brought to market by BridgeBio Pharma and approved by the FDA in November 2024 to reduce negative cardiovascular outcomes in patients with cardiomyopathy caused by TTR amyloidosis.[L51958,L51968]

**Indication.** Acoramidis is indicated to reduce cardiovascular death and cardiovascular-related hospitalization in adult patients with cardiomyopathy of wild-type or variant transthyretin-mediated amyloidosis (ATTR-CM).[L51958]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 17:09 | 19:07 | 0/0/0 | 0/1/0 | 0/0/0 | 105,561/3,929 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 4/5 | 8/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Fontana_2026_TTR](drugs/drug_acoramidis/pd_Fontana_2026_TTR.md) | serum transthyretin ← vutrisiran · delayed effect through an effect compartment | — | Fontana M et al., Vutrisiran-Mediated Knockdown of Transt…, Clinical pharmacokinetics (2026) | [10.1007/s40262-026-01651-3](https://doi.org/10.1007/s40262-026-01651-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=acoramidis) page (add drugs there; the set becomes a link).

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
| excretion | bile duct | <sub>“…approximately 32% of the radioactivity was recovered in the feces (15% as unchanged parent…”</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TTR (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 348 matched, 51 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_2026.pdf` | Yu J et al., Understanding Pharmacokinetic-Drug Inte…, Current therapeutic researc… (2026) | pgx | 7 | [10.1016/j.curtheres.2025.100818](https://doi.org/10.1016/j.curtheres.2025.100818) | [41567854](https://www.ncbi.nlm.nih.gov/pubmed/41567854) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-09-27T17:06:29.247609+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alkholief_2019 | irrelevant | 0 | 0 | The study investigates the ocular delivery of Acyclovir, not acoramidis. |
| popPK | Allender_2013 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Andermatt_2022 | irrelevant | 0 | 0 | The paper studies viral clearance (HSV-2 and EBV) using a blood filter and plasma exchange, and does not involve the drug acoramidis or its pharmacokinetics. |
| popPK | Basavaraju_2026 | irrelevant | 0 | 0 | The study focuses on valaciclovir/acyclovir delivery systems and does not involve acoramidis. |
| popPK | Brandariz-Nuñez_2021 | irrelevant | 0 | 0 | The paper is a systematic review of neurotoxicity cases for acyclovir and valacyclovir, not a pharmacokinetic study of acoramidis. |
| popPK | Brigden_1981 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| popPK | Dong_2025 | irrelevant | 0 | 0 | The study focuses on acyclovir and transporter mechanisms in kidney injury, not acoramidis pharmacokinetics. |
| PD | Endo_2026 | not_relevant | 2 | 1 | The paper reports clinical efficacy and PK/PD biomarker changes (TTR levels, stabilization) over time but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Englund_1987 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| popPK | Erlich_1997 | irrelevant | 0 | 0 | The paper is a review of herpes management and does not mention acoramidis or report any pharmacokinetic parameters. |
| popPK | Fletcher_1985 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| popPK | Fontana_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of vutrisiran, with acoramidis mentioned only as a comparator agent in the background. |
| PGx | Ji_2025 | not_relevant | 0 | 0 | The paper reports in vitro binding affinities and stabilization kinetics of acoramidis compared to other drugs, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Jones_1991 | irrelevant | 0 | 0 | no_text gate: only 28 chars of text extracted (&lt; 400) |
| popPK | Joshi_1995 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Judge_2026 | not_relevant | 3 | 2 | The paper reports qualitative comparisons of TTR stabilization percentages and in vitro potency at fixed concentrations, but does not provide a dose-response curve, Emax/EC50 parameters, or a PK/PD model for acoramidis. |
| PGx | Judge_2026 | not_relevant | 2 | 5 | The paper compares the pharmacodynamic efficacy (TTR stabilization) of acoramidis versus tafamidis in patients with different TTR genotypes, but it does not report a pharmacokinetic or pharmacodynamic parameter of acoramidis that is altered by the genotype (i.e., it does not show that the genotype changes how the drug behaves, but rather how the drug affects the target in different genotypes). |
| popPK | Khammesri_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acyclovir in Asian elephants, not acoramidis. |
| popPK | Kissling_2015 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | Laskin_1982 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| popPK | Laskin_1983 | irrelevant | 0 | 0 | no_text gate: only 38 chars of text extracted (&lt; 400) |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study focuses on PBPK modeling of placental transfer for eight other drugs (e.g., acyclovir, cefuroxime) and does not report pharmacokinetic parameters for acoramidis. |
| popPK | Lomoio_2025 | irrelevant | 0 | 0 | The paper is an in silico structural and docking study of transthyretin variants, not a pharmacokinetic study, and contains no quantitative PK parameters (CL, V, etc.) for acoramidis. |
| PD | Lomoio_2025 | not_relevant | 0 | 0 | The paper is an in silico structural and docking study analyzing binding affinities of acoramidis to TTR variants, not a pharmacodynamic or exposure-response analysis in biological systems. |
| popPK | Manczak_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for letermovir, not acoramidis. |
| popPK | Matsumoto_2026 | irrelevant | 0 | 0 | The study focuses on amenamevir, not acoramidis, and reports a single CSF concentration rather than population PK parameters. |
| popPK | Maurer_2025 | irrelevant | 2 | 0 | The study focuses on the prognostic value of serum transthyretin (sTTR) levels as a biomarker for mortality, not on reporting quantitative pharmacokinetic parameters (CL, V, ka) for acoramidis. |
| PGx | Maurer_2025 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic effect of acoramidis on survival and TTR levels, but does not report a pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| PD | Methven_2026 | not_relevant | 3 | 2 | The paper presents a mechanistic disease model comparing treatment modalities and reports a predicted percentage reduction in a proxy metric (monomer efflux), but it does not provide an exposure-response or dose-response curve with numeric PD parameters (e.g., EC50, Emax) for acoramidis. |
| popPK | Nair_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acyclovir, not acoramidis. |
| popPK | Orr_1995 | irrelevant | 0 | 0 | The paper studies uridine phosphorylase inhibitors (5-benzyluracils) and does not involve the drug acoramidis. |
| popPK | Owens_1996 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| popPK | Ramirez_2018 | irrelevant | 0 | 0 | The paper is a clinical study on HSV encephalitis and does not involve acoramidis or report any pharmacokinetic parameters. |
| popPK | Schaller-Ammann_2022 | irrelevant | 0 | 0 | The study is an in-vitro dermal penetration study using acyclovir, lidocaine, and diclofenac, and does not involve acoramidis or report population pharmacokinetic parameters. |
| popPK | Seth_1985 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | Shakiba_1995 | irrelevant | 0 | 0 | The study investigates acyclovir diphosphate dimyristoylglycerol (ACVDP-DG), not acoramidis. |
| popPK | Sherrod_2026 | irrelevant | 0 | 0 | The paper is a secondary analysis of a clinical trial focusing on patient-reported health status outcomes (KCCQ-OS) and does not report any pharmacokinetic parameters for acoramidis. |
| popPK | Shoji_2022 | irrelevant | 0 | 0 | The study focuses on acyclovir pharmacokinetics in a neonate, not acoramidis. |
| popPK | Singhal_1995 | irrelevant | 0 | 0 | The paper is a clinical study on ganciclovir treatment for CMV and does not involve acoramidis or report any pharmacokinetic parameters. |
| popPK | Smiley_1996 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of valacyclovir and acyclovir, not acoramidis. |
| popPK | Smith_2016 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| popPK | Stuijt_2025 | irrelevant | 0 | 0 | The paper focuses on acyclovir and cimetidine, not acoramidis. |
| popPK | Stuijt_2026 | irrelevant | 0 | 0 | The paper focuses on acyclovir and cimetidine, not acoramidis. |
| popPK | Testani_2026 | irrelevant | 0 | 0 | The paper reports renal function outcomes (eGFR, albumin-to-creatinine ratio) rather than pharmacokinetic parameters (CL, V, ka) for acoramidis. |
| popPK | Voigt_2016 | irrelevant | 0 | 0 | The paper discusses brincidofovir and acyclovir, not acoramidis, and contains no relevant pharmacokinetic data for the target drug. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a case report on peginterferon alfa-2b and does not involve acoramidis or report any pharmacokinetic parameters. |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (DDIs) for 2024 FDA approvals and does not report pharmacogenomic effects (gene variants) on acoramidis PK/PD. |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters to derive a pharmacodynamic relationship. |
| PD | unknown_2025_2 | not_relevant | 0 | 0 | The provided text is a title for a paper on vutrisiran, not acoramidis, and contains no pharmacodynamic data or parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
