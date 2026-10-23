<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;ceruletide&quot;}]"></div>

# ceruletide

- **generic name:** ceruletide
- **ATC codes:** `V04CC04`
- **DrugBank:** [DB00403](https://go.drugbank.com/drugs/DB00403) · **PubChem:** [CID 16129675](https://pubchem.ncbi.nlm.nih.gov/compound/16129675)
- **molar mass:** 1352.405 g/mol (C58H73N13O21S2) — DrugBank
- **groups:** approved

## About

Ceruletide is a diagnostic agent used in tests for bile duct patency. It is an approved drug, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5065299](https://www.wikidata.org/wiki/Q5065299) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Zetler_1984_smooth_muscle_contraction_isolated_intestinal_preparations_and_gallbladders](drugs/drug_ceruletide/pd_Zetler_1984_smooth_muscle_contraction_isolated_intestinal_pr.md) | smooth muscle contraction (isolated intestinal preparations and gallbladders) ← ceruletide · direct Emax (saturable) effect | — | Zetler G, Ceruletide, ceruletide analogues and ch…, Peptides (1984) | [10.1016/0196-9781(84)90014-7](https://doi.org/10.1016/0196-9781(84)90014-7) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:26 | 0:13 | 0/0/0 | 0/1/0 | 0/0/0 | 13,215/774 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Verme_1990.pdf` | Verme TB et al., Regulation of pancreatic duct epithelia…, The American journal of phy… (1990) | pd | 4 | [10.1152/ajpgi.1990.258.6.G833](https://doi.org/10.1152/ajpgi.1990.258.6.G833) | [2193537](https://www.ncbi.nlm.nih.gov/pubmed/2193537) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T21:26:19.261514+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Flandez_2014 | not_relevant | 0 | 0 | Paper studies Nr5a2 in pancreatitis/tumorigenesis; caerulein is an experimental inducer, no gene variant effect on drug PK/PD parameters reported. |
| popPK | Harro_1993 | irrelevant | 0 | 0 | In-vitro rat cortical slice electrophysiology study using caerulein as a receptor agonist, with no PK parameters reported. |
| popPK | Morisset_1989 | irrelevant | 0 | 0 | This is a pharmacodynamic study of EGF and caerulein effects on pancreatic secretion in rats; no PK disposition parameters for caerulein are reported. |
| PGx | Tanoğlu_2021 | not_relevant | 1 | 3 | Study measures gene expression (Abcc2/5, Abcg2) as disease/treatment markers, not a genotype effect on ceruletide PK/PD parameters. |
| popPK | Verme_1990 | irrelevant | 0 | 0 | In-vitro cell growth study where caerulein is only a tested trophic factor; no PK parameters reported. |
| popPK | Zetler_1984 | irrelevant | 0 | 0 | In-vitro pharmacodynamic potency study (EC50/Emax) of ceruletide on isolated tissues, no PK disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
