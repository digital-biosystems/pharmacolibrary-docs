<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C10A&quot;,&quot;href&quot;:&quot;atc/C10A.md&quot;},{&quot;label&quot;:&quot;acipimox&quot;}]"></div>

# acipimox

- **generic name:** acipimox
- **ATC codes:** `C10AD06`
- **DrugBank:** [DB09055](https://go.drugbank.com/drugs/DB09055) · **PubChem:** [CID 5310993](https://pubchem.ncbi.nlm.nih.gov/compound/5310993)
- **molar mass:** 154.125 g/mol (C6H6N2O3) — DrugBank
- **groups:** approved, investigational

## About

Acipimox is a lipid-lowering agent used to treat high blood lipid levels. It is a nicotinic acid derivative that has been approved, but it is not authorised in the European Union and appears to be used only in a limited number of countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2342544](https://www.wikidata.org/wiki/Q2342544) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:46 | 0:25 | 0/0/0 | 0/0/0 | 0/0/0 | 5,043/259 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chijioke_1992.pdf` | Chijioke CP et al., Lack of acipimox-digoxin interaction in…, Human & experimental toxico… (1992) | popPK | 8 | [10.1177/096032719201100509](https://doi.org/10.1177/096032719201100509) | [1358150](https://pubmed.ncbi.nlm.nih.gov/1358150) | The study reports acipimox pharmacokinetic parameters (clearance, half-life) in humans, but the specific numeric values are not present in the provided evidence. |
| `Musatti_1981.pdf` | Musatti L et al., Bioavailability and pharmacokinetics in…, The Journal of internationa… (1981) | popPK | 8 | [10.1177/030006058100900515](https://doi.org/10.1177/030006058100900515) | [7028536](https://pubmed.ncbi.nlm.nih.gov/7028536) | The study reports pharmacokinetic parameters for acipimox in humans, including a half-life of about 2 h and a one-compartment model, but specific numeric values for clearance, volume, or absorption rate are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T09:46:18.857480+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chijioke_1992 | relevant | 8 | 0 | The study reports acipimox pharmacokinetic parameters (clearance, half-life) in humans, but the specific numeric values are not present in the provided evidence. |
| popPK | Musatti_1981 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for acipimox in humans, including a half-life of about 2 h and a one-compartment model, but specific numeric values for clearance, volume, or absorption rate are not explicitly listed in the provided text. |
| popPK | Roelfsema_2012 | irrelevant | 0 | 0 | The study focuses on the ACTH-cortisol axis in obesity, and acipimox is only mentioned as a co-administered agent that did not change the dose-response curve, with no PK parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
