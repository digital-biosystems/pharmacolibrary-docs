<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N04B&quot;,&quot;href&quot;:&quot;atc/N04B.md&quot;},{&quot;label&quot;:&quot;Dihydroergocryptine&quot;}]"></div>

# Dihydroergocryptine

- **generic name:** Dihydroergocryptine
- **ATC codes:** `N04BC03`
- **DrugBank:** [DB13385](https://go.drugbank.com/drugs/DB13385) · **PubChem:** not captured
- **groups:** investigational

## About

Dihydroergocryptine is a dopamine agonist that has been used to treat Parkinson's disease. It is currently considered investigational and is not an approved medicine in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 12:59 | 3:41 | 0/0/0 | 0/1/0 | 0/0/0 | 104,391/1,571 | ollama / glm-5.3-flash | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Costa_1993_3H_DHE_specific_binding](drugs/drug_dihydroergocryptine/pd_Costa_1993_3H_DHE_specific_binding.md) | Tritiated-dihydroergocryptine (3H-DHE) specific binding to adrenergic receptors on isolated smooth muscle cells ← dihydroergocryptine (3H-DHE) · model not identified | — | Costa P et al., Adrenergic receptors on smooth muscle c…, The Journal of urology (1993) | [10.1016/s0022-5347(17)35633-1](https://doi.org/10.1016/s0022-5347(17)35633-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dihydroergocryptine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR2B (target), HTR7 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 24 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Etchegoyen_1986.pdf` | Etchegoyen GS et al., Binding and effects of catecholestrogen…, European journal of pharmac… (1986) | pd | 4 | [10.1016/0014-2999(86)90329-8](https://doi.org/10.1016/0014-2999(86)90329-8) | [3021471](https://www.ncbi.nlm.nih.gov/pubmed/3021471) | metadata signals extractable PD data (EC50) |
| `Peters_1983.pdf` | Peters JR et al., Alpha 1-adrenoreceptors on intact rat a…, Endocrinology (1983) | pd | 4 | [10.1210/endo-113-1-133](https://doi.org/10.1210/endo-113-1-133) | [6305631](https://www.ncbi.nlm.nih.gov/pubmed/6305631) | metadata signals extractable PD data (IC50) |
| `Williams_1981.pdf` | Williams RS et al., Subtype specificity of alpha-adrenergic…, Journal of cardiovascular p… (1981) | pd | 4 | [10.1097/00005344-198105000-00011](https://doi.org/10.1097/00005344-198105000-00011) | [6168833](https://www.ncbi.nlm.nih.gov/pubmed/6168833) | metadata signals extractable PD data (EC50) |
| `de_2001.pdf` | de Mey C et al., Erythromycin increases plasma concentra…, Clinical pharmacology and t… (2001) | pgx | 7 | [10.1067/mcp.2001.117286](https://doi.org/10.1067/mcp.2001.117286) | [11503008](https://www.ncbi.nlm.nih.gov/pubmed/11503008) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T12:58:58.960799+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Althaus_2000 | not_relevant | 3 | 4 | Identifies CYP3A4 as the metabolizing enzyme in vitro; no gene variant/genotype effect on a PK/PD parameter of DHEC is reported. |
| popPK | Anderson_1988 | irrelevant | 0 | 0 | Dihydroergocryptine is used only as a radiolabeled ligand for receptor binding assays, not as a drug with pharmacokinetic parameters. |
| popPK | Costa_1993 | irrelevant | 0 | 0 | Dihydroergocryptine is used only as a radiolabeled binding ligand in an in vitro receptor study, with no PK parameters. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | This is an EFSA risk assessment of ergot alkaloids (including ergocryptine as a feed contaminant), not a PK study of the drug dihydroergocryptine, and no disposition parameter values are present. |
| popPK | Etchegoyen_1986 | irrelevant | 0 | 0 | Dihydroergocryptine is only used as a radiolabeled binding ligand ([3H]DHE) for alpha-adrenoceptor assays; no PK parameters for the drug are reported. |
| popPK | Mohell_1983 | irrelevant | 0 | 0 | In vitro receptor binding study where dihydroergocryptine is only a displacing ligand; no PK parameters. |
| popPK | Motulsky_1982 | irrelevant | 0 | 0 | This is a receptor-binding study using radiolabeled DHE as a ligand, not a pharmacokinetic study with disposition parameters. |
| popPK | Sutherland_2023 | irrelevant | 0 | 0 | This is an in vitro secondary pharmacology/ADR association study; dihydroergocryptine is not the subject drug and no PK disposition parameters for it appear in the evidence. |
| popPK | Williams_1981 | irrelevant | 0 | 0 | Dihydroergocryptine is used only as a radioligand binding probe in vitro, with no PK disposition parameters. |
| PGx | de_2001 | not_relevant | 0 | 0 | Reports a drug-drug interaction (erythromycin) effect on dihydroergocryptine PK, not a pharmacogenomic effect. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
