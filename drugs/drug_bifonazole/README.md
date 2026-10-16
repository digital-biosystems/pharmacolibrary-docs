<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;bifonazole&quot;}]"></div>

# bifonazole

- **generic name:** bifonazole
- **ATC codes:** `D01AC10`
- **DrugBank:** [DB04794](https://go.drugbank.com/drugs/DB04794) · **PubChem:** [CID 2378](https://pubchem.ncbi.nlm.nih.gov/compound/2378)
- **molar mass:** 310.3917 g/mol (C22H18N2) — DrugBank
- **groups:** approved

## About

Bifonazole is an antifungal medicine applied to the skin to treat fungal skin infections. It is an approved topical antifungal, used mainly in dermatological care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421162](https://www.wikidata.org/wiki/Q421162) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:35 | 2:39 | 0/0/0 | 0/1/0 | 0/0/0 | 76,356/1,413 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/0 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Trösken_2004_CYP19_inhibition](drugs/drug_bifonazole/pd_Tr_sken_2004_CYP19_inhibition.md) | inhibition of recombinant human CYP19 (aromatase) ← bifonazole · direct sigmoid Emax (Hill) effect | — | Trösken ER et al., Comparative assessment of the inhibitio…, Endocrine research (2004) | [10.1081/erc-200035093](https://doi.org/10.1081/erc-200035093) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bifonazole).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2B6` unknown, `CYP2E1` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 34 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Milani_2020 | not_relevant | 2 | 0 | The paper identifies bifonazole as a UGT2B10 substrate using in vitro microsomes but does not report in vivo pharmacokinetic or pharmacodynamic data or specific effect sizes for gene variants. |
| PGx | Monostory_2004 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibitory effects of bifonazole on CYP enzymes, not the effect of genetic variants on bifonazole's pharmacokinetics or pharmacodynamics. |
| popPK | Trösken_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of CYP19 inhibition (IC50 values) and does not report pharmacokinetic disposition parameters for bifonazole. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
