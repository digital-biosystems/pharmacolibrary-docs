<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;procarbazine&quot;}]"></div>

# procarbazine

- **generic name:** procarbazine
- **ATC codes:** `L01XB01`
- **DrugBank:** [DB01168](https://go.drugbank.com/drugs/DB01168) · **PubChem:** [CID 4915](https://pubchem.ncbi.nlm.nih.gov/compound/4915)
- **molar mass:** 221.2988 g/mol (C12H19N3O) — DrugBank
- **groups:** approved, investigational

## About

Procarbazine is an anticancer drug used to treat cancers such as Hodgkin's lymphoma, non-Hodgkin lymphoma, brain cancer, melanoma, and multiple myeloma. It is an approved medicine and is included on the WHO list of essential medicines, so it remains in clinical use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418656](https://www.wikidata.org/wiki/Q418656) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:52 | 0:40 | 0/0/0 | 0/0/0 | 0/0/0 | 8,844/707 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=procarbazine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `MAOA` inhibitor | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `MAOA` inhibitor, `XDH` substrate | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor, `XDH` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wilde_2007.pdf` | Wilde S et al., Population pharmacokinetics of the BEAC…, Clinical pharmacokinetics (2007) | popPK | 5 | [10.2165/00003088-200746040-00005](https://doi.org/10.2165/00003088-200746040-00005) | [17375983](https://pubmed.ncbi.nlm.nih.gov/17375983) | The study is a population pharmacokinetic analysis of the BEACOPP regimen in humans which includes procarbazine, but the specific numeric parameter values for procarbazine are not provided in the extracted evidence. |
| `Ezzat_2012.pdf` | Ezzat HM et al., Incidence, predictors and significance…, Leukemia & lymphoma (2012) | pgx | 7 | [10.3109/10428194.2012.697560](https://doi.org/10.3109/10428194.2012.697560) | [22642935](https://www.ncbi.nlm.nih.gov/pubmed/22642935) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Villikka_1999.pdf` | Villikka K et al., Cytochrome P450-inducing antiepileptics…, Clinical pharmacology and t… (1999) | pgx | 7 | [10.1053/cp.1999.v66.103403001](https://doi.org/10.1053/cp.1999.v66.103403001) | [10613614](https://www.ncbi.nlm.nih.gov/pubmed/10613614) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-14T20:51:45.250900+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delitheos_1995 | irrelevant | 0 | 0 | The study investigates the sensitivity of Saccharomyces cerevisiae to procarbazine using MIC and EC50 assays, which are antimicrobial/cytotoxicity tests, not pharmacokinetic studies. |
| PGx | Ewesuedo_2000 | not_relevant | 0 | 0 | The paper studies O6-benzylguanine (BG) and a drug-drug interaction with ketoconazole in rats; it does not report pharmacogenomic effects on procarbazine. |
| PGx | Ezzat_2012 | not_relevant | 0 | 0 | The study reports a drug-drug interaction between protease inhibitors and vinblastine, not a pharmacogenomic effect, and does not analyze procarbazine PK/PD. |
| PGx | Nakamura_2009 | not_relevant | 2 | 0 | The paper discusses genetic markers for glioma diagnosis and general prognosis/chemotherapy response (PCV), but does not report quantitative changes in PK or PD parameters of procarbazine associated with specific genotypes. |
| PGx | Pretsch_1993 | not_relevant | 0 | 0 | The paper describes a procarbazine-induced mutation in the Ldh-1 locus and its metabolic consequences, rather than reporting a genetic effect on the pharmacokinetics or pharmacodynamics of procarbazine itself. |
| PGx | Shiba_1982 | not_relevant | 0 | 0 | The paper describes analytical methods for procarbazine PK but does not report any pharmacogenomic associations. |
| PGx | Villikka_1999 | not_relevant | 0 | 0 | The paper investigates the effect of drug-drug interactions (CYP3A4 induction) on vincristine PK, not the effect of a gene variant/genotype on procarbazine PK or PD. |
| PGx | Wahlang_2015 | not_relevant | 4 | 2 | The text is a review chapter abstract that mentions CYP polymorphisms affect procarbazine metabolism generally, but it does not report specific quantitative pharmacokinetic or pharmacodynamic parameters linked to specific genotypes. |
| popPK | Wilde_2007 | relevant | 5 | 0 | The study is a population pharmacokinetic analysis of the BEACOPP regimen in humans which includes procarbazine, but the specific numeric parameter values for procarbazine are not provided in the extracted evidence. |
| PGx | Wilde_2007 | not_relevant | 2 | 5 | The study reports that CYP3A4 phenotype affects cyclophosphamide PK, not procarbazine, and focuses on PK parameters rather than a specific genetic variant effect on procarbazine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
