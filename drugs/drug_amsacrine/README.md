<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;amsacrine&quot;}]"></div>

# amsacrine

- **generic name:** amsacrine
- **ATC codes:** `L01XX01`
- **DrugBank:** [DB00276](https://go.drugbank.com/drugs/DB00276) · **PubChem:** [CID 2179](https://pubchem.ncbi.nlm.nih.gov/compound/2179)
- **molar mass:** 393.459 g/mol (C21H19N3O3S) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Amsacrine is an antineoplastic agent that was used to treat cancer, particularly leukaemia. It has been withdrawn from the market and is no longer in routine clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2784004](https://www.wikidata.org/wiki/Q2784004) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amsacrine | parent | 393.459 | C21H19N3O3S | DrugBank | [2179](https://pubchem.ncbi.nlm.nih.gov/compound/2179) | Kestell_1990 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Kestell_1990_reference](drugs/drug_amsacrine/Amsacrine_Kestell1990_reference.md) | — | 1-compartment (no model) | 5 | Kestell P et al., Disposition of amsacrine and its analog…, Cancer research (1990) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 23:02 | 3:04 | 0/1/0 | 0/0/0 | 0/0/0 | 38,296/10,053 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kestell_1990.pdf` | Kestell P et al., Disposition of amsacrine and its analog…, Cancer research (1990) | popPK | 10 | not captured | [2297692](https://pubmed.ncbi.nlm.nih.gov/2297692) | The study reports quantitative pharmacokinetic parameters (Vss, Km, Vmax, AUC, half-lives) for amsacrine in mice, with all numeric values explicitly present in the abstract text. |

<sub>queue written 2026-10-07T22:59:13.462736+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delitheos_1995 | irrelevant | 0 | 0 | The study is an in-vitro investigation of drug sensitivity in yeast (Saccharomyces cerevisiae) and does not report pharmacokinetic parameters for amsacrine. |
| popPK | Hu_2023 | irrelevant | 0 | 0 | The paper is an in vitro study of VEEV protease inhibitors, and amsacrine is only mentioned as a compound that reduces viral replication, with no pharmacokinetic parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 22:59 UTC</sub>
