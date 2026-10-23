<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferric hydroxide&quot;}]"></div>

# ferric hydroxide

- **generic name:** ferric hydroxide
- **ATC codes:** `B03AB04`
- **DrugBank:** [DB13423](https://go.drugbank.com/drugs/DB13423) · **PubChem:** not captured
- **molar mass:** 106.866 g/mol (FeH3O3) — DrugBank
- **groups:** investigational

## About

Ferric hydroxide is a trivalent iron compound classified as an oral iron preparation, a class of medicines used to treat anaemia. It appears to be investigational rather than an established marketed medicine, with no authorisation record found in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15491377](https://www.wikidata.org/wiki/Q15491377) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 19:58 | 0:38 | 0/0/0 | 0/0/0 | 0/0/0 | 23,350/859 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/4 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 2  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Geisser_1984.pdf` | Geisser P et al., Iron pharmacokinetics after administrat…, Arzneimittel-Forschung (1984) | popPK | 9 | not captured | [6543131](https://pubmed.ncbi.nlm.nih.gov/6543131) | The study reports pharmacokinetic parameters (clearance, volume, elimination constants) for ferric-hydroxide-polymaltose complex in rats, but the specific numeric values are not present in the provided evidence text. |
| `Geisser_1987.pdf` | Geisser P et al., Pharmacokinetics of iron salts and ferr…, Arzneimittel-Forschung (1987) | popPK | 8 | not captured | [3566862](https://pubmed.ncbi.nlm.nih.gov/3566862) | The study reports pharmacokinetic parameters (invasion/elimination constants, distribution volumes) for ferric hydroxide-polymaltose complex in rats, but the specific numeric values are not present in the provided evidence. |

<sub>queue written 2026-10-05T19:58:36.255078+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cao_2025 | irrelevant | 2 | 1 | The study models the pharmacokinetics of ferric carboxymaltose (FCM), not ferric hydroxide, and while FCM contains a ferric hydroxide core, the reported parameters (Kpt, clearance rates) are for the FCM formulation/iron distribution, not the specific drug entity ferric hydroxide. |
| popPK | Geisser_1984 | relevant | 9 | 2 | The study reports pharmacokinetic parameters (clearance, volume, elimination constants) for ferric-hydroxide-polymaltose complex in rats, but the specific numeric values are not present in the provided evidence text. |
| popPK | Geisser_1987 | relevant | 8 | 0 | The study reports pharmacokinetic parameters (invasion/elimination constants, distribution volumes) for ferric hydroxide-polymaltose complex in rats, but the specific numeric values are not present in the provided evidence. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a general review of pharmacokinetic modeling for nanoparticles and does not report specific quantitative PK parameters for ferric hydroxide. |
| PD | Parrot_2026 | not_relevant | 0 | 0 | The text is a review of pharmacokinetic modeling frameworks for nanoparticles and does not report any specific pharmacodynamic or exposure-response data for ferric hydroxide. |
| popPK | Stefanelli_1984 | irrelevant | 2 | 0 | The study uses ferric hydroxide phosphate colloid as a tracer to label reticuloendothelial iron pools, reporting iron pool sizes (mumol) rather than pharmacokinetic disposition parameters (CL, V, ka) for the drug itself. |
| popPK | Takada_2022 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for roxadustat, not ferric hydroxide. |
| PD | Takada_2022 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for roxadustat, not ferric hydroxide, and contains no pharmacodynamic (PD) or exposure-response analysis. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
