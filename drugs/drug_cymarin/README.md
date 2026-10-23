<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01A&quot;,&quot;href&quot;:&quot;atc/C01A.md&quot;},{&quot;label&quot;:&quot;cymarin&quot;}]"></div>

# cymarin

- **generic name:** cymarin
- **ATC codes:** `C01AC03`
- **DrugBank:** [DB13240](https://go.drugbank.com/drugs/DB13240) · **PubChem:** not captured
- **molar mass:** 548.673 g/mol (C30H44O9) — DrugBank
- **groups:** experimental

## About

Cymarin is a Strophanthus cardiac glycoside with cardiotonic and antiarrhythmic activity, historically used for heart conditions. It is currently considered experimental and does not appear to be an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5199357](https://www.wikidata.org/wiki/Q5199357) and the WHO ATC classification; not checked by a person.</small>

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
| 2026-10-06 01:58 | 1:04 | 0/0/0 | 0/0/0 | 0/0/0 | 44,121/693 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/2 | 2/2 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Strobach_1986.pdf` | Strobach H et al., Absorption, metabolism and elimination…, Naunyn-Schmiedeberg's archi… (1986) | popPK | 8 | [10.1007/BF00569392](https://doi.org/10.1007/BF00569392) | [3821940](https://pubmed.ncbi.nlm.nih.gov/3821940) | The study reports quantitative PK parameters for cymarin in humans, including bioavailability (47%) and elimination half-life (13 h i.v., 23 h p.o.), but lacks explicit clearance or volume of distribution values. |
| `Gozalpour_2014.pdf` | Gozalpour E et al., Convallatoxin: a new P-glycoprotein sub…, European journal of pharmac… (2014) | pgx | 7 | [10.1016/j.ejphar.2014.09.031](https://doi.org/10.1016/j.ejphar.2014.09.031) | [25264938](https://www.ncbi.nlm.nih.gov/pubmed/25264938) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-10-06T01:58:10.487201+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Carucci_2023 | irrelevant | 0 | 0 | The paper is a malaria drug screening study where cymarin (listed as Cymarine) is only a compound in a library table with in-vitro IC50 values, and no pharmacokinetic parameters are reported for it. |
| PGx | Gozalpour_2013 | not_relevant | 0 | 0 | The paper investigates the binding affinity of cymarin to P-glycoprotein mutants in vitro, which is a mechanistic study of transporter interaction, not a report of a pharmacogenomic effect on a pharmacokinetic or pharmacodynamic parameter in a clinical or physiological context. |
| popPK | Gozalpour_2014 | irrelevant | 0 | 0 | The study focuses on convallatoxin and P-glycoprotein transport, not the pharmacokinetics of cymarin. |
| PGx | Gozalpour_2014 | not_relevant | 0 | 0 | The paper studies convallatoxin, not cymarin, and focuses on transporter interactions rather than pharmacogenomic effects on cymarin PK/PD. |
| popPK | Hori_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion flux in guinea-pig muscle where cymarin is used as a pharmacological tool, not a PK study. |
| PD | Hori_1988 | not_relevant | 1 | 1 | The paper reports a single qualitative inhibition of palytoxin-induced K+ efflux by cymarin at a fixed concentration (3 x 10^-8 M) without providing a dose-response curve or numeric PD parameters (e.g., IC50, Emax) for cymarin. |
| popPK | Ozaki_1985 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of palytoxin and cardiac glycosides on ATPase, not a pharmacokinetic study of cymarin. |
| popPK | Shang_2020 | irrelevant | 0 | 0 | The study investigates the acaricidal mechanism and active compounds of a plant extract, with cymarin serving only as a mechanistic target ligand, and contains no pharmacokinetic data. |
| PGx | Tzeng_2026 | not_relevant | 0 | 0 | The paper investigates cymarin as a therapeutic agent targeting ANT2 in breast cancer, but does not report any pharmacogenomic effects (gene variants altering PK/PD) of cymarin. |
| popPK | van_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of PPARα transactivation and apoA-I transcription, not a pharmacokinetic study. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
