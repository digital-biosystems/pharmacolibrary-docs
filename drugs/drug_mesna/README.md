<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R05C&quot;,&quot;href&quot;:&quot;atc/R05C.md&quot;},{&quot;label&quot;:&quot;mesna&quot;}]"></div>

# mesna

- **generic name:** mesna
- **ATC codes:** `R05CB05`, `V03AF01`
- **DrugBank:** [DB09110](https://go.drugbank.com/drugs/DB09110) · **PubChem:** [CID 598](https://pubchem.ncbi.nlm.nih.gov/compound/598)
- **molar mass:** 142.197 g/mol (C2H6O3S2) — DrugBank
- **groups:** approved, investigational

## About

Mesna is a protective agent used to prevent bladder damage in patients receiving certain cancer chemotherapy, and is also classified as a mucolytic for respiratory conditions. It is approved and included on the WHO list of essential medicines, so it remains in widespread clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424997](https://www.wikidata.org/wiki/Q424997) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mesna | parent | 142.197 | C2H6O3S2 | DrugBank | [598](https://pubchem.ncbi.nlm.nih.gov/compound/598) | Smith_2003, el-Yazigi_1997 |
| dimesna | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:50 | 0:57 | 0/1/1 | 0/0/1 | 0/0/0 | 29,055/4,920 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q88, Q307 — no SI value to build fr…</sub><br><sub>route_to: `human_review`</sub> | [Smith_2003_reference](drugs/drug_mesna/Mesna_Smith2003_reference.md) | — | 1-compartment (no model) | 5 | Smith PF et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2003) | [10.1177/0091270003260332](https://doi.org/10.1177/0091270003260332) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [el-Yazigi_1997_reference](drugs/drug_mesna/Mesna_elYazigi1997_reference.md) | — | parent + metabolite (no model) | 11 | el-Yazigi A et al., Pharmacokinetics of mesna and dimesna a…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb04344.x](https://doi.org/10.1002/j.1552-4604.1997.tb04344.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> | [Smith_2003_plasma_cysteine](drugs/drug_mesna/pd_Smith_2003_plasma_cysteine.md) | plasma cysteine ← mesna · direct Emax (saturable) effect | — | Smith PF et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2003) | [10.1177/0091270003260332](https://doi.org/10.1177/0091270003260332) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mesna).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Smith_2003.pdf` | Smith PF et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2003) | popPK | 10 | [10.1177/0091270003260332](https://doi.org/10.1177/0091270003260332) | [14615468](https://pubmed.ncbi.nlm.nih.gov/14615468) | The paper reports specific quantitative pharmacokinetic parameters (Vss, CL, half-life) for mesna in humans. |
| `el-Yazigi_1997.pdf` | el-Yazigi A et al., Pharmacokinetics of mesna and dimesna a…, Journal of clinical pharmac… (1997) | popPK | 10 | [10.1002/j.1552-4604.1997.tb04344.x](https://doi.org/10.1002/j.1552-4604.1997.tb04344.x) | [9243355](https://pubmed.ncbi.nlm.nih.gov/9243355) | The study reports quantitative two-compartment pharmacokinetic parameters (clearance, volume of distribution, half-life) for mesna in humans, with all numeric values explicitly provided in the text. |

<sub>queue written 2026-10-07T21:49:34.521413+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Conklin_2009 | not_relevant | 0 | 0 | The paper studies a gene variant's effect on cyclophosphamide toxicity and reports that mesna prevents this toxicity, but it does not report a pharmacokinetic or pharmacodynamic parameter of mesna itself being altered by the gene variant. |
| popPK | Engin_2021 | irrelevant | 0 | 0 | Mesna is used only as a comparator treatment in a mouse model of cystitis, and no pharmacokinetic parameters for mesna are reported. |
| PGx | Howell_2008 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ifosfamide and aprepitant) affecting toxicity, but does not report pharmacogenomic effects on mesna's PK or PD parameters. |
| PGx | Kellie_1988 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating ifosfamide efficacy and toxicity in neuroblastoma patients and does not contain any data on pharmacogenomics, gene variants, or their effect on mesna PK/PD parameters. |
| PGx | Krum_2002 | not_relevant | 0 | 0 | The paper describes in vitro kinetic and microcalorimetric analysis of a bacterial enzyme (EaCoMT) and its substrate/cofactor interactions, not human pharmacogenomics or mesna PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:49 UTC</sub>
