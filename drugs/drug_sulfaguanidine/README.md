<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;sulfaguanidine&quot;}]"></div>

# sulfaguanidine

- **generic name:** sulfaguanidine
- **ATC codes:** `A07AB03`
- **DrugBank:** [DB13726](https://go.drugbank.com/drugs/DB13726)
- **groups:** experimental

## About

**Description.** Sulfaguanidine is a sulfonamide antibiotic with antimicrobial and antibacterial activities.[A275108]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 03:33 | 6:50 | 0/0/0 | 2/2/0 | 0/0/0 | 253,145/2,702 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 1/8 | 9/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Ahmad_2023_2](drugs/drug_sulfaguanidine/pd_Ahmad_2023_2_IC50.md) | Ahmad (2023) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ahmad_2023_2](drugs/drug_sulfaguanidine/pd_Ahmad_2023_2_edema_inhibition.md) | Ahmad (2023) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ahmad_2023_2](drugs/drug_sulfaguanidine/pd_Ahmad_2023_2_inhibition.md) | Ahmad (2023) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ayoup_2026](drugs/drug_sulfaguanidine/pd_Ayoup_2026_EC50.md) | Ayoup MS et al., New multitarget antidiabetic potential…, RSC advances (2026) | [10.1039/d5ra08959j](https://doi.org/10.1039/d5ra08959j) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Ayoup_2026](drugs/drug_sulfaguanidine/pd_Ayoup_2026_IC50.md) | Ayoup MS et al., New multitarget antidiabetic potential…, RSC advances (2026) | [10.1039/d5ra08959j](https://doi.org/10.1039/d5ra08959j) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ahmad_2023](drugs/drug_sulfaguanidine/pd_Ahmad_2023_IC50.md) | Ahmad (2023) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Ahmad_2023](drugs/drug_sulfaguanidine/pd_Ahmad_2023_urease.md) | Ahmad (2023) | — |
| <span class="pk-badge pk-badge--red">rejected</span> | [Alelaimat_2023](drugs/drug_sulfaguanidine/pd_Alelaimat_2023_A549_cell_viability.md) | Alelaimat MA et al., Novel Sulfonamide-Triazine Hybrid Deriv…, ACS omega (2023) | [10.1021/acsomega.3c01273](https://doi.org/10.1021/acsomega.3c01273) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Alelaimat_2023](drugs/drug_sulfaguanidine/pd_Alelaimat_2023_MCF_7_cell_viability.md) | Alelaimat MA et al., Novel Sulfonamide-Triazine Hybrid Deriv…, ACS omega (2023) | [10.1021/acsomega.3c01273](https://doi.org/10.1021/acsomega.3c01273) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Alelaimat_2023](drugs/drug_sulfaguanidine/pd_Alelaimat_2023_PI3K_inhibition.md) | Alelaimat MA et al., Novel Sulfonamide-Triazine Hybrid Deriv…, ACS omega (2023) | [10.1021/acsomega.3c01273](https://doi.org/10.1021/acsomega.3c01273) |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2026.pdf` | Wang J et al., From hapten design to in situ detection…, Food research international… (2026) | pd | 5 | [10.1016/j.foodres.2026.119176](https://doi.org/10.1016/j.foodres.2026.119176) | [42083217](https://www.ncbi.nlm.nih.gov/pubmed/42083217) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-22T03:29:22.659728+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on urease inhibition by sulfaguanidine conjugates, reporting IC50 values and enzyme kinetics, but contains no pharmacokinetic parameters (CL, V, ka, etc.) for sulfaguanidine. |
| popPK | Ahmad_2023_2 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro enzyme inhibition of naproxen-sulfaguanidine conjugates, containing no pharmacokinetic data for sulfaguanidine. |
| popPK | Alelaimat_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and biological evaluation of sulfaguanidine-triazine hybrids as anticancer agents, containing no pharmacokinetic data. |
| popPK | Allam_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on carbonic anhydrase inhibitors where sulfaguanidine is used as a chemical building block, not as a subject drug for pharmacokinetic analysis. |
| PD | Allam_2023 | not_relevant | 0 | 0 | The paper reports enzyme inhibition constants (Ki) and cellular IC50 values for novel carbonic anhydrase inhibitors, but does not report a pharmacokinetic/pharmacodynamic (PK/PD) exposure-response relationship or dose-response curve for sulfaguanidine itself. |
| popPK | Ayoup_2026 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro biological evaluation of sulfaguanidine derivatives, containing no pharmacokinetic data. |
| PD | Ayoup_2026 | not_relevant | 3 | 3 | The paper reports in vitro IC50 values for enzyme inhibition, which are static potency metrics rather than a pharmacodynamic (exposure-response) or dose-response relationship with derived PD parameters (Emax, slope, etc.) in a biological system. |
| popPK | Bartlett_2013 | irrelevant | 0 | 0 | The paper reports toxicological endpoints (LC50, EC50) for sulfaguanidine in an aquatic organism, not pharmacokinetic parameters. |
| popPK | De_2009 | irrelevant | 0 | 0 | The study focuses on the toxicity of sulfamethazine and other sulfonamides to Daphnia magna, not on the pharmacokinetics of sulfaguanidine. |
| popPK | Esam_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study using sulfaguanidine as a component of a nanocatalyst for synthesis, not a pharmacokinetic study of sulfaguanidine. |
| PD | Esam_2023 | not_relevant | 0 | 0 | The paper uses sulfaguanidine as a catalyst for synthesis and reports IC50 values for novel quinoxaline derivatives, not for sulfaguanidine itself. |
| popPK | Husseiny_2023 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel sulfaguanidine-based derivatives for CDK-9 inhibition and cytotoxicity, containing no pharmacokinetic data for the drug sulfaguanidine. |
| popPK | Mizuno_1986 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding sulfaguanidine pharmacokinetics. |
| popPK | Mohamed-Ezzat_2024 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and in-vitro biological activity (antitumor, antimicrobial, antiviral) of novel triazine sulfonamides derived from sulfaguanidine, containing no pharmacokinetic data. |
| PD | Mohamed-Ezzat_2024 | not_relevant | 2 | 2 | The paper reports single-point IC50 values for antiviral activity and MICs for antimicrobial activity, but does not provide a concentration-effect curve, dose-response relationship, or PK/PD model for sulfaguanidine itself. |
| popPK | Ragab_2021 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro antimicrobial activity of sulfaguanidine hybrids, containing no pharmacokinetic data. |
| popPK | Ulus_2016 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro carbonic anhydrase inhibition of sulfaguanidine derivatives, containing no pharmacokinetic data. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| PD | Wang_2026 | not_relevant | 0 | 0 | The paper describes the development of an immunochromatographic sensor strip for detection, not a pharmacodynamic or exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_sulfaguanidine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
