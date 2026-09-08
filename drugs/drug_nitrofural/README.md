# nitrofural

- **generic name:** nitrofural
- **ATC codes:** `B05CA03`, `D08AF01`, `D09AA03`, `P01CC02`, `S01AX04`, `S02AA02`
- **DrugBank:** [DB00336](https://go.drugbank.com/drugs/DB00336)
- **groups:** approved, vet_approved, withdrawn

## About

**Description.** Nitrofural or nitrofurazone is a topical anti-infective agent effective against gram-negative and gram-positive bacteria. It is used for superficial wounds, burns, ulcers, and skin infections. Nitrofural has also been administered orally in the treatment of trypanosomiasis.

Except for topical drug products formulated for dermatologic application, the FDA withdrew its approval for the use of drug products containing nitrofurazone.[L43942]

**Indication.** For the treatment of bacterial skin infections including pyodermas, infected dermatoses and infections of cuts, wounds, burns and ulcers due to susceptible organisms.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-07 15:32 | 7:15 | 0/0/0 | 0/0/0 | 0/0/0 | 55,406/2,422 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 2/6 | 8/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 26 matched, 25 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kazmi_2022.pdf` | Kazmi SSUH et al., A community-based approach to analyzing…, Marine pollution bulletin (2022) | pd | 5 | [10.1016/j.marpolbul.2021.113165](https://doi.org/10.1016/j.marpolbul.2021.113165) | [34839952](https://www.ncbi.nlm.nih.gov/pubmed/34839952) | metadata signals extractable PD data (IC50) |
| `Chen_2022.pdf` | Chen L et al., Inhibition of Escherichia coli nitrored…, Chinese journal of natural… (2022) | pd | 4 | [10.1016/S1875-5364(22)60163-8](https://doi.org/10.1016/S1875-5364(22)60163-8) | [35907649](https://www.ncbi.nlm.nih.gov/pubmed/35907649) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-07T15:31:44.446667+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2022 | irrelevant | 0 | 0 | The study focuses on the inhibition of bacterial nitroreductase by herbal constituents and does not report pharmacokinetic parameters for nitrofural. |
| PD | Chen_2022 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50, Ki) for herbal constituents against E. coli nitroreductase, not a pharmacodynamic exposure-response or dose-response relationship for the drug nitrofural in a biological system. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment regarding post-mortem inspection delays and does not contain any pharmacokinetic data or parameters for nitrofural. |
| PD | EFSA_2020 | not_relevant | 0 | 0 | The paper discusses the impact of delayed post-mortem inspection on the detection of pathogens and chemical contaminants, including potential degradation of pharmacologically active substances, but does not report any pharmacodynamic or exposure-response data for nitrofural. |
| popPK | Gbedema_2010 | irrelevant | 0 | 0 | The paper studies the wound healing properties of a plant extract, using nitrofurazone (not nitrofural) only as a topical comparator, and contains no pharmacokinetic data. |
| PD | Gbedema_2010 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of a plant extract (Clerodendron splendens) and uses nitrofurazone only as a positive control; it does not report a pharmacodynamic or exposure-response relationship for nitrofural/nitrofurazone itself. |
| popPK | Greenaway_1986 | irrelevant | 0 | 0 | The paper is an in-vitro embryotoxicity study focusing on malformation mechanisms and does not report any pharmacokinetic parameters for nitrofural. |
| PGx | Hasan_2018 | not_relevant | 0 | 0 | The paper focuses on toxicogenomic biomarkers and dose-response gene expression for nitrofurazone, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Hasan_2019 | not_relevant | 0 | 0 | The paper proposes a statistical method for clustering drug toxicity data and does not report pharmacogenomic effects on PK/PD parameters for nitrofural. |
| PGx | Hasan_2025 | not_relevant | 0 | 0 | The paper proposes a statistical method for toxicogenomic co-clustering and does not report pharmacogenomic effects on PK/PD parameters. |
| popPK | Hong_2015 | irrelevant | 0 | 0 | The study focuses on ecotoxicology and biomarkers in protozoa exposed to nitrofurazone, not pharmacokinetic parameters for nitrofural. |
| popPK | Hong_2017 | irrelevant | 0 | 0 | The study focuses on ecotoxicity and biomarkers (enzyme activity) in protozoa, not pharmacokinetic parameters for nitrofural. |
| popPK | Jauréguiberry_2005 | irrelevant | 0 | 0 | The paper is a clinical retrospective study of leptospirosis patients and does not contain any pharmacokinetic data or parameters for nitrofural. |
| PD | Jauréguiberry_2005 | not_relevant | 0 | 0 | The paper is a retrospective clinical study of leptospirosis patients and does not contain any pharmacokinetic or pharmacodynamic data for nitrofural. |
| popPK | Kazmi_2022 | irrelevant | 0 | 0 | The study focuses on the ecotoxicity of nitrofurazone (a different drug) and reports toxicity metrics (LC50/IC50) rather than pharmacokinetic parameters for nitrofural. |
| popPK | Li_2014 | irrelevant | 0 | 0 | The study focuses on ecotoxicity biomarkers (catalase activity/mRNA) in protozoa exposed to nitrofurazone, not pharmacokinetic parameters for nitrofural. |
| popPK | Macri_1984 | irrelevant | 0 | 0 | The study is an ecotoxicological evaluation of nitrofurazone (not nitrofural) in aquatic organisms and insects, reporting toxicity endpoints (EC50) rather than pharmacokinetic parameters. |
| popPK | Mao_2026 | irrelevant | 0 | 0 | The paper is a Mendelian randomization study where nitrofural is only mentioned as a potential drug target in molecular docking, with no pharmacokinetic parameters reported. |
| PD | Mao_2026 | not_relevant | 0 | 0 | The paper is a Mendelian randomization and molecular docking study; it mentions nitrofural only as a predicted drug target via docking, with no pharmacodynamic, exposure-response, or dose-response data or parameters. |
| PGx | PMID36049896_2023 | not_relevant | 0 | 0 | The paper discusses G6PD genotype and medication use guidelines, but does not report pharmacokinetic or pharmacodynamic parameters for nitrofural. |
| popPK | Pereira_2025 | irrelevant | 0 | 0 | The paper is a review of hydrazone-containing scaffolds for anti-leishmanial activity and does not report pharmacokinetic parameters for nitrofural. |
| PD | Pereira_2025 | not_relevant | 0 | 0 | The paper is a structural review of hydrazone scaffolds and does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for nitrofural. |
| popPK | Santiago_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antitrypanosomal activity study of novel derivatives, not a pharmacokinetic study, and contains no PK parameters for nitrofural. |
| PD | Santiago_2020 | not_relevant | 2 | 2 | The paper reports a single IC50 value for a novel derivative, which is a standard pharmacological potency metric, but does not provide a full dose-response curve, PK/PD model, or exposure-response relationship required for extractable PD parameters. |
| popPK | Teshome_2022 | irrelevant | 0 | 0 | The paper is a wound healing and anti-inflammatory study where nitrofurazone is used only as a positive control, with no pharmacokinetic parameters reported. |
| PD | Teshome_2022 | not_relevant | 0 | 0 | The paper evaluates a plant extract (Clematis simensis) and uses nitrofurazone only as a positive control; it does not report pharmacodynamic or exposure-response parameters for nitrofural. |
| popPK | Trossini_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cruzain inhibition and does not report pharmacokinetic parameters for nitrofural. |
| popPK | Vlastos_2010 | irrelevant | 0 | 0 | The paper investigates the genotoxic effects of semicarbazide, a metabolite of nitrofurazone, and does not report any pharmacokinetic parameters for nitrofural. |
| PD | Vlastos_2010 | not_relevant | 0 | 0 | The paper investigates the genotoxicity of semicarbazide, not nitrofural, and reports cytogenetic endpoints without deriving pharmacodynamic parameters for the target drug. |
| popPK | Workman_1982 | irrelevant | 1 | 1 | Nitrofurazone/nitrofurantoin are only minor test compounds in a CCNU chemosensitization study, and the numeric values are not readable here beyond mentions of tables/figures not provided. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_nitrofural`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
