<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01F&quot;,&quot;href&quot;:&quot;atc/J01F.md&quot;},{&quot;label&quot;:&quot;flurithromycin&quot;}]"></div>

# flurithromycin

- **generic name:** flurithromycin
- **ATC codes:** `J01FA14`
- **DrugBank:** [DB13338](https://go.drugbank.com/drugs/DB13338) · **PubChem:** not captured
- **molar mass:** 751.927 g/mol (C37H66FNO13) — DrugBank
- **groups:** experimental

## About

Flurithromycin is a macrolide antibiotic developed for the treatment of bacterial infections. It never progressed beyond experimental status and is not an approved medicine anywhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5462893](https://www.wikidata.org/wiki/Q5462893) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:05 | 1:47 | 0/1/0 | 0/0/0 | 0/0/0 | 89,913/4,630 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Benoni_1988_reference](drugs/drug_flurithromycin/Flurithromycin_Benoni1988_reference.md) | — | 1-compartment (no model) | 0 | Benoni G et al., Pharmacokinetics and human tissue penet…, Antimicrobial agents and ch… (1988) | [10.1128/AAC.32.12.1875](https://doi.org/10.1128/AAC.32.12.1875) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=flurithromycin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Benoni_1988.pdf` | Benoni G et al., Pharmacokinetics and human tissue penet…, Antimicrobial agents and ch… (1988) | popPK | 5 | [10.1128/AAC.32.12.1875](https://doi.org/10.1128/AAC.32.12.1875) | [3245699](https://pubmed.ncbi.nlm.nih.gov/3245699) | Study reports quantitative PK parameters (residence time, tissue penetration ratios) for flurithromycin in humans, though standard compartmental values (CL, V) are not explicitly listed. |
| `von_1995.pdf` | von Rosensteil NA et al., Macrolide antibacterials. Drug interact…, Drug safety (1995) | pgx | 7 | [10.2165/00002018-199513020-00005](https://doi.org/10.2165/00002018-199513020-00005) | [7576262](https://www.ncbi.nlm.nih.gov/pubmed/7576262) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-13T11:04:53.113799+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adam_1992 | irrelevant | 1 | 0 | This is a clinical review discussing therapeutic uses and adverse events, containing no original quantitative pharmacokinetic parameter values. |
| popPK | Barzaghi_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetic parameters of carbamazepine (the subject drug) while flurithromycin acts as a co-administered inhibitor/probe, and no flurithromycin PK values are reported. |
| popPK | Biju_2026 | irrelevant | 0 | 0 | The paper is a review on bacterial endophyte metabolites and does not contain pharmacokinetic data for flurithromycin. |
| popPK | Kanfer_1998 | irrelevant | 0 | 0 | The paper is a review of analytical methods (chromatography) for macrolides and does not report pharmacokinetic parameters for flurithromycin. |
| popPK | Mazzei_1993 | irrelevant | 0 | 0 | The paper is a review of the chemistry and mode of action of macrolides and does not report quantitative pharmacokinetic parameters for flurithromycin. |
| popPK | Periti_1992 | irrelevant | 0 | 0 | This is a review discussing macrolide drug interactions and flurithromycin is only mentioned as part of a classification group, with no pharmacokinetic parameters for flurithromycin reported. |
| PGx | von_1995 | not_relevant | 0 | 0 | The paper discusses pharmacokinetic drug-drug interactions involving CYP3A4 inhibition, not pharmacogenomic effects of genetic variants on flurithromycin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-13 11:04 UTC</sub>
