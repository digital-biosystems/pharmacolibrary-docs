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
| 2026-10-08 11:29 | 0:44 | 0/0/0 | 0/0/0 | 0/0/0 | 119,144/2,399 | einfracz / qwen3.8-27b | 10 | 4/7 | 9/1 | 0 |

## popPK records

_not available_

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
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: TTR (modulator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 354 matched, 55 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_2026.pdf` | Yu J et al., Understanding Pharmacokinetic-Drug Inte…, Current therapeutic researc… (2026) | pgx | 7 | [10.1016/j.curtheres.2025.100818](https://doi.org/10.1016/j.curtheres.2025.100818) | [41567854](https://www.ncbi.nlm.nih.gov/pubmed/41567854) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-08T11:29:38.180990+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alkholief_2019 | irrelevant | 0 | 0 | The study focuses on the ocular delivery of Acyclovir in rabbits, not the pharmacokinetics of Acoramidis. |
| popPK | Allender_2013 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| popPK | Andermatt_2022 | irrelevant | 0 | 0 | The paper concerns the clearance of viruses (HSV-2 and EBV) using blood filters and plasma exchange in a liver failure patient, with no mention of acoramidis or its pharmacokinetics. |
| popPK | Basavaraju_2026 | irrelevant | 0 | 0 | The paper studies valaciclovir/acyclovir, not acoramidis. |
| popPK | Brandariz-Nuñez_2021 | irrelevant | 0 | 0 | The paper is a systematic review of neurotoxicity cases associated with acyclovir and valacyclovir, and does not report pharmacokinetic parameters for acoramidis. |
| popPK | Brigden_1981 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| popPK | Dong_2025 | irrelevant | 0 | 0 | The study focuses on the transport of acyclovir and the mechanism of OAT2 downregulation; acoramidis is not mentioned. |
| PD | Endo_2026 | not_relevant | 2 | 1 | The paper reports clinical efficacy and PK/PD biomarker changes (TTR levels, stabilization) over time but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Englund_1987 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| popPK | Erlich_1997 | irrelevant | 0 | 0 | The paper is a review of antiviral treatments for HSV/VZV and does not mention acoramidis. |
| popPK | Fletcher_1985 | irrelevant | 0 | 0 | no_text gate: only 31 chars of text extracted (&lt; 400) |
| popPK | Fontana_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of vutrisiran (an RNAi therapeutic for transthyretin amyloidosis); acoramidis is mentioned only in the introduction as a TTR stabilizer, not as the subject of any PK analysis. |
| PGx | Ji_2025 | not_relevant | 0 | 0 | The paper reports in vitro binding kinetics and stabilization properties of acoramidis on purified protein, but contains no information on pharmacogenomics, gene variants, or their effects on clinical pharmacokinetics or pharmacodynamics. |
| popPK | Jones_1991 | irrelevant | 0 | 0 | no_text gate: only 28 chars of text extracted (&lt; 400) |
| popPK | Joshi_1995 | irrelevant | 0 | 0 | no_text gate: only 126 chars of text extracted (&lt; 400) |
| PD | Judge_2026 | not_relevant | 3 | 2 | The paper reports qualitative comparisons of TTR stabilization percentages and in vitro potency at fixed concentrations, but does not provide a dose-response curve, Emax/EC50 parameters, or a PK/PD model for acoramidis. |
| popPK | Khammesri_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acyclovir, not acoramidis. |
| popPK | Kissling_2015 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | Laskin_1982 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| popPK | Laskin_1983 | irrelevant | 0 | 0 | no_text gate: only 38 chars of text extracted (&lt; 400) |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The study models the placental transfer of acyclovir, cefuroxime, diazepam, dolutegravir, emtricitabine, metronidazole, ondansetron, and raltegravir, but does not study or report parameters for acoramidis. |
| popPK | Lomoio_2025 | irrelevant | 0 | 0 | This is an in silico structural and docking study of transthyretin stabilizers, not a pharmacokinetic study reporting quantitative disposition parameters for acoramidis. |
| PD | Lomoio_2025 | not_relevant | 0 | 0 | The paper is an in silico structural and docking study analyzing binding affinities of acoramidis to TTR variants, not a pharmacodynamic or exposure-response analysis in biological systems. |
| popPK | Manczak_2023 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics of letermovir, not acoramidis. |
| popPK | Matsumoto_2026 | irrelevant | 0 | 0 | The paper concerns amenamevir, not acoramidis. |
| popPK | Maurer_2025 | irrelevant | 0 | 0 | The paper analyzes the prognostic value of serum transthyretin (pharmacodynamic) levels on survival outcomes and mentions population PK modeling only as a method without reporting any quantitative PK parameters (CL, V, etc.). |
| PGx | Maurer_2025 | not_relevant | 2 | 0 | The paper analyzes the prognostic value of the pharmacodynamic marker (sTTR) and adjusts for TTR variant status, but it does not report a pharmacogenomic effect on a PK/PD parameter (i.e., it does not compare how the gene variant changes the drug's exposure or effect magnitude in a fitted model). |
| popPK | Methven_2026 | irrelevant | 0 | 0 | The paper presents a mechanistic model of TTR dissociation and amyloid formation, not a pharmacokinetic study of acoramidis disposition parameters. |
| PD | Methven_2026 | not_relevant | 3 | 2 | The paper presents a mechanistic disease model comparing treatment modalities and reports a predicted percentage reduction in a proxy metric (monomer efflux), but it does not provide an exposure-response or dose-response curve with numeric PD parameters (e.g., EC50, Emax) for acoramidis. |
| popPK | Nair_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acyclovir, not acoramidis. |
| popPK | Orr_1995 | irrelevant | 0 | 0 | The paper is a mechanistic study of uridine phosphorylase inhibitors (analogues of acyclovir) in rats and does not involve the drug acoramidis. |
| popPK | Owens_1996 | irrelevant | 0 | 0 | no_text gate: only 40 chars of text extracted (&lt; 400) |
| popPK | Preston_1995 | irrelevant | 0 | 0 | The study discusses dosage adjustment for 10 antimicrobials but does not include acoramidis (a purine nucleoside monophosphatase inhibitor used for gout/leukemia, not an antimicrobial) nor report any pharmacokinetic parameters for it. |
| popPK | Ramirez_2018 | irrelevant | 0 | 0 | The study focuses on herpes simplex virus encephalitis and does not mention acoramidis or report any pharmacokinetic parameters for it. |
| popPK | Samies_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of valacyclovir/acyclovir, not acoramidis. |
| popPK | Schaller-Ammann_2022 | irrelevant | 0 | 0 | The study focuses on in-vitro dermal penetration of acyclovir, lidocaine, and diclofenac, and does not involve acoramidis. |
| popPK | Seth_1985 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| popPK | Shakiba_1995 | irrelevant | 0 | 0 | The study investigates acyclovir diphosphate dimyristoylglycerol, not acoramidis. |
| popPK | Sherrod_2026 | irrelevant | 0 | 0 | This paper reports on clinical efficacy and health status outcomes (KCCQ scores) in a Phase 3 trial, containing no pharmacokinetic parameter values such as clearance or volume. |
| popPK | Shoji_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetics for acyclovir, not acoramidis. |
| popPK | Singhal_1995 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of ganciclovir for CMV and does not contain pharmacokinetic data for acoramidis. |
| popPK | Smiley_1996 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of valacyclovir and acyclovir, not acoramidis. |
| popPK | Smith_2016 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| popPK | Stuijt_2025 | irrelevant | 0 | 0 | The study concerns acyclovir/valacyclovir and cimetidine; acoramidis is not the subject drug. |
| popPK | Stuijt_2026 | irrelevant | 0 | 0 | The paper focuses on acyclovir and valacyclovir, not acoramidis. |
| popPK | Testani_2026 | irrelevant | 0 | 0 | The paper reports renal function endpoints (eGFR, albumin-to-creatinine ratio) rather than pharmacokinetic disposition parameters (CL, V, etc.) for acoramidis. |
| popPK | Voigt_2016 | irrelevant | 0 | 0 | The paper discusses brincidofovir and acyclovir, not acoramidis, and contains no PK parameters for acoramidis. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | The paper is a case report regarding peginterferon alfa-2b and does not contain pharmacokinetic data for acoramidis. |
| popPK | Yu_2026 | irrelevant | 0 | 0 | no_text gate: only 244 chars of text extracted (&lt; 400) |
| PGx | Yu_2026 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions for FDA approvals in 2024 and does not report pharmacogenomic effects on acoramidis. |
| PD | unknown_2025 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters to derive a pharmacodynamic relationship. |
| PD | unknown_2025_2 | not_relevant | 0 | 0 | The provided text is a title for a paper on vutrisiran, not acoramidis, and contains no pharmacodynamic data or parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
