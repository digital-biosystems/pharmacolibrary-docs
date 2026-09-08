# propacetamol

- **generic name:** propacetamol
- **ATC codes:** `N02BE05`
- **DrugBank:** [DB09288](https://go.drugbank.com/drugs/DB09288)
- **groups:** investigational

## About

**Description.** Propacetamol is a non-opioid analgesic devoid of the major contraindications.[A32051] It is a derivative of [acetaminophen], or paracetamol, with the molecular formula glycine, N, N-diethyl-,4-(acetylamino)phenyl ester. Propacetamol is a parenteral formulation of paracetamol and thus, it is a prodrug that is completely hydrolyzed to paracetamol.[A7892] It is not available in the United States but this prodrug has been widely used in other countries such as France since 1985.[L1505]

**Indication.** Propacetamol is a paracetamol prodrug of intravenous administration used to control fever and pain of perioperative period in multimodal analgesia therapy.[L1511]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-29 15:21 | 6:21 | 0/4/0 | 0/0/0 | 0/0/0 | 44,162/7,563 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Allegaert_2004](drugs/drug_propacetamol/Propacetamol_Allegaert2004_reference.md) | Allegaert K et al., Intravenous paracetamol (propacetamol)…, European journal of clinica… (2004) | [10.1007/s00228-004-0756-x](https://doi.org/10.1007/s00228-004-0756-x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Anderson_2005](drugs/drug_propacetamol/Propacetamol_Anderson2005_reference.md) | Anderson BJ et al., Pediatric intravenous paracetamol (prop…, Paediatric anaesthesia (2005) | [10.1111/j.1460-9592.2005.01455.x](https://doi.org/10.1111/j.1460-9592.2005.01455.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Krekels_2015](drugs/drug_propacetamol/Propacetamol_Krekels2015_reference.md) | Krekels EH et al., Developmental changes rather than repea…, European journal of clinica… (2015) | [10.1007/s00228-015-1887-y](https://doi.org/10.1007/s00228-015-1887-y) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Prins_2008](drugs/drug_propacetamol/Propacetamol_Prins2008_reference.md) | Prins SA et al., Pharmacokinetics and analgesic effects…, Paediatric anaesthesia (2008) | [10.1111/j.1460-9592.2008.02619.x](https://doi.org/10.1111/j.1460-9592.2008.02619.x) |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Allegaert_2004.pdf` | Allegaert K et al., Intravenous paracetamol (propacetamol)…, European journal of clinica… (2004) | popPK | 10 | [10.1007/s00228-004-0756-x](https://doi.org/10.1007/s00228-004-0756-x) | [15071761](https://pubmed.ncbi.nlm.nih.gov/15071761) | The study reports quantitative population pharmacokinetic parameters (Vd, CL) for propacetamol in neonates with specific numeric values provided in the text. |
| `Anderson_2005.pdf` | Anderson BJ et al., Pediatric intravenous paracetamol (prop…, Paediatric anaesthesia (2005) | popPK | 10 | [10.1111/j.1460-9592.2005.01455.x](https://doi.org/10.1111/j.1460-9592.2005.01455.x) | [15787918](https://pubmed.ncbi.nlm.nih.gov/15787918) | The paper is a population pharmacokinetic study of propacetamol (via paracetamol profiles) and explicitly reports numeric values for clearance, volumes, intercompartmental clearance, and absorption rate constant in the text. |
| `Prins_2008.pdf` | Prins SA et al., Pharmacokinetics and analgesic effects…, Paediatric anaesthesia (2008) | popPK | 10 | [10.1111/j.1460-9592.2008.02619.x](https://doi.org/10.1111/j.1460-9592.2008.02619.x) | [18482233](https://pubmed.ncbi.nlm.nih.gov/18482233) | The paper reports a population pharmacokinetic analysis for propacetamol (via its metabolite paracetamol) with explicit numeric values for clearance, volumes, and half-lives in the text. |
| `Hahn_2003.pdf` | Hahn TW et al., Analgesic effect of i.v. paracetamol: p…, Acta anaesthesiologica Scan… (2003) | popPK | 8 | [10.1034/j.1399-6576.2003.00046.x](https://doi.org/10.1034/j.1399-6576.2003.00046.x) | [12631041](https://pubmed.ncbi.nlm.nih.gov/12631041) | The study fits a pharmacokinetic model for paracetamol (the active metabolite of propacetamol) and reports initial concentrations, but specific quantitative disposition parameters (CL, V, ka) are not explicitly listed in the provided text. |
| `Cai_2025.pdf` | Cai X et al., Genetic and clinical factors associated…, Progress in neuro-psychopha… (2025) | pgx | 5 | [10.1016/j.pnpbp.2025.111468](https://doi.org/10.1016/j.pnpbp.2025.111468) | [40812711](https://www.ncbi.nlm.nih.gov/pubmed/40812711) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-08-29T15:17:34.747031+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Anderson_2005 | not_relevant | 3 | 2 | The paper is a population PK analysis that mentions a specific concentration (10 mg/L) associated with a pain score (2.6/10) in the conclusion, but it does not report a fitted PD model, Emax/EC50 parameters, or a derived concentration-effect curve. |
| PGx | Anderson_2006 | not_relevant | 0 | 0 | The text is a general review of paediatric analgesics that mentions pharmacogenomics and propacetamol only in passing, without reporting specific gene-variant effects on PK or PD parameters. |
| popPK | Barsch_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of propacetamol's metabolite on glycine transporters and receptors, reporting no pharmacokinetic disposition parameters. |
| PD | Barsch_2021 | not_relevant | 0 | 0 | The study investigates the molecular mechanism of propacetamol's metabolite (DEG) on glycine transporters and receptors in Xenopus oocytes, not the pharmacodynamic exposure-response relationship of propacetamol itself in a clinical or physiological context. |
| PGx | Cai_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of valproic acid, not propacetamol. |
| popPK | Hahn_2003 | relevant | 8 | 2 | The study fits a pharmacokinetic model for paracetamol (the active metabolite of propacetamol) and reports initial concentrations, but specific quantitative disposition parameters (CL, V, ka) are not explicitly listed in the provided text. |
| popPK | Palmer_2008 | irrelevant | 2 | 0 | The study reports pharmacokinetic parameters for acetaminophen (the active metabolite), not propacetamol, despite mentioning propacetamol in the background and conclusions. |
| PGx | Tsai_2018 | not_relevant | 0 | 0 | The study investigates the protective effects of kaempferol on propacetamol-induced liver injury in mice, focusing on mechanisms like CYP2E1 and UGT1A1 modulation, but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_propacetamol`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
