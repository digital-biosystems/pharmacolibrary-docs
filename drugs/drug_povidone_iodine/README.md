<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;povidone-iodine&quot;}]"></div>

# povidone-iodine

- **generic name:** povidone-iodine
- **ATC codes:** `D08AG02`, `D09AA09`, `D11AC06`, `G01AX11`, `R02AA15`, `S01AX18`
- **DrugBank:** [DB06812](https://go.drugbank.com/drugs/DB06812) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Povidone-iodine is an iodine-based antiseptic used to disinfect the skin and prevent infection in wounds and other sites. It is widely used in many forms, including skin antiseptics, medicated dressings, shampoos, gynecological, throat, and eye preparations, and is listed as an essential medicine by the WHO.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q241516](https://www.wikidata.org/wiki/Q241516) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| iodine | metabolite | 253.8 | I2 | PubChem | [807](https://pubchem.ncbi.nlm.nih.gov/compound/807) | Eloot_2010 |
| povidone_iodine | metabolite | 364.944 | C6H9I2NO | PubChem | [410087](https://pubchem.ncbi.nlm.nih.gov/compound/410087) | Eloot_2010 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Eloot_2010_reference](drugs/drug_povidone_iodine/PovidoneIodine_Eloot2010_reference.md) | — | 1-compartment (no model) | 2 | Eloot S et al., How to remove accumulated iodine in bur…, Nephrology, dialysis, trans… (2010) | [10.1093/ndt/gfp647](https://doi.org/10.1093/ndt/gfp647) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:40 | 0:13 | 0/1/0 | 0/0/0 | 0/0/0 | 12,605/1,064 | einfracz / qwen3.8-27b | 3 | 3/0 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Eloot_2010.pdf` | Eloot S et al., How to remove accumulated iodine in bur…, Nephrology, dialysis, trans… (2010) | popPK | 7 | [10.1093/ndt/gfp647](https://doi.org/10.1093/ndt/gfp647) | [19965987](https://pubmed.ncbi.nlm.nih.gov/19965987) | The paper reports quantitative two-compartment PK parameters (V1, V2, K12) for iodine (the active moiety of povidone-iodine) in human burn patients. |
| `Park_2014.pdf` | Park KH et al., In vitro and in vivo efficacy of drugs…, Journal of fish diseases (2014) | pd | 4 | [10.1111/jfd.12104](https://doi.org/10.1111/jfd.12104) | [23952334](https://www.ncbi.nlm.nih.gov/pubmed/23952334) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T22:40:31.376564+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anderson_2015 | not_relevant | 0 | 0 | The paper studies the antimicrobial efficacy of povidone-iodine against bacteria and contains no pharmacogenomic or pharmacokinetic/pharmacodynamic analysis in humans. |
| PGx | Aydamirov_2023 | not_relevant | 0 | 0 | The paper evaluates the in vitro antiviral efficacy of povidone iodine and does not report any genetic variation affecting its pharmacokinetic or pharmacodynamic parameters. |
| PGx | Hsieh_2020 | not_relevant | 0 | 0 | The paper reports microbiological susceptibility (MAC) of an alga to a disinfectant, not human pharmacokinetics or pharmacodynamics influenced by genetic variants. |
| popPK | Morettin_2023 | irrelevant | 0 | 0 | The study reports on viral titers and clinical signs for adenoviral conjunctivitis, not pharmacokinetic parameters for povidone-iodine. |
| PGx | Padzik_2018 | not_relevant | 0 | 0 | The paper investigates anti-amoebic efficacy (infection control), not the effect of a genetic variant on a PK or PD parameter of povidone iodine in humans. |
| popPK | Park_2014 | irrelevant | 0 | 0 | no_text gate: only 175 chars of text extracted (&lt; 400) |
| PD | Park_2014 | not_relevant | 0 | 0 | The paper focuses on the efficacy of drugs against a protozoan parasite in ascidians and does not mention povidone-iodine or report any pharmacodynamic parameters for it. |
| PGx | Sobukawa_2011 | not_relevant | 0 | 0 | The study evaluates the algaecide efficacy of povidone iodine against fungal genotypes, not the pharmacokinetics or pharmacodynamics in a human host influenced by human genetic variants. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 22:40 UTC</sub>
