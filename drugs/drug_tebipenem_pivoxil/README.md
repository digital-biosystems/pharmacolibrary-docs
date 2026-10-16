<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01D&quot;,&quot;href&quot;:&quot;atc/J01D.md&quot;},{&quot;label&quot;:&quot;tebipenem pivoxil&quot;}]"></div>

# tebipenem pivoxil

- **generic name:** tebipenem pivoxil
- **ATC codes:** `J01DH06`
- **DrugBank:** [DB16840](https://go.drugbank.com/drugs/DB16840) · **PubChem:** not captured
- **molar mass:** 497.63 g/mol (C22H31N3O6S2) — DrugBank
- **groups:** investigational

## About

Tebipenem pivoxil is an investigational carbapenem (beta-lactam) antibacterial being studied as a treatment for bacterial infections. It is not yet an approved medicine and remains in the investigational stage.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1623593](https://www.wikidata.org/wiki/Q1623593) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tebipenem | metabolite | 383.481 | C16H21N3O4S2 | PubChem | [9800194](https://pubchem.ncbi.nlm.nih.gov/compound/9800194) | Ganesan_2023 |
| tebipenem_pivoxil | metabolite | 497.63 | C22H31N3O6S2 | DrugBank | — | Ganesan_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:37 | 2:34 | 0/0/1 | 1/0/0 | 0/0/0 | 151,239/11,687 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.312). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Ganesan_2023_reference](drugs/drug_tebipenem_pivoxil/TebipenemPivoxil_Ganesan2023_reference.md) | — | 2-compartment (no model) | 7 (+2 cov.) | Ganesan H et al., Population Pharmacokinetic Analyses for…, Antimicrobial agents and ch… (2023) | [10.1128/aac.01451-22](https://doi.org/10.1128/aac.01451-22) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Matsumoto_2014_BC](drugs/drug_tebipenem_pivoxil/pd_Matsumoto_2014_BC.md) | viable in vivo bacterial counts ← tebipenem · disease-progression model | — | Matsumoto K et al., Prediction of clinical bacteriological…, The Japanese journal of ant… (2014) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sato_2008.pdf` | Sato N et al., Population pharmacokinetics of tebipene…, Drug metabolism and pharmac… (2008) | popPK | 10 | [10.2133/dmpk.23.434](https://doi.org/10.2133/dmpk.23.434) | [19122338](https://pubmed.ncbi.nlm.nih.gov/19122338) | The paper is a population PK study for tebipenem pivoxil in pediatric humans, but the evidence provided contains only a summary of the model and covariates without specific numeric parameter values (e.g., median CL/F, Vd/F, ka). |
| `Baba_2009.pdf` | Baba S et al., [Clinical efficacy, safety and PK-PD an…, The Japanese journal of ant… (2009) | popPK | 5 | not captured | [19673357](https://pubmed.ncbi.nlm.nih.gov/19673357) | The study reports PK-PD indices (AUCf/MIC, Cmaxf/MIC) for the active metabolite of tebipenem pivoxil in humans, but lacks absolute quantitative disposition parameters like CL, V, or half-life. |

<sub>queue written 2026-10-15T00:35:27.731299+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baba_2009 | relevant | 5 | 1 | The study reports PK-PD indices (AUCf/MIC, Cmaxf/MIC) for the active metabolite of tebipenem pivoxil in humans, but lacks absolute quantitative disposition parameters like CL, V, or half-life. |
| popPK | Hao_2024 | irrelevant | 4 | 8 | The study is a bioequivalence trial using a non-compartmental model for tebipenem (the metabolite), reporting descriptive statistics (Cmax, AUC, t1/2) rather than the specific population-pharmacokinetic parameters (CL, V, Q, ka) required for a population PK model. |
| popPK | Matsumoto_2014 | irrelevant | 2 | 0 | The paper is a PK-PD modeling simulation using "population pharmacokinetic parameters" obtained from other sources, but it does not report or extract the actual numeric PK values (CL, V, ka) for tebipenem pivoxil itself. |
| popPK | Sato_2008 | relevant | 10 | 0 | The paper is a population PK study for tebipenem pivoxil in pediatric humans, but the evidence provided contains only a summary of the model and covariates without specific numeric parameter values (e.g., median CL/F, Vd/F, ka). |
| popPK | Zhang_2026 | relevant | 7 | 4 | The paper uses a published population PK model for tebipenem (providing parameter equations but not the full distribution of values) to simulate PK/PD outcomes for tebipenem pivoxil in pediatric humans. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:35 UTC</sub>
