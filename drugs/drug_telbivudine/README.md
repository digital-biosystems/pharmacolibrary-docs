<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;telbivudine&quot;}]"></div>

# telbivudine

- **generic name:** telbivudine
- **ATC codes:** `J05AF11`
- **DrugBank:** [DB01265](https://go.drugbank.com/drugs/DB01265) · **PubChem:** [CID 159269](https://pubchem.ncbi.nlm.nih.gov/compound/159269)
- **molar mass:** 242.2286 g/mol (C10H14N2O5) — DrugBank
- **groups:** approved, withdrawn

## About

Telbivudine is a nucleoside analogue antiviral that was used to treat chronic hepatitis B. It is no longer available in the European Union, where its marketing authorisation has been withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q413621](https://www.wikidata.org/wiki/Q413621) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| telbivudine | parent | 242.229 | C10H14N2O5 | DrugBank | [159269](https://pubchem.ncbi.nlm.nih.gov/compound/159269) | Zhou_2006 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 3 | L/h | 50.0 mL/min | adults with chronic hepatitis B virus infection | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Zhou_2006_reference](drugs/drug_telbivudine/Telbivudine_Zhou2006_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub> | [Zhou_2006_reference](drugs/drug_telbivudine/Telbivudine_Zhou2006_reference.md) | — | 1-compartment (no model) | 3 | Zhou XJ et al., Pharmacokinetics of telbivudine followi…, Antimicrobial agents and ch… (2006) | [10.1128/AAC.50.3.874-879.2006](https://doi.org/10.1128/AAC.50.3.874-879.2006) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Soto_2018_BATA](drugs/drug_telbivudine/pd_Soto_2018_BATA.md) | taste aversiveness (licking suppression, brief-access taste aversion) ← telbivudine · direct Emax (saturable) effect | — | Soto J et al., Rats can predict aversiveness of Active…, European journal of pharmac… (2018) | [10.1016/j.ejpb.2018.09.027](https://doi.org/10.1016/j.ejpb.2018.09.027) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=telbivudine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DNA (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:26 | 1:53 | 1/0/0 | 1/0/0 | 0/0/0 | 92,758/7,144 | ollama / glm-5.3-flash | 3 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhou_2009.pdf` | Zhou XJ et al., Population pharmacokinetics of telbivud…, Journal of clinical pharmac… (2009) | popPK | 10 | [10.1177/0091270009333555](https://doi.org/10.1177/0091270009333555) | [19395586](https://pubmed.ncbi.nlm.nih.gov/19395586) | Population PK model of telbivudine in humans, but no numeric parameter values (CL, V, etc.) are present in the evidence text. |

<sub>queue written 2026-10-07 16:25 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Jiang_2016 | irrelevant | 0 | 0 | This is a renal-function (eGFR) outcome study in CHB patients, not a PK study; no CL, V, ka, half-life, or population-PK parameters for telbivudine are reported. |
| popPK | Lee_2014 | irrelevant | 0 | 0 | This is an efficacy/renal-function (eGFR) outcome study with no PK parameters (CL, V, ka, half-life, or PK model) for telbivudine. |
| popPK | Ren_2017 | irrelevant | 0 | 0 | Telbivudine is only mentioned as a comparator; the PK data concern GLS4, and no numeric PK parameters appear. |
| popPK | Soto_2018 | irrelevant | 0 | 0 | This is a taste-aversion study; telbivudine is only one of nine tested compounds and no PK parameters are reported. |
| popPK | Zhou_2009 | relevant | 10 | 3 | Population PK model of telbivudine in humans, but no numeric parameter values (CL, V, etc.) are present in the evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btelbivudine%5D&body=Drug%3A%20telbivudine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_telbivudine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 16:25 UTC</sub>
