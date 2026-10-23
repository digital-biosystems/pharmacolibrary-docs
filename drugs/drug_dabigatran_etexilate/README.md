<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;dabigatran etexilate&quot;}]"></div>

# dabigatran etexilate

- **generic name:** dabigatran etexilate
- **ATC codes:** `B01AE07`
- **DrugBank:** [DB06695](https://go.drugbank.com/drugs/DB06695) · **PubChem:** [CID 6445226](https://pubchem.ncbi.nlm.nih.gov/compound/6445226)
- **molar mass:** 627.7332 g/mol (C34H41N7O5) — DrugBank
- **groups:** approved, investigational

## About

Dabigatran etexilate is a direct thrombin inhibitor anticoagulant used to prevent and treat thrombosis, including venous thromboembolism after joint replacement surgery and stroke risk in atrial fibrillation. It is approved and authorised in the European Union and is widely used as an oral anticoagulant.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20078502](https://www.wikidata.org/wiki/Q20078502) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dabigatran etexilate | parent | 627.733 | C34H41N7O5 | DrugBank | [6445226](https://pubchem.ncbi.nlm.nih.gov/compound/6445226) | Liu_2022 |
| dabigatran | metabolite | 471.521 | C25H25N7O3 | PubChem | [216210](https://pubchem.ncbi.nlm.nih.gov/compound/216210) | Liu_2022 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Liu_2022_reference](drugs/drug_dabigatran_etexilate/DabigatranEtexilate_Liu2022_reference.md) | — | 1-compartment (no model) | 1 | Liu YO et al., Population pharmacokinetic analysis for…, Frontiers in cardiovascular… (2022) | [10.3389/fcvm.2022.998751](https://doi.org/10.3389/fcvm.2022.998751) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dabigatran_etexilate).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | `UGT1A9` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CES1` substrate, `CES2` substrate, `UGT1A9` substrate, `UGT2B15` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CES2` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: F2 (inhibitor), NQO2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 14:08 | 2:13 | 1/0/0 | 0/0/0 | 0/0/0 | 32,480/6,226 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Röshammar_2021.pdf` | Röshammar D et al., Pharmacokinetic modeling and simulation…, Journal of thrombosis and h… (2021) | popPK | 10 | [10.1111/jth.15277](https://doi.org/10.1111/jth.15277) | [33636042](https://pubmed.ncbi.nlm.nih.gov/33636042) | The paper describes a population PK model for dabigatran etexilate in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Ollier_2015.pdf` | Ollier E et al., In vitro and in vivo evaluation of drug…, Fundamental & clinical phar… (2015) | popPK | 9 | [10.1111/fcp.12154](https://doi.org/10.1111/fcp.12154) | [26392328](https://pubmed.ncbi.nlm.nih.gov/26392328) | The study reports a population PK model for dabigatran etexilate in humans, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-05T14:06:37.086363+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Halton_2016 | irrelevant | 2 | 0 | The study reports only a single dose-normalized trough concentration and validates an existing adult model, without providing original quantitative PK parameters (CL, V, ka) for the adolescent population. |
| popPK | Liu_2024 | irrelevant | 2 | 0 | The study is a modeling/simulation paper that retrieves PK parameters from previously published literature rather than reporting original quantitative disposition parameters for dabigatran etexilate in the provided evidence. |
| popPK | Ollier_2015 | relevant | 9 | 0 | The study reports a population PK model for dabigatran etexilate in humans, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Röshammar_2021 | relevant | 10 | 0 | The paper describes a population PK model for dabigatran etexilate in children, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-05 14:06 UTC</sub>
