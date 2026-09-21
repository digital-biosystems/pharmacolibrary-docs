<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;metaraminol&quot;}]"></div>

# metaraminol

- **generic name:** metaraminol
- **ATC codes:** `C01CA09`
- **DrugBank:** [DB00610](https://go.drugbank.com/drugs/DB00610)
- **groups:** approved

## About

**Description.** An adrenergic agonist that acts predominantly at alpha adrenergic receptors and also stimulates the release of norepinephrine. It has been used primarily as a vasoconstrictor in the treatment of hypotension.

**Indication.** For the treatment and prevention of hypotension due to hemorrhage, spinal anesthesia, and shock associated with brain damage

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 19:18 | 2:49 | 0/0/0 | 0/0/1 | 0/0/0 | 84,245/1,424 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Xiao_2021](drugs/drug_metaraminol/pd_Xiao_2021_unknown.md) | Xiao F et al., A Randomized Double-Blinded Dose-depend…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.608198](https://doi.org/10.3389/fphar.2021.608198) |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morris_2007.pdf` | Morris RW et al., "Orpheus" cardiopulmonary bypass simula…, The journal of extra-corpor… (2007) | pd | 5 | not captured | [18293807](https://www.ncbi.nlm.nih.gov/pubmed/18293807) | metadata signals extractable PD data (effectcompartment) |
| `Ungell_1989.pdf` | Ungell AL et al., Chloride-dependence of the potency of i…, Naunyn-Schmiedeberg's archi… (1989) | pd | 5 | [10.1007/BF00165128](https://doi.org/10.1007/BF00165128) | [2725700](https://www.ncbi.nlm.nih.gov/pubmed/2725700) | metadata signals extractable PD data (IC50) |
| `Ungell_1987.pdf` | Ungell AL et al., Failure of K+ to affect the potency of…, Naunyn-Schmiedeberg's archi… (1987) | pd | 4 | [10.1007/BF00172792](https://doi.org/10.1007/BF00172792) | [3587371](https://www.ncbi.nlm.nih.gov/pubmed/3587371) | metadata signals extractable PD data (IC50) |
| `Waldmeier_1977.pdf` | Waldmeier PC et al., Metaraminol uptake by human thrombocyte…, Experientia (1977) | pd | 4 | [10.1007/BF01920177](https://doi.org/10.1007/BF01920177) | [908413](https://www.ncbi.nlm.nih.gov/pubmed/908413) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-20T19:16:31.142638+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Babich_1987 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional analysis, not a pharmacokinetic study, and reports no disposition parameters for metaraminol. |
| popPK | Liu_2022 | irrelevant | 0 | 0 | no_text gate: only 211 chars of text extracted (&lt; 400) |
| popPK | Morris_2007 | irrelevant | 0 | 0 | no_text gate: only 50 chars of text extracted (&lt; 400) |
| PD | Morris_2007 | not_relevant | 0 | 0 | The text describes a cardiopulmonary bypass simulation system and does not contain any pharmacodynamic or exposure-response data for metaraminol. |
| popPK | Mu_2020 | irrelevant | 0 | 0 | The study investigates the PET tracer [11C]mHED (meta-hydroxyephedrine), not metaraminol, which is only mentioned as a chemical precursor for radiolabeling. |
| popPK | Tong_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular reactivity, not a pharmacokinetic study, and reports no disposition parameters for metaraminol. |
| popPK | Ungell_1987 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Ungell_1987 | not_relevant | 0 | 0 | The paper investigates the effect of potassium on noradrenaline carrier inhibitors in rat vas deferens and does not mention metaraminol or report any pharmacodynamic parameters for it. |
| popPK | Ungell_1989 | irrelevant | 0 | 0 | no_text gate: only 110 chars of text extracted (&lt; 400) |
| PD | Ungell_1989 | not_relevant | 0 | 0 | The paper investigates the chloride-dependence of neuronal noradrenaline carrier inhibitors in rat vas deferens and does not report pharmacodynamic or exposure-response data for metaraminol. |
| popPK | Waldmeier_1977 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PD | Waldmeier_1977 | not_relevant | 0 | 0 | The paper investigates the mechanism of metaraminol uptake by thrombocytes (transport kinetics) rather than a pharmacodynamic exposure-response or dose-response relationship for a therapeutic effect. |
| popPK | Xiao_2021 | irrelevant | 0 | 0 | The study is a dose-response clinical trial determining ED50/ED90 for hemodynamic effects, not a pharmacokinetic study reporting clearance, volume, or compartmental parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_metaraminol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
