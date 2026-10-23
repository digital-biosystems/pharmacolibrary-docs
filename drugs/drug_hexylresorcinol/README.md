<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R02A&quot;,&quot;href&quot;:&quot;atc/R02A.md&quot;},{&quot;label&quot;:&quot;hexylresorcinol&quot;}]"></div>

# hexylresorcinol

- **generic name:** hexylresorcinol
- **ATC codes:** `R02AA12`
- **DrugBank:** [DB11254](https://go.drugbank.com/drugs/DB11254) · **PubChem:** [CID 3610](https://pubchem.ncbi.nlm.nih.gov/compound/3610)
- **molar mass:** 194.2701 g/mol (C12H18O2) — DrugBank
- **groups:** approved

## About

Hexylresorcinol is an antiseptic used in throat preparations for sore throat, and has also been used as an anthelmintic. It is an approved drug, used mainly in throat lozenges and similar products.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q229969](https://www.wikidata.org/wiki/Q229969) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Buchholz_2009_INa_block](drugs/drug_hexylresorcinol/pd_Buchholz_2009_INa_block.md) | depolarisation-induced whole-cell sodium inward current block (NaV1.2) ← hexylresorcinol · direct Emax (saturable) effect | — | Buchholz V et al., Topical antiseptics for the treatment o…, Naunyn-Schmiedeberg's archi… (2009) | [10.1007/s00210-009-0416-x](https://doi.org/10.1007/s00210-009-0416-x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:49 | 0:09 | 0/0/0 | 0/1/0 | 0/0/0 | 18,897/531 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arteaga_2012 | irrelevant | 0 | 0 | In vitro electrochemical/DPPH antioxidant assay; hexylresorcinol is only one of many tested compounds, no PK parameters. |
| popPK | Buchholz_2009 | irrelevant | 0 | 0 | In-vitro electrophysiology study of sodium channel blockade; no pharmacokinetic disposition parameters for hexylresorcinol. |
| popPK | Wang_2026 | irrelevant | 0 | 0 | Hexylresorcinol appears only as an endogenous/exhaled metabolite biomarker in an air-pollution study, with no pharmacokinetic parameters or dosing. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
