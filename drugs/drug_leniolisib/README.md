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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:11 | 1:57 | 0/0/0 | 0/1/0 | 0/0/0 | 12,768/954 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [De_2024_PI3K](drugs/drug_leniolisib/pd_De_2024_PI3K.md) | PI3Kδ ← leniolisib · inhibition effect | — | De SK, Leniolisib: a novel treatment for activ…, Frontiers in pharmacology (2024) | [10.3389/fphar.2024.1337436](https://doi.org/10.3389/fphar.2024.1337436) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2)</sub>
