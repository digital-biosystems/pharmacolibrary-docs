<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;octenidine&quot;}]"></div>

# octenidine

- **generic name:** octenidine
- **ATC codes:** `A01AB24`, `R02AA21`
- **DrugBank:** [DB12624](https://go.drugbank.com/drugs/DB12624) · **PubChem:** [CID 51167](https://pubchem.ncbi.nlm.nih.gov/compound/51167)
- **molar mass:** 550.92 g/mol (C36H62N4) — DrugBank
- **groups:** investigational

## About

Octenidine is an antiseptic (anti-infective) agent used for local treatment, such as in the mouth and throat. It is classified as investigational in DrugBank and has no European Union marketing authorisation, so it is not an approved medicine there.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27285931](https://www.wikidata.org/wiki/Q27285931) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 02:38 | 3:38 | 0/0/0 | 0/2/0 | 0/0/0 | 139,251/3,194 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 3/12 | 13/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 0.00).">in vitro</span> | [Cai_2023_cell_viability](drugs/drug_octenidine/pd_Cai_2023_cell_viability.md) | cell viability ← octenidine dihydrochloride · direct sigmoid Emax (Hill) effect | — | Cai X et al., Cytotoxic effects of different mouthwas…, Clinical oral investigations (2023) | [10.1007/s00784-023-05118-8](https://doi.org/10.1007/s00784-023-05118-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Ciftci_2025_Viability](drugs/drug_octenidine/pd_Ciftci_2025_Viability.md) | Cell viability ← Octenidine dihydrochloride · direct sigmoid Emax (Hill) effect | — | Ciftci IH et al., Evaluation of Octenidine Dihydrochlorid…, Biomedicines (2025) | [10.3390/biomedicines14010050](https://doi.org/10.3390/biomedicines14010050) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 47 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wekerle_2020.pdf` | Wekerle M et al., Anti-Acanthamoeba disinfection: hands,…, International journal of an… (2020) | pd | 5 | [10.1016/j.ijantimicag.2020.106122](https://doi.org/10.1016/j.ijantimicag.2020.106122) | [32739477](https://www.ncbi.nlm.nih.gov/pubmed/32739477) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-04T02:37:08.345974+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agrawal_2024 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for acute pharyngitis and does not report any pharmacokinetic parameters for octenidine. |
| popPK | Anderson_1981 | irrelevant | 0 | 0 | The paper describes the synthesis and identification of a sex pheromone for the San Jose scale insect, not the pharmacokinetics of the drug octenidine. |
| popPK | Bauer_2022 | irrelevant | 0 | 0 | The paper is a chemosensory study on acrylates and 1-alken-3-ones, not a pharmacokinetic study of octenidine. |
| popPK | Burger_1993 | irrelevant | 0 | 0 | The paper describes the chemical constituents of insect secretions and is unrelated to the pharmacokinetics of the drug octenidine. |
| popPK | Cai_2023 | irrelevant | 0 | 0 | The paper is an in vitro cytotoxicity study reporting IC50 values for cell viability, not pharmacokinetic disposition parameters (CL, V, etc.) for octenidine. |
| popPK | Cerbu_2025 | irrelevant | 0 | 0 | The study evaluates the antifungal efficacy of octenidine on Candida auris in ex vivo skin models and in vitro biofilms, reporting no pharmacokinetic parameters for octenidine. |
| popPK | Choi_1994 | irrelevant | 0 | 0 | The paper describes the synthesis of bacterial polyesters (PHAs) by Pseudomonas citronelolis and does not involve the drug octenidine or any pharmacokinetic parameters. |
| popPK | Ciftci_2025 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and mechanistic analysis of octenidine in cell lines, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Clanner-Engelshofen_2020 | irrelevant | 0 | 0 | no_text gate: only 368 chars of text extracted (&lt; 400) |
| popPK | Cork_1994 | irrelevant | 0 | 0 | The paper is a study on electrophysiologically-active compounds in screwworm wound fluid and does not involve octenidine pharmacokinetics. |
| popPK | Danilevicius_2015 | irrelevant | 0 | 0 | The study evaluates the clinical efficacy and safety of octenidine for MRSA decontamination and does not report any pharmacokinetic parameters. |
| popPK | Delcros_2022 | irrelevant | 0 | 0 | The paper studies the glycosidic precursors of mushroom off-flavor compounds (1-octen-3-one, etc.) in grapes, not the pharmacokinetics of the drug octenidine. |
| popPK | Dijkstra_1976 | irrelevant | 0 | 0 | The paper studies flavor compounds in mushrooms and does not involve the drug octenidine or pharmacokinetics. |
| popPK | El_2023 | irrelevant | 0 | 0 | The paper is a review of fungal volatile organic compounds (specifically 1-octen-3-ol) and does not contain any pharmacokinetic data for the drug octenidine. |
| popPK | Enzelsberger_1995 | irrelevant | 0 | 0 | The study evaluates the antimicrobial efficacy of octenidine as an antiseptic, not its pharmacokinetic disposition parameters. |
| popPK | Galli_2025 | irrelevant | 0 | 0 | The study is an in-vitro high-throughput screening for anthelmintic activity and toxicity, reporting only EC50 values and in-silico predictions, with no quantitative pharmacokinetic parameters (CL, V, etc.) for octenidine. |
| popPK | Hardy_2018 | irrelevant | 0 | 0 | The paper investigates the development of bacterial resistance (MIC/MBC) to octenidine in Staphylococcus aureus, not the pharmacokinetics of octenidine in a host. |
| popPK | Kramer_2018 | irrelevant | 0 | 0 | The paper is a clinical consensus guideline on wound antisepsis and does not report any pharmacokinetic parameters for octenidine. |
| popPK | Küng_2016 | irrelevant | 0 | 0 | The study is an in vitro antimicrobial efficacy assay measuring EC50 values, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Loose_2021 | irrelevant | 0 | 0 | The study is an in-vitro microbiological investigation of antibacterial and anti-biofilm activity, reporting MIC/MBC values rather than pharmacokinetic parameters. |
| popPK | Lopez_2020 | irrelevant | 0 | 0 | The study is an in-vitro antimicrobial and permeability assessment, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Mappin_2023 | irrelevant | 0 | 0 | The paper studies odor-evoked transcriptomics in mosquitoes using 1-octen-3-ol, not the pharmacokinetics of the drug octenidine. |
| popPK | Mappin_2023_2 | irrelevant | 0 | 0 | The paper is a transcriptomic study of mosquito olfactory receptors exposed to 1-octen-3-ol, not a pharmacokinetic study of the drug octenidine. |
| popPK | Michalíková_2019 | irrelevant | 0 | 0 | The paper investigates endocrine-disrupting effects (receptor binding) in vitro, not pharmacokinetic disposition parameters. |
| popPK | Molnár_2024 | irrelevant | 0 | 0 | The paper is a review of the antimicrobial efficacy of octenidine in otorhinolaryngology and explicitly states that the drug is not absorbed systemically, containing no pharmacokinetic parameters. |
| popPK | Murray_2020 | irrelevant | 0 | 0 | The paper is a study on the aroma chemistry of mushrooms and does not involve the drug octenidine or any pharmacokinetic parameters. |
| popPK | Müller_2006 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity comparison where octenidine is only a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Müller_2006 | not_relevant | 2 | 1 | The paper reports IC50 values for povidone-iodine and qualitatively compares it to octenidine, but does not provide numeric PD parameters (IC50, Emax, etc.) or a concentration-effect curve for octenidine. |
| popPK | Nishio_1989 | irrelevant | 0 | 0 | The study investigates the cardiovascular effects of beraprost sodium in dogs and does not involve octenidine or its pharmacokinetics. |
| popPK | Ntoruru_2022 | irrelevant | 0 | 0 | The paper studies the biosynthesis of the volatile compound 1-octen-3-ol in soybean plants, which is chemically distinct from the antiseptic drug octenidine and involves no pharmacokinetic parameters. |
| popPK | Oehlschlager_1988 | irrelevant | 0 | 0 | The paper is a review of chemical communication and pheromones in grain beetles and contains no pharmacokinetic data for octenidine. |
| popPK | Pokale_2026 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of octenidine mouthwash for gingivitis, not a pharmacokinetic study, and reports no disposition parameters. |
| PD | Pokale_2026 | not_relevant | 1 | 0 | The paper is a clinical trial comparing fixed doses of mouthwashes and reports clinical outcomes (GI, PI, CFU) but does not provide pharmacokinetic data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | Scott_2022 | irrelevant | 0 | 0 | The paper is a review of octenidine's use as a topical antiseptic for infection control in ICUs and contains no pharmacokinetic data or disposition parameters. |
| popPK | Sedlock_1985 | irrelevant | 0 | 0 | The study measures microbicidal activity and skin degerming efficacy, not pharmacokinetic disposition parameters. |
| popPK | Shapiro_2002 | irrelevant | 0 | 0 | The study is an in vitro efficacy assessment of antimicrobial mouthrinses and does not report any pharmacokinetic parameters for octenidine. |
| popPK | Shepherd_2018 | irrelevant | 0 | 0 | The study investigates the microbiological adaptation and resistance of Pseudomonas aeruginosa to octenidine, not the pharmacokinetics of the drug in a host. |
| popPK | Shern_1987 | irrelevant | 0 | 0 | The study is a clinical trial assessing the antimicrobial effects of octenidine on dental plaque and gingivitis, not a pharmacokinetic study. |
| popPK | Vereshchagin_2021 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study on gemini quaternary ammonium compounds, using octenidine only as a reference antiseptic for in-vitro antimicrobial activity, with no pharmacokinetic data. |
| popPK | Veronico_2023 | irrelevant | 0 | 0 | The paper investigates the nematicidal toxicity of fungal volatile organic compounds (1-Octen-3-ol and 3-Octanone) on nematodes, not the pharmacokinetics of the drug octenidine. |
| popPK | Wekerle_2020 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| PD | Wekerle_2020 | not_relevant | 0 | 0 | The text is a title regarding anti-Acanthamoeba disinfection and does not contain the full text or any numeric pharmacodynamic parameters for octenidine. |
| popPK | Wiegand_2012 | irrelevant | 0 | 0 | The study is an in-vitro microbiological analysis of bacterial adaptation to antiseptics, not a pharmacokinetic study. |
| PD | Wiegand_2012 | not_relevant | 3 | 2 | The paper reports IC50 values for octenidine to assess bacterial adaptation over time, which is a microbiological susceptibility metric rather than a pharmacodynamic (exposure-response) model of drug effect in a biological system with derivable PD parameters like Emax or EC50 in a PK/PD context. |
| popPK | Yamamoto_2019 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and skin irritation assessment where octenidine serves only as a comparator antiseptic, with no pharmacokinetic parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
