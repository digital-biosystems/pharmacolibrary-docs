<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;levamlodipine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Levamlodipine_Li2025_base&quot;,&quot;label&quot;:&quot;Li_2025_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levamlodipine/Levamlodipine_Li2025_base.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Levamlodipine_Li2025_final&quot;,&quot;label&quot;:&quot;Li_2025_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_levamlodipine/Levamlodipine_Li2025_final.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# levamlodipine

- **generic name:** levamlodipine
- **ATC codes:** `C08CA17`
- **DrugBank:** [DB09237](https://go.drugbank.com/drugs/DB09237) · **PubChem:** [CID 9822750](https://pubchem.ncbi.nlm.nih.gov/compound/9822750)
- **molar mass:** 408.88 g/mol (C20H25ClN2O5) — DrugBank
- **groups:** approved, investigational

## About

Levamlodipine, the single active enantiomer of amlodipine, is a calcium channel blocker used to treat high blood pressure. It is an approved medicine and is used in some countries as an alternative to standard amlodipine, though it is not authorised across the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6534831](https://www.wikidata.org/wiki/Q6534831) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| levamlodipine | parent | 408.88 | C20H25ClN2O5 | DrugBank | [9822750](https://pubchem.ncbi.nlm.nih.gov/compound/9822750) | Li_2025 |
| levamlodipine besylate | metabolite | 567.05 | C26H31ClN2O8S | PubChem | [11365087](https://pubchem.ncbi.nlm.nih.gov/compound/11365087) | Li_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:30 | 4:42 | 2/0/0 | 0/0/0 | 0/0/0 | 70,794/12,920 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714), gpt-oss:120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Li_2025_base](drugs/drug_levamlodipine/Levamlodipine_Li2025_base.md) | ▶ model + simulator | 1-compartment, oral | 3 | Li G et al., Model-Informed Precision Dosing of Leva…, Drug design, development an… (2025) | [10.2147/DDDT.S501762](https://doi.org/10.2147/DDDT.S501762) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.714), gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Li_2025_final](drugs/drug_levamlodipine/Levamlodipine_Li2025_final.md) | ▶ model + simulator | 1-compartment, oral | 3 | Li G et al., Model-Informed Precision Dosing of Leva…, Drug design, development an… (2025) | [10.2147/DDDT.S501762](https://doi.org/10.2147/DDDT.S501762) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=levamlodipine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | ileum | `SLC10A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` substrate, `SLC22A5` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | skeletal muscle | `SLC22A5` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `SLC22A5` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1C (target), CACNA1D (target), NOS2 (inducer), NOS2 (target), NOS3 (inducer), NOS3 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kim_2009.pdf` | Kim KA et al., Effect of cytochrome P450 3A5*3 genotyp…, Chirality (2009) | pgx | 8 | [10.1002/chir.20588](https://doi.org/10.1002/chir.20588) | [18752284](https://www.ncbi.nlm.nih.gov/pubmed/18752284) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |

<sub>queue written 2026-10-07T03:26:02.258781+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Kim_2009 | not_relevant | 0 | 0 | The paper studies amlodipine, not levamlodipine. |
| popPK | Xu_2019 | irrelevant | 0 | 0 | The study is an in-vitro spectroscopic and molecular docking analysis of binding to hemoglobin, not a pharmacokinetic study reporting disposition parameters. |
| PD | Xu_2019 | not_relevant | 0 | 0 | The paper investigates the in vitro binding interaction between levamlodipine and hemoglobin using spectroscopy and docking, not a pharmacodynamic exposure-response or dose-response relationship in a biological system. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:26 UTC</sub>
