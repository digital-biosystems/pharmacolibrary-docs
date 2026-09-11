# amphotericin B

- **generic name:** amphotericin B
- **ATC codes:** `A01AB04`, `A07AA07`, `G01AA03`, `J02AA01`
- **DrugBank:** [DB00681](https://go.drugbank.com/drugs/DB00681)
- **groups:** approved, investigational

## About

**Description.** Amphotericin B shows a high order of in vitro activity against many species of fungi. Histoplasma capsulatum, Coccidioides immitis, Candida species, Blastomyces dermatitidis, Rhodotorula, Cryptococcus neoformans, Sporothrix schenckii, Mucor mucedo, and Aspergillus fumigatus are all inhibited by concentrations of amphotericin B ranging from 0.03 to 1.0 mcg/mL in vitro. While Candida albicans is generally quite susceptible to amphotericin B, non-albicans species may be less susceptible. Pseudallescheria boydii and Fusarium sp. are often resistant to amphotericin B. The antibiotic is without effect on bacteria, rickettsiae, and viruses.

**Indication.** Used to treat potentially life threatening fungal infections.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 04:29 | 2:45 | 1/2/0 | 0/0/0 | 0/0/0 | 29,621/5,372 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not modelled</span> | [Atkinson_1978](drugs/drug_amphotericin_b/AmphotericinB_Atkinson1978_reference.md) | Atkinson AJ et al., Amphotericin B pharmacokinetics in huma…, Antimicrobial agents and ch… (1978) | [10.1128/AAC.13.2.271](https://doi.org/10.1128/AAC.13.2.271) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Stott_2018](drugs/drug_amphotericin_b/AmphotericinB_Stott2018_reference.md) | Stott KE et al., Population Pharmacokinetic Model and Me…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.02526-17](https://doi.org/10.1128/AAC.02526-17) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Stott_2022](drugs/drug_amphotericin_b/AmphotericinB_Stott2022_reference.md) | Stott KE et al., Population pharmacokinetics of liposoma…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac389](https://doi.org/10.1093/jac/dkac389) |

## Coverage

- **PubMed hits:** 151 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lestner_2016.pdf` | Lestner JM et al., Population Pharmacokinetics of Liposoma…, Antimicrobial agents and ch… (2016) | popPK | 10 | [10.1128/AAC.01427-16](https://doi.org/10.1128/AAC.01427-16) | [27697762](https://pubmed.ncbi.nlm.nih.gov/27697762) | The paper describes a population PK study for liposomal amphotericin B in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains the abstract. |
| `Stott_2018.pdf` | Stott KE et al., Population Pharmacokinetic Model and Me…, Antimicrobial agents and ch… (2018) | popPK | 10 | [10.1128/AAC.02526-17](https://doi.org/10.1128/AAC.02526-17) | [29735567](https://pubmed.ncbi.nlm.nih.gov/29735567) | The paper reports a population PK model for amphotericin B deoxycholate with explicit numeric values for clearance, volume, and intercompartmental rate constants in the text. |
| `Stott_2022.pdf` | Stott KE et al., Population pharmacokinetics of liposoma…, The Journal of antimicrobia… (2022) | popPK | 10 | [10.1093/jac/dkac389](https://doi.org/10.1093/jac/dkac389) | [36411251](https://pubmed.ncbi.nlm.nih.gov/36411251) | The paper reports a population PK model for liposomal amphotericin B with explicit numeric values for clearance, volume of distribution, and intercompartmental clearances. |
| `Han_2026.pdf` | Han S et al., Pharmacokinetic Equivalence of Amphosom, Clinical therapeutics (2026) | popPK | 9 | [10.1016/j.clinthera.2025.12.009](https://doi.org/10.1016/j.clinthera.2025.12.009) | [41513548](https://pubmed.ncbi.nlm.nih.gov/41513548) | The study is a population PK/bioequivalence trial for amphotericin B, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract text. |
| `Smith_2024.pdf` | Smith JS et al., Pharmacokinetics of intraarticular lipo…, Journal of veterinary pharm… (2024) | popPK | 9 | [10.1111/jvp.13442](https://doi.org/10.1111/jvp.13442) | [38557931](https://pubmed.ncbi.nlm.nih.gov/38557931) | The study reports quantitative non-compartmental PK parameters (Cmax, tmax, t1/2, MRT, Vd, AUC) for amphotericin B in goats, with all numeric values explicitly present in the text. |

<sub>queue written 2026-09-10T04:27:18.238451+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dallalzadeh_2024 | irrelevant | 0 | 0 | The study is a clinical outcome analysis of a treatment regimen and does not report any pharmacokinetic parameters for amphotericin B. |
| popPK | Han_2026 | relevant | 9 | 2 | The study is a population PK/bioequivalence trial for amphotericin B, but the specific numeric parameter values (CL, V, Q, etc.) are not present in the provided abstract text. |
| popPK | Heidari-Kharaji_2024 | irrelevant | 0 | 0 | The study focuses on the in-vitro efficacy and in-vivo therapeutic outcomes of amphotericin B nanoparticles, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Leroux_2021 | irrelevant | 2 | 0 | The paper is a review of population PK studies and does not report original quantitative disposition parameters for amphotericin B. |
| popPK | Lestner_2016 | relevant | 10 | 0 | The paper describes a population PK study for liposomal amphotericin B in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains the abstract. |
| popPK | Scott_2020 | irrelevant | 2 | 0 | The paper is a review article summarizing existing data rather than reporting original quantitative pharmacokinetic parameters for amphotericin B. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_amphotericin_b`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
