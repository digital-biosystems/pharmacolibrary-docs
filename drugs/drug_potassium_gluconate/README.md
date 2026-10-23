<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A12B&quot;,&quot;href&quot;:&quot;atc/A12B.md&quot;},{&quot;label&quot;:&quot;potassium gluconate&quot;}]"></div>

# potassium gluconate

- **generic name:** potassium gluconate
- **ATC codes:** `A12BA05`
- **DrugBank:** [DB13620](https://go.drugbank.com/drugs/DB13620) · **PubChem:** [CID 16760467](https://pubchem.ncbi.nlm.nih.gov/compound/16760467)
- **molar mass:** 234.245 g/mol (C6H11KO7) — DrugBank
- **groups:** approved

## About

Potassium gluconate is a potassium supplement used to treat or prevent low blood potassium (hypokalemia). It is an approved mineral supplement and is widely available, generally as an oral supplement.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1122870](https://www.wikidata.org/wiki/Q1122870) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=potassium_gluconate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ATP1A1 (substrate), ATP4A (substrate), FXYD2 (inducer), FXYD2 (substrate), SLC12A1 (substrate).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 09:16 | 0:21 | 0/0/0 | 0/0/0 | 0/0/0 | 7,908/403 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 1/2 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Van_1985.pdf` | Van Dyke RW et al., ATP-dependent proton transport by isola…, Biochimica et biophysica ac… (1985) | pd | 5 | [10.1016/0005-2736(85)90317-7](https://doi.org/10.1016/0005-2736(85)90317-7) | [2857093](https://www.ncbi.nlm.nih.gov/pubmed/2857093) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-05T09:16:17.107716+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gomez_2025 | irrelevant | 0 | 0 | The paper describes a chemogenetic study on cocaine addiction in rats and does not involve potassium_gluconate or its pharmacokinetics. |
| PD | Gomez_2025 | not_relevant | 0 | 0 | The paper focuses on cocaine chemogenetics and does not report any pharmacodynamic or exposure-response data for potassium gluconate. |
| popPK | Labouesse_2024 | irrelevant | 0 | 0 | The paper describes a chemogenetic approach for dopamine imaging and does not involve potassium_gluconate or its pharmacokinetics. |
| PD | Labouesse_2024 | not_relevant | 0 | 0 | The paper investigates the pharmacology of DETQ (a dopamine receptor PAM) and does not report any pharmacodynamic or exposure-response data for potassium gluconate. |
| popPK | Lee_2008 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study where potassium gluconate is used as an ionic medium, not as a subject drug for pharmacokinetic analysis. |
| PD | Lee_2008 | not_relevant | 0 | 0 | The paper reports electrophysiological properties of KCNQ1 channels and the IC50 of a blocker (293B), but does not report a pharmacodynamic exposure-response or dose-response relationship for potassium gluconate. |
| popPK | Macdonald-Clarke_2016 | irrelevant | 2 | 0 | The study measures potassium bioavailability and excretion rather than reporting specific pharmacokinetic disposition parameters (CL, V, ka) for potassium gluconate. |
| popPK | Oláh_2026 | irrelevant | 0 | 0 | The paper investigates the mechanism of NMDAR subunits and GABA release in mice, not the pharmacokinetics of potassium_gluconate. |
| PD | Oláh_2026 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of NMDAR modulators and ketamine on GABA release and LTP, and does not contain any pharmacokinetic or pharmacodynamic data for potassium gluconate. |
| popPK | Shimizu_2020 | irrelevant | 0 | 0 | The study investigates drug loss and collection rates during feeding tube administration (delivery mechanics), not pharmacokinetic disposition parameters like clearance or volume. |
| PD | Shimizu_2020 | not_relevant | 0 | 0 | The study evaluates physical drug loss (collection rate) during feeding tube administration, not pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Van_1985 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of proton transport in brain vesicles where potassium gluconate is used only as a salt/anion, not as a subject drug for pharmacokinetic analysis. |
| PD | Van_1985 | not_relevant | 0 | 0 | The paper investigates the mechanism of ATP-dependent proton transport in isolated brain vesicles and does not report a pharmacodynamic exposure-response or dose-response relationship for potassium gluconate as a drug. |
| popPK | Zelmanoff_2025 | irrelevant | 0 | 0 | The paper studies oxytocin signaling and social behavior in mouse pups, with no mention of potassium_gluconate or pharmacokinetic parameters. |
| PD | Zelmanoff_2025 | not_relevant | 0 | 0 | The paper investigates oxytocin signaling in mouse pups and does not mention potassium gluconate or report any pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
