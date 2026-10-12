<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;zastaprazan&quot;}]"></div>

# zastaprazan

- **generic name:** zastaprazan
- **ATC codes:** `A02BC12`
- **DrugBank:** [DB21524](https://go.drugbank.com/drugs/DB21524) · **PubChem:** not captured
- **molar mass:** 362.477 g/mol (C22H26N4O) — DrugBank
- **groups:** investigational

## About

Zastaprazan is a proton pump inhibitor being developed for acid-related disorders such as peptic ulcer and gastro-oesophageal reflux disease. It is still investigational and not yet approved for routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q131599122](https://www.wikidata.org/wiki/Q131599122) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zastaprazan | parent | 362.477 | C22H26N4O | DrugBank | — | Yang_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 12:19 | 4:39 | 0/1/0 | 0/0/0 | 0/0/0 | 64,786/14,040 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yang_2024_reference](drugs/drug_zastaprazan/Zastaprazan_Yang2024_reference.md) | — | general linear (no model) | 0 | Yang E et al., Population pharmacokinetic analysis of…, CPT: pharmacometrics & syst… (2024) | [10.1002/psp4.13228](https://doi.org/10.1002/psp4.13228) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hwang_2023.pdf` | Hwang I et al., Randomised clinical trial: Safety, tole…, Alimentary pharmacology & t… (2023) | pgx | 8 | [10.1111/apt.17406](https://doi.org/10.1111/apt.17406) | [36732884](https://www.ncbi.nlm.nih.gov/pubmed/36732884) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Denegri_2026.pdf` | Denegri A et al., Potassium-competitive acid blockers for…, Polish archives of internal… (2026) | pgx | 7 | [10.20452/pamw.17285](https://doi.org/10.20452/pamw.17285) | [42084149](https://www.ncbi.nlm.nih.gov/pubmed/42084149) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |

<sub>queue written 2026-10-04T12:14:59.722644+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Cao_2026 | not_relevant | 0 | 0 | The paper investigates CYP3A-mediated metabolism and drug-drug interactions (DDIs) of zastaprazan, but does not report any pharmacogenomic effects (gene variants/genotypes) on its PK or PD parameters. |
| PGx | Denegri_2026 | not_relevant | 0 | 0 | The paper is a narrative review of efficacy and general pharmacology, and does not report specific pharmacogenomic effects on PK or PD parameters for zastaprazan. |
| PGx | Hwang_2023 | not_relevant | 0 | 0 | The study explicitly states that pharmacogenomic analysis found no genetic variants associated with the exposure of zastaprazan. |
| PGx | Kim_2026 | not_relevant | 0 | 0 | The paper is a general review of zastaprazan's pharmacology and clinical efficacy, reporting no specific pharmacogenomic effects or genotype-based PK/PD variations. |
| PGx | Lee_2024 | not_relevant | 0 | 0 | The paper describes in vitro metabolism and transport characteristics of zastaprazan but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| PD | Liu_2025 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis focused exclusively on pharmacokinetic (PK) parameters (AUC, Cmax, etc.) and drug interactions, with no pharmacodynamic (PD) or exposure-response modeling or numeric PD parameters reported. |
| PGx | Liu_2025 | not_relevant | 0 | 0 | The paper is a systematic review of drug-drug and food-drug interactions for P-CABs and does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Yang_2024 | not_relevant | 0 | 0 | The paper explicitly states that CYP2C19 phenotypes had no significant effect on zastaprazan PK. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 12:15 UTC</sub>
