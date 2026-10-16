<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12C&quot;,&quot;href&quot;:&quot;atc/A12C.md&quot;},{&quot;label&quot;:&quot;sodium selenite&quot;}]"></div>

# sodium selenite

- **generic name:** sodium selenite
- **ATC codes:** `A12CE02`, `B05XA20`
- **DrugBank:** [DB11127](https://go.drugbank.com/drugs/DB11127) · **PubChem:** [CID 1091](https://pubchem.ncbi.nlm.nih.gov/compound/1091)
- **molar mass:** 128.97 g/mol (H2O3Se) — DrugBank
- **groups:** approved

## About

Sodium selenite is a selenium supplement used to treat or prevent selenium deficiency. It is an approved mineral supplement and is also used as an additive in intravenous electrolyte solutions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q414626](https://www.wikidata.org/wiki/Q414626) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| selenite | metabolite | 126.968 | O3Se-2 | PubChem | [1090](https://pubchem.ncbi.nlm.nih.gov/compound/1090) | Jayachandran_2021 |
| selenium | metabolite | 78.971 | Se | PubChem | [6326970](https://pubchem.ncbi.nlm.nih.gov/compound/6326970) | Guo_1991 |
| sodium_selenite (sodium selenite) | metabolite | 128.97 | H2O3Se | DrugBank | [1091](https://pubchem.ncbi.nlm.nih.gov/compound/1091) | Guo_1991, Jayachandran_2021, Zheng_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:55 | 6:36 | 1/1/1 | 0/0/0 | 0/0/0 | 68,738/22,615 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.7), gpt-oss:120b (not confirmed, agreement 0.727). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Jayachandran_2021_reference](drugs/drug_sodium_selenite/SodiumSelenite_Jayachandran2021_reference.md) | held back | 1-compartment, oral | 3 | Jayachandran P et al., Clinical Pharmacokinetics of Oral Sodiu…, Drugs in R&D (2021) | [10.1007/s40268-021-00340-9](https://doi.org/10.1007/s40268-021-00340-9) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.095), gpt-oss:120b (not confirmed, agreement 0.095). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q20 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Guo_1991_reference](drugs/drug_sodium_selenite/SodiumSelenite_Guo1991_reference.md) | — | 1-compartment (no model) | 8 | Guo JA et al., [Pharmacokinetics of sodium selenite in…, Zhongguo yao li xue bao = A… (1991) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2), gpt-oss:120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">bird</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Zheng_2019_reference](drugs/drug_sodium_selenite/SodiumSelenite_Zheng2019_reference.md) | — | 1-compartment (no model) | 3 | Zheng S et al., Pharmacokinetics of Sodium Selenite Adm…, Biological trace element re… (2019) | [10.1007/s12011-018-1567-8](https://doi.org/10.1007/s12011-018-1567-8) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sodium_selenite).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | lung | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GPX1 (activator), SELENOP (transporter), TXNRD1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Guo_1991.pdf` | Guo JA et al., [Pharmacokinetics of sodium selenite in…, Zhongguo yao li xue bao = A… (1991) | popPK | 10 | not captured | [1664167](https://pubmed.ncbi.nlm.nih.gov/1664167) | The paper reports quantitative compartmental pharmacokinetic parameters (CL, Vc, half-lives) for sodium selenite in humans, with all numeric values explicitly provided in the text. |
| `Zeng_2020.pdf` | Zeng X et al., Pharmacokinetics of Sodium Selenite in…, Biological trace element re… (2020) | popPK | 10 | [10.1007/s12011-019-01928-8](https://doi.org/10.1007/s12011-019-01928-8) | [31656014](https://pubmed.ncbi.nlm.nih.gov/31656014) | The study reports compartmental PK models for sodium selenite in rats, but the specific numeric parameter values are not present in the provided evidence. |
| `Zheng_2019.pdf` | Zheng S et al., Pharmacokinetics of Sodium Selenite Adm…, Biological trace element re… (2019) | popPK | 10 | [10.1007/s12011-018-1567-8](https://doi.org/10.1007/s12011-018-1567-8) | [30465172](https://pubmed.ncbi.nlm.nih.gov/30465172) | The study reports quantitative pharmacokinetic parameters (half-lives, Tmax, dosing intervals) for sodium selenite in ducklings, with key values provided in the abstract. |

<sub>queue written 2026-10-05T09:49:01.226585+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Zeng_2020 | relevant | 10 | 0 | The study reports compartmental PK models for sodium selenite in rats, but the specific numeric parameter values are not present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 09:49 UTC</sub>
