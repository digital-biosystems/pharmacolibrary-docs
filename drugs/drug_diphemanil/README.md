<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;diphemanil&quot;}]"></div>

# diphemanil

- **generic name:** diphemanil
- **ATC codes:** `A03AB15`, `A03CA08`
- **DrugBank:** [DB13720](https://go.drugbank.com/drugs/DB13720)
- **groups:** approved, vet_approved, withdrawn

## About

**Indication.** Used in the treatment of peptic ulcer, gastric hyperacidity, and hypermotility in gastritis and pylorospasm, and in the treatment of hyperhidrosis (excessive perspiration).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 08:54 | 1:35 | 0/0/0 | 0/0/0 | 0/0/0 | 29,368/1,035 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=diphemanil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Poorly absorbed from the gastrointestinal tract with an absolute bioavailability of 15 to…”</sub> | prose |

<sub>Actors without a tissue in the table: CHRM1 (modulator), CHRM3 (target).</sub>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chéron_1994.pdf` | Chéron G et al., [Pharmacokinetics of diphemanil methyls…, Archives de pediatrie : org… (1994) | popPK | 9 | not captured | [8087216](https://pubmed.ncbi.nlm.nih.gov/8087216) | The study reports quantitative pharmacokinetic parameters (half-life, renal clearance, Tmax) for diphemanil in infants, with specific numeric values provided in the text. |
| `Vidal_1992.pdf` | Vidal AM et al., Pharmacokinetics of diphemanil methylsu…, European journal of clinica… (1992) | popPK | 8 | [10.1007/BF00265939](https://doi.org/10.1007/BF00265939) | [1623915](https://pubmed.ncbi.nlm.nih.gov/1623915) | The study reports quantitative PK parameters (tmax, half-life, urinary recovery) for diphemanil in humans, but lacks specific values for clearance (CL) or volume of distribution (V). |
| `Vidal_1993.pdf` | Vidal AM et al., Pharmacokinetics of diphemanil methylsu…, European journal of clinica… (1993) | popPK | 8 | [10.1007/BF00315356](https://doi.org/10.1007/BF00315356) | [8405036](https://pubmed.ncbi.nlm.nih.gov/8405036) | The study reports quantitative PK parameters (half-life, residence time) for diphemanil in infants, but specific values for clearance, volume, or intercompartmental clearance are not explicitly listed in the provided text. |

<sub>queue written 2026-09-18T08:54:02.102521+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Guérois_1997 | irrelevant | 0 | 0 | The paper is a clinical case report regarding adverse cardiac effects (heart block) in premature infants and does not report any pharmacokinetic parameters for diphemanil. |
| PD | Guérois_1997 | not_relevant | 1 | 0 | The paper is a case report describing a clinical observation (temporal association between feeding withdrawal and heart block) without providing any numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Pariente-Khayat_1996 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | Vidal_1993 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life, residence time) for diphemanil in infants, but specific values for clearance, volume, or intercompartmental clearance are not explicitly listed in the provided text. |
| popPK | Wilson_2018 | irrelevant | 0 | 0 | The paper describes a computational tool (PathFX) for drug safety and efficacy pathway analysis and does not report any pharmacokinetic parameters for diphemanil. |
| PD | Wilson_2018 | not_relevant | 0 | 0 | The paper describes a computational method (PathFX) for identifying drug-disease associations via protein interaction networks and does not report any pharmacokinetic or pharmacodynamic data, exposure-response relationships, or numeric PD parameters for diphemanil or any other drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_diphemanil`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
