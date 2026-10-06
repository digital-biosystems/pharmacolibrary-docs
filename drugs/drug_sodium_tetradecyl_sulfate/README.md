<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05B&quot;,&quot;href&quot;:&quot;atc/C05B.md&quot;},{&quot;label&quot;:&quot;sodium tetradecyl sulfate&quot;}]"></div>

# sodium tetradecyl sulfate

- **generic name:** sodium tetradecyl sulfate
- **ATC codes:** `C05BB04`
- **DrugBank:** [DB00464](https://go.drugbank.com/drugs/DB00464) · **PubChem:** [CID 23665772](https://pubchem.ncbi.nlm.nih.gov/compound/23665772)
- **molar mass:** 316.43 g/mol (C14H29NaO4S) — DrugBank
- **groups:** approved

## About

Sodium tetradecyl sulfate is a sclerosing agent used to treat varicose veins by injection. It is an approved medicine, classified for antivaricose therapy as a sclerosing agent for local injection.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7553377](https://www.wikidata.org/wiki/Q7553377) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:14 | 1:47 | 0/0/0 | 0/0/0 | 0/0/0 | 58,278/2,043 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/2 | 5/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_tetradecyl_sulfate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: PROC (inhibitor), PROS1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 37 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bai_2020 | irrelevant | 0 | 0 | The paper is a review of foam stability (physical half-life) rather than a pharmacokinetic study reporting disposition parameters like clearance or volume for sodium tetradecyl sulfate. |
| PD | Bai_2020 | not_relevant | 0 | 0 | The paper is a review of foam physical stability (half-life) under various preparation conditions, not a pharmacodynamic or exposure-response analysis of drug efficacy. |
| popPK | Bajpai_2012 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing sclerotherapy agents and does not report any pharmacokinetic parameters for sodium tetradecyl sulfate. |
| PD | Bajpai_2012 | not_relevant | 0 | 0 | The paper is a clinical comparative study reporting efficacy rates (cure/response percentages) and number of doses required, but it does not report any pharmacokinetic data, concentration-effect relationships, or numeric PD parameters (e.g., Emax, EC50) for sodium tetradecyl sulfate. |
| popPK | Baker_2008 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics and efficacy of ABT-510, not sodium_tetradecyl_sulfate. |
| popPK | Barrett_2004 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of sclerotherapy and does not report pharmacokinetic parameters for sodium tetradecyl sulfate. |
| popPK | Bontinis_2023 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of clinical efficacy and safety for treating telangiectasias, not a pharmacokinetic study, and contains no PK parameters for sodium tetradecyl sulfate. |
| popPK | Carpino_2017 | irrelevant | 0 | 0 | The paper is a review of immune responses to Candida albicans in mice and does not contain any pharmacokinetic data for sodium tetradecyl sulfate. |
| popPK | Chen_2009 | irrelevant | 0 | 0 | The study investigates the effect of sodium tanshinone II A sulfonate on caffeine metabolism, not the pharmacokinetics of sodium tetradecyl sulfate. |
| popPK | Faillace_2017 | irrelevant | 0 | 0 | The paper is a clinical study on renal function after transcatheter aortic valve replacement and does not involve sodium_tetradecyl_sulfate or pharmacokinetic modeling. |
| popPK | Frank_2018 | irrelevant | 0 | 0 | The paper studies the immune response to Candida albicans in mice and does not involve the drug sodium_tetradecyl_sulfate or any pharmacokinetic parameters. |
| popPK | Franz_2015 | irrelevant | 0 | 0 | The paper studies the mechanism of apoptosis in neutrophils using staurosporine and does not involve sodium tetradecyl sulfate or pharmacokinetic parameters. |
| popPK | Garcia-Carbonero_2005 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ecteinascidin-743 (ET-743), not sodium_tetradecyl_sulfate. |
| popPK | Goldman_1993 | irrelevant | 0 | 0 | The paper is a clinical review of treatment outcomes for facial telangiectasia and does not report any pharmacokinetic parameters for sodium tetradecyl sulfate. |
| popPK | Goolam_2018 | irrelevant | 0 | 0 | The paper is a microbiological study on Staphylococcus aureus isolates in cystic fibrosis patients and contains no pharmacokinetic data for sodium tetradecyl sulfate. |
| popPK | Hao_2007 | irrelevant | 0 | 0 | The study analyzes sodium tanshinone IIA sulfonate (STS), not sodium tetradecyl sulfate. |
| popPK | Hatae_1986 | irrelevant | 0 | 0 | no_text gate: only 147 chars of text extracted (&lt; 400) |
| popPK | Hildebrand_2025 | irrelevant | 0 | 0 | The paper studies STING agonists (E7766, etc.) in a murine sarcoma model and does not involve sodium_tetradecyl_sulfate or its pharmacokinetics. |
| popPK | Hirabayashi_1989 | irrelevant | 0 | 0 | The paper is a review of intraperitoneal chemotherapy focusing on CDDP (cisplatin) and does not report pharmacokinetic parameters for sodium tetradecyl sulfate. |
| popPK | Hobe_1979 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| popPK | Ikeda_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cisplatin and sodium thiosulfate, not sodium tetradecyl sulfate. |
| popPK | Kisor_1992 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for gentamicin, not sodium_tetradecyl_sulfate. |
| popPK | Kitajima_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of cisplatin and sodium thiosulfate, not sodium tetradecyl sulfate. |
| popPK | LaPar_2016 | irrelevant | 0 | 0 | The paper is a clinical outcomes study on coronary artery bypass grafting costs and does not involve sodium tetradecyl sulfate or pharmacokinetics. |
| popPK | Leach_2003 | irrelevant | 0 | 0 | The study is a clinical trial comparing the efficacy of sclerosant agents for treating leg veins and does not report pharmacokinetic parameters. |
| popPK | Liu_2023 | irrelevant | 0 | 0 | The paper is a plant biology study on rice salt tolerance and grain size, unrelated to the pharmacokinetics of sodium tetradecyl sulfate. |
| popPK | Ma_2009 | irrelevant | 0 | 0 | The paper focuses on idarubicin and doxorubicin nanoparticles, using sodium tetradecyl sulfate only as a formulation excipient, and does not report any pharmacokinetic parameters for sodium tetradecyl sulfate. |
| PD | Ma_2009 | not_relevant | 0 | 0 | The paper reports IC50 values for idarubicin and doxorubicin nanoparticles, but does not provide a pharmacodynamic or exposure-response relationship for sodium tetradecyl sulfate (STS), which is used only as a formulation excipient. |
| popPK | Molenaar-Kuijsten_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pazopanib, not sodium_tetradecyl_sulfate. |
| popPK | Rehman_2026 | irrelevant | 0 | 0 | The paper investigates lactate clearance in neonates and does not mention sodium_tetradecyl_sulfate or report any pharmacokinetic parameters for it. |
| popPK | Rein_2014 | irrelevant | 0 | 0 | The paper is a case report on sodium thiosulfate (not sodium tetradecyl sulfate) and contains no pharmacokinetic parameters. |
| popPK | Sachdev_2017 | irrelevant | 0 | 0 | The paper is a review of aldoxorubicin, a different drug, and does not contain pharmacokinetic data for sodium_tetradecyl_sulfate. |
| popPK | Segal_1995 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for amikacin, not sodium_tetradecyl_sulfate. |
| popPK | Sheiner_1983 | irrelevant | 0 | 0 | The paper is a methodological simulation study evaluating population PK estimation techniques (NONMEM vs STS) using simulated data, not a study reporting PK parameters for sodium_tetradecyl_sulfate. |
| popPK | Singh_2011 | irrelevant | 0 | 0 | The study focuses on sodium thiosulfate, not sodium tetradecyl sulfate. |
| popPK | Sivakumaran_2022 | irrelevant | 0 | 0 | The study is a mechanical/histological evaluation of aneurysm embolization in dogs, not a pharmacokinetic study, and reports no disposition parameters for sodium tetradecyl sulfate. |
| popPK | Theodorakis_2017 | irrelevant | 0 | 0 | The paper describes population pharmacokinetic modeling of glucose, insulin, and C-peptide in humans, and does not mention or study sodium_tetradecyl_sulfate. |
| popPK | Vanderpool_1989 | irrelevant | 0 | 0 | The paper describes a clinical trial of biliary lithotripsy and ursodeoxycholic acid therapy, with no mention of sodium tetradecyl sulfate or any pharmacokinetic parameters. |
| popPK | Velusamy_2024 | irrelevant | 0 | 0 | The paper is a clinical case report on the therapeutic efficacy of sodium tetradecyl sulfate for angiokeratoma, containing no pharmacokinetic data or disposition parameters. |
| popPK | Zimmet_1996 | irrelevant | 0 | 0 | The study is a dose-response pharmacodynamic study on hyaluronidase's protective effect against necrosis, not a pharmacokinetic study reporting disposition parameters for sodium tetradecyl sulfate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
