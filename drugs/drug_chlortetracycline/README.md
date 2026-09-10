# chlortetracycline

- **generic name:** chlortetracycline
- **ATC codes:** `A01AB21`, `D06AA02`, `J01AA03`, `S01AA02`
- **DrugBank:** [DB09093](https://go.drugbank.com/drugs/DB09093)
- **groups:** approved, vet_approved, withdrawn

## About

**Description.** Chlortetracycline is a _tetracycline_ antibiotic, and historically the first member of this class to be identified. It was discovered in 1945 by the scientist, Benjamin Minge Duggar, working at Lederle Laboratories under the supervision of Yellapragada Subbarow. He discovered that this antibiotic was the product of an actinomycete strain he cultured and obtained from a soil sample from a field in Missouri. The organism was named _Streptomyces aureofaciens_ due to its gold-hued color.

**Indication.** Used in the manufacuring of medicated animal feeds [FDA Label].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 07:48 | 1:44:37 | 0/1/0 | 0/0/0 | 0/0/0 | 94,801/7,559 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 4/3 | 5/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Reinbold_2010](drugs/drug_chlortetracycline/Chlortetracycline_Reinbold2010_reference.md) | Reinbold JB et al., Plasma pharmacokinetics of oral chlorte…, Journal of veterinary pharm… (2010) | [10.1111/j.1365-2885.2009.1116.x](https://doi.org/10.1111/j.1365-2885.2009.1116.x) |

## Coverage

- **PubMed hits:** 24 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bradley_1982.pdf` | Bradley BD et al., Comparative pharmacokinetics of chlorte…, Journal of veterinary pharm… (1982) | popPK | 10 | [10.1111/j.1365-2885.1982.tb00442.x](https://doi.org/10.1111/j.1365-2885.1982.tb00442.x) | [7183795](https://pubmed.ncbi.nlm.nih.gov/7183795) | The paper describes a pharmacokinetic study of chlortetracycline in calves using compartmental models, but the specific numeric parameter values are not present in the provided evidence. |
| `Reinbold_2010.pdf` | Reinbold JB et al., Plasma pharmacokinetics of oral chlorte…, Journal of veterinary pharm… (2010) | popPK | 10 | [10.1111/j.1365-2885.2009.1116.x](https://doi.org/10.1111/j.1365-2885.2009.1116.x) | [20444029](https://pubmed.ncbi.nlm.nih.gov/20444029) | The paper reports quantitative population PK parameters (V/F, Cl/F, k, t1/2) for chlortetracycline in cattle, and all numeric values are explicitly present in the provided text. |
| `Zhang_2022.pdf` | Zhang Y et al., Florfenicol/Chlortetracycline Effect on…, Microbial drug resistance (… (2022) | popPK | 8 | [10.1089/mdr.2022.0008](https://doi.org/10.1089/mdr.2022.0008) | [35723674](https://pubmed.ncbi.nlm.nih.gov/35723674) | The study reports population PK for chlortetracycline in ducks, but the evidence only provides AUC and qualitative descriptions of clearance, lacking specific numeric values for CL, V, or ka. |
| `Ding_2026.pdf` | Ding M et al., Biodegradation of tetracycline by Penic…, Bioprocess and biosystems e… (2026) | pd | 4 | [10.1007/s00449-026-03360-4](https://doi.org/10.1007/s00449-026-03360-4) | [42274796](https://www.ncbi.nlm.nih.gov/pubmed/42274796) | metadata signals extractable PD data (EC50) |
| `Halling-Sørensen_2000.pdf` | Halling-Sørensen B, Algal toxicity of antibacterial agents…, Chemosphere (2000) | pd | 4 | [10.1016/s0045-6535(99)00445-2](https://doi.org/10.1016/s0045-6535(99)00445-2) | [10705551](https://www.ncbi.nlm.nih.gov/pubmed/10705551) | metadata signals extractable PD data (EC50) |
| `Halling-Sørensen_2001.pdf` | Halling-Sørensen B, Inhibition of aerobic growth and nitrif…, Archives of environmental c… (2001) | pd | 4 | [10.1007/s002440010197](https://doi.org/10.1007/s002440010197) | [11525487](https://www.ncbi.nlm.nih.gov/pubmed/11525487) | metadata signals extractable PD data (EC50) |
| `Magdaleno_2017.pdf` | Magdaleno A et al., Toxicity and Genotoxicity of Three Anti…, Bulletin of environmental c… (2017) | pd | 4 | [10.1007/s00128-017-2091-9](https://doi.org/10.1007/s00128-017-2091-9) | [28434066](https://www.ncbi.nlm.nih.gov/pubmed/28434066) | metadata signals extractable PD data (EC50) |
| `Narciso_2023.pdf` | Narciso A et al., Application of the Aliivibrio fischeri…, FEMS microbiology ecology (2023) | pd | 4 | [10.1093/femsec/fiad125](https://doi.org/10.1093/femsec/fiad125) | [37822015](https://www.ncbi.nlm.nih.gov/pubmed/37822015) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-10T07:45:00.249325+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bradley_1982 | relevant | 10 | 0 | The paper describes a pharmacokinetic study of chlortetracycline in calves using compartmental models, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Brosche_2010 | irrelevant | 0 | 0 | The study is an ecotoxicology investigation of bacterial communities, not a pharmacokinetic study, and reports no disposition parameters for chlortetracycline. |
| popPK | Cazer_2017 | relevant | 8 | 2 | The paper is a PK/PD modeling study for chlortetracycline in cattle, but the specific numeric parameter values are in Table 2 (not provided) or cited from previous literature, with only fragmentary constants visible in the extracted lines. |
| popPK | Cazer_2018 | irrelevant | 0 | 0 | The paper is a corrigendum regarding a Monte Carlo simulation of antimicrobial resistance dissemination, not a pharmacokinetic study, and contains no PK parameters for chlortetracycline. |
| popPK | Curtis_2020 | irrelevant | 0 | 0 | The paper is a vaccine efficacy study for bovine anaplasmosis where chlortetracycline is only mentioned as a background control method, with no pharmacokinetic parameters reported. |
| popPK | Ding_2026 | irrelevant | 0 | 0 | The paper focuses on the biodegradation of tetracycline by a fungus, not the pharmacokinetics of chlortetracycline in a biological host. |
| PD | Ding_2026 | not_relevant | 0 | 0 | The paper focuses on the biodegradation of tetracycline by a fungus, not the pharmacodynamics of chlortetracycline in a biological host. |
| popPK | Halling-Sørensen_2000 | irrelevant | 0 | 0 | The paper focuses on algal toxicity of antibacterial agents, not pharmacokinetic parameters for chlortetracycline. |
| PD | Halling-Sørensen_2000 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship for chlortetracycline. |
| popPK | Halling-Sørensen_2001 | irrelevant | 0 | 0 | The paper focuses on the inhibition of bacterial growth and nitrification by antibacterial agents, not on the pharmacokinetic disposition parameters of chlortetracycline. |
| PD | Halling-Sørensen_2001 | not_relevant | 0 | 0 | The paper focuses on the inhibition of aerobic growth and nitrification in sewage sludge by antibacterial agents, likely in an environmental context, and does not report pharmacodynamic (PD) or exposure-response relationships for chlortetracycline in a biological or clinical system with numeric PD parameters. |
| popPK | Lin_2012 | irrelevant | 0 | 0 | The study is a toxicological assessment of earthworms reporting EC50 values and biochemical markers, not a pharmacokinetic study with disposition parameters. |
| popPK | Magdaleno_2017 | irrelevant | 0 | 0 | The paper title indicates a toxicity/genotoxicity study, and the provided evidence contains no pharmacokinetic parameters or numeric values for chlortetracycline. |
| PD | Magdaleno_2017 | not_relevant | 0 | 0 | The paper focuses on toxicity and genotoxicity assays (e.g., Ames test, micronucleus) rather than pharmacodynamic exposure-response modeling or dose-effect curve fitting for chlortetracycline. |
| popPK | Narciso_2023 | irrelevant | 0 | 0 | The paper describes a bacterium bioassay for toxicity assessment, not a pharmacokinetic study of chlortetracycline. |
| PD | Narciso_2023 | not_relevant | 0 | 0 | The paper focuses on the application of a bioassay for assessing antibiotic and copper effects, but does not report specific pharmacodynamic (PD) or exposure-response parameters for chlortetracycline. |
| popPK | Reppert_2020 | irrelevant | 2 | 0 | The study reports plasma concentration trends and statistical factors but does not provide quantitative pharmacokinetic parameters (CL, V, ka, t1/2) or a compartmental model. |
| popPK | Thompson_1985 | irrelevant | 0 | 0 | The study uses chlortetracycline as a fluorescent probe for membrane-associated calcium in platelets, not as a subject drug for pharmacokinetic analysis. |
| PD | Thompson_1985 | not_relevant | 0 | 0 | The paper investigates intracellular calcium fluxes in platelets and mentions chlortetracycline only as a reagent/material, without reporting any pharmacodynamic or exposure-response analysis for it. |
| popPK | Toillion_2024 | relevant | 4 | 2 | The study reports non-compartmental AUC values for chlortetracycline but lacks the specific quantitative disposition parameters (CL, V, ka, half-life) required for population-PK extraction. |
| PGx | Tymoszewska_2021 | not_relevant | 0 | 0 | The paper studies bacterial resistance mechanisms in Lactococcus lactis, not human pharmacogenomics or PK/PD parameters. |
| popPK | Volkova_2017 | irrelevant | 2 | 0 | The paper is a modeling framework for intestinal drug concentrations and does not report standard systemic population PK parameters (CL, V, Q, ka) for chlortetracycline, relying instead on literature values for specific intestinal fate variables. |
| popPK | Wei_2018 | irrelevant | 0 | 0 | The paper is an ISO standard for water toxicity testing using luminescent bacteria and does not contain any pharmacokinetic data for chlortetracycline. |
| PD | Wei_2018 | not_relevant | 0 | 0 | The provided text consists of PDF disclaimers, general reagent descriptions, and figure/table captions regarding bacterial storage and sewage effluent testing, with no mention of chlortetracycline pharmacodynamics or exposure-response data. |
| popPK | Zhang_2022 | relevant | 8 | 2 | The study reports population PK for chlortetracycline in ducks, but the evidence only provides AUC and qualitative descriptions of clearance, lacking specific numeric values for CL, V, or ka. |
| popPK | Zhou_2021 | irrelevant | 0 | 0 | The study focuses on the ecotoxicological effects and biodegradation of chlortetracycline in microalgae, not on pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_chlortetracycline`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
