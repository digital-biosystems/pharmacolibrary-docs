<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;barnidipine&quot;}]"></div>

# barnidipine

- **generic name:** barnidipine
- **ATC codes:** `C08CA12`
- **DrugBank:** [DB09227](https://go.drugbank.com/drugs/DB09227) · **PubChem:** [CID 443869](https://pubchem.ncbi.nlm.nih.gov/compound/443869)
- **molar mass:** 491.544 g/mol (C27H29N3O6) — DrugBank
- **groups:** investigational

## About

Barnidipine is a dihydropyridine calcium channel blocker, a drug class mainly affecting blood vessels that is typically used to treat high blood pressure. It is considered investigational and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q925327](https://www.wikidata.org/wiki/Q925327) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:14 | 0:33 | 0/0/0 | 0/0/0 | 0/0/0 | 21,565/553 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 3/0 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=barnidipine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1C (target), CACNA1G (inhibitor), CACNA1G (target), CACNA1H (inhibitor), CACNA1H (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Katoh_2000.pdf` | Katoh M et al., Inhibitory potencies of 1,4-dihydropyri…, Pharmaceutical research (2000) | pd | 4 | [10.1023/a:1007568811691](https://doi.org/10.1023/a:1007568811691) | [11145223](https://www.ncbi.nlm.nih.gov/pubmed/11145223) | metadata signals extractable PD data (IC50) |
| `Teramura_1997.pdf` | Teramura T et al., Examination of metabolic pathways and i…, Xenobiotica; the fate of fo… (1997) | pd | 4 | [10.1080/004982597240064](https://doi.org/10.1080/004982597240064) | [9381730](https://www.ncbi.nlm.nih.gov/pubmed/9381730) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T02:14:21.389651+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Harmsze_2010 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between calcium channel blockers (including barnidipine) and clopidogrel, not a pharmacogenomic effect of a gene variant on barnidipine's PK or PD. |
| popPK | Hart_1997 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure and adverse events, with no pharmacokinetic parameters or disposition data for barnidipine. |
| PD | Hart_1997 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response trend and responder rates for 10-30 mg doses, but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Ikemura_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2J2 inhibition and does not report pharmacokinetic disposition parameters for barnidipine. |
| popPK | Katoh_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein inhibition and does not report pharmacokinetic disposition parameters for barnidipine. |
| PGx | Katoh_2000 | not_relevant | 0 | 0 | The paper reports in vitro inhibitory potencies of barnidipine on P-gp transport but does not investigate the effect of any gene variant or genotype on these parameters. |
| PGx | Katoh_2000_2 | not_relevant | 0 | 0 | The paper investigates in vitro CYP inhibition by barnidipine to predict drug-drug interactions, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Nakayama_1989 | irrelevant | 0 | 0 | The study focuses on the pharmacological actions of mepirodipine (YM-09730-5) in pig coronary arteries and does not involve barnidipine or report pharmacokinetic parameters. |
| popPK | Shimada_1996 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (effect compartment, EC50, binding affinity) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, ka) for barnidipine. |
| PD | Shimada_1996 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any pharmacodynamic data for barnidipine. |
| popPK | Teramura_1997 | irrelevant | 0 | 0 | no_text gate: only 165 chars of text extracted (&lt; 400) |
| PD | Teramura_1997 | not_relevant | 0 | 0 | The paper focuses on metabolic pathways and CYP450 isozyme identification, containing no pharmacodynamic or exposure-response analysis. |
| popPK | Wegener_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of calcium channel block in rat cardiomyocytes and does not report pharmacokinetic disposition parameters. |
| popPK | Wegener_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pharmacodynamic effects (vascular smooth muscle relaxation and calcium channel currents) and does not report any pharmacokinetic parameters. |
| popPK | Yamada_1992 | irrelevant | 0 | 0 | The study investigates mepirodipine, not barnidipine, and focuses on receptor occupancy rather than pharmacokinetic parameters. |
| popPK | Yao_2000 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding barnidipine pharmacokinetics. |
| PD | Yao_2000 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, pharmacokinetic data, or pharmacodynamic analysis for barnidipine. |
| popPK | van_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assessment of vasodilator potency and time course in isolated rat arteries, not a pharmacokinetic study reporting disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
