<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;bupropion&quot;}]"></div>

# bupropion

- **generic name:** bupropion
- **ATC codes:** `A08AA62`, `N06AX12`, `N06AX62`
- **DrugBank:** [DB01156](https://go.drugbank.com/drugs/DB01156) · **PubChem:** [CID 444](https://pubchem.ncbi.nlm.nih.gov/compound/444)
- **molar mass:** 239.741 g/mol (C13H18ClNO) — DrugBank
- **groups:** approved, investigational

## About

Bupropion is an antidepressant used mainly for major depressive disorder and to help people stop smoking. It is an approved medicine in widespread clinical use, and is also being studied for other conditions such as ADHD.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q834280](https://www.wikidata.org/wiki/Q834280) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bupropion | parent | 239.741 | C13H18ClNO | DrugBank | [444](https://pubchem.ncbi.nlm.nih.gov/compound/444) | Butz_1981 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Butz_1981_reference](drugs/drug_bupropion/Bupropion_Butz1981_reference.md) | — | 1-compartment (no model) | 1 | Butz RF et al., Radioimmunoassay and pharmacokinetic pr…, The Journal of pharmacology… (1981) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 20:21 | 1:37 | 0/1/0 | 0/0/0 | 0/0/0 | 12,316/3,730 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 135 matched, 15 returned
- **screened:** 4  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Butz_1981.pdf` | Butz RF et al., Radioimmunoassay and pharmacokinetic pr…, The Journal of pharmacology… (1981) | popPK | 9 | not captured | [6785419](https://pubmed.ncbi.nlm.nih.gov/6785419) | The study reports quantitative PK parameters (half-life, bioavailability, peak levels) for bupropion in dogs, though specific clearance and volume values are not explicitly listed in the text. |
| `Wang_2006.pdf` | Wang JS et al., Population pharmacokinetic analysis of…, Psychopharmacology (2006) | popPK | 8 | [10.1007/s00213-005-0209-y](https://doi.org/10.1007/s00213-005-0209-y) | [16283256](https://pubmed.ncbi.nlm.nih.gov/16283256) | The study is a population PK analysis in mice involving bupropion, but specific numeric PK parameters (CL, V, ka) for bupropion are not explicitly listed in the provided text, only relative changes in AUC and half-life for other drugs or qualitative statements. |

<sub>queue written 2026-10-04T20:19:54.508158+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Wang_2006 | relevant | 8 | 2 | The study is a population PK analysis in mice involving bupropion, but specific numeric PK parameters (CL, V, ka) for bupropion are not explicitly listed in the provided text, only relative changes in AUC and half-life for other drugs or qualitative statements. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-04 20:20 UTC</sub>
