<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;leniolisib&quot;}]"></div>

# leniolisib

- **generic name:** leniolisib
- **ATC codes:** `L03AX22`
- **DrugBank:** [DB16217](https://go.drugbank.com/drugs/DB16217) · **PubChem:** not captured
- **molar mass:** 450.466 g/mol (C21H25F3N6O2) — DrugBank
- **groups:** approved, investigational

## About

Leniolisib is used to treat primary immunodeficiency diseases. It is authorised in the European Union as an immunomodulating medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27282602](https://www.wikidata.org/wiki/Q27282602) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [De_2024_PI3K](drugs/drug_leniolisib/pd_De_2024_PI3K.md) | PI3Kδ ← leniolisib · inhibition effect | — | De SK, Leniolisib: a novel treatment for activ…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1337436](https://doi.org/10.3389/fphar.2024.1337436) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=leniolisib).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2D6` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate, `ABCG2` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PIK3CD (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:11 | 1:57 | 0/0/0 | 0/1/0 | 0/0/0 | 12,768/954 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `De_2018.pdf` | De Buck S et al., CYP3A but not P-gp plays a relevant rol…, Biopharmaceutics & drug dis… (2018) | popPK | 5 | [10.1002/bdd.2157](https://doi.org/10.1002/bdd.2157) | [30171694](https://pubmed.ncbi.nlm.nih.gov/30171694) | The paper reports PK changes (folds for AUC, Cmax, T1/2) from a human study on leniolisib, but lacks explicit baseline numeric values for clearance, volume, or absolute half-life required for full parameter extraction. |
| `Rao_2017.pdf` | Rao VK et al., Effective "activated PI3Kδ syndrome"-ta…, Blood (2017) | popPK | 5 | [10.1182/blood-2017-08-801191](https://doi.org/10.1182/blood-2017-08-801191) | [28972011](https://pubmed.ncbi.nlm.nih.gov/28972011) | The paper describes a clinical trial involving pharmacokinetic assessment of leniolisib, but the specific quantitative PK parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-06T23:11:41.788728+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lozach_2018 | irrelevant | 0 | 0 | The paper focuses on the validation of the cAMS methodology using a rat ADME study, but does not identify the specific drug (leniolisib) or report its pharmacokinetic parameters. |
| popPK | Rao_2017 | relevant | 5 | 0 | The paper describes a clinical trial involving pharmacokinetic assessment of leniolisib, but the specific quantitative PK parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Rao_2017 | not_relevant | 1 | 0 | The paper describes the therapeutic efficacy of leniolisib in patients with a specific disease (APDS) caused by PIK3CD variants, but it does not report how these genetic variants alter the pharmacokinetic (PK) or pharmacodynamic (PD) parameters of the drug itself compared to other genotypes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
