<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;triprolidine&quot;}]"></div>

# triprolidine

- **generic name:** triprolidine
- **ATC codes:** `R06AX07`
- **DrugBank:** [DB00427](https://go.drugbank.com/drugs/DB00427) · **PubChem:** [CID 5282443](https://pubchem.ncbi.nlm.nih.gov/compound/5282443)
- **molar mass:** 278.3914 g/mol (C19H22N2) — DrugBank
- **groups:** approved

## About

Triprolidine is an antihistamine (H1 antagonist) used for allergic conditions such as atopic dermatitis and giant papillary conjunctivitis. It is an approved drug, classified among other antihistamines for systemic use, and is typically found in combination cold and allergy medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417654](https://www.wikidata.org/wiki/Q417654) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:46 | 0:46 | 0/0/0 | 0/0/0 | 0/0/0 | 32,468/1,196 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=triprolidine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder/regulator | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al-Gadi_1985.pdf` | Al-Gadi M et al., Characterization of histamine receptors…, British journal of pharmaco… (1985) | pd | 4 | [10.1111/j.1476-5381.1985.tb11087.x](https://doi.org/10.1111/j.1476-5381.1985.tb11087.x) | [2994788](https://www.ncbi.nlm.nih.gov/pubmed/2994788) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T21:46:51.490931+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al-Gadi_1985 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| popPK | Arrang_1985 | irrelevant | 0 | 0 | The study is a pharmacological investigation of betahistine's receptor actions, and triprolidine is used only as a comparative H1-antagonist for Ki determination, with no pharmacokinetic data reported. |
| popPK | Bell_2000 | irrelevant | 0 | 0 | Triprolidine is used solely as a pharmacological tool compound (H1 antagonist) in an in vitro electrophysiology study, with no pharmacokinetic parameters reported. |
| popPK | Claro_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor pharmacology using triprolidine as a competitive antagonist, not a pharmacokinetic study of triprolidine disposition. |
| popPK | Crawford_1992 | irrelevant | 0 | 0 | The study investigates histamine receptor signaling mechanisms in bovine cells and uses triprolidine only as a qualitative antagonist, providing no pharmacokinetic data. |
| popPK | Gespach_1989 | irrelevant | 0 | 0 | The study is a pharmacological investigation of histamine receptor binding and adenylate cyclase activity, not a pharmacokinetic study, and triprolidine is used only as a reference antagonist. |
| popPK | Greenman_1995 | irrelevant | 0 | 0 | The study is a chronic oncogenicity/toxicology trial in mice that reports histopathological findings and body weight changes, but contains no quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Lach_1993 | irrelevant | 0 | 0 | The study is an in vitro pharmacology paper on guinea pig lung contraction where triprolidine is used only as an antagonist tool to rule out a mechanism, not a PK subject. |
| popPK | Santos_1995 | irrelevant | 0 | 0 | The study is an in vitro electrophysiology experiment on snail neurons using triprolidine as a pharmacological antagonist, not a pharmacokinetic study. |
| popPK | Sarem-Aslani_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic study of gastric mucosal cells using triprolidine as an antagonist probe, reporting receptor Ki values but no pharmacokinetic disposition parameters (CL, V, etc.). |
| popPK | Sharif_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacology study characterizing histamine receptors in conjunctival cells, not a pharmacokinetic study of triprolidine. |
| popPK | Tzeng_2018 | irrelevant | 0 | 0 | The study examines spinal anesthesia potency (ED50) and duration in rats, not the systemic pharmacokinetic disposition parameters (CL, V, ka) required for the target. |
| popPK | Xu_1987 | irrelevant | 0 | 0 | The study is an in vitro receptor pharmacology investigation where triprolidine is used solely as a functional antagonist to identify H1 receptors, with no pharmacokinetic parameters reported. |
| popPK | Zawilska_2002 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study in chick cerebral cortex where triprolidine is used only as a comparative antagonist to characterize histamine receptors, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
