<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;lorcainide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lorcainide_Kates1983_reference&quot;,&quot;label&quot;:&quot;Kates_1983_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lorcainide/Lorcainide_Kates1983_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Lorcainide_Klotz1980_reference&quot;,&quot;label&quot;:&quot;Klotz_1980_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lorcainide/Lorcainide_Klotz1980_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# lorcainide

- **generic name:** lorcainide
- **ATC codes:** `C01BC07`
- **DrugBank:** [DB13653](https://go.drugbank.com/drugs/DB13653)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 16:27 | 2:43 | 0/0/2 | 0/1/0 | 0/0/0 | 64,771/4,802 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Kates_1983_reference](drugs/drug_lorcainide/Lorcainide_Kates1983_reference.md) | Kates RE et al., Lorcainide disposition kinetics in arrh…, Clinical pharmacology and t… (1983) | [10.1038/clpt.1983.4](https://doi.org/10.1038/clpt.1983.4) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Klotz_1980_reference](drugs/drug_lorcainide/Lorcainide_Klotz1980_reference.md) | Klotz U et al., The pharmacokinetics and tissue distrib…, Arzneimittel-Forschung (1980) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Sakuta_1993](drugs/drug_lorcainide/pd_Sakuta_1993_unknown.md) | Sakuta H et al., Antiarrhythmic drugs, clofilium and cib…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13655.x](https://doi.org/10.1111/j.1476-5381.1993.tb13655.x) |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kates_1983.pdf` | Kates RE et al., Lorcainide disposition kinetics in arrh…, Clinical pharmacology and t… (1983) | popPK | 10 | [10.1038/clpt.1983.4](https://doi.org/10.1038/clpt.1983.4) | [6848296](https://pubmed.ncbi.nlm.nih.gov/6848296) | The paper reports quantitative disposition parameters (clearance, volume of distribution, half-life) for lorcainide in humans, and all numeric values are explicitly present in the provided text. |
| `Klotz_1979.pdf` | Klotz U et al., Disposition and antiarrhythmic effect o…, International journal of cl… (1979) | popPK | 10 | not captured | [376458](https://pubmed.ncbi.nlm.nih.gov/376458) | The text explicitly reports quantitative pharmacokinetic parameters for lorcainide, including half-lives (alpha and beta) and total plasma clearance values. |
| `Klotz_1980.pdf` | Klotz U et al., The pharmacokinetics and tissue distrib…, Arzneimittel-Forschung (1980) | popPK | 10 | not captured | [7190402](https://pubmed.ncbi.nlm.nih.gov/7190402) | The study reports quantitative pharmacokinetic parameters (half-lives, clearance) for lorcainide in rats, and the numeric values are explicitly present in the text. |

<sub>queue written 2026-09-20T16:25:21.871647+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Li_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lorcainide's effect on Kv channels, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Sakuta_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment in Xenopus oocytes measuring IC50 values for K+ channel blockade, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_lorcainide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
