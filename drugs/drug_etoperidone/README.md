<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;etoperidone&quot;}]"></div>

# etoperidone

- **generic name:** etoperidone
- **ATC codes:** `N06AB09`
- **DrugBank:** [DB09194](https://go.drugbank.com/drugs/DB09194) · **PubChem:** [CID 40589](https://pubchem.ncbi.nlm.nih.gov/compound/40589)
- **molar mass:** 377.92 g/mol (C19H28ClN5O) — DrugBank
- **groups:** approved, withdrawn

## About

Etoperidone is an atypical antidepressant, specifically a serotonin antagonist and reuptake inhibitor, indicated for treating depressive conditions. It is administered orally, typically as capsules or tablets. Etoperidone is no longer marketed or was never commercially available.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q5404839](https://www.wikidata.org/wiki/Q5404839), [Wikipedia](https://en.wikipedia.org/wiki/Etoperidone?oldid=1328703585) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Girgin_2023_IC50](drugs/drug_etoperidone/pd_Girgin_2023_IC50.md) | cell viability (SH-SY5Y, MTT/RTCA) ← etoperidone · inhibition effect | — | Girgin M et al., Proposing novel natural compounds again…, PloS one (2023) | [10.1371/journal.pone.0284994](https://doi.org/10.1371/journal.pone.0284994) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 21:03 | 0:04 | 0/0/0 | 1/0/0 | 0/0/0 | 4,285/179 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Malomvölgyi_1991.pdf` | Malomvölgyi B et al., Comparison of serotonin agonistic and a…, Acta physiologica Hungarica (1991) | pd | 4 |  | [1814162](https://www.ncbi.nlm.nih.gov/pubmed/1814162) | metadata signals extractable PD data (EC50) |
| `Costa_2025.pdf` | Costa Alegre MD et al., Metabolism of m-CPP, trazodone, nefazod…, Drug metabolism reviews (2025) | pgx | 7 | [10.1080/03602532.2025.2465482](https://doi.org/10.1080/03602532.2025.2465482) | [39945551](https://www.ncbi.nlm.nih.gov/pubmed/39945551) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-23 21:03 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Caldwell_2001 | not_relevant | 0 | 0 | The paper describes standard pharmacokinetics and metabolism in a small group of healthy men without analyzing any genetic variants or pharmacogenomic effects. |
| popPK | Costa_2025 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Costa_2025 | not_relevant | 0 | 0 | The paper focuses on the metabolism and forensic aspects of etoperidone, not on pharmacodynamic or exposure-response relationships. |
| PGx | Costa_2025 | not_relevant | 0 | 0 | The paper focuses on forensic and clinical aspects of metabolism (identification of metabolites) rather than reporting pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| popPK | Girgin_2023 | irrelevant | 0 | 0 | The paper is an in silico and in vitro study on acetylcholinesterase inhibition and does not report any pharmacokinetic parameters for etoperidone. |
| popPK | Malomvölgyi_1991 | irrelevant | 0 | 0 | no_text gate: only 163 chars of text extracted (&lt; 400) |
| PD | Malomvölgyi_1991 | not_relevant | 0 | 0 | The paper studies Trelibet (EGYT-475) and its metabolite, not etoperidone. |
| PGx | Malomvölgyi_1991 | not_relevant | 0 | 0 | The paper discusses the serotonin activities of EGYT-475 and its metabolite, not the pharmacogenomics of etoperidone. |
| popPK | Wen_2008 | irrelevant | 0 | 0 | The study focuses on the mechanism of bioactivation and glutathione conjugation of trazodone and m-CPP in vitro, not the pharmacokinetic disposition parameters (CL, V, etc.) of etoperidone. |
| PGx | Wen_2008 | not_relevant | 0 | 0 | The paper investigates the metabolism of trazodone and m-CPP via CYP2D6, mentioning etoperidone only as another drug with m-CPP as a metabolite, without reporting any pharmacogenomic effects on its PK/PD parameters. |
| popPK | Yan_2002 | irrelevant | 1 | 1 | The study is an in vitro mechanistic investigation of metabolic enzymes and pathways, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Yan_2002 | not_relevant | 2 | 5 | The paper identifies CYP3A4 as the metabolic enzyme for etoperidone but does not report genotype-specific pharmacokinetic or pharmacodynamic changes (e.g., no CYP3A5*3 or CYP3A4 variant impact on AUC/Cmax). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Betoperidone%5D&body=Drug%3A%20etoperidone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_etoperidone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
