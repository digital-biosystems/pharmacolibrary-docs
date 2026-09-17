<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;betamethasone&quot;}]"></div>

# betamethasone

- **generic name:** betamethasone
- **ATC codes:** `A07EA04`, `C05AA05`, `D07AC01`, `D07BC01`, `D07CC01`, `D07XC01`, `H02AB01`, `R01AD06`, `R03BA04`, `S01BA06`, `S01BB04`, `S01CA05`, `S01CB04`, `S02BA07`, `S03BA03`, `S03CA06`
- **DrugBank:** [DB00443](https://go.drugbank.com/drugs/DB00443)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Betamethasone is a long-acting corticosteroid with immunosuppressive and antiinflammatory properties.[A192444] It can be used topically to manage inflammatory skin conditions such as eczema, and parenterally to manage several disease states including autoimmune disorders.[A192444] Betamethasone has potent glucocorticoid activity and negligible mineralocorticoid activity.[A192444]

**Indication.** As a member of the corticosteroid family, betamethasone is indicated for the treatment of several inflammatory conditions. As topical monotherapy, betamethasone is indicated to relieve pruritic and inflammatory symptoms of corticosteroid-responsive-dermatoses.[L11991,L10782,L11997] Betamethasone can be used topically in combination with a vitamin D analog such as calcipotriene to treat plaque psoriasis.[L12000] The corticosteroid is also available as an injectable suspension and can be used to manage a range of inflammatory conditions including endocrine disorders, gastrointestinal disorders, and rheumatic disorders among other conditions.[L11994]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 21:52 | 6:00 | 1/0/0 | 0/0/0 | 0/0/0 | 47,390/15,669 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Krzyzanski_2021_2](drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference.md) | Krzyzanski (2021) | — |

## Coverage

- **PubMed hits:** 28 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Foissac_2020.pdf` | Foissac F et al., Maternal Betamethasone for Prevention o…, Clinical pharmacology and t… (2020) | popPK | 10 | [10.1002/cpt.1887](https://doi.org/10.1002/cpt.1887) | [32394434](https://pubmed.ncbi.nlm.nih.gov/32394434) | The paper is a population PK study for betamethasone, but specific numeric parameter values (CL, V) are not listed in the provided text, only qualitative descriptions and a transplacental transfer ratio. |
| `Schoenmakers_2025.pdf` | Schoenmakers S et al., Pharmacokinetics of betamethasone in pr…, British journal of clinical… (2025) | popPK | 10 | [10.1002/bcp.70035](https://doi.org/10.1002/bcp.70035) | [40083164](https://pubmed.ncbi.nlm.nih.gov/40083164) | The study reports a population PK model for betamethasone with specific numeric clearance values (9.35 vs 15.78 L/h) and exposure metrics present in the text. |
| `Zhang_2025.pdf` | Zhang C et al., Across-Species Meta-Analysis of Betamet…, Biopharmaceutics & drug dis… (2025) | popPK | 10 | [10.1002/bdd.70017](https://doi.org/10.1002/bdd.70017) | [41250930](https://pubmed.ncbi.nlm.nih.gov/41250930) | The paper is a highly relevant PK study for betamethasone, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only model descriptions and a partition coefficient. |
| `unknown_2025.pdf` | unknown, Population pharmacokinetics and pharmac…, BMJ open (2025) | popPK | 10 | [10.1136/bmjopen-2024-096523](https://doi.org/10.1136/bmjopen-2024-096523) | [40484425](https://pubmed.ncbi.nlm.nih.gov/40484425) | The paper is a protocol for a population PK study of betamethasone, but it contains no quantitative parameter values as the study has not yet been conducted. |
| `Loo_1981.pdf` | Loo JC et al., Pharmacokinetic evaluation of betametha…, Biopharmaceutics & drug dis… (1981) | popPK | 9 | [10.1002/bdd.2510020307](https://doi.org/10.1002/bdd.2510020307) | [7295883](https://pubmed.ncbi.nlm.nih.gov/7295883) | The paper describes a human PK study of betamethasone using a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence text. |
| `Samtani_2005.pdf` | Samtani MN et al., Betamethasone pharmacokinetics after tw…, Drug metabolism and disposi… (2005) | popPK | 9 | [10.1124/dmd.105.004309](https://doi.org/10.1124/dmd.105.004309) | [15860658](https://pubmed.ncbi.nlm.nih.gov/15860658) | The study is a relevant animal PK study for betamethasone, but only half-lives are provided in the text while specific clearance and volume parameters are not explicitly listed in the evidence. |
| `Sullivan_2026.pdf` | Sullivan J et al., Pharmacokinetics and Anti-Inflammatory…, Journal of veterinary pharm… (2026) | popPK | 9 | [10.1111/jvp.70052](https://doi.org/10.1111/jvp.70052) | [41653445](https://pubmed.ncbi.nlm.nih.gov/41653445) | The study reports population PK parameters for betamethasone in horses, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text, only Cmax, Tmax, and half-life. |

<sub>queue written 2026-09-11T21:47:00.303705+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Foissac_2020 | relevant | 10 | 2 | The paper is a population PK study for betamethasone, but specific numeric parameter values (CL, V) are not listed in the provided text, only qualitative descriptions and a transplacental transfer ratio. |
| popPK | Loo_1981 | relevant | 9 | 0 | The paper describes a human PK study of betamethasone using a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence text. |
| popPK | Samtani_2005 | relevant | 9 | 2 | The study is a relevant animal PK study for betamethasone, but only half-lives are provided in the text while specific clearance and volume parameters are not explicitly listed in the evidence. |
| popPK | Zhang_2025 | relevant | 10 | 2 | The paper is a highly relevant PK study for betamethasone, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, only model descriptions and a partition coefficient. |
| popPK | unknown_2025 | relevant | 10 | 0 | The paper is a protocol for a population PK study of betamethasone, but it contains no quantitative parameter values as the study has not yet been conducted. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_betamethasone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
